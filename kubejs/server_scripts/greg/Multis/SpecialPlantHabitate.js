ServerEvents.recipes((event) => {

//Overworldia
event.recipes.gtceu.specialplanthabitat("stone_dust")
.notConsumable("kubejs:overworldia")
.itemOutputs("64x gtceu:stone_dust")
.itemOutputs("64x gtceu:stone_dust")
.itemOutputs("64x gtceu:stone_dust")
.inputFluids("gtceu:liquid_air 4000")
.inputFluids("minecraft:water 16000")
.inputFluids("minecraft:lava 4000")
.circuit(1)
.EUt(250)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("diorite_dust")
.notConsumable("kubejs:overworldia")
.itemOutputs("64x gtceu:diorite_dust")
.itemOutputs("64x gtceu:diorite_dust")
.itemOutputs("64x gtceu:diorite_dust")
.inputFluids("gtceu:liquid_air 4000")
.inputFluids("minecraft:water 16000")
.inputFluids("minecraft:lava 4000")
.circuit(2)
.EUt(250)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("andesite_dust")
.notConsumable("kubejs:overworldia")
.itemOutputs("64x gtceu:andesite_dust")
.itemOutputs("64x gtceu:andesite_dust")
.itemOutputs("64x gtceu:andesite_dust")
.inputFluids("gtceu:liquid_air 4000")
.inputFluids("minecraft:water 16000")
.inputFluids("minecraft:lava 4000")
.circuit(3)
.EUt(250)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("granite_dust")
.notConsumable("kubejs:overworldia")
.itemOutputs("64x gtceu:granite_dust")
.itemOutputs("64x gtceu:granite_dust")
.itemOutputs("64x gtceu:granite_dust")
.inputFluids("gtceu:liquid_air 4000")
.inputFluids("minecraft:water 16000")
.inputFluids("minecraft:lava 4000")
.circuit(4)
.EUt(250)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("sticky_resin")
.notConsumable("kubejs:overworldia")
.itemOutputs("64x gtceu:sticky_resin")
.inputFluids("gtceu:liquid_air 4000")
.inputFluids("minecraft:water 16000")
.circuit(5)
.EUt(250)
.duration(1000)


//nether
event.recipes.gtceu.specialplanthabitat("netherrack_dust")
.notConsumable('kubejs:nether_shroom')
.itemOutputs('64x gtceu:netherrack_dust')
.itemOutputs('64x gtceu:netherrack_dust')
.itemOutputs('64x gtceu:netherrack_dust')
.inputFluids("gtceu:liquid_nether_air 4000")
.inputFluids("minecraft:lava 16000")
.circuit(1)
.EUt(1000)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("sulfur_dust")
.notConsumable('kubejs:nether_shroom')
.itemOutputs('64x thermal:sulfur_dust')
.inputFluids("gtceu:liquid_nether_air 4000")
.inputFluids("minecraft:lava 16000")
.circuit(2)
.EUt(1000)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("glowstone_dust")
.notConsumable('kubejs:nether_shroom')
.itemOutputs('64x minecraft:glowstone_dust')
.itemOutputs('64x minecraft:glowstone_dust')
.inputFluids("gtceu:liquid_nether_air 4000")
.inputFluids("minecraft:lava 16000")
.circuit(3)
.EUt(1000)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("ash_dust")
.notConsumable('kubejs:nether_shroom')
.itemOutputs('64x gtceu:ash_dust')
.itemOutputs('64x gtceu:ash_dust')
.itemOutputs('64x gtceu:ash_dust')
.inputFluids("gtceu:liquid_nether_air 4000")
.inputFluids("minecraft:lava 16000")
.circuit(4)
.EUt(1000)
.duration(1000)

//Ender
event.recipes.gtceu.specialplanthabitat("endstone_dust")
.notConsumable("kubejs:shulker_flower")
.itemOutputs('64x gtceu:endstone_dust')
.itemOutputs('64x gtceu:endstone_dust')
.inputFluids("gtceu:liquid_ender_air 4000")
.inputFluids("minecraft:water 16000")
.inputFluids("minecraft:lava 16000")
.circuit(1)
.EUt(4000)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("ender_pearl_dust")
.notConsumable("kubejs:shulker_flower")
.itemOutputs('64x gtceu:ender_pearl_dust')
.inputFluids("gtceu:liquid_ender_air 4000")
.inputFluids("minecraft:water 16000")
.inputFluids("minecraft:lava 16000")
.circuit(2)
.EUt(4000)
.duration(1000)

//Salt
event.recipes.gtceu.specialplanthabitat("saltpeter_dust")
.notConsumable("kubejs:salt_flower")
.itemOutputs("32x gtceu:saltpeter_dust")
.itemOutputs("32x gtceu:rock_salt_dust")
.itemOutputs("32x gtceu:salt_dust")
.inputFluids("gtceu:air 4000")
.inputFluids("gtceu:nether_air 4000")
.inputFluids("gtceu:salt_water 1000")
.circuit(1)
.EUt(250)
.duration(1000)

//stone
event.recipes.gtceu.specialplanthabitat("biotite_dust")
.notConsumable("kubejs:stone_carrot")
.itemOutputs("64x gtceu:biotite_dust")
.itemOutputs("32x gtceu:biotite_dust")
.inputFluids("minecraft:lava 16000")
.inputFluids("minecraft:lava 16000")
.inputFluids("minecraft:lava 16000")
.circuit(1)
.EUt(1000)
.duration(1000)

event.recipes.gtceu.specialplanthabitat("olivine_dust")
.notConsumable("kubejs:stone_carrot")
.itemOutputs("64x gtceu:olivine_dust")
.itemOutputs("32x gtceu:olivine_dust")
.inputFluids("minecraft:lava 16000")
.inputFluids("minecraft:lava 16000")
.inputFluids("minecraft:lava 16000")
.circuit(2)
.EUt(250)
.duration(1000)

//garnet
event.recipes.gtceu.specialplanthabitat("red_garnet_dust")
.notConsumable("kubejs:garnet_bulp")
.itemOutputs("64x gtceu:red_garnet_dust")
.itemOutputs("64x gtceu:yellow_garnet_dust")
.inputFluids("minecraft:lava 16000")
.inputFluids("minecraft:lava 16000")
.inputFluids("gtceu:liquid_nether_air 8000")
.circuit(1)
.EUt(1000)
.duration(1000)





















})
//'gtceu:andesite_dust'
//'gtceu:granite_dust'
//'gtceu:diorite_dust'