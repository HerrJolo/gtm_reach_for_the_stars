ServerEvents.recipes(event => {


const Trees = (Tree) => {
event.recipes.gtceu.greenshousetree(`${Tree}_log`)
.notConsumable(`minecraft:${Tree}_sapling`)
.itemOutputs(`64x minecraft:${Tree}_log`)
.itemOutputs(`32x minecraft:${Tree}_log`)
.itemOutputs(`2x minecraft:${Tree}_sapling`)
.inputFluids("minecraft:water 2000")
.duration(1200)
.EUt(60)
}
Trees("oak")
Trees("birch")
Trees("spruce")
Trees("jungle")
Trees("acacia")
Trees("dark_oak")
Trees("cherry")

const SpecialTrees = (Sapling, Logs, Extras,Name) => {
event.recipes.gtceu.greenshousetree(Name)
.notConsumable(Sapling)
.itemOutputs(Logs)
.itemOutputs(Sapling)
.itemOutputs(Extras)
.inputFluids("minecraft:water 2000")
.duration(1200)
.EUt(60)
}
SpecialTrees('minecraft:mangrove_propagule', '64x minecraft:mangrove_log', "32x minecraft:mangrove_log" ,"mangrove")
SpecialTrees('biomemakeover:blighted_balsa_sapling', '64x biomemakeover:blighted_balsa_log', "32x biomemakeover:blighted_balsa_log" ,"balsa")
SpecialTrees('biomemakeover:willow_sapling', '64x biomemakeover:willow_log', "32x biomemakeover:willow_log" ,"willow")
SpecialTrees('biomemakeover:swamp_cypress_sapling', '64x biomemakeover:swamp_cypress_log', "32x biomemakeover:swamp_cypress_log" ,"swamp")
SpecialTrees('biomemakeover:ancient_oak_sapling', '64x biomemakeover:ancient_oak_log' ,"32x biomemakeover:ancient_oak_log" ,"ancient")
SpecialTrees('ecologics:coconut_seedling', '64x ecologics:coconut_log' ,'8x ecologics:coconut_slice' ,"coconut")
SpecialTrees('ecologics:walnut_sapling', '64x ecologics:walnut_log' ,'8x ecologics:walnut' ,"walnut")
SpecialTrees('minecraft:azalea', '64x ecologics:azalea_log' ,"8x minecraft:moss_block" ,"azelea")
SpecialTrees('minecraft:flowering_azalea', '64x ecologics:flowering_azalea_log' ,"8x minecraft:moss_block" ,"FloweringAzelea")
SpecialTrees('gtceu:rubber_sapling', '64x thermal:rubberwood_log' ,'16x thermal:rubber' ,"Rubber")
SpecialTrees('thermal:rubberwood_sapling', '64x gtceu:rubber_log' ,'16x gtceu:sticky_resin' ,"gtceuRubber")

})
