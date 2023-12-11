const sellService = require ('../Services/sellServices');

async function createsell(req, res) {
    const selling = req.body;

    const createdsell = await sellService.createsell(selling);
    res.status(201).json(createdsell);
};

module.exports = {
    createsell,
};