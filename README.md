# Book Store Project
### Description

Book Store is a simple single page application (SPA) that lets you buy, rate and leave your comment for all the books that are available in the store. You can also see all of your purchased books history or create your own favorite books list.

`it's Graduation Project for NTI DEY Node JS and Angular`
### Tech

Book Store uses a number of open source projects to work:
* [MongoDB](https://www.mongodb.com) - Free and open-source cross-platform document-oriented database
* [Mongoose](http://mongoosejs.com/index.html) - Elegant MongoDB object modeling for NodeJS
* [NodeJS](https://nodejs.org/en/) - Event I/O for the backend
* [ExpressJS](https://expressjs.com) - Fast, opinionated, minimalist web framework for NodeJS
* [JSONWebToken](https://jwt.io) - Used for authorization and authentication
* [Angular](https://angular.io) - Platform that makes it easy to build applications with the web

### Installation

Book Store requires
* [MongoDB](https://www.mongodb.com/download-center#community) v3.6+
* [NodeJS](https://nodejs.org/en/) v8+

1- First step clone the repo:

```
git clone https://github.com/Abdallahhany/NTI-DEY-Node-JS-and-Angular-Graduation-Project
```

2- To get into backend and run it do the following 

```
cd backend
```

3- Add `.env` file which contain:

`PORT=3000` (for example)

`MONGOURL=` specify your database URL

`JWT_SECRET=` add secret key for JWT

4- Run to install the required packages
```
npm install
``` 

5- start the backend
```
npm start
```

6- open a new terminal for the frontend and run the following:

to get in frontend folder
```
cd frontend
```
7- install the required packages
```
npm install
```
8- Start the backend
```
npm start
```

### Features

- Anonymous users
    - Login/Register
    - View all books
    - View books details, rating and comments

- Authenticated users
    - Buy books
    - Rate books
    - Comment books
    - View user profiles
    - View his own purchases history
    - Create favorite books list
    - Can change his own avatar

- Admin users
    - Add books to the store
    - Edit books
    - Delete books
    - Edit/Delete offensive user comments
    - Block/Unblock user from commenting
    - Change unappropriated user avatars
### Authors

* [Abdallah Rashed](https://github.com/Abdallahhany)
* [Nada Usama](https://github.com/nadausama17)

