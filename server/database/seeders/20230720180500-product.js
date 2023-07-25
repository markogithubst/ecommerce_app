/* eslint-disable max-len */
'use strict';

const { PRODUCT_TABLE_NAME } = require('../../utils/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(PRODUCT_TABLE_NAME, [
      // Laptops Category
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116111',
        name: 'StellarBook Pro X',
        description: 'The StellarBook Pro X is a sleek and powerful 14-inch laptop featuring a quad-core processor, 16GB of RAM, NVIDIA GeForce graphics, backlit keyboard, fingerprint scanner, Thunderbolt ports, and lightning-fast SSD storage.',
        price: '1200',
        stock: '20',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116333',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116112',
        name: 'ZenTech UltraBook Z550',
        description: 'The ZenTech UltraBook Z550 is a cutting-edge 13.3-inch laptop, boasting an Intel Core i7 processor, 8GB of RAM, Intel Iris Xe graphics, a vibrant Full HD display, ultra-fast SSD storage, and a backlit keyboard, all wrapped in a slim and lightweight design for unmatched performance and portability.',
        price: '1100',
        stock: '15',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116333',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116113',
        name: 'EvoTech TitanBook Pro',
        description: 'The EvoTech TitanBook Pro is a high-performance 15.6-inch laptop, featuring a powerful AMD Ryzen 9 processor, 32GB of RAM, NVIDIA RTX 3080 graphics, a stunning 4K OLED display, lightning-fast NVMe SSD storage, and a customizable RGB backlit keyboard, perfect for content creators and gaming enthusiasts seeking top-tier performance and immersive visuals.',
        price: '1500',
        stock: '4',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116333',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116114',
        name: 'SwiftEdge Epsilon 360',
        description: 'The SwiftEdge Epsilon 360 is a versatile 2-in-1 laptop with a 13.5-inch touchscreen, powered by an Intel Core i5 processor, 16GB of RAM, Intel Iris Xe graphics, a detachable keyboard, and an included stylus, delivering both laptop and tablet functionality in a sleek and compact design for optimal productivity on the go.',
        price: '900',
        stock: '34',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116333',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Mobile Phones Category
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116115',
        name: 'GalaxyFone X3',
        description: 'The GalaxyFone X3 is a cutting-edge smartphone featuring a powerful Snapdragon 888 processor, 12GB of RAM, a stunning 6.7-inch Super AMOLED display, a versatile quad-camera system, and a long-lasting battery for uninterrupted usage.',
        price: '999',
        stock: '25',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116334',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116116',
        name: 'iMobile X21',
        description: 'The iMobile X21 is a flagship smartphone with an elegant design, powered by the latest A14 Bionic chip, 8GB of RAM, a 6.5-inch Full HD display, and a dual-camera setup to capture stunning photos and videos.',
        price: '799',
        stock: '30',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116334',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116117',
        name: 'PixelTech Pro 5',
        description: 'The PixelTech Pro 5 is a photography-focused smartphone, featuring a 108MP main camera sensor, 8GB of RAM, a 6.4-inch OLED display, and a high-capacity battery to keep you shooting all day long.',
        price: '899',
        stock: '12',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116334',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116118',
        name: 'OnePlus 9T',
        description: 'The OnePlus 9T is a flagship killer smartphone, featuring a Snapdragon 870 processor, 12GB of RAM, a 6.55-inch Fluid AMOLED display with 120Hz refresh rate, and Warp Charge technology for lightning-fast charging.',
        price: '899',
        stock: '18',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116334',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Cameras Category
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116119',
        name: 'ProCapture 2000',
        description: 'The ProCapture 2000 is a professional-grade DSLR camera, equipped with a 24MP full-frame sensor, advanced autofocus system, 4K video recording capabilities, and a robust magnesium alloy body for reliable performance in any situation.',
        price: '2399',
        stock: '5',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116335',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116120',
        name: 'MirrorMax Z7',
        description: 'The MirrorMax Z7 is a versatile mirrorless camera with a 20MP APS-C sensor, 4K video recording capabilities, 5-axis image stabilization, and a flip-out touchscreen, perfect for vloggers and content creators.',
        price: '1499',
        stock: '8',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116335',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116121',
        name: 'ActionX 4K',
        description: 'The ActionX 4K is a compact and rugged action camera, designed to capture all your adventures in stunning 4K resolution, featuring built-in image stabilization, underwater housing, and a variety of mounting options.',
        price: '299',
        stock: '20',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116335',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116122',
        name: 'CompactView V20',
        description: 'The CompactView V20 is a sleek and pocket-sized point-and-shoot camera, offering 20MP resolution, 8x optical zoom, and an array of creative shooting modes for capturing stunning photos on the go.',
        price: '399',
        stock: '15',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116335',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Smartwatches Category
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116123',
        name: 'GigaFit Pro 3',
        description: 'The GigaFit Pro 3 is a feature-packed smartwatch with a 1.4-inch AMOLED display, heart rate monitoring, built-in GPS, sleep tracking, and multiple sports modes to keep you active and connected throughout the day.',
        price: '249',
        stock: '30',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116336',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116124',
        name: 'VitaWatch SE',
        description: 'The VitaWatch SE is a stylish and affordable smartwatch, offering a 1.3-inch color display, fitness tracking, sleep analysis, and smart notifications, perfect for everyday wear and fitness enthusiasts.',
        price: '149',
        stock: '40',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116336',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116125',
        name: 'TechHue Vibe',
        description: 'The TechHue Vibe is a versatile hybrid smartwatch, combining classic design with smart features, including activity tracking, smartphone notifications, and a long-lasting battery life.',
        price: '179',
        stock: '25',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116336',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116126',
        name: 'FitEdge E3',
        description: 'The FitEdge E3 is a fitness-focused smartwatch with a large 1.5-inch color display, built-in GPS, heart rate monitoring, sleep analysis, and 15+ sports modes to help you achieve your fitness goals.',
        price: '199',
        stock: '18',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116336',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Headphones and Earphones Category
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116127',
        name: 'SonicBlast Pro',
        description: 'The SonicBlast Pro is a premium over-ear headphone, delivering Hi-Fi sound, active noise cancellation, plush ear cushions, and a foldable design for a comfortable and immersive listening experience.',
        price: '299',
        stock: '10',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116337',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116128',
        name: 'AirBuds Max',
        description: 'The AirBuds Max are wireless over-ear headphones, featuring Apple\'s H1 chip, adaptive noise cancellation, spatial audio, and up to 20 hours of battery life for an immersive and seamless listening experience.',
        price: '449',
        stock: '6',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116337',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116129',
        name: 'SoundBeats X3',
        description: 'The SoundBeats X3 are wireless earbuds with deep bass, IPX7 water resistance, touch controls, and a portable charging case, perfect for workouts and on-the-go listening.',
        price: '79',
        stock: '25',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116337',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116130',
        name: 'BassPods Q10',
        description: 'The BassPods Q10 are true wireless earbuds, featuring powerful bass, Bluetooth 5.0 connectivity, touch controls, and a compact charging case for all-day listening on the move.',
        price: '49',
        stock: '30',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116337',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Speakers Category
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116131',
        name: 'SonicSound Pro',
        description: 'The SonicSound Pro is a premium Bluetooth speaker with 360-degree surround sound, IPX5 water resistance, 20-hour battery life, and customizable LED lighting for a captivating audio experience at home or on the go.',
        price: '199',
        stock: '15',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116338',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116132',
        name: 'MegaBeats XL',
        description: 'The MegaBeats XL is a powerful portable speaker with deep bass, wireless stereo pairing, 30W output, and a built-in power bank, ensuring non-stop music and fun for your outdoor adventures.',
        price: '129',
        stock: '20',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116338',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116133',
        name: 'SoundWave 360',
        description: 'The SoundWave 360 is a stylish wireless speaker with 12W output, 360-degree sound dispersion, touch controls, and a built-in microphone for hands-free calls, perfect for indoor and outdoor gatherings.',
        price: '79',
        stock: '30',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116338',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-4444-f19ebf116134',
        name: 'BassBoom 2.1',
        description: 'The BassBoom 2.1 is a compact 2.1-channel speaker system with a powerful subwoofer, Bluetooth connectivity, and wired remote control, delivering rich bass and clear audio for your gaming and entertainment needs.',
        price: '149',
        stock: '12',
        category_id: 'e860214b-8632-4b4e-3333-f19ebf116338',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return await queryInterface.bulkDelete(PRODUCT_TABLE_NAME, null, {});
  }
};
