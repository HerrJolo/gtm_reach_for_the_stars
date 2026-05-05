

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'kubejs:spiny_nano_boots' && event.slotType == 'feet') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($Attributes.MOVEMENT_SPEED, new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523cf'), 'Armor modifier', 0.8, 'multiply_total'))
        event.addModifier("forge:step_height_addition", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523cf'), 'Armor modifier', 2.0, 'multiply_total'))
        event.addModifier("puffish_attributes:damage_reflection", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523cf'), 'Armor modifier', 0.2, 'multiply_total'))
    }
})

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'kubejs:spiny_nano_leggings' && event.slotType == 'legs') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier("puffish_attributes:damage_reflection", new $AttributeModifier(UUID.fromString('130ffceb-7ca9-470c-97a3-309ce9790857'), 'Armor modifier', 0.2, 'multiply_total'))
        event.addModifier("puffish_attributes:jump", new $AttributeModifier(UUID.fromString('130ffceb-7ca9-470c-97a3-309ce9790857'), 'Armor modifier', 1.0, 'multiply_total'))
    }
})

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'kubejs:spiny_nano_chestplate' && event.slotType == 'chest') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier("puffish_attributes:breaking_speed", new $AttributeModifier(UUID.fromString('1a9889c2-e6e5-407a-a265-2daab3e452c1'), 'Armor modifier', 0.2, 'multiply_total'))
        event.addModifier("puffish_attributes:damage_reflection", new $AttributeModifier(UUID.fromString('1a9889c2-e6e5-407a-a265-2daab3e452c1'), 'Armor modifier', 0.2, 'multiply_total'))
    }
})

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'kubejs:spiny_nano_helmet' && event.slotType == 'head') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier("puffish_attributes:damage_reflection", new $AttributeModifier(UUID.fromString('f1f2f4f0-20bd-4e01-8073-bf4038b28a35'), 'Armor modifier', 0.2, 'multiply_total'))
        event.addModifier("puffish_attributes:consuming_speed", new $AttributeModifier(UUID.fromString('f1f2f4f0-20bd-4e01-8073-bf4038b28a35'), 'Armor modifier', 0.2, 'multiply_total'))

    }
})