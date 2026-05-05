ServerEvents.recipes(event => {

//Pedastool
event.recipes.gtceu.assembler("arspedastl")
.itemInputs("4x ars_nouveau:archwood_planks")
.itemInputs("gtceu:long_gold_rod")
.itemInputs("2x gtceu:gold_screw")
.itemInputs("amethysttoolsmod:amethyst_cluster")
.itemInputs("2x ars_nouveau:sourcestone_slab")
.itemOutputs("ars_nouveau:arcane_pedestal")
.duration(200)
.EUt(30)
event.remove({output:"ars_nouveau:arcane_pedestal"})

//Brazier
event.recipes.gtceu.assembler("arsbrazier")
.itemInputs("2x ars_nouveau:arcane_pedestal")
.itemInputs("2x amethysttoolsmod:amethyst_cluster_lv2")
.itemInputs("2x ars_nouveau:sourcestone_slab")
.itemInputs("4x ars_nouveau:archwood_planks")
.itemInputs("2x gtceu:long_gold_rod")
.itemInputs("4x gtceu:gold_screw")
.itemOutputs("ars_nouveau:ritual_brazier")
.duration(300)
.EUt(30)
event.remove({output:"ars_nouveau:ritual_brazier"})

//SourstoneSlab
event.recipes.gtceu.cutter("sorurcestoneslabwater")
.itemInputs("ars_nouveau:sourcestone")
.itemOutputs("ars_nouveau:sourcestone_slab")
.inputFluids("minecraft:water 4")
.EUt(30)
.duration(100)
event.recipes.gtceu.cutter("sorurcestoneslabdistwater")
.itemInputs("ars_nouveau:sourcestone")
.itemOutputs("ars_nouveau:sourcestone_slab")
.inputFluids("gtceu:distilled_water 3")
.EUt(30)
.duration(100)
event.recipes.gtceu.cutter("sorurcestoneslablubricant")
.itemInputs("ars_nouveau:sourcestone")
.itemOutputs("ars_nouveau:sourcestone_slab")
.inputFluids("gtceu:lubricant 1")
.EUt(30)
.duration(100)
event.remove({output:"ars_nouveau:sourcestone_slab"})

//AmethystCluster1
event.recipes.gtceu.primitiveassembler("amethystcluster1")
.itemInputs("4x minecraft:amethyst_shard")
.itemInputs("4x minecraft:slime_ball")
.itemInputs("2x gtceu:iron_ring")
.itemInputs("3x gtceu:amethyst_dust")
.itemOutputs("amethysttoolsmod:amethyst_cluster")
.inputFluids("minecraft:water 144")
.EUt(8)
.duration(200)
event.recipes.gtceu.assembler("assembleramethystcluster1")
.itemInputs("4x minecraft:amethyst_shard")
.itemInputs("4x minecraft:slime_ball")
.itemInputs("2x gtceu:iron_ring")
.itemInputs("3x gtceu:amethyst_dust")
.itemOutputs("amethysttoolsmod:amethyst_cluster")
.inputFluids("minecraft:water 144")
.EUt(30)
.duration(100)
event.remove({output:"amethysttoolsmod:amethyst_cluster"})


//Amethyscluster2
event.recipes.gtceu.primitiveassembler("amethystcluster2")
.itemInputs("2x amethysttoolsmod:amethyst_cluster")
.itemInputs("2x minecraft:amethyst_block")
.itemInputs("4x minecraft:slime_ball")
.itemInputs("2x gtceu:steel_ring")
.itemOutputs("amethysttoolsmod:amethyst_cluster_lv2")
.inputFluids("minecraft:water 144")
.EUt(8)
.duration(400)
event.recipes.gtceu.assembler("assembleramethystcluster2")
.itemInputs("2x amethysttoolsmod:amethyst_cluster")
.itemInputs("2x minecraft:amethyst_block")
.itemInputs("4x minecraft:slime_ball")
.itemInputs("2x gtceu:steel_ring")
.itemOutputs("amethysttoolsmod:amethyst_cluster_lv2")
.inputFluids("minecraft:water 144")
.EUt(30)
.duration(200)
event.remove({output:"amethysttoolsmod:amethyst_cluster_lv2"})

//ArcaneCore
event.recipes.gtceu.assembler("arcanecore")
.itemInputs("4x #forge:plates/gold")
.itemInputs("4x gtceu:long_gold_rod")
.itemInputs("ars_nouveau:source_gem_block")
.itemInputs("2x ars_nouveau:sourcestone")
.itemInputs("2x amethysttoolsmod:amethyst_cluster_lv2")
.itemOutputs("ars_nouveau:arcane_core")
.EUt(30)
.duration(400)
event.remove({output:"ars_nouveau:arcane_core"})

//ImbumentChamber
event.recipes.gtceu.assembler("imbumenechamber")
.itemInputs("2x gtceu:gold_rod")
.itemInputs("amethysttoolsmod:amethyst_cluster")
.itemInputs("2x ars_nouveau:archwood_slab")
.itemOutputs("ars_nouveau:imbuement_chamber")
.EUt(30)
.duration(100)
event.remove({output:"ars_nouveau:imbuement_chamber"})

//SourceTank
event.recipes.gtceu.assembler("sourcetank")
.itemInputs("ars_nouveau:sourcestone")
.itemInputs("4x gtceu:gold_rod")
.itemInputs("create:fluid_tank")
.itemInputs("2x ars_nouveau:archwood_slab")
.itemOutputs("ars_nouveau:source_jar")
.EUt(30)
.duration(100)
event.remove({output:"ars_nouveau:source_jar"})

//EnchantingApperatus
event.recipes.gtceu.assembler("apperatus")
.itemInputs("ars_nouveau:arcane_pedestal")
.itemInputs("2x ars_nouveau:source_gem_block")
.itemInputs("4x create:golden_sheet")
.itemInputs("8x gtceu:gold_bolt")
.itemOutputs("ars_nouveau:enchanting_apparatus")
.EUt(30)
.duration(400)
event.remove({output:"ars_nouveau:enchanting_apparatus"})


//HeartOfTheEarth
event.recipes.ars_nouveau.enchanting_apparatus([
'enigmaticaddons:earth_heart_fragment',
"minecraft:lapis_block",
'enigmaticaddons:earth_heart_fragment',
"minecraft:amethyst_block",
'enigmaticaddons:earth_heart_fragment',
"minecraft:redstone_block",
'enigmaticaddons:earth_heart_fragment',
"minecraft:amethyst_block"],
 // input items
'ars_nouveau:earth_essence',
 // reagent
'enigmaticlegacy:earth_heart', // output
1000) // source cost
event.remove({output:'enigmaticlegacy:earth_heart'})

//EnigmaticAmuletRerole
event.recipes.ars_nouveau.enchanting_apparatus([
'enigmaticaddons:earth_heart_fragment',
'minecraft:gold_ingot',
'enigmaticaddons:earth_heart_fragment',
'minecraft:gold_ingot',
'enigmaticaddons:earth_heart_fragment',
'minecraft:gold_ingot',
'enigmaticaddons:earth_heart_fragment',
'minecraft:gold_ingot'],
 // input items
'enigmaticlegacy:enigmatic_amulet',
 // reagent
'enigmaticlegacy:unwitnessed_amulet', // output
1000) // source cost
})
