ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade'})
  
  // добавление крафта ItemId
    event.shaped('sophisticatedstorage:diamond_to_netherite_tier_upgrade', [
    'BDB',
    'ACA',
    'BAB'
  ], {
    A: 'extendedcrafting:crystaltine_ingot'
   ,B: 'ic2:dust_diamond'
   ,C: 'sophisticatedstorage:gold_to_diamond_tier_upgrade'
   ,D: 'minecraft:netherite_ingot'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})