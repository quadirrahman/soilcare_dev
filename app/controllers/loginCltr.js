const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dbConfig = require('../config/dbConfig');
// Secret key for JWT
const secretKey = 'quadir123#';
const sequelize = require('./../config/dbConnection');
const User = require('./../models/User')


const loginCltr = {};

loginCltr.login = (req, res) => {
    const { username, password } = req.body;
    console.log('Recieved', username, password)
    
    User.findOne({
        where: {
          username: username
          
        },
      })
        .then((user) => {
          console.log('Found user', user)
          if(user.password != password ) {
            res.status(401).json({ message: 'Invalid username or password' });
          } else {
            const token = jwt.sign({ id: user.user_id, username: user.username, role: user.user_type}, secretKey, { expiresIn: '1h' })
            res.json({token})
          }
        })
        .catch((error) => {
            console.error('Database error:', error);
            res.status(500).json({ message: 'Database error' });
    });
}

module.exports = loginCltr;





// // Protected route
// app.get('/protected', verifyToken, (req, res) => {
//   // The user is authenticated, you can implement your logic here
//   res.json({ message: 'Protected route accessed successfully' });
// });

// // Middleware to verify JWT token

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
