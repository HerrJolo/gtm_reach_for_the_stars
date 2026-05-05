ServerEvents.recipes(event => {

//InventoryConnector
event.shaped("toms_storage:ts.inventory_connector", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:gold_screw",
    B: "toms_storage:ts.inventory_cable",
    C: "gtceu:vacuum_tube",
    D: "gtceu:nether_quartz_frame"
})

//InventroyCable
event.shaped("16x toms_storage:ts.inventory_cable", [
    "ABC",
    "DED",
    "   "
], {
    A: '#forge:tools/mallets',
    B: "create:electron_tube",
    C: '#forge:tools/hammers',
    D: "gtceu:nether_quartz_bolt",
    E: "create:golden_sheet"
})

//CableConnector
event.shaped("2x toms_storage:ts.inventory_cable_connector", [
    "ABA",
    "CDC",
    "EFE"
], {
    A: "create:electron_tube",
    B: "toms_storage:ts.inventory_cable",
    C: "create:golden_sheet",
    D: "gtceu:nether_quartz_frame",
    E: "minecraft:redstone",
    F: "minecraft:chest"
})

//IneventoryHopper
event.shaped("toms_storage:ts.inventory_hopper_basic", [
    "ABC",
    "DED",
    "   "
], {
    A: '#forge:tools/hammers',
    B: "toms_storage:ts.inventory_cable",
    C: '#forge:tools/mallets',
    D: "gtceu:nether_quartz_bolt",
    E: "create:chute"
})

//LevelEmitter
event.shaped("toms_storage:ts.level_emitter", [
    "ABC",
    "DED",
    "   "
], {
    A: '#forge:tools/hammers',
    B: "toms_storage:ts.inventory_cable",
    C: '#forge:tools/mallets',
    D: "gtceu:nether_quartz_bolt",
    E: "create:electron_tube"
})

//WirelessTerminal
event.shaped("toms_storage:ts.wireless_terminal", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "create:electron_tube",
    B: "create:mechanical_arm",
    C: "gtceu:nether_quartz_screw",
    D: "toms_storage:ts.crafting_terminal"
})

//AdvancedTerminal
event.shaped("toms_storage:ts.adv_wireless_terminal", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "gtceu:steel_plate",
    B: '#gtceu:circuits/lv',
    C: "gtceu:nether_quartz_screw",
    D: "toms_storage:ts.wireless_terminal"
})

//StorageTerminal
event.shaped("toms_storage:ts.storage_terminal", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "create:electron_tube",
    B: "create:display_board",
    C: "gtceu:steel_plate",
    D: "gtceu:nether_quartz_frame"
})

//CraftinTerminal
event.shaped("toms_storage:ts.crafting_terminal", [
    "ABA",
    "BCB",
    "DED"
], {
    A: "gtceu:steel_screw",
    B: "gtceu:vacuum_tube",
    C: "toms_storage:ts.storage_terminal",
    D: "gtceu:steel_frame",
    E: "minecraft:crafting_table"
})

//FilterConnctor
event.shaped("toms_storage:ts.inventory_cable_connector_filtered", [
    "   ",
    " A ",
    " B "
], {
    A: "toms_storage:ts.item_filter",
    B: "toms_storage:ts.inventory_cable_connector"
})

//FramedConnctor
event.shaped("toms_storage:ts.inventory_cable_connector_framed", [
    "A A",
    " B ",
    "A A"
], {
    A: "minecraft:stick",
    B: "toms_storage:ts.inventory_cable_connector"
})

//ItemFilter
event.shaped("toms_storage:ts.item_filter", [
    "   ",
    " A ",
    "   "
], {
    A: "create:filter"
})

//PolymorphicFilter
event.shaped("toms_storage:ts.polymorphic_item_filter", [
    "   ",
    " A ",
    "   "
], {
    A: "create:attribute_filter"
})

//TagFilter
event.shaped("toms_storage:ts.tag_item_filter", [
    "   ",
    " A ",
    "   "
], {
    A: "toms_storage:ts.polymorphic_item_filter"
})

//PaintKit
event.shaped("toms_storage:ts.paint_kit", [
    " A ",
    "ABA",
    " A "
], {
    A: '#forge:dyes',
    B: "create:super_glue"
})

//FramedCable
event.shaped("toms_storage:ts.inventory_cable_framed", [
    "A A",
    " B ",
    "A A"
], {
    A: "minecraft:stick",
    B: "toms_storage:ts.inventory_cable"
})

//QuartzRod
event.shaped("gtceu:nether_quartz_rod", [
    "A  ",
    " B ",
    "   "
], {
    A: '#forge:tools/files',
    B: "minecraft:quartz"
})


event.remove({mod:"toms_storage"})
})