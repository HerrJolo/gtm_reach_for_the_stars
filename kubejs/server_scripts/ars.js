ServerEvents.recipes(event => {
event.remove({mod: 'ars_nouveau'})
event.remove({mod: 'eidolon'})
event.remove({mod: 'pylons'})
event.remove({mod: 'travelersboots'})

//sourcegemblock
event.recipes.gtceu.compressor("source_gem_block")
.itemInputs("4x ars_nouveau:source_gem")
.itemOutputs("ars_nouveau:source_gem_block")
.duration(100)
.EUt(30)


//SourceGem
event.recipes.ars_nouveau.imbuement(
        'minecraft:amethyst_shard', // input item
        'ars_nouveau:source_gem', // output
        100, // source cost
           []
    )
event.recipes.ars_nouveau.imbuement(
        'minecraft:amethyst_block', // input item
        'ars_nouveau:source_gem_block', // output
        400, // source cost
           []
    )
event.recipes.ars_nouveau.imbuement(
        'minecraft:amethyst_block', // input item
        'ars_nouveau:source_gem_block', // output
        400, // source cost
           []
    )
event.recipes.ars_nouveau.imbuement(
        'minecraft:lapis_lazuli', // input item
        'ars_nouveau:source_gem', // output
        100, // source cost
           []
    )

//AgronomicSourcelink
event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem_block','minecraft:pumpkin','gtceu:small_gold_spring', 'minecraft:wheat','ars_nouveau:source_gem_block', 'minecraft:carrot', 'gtceu:small_gold_spring',  'minecraft:potato'], // input items
        'ars_nouveau:arcane_pedestal', // reagent
        'ars_nouveau:agronomic_sourcelink', // output
        0 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

//mycelialSourcelink
event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem_block','minecraft:red_mushroom','gtceu:small_silver_spring', 'minecraft:brown_mushroom','ars_nouveau:source_gem_block', 'minecraft:red_mushroom', 'gtceu:small_silver_spring',  'minecraft:brown_mushroom'], // input items
        'ars_nouveau:arcane_pedestal', // reagent
        'ars_nouveau:mycelial_sourcelink', // output
        0 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

//Sourcerelays
event.recipes.gtceu.assembler("relay")
.itemInputs("gtceu:gold_frame")
.itemInputs("ars_nouveau:source_gem_block")
.itemInputs("2x gtceu:small_silver_spring")
.itemOutputs("2x ars_nouveau:relay")
.duration(200)
.EUt(30)
event.shaped("ars_nouveau:relay_splitter", [
    "   ",
    " A ",
    "   "
], {
    A: "ars_nouveau:relay_splitter"
})
event.shaped("ars_nouveau:relay_collector", [
    "   ",
    " AB",
    "   "
], {
    A: "ars_nouveau:relay",
    B: "minecraft:hopper"
})
event.shaped("ars_nouveau:relay_warp", [
    "   ",
    "ABA",
    "   "
], {
    A: "minecraft:ender_eye",
    B: "ars_nouveau:relay"
})
event.shaped("ars_nouveau:relay_deposit", [
    " A ",
    " B ",
    " A "
], {
    A: "minecraft:piston",
    B: "ars_nouveau:relay"
})
//WarpScroll
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:ender_pearl',"ars_nouveau:source_gem"], // input items
        'enigmaticlegacy:thicc_scroll', // reagent
        '2x ars_nouveau:warp_scroll', // output
        100 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber','minecraft:ender_eye','gtceu:long_aluminium_rod','ars_nouveau:magebloom_fiber','minecraft:ender_eye'], // input items
        'ars_nouveau:warp_scroll', // reagent
        'ars_nouveau:stable_warp_scroll', // output
        2000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//MagebloomSeed
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:cobweb','ars_nouveau:source_gem','minecraft:cobweb','ars_nouveau:source_gem'], // input items
        'minecraft:wheat_seeds', // reagent
        'ars_nouveau:magebloom_crop', // output
        500 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//MageBloomFiber
event.recipes.gtceu.wiremill("magebloom_fiber")
.itemInputs("ars_nouveau:magebloom")
.itemOutputs("ars_nouveau:magebloom_fiber")
.duration(100)
.EUt(16)
//SoulSteelPlating
event.recipes.gtceu.bender("soul_stained_steel_plating")
.itemInputs("malum:soul_stained_steel_ingot")
.itemOutputs("malum:soul_stained_steel_plating")
.duration(400)
.EUt(16)
//SoulDust
event.recipes.gtceu.centrifuge("soul_dust")
.itemInputs("minecraft:soul_sand")
.chancedOutput("enigmaticlegacy:soul_dust",5000 ,1000)
.chancedOutput("enigmaticlegacy:soul_dust",3000 ,1000)
.chancedOutput("enigmaticlegacy:soul_dust",1000 ,1000)
.duration(400)
.EUt(8)
//SouSteel
event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem','enigmaticlegacy:soul_dust','ars_nouveau:source_gem','enigmaticlegacy:soul_dust'], // input items
        'gtceu:steel_ingot', // reagent
        'malum:soul_stained_steel_ingot', // output
        250 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//WickedWeave
event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber','malum:wicked_spirit','ars_nouveau:magebloom_fiber','malum:wicked_spirit','ars_nouveau:magebloom_fiber','malum:wicked_spirit','ars_nouveau:magebloom_fiber','malum:wicked_spirit'], // input items
        'gtceu:steel_ingot', // reagent
        'eidolon:wicked_weave', // output
        500 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//Pewder
event.recipes.gtceu.alloy_smelter("pewter_ingot")
.itemInputs("4x minecraft:iron_ingot")
.itemInputs("thermal:lead_ingot")
.itemOutputs("5x eidolon:pewter_ingot")
.duration(200)
.EUt(8)
//CurudeSyth
event.shaped("malum:crude_scythe", [
    "AAA",
    "BCB",
    "DEC"
], {
    A: "eidolon:pewter_ingot",
    B: "gtceu:wrought_iron_screw",
    C: "minecraft:stick",
    D: '#gtceu:tools/crafting_screwdrivers',
    E: '#gtceu:tools/crafting_hammers'
})
//soulstainedSyth
event.shaped("malum:soul_stained_steel_scythe", [
    "AAA",
    "BCB",
    "DAD"
], {
    A: "malum:soul_stained_steel_plating",
    B: "gtceu:aluminium_screw",
    C: "malum:crude_scythe",
    D: "eidolon:wicked_weave"
})
//DominionWand
event.shaped("ars_nouveau:dominion_wand", [
    "ABC",
    "BDB",
    "DBA"
], {
    A: "gtceu:steel_screw",
    B: "ars_nouveau:magebloom_fiber",
    C: "ars_nouveau:source_gem_block",
    D: "gtceu:gold_rod"
})
//TraversBoots
event.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:wicked_weave','minecraft:sugar','eidolon:wicked_weave','ars_nouveau:wilden_wing','eidolon:wicked_weave','minecraft:pufferfish','eidolon:wicked_weave','minecraft:snowball'], // input items
        'minecraft:diamond_boots', // reagent
        'travelersboots:travelers_boots', // output
        10000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//RawGlyph
event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:magebloom_fiber','ars_nouveau:magebloom_fiber','ars_nouveau:magebloom_fiber','ars_nouveau:magebloom_fiber'], // input items
        'minecraft:paper', // reagent
        'ars_nouveau:blank_glyph', // output
        500 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//NovicSpellBook
event.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:wicked_weave','born_in_chaos_v1:monster_skin','enigmaticlegacy:earth_heart','eidolon:wicked_weave','born_in_chaos_v1:monster_skin'], // input items
        'minecraft:bookshelf', // reagent
        'ars_nouveau:novice_spell_book', // output
        5000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//HarvestPylon
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:quartz_pillar','minecraft:polished_blackstone',Item.of('minecraft:diamond_hoe') ,'minecraft:hay_block','minecraft:quartz_pillar','minecraft:polished_blackstone',Item.of('minecraft:diamond_hoe')], // input items
        'gtceu:mv_machine_casing', // reagent
        'pylons:harvester_pylon', // output
        2500 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//EnchantmentTable
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:obsidian','gtceu:diamond_lens',"gtceu:obsidian_plate",'minecraft:red_carpet','gtceu:diamond_lens',"gtceu:obsidian_plate"], // input items
        'minecraft:bookshelf', // reagent
        'minecraft:enchanting_table', // output
        5000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//ObsidianPlate
event.recipes.gtceu.cutter("obsidian_plate")
.itemInputs("minecraft:obsidian")
.itemOutputs("4x gtceu:obsidian_plate")
.inputFluids("minecraft:water 144")
.duration(600)
.EUt(30)
//WarlockArmor
event.shaped("eidolon:warlock_hat", [
    "ABA",
    "BCB",
    "A A"
], {
    A: "ars_nouveau:magebloom_fiber",
    B: "eidolon:wicked_weave",
    C: "minecraft:leather_helmet"
})
event.shaped("eidolon:warlock_cloak", [
    "ABA",
    "AAA",
    "ACA"
], {
    A: "eidolon:wicked_weave",
    B: "minecraft:leather_chestplate",
    C: "ars_nouveau:magebloom_fiber"
})
event.shaped("eidolon:warlock_boots", [
    "ABA",
    "C C",
    "C C"
], {
    A: "ars_nouveau:magebloom_fiber",
    B: "minecraft:leather_boots",
    C: "eidolon:wicked_weave"
})
//RingOfJumping
event.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:plates/copper','ars_nouveau:source_gem_block','#forge:plates/copper','ars_nouveau:wilden_wing'], // input items
        'enigmaticlegacy:iron_ring', // reagent
        'ars_nouveau:jump_ring', // output
        1000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//MundaneBelt
event.shaped("ars_nouveau:mundane_belt", [
    "ABA",
    "C C",
    "ACA"
], {
    A: "minecraft:string",
    B: "gtceu:iron_ring",
    C: "minecraft:leather"
})
//beltOfLevvitation
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:amethyst_shard','ars_nouveau:magebloom_fiber','minecraft:feather','ars_nouveau:magebloom_fiber'], // input items
        'ars_nouveau:mundane_belt', // reagent
        'ars_nouveau:belt_of_levitation', // output
        1000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )
//ravenCloak
event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:jump_ring',
        'eidolon:wicked_weave',
        'minecraft:phantom_membrane',
        'eidolon:wicked_weave',
        'eidolon:raven_feather',
        'ars_nouveau:belt_of_levitation',
        'eidolon:wicked_weave',
        'minecraft:phantom_membrane',
        "eidolon:wicked_weave",
        'eidolon:raven_feather',],

        Item.of('eidolon:warlock_cloak', '{Damage:0}'),
     
        'eidolon:raven_cloak',

        10000

    )
