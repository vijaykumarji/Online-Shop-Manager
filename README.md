# Online-Shop-Manager
Online-Shop-Manager exposed the endpoint REST APIs to manage the online shopping. The project is written in **Node.js** using **Express framework** and 
backhand database is **Mongodb**. However, there is to authentication and authorization support currently which should be managed by User as his\her requirement.   


## Installation

### Tools used
1.	Mongodb 4
2.	Studio 3T
3.	Node 8.11.3
4.	Npm 5.6.0
5.	Postman extension for Chrome (for testing APIs)


###  Installation for Windows

#### Mongodb setup:
```
1.	Download the Mongodb for window and Install it.
https://www.mongodb.com/download-center?jmp=nav
2.	Go to the Mongodb bin folder and fire command for running Mongodb  
mongod --port "PORT" --dbpath "YOUR_DB_DATA_PATH" --replSet "REPLICA_SET_INSTANCE_NAME"

Example
 mongod --port 27017 --dbpath "C:\Data" --replSet rs0
3.	Now Fire the command using new cmd screen
mongo.exe
-  In Mongo client, issue the command rs.initiate() to initiate a new replica set.
-  To check the replica set configuration, issue the command rs.conf(). To check the status of replica set issue the command rs.status().
More detais: https://docs.mongodb.com/manual/reference/method/rs.initiate/

```

#### Studio 3T setup:
```

Import the dummy data using studio 3T 
1.	Connect to the mongodb server in Replica set mode.
2.	Add new database onlineshop.
3.	Import the data from Dummy Data folder to onlineshop database.
More details: https://studio3t.com/download/

```

#### Node and NPM setup:
```
Download and install Node and NPM.
More details:
https://nodejs.org/en/
https://www.npmjs.com/get-npm

```

#### Project setup:
```
1.	Go to the project directory and run following command: 
    npm install
2.	After installing the required package run the command following command to start the Nodejs server.
    node server\app-server.
3.	Test the APIs from API design document using POSTMAN.

```

You can find more details in the **Documentation and Schema** directory.