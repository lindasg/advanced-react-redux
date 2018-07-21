#Build server from scratch

(in server folder)
$ npm init          //create package.json
$ npm install --save express mongoose morgan body-parser

create file index.js;
create .gitignore;

$ node index.js       //run server

$ npm install --save nodemon   //automatically update change during development
Add "dev": "nodemon index.js" in package.json
$ npm run dev

#Install MongoDB (docs.mongodb.org/manual/installation)
(for mac)
$ brew update
$ brew install mongodb
$ sudo mkdir -p /data/db
$ sudo chown -R $USER /data/db
$ mongod    

install robomongo to view data

$ npm install --save bcrypt-nodejs    //popular library to encrypt password before saving to database
$ npm install --save jwt-simple     //use this to encrypt http request token
$ npm install --save passport passport-jwt
$ npm install --save passport-local
