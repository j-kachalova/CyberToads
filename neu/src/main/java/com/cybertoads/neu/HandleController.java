package com.cybertoads.neu;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collection;
import java.util.LinkedList;
import java.util.UUID;

@RestController
public class HandleController {
    private static final Logger log = LoggerFactory.getLogger(HandleController.class);
    private static final String SCRIPT_PATH = "/utility/recognition.py";

    @PostMapping("/proceed")
    public Collection<HandledPerson> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        if (files.length < 2) {
            return new LinkedList<>(); //TODO:
        }

        String currentDir = System.getProperty("user.dir");
        String directoryName = UUID.randomUUID().toString();
        String directoryPath = currentDir + "/" + directoryName;

        try {
            MultipartFile known = files[0];
            String knownDirectoryPath = directoryPath + "/known";
            Files.createDirectories(Path.of(knownDirectoryPath));
            createFile(directoryPath + "/known", known);

            String unknownDirectoryPath = directoryPath + "/unknown";
            Files.createDirectories(Path.of(unknownDirectoryPath));
            for (int i = 1; i < files.length; i++) {
                createFile(unknownDirectoryPath, files[i]);
            }

            executeScript(directoryPath, directoryPath);

            return readFile(directoryPath + "/result.txt");
        } catch (Exception ex) {
            clean(directoryPath);
            //TODO: add details for potential debug
            log.warn(ex.getMessage());
            return new LinkedList<>();
        }
    }

    private void createFile(String directoryPath, MultipartFile file) throws Exception {
        String filePath = directoryPath + "/" + file.getName();
        BufferedWriter writer = new BufferedWriter(new FileWriter(filePath));
        BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
        while (reader.ready()) {
            writer.write(reader.readLine());
        }
        writer.flush();
    }

    private void executeScript(String arg1, String arg2) throws Exception {
        ProcessBuilder processBuilder = new ProcessBuilder().command(String.format("python3 %s \"%s\" \"%s\"",
                SCRIPT_PATH, arg1, arg2));
        Process process = processBuilder.start();
        process.waitFor();
    }

    private Collection<HandledPerson> readFile(String filePath) throws Exception {
        BufferedReader reader = new BufferedReader(new FileReader(filePath));
        Collection<HandledPerson> persons = new LinkedList<>();
        while (reader.ready()) {
            String line = reader.readLine();
            int resultIndex = line.lastIndexOf('[');
            String filename = line.substring(0, resultIndex);
            Boolean result = line.substring(resultIndex - 1).equals("[True]");
            persons.add(new HandledPerson(filename, result));
        }
        return persons;
    }

    private void clean(String directory) {
        deleteFolder(new File(directory));
    }

    private void deleteFolder(File folder) {
        File[] files = folder.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isFile()) {
                    file.delete();
                } else {
                    deleteFolder(file);
                }
            }
        }
        folder.delete();
    }
}
