const { Destination } = require('../models');

const destinationData = [
  {
    city: 'Charleston',
    state: 'South Carolina',
    country: 'United States',
    latitude: '32.7765° N',
    longitude: '79.9311° W',
  },
  {
    city: 'Charlottesville',
    state: 'Virginia',
    country: 'United States',
    latitude: '38.0293° N',
    longitude: '78.4767° W',
  },
  {
    city: 'Williamsburg',
    state: 'Virginia',
    country: 'United States',
    latitude: '37.2707° N',
    longitude: '76.7075° W',
  },
  {
    city: 'Nashville',
    state: 'Tennessee',
    country: 'United States',
    latitude: '36.1627° N',
    longitude: '86.7816° W',
  },
  {
    city: 'Austin',
    state: 'Texas',
    country: 'United States',
    latitude: '30.2672° N',
    longitude: '97.7431° W',
  },

];

const seedDestinations = () => Destination.bulkCreate(destinationData);

module.exports = seedDestinations;
