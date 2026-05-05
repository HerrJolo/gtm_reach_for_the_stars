ServerEvents.recipes(event => {

//InsulatorDust
event.recipes.gtceu.mixer("insulatordust")
.itemInputs("8x gtceu:stone_dust")
.itemInputs("1x gtceu:glass_dust")
.itemOutputs("9x gtceu:rockwoll_insulator_dust")
.EUt(30)
.duration(400)

//InsulatorPlate
event.recipes.gtceu.centrifuge("insulationplate")
.itemInputs("9x gtceu:rockwoll_insulator_dust")
.itemInputs("gtceu:carbon_dust")
.itemOutputs("4x gtceu:rockwoll_insulator_plate")
.inputFluids("gtceu:glue 144")
.EUt(30)
.duration(200)

//InsulatorFoil
event.recipes.gtceu.forming_press("insulatorfoil")
.notConsumable("gtceu:empty_mold")
.itemInputs("4x gtceu:rockwoll_insulator_plate")
.itemInputs("gtceu:carbon_dust")
.itemOutputs("16x gtceu:rockwoll_insulator_foil")
.EUt(30)
.duration(100)

//CupronickleCoil
event.recipes.gtceu.assembler("cuppronicklecoil")
.itemInputs("8x gtceu:cupronickel_double_wire")
.itemInputs("8x gtceu:bronze_foil")
.itemInputs("4x gtceu:rockwoll_insulator_foil")
.itemOutputs("gtceu:cupronickel_coil_block")
.inputFluids("gtceu:tin_alloy 144")
.EUt(30)
.duration(200)

event.remove({output:"gtceu:cupronickel_coil_block"})

//NonConductingGlueline
//glueresidue
event.recipes.gtceu.centrifuge("glueresidu")
.chancedOutput("gtceu:bio_chaff", 200 ,5)
.chancedOutput("gtceu:plant_ball", 100 ,5)
.inputFluids("gtceu:glue 600")
.outputFluids("gtceu:glue_residue 500")
.outputFluids("minecraft:water 100")
.EUt(16)
.duration(100)
.circuit(1)
//nonConductingGlue
event.recipes.gtceu.mixer("nonconductingglue")
.itemInputs('gtceu:tiny_nether_quartz_dust')
.inputFluids("gtceu:glue_residue 400")
.inputFluids("#forge:ethanol 100")
.outputFluids("gtceu:non_conducting_glue 500")
.EUt(30)
.duration(200)
.circuit(1)
//ElectricAssembler
//LV
event.shaped("gtceu:lv_electronics_assembler", [
    "ABA",
    "CDE",
    "ABA"
], {
    A: "gtceu:lv_robot_arm",
    B: '#gtceu:circuits/lv',
    C: "gtceu:lv_electric_pump",
    D: "gtceu:lv_machine_hull",
    E: "gtceu:tin_double_cable"
})
//MV
event.shaped("gtceu:mv_electronics_assembler", [
    "ABA",
    "CDE",
    "ABA"
], {
    A: "gtceu:mv_robot_arm",
    B: '#gtceu:circuits/mv',
    C: "gtceu:mv_electric_pump",
    D: "gtceu:mv_machine_hull",
    E: "gtceu:copper_double_cable"
})

//ElecticalComponents

//FirstRessistor
event.shaped("2x gtceu:resistor", [
    "ABA",
    "CDC",
    " B "
], {
    A: "gtceu:sticky_resin",
    B: "minecraft:paper",
    C: "gtceu:fine_copper_wire",
    D: "#forge:ressistorcoredust"
})
event.shaped("2x gtceu:resistor", [
    "ABA",
    "CDC",
    " B "
], {
    A: "gtceu:sticky_resin",
    B: "minecraft:paper",
    C: "gtceu:copper_single_wire",
    D: "#forge:ressistorcoredust"
})

//GluePaperResistor
event.recipes.gtceu.emassembler(`gluepaperressistor1`)
.itemInputs("#forge:ressistorcoredust")
.itemInputs("2x minecraft:paper")
.itemInputs("4x gtceu:fine_copper_wire")
.itemOutputs("2x gtceu:resistor")
.inputFluids("gtceu:glue 100")
.EUt(30)
.duration(200)
event.recipes.gtceu.emassembler(`gluepaperressistor2`)
.itemInputs('#forge:ressistorcoredust')
.itemInputs("4x minecraft:paper")
.itemInputs('4x gtceu:fine_annealed_copper_wire')
.itemOutputs("4x gtceu:resistor")
.inputFluids("gtceu:glue 100")
.EUt(30)
.duration(200)

//NonCGlue
event.recipes.gtceu.emassembler(`noncglueressistor`)
.itemInputs("4x gtceu:fine_copper_wire")
.itemInputs('#forge:ressistorcoredust')
.itemOutputs("4x gtceu:resistor")
.inputFluids("gtceu:glue 100")
.inputFluids("gtceu:non_conducting_glue 100")
.EUt(30)
.duration(100)
event.recipes.gtceu.emassembler(`noncglueressistor2`)
.itemInputs('4x gtceu:fine_annealed_copper_wire')
.itemInputs('#forge:ressistorcoredust')
.itemOutputs("8x gtceu:resistor")
.inputFluids("gtceu:glue 100")
.inputFluids("gtceu:non_conducting_glue 100")
.EUt(30)
.duration(100)

//GlassArsenideDiodes
event.recipes.gtceu.emassembler("diodeglass")
.itemInputs("4x gtceu:fine_copper_wire")
.itemInputs("gtceu:small_gallium_arsenide_dust")
.itemOutputs("gtceu:diode")
.inputFluids("gtceu:glass 144")
.EUt(30)
.duration(200)
event.recipes.gtceu.emassembler("diodeglass2")
.itemInputs("4x gtceu:fine_annealed_copper_wire")
.itemInputs("gtceu:small_gallium_arsenide_dust")
.itemOutputs("2x gtceu:diode")
.inputFluids("gtceu:glass 144")
.EUt(30)
.duration(200)

//Poly Diode
event.recipes.gtceu.emassembler("polydiode")
.itemInputs("4x gtceu:fine_copper_wire")
.itemInputs('2x gtceu:fine_red_alloy_wire')
.itemInputs('2x kubejs:diode_chip')
.itemOutputs("2x gtceu:diode")
.inputFluids("gtceu:glass 72")
.inputFluids("gtceu:polyethylene 72")
.inputFluids("gtceu:soldering_alloy 36")
.EUt(30)
.duration(200)
.cleanroom(CleanroomType.CLEANROOM)
event.recipes.gtceu.emassembler("polydiode2")
.itemInputs("4x gtceu:fine_annealed_copper_wire")
.itemInputs('2x gtceu:fine_red_alloy_wire')
.itemInputs("2x kubejs:diode_chip")
.itemOutputs("4x gtceu:diode")
.inputFluids("gtceu:glass 72")
.inputFluids("gtceu:polyethylene 72")
.inputFluids("gtceu:soldering_alloy 36")
.EUt(30)
.duration(200)
.cleanroom(CleanroomType.CLEANROOM)

//PolyTantilumDiode
event.recipes.gtceu.emassembler("diode")
.itemInputs("4x gtceu:fine_tantalum_wire")
.itemInputs("4x gtceu:fine_red_alloy_wire")
.itemInputs("2x kubejs:diode_chip")
.itemOutputs("6x gtceu:diode")
.inputFluids("gtceu:polyethylene 72")
.inputFluids("gtceu:soldering_alloy 36")
.duration(100)
.EUt(120)

//Transistor
event.recipes.gtceu.emassembler("transistor1")
.itemInputs("6x gtceu:fine_tin_wire")
.itemInputs("6x gtceu:fine_red_alloy_wire")
.itemInputs("6x kubejs:transistor_chip")
.itemOutputs("6x gtceu:transistor")
.inputFluids("gtceu:polyethylene 144")
.inputFluids("gtceu:soldering_alloy 36")
.EUt(120)
.duration(200)
event.recipes.gtceu.emassembler("transistor")
.itemInputs("6x gtceu:fine_tantalum_wire")
.itemInputs("6x gtceu:fine_red_alloy_wire")
.itemInputs("6x kubejs:transistor_chip")
.itemOutputs("12x gtceu:transistor")
.inputFluids("gtceu:polyethylene 144")
.inputFluids("gtceu:soldering_alloy 72")
.EUt(120)
.duration(200)

//CapacitorPET
event.recipes.gtceu.emassembler("capacitor1")
.itemInputs("2x gtceu:fine_copper_wire")
.itemInputs("2x gtceu:polyethylene_foil")
.itemInputs("4x gtceu:aluminium_foil")
.itemOutputs("4x gtceu:capacitor")
.inputFluids("gtceu:polyethylene 144")
.inputFluids("gtceu:non_conducting_glue 100")
.EUt(120)
.duration(200)
event.recipes.gtceu.emassembler("capacitor2")
.itemInputs("2x gtceu:fine_annealed_copper_wire")
.itemInputs("2x gtceu:polyethylene_foil")
.itemInputs("4x gtceu:aluminium_foil")
.itemOutputs("6x gtceu:capacitor")
.inputFluids("gtceu:polyethylene 144")
.inputFluids("gtceu:non_conducting_glue 100")
.EUt(120)
.duration(200)

//CapacitorPVC
event.recipes.gtceu.emassembler("capacitor3")
.itemInputs("2x gtceu:fine_copper_wire")
.itemInputs("4x gtceu:polyvinyl_chloride_foil")
.itemInputs("2x gtceu:aluminium_foil")
.itemOutputs("6x gtceu:capacitor")
.inputFluids("gtceu:polyvinyl_chloride 144")
.inputFluids("gtceu:non_conducting_glue 100")
.EUt(120)
.duration(200)
.cleanroom(CleanroomType.CLEANROOM)
event.recipes.gtceu.emassembler("capacitor4")
.itemInputs("2x gtceu:fine_annealed_copper_wire")
.itemInputs("4x gtceu:polyvinyl_chloride_foil")
.itemInputs("2x gtceu:aluminium_foil")
.itemOutputs("8x gtceu:capacitor")
.inputFluids("gtceu:polyvinyl_chloride 144")
.inputFluids("gtceu:non_conducting_glue 100")
.EUt(120)
.duration(200)
.cleanroom(CleanroomType.CLEANROOM)

//InductorSteel
event.recipes.gtceu.emassembler("Inductor1")
.itemInputs("gtceu:steel_rod")
.itemInputs("8x gtceu:fine_copper_wire")
.itemOutputs("2x gtceu:inductor")
.inputFluids("gtceu:soldering_alloy 72")
.inputFluids("gtceu:polyethylene 36")
.EUt(120)
.duration(200)
event.recipes.gtceu.emassembler("Inductor2")
.itemInputs("gtceu:steel_rod")
.itemInputs("8x gtceu:fine_annealed_copper_wire")
.itemOutputs("4x gtceu:inductor")
.inputFluids("gtceu:soldering_alloy 144")
.inputFluids("gtceu:polyethylene 72")
.EUt(120)
.duration(200)
//InductorNickelZinc
event.recipes.gtceu.emassembler("inductor3")
.itemInputs("gtceu:nickel_zinc_ferrite_rod")
.itemInputs("8x gtceu:fine_copper_wire")
.itemOutputs("6x gtceu:inductor")
.inputFluids("gtceu:soldering_alloy 144")
.inputFluids("gtceu:polyethylene 72")
.EUt(120)
.duration(200)
.cleanroom(CleanroomType.CLEANROOM)
event.recipes.gtceu.emassembler("inductor4")
.itemInputs("gtceu:nickel_zinc_ferrite_rod")
.itemInputs("8x gtceu:fine_annealed_copper_wire")
.itemOutputs("8x gtceu:inductor")
.inputFluids("gtceu:soldering_alloy 144")
.inputFluids("gtceu:polyethylene 72")
.EUt(120)
.duration(200)
.cleanroom(CleanroomType.CLEANROOM)

//LiquidWorkingCasing
event.recipes.gtceu.assembler("liquidworkingcasing")
.itemInputs("gtceu:steel_frame")
.itemInputs("6x gtceu:potin_plate")
.itemInputs("2x gtceu:aluminium_normal_fluid_pipe")
.itemOutputs("2x kubejs:liquid_working_cassing")
.EUt(120)
.duration(200)

const cleanroom =(frame ,sheet ,ammount ,EUt) =>{
//AdvancedPlascrete
event.recipes.gtceu.assembler(`${ammount}plascrete`)
.itemInputs(frame)
.itemInputs(sheet)
.itemOutputs(`${ammount} gtceu:plascrete`)
.inputFluids("gtceu:concrete 144")
.duration(200)
.EUt(EUt)
}
cleanroom("gtceu:aluminium_frame" ,"6x gtceu:polyvinyl_chloride_plate" ,"4x" ,500)
cleanroom('gtceu:stainless_steel_frame' ,"6x gtceu:polytetrafluoroethylene_plate" ,"6x" ,2000)
cleanroom('gtceu:titanium_frame' ,"6x gtceu:polycaprolactam_plate" ,"8x" ,8000)

//KlimateControllCasing
event.recipes.gtceu.assembler("2xhermeticcasing")
.itemInputs("gtceu:steel_frame")
.itemInputs('4x #forge:plates/steel')
.itemInputs("2x gtceu:aluminium_plate")
.itemInputs("6x gtceu:rubber_foil")
.itemOutputs("2x kubejs:hermeticcasing")
.duration(300)
.EUt(120)

//GreenHouse
event.shaped("gtceu:greenhouse", [
    "ABA",
    "CDC",
    "EBE"
], {
    A: '#gtceu:circuits/mv',
    B: "gtceu:mv_electric_pump",
    C: "kubejs:hermeticcasing",
    D: "gtceu:mv_robot_arm",
    E: "minecraft:dirt"
})

//FluidTank
event.recipes.gtceu.assembler("fluid_tank")
.itemInputs("create:copper_casing")
.itemInputs("4x create:copper_sheet")
.itemInputs("minecraft:glass_pane")
.itemOutputs("create:fluid_tank")
.duration(200)
.EUt(16)

//Vault
event.recipes.gtceu.assembler("item_vault")
.itemInputs("create:andesite_casing")
.itemInputs("4x create:andesite_alloy")
.itemOutputs("create:item_vault")
.duration(200)
.EUt(16)

//Firebrick
event.recipes.gtceu.assembler("firebricks")
.itemInputs("4x gtceu:firebrick")
.itemOutputs("gtceu:firebricks")
.inputFluids("gtceu:concrete 144")
.duration(16)
.EUt(30)

//AndesiteAlloy
event.recipes.gtceu.mixer("andesitealloy")
.itemInputs("minecraft:andesite")
.itemInputs("minecraft:iron_nugget")
.itemOutputs("2x create:andesite_alloy")
.duration(50)
.EUt(8)

//FireClay
event.recipes.gtceu.forming_press("compressed_fireclay")
.itemInputs("gtceu:clay_dust")
.itemInputs("gtceu:brick_dust")
.itemOutputs("2x gtceu:compressed_fireclay")
.duration(200)
.EUt(16)

//PhenolicCircuitBoard
event.recipes.gtceu.assembler("phenolic_circuit_board")
.itemInputs("gtceu:wood_dust")
.itemInputs("2x minecraft:paper")
.itemOutputs("gtceu:phenolic_circuit_board")
.inputFluids("gtceu:glue 50")
.duration(100)
.EUt(16)
event.remove({output:'gtceu:phenolic_circuit_board'})

//CreateSeedOilGtSeedOil
event.recipes.gtceu.centrifuge("bio_chaff2")
.itemOutputs("gtceu:bio_chaff")
.inputFluids("createaddition:seed_oil 1000")
.outputFluids("gtceu:seed_oil 900")
.circuit(10)
.duration(100)
.EUt(4)




















const cutting = (substance ,time ,name) => {
//TransistorCutting
event.recipes.gtceu.cutter(`transistorcutting${name}`)
.itemInputs("kubejs:transistor_wafer")
.itemOutputs("32x kubejs:transistor_chip")
.inputFluids(substance)
.EUt(120)
.duration(time)
//DiodeCutting
event.recipes.gtceu.cutter(`diodecutter${name}`)
.itemInputs("kubejs:diode_wafer")
.itemOutputs("16x kubejs:diode_chip")
.inputFluids(substance)
.EUt(120)
.duration(time)
}
cutting ("minecraft:water 250" ,1800 ,"water")
cutting ('gtceu:distilled_water 150' ,1300 ,"distwater")
cutting ('gtceu:lubricant 100' ,900 ,"lubricant")


const engraving = (wafer ,time ,name ,EUT ,ammount) => {
//TransistorEngraving
event.recipes.gtceu.laser_engraver(`transistorwafer${name}`)
.notConsumable("gtceu:glass_lens")
.itemInputs(wafer)
.itemOutputs(`${ammount} kubejs:transistor_wafer`)
.circuit(10)
.EUt(EUT)
.duration(time)
//DiodeEngraving
event.recipes.gtceu.laser_engraver(`diodewafer${name}`)
.notConsumable("gtceu:glass_lens")
.itemInputs(wafer)
.itemOutputs(`${ammount} kubejs:diode_wafer`)
.circuit(5)
.EUt(EUT)
.duration(time)
}
engraving("gtceu:silicon_wafer" ,900 ,"silicon" ,120 ," ")
engraving('gtceu:phosphorus_wafer' , 500,"phosperus" ,500 ,"4x")
engraving('gtceu:naquadah_wafer' ,200 ,"naquadah" ,2000 ,"8x")
engraving('gtceu:neutronium_wafer' ,50 ,"neutronium" ,8000,"16x")

//Remove
event.remove({output:"gtceu:resistor"})
event.remove({output:"gtceu:diode"})
event.remove({output:"gtceu:transistor"})
event.remove({output:"gtceu:capacitor"})
event.remove({output:"gtceu:inductor"})



})
//"6x gtceu:transistor"