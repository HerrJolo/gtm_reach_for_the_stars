ServerEvents.recipes((event) => {
//ConstantinPlate
event.recipes.gtceu.bender("constantan_plate")
.itemInputs("thermal:constantan_ingot")
.itemOutputs("thermal:constantan_plate")
.circuit(1)
.EUt(28)
.duration(400)

})
