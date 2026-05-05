ServerEvents.recipes(event => {
event.shaped("thermal:device_water_gen", [
    "ABA",
    "CDC",
    "AEA"
], {
    A: "gtceu:treated_wood_planks",
    B: "create:electron_tube",
    C: "gtceu:steel_normal_fluid_pipe",
    D: "gtceu:ulv_machine_casing",
    E: "gtceu:lv_electric_pump"
})
event.shaped("thermal:device_fisher", [
    "ABA",
    "BCB",
    "DED"
], {
    A: "create:electron_tube",
    B: "gtceu:treated_wood_planks",
    C: "gtceu:ulv_machine_casing",
    D: "minecraft:fishing_rod",
    E: "minecraft:barrel"
})
})