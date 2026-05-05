ServerEvents.recipes(event => {

//Controller
event.shaped("storagedrawers:controller", [
    "ABA",
    "CDC",
    "ECE"
], {
    A: "create:electron_tube",
    B: "minecraft:redstone",
    C: "create:golden_sheet",
    D: '#forge:stone',
    E: "gtceu:nether_quartz_frame"
})
event.remove({output:"storagedrawers:controller"})

//ControllerSlave
event.shaped("storagedrawers:controller_slave", [
    "ABA",
    "CDC",
    "ACA"
], {
    A: '#forge:stone',
    B: "create:electron_tube",
    C: "create:golden_sheet",
    D: "gtceu:nether_quartz_frame"
})
event.remove({output:"storagedrawers:controller_slave"})


//3xCompactorDrawer
event.shaped("storagedrawers:compacting_drawers_3", [
    "ABA",
    "CDC",
    "ACA"
], {
    A: "minecraft:stone",
    B: "create:golden_sheet",
    C: "minecraft:piston",
    D: '#storagedrawers:full_drawers'
})
event.remove({output:"storagedrawers:compacting_drawers_3"})


//2xCompactorDrawer
event.shaped("storagedrawers:compacting_drawers_2", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "minecraft:stone",
    B: "create:golden_sheet",
    C: "minecraft:piston",
    D: '#storagedrawers:full_drawers'
})
event.remove({output:"storagedrawers:compacting_drawers_2"})

})
