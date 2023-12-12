const prisma = require("../config/prisma");


async function menuInput(menud) {
    console.log(menud)
    try {
        return await prisma.menu.create({
            data: menud,
        });
        } catch (error) {
        throw error;
    }   
};

async function getAllmenu(){
    try{
        const menus = await prisma.menu.findMany();
        return menus;
    } catch (err){
        throw err;
    }
};



module.exports = {
    getAllmenu,
    menuInput
}