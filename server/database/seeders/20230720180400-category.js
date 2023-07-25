/* eslint-disable max-len */
'use strict';

const { CATEGORY_TABLE_NAME } = require('../../utils/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(CATEGORY_TABLE_NAME, [
      {
        id: 'e860214b-8632-4b4e-3333-f19ebf116333',
        name: 'Laptops',
        description: 'Discover a wide selection of powerful laptops to cater to all your computing needs. Whether you\'re a student, a professional, or a tech enthusiast, our collection offers cutting-edge laptops with impressive performance, sleek designs, and advanced features. Explore the latest models from top brands and experience the convenience of portable computing at its best.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-3333-f19ebf116334',
        name: 'Mobile Phones',
        description: 'Stay connected and ahead of the curve with our diverse selection of top-notch mobile phones. Explore the latest advancements in mobile technology, from sleek and compact smartphones to feature-rich flagship devices.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-3333-f19ebf116335',
        name: 'Cameras',
        description: 'Unleash your creativity and capture life\'s precious moments with our exceptional range of cameras. Whether you\'re a professional photographer or an aspiring enthusiast, our collection offers a diverse selection of cameras to suit every skill level and style.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-3333-f19ebf116336',
        name: 'Smartwatches',
        description: 'Embrace the future of wearable technology with our range of smartwatches. Stay connected, organized, and motivated with these intelligent timepieces that seamlessly blend style and functionality.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-3333-f19ebf116337',
        name: 'Headphones and Earphones',
        description: 'Immerse yourself in the world of pure audio bliss with our carefully curated selection of headphones and earphones. From over-ear headphones that deliver rich, full-bodied sound to wireless earbuds that provide freedom of movement, our range caters to all audiophiles and music enthusiasts.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-3333-f19ebf116338',
        name: 'Speakers',
        description: 'Ignite your senses with our premium collection of speakers that redefine sound. Whether you\'re hosting a party or enjoying a movie night at home, our speakers offer a perfect balance of power and clarity. From portable Bluetooth speakers for on-the-go entertainment to high-fidelity home audio systems that fill every corner of the room with immersive sound.',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return await queryInterface.bulkDelete(CATEGORY_TABLE_NAME, null, {});
  }
};
