GTCEuServerEvents.oreVeins(event => {

//removal
event.remove("gtceu:bauxite_vein_end")
event.remove("gtceu:sheldonite_vein")
event.remove("gtceu:monazite_vein")
event.remove("gtceu:molybdenum_vein")
event.remove("gtceu:pitchblende_vein_end")
event.remove("gtceu:naquadah_vein")
event.remove("gtceu:mica_vein")
event.remove("gtceu:scheelite_vein")
event.remove("gtceu:certus_quartz")


//Adding
//Bauxit Vein
    event.add("kubejs:bauxite_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        vein.layer("moon_stone") // [*] 
        vein.dimensions("ad_astra:moon") // 

        vein.heightRangeUniform(30, 60) // 

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Aluminium).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.get('desh')).size(1, 1))

    )
    )
        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Aluminium) // [*] 
        .placement("surface") // 
        .density(0.4)
        .radius(5)
)
})
//Certus Vein
    event.add("kubejs:certus_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        vein.layer("moon_stone") // [*] 
        vein.dimensions("ad_astra:moon") // 

        vein.heightRangeUniform(30, 60) // 

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.get('nether_quartz')).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.get('certus_quartz')).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.get('barite')).size(1, 1))

    )
    )   
        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('nether_quartz')) // [*] 
        .placement("surface") // 
        .density(0.4)
        .radius(5)
)
})
//Certus Vein
    event.add("kubejs:molybdenum_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        vein.layer("moon_stone") // [*] 
        vein.dimensions("ad_astra:moon") // 

        vein.heightRangeUniform(30, 60) // 

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.get('molybdenum')).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.get('molybdenite')).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.get('wulfenite')).size(1, 1))

    )
    )   
        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('molybdenite')) // [*] 
        .placement("surface") // 
        .density(0.4)
        .radius(5)
)
})
//Chromite
    event.add("kubejs:iron_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        vein.layer("moon_stone") // [*] 
        vein.dimensions("ad_astra:moon") // 

        vein.heightRangeUniform(30, 60) // 

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.get('vanadium_magnetite')).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.get('chromite')).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.get('iron')).size(1, 1))

    )
    )   
        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('iron')) // [*] 
        .placement("surface") // 
        .density(0.4)
        .radius(5)
)
})
//Chromite
    event.add("kubejs:tantalite_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        vein.layer("moon_stone") // [*] 
        vein.dimensions("ad_astra:moon") // 

        vein.heightRangeUniform(30, 60) // 

        vein.layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.get('pyrolusite')).size(2, 4))
        .layer(l => l.weight(1).mat(GTMaterials.get('tantalite')).size(1, 2))


    )
    )   
        vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('pyrolusite')) // [*] 
        .placement("surface") // 
        .density(0.4)
        .radius(5)
)
})



})
