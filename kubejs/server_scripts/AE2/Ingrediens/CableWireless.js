ServerEvents.recipes(event => {

//QuartzFiber
event.recipes.gtceu.forming_press("quartz_fiber")
.notConsumable("gtceu:rod_extruder_mold")
.itemInputs("3x ae2:certus_quartz_dust")
.itemInputs("3x gtceu:glass_dust")
.itemOutputs("12x ae2:quartz_fiber")
.EUt(30)
.duration(200)

//FluixCable
event.recipes.gtceu.assembler("fluix_glass_cable")
.itemInputs("6x ae2:quartz_fiber")
.itemInputs("2x ae2:fluix_crystal")
.itemOutputs("8x ae2:fluix_glass_cable")
.EUt(30)
.duration(200)

//CoveredCable
const cable = (fluid ,ammount ,EUT) =>{
event.recipes.gtceu.assembler(`fluix_covered_cable${ammount}`)
.itemInputs("4x ae2:fluix_glass_cable")
.itemOutputs(`${ammount}x ae2:fluix_covered_cable`)
.inputFluids(fluid)
.EUt(EUT)
.duration(200)
}
cable("gtceu:rubber 144" ,4 ,30)
cable("gtceu:silicone_rubber 144" ,16 ,120)
cable("gtceu:styrene_butadiene_rubber 144" ,64 ,500)

//SmartCable
event.recipes.gtceu.assembler("fluix_smart_cable")
.itemInputs("8x ae2:fluix_covered_cable")
.itemInputs('#gtceu:circuits/ulv')
.itemOutputs("8x ae2:fluix_smart_cable")
.inputFluids("gtceu:glowstone 288")
.EUt(30)
.duration(200)

event.recipes.gtceu.assembler("fluix_smart_dense_cable")
.itemInputs("8x ae2:fluix_covered_dense_cable")
.itemInputs('#gtceu:circuits/lv')
.itemOutputs("8x ae2:fluix_smart_dense_cable")
.inputFluids("gtceu:glowstone 576")
.EUt(30)
.duration(200)

//WirelessAccess
event.recipes.gtceu.allienassembler("wireless_access_point")
.itemInputs("ae2:wireless_receiver")
.itemInputs('#gtceu:circuits/ev')
.itemInputs("2x ae2:fluix_covered_dense_cable")
.itemInputs("4x gtceu:fluixsteel_plate")
.itemOutputs("ae2:wireless_access_point")
.EUt(500)
.duration(200)

//WirelessConector
event.recipes.gtceu.allienassembler("wireless_connect")
.itemInputs("4x gtceu:desh_frame")
.itemInputs("2x #gtceu:circuits/iv")
.itemInputs("gtceu:iv_emitter")
.itemInputs("gtceu:iv_sensor")
.itemInputs("16x gtceu:fine_osmiridium_wire")
.itemOutputs("expatternprovider:wireless_connect")
.inputFluids("gtceu:polytetrafluoroethylene 288")
.inputFluids("gtceu:soldering_alloy 144")
.EUt(8000)
.duration(200)
//Hub
event.recipes.gtceu.allienassembler("wireless_hub")
.itemInputs("16x gtceu:desh_frame")
.itemInputs("4x expatternprovider:wireless_connect")
.itemInputs("gtceu:zpm_sensor")
.itemInputs("gtceu:zpm_emitter")
.itemInputs("4x #gtceu:circuits/zpm")
.itemInputs("32x gtceu:fine_niobium_titanium_wire")
.itemOutputs("expatternprovider:wireless_hub")
.inputFluids("gtceu:americium 288")
.inputFluids("gtceu:rhodium 288")
.EUt(32000)
.duration(400)

//QuantumRing
event.recipes.gtceu.allienassembler("quantum_ring")
.itemInputs("4x ae2:energy_cell")
.itemInputs("16x gtceu:fluixsteel_frame")
.itemInputs("16x gtceu:platinum_quadruple_cable")
.itemInputs("8x #gtceu:circuits/iv")
.itemInputs("64x gtceu:fine_iridium_wire")
.itemInputs("64x gtceu:fine_iridium_wire")
.itemOutputs("8x ae2:quantum_ring")
.inputFluids("gtceu:molten_niobium_titanium 576")
.inputFluids("gtceu:tungsten 576")
.EUt(8000)
.duration(400)
event.recipes.gtceu.allienassembler("quantum_link")
.itemInputs("2x gtceu:desh_frame")
.itemInputs("4x gtceu:ev_field_generator")
.itemInputs("2x gtceu:iv_sensor")
.itemInputs("2x gtceu:iv_emitter")
.itemInputs("8x gtceu:laminated_glass")
.itemInputs("16x gtceu:long_platinum_rod")
.itemOutputs("2x ae2:quantum_link")
.inputFluids("gtceu:advanced_glue 288")
.inputFluids("gtceu:epoxy 576")
.EUt(8000)
.duration(400)

//Wirelessterminal
event.recipes.gtceu.allienassembler("wireless_terminal")
.itemInputs("ae2:terminal")
.itemInputs("ae2:energy_cell")
.itemInputs("ae2:wireless_receiver")
.itemInputs("2x #gtceu:circuits/ev")
.itemInputs("32x gtceu:fine_platinum_wire")
.itemOutputs("ae2:wireless_terminal")
.inputFluids("gtceu:polyethylene 576")
.EUt(2000)
.duration(400)
event.recipes.gtceu.allienassembler("wireless_crafting_terminal")
.itemInputs("ae2:wireless_terminal")
.itemInputs("2x #gtceu:circuits/iv")
.itemInputs("ae2:crafting_terminal")
.itemInputs("32x gtceu:fine_rhodium_wire")
.itemInputs("2x gtceu:ev_emitter")
.itemOutputs("ae2:wireless_crafting_terminal")
.inputFluids("gtceu:polyethylene 576")
.EUt(2000)
.duration(400)

//P2p
event.recipes.gtceu.allienassembler("me_p2p_tunnel")
.itemInputs("2x ae2:fluix_glass_cable")
.itemInputs("gtceu:certus_quartz_block")
.itemInputs("ae2:engineering_processor")
.itemOutputs("ae2:me_p2p_tunnel")
.inputFluids("gtceu:polyethylene 144")
.duration(400)
.EUt(30)








//Remove
const remove = (item) => {
event.remove({output:item})
}
remove("ae2:quartz_fiber")
remove("ae2:fluix_covered_cable")
remove("ae2:fluix_glass_cable")
remove("ae2:fluix_smart_dense_cable")
remove("ae2:fluix_smart_cable")
remove("ae2:wireless_access_point")
remove("ae2:wireless_crafting_terminal")
remove("ae2:wireless_terminal")
remove("ae2:quantum_link")
remove("ae2:quantum_ring")
remove("ae2:me_p2p_tunnel")


})