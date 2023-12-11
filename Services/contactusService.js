const prisma = require ('../config/prisma');

async function createcontactus (contacts) {

    try {
        return await prisma.contact_us.create({
            data: contacts,
        });
        } catch (error) {
        throw error;
    }   
};

module.exports = {
    createcontactus,
};
