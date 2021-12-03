package com.cybertoads.neu;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FileDto {
    String name;
    String url;

    public InputStream getBodyStream() {
        if (url == null) {
            return new ByteArrayInputStream(new byte[]{});
        }

        return new ByteArrayInputStream(url.getBytes(StandardCharsets.UTF_8));
    }
}
