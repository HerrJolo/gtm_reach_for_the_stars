GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electronics_assembler', 'simple')
        .tiers(GTValues.LV, GTValues.MV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Electronics Assembler")
                .recipeType('emassembler')
                .workableTieredHullModel('gtceu:block/machines/assembler'))
})