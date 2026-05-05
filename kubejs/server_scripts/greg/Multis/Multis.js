ServerEvents.recipes(event => {

//ExtendetCentrifuge
event.shaped("gtceu:extended_centrifuge", [
    "ABA",
    "CDE",
    "ABA"
], {
    A: '#gtceu:circuits/ev',
    B: "gtceu:solid_machine_casing",
    C: "gtceu:hv_electric_pump",
    D: "gtceu:hv_centrifuge",
    E: "gtceu:hv_conveyor_module"
})

//ExtendetExtractor
event.shaped("gtceu:extended_extractor", [
    "ABA",
    "CDE",
    "ABA"
], {
    A: '#gtceu:circuits/mv',
    B: "gtceu:heatproof_machine_casing",
    C: "gtceu:mv_electric_pump",
    D: "gtceu:mv_extractor",
    E: "gtceu:mv_conveyor_module"
})

//ExtendetTermalCentrifuge
event.shaped("gtceu:extended_thermal_centrefuge", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:clean_machine_casing",
    B: "gtceu:cupronickel_coil_block",
    C: '#gtceu:circuits/ev',
    D: "gtceu:hv_thermal_centrifuge"
})

//ExtendedElectrolyzer
event.shaped("gtceu:extended_electrolyzer", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: '#gtceu:circuits/ev',
    B: "gtceu:clean_machine_casing",
    C: "gtceu:cupronickel_coil_block",
    D: "gtceu:hv_electrolyzer"
})

//AreaAqumulator
event.shaped("gtceu:area_aqumulator", [
    "AAA",
    "BCB",
    "DDD"
], {
    A: "gtceu:potin_huge_fluid_pipe",
    B: '#gtceu:circuits/lv',
    C: "gtceu:solid_machine_casing",
    D: "gtceu:lv_electric_pump"
})

//MechanicalConcretMixer
event.shaped("gtceu:concret_mixer", [
    "ABA",
    "CDC",
    "AEA"
], {
    A: "gtceu:bronze_normal_fluid_pipe",
    B: "create:mechanical_mixer",
    C: "minecraft:glass",
    D: "gtceu:steam_machine_casing",
    E: "create:basin"
})

//VacuumChamber
event.shaped("gtceu:vacuum_chamber", [
    "ABA",
    "CCC",
    "ADA"
], {
    A: "create:electron_tube",
    B: "gtceu:bronze_normal_fluid_pipe",
    C: "gtceu:steam_machine_casing",
    D: "gtceu:tin_rotor"
})

//SteamOreWasher
event.shaped("gtceu:steam_ore_washer", [
    "ABA",
    "BCB",
    "ABA"
], {
    A: "gtceu:steam_machine_casing",
    B: "gtceu:bronze_normal_fluid_pipe",
    C: "minecraft:cauldron"
})

//PrimitiveAssembler
event.shaped("gtceu:primitive_assembler", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:vacuum_tube",
    B: "gtceu:steel_frame",
    C: "create:mechanical_arm",
    D: "create:depot"
})

//CoilAssembler
event.shaped("gtceu:coil_assembler", [
    "ABC",
    "DED",
    "ABC"
], {
    A: "gtceu:mv_electric_motor",
    B: "gtceu:good_electronic_circuit",
    C: "gtceu:mv_robot_arm",
    D: "gtceu:blue_steel_frame",
    E: "gtceu:aluminium_frame"
})

//SteamForgeHammer
event.shaped("gtceu:steam_forge_hammer", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:steam_machine_casing",
    B: "gtceu:bronze_normal_fluid_pipe",
    C: "minecraft:piston",
    D: "gtceu:lp_steam_forge_hammer"
})

//WetOreProzessor
event.shaped("gtceu:wet_ore_processor_4000", [
    "ABA",
    "CDE",
    "ABA"
], {
    A: "kubejs:liquid_working_cassing",
    B: '#gtceu:circuits/hv',
    C: "gtceu:mv_ore_washer",
    D: "gtceu:mv_chemical_bath",
    E: "gtceu:mv_sifter"
})

})