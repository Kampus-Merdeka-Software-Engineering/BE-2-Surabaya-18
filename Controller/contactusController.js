const contactusService = require ('../Services/contactusService');

async function createcontactus(req, res) {
    const contacts = req.body;

    const createdcontactus = await contactusService.createcontactus(contacts);
    res.status(201).json(createdcontactus);
};

module.exports = {
    createcontactus,
};