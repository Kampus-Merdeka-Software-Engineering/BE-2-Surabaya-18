const prisma = require ('../config/prisma');

async function createcontactus (contact) {
    try {
        return await prisma.contact_us.create({
            data: contact,
        });
        } catch (error) {
        throw error;
    }   
};

module.exports = {
    createcontactus,
};