//ArcaneGold
event.recipes.gtceu.alloy_smelter("arcane_gold_ingot")
.itemInputs("minecraft:gold_ingot")
.itemInputs("minecraft:copper_ingot")
.itemOutputs("2x eidolon:arcane_gold_ingot")
.duration(200)
.EUt(8)
//enchGoldenApple
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:gold_block',
        'eidolon:arcane_gold_ingot',
        'minecraft:gold_block',
        'eidolon:arcane_gold_ingot',
        'minecraft:gold_block',
        'eidolon:arcane_gold_ingot',
        'minecraft:gold_block',
        'eidolon:arcane_gold_ingot',],

        'minecraft:apple',
     
        'minecraft:enchanted_golden_apple',

        3000
    )
event.remove({output:'minecraft:enchanted_golden_apple'})

//EnderChest
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:ender_eye',
        'minecraft:obsidian',
        'minecraft:obsidian',
        'minecraft:ender_eye',
        'minecraft:obsidian',
        'minecraft:obsidian',],

        '#forge:chests',
     
        'minecraft:ender_chest',

        3000
    )
event.remove({output:'minecraft:ender_chest'})
//EnderRing
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:ender_eye',
         'minecraft:ender_chest',
         'minecraft:ender_eye',
         'minecraft:obsidian',],

        'enigmaticlegacy:iron_ring',
     
        'enigmaticlegacy:ender_ring',

        1000
    )
