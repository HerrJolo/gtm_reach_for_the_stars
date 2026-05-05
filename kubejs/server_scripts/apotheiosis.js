ServerEvents.recipes(event => {
//SalavagingTable
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:vanadium_steel_plate',
         'minecraft:lava_bucket',
         'gtceu:vanadium_steel_plate',
         'apotheosis:gem_dust',
         'gtceu:vanadium_steel_plate',
         'minecraft:lava_bucket',
         'gtceu:vanadium_steel_plate',
        'apotheosis:gem_dust',],

        'minecraft:smithing_table',
     
        'apotheosis:salvaging_table',

        2500
    )
event.remove({output: 'apotheosis:salvaging_table'})

//SimpleReforingTable
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:smooth_stone',
         'apotheosis:gem_fused_slate',
         'minecraft:smooth_stone',
         'apotheosis:gem_fused_slate',
         'minecraft:smooth_stone',
         'apotheosis:gem_fused_slate',
         'minecraft:smooth_stone',
         'apotheosis:gem_fused_slate',],

        'minecraft:enchanting_table',
     
        'apotheosis:simple_reforging_table',

        2500
    )
event.remove({output: 'apotheosis:simple_reforging_table'})

//GemCutter
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:stonecutter',
         'gtceu:vanadium_steel_buzz_saw_blade',],

        'minecraft:smithing_table',
     
        'apotheosis:gem_cutting_table',

        2500
    )
event.remove({output: 'apotheosis:gem_cutting_table'})







})