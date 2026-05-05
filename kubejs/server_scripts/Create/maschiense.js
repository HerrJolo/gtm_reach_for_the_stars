ServerEvents.recipes(event => {

//MechanicalPress
event.shaped("create:mechanical_press", [
    "ABA",
    "CDC",
    "EEE"
], {
    A: "gtceu:iron_spring",
    B: "create:shaft",
    C: '#forge:gears/iron',
    D: "create:andesite_casing",
    E: '#forge:plates/iron'
})
event.remove({output: "create:mechanical_press"})

//MechanicalMixer
event.shaped("create:mechanical_mixer", [
    "ABC",
    "DED",
    " F "
], {
    A: '#forge:small_gears/iron',
    B: "create:shaft",
    C: '#forge:gears/iron',
    D: "gtceu:iron_spring",
    E: "create:andesite_casing",
    F: "create:whisk"
})
event.remove({output: "create:mechanical_mixer"})

//MillStone
event.shaped("create:millstone", [
    "   ",
    "ABA",
    "CDC"
], {
    A: "minecraft:stone",
    B: "create:andesite_casing",
    C: '#forge:small_gears/iron',
    D: '#forge:gears/iron'
})
event.remove({output: "create:millstone"})

//Basin
event.shaped("create:basin", [
    "   ",
    "ABA",
    "AAA"
], {
    A: "create:andesite_alloy",
    B: '#gtceu:tools/crafting_hammers'
})
event.remove({output: "create:basin"})


//MechanicalDrill
event.shaped("create:mechanical_drill", [
    " A ",
    " BC",
    " DE"
], {
    A: "gtceu:iron_drill_head",
    B: "create:andesite_casing",
    C: '#forge:gears/iron',
    D: "create:shaft",
    E: '#forge:small_gears/iron',
})
event.remove({output: "create:mechanical_drill"})


//MechanicalSaw
event.shaped("create:mechanical_saw", [
    " A ",
    " BC",
    " DE"
], {
    A: "gtceu:iron_buzz_saw_blade",
    B: "create:andesite_casing",
    C: '#forge:small_gears/iron',
    D: "create:shaft",
    E: '#forge:gears/iron',
})
event.remove({output: "create:mechanical_saw"})


//BrassHand
event.shaped("create:brass_hand", [
    " A ",
    "BCB",
    " B "
], {
    A: "gtceu:wrought_iron_ring",
    B: "create:brass_sheet",
    C: "create:andesite_alloy"
})
event.remove({output: "create:brass_hand"})


//MehcanicalDeployer
event.shaped("create:deployer", [
    "ABA",
    "CDE",
    " F "
], {
    A: "create:shaft",
    B: "create:electron_tube",
    C: "thermal:iron_gear",
    D: "create:andesite_casing",
    E: "gtceu:iron_spring",
    F: "create:brass_hand"
})
event.remove({output: "create:deployer"})


//MechanicalHarvester
event.shaped("create:mechanical_harvester", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "create:iron_sheet",
    B: "thermal:iron_gear",
    C: "gtceu:iron_spring",
    D: "create:andesite_casing"
})
event.remove({output: "create:mechanical_harvester"})

//StorageInterface
event.shaped("create:portable_storage_interface", [
    " AB",
    " CD",
    " AB"
], {
    A: "gtceu:iron_rod",
    B: "gtceu:iron_spring",
    C: "create:andesite_casing",
    D: "create:chute"
})
event.remove({output:"create:portable_storage_interface"})


//MachanicalFan
event.shaped("create:encased_fan", [
    "ABA",
    "CDC",
    "EFE"
], {
    A: "thermal:iron_gear",
    B: "create:shaft",
    C: "gtceu:small_iron_gear",
    D: "create:andesite_casing",
    E: "minecraft:iron_bars",
    F: "create:propeller"
})
event.remove({output:"create:encased_fan"})


//MechanicalArm
event.shaped("create:mechanical_arm", [
    "ABA",
    "BCB",
    "D E"
], {
    A: "create:brass_sheet",
    B: "gtceu:long_wrought_iron_rod",
    C: "create:electron_tube",
    D: "create:brass_casing",
    E: "create:brass_hand"
})
event.remove({output:"create:mechanical_arm"})


//MechanicalCrafter
event.shaped("create:mechanical_crafter", [
    "ABA",
    "CDC",
    "FEF"
], {
    A: "gtceu:wrought_iron_rod",
    B: "create:electron_tube",
    C: "gtceu:iron_spring",
    D: "create:brass_casing",
    E: "minecraft:crafting_table",
    F: "create:cogwheel"
})
event.remove({output:"create:mechanical_crafter"})



//Speedregulator
event.shaped("create:rotation_speed_controller", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:wrought_iron_gear",
    B: "create:shaft",
    C: "gtceu:small_iron_gear",
    D: "create:brass_casing"
})
event.remove({output:"create:rotation_speed_controller"})