event.remove({output:'enigmaticlegacy:ender_ring'})

//DislocationRing
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:lv_item_magnet',
         'minecraft:ender_pearl',
         'minecraft:ender_pearl',
         'minecraft:ender_pearl',
         'minecraft:ender_pearl',],

        'enigmaticlegacy:magnet_ring',
     
        'enigmaticlegacy:super_magnet_ring',

        1000
    )
event.remove({output:'enigmaticlegacy:super_magnet_ring'})
//MagnetRing
event.shaped("enigmaticlegacy:magnet_ring", [
    "ABA",
    "CDC",
    "ABA"
], {
    A: "minecraft:redstone",
    B: "create:iron_sheet",
    C: "gtceu:magnetic_iron_rod",
    D: "enigmaticlegacy:iron_ring"
})
event.remove({output:"enigmaticlegacy:magnet_ring"})

//EssenceOfRagingLive
event.recipes.ars_nouveau.enchanting_apparatus(
        ['enigmaticlegacy:earth_heart',
         'minecraft:weeping_vines',
         'minecraft:vine',
         'enigmaticlegacy:earth_heart',
         'minecraft:twisting_vines',],

        'minecraft:bone_meal',
     
        'enigmaticlegacy:infinimeal',

        1500
    )
event.remove({output:'enigmaticlegacy:infinimeal'})

