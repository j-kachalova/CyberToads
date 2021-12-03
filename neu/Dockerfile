FROM openjdk:11.0.13-slim-buster
COPY --from=python:3.6 / /

RUN apt-get -y update
RUN apt-get install -y --fix-missing \
    build-essential \
    cmake \
    gfortran \
    git \
    wget \
    curl \
    graphicsmagick \
    libgraphicsmagick1-dev \
    libatlas-base-dev \
    libavcodec-dev \
    libavformat-dev \
    libgtk2.0-dev \
    libjpeg-dev \
    liblapack-dev \
    libswscale-dev \
    pkg-config \
    python3-dev \
    python3-numpy \
    software-properties-common \
    zip \
    && apt-get clean && rm -rf /tmp/* /var/tmp/*

#Since SprinBoot 2.5.0 assemble/build tasks generate 2 jar files: executable and plain.
#To avoid probles with adding, generate only executable JAR by task 'bootJar'
ARG JAR_FILE=build/libs/*.jar
ADD ${JAR_FILE} app.jar

CMD ["java","-jar","/app.jar"]
