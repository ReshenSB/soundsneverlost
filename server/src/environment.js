const dotenv = require('dotenv');
dotenv.config();
const environment = {
    port: process.env.PORT,
    YTKey: process.env.YTKey
}
module.exports = environment;