//AdventurCharm
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:flawless_emerald_gem',
         'minecraft:obsidian',
         'create:golden_sheet',
         'gtceu:flawless_emerald_gem',
         'minecraft:obsidian',
        'create:golden_sheet',],

        'minecraft:diamond_sword',
     
        'enigmaticaddons:adventure_charm',

        1500
    )
event.remove({output:'enigmaticaddons:adventure_charm'})

//quartzRing
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:quartz',
         'minecraft:lapis_lazuli',
         'minecraft:ghast_tear',
         'minecraft:quartz',
         'minecraft:lapis_lazuli',
         'minecraft:ghast_tear',],

        'enigmaticlegacy:iron_ring',
     
        'enigmaticaddons:quartz_ring',

        1500
    )
event.remove({output:'enigmaticaddons:quartz_ring'})

//ForgersGem
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:exquisite_diamond_gem',
         'minecraft:netherite_scrap',
         'minecraft:anvil',
         'gtceu:exquisite_diamond_gem',
         'minecraft:netherite_scrap',],

        'enigmaticaddons:quartz_ring',
     
        'enigmaticaddons:forger_gem',

        2000
    )
event.remove({output:'enigmaticaddons:forger_gem'})

//ForgersGem
event.recipes.ars_nouveau.enchanting_apparatus(
        ['#forge:gems/nether_quartz',
         'minecraft:quartz_block',
         "minecraft:lapis_block",
         '#forge:gems/nether_quartz',
         'minecraft:quartz_block',],

        'gtceu:long_iron_rod',
     
        'enigmaticaddons:quartz_scepter',

        1000
    )
event.remove({output:'enigmaticaddons:quartz_scepter'})

//CaptureEye
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:blaze_powder',
         'gtceu:gold_rod',
         'minecraft:blaze_powder',
         'gtceu:gold_rod',],

        'minecraft:ender_eye',
     
        'enigmaticlegacy:extradimensional_eye',

        1000
    )
event.remove({output:'enigmaticlegacy:extradimensional_eye'})
event.remove({output:'trinketsandbaubles:glow_ring'})
event.remove({output:'trinketsandbaubles:polarized_stone'})

//EarthEssence
event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:earth_essence', // output
        2000, // source cost
           ['minecraft:dirt',
            'minecraft:clay',
            'minecraft:stone',
            'minecraft:sand',
            'minecraft:pumpkin',
            'minecraft:sugar_cane']
    )

//WaterEssence
event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:water_essence', // output
        2000, // source cost
           ['minecraft:water_bucket',
            'minecraft:lily_pad',
            'minecraft:kelp',
            'minecraft:salmon',
            'minecraft:pufferfish',
            'minecraft:heart_of_the_sea']
    )

//AirEssence
event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:air_essence',  // output
        2000, // source cost
           ['quark:bottled_cloud',
            'eidolon:raven_feather',
            'minecraft:feather',
            'gtceu:iron_spring',
            'gtceu:iron_rotor',
            'chimes:bamboo_chimes']
    )

