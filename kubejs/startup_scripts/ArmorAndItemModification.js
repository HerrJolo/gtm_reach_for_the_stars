ItemEvents.modification(event => {

event.modify('born_in_chaos_v1:shell_mace', item => {
item.attackDamage = 10
})

event.modify('born_in_chaos_v1:spiny_shell_armor_chestplate', item => {
item.armorProtection = 8
item.armorToughness = 3
item.armorKnockbackResistance = 0.1
})

event.modify('born_in_chaos_v1:spiny_shell_armor_helmet', item => {
item.armorProtection = 3
item.armorToughness = 3
item.armorKnockbackResistance = 0.1
})

event.modify('mowziesmobs:wrought_helmet', item => {
item.armorProtection = 3
item.armorToughness = 2
item.armorKnockbackResistance = 0.2
    })
})

ItemEvents.armorTierRegistry(event => {
    event.add("spinynano", tier => {
        tier.durabilityMultiplier = 15
        tier.slotProtections =[3, 6, 8, 4]
        tier.enchantmentValue = 10 
        tier.equipSound = "minecraft:item.armor.equip_leather"
        tier.repairIngredient = "minecraft:leather"
        tier.toughness = 3.0
        tier.knockbackResistance = 0.1
    })
    
    event.add("nanotraveler", tier => {
        tier.durabilityMultiplier = 50
        tier.slotProtections =[3, 4, 5, 3]
        tier.enchantmentValue = 25 
        tier.equipSound = "minecraft:item.armor.equip_diamond"
        tier.repairIngredient = "minecraft:leather"
        tier.toughness = 3.0
        tier.knockbackResistance = 0.2
    })
})

StartupEvents.registry('item', event => {
event.create('nano_muscle_travelers_boots', 'boots').tier('nanotraveler')
})

StartupEvents.registry('item', event => {
event.create('spiny_nano_helmet', 'helmet').tier('spinynano').displayName("§5Spiny Nano Helmet")
event.create('spiny_nano_chestplate', 'chestplate').tier('spinynano').displayName("§5Spiny Nano Chestplate")
event.create('spiny_nano_leggings', 'leggings').tier('spinynano').displayName("§5Spiny Nano Leggings")
event.create('spiny_nano_boots', 'boots').tier('spinynano').displayName("§5Spiny Nano Boots")

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'kubejs:spiny_nano_helmet' && event.slotType == 'helmet') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($Attributes.MOVEMENT_SPEED, new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 0.8, 'multiply_total'))
        event.addModifier("forge:step_height_addition", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 2.0, 'multiply_total'))
        event.addModifier("puffish_attributes:jump", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 1.0, 'multiply_total'))

    }


    if (event.itemStack.id == 'kubejs:nano_muscle_travelers_boots' && event.slotType == 'feet') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($Attributes.MOVEMENT_SPEED, new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 0.8, 'multiply_total'))
        event.addModifier("forge:step_height_addition", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 2.0, 'multiply_total'))
        event.addModifier("puffish_attributes:jump", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 1.0, 'multiply_total'))

    }


    if (event.itemStack.id == 'kubejs:nano_muscle_travelers_boots' && event.slotType == 'feet') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($Attributes.MOVEMENT_SPEED, new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 0.8, 'multiply_total'))
        event.addModifier("forge:step_height_addition", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 2.0, 'multiply_total'))
        event.addModifier("puffish_attributes:jump", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 1.0, 'multiply_total'))

    }

    if (event.itemStack.id == 'kubejs:nano_muscle_travelers_boots' && event.slotType == 'feet') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($Attributes.MOVEMENT_SPEED, new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 0.8, 'multiply_total'))
        event.addModifier("forge:step_height_addition", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 2.0, 'multiply_total'))
        event.addModifier("puffish_attributes:jump", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 1.0, 'multiply_total'))

    }

})
})
