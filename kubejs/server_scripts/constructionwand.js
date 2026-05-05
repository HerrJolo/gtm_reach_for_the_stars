ServerEvents.recipes(event => {
event.shaped("kubejs:stone_core", [
    " A ",
    "ABA",
    " A "
], {
    A: "minecraft:stick",
    B: "minecraft:cobblestone"
})
event.shaped("kubejs:iron_core", [
    " AB",
    "ACA",
    "BA "
], {
    A: "gtceu:iron_rod",
    B: "gtceu:iron_screw",
    C: "gtceu:double_wrought_iron_plate"
})
event.shaped("kubejs:diamond_core", [
    " AB",
    "ACA",
    "BA "
], {
    A: "gtceu:long_steel_rod",
    B: "gtceu:wrought_iron_screw",
    C: "minecraft:diamond"
})
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:aluminium_screw',
         'gtceu:diamond_rod',
         'gtceu:aluminium_screw',
         'gtceu:diamond_rod',
         'gtceu:aluminium_screw',
         'gtceu:diamond_rod',
         'gtceu:aluminium_screw',
         'gtceu:diamond_rod'],

         'minecraft:nether_star',
     
         'kubejs:infinity_core',

        5000
    )

const wand = (core ,stick ,wand) =>{

event.shaped(wand, [
    "  A",
    " B ",
    "B  "
], {
    A: core,
    B: stick
})
}
wand("kubejs:stone_core" ,"minecraft:stick" ,'constructionwand:stone_wand')
wand("kubejs:iron_core" ,'gtceu:long_iron_rod' ,'constructionwand:iron_wand')
wand("kubejs:diamond_core" ,'gtceu:long_steel_rod' ,'constructionwand:diamond_wand')
wand("kubejs:infinity_core" ,'gtceu:long_aluminium_rod' ,'constructionwand:infinity_wand')


event.remove({mod:"constructionwand"})

})