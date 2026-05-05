StartupEvents.registry('block', event => {

  //HermeticCasing
  event.create('hermeticcasing')
  .displayName('Hermetic Casing')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')

  //CleanPetCasing
  event.create('cleanpetcasing')
  .displayName('Clean Pet Casing')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')

  //EMcassing
  event.create('emcassing')
  .displayName('Electrom Magnetic Shielding Casing')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')

  //LiquidWorkingCasing 
  event.create('liquid_working_cassing')
  .displayName('Liquid Working Cassing')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')

  //OWassemblycasing
  event.create('owassemblycasing')
  .displayName('Other World Assembly Casing')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')

  //FluixCoil
  event.create('fluixcoil')
  .displayName('Electromagnetic Stabilisation Coil')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')

  //MagicRessistentCassing
  event.create('magicressistentcasing')
  .displayName('Magic Ressistent Casing')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')

  //MagicBurnerCassing
  event.create('magicburnercasing')
  .displayName('Magic Burner Casing')
  .stoneSoundType()
  .hardness(5) // Set hardness (affects mining time)
  .resistance(6) // Set resistance (to explosions, etc)
  .requiresTool(true)
  .tagBlock('forge:mineable/wrench')  
})