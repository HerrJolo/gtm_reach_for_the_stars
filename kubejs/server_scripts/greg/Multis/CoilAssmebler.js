ServerEvents.recipes(event => {

//KanthalCoils
event.recipes.gtceu.coilasssembler("kanthalcoil")
.itemInputs("8x gtceu:kanthal_double_wire")
.itemInputs("8x gtceu:aluminium_foil")
.itemInputs("8x gtceu:rockwoll_insulator_foil")
.itemInputs("gtceu:aluminium_frame")
.itemOutputs("gtceu:kanthal_coil_block")
.inputFluids("gtceu:bronze 288")
.inputFluids("gtceu:tin_alloy 288")
.EUt(120)
.duration(1000)
event.remove({output:"gtceu:kanthal_coil_block"})

//NichromeCoils
event.recipes.gtceu.coilasssembler("nichromecoil")
.itemInputs("8x gtceu:nichrome_double_wire")
.itemInputs("8x gtceu:stainless_steel_foil")
.itemInputs("12x gtceu:rockwoll_insulator_foil")
.itemInputs("2x gtceu:stainless_steel_frame")
.itemOutputs("gtceu:nichrome_coil_block")
.inputFluids("gtceu:aluminium 288")
.inputFluids("gtceu:bronze 288")
.EUt(500)
.duration(2000)
event.remove({output:"gtceu:nichrome_coil_block"})

//RTMCoils
event.recipes.gtceu.coilasssembler("rtmcoil")
.itemInputs("8x gtceu:rtm_alloy_double_wire")
.itemInputs("8x gtceu:vanadium_steel_foil")
.itemInputs("16x gtceu:ceramic_woll_insulator_foil")
.itemInputs("4x gtceu:titanium_frame")
.itemOutputs("gtceu:rtm_alloy_coil_block")
.inputFluids("gtceu:nichrome 288")
.inputFluids("gtceu:aluminium 288")
.EUt(2000)
.duration(3000)
event.remove({output:"gtceu:rtm_alloy_coil_block"})

})
//gtceu:aluminium_frame
