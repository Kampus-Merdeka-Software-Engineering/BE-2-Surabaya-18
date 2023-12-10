const contactusService = require ('../Services/contactusService');

async function createcontactus(req, res) {
    const Contact_us = req.body;

    const createdcontactus = await contactusService.createcontactus(Contact_us);
    res.status(201).json(createdcontactus);
};

module.exports= {
    createcontactus,
};