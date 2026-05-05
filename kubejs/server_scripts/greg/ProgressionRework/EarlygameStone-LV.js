ServerEvents.recipes(event => {

//Bricks
event.recipes.create.mixing("minecraft:bricks", ['4x minecraft:brick', Fluid.of("minecraft:water", 144)])


//FireBricks
event.recipes.create.mixing('gtceu:firebricks', ["6x gtceu:firebrick", 'minecraft:bricks', Fluid.of("gtceu:concrete", 288)])
event.remove({output:'gtceu:firebricks'})

//FireBrick
event.recipes.create.compacting('gtceu:compressed_fireclay', ['gtceu:clay_dust', 'gtceu:brick_dust'])
event.remove({output:'gtceu:compressed_fireclay'})

//Concret
event.recipes.create.mixing(Fluid.of("gtceu:concrete", 144), ["gtceu:clay_dust", "3x gtceu:stone_dust", Fluid.of("minecraft:water", 576)])

//Stone/Clay Dust
event.recipes.create.milling("4x gtceu:clay_dust", 'minecraft:clay')
event.recipes.create.milling("gtceu:clay_dust", 'minecraft:clay_ball')
event.recipes.create.milling("2x gtceu:stone_dust", "#forge:stone")
event.recipes.create.milling("4x gtceu:brick_dust", 'minecraft:bricks')
event.remove({output:'gtceu:fireclay_dust'})

//PaperRecipieChanges
event.remove({id: "quark:tweaks/crafting/utility/bent/paper"})
event.remove({id: "farmersdelight:paper_from_tree_bark"})
event.remove({id: "immersive_weathering:paper_from_birch_bark"})
event.remove({id: "create:pressing/sugar_cane"})
event.recipes.create.mixing('2x gtceu:paper_dust', ["3x minecraft:sugar_cane", Fluid.of("minecraft:water", 144)])
event.recipes.create.compacting("2x minecraft:paper", ['3x gtceu:paper_dust', Fluid.of("minecraft:water", 144)])
event.recipes.create.pressing("minecraft:paper", 'immersive_weathering:birch_bark')

//Glass
event.smelting("minecraft:glass", "gtceu:glass_dust")
event.remove({id:"immersive_weathering:glass_from_vitrified_sand_smelting"})
event.recipes.create.milling("gtceu:quartz_sand_dust", '#minecraft:sand')
event.recipes.create.milling("gtceu:flint_dust", 'minecraft:flint')

//RoseQuartz
event.recipes.create.mixing('create:rose_quartz', ["4x minecraft:redstone", "minecraft:quartz", Fluid.of("gtceu:glowstone", 144)]).heated()
event.recipes.create.mixing('create:rose_quartz', ["8x minecraft:redstone", '2x minecraft:amethyst_shard', Fluid.of("gtceu:glowstone", 288)]).heated()
//RoseQuartzMixer
event.recipes.gtceu.mixer("RoseQuartz")
.itemInputs("minecraft:quartz")
.itemInputs("4x minecraft:redstone")
.inputFluids("gtceu:glowstone 144")
.itemOutputs("create:polished_rose_quartz")
.EUt(30)
.duration(200)
event.remove({id:"create:crafting/materials/rose_quartz"})

//EarlyLiquideGlowstone
event.recipes.create.mixing(Fluid.of("gtceu:glowstone", 576), "minecraft:glowstone").superheated()
event.recipes.create.mixing(Fluid.of("gtceu:glowstone", 144), "minecraft:glowstone_dust").superheated()

//CokeOven
event.recipes.create.compacting('gtceu:compressed_coke_clay', ['minecraft:clay_ball', "#minecraft:sand", Fluid.of("gtceu:concrete", 18)])
//CockeOvenMixer
event.recipes.gtceu.mixer("CokeClay")
.itemInputs("minecraft:clay_ball")
.itemInputs("#minecraft:sand")
.inputFluids("gtceu:concrete 18")
.itemOutputs("2x gtceu:compressed_coke_clay")
.EUt(16)
.duration(100)
event.remove({output:'gtceu:compressed_coke_clay'})

//WroughtIronMixing
event.recipes.create.mixing('8x gtceu:wrought_iron_ingot', ["8x minecraft:iron_ingot" ,"minecraft:charcoal"]).heated()
event.remove({id:"gtceu:smelting/wrought_iron_nugget"})

//PolishedRoseQuartz
event.recipes.create.mixing('create:polished_rose_quartz', ['create:rose_quartz', "minecraft:sand", Fluid.of("minecraft:water", 288)])

event.remove({output:'create:polished_rose_quartz'})

//ElectronTubes
event.shaped("create:electron_tube", [
    "EAE",
    "EBE",
    "CDC"
], {
    A: "create:polished_rose_quartz",
    B: "create:iron_sheet",
    C: "gtceu:wrought_iron_bolt",
    D: "minecraft:redstone",
    E: 'gtceu:wrought_iron_rod'
})
//ElectronTubesAssembler
event.recipes.gtceu.assembler("ElectronTubes")
.itemInputs("create:polished_rose_quartz")
.itemInputs("minecraft:redstone")
.itemInputs("gtceu:wrought_iron_rod")
.inputFluids("gtceu:wrought_iron 72")
.itemOutputs("create:electron_tube")
.EUt(30)
.duration(200)
event.remove({output:'create:electron_tube'})

//EarlyDustMixing
event.remove({id: "gtceu:shapeless/dust_brass"})
event.remove({id: "gtceu:shapeless/dust_bronze"})
event.remove({id: "gtceu:shapeless/potin_dust"})
event.remove({id: "create:mixing/brass_ingot"})
event.recipes.create.mixing("4x gtceu:brass_dust", ['3x #forge:dusts/copper', '#forge:dusts/zinc'])
event.recipes.create.mixing("4x thermal:bronze_dust", ['3x #forge:dusts/copper', '#forge:dusts/tin'])
event.recipes.create.mixing("9x gtceu:potin_dust", ["6x #forge:dusts/copper",  '2x #forge:dusts/tin', '#forge:dusts/lead'])

//EarlyPlates
event.recipes.create.pressing('gtceu:steel_plate', 'gtceu:steel_ingot')
event.recipes.create.pressing('gtceu:potin_plate', 'gtceu:potin_ingot')
event.recipes.create.pressing('thermal:bronze_plate', 'thermal:bronze_ingot')
event.recipes.create.pressing('gtceu:wrought_iron_plate', 'gtceu:wrought_iron_ingot')
event.recipes.create.pressing('gtceu:tin_alloy_plate', 'gtceu:tin_alloy_ingot')
event.recipes.create.pressing('thermal:tin_plate', 'thermal:tin_ingot')
event.recipes.create.pressing('gtceu:red_alloy_plate', 'gtceu:red_alloy_ingot')



//SteamEngine
event.shaped("create:steam_engine", [
    "ABA",
    "CDE",
    "FGF"
], {
    A: "create:shaft",
    B: "create:golden_sheet",
    C: '#gtceu:tools/crafting_screwdrivers',
    D: "create_sa:steam_engine",
    E: '#gtceu:tools/crafting_hammers',
    F: "gtceu:steel_screw",
    G: "minecraft:copper_block"
})
event.remove({output:"create:steam_engine"})

//DieselEngine
event.shaped("createdieselgenerators:diesel_engine", [
    "ABA",
    "CDC",
    "EEE"
], {
    A: "createdieselgenerators:engine_piston",
    B: "create:fluid_tank",
    C: "gtceu:double_bronze_plate",
    D: "gtceu:long_wrought_iron_rod",
    E: "minecraft:iron_ingot"
})
event.remove({output:"createdieselgenerators:diesel_engine"})
//EnginePiston
event.shaped("createdieselgenerators:engine_piston", [
    "AA ",
    "ABC",
    " DE"
], {
    A: "create:iron_sheet",
    B: "gtceu:wrought_iron_rod",
    C: '#forge:tools/wire_cutters',
    D: '#forge:tools/hammers',
    E: "gtceu:wrought_iron_ring"
})
event.remove({output:"createdieselgenerators:engine_piston"})
//ModularEngine
event.shaped("createdieselgenerators:large_diesel_engine", [
    "ABA",
    "CDC",
    "EFE"
], {
    A: "gtceu:bronze_normal_fluid_pipe",
    B: "create:shaft",
    C: "gtceu:steel_plate",
    D: "createdieselgenerators:diesel_engine",
    E: "gtceu:steel_screw",
    F: '#forge:tools/screwdrivers'
})
event.remove({output:"createdieselgenerators:large_diesel_engine"})
//HugeDieselEngine
event.shaped("createdieselgenerators:huge_diesel_engine", [
    "ABA",
    "CDC",
    "EFG"
], {
    A: "gtceu:steel_plate",
    B: "create_sa:heat_engine",
    C: "create:shaft",
    D: "create:fluid_tank",
    E: '#gtceu:tools/crafting_mallets',
    F: "create:brass_casing",
    G: '#forge:tools/hammers'
})
event.remove({output:"createdieselgenerators:huge_diesel_engine"})
//BulkFermenter
event.shaped("createdieselgenerators:bulk_fermenter", [
    "ABA",
    "BCB",
    "ABA"
], {
    A: "gtceu:iron_screw",
    B: "create:iron_sheet",
    C: "create:fluid_tank"
})
event.remove({output:"createdieselgenerators:bulk_fermenter"})

//CinderFlour
event.recipes.create.milling("create:cinder_flour", "minecraft:netherrack")

//UlvHatchBus
event.shaped("gtceu:ulv_input_bus", [
    "   ",
    " A ",
    " B "
], {
    A: "minecraft:chest",
    B: "gtceu:ulv_machine_casing"
})
event.shaped("gtceu:ulv_input_hatch", [
    "   ",
    " A ",
    " B "
], {
    A: "minecraft:glass",
    B: "gtceu:ulv_machine_casing"
})

//ObsidianCobblestone
event.recipes.create.mixing("minecraft:obsidian", [Fluid.of("minecraft:lava", 100), Fluid.of("minecraft:water", 100)]).heated()
event.recipes.create.mixing("minecraft:stone", [Fluid.of("minecraft:lava", 100), Fluid.of("minecraft:water", 100)])

})
