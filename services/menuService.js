const prisma = require ('../config/prisma');

async function createsell (selling) {
    try {
        return await prisma.sell.create({
            data: selling,
        });
        } catch (error) {
        throw error;
    }   
};

module.exports = {
    createsell,
};