ServerEvents.recipes(event => {
event.recipes.gtceu.aquatic_extractor('Fishes')
  .circuit(1)
  .chancedOutput('minecraft:tropical_fish' ,1000 ,250)
  .chancedOutput('minecraft:pufferfish' ,1000 ,250)
  .chancedOutput('minecraft:cod' ,6000 ,250)
  .chancedOutput('minecraft:salmon' ,6000 ,250)
  .chancedOutput('miners_delight:glow_squid' ,1000 ,250)
  .chancedOutput('miners_delight:squid' ,2000 ,250)
  .duration(400)
  .EUt(30)
  .biome("minecraft:deep_ocean")

event.recipes.gtceu.aquatic_extractor('OceanBottom')
  .circuit(2)
  .chancedOutput('minecraft:sea_pickle' ,1000 ,250)
  .chancedOutput("minecraft:seagrass" ,2000 ,250)
  .chancedOutput('minecraft:kelp' ,6000 ,250)
  .chancedOutput('minecraft:gravel' ,8000 ,250)
  .chancedOutput('minecraft:sand' ,8000 ,250)
  .chancedOutput('minecraft:clay' ,4000 ,250)
  .duration(400)
  .EUt(30)
  .biome("minecraft:deep_ocean")




})
//'minecraft:pufferfish'
//'miners_delight:glow_squid'
//'#minecraft:coral_blocks'