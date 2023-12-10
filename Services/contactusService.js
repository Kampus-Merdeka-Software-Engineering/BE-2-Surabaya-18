const prisma = require ('../config/prisma');

async function createcontactus (Contact_us) {
    try {
        return await prisma.Contact_us.create({
            data: Contact_us,
        });
        } catch (err) {
        throw err;
    }   
};

module.exports = {
    createcontactus
};