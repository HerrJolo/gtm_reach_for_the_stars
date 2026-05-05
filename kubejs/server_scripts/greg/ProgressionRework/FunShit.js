ServerEvents.recipes(event => {
event.shaped(Item.of('gtceu:diamond_mining_hammer', '{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{AoEColumn:1,AoELayer:0,AoERow:1,MaxAoEColumn:1,MaxAoELayer:0,MaxAoERow:1,TorchPlacing:1b},GT.Tool:{AttackDamage:5.5f,AttackSpeed:-2.9f,HarvestLevel:3,MaxDamage:3071,ToolSpeed:6.4f},HideFlags:2,display:{Name:\'{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"red","text":"Diamond Steeled Hammer"}\'}}').enchant('minecraft:efficiency', 5).enchant('minecraft:unbreaking', 3).enchant('minecraft:mending', 1), [
    "ABB",
    "CDB",
    "EBB"
], {
    A: '#gtceu:tools/crafting_mallets',
    B: "minecraft:diamond",
    C: "minecraft:emerald",
    D: 'gtceu:iron_mining_hammer',
    E: "#forge:tools/wire_cutters"
})

event.shaped("storagedrawers:drawer_key", [
    " AB",
    " BC",
    "B  "
], {
    A: '#gtceu:tools/crafting_mallets',
    B: "minecraft:gold_ingot",
    C: "#forge:tools/wire_cutters"
})

event.shaped("storagedrawers:quantify_key", [
    "  A",
    "BA ",
    "AC "
], {
    A: "minecraft:gold_ingot",
    B: '#gtceu:tools/crafting_mallets',
    C: "#forge:tools/wire_cutters"
})

event.remove({mod:"thermal"})
})