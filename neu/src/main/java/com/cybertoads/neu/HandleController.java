package com.cybertoads.neu;

import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
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

    @PostMapping("/proceed")
    @ResponseBody
    public Collection<HandledPerson> uploadMultipleFiles(@RequestBody MultipartFile[] files) {
        try {
            String currentDir = System.getProperty("user.dir");
            String directoryName = UUID.randomUUID().toString();
            String directoryPath = currentDir + "/" + directoryName;

            if (files.length < 2) {
                return new LinkedList<>(); //TODO:
            }

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
            //TODO: add details for potential debug
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
        File script = ResourceUtils.getFile("recognition.py");

        ProcessBuilder processBuilder = new ProcessBuilder().command(String.format("python3 %s \"%s\" \"%s\"",
                script.getAbsolutePath(), arg1, arg2));

        Process process = processBuilder.start();
        process.destroy();
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
}
