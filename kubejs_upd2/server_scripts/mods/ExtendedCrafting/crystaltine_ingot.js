ServerEvents.recipes(event => {
  // добавление крафта ItemId
    event.shaped('kubejs:crystaltine_ingot', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'kubejs:black_iron_ingot'
   ,B: 'ic2:dust_diamond'
   ,C: 'minecraft:end_crystal'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
