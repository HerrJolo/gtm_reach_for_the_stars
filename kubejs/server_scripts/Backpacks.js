ServerEvents.recipes(event => {

//Backpack
event.shaped("sophisticatedbackpacks:backpack", [
    "ABA",
    "ACA",
    "DBD"
], {
    A: "minecraft:leather",
    B: "gtceu:iron_frame",
    C: "minecraft:chest",
    D: "minecraft:string"
})

//CopperBackpack
event.shaped("sophisticatedbackpacks:copper_backpack", [
    "ABA",
    "CDC",
    "AEA"
], {
    A: "gtceu:double_copper_plate",
    B: '#forge:tools/hammers',
    C: "gtceu:long_copper_rod",
    D: "sophisticatedbackpacks:backpack",
    E: '#forge:tools/mallets'
})

//IronBackpack
event.shaped("sophisticatedbackpacks:iron_backpack", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:double_wrought_iron_plate",
    B: "gtceu:wrought_iron_screw",
    C: "gtceu:iron_frame",
    D: "sophisticatedbackpacks:copper_backpack"
})

//GoldBackpack
event.shaped("sophisticatedbackpacks:gold_backpack", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:double_gold_plate",
    B: "gtceu:steel_screw",
    C: "gtceu:steel_frame",
    D: "sophisticatedbackpacks:iron_backpack"
})

//DiamondBackpack
event.shaped("sophisticatedbackpacks:diamond_backpack", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:diamond_plate",
    B: "gtceu:aluminium_screw",
    C: "gtceu:aluminium_frame",
    D: "sophisticatedbackpacks:gold_backpack"
})

//NetherideBackpack
event.shaped("sophisticatedbackpacks:netherite_backpack", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "minecraft:netherite_ingot",
    B: "gtceu:stainless_steel_screw",
    C: "gtceu:stainless_steel_frame",
    D: "sophisticatedbackpacks:diamond_backpack"
})

//Upgrades
//Base
event.shaped("sophisticatedbackpacks:upgrade_base", [
    "ABA",
    "BCB",
    "ABA"
], {
    A: "minecraft:leather",
    B: "gtceu:wrought_iron_screw",
    C: "gtceu:double_gold_plate"
})

