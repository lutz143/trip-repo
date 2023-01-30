const { User } = require('../models');

const userData = [
  {
    first_name: 'Josh',
    last_name: 'Lutz',
    email_address: 'lutz_143@yahoo.com',
    user_name: 'lutz143',
    password: '',
  },
  {
    first_name: 'Andrea',
    last_name: 'Lutz',
    email_address: 'urbanekam15@yahoo.com',
    user_name: 'urby15',
    password: '',
  },
  {
    first_name: 'David',
    last_name: 'Lutz',
    email_address: 'da440mag@yahoo.com',
    user_name: 'damags69',
    password: '',
  },
  {
    first_name: 'Lora',
    last_name: 'Lutz',
    email_address: 'lllunited@yahoo.com',
    user_name: 'lllunited',
    password: '',
  },
  {
    first_name: 'Rachel',
    last_name: 'Lutz',
    email_address: 'test@yahoo.com',
    user_name: 'rlquake24',
    password: '',
  },


];

const seedUsers = () => User.bulkCreate(userData);

module.exports =  seedUsers;
