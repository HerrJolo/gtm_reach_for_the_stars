ServerEvents.recipes(event => {

//pannel
event.recipes.gtceu.assembler("semi_dark_monitor")
.itemInputs("ae2:quartz_fiber")
.itemInputs("gtceu:computer_monitor_cover")
.itemInputs("16x gtceu:fine_red_alloy_wire")
.itemInputs("#gtceu:circuits/ulv")
.itemOutputs("3x ae2:semi_dark_monitor")
.EUt(30)
.duration(200)

//METerminal
event.recipes.gtceu.allienassembler("terminal")
.itemInputs("ae2:semi_dark_monitor")
.itemInputs("2x #gtceu:circuits/mv")
.itemInputs("32x gtceu:fine_electrum_wire")
.itemInputs("8x gtceu:stainless_steel_screw")
.itemInputs("8x gtceu:certus_quartz_bolt")
.itemOutputs("ae2:terminal")
.EUt(30)
.duration(200)

//craftingTerminal
event.recipes.gtceu.allienassembler("crafting_terminal")
.itemInputs("ae2:terminal")
.itemInputs("2x #gtceu:circuits/hv")
.itemInputs("minecraft:crafting_table")
.itemInputs("32x gtceu:fine_aluminium_wire")
.itemInputs("8x gtceu:stainless_steel_screw")
.itemInputs("8x gtceu:certus_quartz_screw")
.itemOutputs("ae2:crafting_terminal")
.EUt(30)
.duration(200)

//PatternEncodingTerminal
event.recipes.gtceu.allienassembler("pattern_encoding_terminal")
.itemInputs("ae2:terminal")
.itemInputs("ae2:pattern_provider")
.itemInputs("2x #gtceu:circuits/ev")
.itemInputs("32x gtceu:fine_platinum_wire")
.itemInputs("32x gtceu:fine_annealed_copper_wire")
.itemOutputs("ae2:pattern_encoding_terminal")
.inputFluids("gtceu:polytetrafluoroethylene 288")
.EUt(500)
.duration(400)

//PatternAccesTerminal
event.shaped("ae2:pattern_access_terminal", [
    "   ",
    " A ",
    "   "
], {
    A: "ae2:pattern_encoding_terminal"
})

//AdvancedPatternAcessTerminal
event.recipes.gtceu.allienassembler("ex_pattern_access_part")
.itemInputs("ae2:terminal")
.itemInputs("ae2:pattern_access_terminal")
.itemInputs("2x #gtceu:circuits/ev")
.itemInputs("16x gtceu:fine_rhodium_wire")
.itemInputs("32x gtceu:fine_steel_wire")
.itemInputs("2x gtceu:polytetrafluoroethylene_frame")
.itemOutputs("expatternprovider:ex_pattern_access_part")
.inputFluids("gtceu:epoxy 288")
.EUt(2000)
.duration(400)






//Remove
const remove = (item) => {
event.remove({output:item})
}
remove("ae2:semi_dark_monitor")
remove("ae2:terminal")
remove("ae2:crafting_terminal")
remove("ae2:pattern_encoding_terminal")
remove("ae2:pattern_access_terminal")
remove("expatternprovider:ex_pattern_access_part")


})