ServerEvents.recipes(event => {
event.recipes.gtceu.liquid_area_acumolator('Salt_Water')
  .circuit(1)
  .outputFluids(Fluid.of("gtceu:salt_water", 1000))
  .duration(20)
  .dimension("minecraft:overworld")

event.recipes.gtceu.liquid_area_acumolator('EarthFragment')
  .circuit(5)
  .chancedOutput('enigmaticaddons:earth_heart_fragment' ,100 ,50)
  .duration(100)
  .dimension("minecraft:overworld")

event.recipes.gtceu.liquid_area_acumolator('Water')
  .circuit(2)
  .outputFluids(Fluid.of("minecraft:water", 1000))
  .duration(20)
  .dimension("minecraft:overworld")
  .dimension("minecraft:the_end")

event.recipes.gtceu.liquid_area_acumolator('Lava')
  .circuit(3)
  .outputFluids(Fluid.of("minecraft:lava", 1000))
  .duration(20)
  .dimension("minecraft:the_nether")

})
//.dimension("namespace:dimension_id")
//"minecraft:the_end"