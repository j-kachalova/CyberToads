## Deployment info
This module has a Dockerfile. To create a docker image follow these instructions:

* cd to module root
* execute gradle task "bootJar"
* docker build -t neu .
* docker run --name neu -p 50002:8080 -d neu


## General info
This module is intended to work with images.

It has a simple REST endpoint (IP_ADDRESS:PORT/proceed) which expecting a bunch of files as the body of the request.

The first one must be known person image.

A simple Python neural network will try to detect the same face at other images. A collection of objects in JSON format will be returned.
An object has two field: filename and result.

### Example:

