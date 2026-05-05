ServerEvents.recipes(event => {

//CeramicWoolDust
event.recipes.gtceu.mixer("ceramic_woll_dust")
.itemInputs("18x gtceu:rockwoll_insulator_dust")
.itemInputs("4x gtceu:clay_dust")
.itemInputs("2x gtceu:silicon_dust")
.itemOutputs("24x gtceu:ceramic_woll_dust")
.EUt(500)
.duration(200)

//CeramicWollInsulatorDust
event.recipes.gtceu.mixer("ceramicinsulatorwoll")
.itemInputs("6x gtceu:ceramic_woll_dust")
.itemInputs("2x gtceu:silicon_dust")
.itemOutputs("8x gtceu:ceramic_woll_insulator_dust")
.EUt(500)
.duration(200)

//CeramicWollIsolaterPlate
event.recipes.gtceu.centrifuge("ceramicwollinsulatorplate")
.itemInputs("8x gtceu:ceramic_woll_insulator_dust")
.itemInputs("2x gtceu:silicon_dust")
.itemOutputs("4x gtceu:ceramic_woll_insulator_plate")
.inputFluids("gtceu:advanced_glue 72")
.EUt(500)
.duration(100)

//CeramicWollInsulatorFoil
event.recipes.gtceu.forming_press("ceramic_woll_insulator_foil")
.notConsumable("gtceu:empty_mold")
.itemInputs("4x gtceu:ceramic_woll_insulator_plate")
.itemInputs("gtceu:carbon_dust")
.itemOutputs("8x gtceu:ceramic_woll_insulator_foil")
.EUt(120)
.duration(100)

const  aeml = (smd ,asl) => {

event.shaped(asl, [
    "ABA",
    "CDC",
    "AEA"
], {
    A: "gtceu:ev_robot_arm",
    B: "gtceu:titanium_frame",
    C:  smd,
    D: "gtceu:emassemblyline",
    E: "gtceu:data_stick"
})
}
aeml("gtceu:smd_diode" ,'gtceu:emassemblylinediode')
aeml('gtceu:smd_transistor' ,'gtceu:emassemblylinetransistor')
aeml("gtceu:smd_resistor" ,'gtceu:emassemblylineresistor')
aeml("gtceu:smd_capacitor" ,'gtceu:emassemblylinecapacitor')
aeml("gtceu:smd_inductor" ,'gtceu:emassemblylineinductor')

//tungstate
event.remove({input:"gtceu:tungstate_dust"})

//TungstenTrioxid
event.recipes.gtceu.electrolyzer("lithium_dust")
.itemInputs("4x gtceu:tungstate_dust")
.itemOutputs("2x gtceu:lithium_dust")
.itemOutputs("gtceu:tungstentrioxid_dust")
.outputFluids("gtceu:oxygen 1000")
.duration(200)
.EUt(120)

//Schelitte
event.recipes.gtceu.large_chemical_reactor("scheelite_dust")
.itemInputs("gtceu:calcium_dust")
.itemInputs("gtceu:tungstentrioxid_dust")
.itemOutputs("3x gtceu:scheelite_dust")
.inputFluids("gtceu:oxygen 1000")
.duration(200)
.EUt(500)


})