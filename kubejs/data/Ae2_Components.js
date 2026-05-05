//ServerEvents.recipes((event) => {
//Fluix Pearl
//event.recipes.gtceu.large_chemical_reactor("fluix_pearl")
.itemInputs("minecraft:ender_eye")
.itemInputs("ae2:fluix_crystal")
.itemOutputs("ae2:fluix_pearl")
.inputFluids("gtceu:glowstone 2000")
.inputFluids("gtceu:sulfuric_acid 1000")
.EUt(480)
.duration(800)

//Cores
//event.recipes.gtceu.circuit_assembler("formation_core")
.itemInputs("16x ae2:charged_certus_quartz_crystal")
.itemInputs("32x gtceu:fine_steel_wire")
.itemInputs("gtceu:mv_voltage_coil")
.itemInputs("2x gtceu:plastic_printed_circuit_board")
.itemOutputs("2x ae2:formation_core")
.inputFluids("gtceu:soldering_alloy 144")
.EUt(128)
.duration(400)

//event.recipes.gtceu.circuit_assembler("annihilation_core")
.itemInputs("16x ae2:charged_certus_quartz_crystal")
.itemInputs("32x gtceu:fine_silver_wire")
.itemInputs("gtceu:mv_voltage_coil")
.itemInputs("2x gtceu:plastic_printed_circuit_board")
.itemOutputs("2x ae2:annihilation_core")
.inputFluids("gtceu:soldering_alloy 144")
.EUt(128)
.duration(400)

//Charged Certus 
//event.recipes.gtceu.chemical_reactor("charged_certus_quartz_crystal")
.itemInputs('#forge:gems/certus_quartz')
.itemInputs("minecraft:glowstone_dust")
.itemOutputs("ae2:charged_certus_quartz_crystal")
.inputFluids("minecraft:water 100")
.EUt(32)
.duration(100)

//Removes
//event.remove({id: 'ae2:materials/annihilationcore'})
event.remove({id: 'ae2:materials/formationcore'})
event.remove({id: 'ae2:misc/fluixpearl'})


})
