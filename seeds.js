const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/bankingData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 

const seedUsers = [
    {
        name: 'Umrah',
        email: 'Umrahazargar@gmail.com',
        credits: 10000
    },
    {
        name: 'steeve',
        email: 'steeve@gmail.com',
        credits: 7000
    },
    {
        name: 'andrew',
        email: 'andrew@gmail.com',
        credits: 4500
    },
    {
        name: 'cillian',
        email: 'cillian@yahoo.com',
        credits: 8600
    },
    {
        name: 'Kunika',
        email: 'kunika@gmail.com',
        credits: 7500
    },
    {
        name: 'clark',
        email: 'clark@yahoo.com',
        credits: 6900
    },
    {
        name: 'kareem',
        email: 'kareem@gmail.com',
        credits: 3000
    },
    {
        name: 'john',
        email: 'john@yahoo.com',
        credits: 2100
    },
    {
        name: 'mark',
        email: 'mark@gmail.com',
        credits: 5300
	}
]

User.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log("We got ourselvs an error ladies and gentlemen" ,err))
