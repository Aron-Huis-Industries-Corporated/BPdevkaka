ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'minecraft:cauldron'})
  
  // добавление крафта ItemId
    event.shaped('minecraft:cauldron', [
    'A A',
    'A A',
    'BAB'
  ], {
    A: 'immersiveengineering:plate_iron'
   ,B: 'minecraft:iron_ingot'
//   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})