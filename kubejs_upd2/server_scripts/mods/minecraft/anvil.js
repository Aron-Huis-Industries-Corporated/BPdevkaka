ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'minecraft:anvil'})
  
  // добавление крафта ItemId
    event.shaped('minecraft:anvil', [
    'AAA',
    ' B ',
    'BBB'
  ], {
    A: 'immersiveengineering:storage_steel'
   ,B: 'immersiveengineering:ingot_steel'
//   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})