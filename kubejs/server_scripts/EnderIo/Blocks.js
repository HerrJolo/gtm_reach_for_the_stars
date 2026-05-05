ServerEvents.recipes((event) => {
//ConduitBinder
event.recipes.gtceu.mixer("conduit_binder_composite")
.itemInputs("4x minecraft:gravel")
.itemInputs("4x minecraft:sand")
.itemInputs("2x minecraft:clay_ball")
.itemOutputs("10x enderio:conduit_binder_composite")
.inputFluids("minecraft:water 250")
.EUt(30)
.duration(400)

//ConduitBinder
event.smelting("enderio:conduit_binder", "enderio:conduit_binder_composite")




event.remove({mod:"pipez"})
})