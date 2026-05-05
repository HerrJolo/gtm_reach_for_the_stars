ServerEvents.recipes(event => {


//Concret1
const input = (color) => {

event.recipes.gtceu.mechanicalconcretmixer(`solidconcretmixer${color}`)
  .itemInputs("4x minecraft:sand")
  .itemInputs("4x minecraft:gravel")
  .itemInputs("gtceu:clay_dust")
  .inputFluids(Fluid.of("minecraft:water", 100))
  .itemInputs(`#forge:dyes/${color}`)
  .itemOutputs(`8x minecraft:${color}_concrete`)
  .circuit(1)
  .duration(100)
}
input("white")
input("light_gray")
input("gray")
input("black")
input("brown")
input("red")
input("orange")
input("yellow")
input("lime")
input("green")
input("cyan")
input("light_blue")
input("blue")
input("purple")
input("magenta")
input("pink")


//Concret2
const input3 = (color) => {

event.recipes.gtceu.mechanicalconcretmixer(`liquidconcretmixer${color}`)
  .inputFluids(Fluid.of("gtceu:concrete", 288))
  .itemInputs(`#forge:dyes/${color}`)
  .itemOutputs(`4x minecraft:${color}_concrete`)
  .circuit(1)
  .duration(100)
}
input3("white")
input3("light_gray")
input3("gray")
input3("black")
input3("brown")
input3("red")
input3("orange")
input3("yellow")
input3("lime")
input3("green")
input3("cyan")
input3("light_blue")
input3("blue")
input3("purple")
input3("magenta")
input3("pink")


//XtoneTiles
event.recipes.gtceu.mechanicalconcretmixer("rawxtontiles")
  .itemInputs("4x #minecraft:sand")
  .itemInputs("4x minecraft:stone")
  .itemInputs("minecraft:cobblestone")
  .inputFluids(Fluid.of("gtceu:concrete", 72))
  .itemOutputs('8x xtonesreworked:xtone_tile')
  .circuit(2)
  .duration(100)

event.remove({id: "xtonesreworked:xtone_tile"})


//XtoneTilesVariant
const input2 = (ExtraItem, output) => {

event.recipes.gtceu.mechanicalconcretmixer(`xtontiles${output}`)
  .itemInputs('8x xtonesreworked:xtone_tile')
  .itemInputs(ExtraItem)
  .itemOutputs(`8x ${output}`)
  .circuit(2)
  .duration(100)
}
input2("minecraft:clay_ball", "xtonesreworked:zane_block_15")
input2("minecraft:sand", "xtonesreworked:roen_block_0")
input2("minecraft:dirt", 'xtonesreworked:kryp_block_0')
input2("minecraft:netherrack", 'xtonesreworked:lair_block_0')
input2("minecraft:cobbled_deepslate", 'xtonesreworked:vena_block_0')
input2("minecraft:brick", 'xtonesreworked:fort_block_0')
input2("#forge:dyes/orange", 'xtonesreworked:jelt_block_0')
input2("#forge:dyes/red", 'xtonesreworked:reds_block_0')
input2("minecraft:snow", 'xtonesreworked:myst_block_0')
input2("minecraft:bone", "xtonesreworked:zkul_block_15")
input2("minecraft:coal", "xtonesreworked:bitt_block_0")
input2("minecraft:gravel", "xtonesreworked:korp_block_0")
input2("#forge:dyes/gray", "xtonesreworked:tank_block_0")
input2("#forge:dyes/blue", "xtonesreworked:azur_block_0")
input2("minecraft:iron_ingot", "xtonesreworked:zech_block_15")
input2("#forge:dyes/green", "xtonesreworked:sync_block_0")
input2("#forge:dyes/blue", "xtonesreworked:lave_block_0")
input2("minecraft:sugar_cane", "xtonesreworked:reed_block_0")
input2("#forge:dyes/yellow", "xtonesreworked:sols_block_0")
input2("minecraft:smooth_stone_slab", "xtonesreworked:zone_block_15")
input2("minecraft:andesite", "xtonesreworked:zoea_block_15")
input2("minecraft:stick", "xtonesreworked:zyth_block_15")
input2("minecraft:stone", "xtonesreworked:iszm_block_0")
input2("#forge:dyes/lime", "xtonesreworked:mint_block_0")
input2("minecraft:snowball", "xtonesreworked:zest_block_0")
input2("minecraft:glass", "xtonesreworked:glaxx_block_0")
input2("minecraft:torch", "xtonesreworked:zion_block_0")
input2("minecraft:terracotta", "xtonesreworked:zorg_block_15")
input2("minecraft:string", "xtonesreworked:zeta_block_0")
input2("minecraft:clay", "xtonesreworked:cray_block_0")
input2("#forge:dyes/black", "xtonesreworked:vect_block_0")
input2("#forge:dyes/light_gray", "xtonesreworked:ztyl_block_0")
input2("#forge:dyes/black", "xtonesreworked:agon_block_0")

event.remove({id: "xtonesreworked:zane_block_0_alternative"})
event.remove({id: "xtonesreworked:roen_block_0"})
event.remove({id: 'xtonesreworked:kryp_block_0'})
event.remove({id: 'xtonesreworked:lair_block_0'})
event.remove({id: 'xtonesreworked:vena_block_0'})
event.remove({id: 'xtonesreworked:jelt_block_0'})
event.remove({id: 'xtonesreworked:reds_block_0'})
event.remove({id: 'xtonesreworked:zkul_block_0_alternative'})
event.remove({id: 'xtonesreworked:zome_block_0_alternative'})
event.remove({id: 'xtonesreworked:fort_block_0'})
event.remove({id: 'xtonesreworked:myst_block_0_alternative'})
event.remove({id: 'xtonesreworked:bitt_block_0'})
event.remove({id: 'xtonesreworked:korp_block_0'})
event.remove({id: 'xtonesreworked:tank_block_0'})
event.remove({id: 'xtonesreworked:azur_block_0'})
event.remove({id: 'xtonesreworked:zech_block_0_alternative'})
event.remove({id: 'xtonesreworked:sync_block_0'})
event.remove({id: 'xtonesreworked:lave_block_0'})
event.remove({id: 'xtonesreworked:reed_block_0'})
event.remove({id: 'xtonesreworked:sols_block_0'})
event.remove({id: 'xtonesreworked:zone_block_0_alternative'})
event.remove({id: 'xtonesreworked:zoea_block_0_alternative'})
event.remove({id: 'xtonesreworked:zyth_block_0_alternative'})
event.remove({id: 'xtonesreworked:iszm_block_0'})
event.remove({id: 'xtonesreworked:mint_block_0'})
event.remove({id: 'xtonesreworked:zest_block_0_alternative'})
event.remove({id: 'xtonesreworked:glaxx_block_0'})
event.remove({id: 'xtonesreworked:zion_block_0_alternative'})
event.remove({id: 'xtonesreworked:zorg_block_0_alternative'})
event.remove({id: 'xtonesreworked:zeta_block_0_alternative'})
event.remove({id: 'xtonesreworked:cray_block_0'})
event.remove({id: 'xtonesreworked:vect_block_0'})
event.remove({id: 'xtonesreworked:ztyl_block_0'})
event.remove({id: 'xtonesreworked:agon_block_0'})

































})
