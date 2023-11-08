"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Posts", {
         id: {
            allowNull: false,
            // autoIncrement: true,
            primaryKey: true,
            type: Sequelize.STRING,
         },
         title: {
            type: Sequelize.STRING,
         },
         star: {
            type: Sequelize.STRING,
            defaultValue: "0",
         },
         labelCode: {
            type: Sequelize.STRING,
         },
         adderss: {
            type: Sequelize.STRING,
         },
         attributesId: {
            type: Sequelize.STRING,
         },
         categoryCode: {
            type: Sequelize.STRING,
         },
         desciption: {
            type: Sequelize.TEXT,
         },
         userId: {
            type: Sequelize.STRING,
         },
         featureId: {
            type: Sequelize.STRING,
         },
         imagesID: {
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Posts");
   },
};