//FireEssence
event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_nouveau:fire_essence',  // output
        2000, // source cost
           ['minecraft:netherrack',
            'minecraft:flint_and_steel',
            'minecraft:fire_charge',
            'minecraft:blaze_powder',
            'create:blaze_burner',
            'born_in_chaos_v1:fire_dust']
    )

//UnbreakableHoe
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:aluminium_plate',
         "gtceu:steel_screw",
         'gtceu:aluminium_plate',
         "gtceu:steel_screw",],

        'amethysttoolsmod:diamond_hoe_amethyst',
     
        'miniutilities:reversing_hoe',

        5000
    )

event.shaped('4x ars_nouveau:archwood_planks', [
    "   ",
    " A ",
    "   "
], {
    A: '#forge:logs/archwood'
})

event.recipes.gtceu.mixer("sourcestone")
.itemInputs("ars_nouveau:source_gem")
.itemInputs("8x minecraft:stone")
.itemOutputs("8x ars_nouveau:sourcestone")
.duration(400)
.EUt(16)

event.recipes.gtceu.laser_engraver("sourcestone_large_bricks")
.itemInputs("ars_nouveau:sourcestone")
.notConsumable("gtceu:emerald_lens")
.itemOutputs("ars_nouveau:sourcestone_large_bricks")
.duration(300)
.EUt(500)

//SpellPrism
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:hv_emitter',
         'gtceu:long_stainless_steel_rod',
         'gtceu:long_stainless_steel_rod',
         'gtceu:nether_quartz_frame',
         'ars_nouveau:source_gem',
         'ars_nouveau:source_gem',
         'gtceu:certus_quartz_frame'],

         'gtceu:gold_frame',
     
         'ars_nouveau:spell_prism',

        5000
    )

//SpellSensor
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:hv_sensor',
         'gtceu:long_rose_gold_rod',
         'gtceu:long_rose_gold_rod',
         'gtceu:nether_quartz_frame',
         'ars_nouveau:source_gem',
         'ars_nouveau:source_gem',
         'gtceu:certus_quartz_frame'],

         'gtceu:gold_frame',
     
         'ars_nouveau:spell_sensor',

        5000
    )

//magicResistenCasing
event.recipes.gtceu.assembler("magicressistentcasing")
.itemInputs("gtceu:steel_frame")
.itemInputs("6x malum:soul_stained_steel_plating")
.itemOutputs("2x kubejs:magicressistentcasing")
.duration(200)
.EUt(120)

//magicBurnercasing
event.recipes.gtceu.assembler("magicburnercasing")
.itemInputs("gtceu:steel_frame")
.itemInputs("4x gtceu:gold_small_fluid_pipe")
.itemInputs("4x malum:soul_stained_steel_plating")
.itemOutputs("kubejs:magicburnercasing")
.duration(200)
.EUt(120)

event.shaped("6x ars_nouveau:archwood_slab", [
    "   ",
    "   ",
    "AAA"
], {
    A: "ars_nouveau:archwood_planks"
})

//SpinyChestplate
event.recipes.ars_nouveau.enchanting_apparatus(
        ['born_in_chaos_v1:spiny_shell',
         'gtceu:stainless_steel_screw',
         'malum:soul_stained_steel_plating',
         'born_in_chaos_v1:spiny_shell',
         'gtceu:stainless_steel_screw',
         'malum:soul_stained_steel_plating',
         'born_in_chaos_v1:bone_heart'],

         'minecraft:diamond_chestplate',
     
         'born_in_chaos_v1:spiny_shell_armor_chestplate',

        10000
    )
event.remove({output:'born_in_chaos_v1:spiny_shell_armor_chestplate'})


//SpinyHelmet
event.recipes.ars_nouveau.enchanting_apparatus(
        ['born_in_chaos_v1:spiny_shell',
         'gtceu:stainless_steel_screw',
         'malum:soul_stained_steel_plating',
         'born_in_chaos_v1:spiny_shell',
         'born_in_chaos_v1:shattered_skull'],

         'minecraft:diamond_helmet',
     
         'born_in_chaos_v1:spiny_shell_armor_helmet',

        7500
    )
