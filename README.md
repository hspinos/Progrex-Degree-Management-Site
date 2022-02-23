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

**Click on the following link to download the required kernel update for Docker to run on Windows: https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi**

## To run and test only the application container, write the following to the command prompt:
Open a command prompt, cd into the server folder of the project.
```
docker build -t degreeworkspp .         # This will build the docker image
docker run -p 8080:8080 degreeworkspp   # This will run the docker image you just created
``` 
You can test to see if this work by going to http://localhost:8080 in your browser

*This will throw an error, but at least you know that the container partially works at this point.*

## To run the application with Redis and MongoDB at the same time, write the following to the command prompt:
```
docker compose up                     # Now the MongoDB, Redis, and DegreeWorksPP app should all be running at the same time.
```

## Accessing the MongoDB container to check the database
Before you begin, make sure that your containers are running
```
docker exec -it mongo bash            # You should have access to the container's shell
mongo admin -u root -p degreeworkspp  # This will give you access to the database's contents
                                      # At this point, you can refer to the MongoDB documentation to begin making queries
```
## Testing a query
The following will display a list of users in the user collection while you are in the Mongo shell.
```
use test
db.user.find()
```
```
db.<enter collection here>.find() 
```
Will find and print all the records in the collection that you choose.
Refer to the MongoDB documentation for additional query methods.
The following is an example of how to potentially use the Mongo shell: https://docs.mongodb.com/mongodb-shell/run-commands/

## Starting the client-side
This will have to be run a different terminal.
In order to start the client side, make sure that you have node and npm installed first. 
If you don't already have it installed, here's a link to the node.js site: https://nodejs.org/en/download/

Then follow the code below to run. Make sure that your current directory is 'client' before you begin.
```
npm install                           # This will install all of the required libraries in order to run the client
npm run start                         # This will run the client.
```

In order to access the page, go your browser and access it at http://localhost:3000

A lot of the React.js implementation for the Login and Signup page are based on the new React Beta documentation. 
Heres a link to the learn page: https://beta.reactjs.org/learn
