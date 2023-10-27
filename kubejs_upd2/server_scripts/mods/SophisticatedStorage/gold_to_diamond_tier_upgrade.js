ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'sophisticatedstorage:gold_to_diamond_tier_upgrade'})
  
  // добавление крафта ItemId
    event.shaped('sophisticatedstorage:gold_to_diamond_tier_upgrade', [
    'CBC',
    'BAB',
    'CBC'
  ], {
   A: 'sophisticatedstorage:iron_to_gold_tier_upgrade'
   ,B: 'ic2:ingot_advanced_alloy'
   ,C: 'ic2:dust_diamond'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})