event.remove({output:'born_in_chaos_v1:spiny_shell_armor_helmet'})


//Bone Handel
event.recipes.ars_nouveau.enchanting_apparatus(
        ['born_in_chaos_v1:dark_metal_nugget',
         'gtceu:aluminium_screw',
         'born_in_chaos_v1:dark_rod'],

         'minecraft:bone',
     
         'born_in_chaos_v1:bone_handle',

        1000
    )
event.remove({output:'born_in_chaos_v1:bone_handle'})

//ShellMace
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:double_steel_plate',
         'gtceu:double_steel_plate',
         'gtceu:long_stainless_steel_rod',
         'gtceu:long_stainless_steel_rod',
         'born_in_chaos_v1:spiny_shell',
         'born_in_chaos_v1:spiny_shell',
         'born_in_chaos_v1:spiny_shell'],

         'born_in_chaos_v1:bone_handle',
     
         'born_in_chaos_v1:shell_mace',

        7500
    )
event.remove({output:'born_in_chaos_v1:shell_mace'})

//refinedBrilianz
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:experience_bottle',
         'minecraft:experience_bottle',
         'minecraft:experience_bottle',
         'minecraft:experience_bottle'],

         'gtceu:flawless_emerald_gem',
     
         'malum:cluster_of_brilliance',

        750
    )

//BrilianzObelisk
event.recipes.ars_nouveau.enchanting_apparatus(
        ['malum:soul_stained_steel_plating',
         'malum:cluster_of_brilliance',
         'malum:soul_stained_steel_plating',
         'malum:cluster_of_brilliance',
         'minecraft:bookshelf'],

         '#malum:runewood_logs',
     
         'malum:brilliant_obelisk',

        5000
    )

//CandyAxe/Sword
event.recipes.ars_nouveau.enchanting_apparatus(
        ['born_in_chaos_v1:holiday_candy',
         'born_in_chaos_v1:holiday_candy',
         'born_in_chaos_v1:holiday_candy',
         'born_in_chaos_v1:cultivated_pumpkin'],

         'minecraft:iron_sword',
     
         'born_in_chaos_v1:sweet_sword',

        2500
    )
event.recipes.ars_nouveau.enchanting_apparatus(
        ['born_in_chaos_v1:holiday_candy',
         'born_in_chaos_v1:holiday_candy',
         'born_in_chaos_v1:holiday_candy',
         'born_in_chaos_v1:cultivated_pumpkin',
         'born_in_chaos_v1:cultivated_pumpkin'],

         'minecraft:iron_axe',
     
         'born_in_chaos_v1:sweet_axe',

        2500
    )

//SweetSword/carrotSword
event.recipes.ars_nouveau.enchanting_apparatus(
        ['born_in_chaos_v1:cultivated_pumpkin',
         'minecraft:carrot',
         'minecraft:carrot',
         'minecraft:carrot',
         'minecraft:carrot'],

         'minecraft:iron_sword',
     
         'born_in_chaos_v1:carrot_sword',

        2500
    )
event.recipes.ars_nouveau.enchanting_apparatus(
        ['farmersdelight:melon_juice',
         'minecraft:ice',
         'minecraft:ice',
         'farmersdelight:melon_juice',
         'minecraft:ice',
         'minecraft:ice'],

         'minecraft:iron_sword',
     
         'born_in_chaos_v1:carrot_sword',

        5000
    )

//CrimsonEssence
event.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:zombie_heart',
         'minecraft:spider_eye',
         'minecraft:rotten_flesh'],

         'minecraft:rotten_flesh',
     
         'eidolon:crimson_essence',

        1000
    )

//CrimsonGem
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:blaze_powder',
         'eidolon:crimson_essence',
         'minecraft:blaze_powder',
        'eidolon:crimson_essence'],

         'gtceu:flawless_ruby_gem',
     
         'eidolon:crimson_gem',

        5000
    )

//SappingSword
event.recipes.ars_nouveau.enchanting_apparatus(
        ['eidolon:crimson_gem',
         'malum:soul_stained_steel_plating',
         'malum:soul_stained_steel_plating',
         'thermal:ruby',
         'thermal:ruby'],

         'born_in_chaos_v1:bone_handle',
     
         'eidolon:sapping_sword',

        5000
    )