//Pickup
event.shaped("sophisticatedbackpacks:pickup_upgrade", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "create:electron_tube",
    B: "create:mechanical_arm",
    C: "create:golden_sheet",
    D: "sophisticatedbackpacks:upgrade_base"
})
//AdvPickup
event.shaped("sophisticatedbackpacks:advanced_pickup_upgrade", [
    "   ",
    " A ",
    " B "
], {
    A: "sophisticatedbackpacks:pickup_upgrade",
    B: "create:filter"
})
//Magnet
event.shaped("sophisticatedbackpacks:magnet_upgrade", [
    "ABA",
    "CDC",
    "CBC"
], {
    A: "create:electron_tube",
    B: "gtceu:steel_frame",
    C: "gtceu:magnetic_iron_rod",
    D: "sophisticatedbackpacks:pickup_upgrade"
})
//AdvMagnet
event.shaped("sophisticatedbackpacks:advanced_magnet_upgrade", [
    "ABA",
    "CDC",
    "AEA"
], {
    A: "gtceu:aluminium_screw",
    B: "gtceu:lv_item_magnet",
    C: "create:filter",
    D: "sophisticatedbackpacks:magnet_upgrade",
    E: '#gtceu:batteries/lv'
})
//Filter
event.shaped("sophisticatedbackpacks:filter_upgrade", [
    " A ",
    "ABA",
    " A "
], {
    A: "create:filter",
    B: "sophisticatedbackpacks:upgrade_base"
})
//AdvFilter
event.shaped("sophisticatedbackpacks:advanced_filter_upgrade", [
    " A ",
    "ABA",
    " A "
], {
    A: "create:filter",
    B: "sophisticatedbackpacks:filter_upgrade"
})
//VoidUpgarde
event.shaped("sophisticatedbackpacks:void_upgrade", [
    "ABA",
    "CDC",
    "CEC"
], {
    A: "gtceu:bronze_normal_fluid_pipe",
    B: "gtceu:iron_frame",
    C: "gtceu:gold_rod",
    D: "sophisticatedbackpacks:upgrade_base",
    E: "trashcans:item_trash_can"
})
//AdvVoidUpgrade
event.shaped("sophisticatedbackpacks:advanced_void_upgrade", [
    " A ",
    "ABA",
    " A "
], {
    A: "create:filter",
    B: "sophisticatedbackpacks:advanced_void_upgrade"
})
//RestockDeposit
event.shaped("sophisticatedbackpacks:restock_upgrade", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:steel_plate",
    B: "create:mechanical_arm",
    C: "gtceu:gold_rod",
    D: "sophisticatedbackpacks:upgrade_base"
})
event.shaped("sophisticatedbackpacks:restock_upgrade", [
    "   ",
    " A ",
    "   "
], {
    A: "sophisticatedbackpacks:deposit_upgrade"
})
event.shaped("sophisticatedbackpacks:deposit_upgrade", [
    "   ",
    " A ",
    "   "
], {
    A: "sophisticatedbackpacks:restock_upgrade"
})
//AdvRestockDeposit
event.shaped("sophisticatedbackpacks:advanced_restock_upgrade", [
    " A ",
    "ABA",
    " A "
], {
    A: "create:filter",
    B: "sophisticatedbackpacks:restock_upgrade"
})
event.shaped("sophisticatedbackpacks:advanced_restock_upgrade", [
    "   ",
    " A ",
    "   "
], {
    A: "sophisticatedbackpacks:advanced_deposit_upgrade"
})
event.shaped("sophisticatedbackpacks:advanced_deposit_upgrade", [
    "   ",
    " A ",
    "   "
], {
    A: "sophisticatedbackpacks:advanced_restock_upgrade"
})
//Refill
event.shaped("sophisticatedbackpacks:refill_upgrade", [
    "ABA",
    "CDC",
    "EBE"
], {
    A: "create:electron_tube",
    B: "gtceu:gold_frame",
    C: "minecraft:chest",
    D: "sophisticatedbackpacks:upgrade_base",
    E: "create:chute"
})
//AdvRefill
event.shaped("sophisticatedbackpacks:advanced_refill_upgrade", [
    "ABA",
    "CDC",
    "EFE"
], {
    A: "gtceu:steel_crate",
    B: "gtceu:basic_electronic_circuit",
    C: '#gtceu:circuits/lv',
    D: "sophisticatedbackpacks:refill_upgrade",
    E: "minecraft:hopper",
    F: "gtceu:aluminium_frame"
})
//Upgrade
//1
event.shaped("sophisticatedbackpacks:stack_upgrade_starter_tier", [
    "ABA",
    "CDC",
    "AEA"
], {
    A: "gtceu:double_aluminium_plate",
    B: "gtceu:lv_emitter",
    C: "gtceu:lv_field_generator",
    D: "sophisticatedbackpacks:upgrade_base",
    E: '#gtceu:batteries/lv'
})
//2
event.shaped("sophisticatedbackpacks:stack_upgrade_tier_1", [
    "ABA",
    "CDC",
    "AEA"
], {
    A: "gtceu:double_stainless_steel_plate",
    B: "gtceu:mv_emitter",
    C: "gtceu:mv_field_generator",
    D: "sophisticatedbackpacks:stack_upgrade_starter_tier",
    E: '#gtceu:batteries/mv'
})
//3
event.shaped("sophisticatedbackpacks:stack_upgrade_tier_2", [
    "ABA",
    "CDC",
    "ACA"
], {
    A: "gtceu:double_titanium_plate",
    B: "gtceu:hv_emitter",
    C: "gtceu:hv_field_generator",
    D: "sophisticatedbackpacks:stack_upgrade_tier_1"
})
//4
event.shaped("sophisticatedbackpacks:stack_upgrade_tier_3", [
    "ABA",
    "CDC",
    "ACA"
], {
    A: "gtceu:double_tungsten_steel_plate",
    B: "gtceu:ev_emitter",
    C: "gtceu:ev_field_generator",
    D: "sophisticatedbackpacks:stack_upgrade_tier_2"
})
event.remove({mod:"sophisticatedbackpacks"})
})