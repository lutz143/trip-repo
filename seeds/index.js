const sequelize = require('../config/connection');
const { Destination, User, UserTrips } = require('../models');

const seedUsers = require('./user-seeds');
const seedDestinations = require('./destination-seeds');
const seedUserTrips = require('./trip-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedDestinations();
  console.log('\n----- DESTINATIONS SEEDED -----\n');

  await seedUserTrips();
  console.log('\n----- USER TRIPS SEEDED -----\n');

  process.exit(0);
};

seedAll();