//ReveralPick
event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:obsidian',
         'gtceu:diamond_plate',
         'malum:cluster_of_brilliance',
         'gtceu:diamond_plate',
         'malum:cluster_of_brilliance'],

         'minecraft:diamond_pickaxe',
     
         'eidolon:reversal_pick',

        2500
    )

//SpiritFabric
event.shaped("malum:spirit_fabric", [
    "ABA",
    "BCB",
    "ABA"
], {
    A: "malum:wicked_spirit",
    B: "minecraft:string",
    C: "eidolon:wicked_weave"
})

//SpiritPouch
event.shaped("malum:spirit_pouch", [
    "ABA",
    "C C",
    "ACA"
], {
    A: "eidolon:wicked_weave",
    B: "minecraft:string",
    C: "malum:spirit_fabric"
})

//SpiritJar
event.shaped("malum:spirit_jar", [
    "ABA",
    "ACA",
    "ABA"
], {
    A: "minecraft:glass",
    B: "create:golden_sheet",
    C: "supplementaries:jar"
})
//NanoTravvelersboots
event.recipes.ars_nouveau.enchanting_apparatus(
        ['gtceu:nanomuscle_boots',
         'minecraft:sugar',
         'gtceu:hv_electric_piston',
         'minecraft:feather',
         'gtceu:hv_electric_piston',
         'gtceu:hv_electric_motor',
         '#gtceu:circuits/mv',
         'gtceu:hv_electric_motor',
         '#gtceu:circuits/mv'],

         'travelersboots:travelers_boots',
     
         'kubejs:nano_muscle_travelers_boots',

        10000
    )
    true

//InfusionAltar
event.recipes.gtceu.assembler("infusionaltar")
.itemInputs("16x enigmaticlegacy:soul_dust")
.itemInputs("8x gtceu:gold_frame")
.itemInputs("8x ars_nouveau:sourcestone_large_bricks")
.itemInputs("2x ars_nouveau:arcane_core")
.itemInputs("enigmaticlegacy:earth_heart")
.itemInputs("enigmaticlegacy:tattered_tome")
.itemInputs("enigmaticlegacy:tattered_tome")
.itemOutputs("gtceu:infusionaltar")
.duration(1600)
.EUt(8)

event.recipes.gtceu.infusionaltar("ender_tank")
.itemInputs("8x gtceu:obsidian_plate")
.itemInputs("4x minecraft:ender_eye")
.itemInputs("2x minecraft:cauldron")
.itemInputs("gtceu:hv_emitter")
.itemInputs("gtceu:hv_sensor")
.itemOutputs("4x enderstorage:ender_tank")
.inputFluids("gtceu:arcane_distilate 1000")
.inputFluids("starbunclemania:source_fluid 500")
.duration(400)

event.recipes.gtceu.infusionaltar("ender_chest")
.itemInputs("8x gtceu:obsidian_plate")
.itemInputs("4x minecraft:ender_eye")
.itemInputs("2x minecraft:chest")
.itemInputs("gtceu:hv_emitter")
.itemInputs("gtceu:hv_sensor")
.itemOutputs("4x enderstorage:ender_chest")
.inputFluids("gtceu:arcane_distilate 1000")
.inputFluids("starbunclemania:source_fluid 500")
.duration(400)

event.remove({mod:"enderstorage"})

event.recipes.gtceu.infusionaltar("pure_heart")
.itemInputs("8x minecraft:glowstone_dust")
.itemInputs("4x create:golden_sheet")
.itemInputs("2x enigmaticaddons:ichor_droplet")
.itemInputs("2x minecraft:ender_eye")
.itemInputs("enigmaticlegacy:earth_heart")
.itemInputs("minecraft:ghast_tear")
.itemOutputs("enigmaticaddons:pure_heart")
.inputFluids("gtceu:arcane_distilate 1000")
.inputFluids("gtceu:sacret_distilate 2000")
.duration(400)
event.remove({output:"enigmaticlegacy:earth_heart"})
})
