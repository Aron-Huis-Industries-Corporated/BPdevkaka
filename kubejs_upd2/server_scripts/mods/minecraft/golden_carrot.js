ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'minecraft:golden_carrot'})
  
  // добавление крафта ItemId
    event.shaped('minecraft:golden_carrot', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'minecraft:carrot'
   ,B: 'immersiveengineering:plate_gold'
   ,C: '#forge:plates/gold'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})