let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    function createStoneTypeOre(type, properties) {
        if (properties === undefined)
            properties = {}

        if (properties.baseModel === undefined)
            properties.baseModel = type.namespace + ":block/" + type.path

        if (properties.material === undefined)
            properties.material = null

        if (properties.blockState === undefined)
            properties.blockState = (() => Block.getBlock(type).defaultBlockState())

        e.create(type.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    }

    createStoneTypeOre('ad_astra:moon_stone')
    createStoneTypeOre('ad_astra:mars_stone')
    createStoneTypeOre('ad_astra:venus_stone')
    createStoneTypeOre('ad_astra:mercury_stone')
    createStoneTypeOre('ad_astra:glacio_stone')

})

GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
    event.create('ad_astra:earth_orbit')
        .iconSupplier(() => Item.of('ad_astra:earth_globe').getItem())
        .tier(0)
        .overrideName('Earth Orbit')
    event.create('ad_astra:moon')
        .iconSupplier(() => Item.of('ad_astra:moon_globe').getItem())
        .tier(1)
        .overrideName('§bThe Moon')
    event.create('ad_astra:mars')
        .iconSupplier(() => Item.of('ad_astra:mars_globe').getItem())
        .tier(2)
        .overrideName('§bMars')
    event.create('ad_astra:venus')
        .iconSupplier(() => Item.of('ad_astra:venus_globe').getItem())
        .tier(3)
        .overrideName('§bVenus')
    event.create('ad_astra:mercury')
        .iconSupplier(() => Item.of('ad_astra:mercury_globe').getItem())
        .tier(3)
        .overrideName('§bMercury')
})