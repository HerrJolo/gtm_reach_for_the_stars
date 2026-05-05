GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create("liquid_area_acumolator")
        .category("custom1")
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.COOLING)

    event.create("aquatic_extractor")
        .category("custom2")
        .setEUIO('in')
        .setMaxIOSize(1, 6, 0, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("mechanicalconcretmixer")
        .category("custom3")
        .setEUIO('in')
        .setMaxIOSize(6, 3, 1, 1) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("vacuumchamber")
        .category("custom4")
        .setEUIO('in')
        .setMaxIOSize(6, 3, 2, 2) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("primitiveassembler")
        .category("custom5")
        .setEUIO('in')
        .setMaxIOSize(6, 2, 2, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("precisionassembler")
        .category("custom5")
        .setEUIO('in')
        .setMaxIOSize(9, 3, 3, 3) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("coilasssembler")
        .category("custom6")
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("specialplanthabitat")
        .category("custom7")
        .setEUIO('in')
        .setMaxIOSize(1, 3, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("emassembler")
        .category("electronicsassembly")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("emassemblyline")
        .category("electronicsassembly")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("electronicsassemblyresistor")
        .category("electronicsassembly")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
    
    event.create("electronicsassemblydiode")
        .category("electronicsassembly")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("electronicsassemblytransistor")
        .category("electronicsassembly")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("electronicsassemblycapacitor")
        .category("electronicsassembly")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("electronicsassemblyinductor")
        .category("electronicsassembly")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("allienassembler")
        .category("allienassembler")
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0) // 
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("greenshousetree")
        .category("plants")
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("greenshouseplants")
        .category("plants")
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("sourcegen")
        .category("source")
        .setEUIO('out')
        .setMaxIOSize(0, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("infusionaltar")
        .category("source")
        .setEUIO('in')
        .setMaxIOSize(12, 2, 6, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("meteorcannon")
        .category("source")
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create("meteorcatcher")
        .category("source")
        .setEUIO('in')
        .setMaxIOSize(3, 18, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})

