GTCEuStartupEvents.registry('gtceu:material', event => {
//RocklwoolInsulator
    event.create('Rockwoll_Insulator')
        .ingot()
        .color(0xFFFFCC).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.NO_UNIFICATION)
//CeramicWoolInsulator
    event.create('Ceramic_woll_Insulator')
        .ingot()
        .color(0xcccc00).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.NO_UNIFICATION)
//CeramicWoll
    event.create('Ceramic_woll')
        .dust()
        .color(0xe6e6e6).iconSet(GTMaterialIconSet.DULL)
//AdvvancedGlue
    event.create('Advanced_Glue')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x500bbf)
//GlueResidue
    event.create('GlueResidue')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x808000)
//NonConductingGlue
    event.create('NonConductingGlue')
      .fluid() // Or .liquid(Int Temperature)
      .color(0xcc8800)
//SilverNickle
    event.create('SilverNickle')
        .ingot()
        .color(0x73372D)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL)
//AluminumLithium
    event.create('aluminiumlithium')
        .ingot()
        .color(0x73372D)
        .flags(GTMaterialFlags.GENERATE_PLATE)
//Desh
    event.create('Desh')
        .ore()
        .ingot()
        .blastTemp(1700, "mid", GTValues.VA[GTValues.HV], 600)
        .color(0xFFAC1C)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FRAME)
//FluixSteel
    event.create('fluixsteel')
        .ingot()
        .blastTemp(1700, "low", GTValues.VA[GTValues.MV], 600)
        .color(0x341539)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_FINE_WIRE)
//LunarDust
    event.create('lunardust')
        .dust()
        .color(0x909090).iconSet(GTMaterialIconSet.DULL)
//PurifiedLunarDust
    event.create('purifiedlunardust')
        .dust()
        .color(0xB8AEA3).iconSet(GTMaterialIconSet.DULL)
//LunarDustSlurry
    event.create('lunardustslurry')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x909090)
//LunarWater
    event.create('LunarWater')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x0E87CC)
//PurifierLunarWater
    event.create('PurifiedLunarWater')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x27DAF5)
//Nickeltetracarbonyl
    event.create('Nickeltetracarbonyl')
        .dust()
        .color(0xB8AEA3).iconSet(GTMaterialIconSet.DULL)
//propionic acid
    event.create('propionic_acid')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x9CA892)
//propionic acid
    event.create('Perpropionic_acid')
      .fluid() // Or .liquid(Int Temperature)
      .color(0xDCEDD1)
//propylenoxid
    event.create('propylenoxid')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x544B21)
//propylene_glycol_methyl_ether_acetate
    event.create('propylene_glycol_methyl_ether_acetate')
      .fluid() // Or .liquid(Int Temperature)
      .color(0xFFFFFF)
//methyl propionate
    event.create('methyl_propionate')
      .fluid() // Or .liquid(Int Temperature)
      .color(0xCC7272)
//Methyl methacrylate
    event.create('Methyl_methacrylate')
      .fluid() // Or .liquid(Int Temperature)
      .color(0xFFFFFF)
//Phosphortrichlorid 
    event.create('Phosphortrichlorid')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x60D141)
//BenzoicAcid 
    event.create('BenzoicAcid')
      .dust()
      .color(0xC2B6B6).iconSet(GTMaterialIconSet.DULL)
//Benzoylchlorid
    event.create('Benzoylchlorid')
      .fluid() // Or .liquid(Int Temperature)
      .color(0xFFFFFF)  
//Dibenzoylperoxid
    event.create('Dibenzoylperoxid')
        .dust()
        .color(0xFFFFFF).iconSet(GTMaterialIconSet.DULL)
//Polymethylmethacrylat
    event.create('Polymethylmethacrylat')
      .fluid() // Or .liquid(Int Temperature)
      .color(0x918989) 
//1-Methoxy-2-propanol
    event.create("1-Methoxy-2-propanol")
      .fluid() // Or .liquid(Int Temperature)
      .color(0x8A7171) 
//1-Methoxy-2-propylacetat
    event.create("1-Methoxy-2-propylacetat")
      .fluid() // Or .liquid(Int Temperature)
      .color(0x4F4242) 


















const Destil = (name ,color) =>{
event.create(`${name}_distilate`)
      .fluid()
      .color(`0x${color}`)
}
Destil("Sacret" ,"ff3ac5")
Destil("Wicked" ,"5f1dda")
Destil("Arcane" ,"ff75ff")
Destil("Eldirich" ,"64049c")
Destil("Aerial" ,"9affff")
Destil("Aqueus" ,"113b7c")
Destil("Earthen" ,"a9ff2f")
Destil("Infernal" ,"fffb3e")

const EnderIOdust = (name ,color ,blasttemp ,voltage ,cablevoltage) =>{
event.create(`${name}`)
        .ingot()
        .blastTemp(blasttemp, "low", GTValues.VA[voltage], 640)
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.VA[cablevoltage], 8, 6, false)
        .color(`0x${color}`).iconSet(GTMaterialIconSet.SHINY)    
}
EnderIOdust("copper_alloy", "b67c07", 1200, GTValues.MV, GTValues.MV)
EnderIOdust("energetic_alloy", "ebb73d", 1400, GTValues.MV, GTValues.HV) 
EnderIOdust("vibrant_alloy", "b9cc54", 1400, GTValues.MV ,GTValues.HV)
EnderIOdust("conductive_alloy", "d2a29f", 1600, GTValues.HV ,GTValues.EV)
EnderIOdust("pulasaiting_alloy", "9aebad", 1800, GTValues.HV, GTValues.EV)
EnderIOdust("dark_steel", "828282", 2000, GTValues.HV, GTValues.IV)
EnderIOdust("end_steel", "beb768", 2200, GTValues.EV, GTValues.IV)


//TungstenTrioxid
    event.create('tungstentrioxid')
        .dust()
        .color(0x6A89A7).iconSet(GTMaterialIconSet.DULL)










GTMaterials.NetherQuartz.addFlags(GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FRAME);
GTMaterials.CertusQuartz.addFlags(GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_FRAME);
GTMaterials.Iron.addFlags(GTMaterialFlags.GENERATE_FRAME);
GTMaterials.Gold.addFlags(GTMaterialFlags.GENERATE_FRAME);
GTMaterials.Amethyst.addFlags(GTMaterialFlags.GENERATE_FRAME);
GTMaterials.Silver.addFlags(GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL);

})

StartupEvents.registry('item', event => {
event.create('energy_manager1')
event.create('energy_manager2')
event.create('energy_manager3')
event.create('transistor_wafer')
event.create('transistor_chip')
event.create('diode_wafer')
event.create('diode_chip')
event.create('nether_shroom')
event.create('overworldia')
event.create('shulker_flower')
event.create('stone_carrot')
event.create('garnet_bulp')
event.create('salt_flower')
event.create('gem_shroom')
event.create('iron_core')
event.create('stone_core')
event.create('diamond_core')
event.create('infinity_core')
})

