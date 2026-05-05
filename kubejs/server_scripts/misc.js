ServerEvents.recipes(event => {


//WeedCentrifuge
event.recipes.gtceu.centrifuge("cornflower")
.itemInputs("immersive_weathering:weeds")
.chancedOutput("minecraft:cornflower", 5000 ,1000)
.chancedOutput("minecraft:poppy", 5000 ,1000)
.chancedOutput("minecraft:dandelion", 5000 ,1000)
.chancedOutput("minecraft:white_tulip", 5000 ,1000)
.chancedOutput("born_in_chaos_v1:river_mint", 3000 ,1000)
.duration(100)
.EUt(16)

//greenMintDye
event.recipes.gtceu.centrifuge("green_dye")
.itemInputs("3x born_in_chaos_v1:river_mint")
.itemOutputs("minecraft:green_dye")
.duration(200)
.EUt(8)

//DarkRod
event.recipes.gtceu.macerator("carbon_dust")
.itemInputs("born_in_chaos_v1:dark_rod")
.itemOutputs("4x gtceu:carbon_dust")
.itemOutputs("2x minecraft:blaze_powder")
.duration(200)
.EUt(8)

//FireDust
event.recipes.gtceu.centrifuge("flint_dust")
.itemInputs("2x born_in_chaos_v1:fire_dust")
.itemOutputs("gtceu:flint_dust")
.itemOutputs("minecraft:blaze_powder")
.duration(200)
.EUt(8)

//PhantomPowder
event.recipes.gtceu.centrifuge("gunpowder")
.itemInputs("4x born_in_chaos_v1:phantom_powder")
.itemOutputs("3x minecraft:gunpowder")
.itemOutputs("gtceu:ender_pearl_dust")
.duration(200)
.EUt(16)


//PileOFDarkMetall
event.recipes.gtceu.macerator("damascus_steel_dust")
.itemInputs("2x born_in_chaos_v1:pileof_dark_metal")
.itemOutputs("gtceu:damascus_steel_dust")
.itemOutputs("gtceu:carbon_dust")
.duration(200)
.EUt(16)























})