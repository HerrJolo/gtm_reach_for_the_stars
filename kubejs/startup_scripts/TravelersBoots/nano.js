let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'kubejs:nano_muscle_travelers_boots' && event.slotType == 'feet') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($Attributes.MOVEMENT_SPEED, new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 0.8, 'multiply_total'))
        event.addModifier("forge:step_height_addition", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 2.0, 'multiply_total'))
        event.addModifier("puffish_attributes:jump", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Armor modifier', 1.0, 'multiply_total'))

    }

})