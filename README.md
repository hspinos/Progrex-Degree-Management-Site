# 2022Spring-DegreeManagementSite
A web application that will assist graduate students in visualizing their progress within the graduate program.

Members:
Jonathan Nguyen
Nate Agcaoili
Elias Binchamo
Elijah Horowitz
Hayden Spinos

> The following is set to change. I need to actually test this on Windows. (All of my computer are running Linux or MacOS as the host OS). 
> Jonathan Nguyen

# Getting Docker to work on Windows
Head to https://docs.docker.com/desktop/windows/install/ and install Docker. Make sure to follow directions in the **Install Docker Desktop on Windows** very carefully. It is important to make sure **Hyper-V Windows Features** or the **Install Required Windows components for WSL 2 is selected on the configuration page.**

## To run and test only the application container, write the following to the command prompt:
Open a command prompt, cd into the server folder of the project.
```
docker build -t degreeworkspp .         # This will build the docker image
docker run -p 8080:8080 degreeworkspp   # This will run the docker image you just created
``` 
*This will throw an error, but at least you know that the container partially works at this point.*

## To run the application with Redis and MongoDB at the same time, write the following to the command prompt:
```
docker compose up
```

## Accessing the MongoDB container to check the database
Before you begin, make sure that your containers are running
```
docker exec -it mongo bash            # You should have access to the container's shell
mongo admin -u root -p degreeworkspp  # This will give you access to the database's contents
                                      # At this point, you can refer to the MongoDB documentation to begin making queries
```
