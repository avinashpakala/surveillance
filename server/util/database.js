
const Sequelize = require('sequelize');


const seq = new Sequelize('dashboard', 'root', 'password',
    { dialect: 'mysql', host: 'localhost' });
module.exports = seq;

console.log(process.env.PASS);