const menuService = require ('../services/menuService');


async function getAllmenu (req, res) {
    const menus = await menuService.getAllmenu();

    res.json(menus);
};


async function menuInput (req,res) {
    const menus = req.body;

    const menuInputed = await menuService.menuInput(menus);
    res.status(201).json(menuInputed);
};

module.exports = {
    menuInput
};