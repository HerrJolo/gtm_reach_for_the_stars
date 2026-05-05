ServerEvents.recipes(event => {

//ElectronTube1
event.recipes.gtceu.vacuumchamber("Electrontubes1")
  .itemInputs('create:polished_rose_quartz')
  .itemInputs('2x gtceu:wrought_iron_bolt')
  .itemInputs('2x minecraft:redstone')
  .inputFluids(Fluid.of("gtceu:glowstone", 36))
  .itemOutputs('create:electron_tube')
  .duration(200)
  .EUt(8)

//ElectronTube2
event.recipes.gtceu.vacuumchamber("Electrontubes2")
  .itemInputs('create:polished_rose_quartz')
  .itemInputs('2x gtceu:steel_bolt')
  .itemInputs('2x minecraft:redstone')
  .inputFluids(Fluid.of("gtceu:glowstone", 36))
  .itemOutputs('2x create:electron_tube')
  .duration(200)
  .EUt(8)

//ElectronTube3
event.recipes.gtceu.vacuumchamber("Electrontubes3")
  .itemInputs('create:polished_rose_quartz')
  .itemInputs('2x gtceu:steel_bolt')
  .itemInputs('2x gtceu:red_alloy_bolt')
  .inputFluids(Fluid.of("gtceu:glowstone", 72))
  .inputFluids(Fluid.of("gtceu:redstone", 36))
  .itemOutputs('4x create:electron_tube')
  .duration(200)
  .EUt(16)

//VacuumTube1
event.recipes.gtceu.vacuumchamber("VacuumTube1")
  .itemInputs('create:electron_tube')
  .itemInputs('2x gtceu:steel_bolt')
  .itemInputs('2x gtceu:copper_single_wire')
  .itemInputs('gtceu:glass_tube')
  .inputFluids(Fluid.of("gtceu:glowstone", 72))
  .itemOutputs('gtceu:vacuum_tube')
  .duration(200)
  .EUt(8)

//VacuumTube2
event.recipes.gtceu.vacuumchamber("VacuumTube2")
  .itemInputs('2x gtceu:steel_bolt')
  .itemInputs('2x gtceu:copper_single_wire')
  .itemInputs('gtceu:glass_tube')
  .inputFluids(Fluid.of("gtceu:red_alloy", 72))
  .itemOutputs('2x gtceu:vacuum_tube')
  .duration(200)
  .EUt(16)

//VacuumTube3
event.recipes.gtceu.vacuumchamber("VacuumTube3")
  .itemInputs('2x gtceu:steel_bolt')
  .itemInputs('2x gtceu:annealed_copper_single_wire')
  .itemInputs('gtceu:glass_tube')
  .inputFluids(Fluid.of("gtceu:red_alloy", 144))
  .itemOutputs('4x gtceu:vacuum_tube')
  .duration(200)
  .EUt(16)


event.remove({id: "gtceu:assembler/vacuum_tube_red_alloy_annealed"})
event.remove({id: "gtceu:assembler/vacuum_tube_red_alloy"})
event.remove({id: "gtceu:assembler/vacuum_tube_plain"})
event.remove({id: "gtceu:shaped/vacuum_tube"})

})


//'gtceu:red_alloy_bolt'
//'gtceu:copper_single_wire'
//'gtceu:annealed_copper_single_wire'