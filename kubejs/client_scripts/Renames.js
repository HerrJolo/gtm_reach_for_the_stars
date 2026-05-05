ClientEvents.lang('en_us', event => {

//Multis
event.renameItem('gtceu:area_aqumulator', 'Advanced Aques Aqumulator')
event.renameItem('gtceu:concret_mixer', 'Concret Mixer')
event.renameItem('gtceu:vacuum_chamber', 'Vacuum Chamber')
event.renameItem('gtceu:emassemblyline', '§6Electronic Assembly Line')
event.renameItem('gtceu:mixatron', '§6Mixatron 200')
event.renameItem('gtceu:wet_ore_processor_4000', '§6Wet Ore Prozessor 4000')
event.renameItem('gtceu:extended_centrifuge', '§6Industrial Centrifuge')
event.renameItem('gtceu:extended_thermal_centrefuge', '§6Heated Industrial Centrifuge')
event.renameItem('gtceu:extended_electrolyzer', '§6Industrial Electrolycer')
event.renameItem('gtceu:extended_extractor', '§6Large Industrial Squezer')
event.renameItem('gtceu:precision_assembler', '§6Precison Assembler')
event.renameItem('gtceu:alien_tech_assemblyline', '§3Alien Tech Assembler')
event.renameItem('gtceu:greenhouse', '§aGreen House')
event.renameItem('gtceu:special_plant_habitat', '§aSpecial Plant Habitate')
event.renameItem('gtceu:coil_assembler', '§sCoil Assembler')
event.renameItem('gtceu:primitive_assembler', 'Primitive assembler')
event.renameItem('gtceu:steam_ore_washer', 'Primitive Ore Washer')
event.renameItem('gtceu:steam_forge_hammer', 'Primitive Forge Hammer')
event.renameItem('gtceu:extendedextruder', '§6Metal Deforming Machine v2.8')
event.renameItem('gtceu:extendedmacerator', '§6Tumbeling Macerator v1.3.7')


//AttunedEmLines
event.renameItem('gtceu:emassemblylinediode', '§5Attuned Electronic Assembly Line')
event.renameItem('gtceu:emassemblylinetransistor', '§5Attuned Electronic Assembly Line')
event.renameItem('gtceu:emassemblylineresistor', '§5Attuned Electronic Assembly Line')
event.renameItem('gtceu:emassemblylinecapacitor', '§5Attuned Electronic Assembly Line')
event.renameItem('gtceu:emassemblylineinductor', '§5Attuned Electronic Assembly Line')
})
ItemEvents.tooltip(event => {

event.add(['gtceu:area_aqumulator'], ["Does the same thing just better and some more resources"])
event.add(['gtceu:vacuum_chamber'], ["Pulls a near perfekt vacuum (Quite Impressive)"])
event.add(['gtceu:emassemblyline'], ['Industrial scale component assembly' ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:emassemblylinediode'], ['Attuned to SMD Diodes' ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:emassemblylinetransistor'], ['Attuned to SMD Transistors' ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:emassemblylineresistor'], ['Attuned to SMD Resistor' ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:emassemblylinecapacitor'], ['Attuned to SMD Capacitors' ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:emassemblylineinductor'], ['Attuned to SMD Inductors' ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:wet_ore_processor_4000'], ["Sifter ,Ore Washer and Chemcial Bath in One, WOW","Does Perfekt Oc. But does only Accepts one Energy Hatch", "Does not Accept Paralle Hatches" ,"Accepts a multiblock upgrade Chip"])
event.add(['gtceu:mixatron'],["The mixer she told you not to worry about","Does Perfekt Oc. But does only Accepts one Energy Hatch", "Does not Accept Paralle Hatches" ,"Accepts a multiblock upgrade Chip"])
event.add(['gtceu:extended_centrifuge'],["Takes care of your ore seperation needs","Does Perfekt Oc. But does only Accepts one Energy Hatch", "Does not Accept Paralle Hatches" ,"Accepts a multiblock upgrade Chip"])
event.add(['gtceu:extended_thermal_centrefuge'],["Takes care of your ore seperation needs (Now even heated)","Does Perfekt Oc. But does only Accepts one Energy Hatch", "Does not Accept Paralle Hatches" ,"Accepts a multiblock upgrade Chip"])
event.add(['gtceu:extended_electrolyzer'],["Splits molecules with brutal force","Does Perfekt Oc. But does only Accepts one Energy Hatch", "Does not Accept Paralle Hatches" ,"Accepts a multiblock upgrade Chip"])
event.add(['gtceu:extended_extractor'], ['Will squeze the juice out of an apple if needet' ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches" ,"Accepts a multiblock upgrade Chip"])
event.add(['gtceu:precision_assembler'], ["Where have i seen this before?" ,"Accept multiple Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:alien_tech_assemblyline'], ["Aliene Plauge not included" ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:greenhouse'], ["Produces all kinds of plant products" ,"Accept multiple Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:special_plant_habitat'], ["Creates the perfect atmospere for all matter of exotic plants" ,"Only Accepts one Energy Hatch" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:coil_assembler'], ["The Coil goes around and around" ,"Does Perfekt Oc" ,"Does not Accept Paralle Hatches"])
event.add(['gtceu:primitive_assembler'], ["Did you really think you could assemble a circuite by hand?"])
event.add(['gtceu:steam_ore_washer'], ["Do you also hate ore Washers?"])
event.add(['gtceu:steam_forge_hammer'], ["Forge hammer with 8 parallels"])
event.add(['gtceu:extendedextruder'], ["Hit Metall 17times", "Every coil tier after §sKanthal increases the processing Speed by 50%" ,"Work only at 75% speed with Cupronickel Coils" ,"Only Accepts one Energy Hatch","Does not Accept Paralle Hatches"])
event.add(['gtceu:extendedmacerator'], ["Hm i thought tumbelers only polish?", "Does Perfekt Oc. But does only Accepts one Energy Hatch", "Does not Accept Paralle Hatches" ,"Accepts a multiblock upgrade Chip"])


})




//DISABLE_MATERIAL_RECIPES
//'gtceu:extended_extractor'
//'gtceu:precision_assembler'
//'gtceu:alien_tech_assemblyline'