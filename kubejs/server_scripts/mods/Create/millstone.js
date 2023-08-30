ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:millstone'})
  
  // добавление крафта ItemId
    event.shaped('create:millstone', [
    ' A ',
    'BDB',
    'CCC'
  ], {
    A: 'create:cogwheel'
   ,B: 'create:andesite_alloy'
   ,C: 'minecraft:polished_andesite'
   ,D: 'create:andesite_casing'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
