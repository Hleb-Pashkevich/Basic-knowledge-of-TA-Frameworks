const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({level: 'debug' }),
        new winston.transports.File({ filename: 'combined.log', level: 'info' }),
    ],
    format: winston.format.simple()
});

module.exports = logger;