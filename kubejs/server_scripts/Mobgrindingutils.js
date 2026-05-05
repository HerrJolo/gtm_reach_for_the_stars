ServerEvents.recipes(event => {
//CursedChickenFeed
event.recipes.gtceu.mixer("gm_chicken_feed_cursed")
.itemInputs("minecraft:wheat_seeds")
.itemInputs("4x minecraft:rotten_flesh")
.itemInputs("4x minecraft:bone")
.itemOutputs("mob_grinding_utils:gm_chicken_feed_cursed")
.inputFluids("mob_grinding_utils:fluid_xp 4000")
.duration(400)
.EUt(500)
event.remove({output:"mob_grinding_utils:nutritious_chicken_feed"})
event.remove({output:'mob_grinding_utils:gm_chicken_feed'})
event.remove({output:'mob_grinding_utils:gm_chicken_feed_cursed'})









})