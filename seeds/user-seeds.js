const { User } = require('../models');

const userData = [
  {
    first_name: 'Josh',
    last_name: 'Lutz',
    email_address: 'test1@yahoo.com',
    user_name: 'temp1',
    password: '',
  },
  {
    first_name: 'Andrea',
    last_name: 'Lutz',
    email_address: 'test2@yahoo.com',
    user_name: 'temp2',
    password: '',
  },
  {
    first_name: 'David',
    last_name: 'Lutz',
    email_address: 'test3@yahoo.com',
    user_name: 'temp3',
    password: '',
  },
  {
    first_name: 'Lora',
    last_name: 'Lutz',
    email_address: 'test4@yahoo.com',
    user_name: 'temp4',
    password: '',
  },
  {
    first_name: 'Rachel',
    last_name: 'Lutz',
    email_address: 'test5@yahoo.com',
    user_name: 'temp5',
    password: '',
  },


];

const seedUsers = () => User.bulkCreate(userData);

module.exports =  seedUsers;