//CopperTank
event.shaped("create:fluid_tank", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "create:copper_sheet",
    B: "minecraft:glass_pane",
    C: "gtceu:copper_rod",
    D: "create:copper_casing"
})
event.remove({output:"create:fluid_tank"})


//ItemVault
event.shaped("create:item_vault", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:wrought_iron_plate",
    B: "create:andesite_alloy",
    C: "gtceu:wrought_iron_rod",
    D: "create:brass_casing"
})
event.remove({output:"create:item_vault"})


//EmptyBlazeBurner
event.shaped("create:empty_blaze_burner", [
    "ABA",
    "BCB",
    "ABA"
], {
    A: "create:iron_sheet",
    B: "minecraft:iron_bars",
    C: "minecraft:netherrack"
})
event.remove({output:"create:empty_blaze_burner"})


//LitBlazeBurner
event.recipes.create.filling("create:blaze_burner", [Fluid.of('minecraft:lava'), "create:empty_blaze_burner"])
event.remove({output:"create:blaze_burner"})


//Spout
event.shaped("create:spout", [
    "ABA",
    "CDC",
    " E "
], {
    A: "create:copper_sheet",
    B: "create:copper_casing",
    C: "gtceu:small_iron_spring",
    D: "minecraft:dried_kelp",
    E: "gtceu:copper_rod"
})
event.remove({output:"create:spout"})



//Drain
event.shaped("create:item_drain", [
    "ABA",
    " C ",
    "   "
], {
    A: "create:iron_sheet",
    B: "minecraft:iron_bars",
    C: "create:copper_casing"
})
event.remove({output:"create:item_drain"})

//Chute
event.shaped("4x create:chute", [
    " A ",
    "BCD",
    " A "
], {
    A: "create:iron_sheet",
    B: '#gtceu:tools/crafting_mallets',
    C: "minecraft:iron_ingot",
    D: '#gtceu:tools/crafting_hammers'
})
event.remove({output:"create:chute"})


//SmartChute
event.shaped("2x create:smart_chute", [
    "   ",
    "ABA",
    "CDC"
], {
    A: "create:electron_tube",
    B: "create:chute",
    C: "create:brass_sheet",
    D: "create:brass_casing"
})
event.remove({output:"create:smart_chute"})


//AndesiteFunnel
event.shaped("2x create:andesite_funnel", [
    "ABC",
    "DEC",
    "FGC"
], {
    A: '#gtceu:tools/crafting_wire_cutters',
    B: "create:andesite_alloy",
    C: "minecraft:dried_kelp",
    D: '#gtceu:tools/crafting_hammers',
    E: "create:chute",
    F: '#gtceu:tools/crafting_mallets',
    G: "create:iron_sheet"
})
event.remove({output:"create:andesite_funnel"})


//AndesiteTunnel
event.shaped("4x create:andesite_tunnel", [
    "ABC",
    "DBD",
    "EBE"
], {
    A: '#gtceu:tools/crafting_mallets',
    B: "minecraft:dried_kelp",
    C: '#gtceu:tools/crafting_wire_cutters',
    D: "create:chute",
    E: "create:iron_sheet"
})
event.remove({output:"create:andesite_tunnel"})


//BrassFunnel
event.shaped("2x create:brass_funnel", [
    "ABC",
    "DEF",
    "GBF"
], {
    A: '#gtceu:tools/crafting_wire_cutters',
    B: "create:brass_sheet",
    C: "create:electron_tube",
    D: '#gtceu:tools/crafting_hammers',
    E: "create:brass_casing",
    F: "minecraft:dried_kelp",
    G: '#gtceu:tools/crafting_mallets'
})
event.remove({output:"create:brass_funnel"})


//BrassTunnel
event.shaped("4x create:brass_tunnel", [
    "ABA",
    "CDC",
    "EDF"
], {
    A: "create:electron_tube",
    B: "create:brass_casing",
    C: "create:brass_sheet",
    D: "minecraft:dried_kelp",
    E: '#gtceu:tools/crafting_wire_cutters',
    F: '#gtceu:tools/crafting_mallets'
})
event.remove({output:"create:brass_tunnel"})


//WeightetEjector
event.shaped("create:weighted_ejector", [
    "  A",
    " BC",
    "  D"
], {
    A: "create:andesite_alloy",
    B: "create:cogwheel",
    C: "gtceu:iron_spring",
    D: "create:andesite_casing"
})
event.remove({output:"create:weighted_ejector"})


//DispalyBoard
event.shaped("4x create:display_board", [
    "AAA",
    "BCB",
    "AAA"
], {
    A: "create:iron_sheet",
    B: "create:andesite_alloy",
    C: "create:electron_tube"
})
event.remove({output:"create:display_board"})










})
//'#gtceu:tools/crafting_hammers'
//Item.of('minecraft:potion', '{Potion:"minecraft:mundane"}')
//'#gtceu:tools/crafting_wire_cutters'
//'#gtceu:tools/crafting_mallets'
