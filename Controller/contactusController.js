const contactusService = require ('../Services/contactusService');

async function createcontactus(req, res) {
    const contact = req.body;

    const createdcontactus = await contactusService.createcontactus(contact);
    res.status(201).json(createdcontactus);
};

module.exports = {
    createcontactus,
};