ServerEvents.recipes(event => {

//Pot
event.shaped("farmersdelight:cooking_pot", [
    "A A",
    "BCB",
    "BBB"
], {
    A: "minecraft:oak_planks",
    B: "create:iron_sheet",
    C: '#forge:tools/hammers'
})
event.remove({output:"farmersdelight:cooking_pot"})

//MonsterusPot
event.shaped("dungeonsdelight:monster_pot", [
    "ABA",
    "CDC",
    "ECF"
], {
    A: "gtceu:aluminium_screw",
    B: "minecraft:fermented_spider_eye",
    C: "dungeonsdelight:stained_scrap",
    D: "farmersdelight:cooking_pot",
    E: '#forge:tools/screwdrivers',
    F: '#forge:tools/hammers'
})
event.remove({output:"dungeonsdelight:monster_pot"})


//Pan
event.shaped("farmersdelight:skillet", [
    "   ",
    "ABC",
    "CCC"
], {
    A: "minecraft:oak_planks",
    B: '#forge:tools/hammers',
    C: "create:iron_sheet"
})
event.remove({output:"farmersdelight:skillet"})


//BrickStove
event.shaped("farmersdelight:stove", [
    "ABA",
    "CDC",
    "CEC"
], {
    A: "minecraft:iron_ingot",
    B: "minecraft:iron_bars",
    C: "minecraft:bricks",
    D: '#forge:tools/hammers',
    E: "minecraft:campfire"
})
event.remove({output:"farmersdelight:stove"})


//BlackstoneStove
event.shaped("nethersdelight:blackstone_stove", [
    "ABA",
    "CDC",
    "CEC"
], {
    A: "minecraft:iron_ingot",
    B: "minecraft:iron_bars",
    C: "minecraft:blackstone",
    D: '#forge:tools/hammers',
    E: "minecraft:soul_campfire"
})
event.remove({output:"nethersdelight:blackstone_stove"})


//DunegonStove
event.shaped("dungeonsdelight:dungeon_stove", [
    "ABA",
    "CDC",
    "EFG"
], {
    A: "gtceu:aluminium_screw",
    B: "dungeonsdelight:stained_scrap_bars",
    C: "gtceu:aluminium_plate",
    D: "farmersdelight:stove",
    E: '#forge:tools/hammers',
    F: "dungeonsdelight:living_campfire",
    G: '#forge:tools/screwdrivers'
})
event.remove({output:"dungeonsdelight:dungeon_stove"})


//EndStove
event.shaped("endersdelight:endstone_stove", [
    "ABA",
    "CDC",
    "CEC"
], {
    A: "create:sturdy_sheet",
    B: "minecraft:iron_bars",
    C: "minecraft:end_stone_bricks",
    D: '#forge:tools/hammers',
    E: "minecraft:soul_campfire"
})
event.remove({output:"endersdelight:endstone_stove"})


//Keg
event.shaped("brewinandchewin:keg", [
    "ABA",
    "CDC",
    "EFE"
], {
    A: "gtceu:iron_rod",
    B: '#forge:tools/hammers',
    C: "minecraft:oak_slab",
    D: "minecraft:barrel",
    E: "gtceu:steel_screw",
    F: '#forge:tools/screwdrivers'
})
event.remove({output:"brewinandchewin:keg"})


//HeatigBase
event.shaped("brewinandchewin:heating_cask", [
    "ABA",
    "CDC",
    "ECE"
], {
    A: "minecraft:oak_planks",
    B: '#forge:tools/screwdrivers',
    C: "minecraft:sand",
    D: "minecraft:magma_block",
    E: "gtceu:steel_screw"
})
event.remove({output:"brewinandchewin:heating_cask"})


//CoolingBase
event.shaped("brewinandchewin:ice_crate", [
    "ABA",
    "CDC",
    "ECE"
], {
    A: "minecraft:oak_planks",
    B: '#forge:tools/screwdrivers',
    C: "minecraft:gravel",
    D: "minecraft:ice",
    E: "gtceu:steel_screw"
})
event.remove({output:"brewinandchewin:ice_crate"})


//FunctionalBasin
event.shaped("hearthandharvest:basin", [
    "ABA",
    "CDC",
    "CEC"
], {
    A: "gtceu:wrought_iron_screw",
    B: '#forge:tools/screwdrivers',
    C: "minecraft:bricks",
    D: "minecraft:cauldron",
    E: "minecraft:iron_ingot"
})
event.shaped("hearthandharvest:basin", [
    "   ",
    " A ",
    "   "
], {
    A: "decoration_delight:sink"
})
event.remove({output:"decoration_delight:sink"})



//NoNfunctionalSink
event.shaped("decoration_delight:sink", [
    "   ",
    " A ",
    "   "
], {
    A: "hearthandharvest:basin"
})
event.remove({output:"hearthandharvest:basin"})

})