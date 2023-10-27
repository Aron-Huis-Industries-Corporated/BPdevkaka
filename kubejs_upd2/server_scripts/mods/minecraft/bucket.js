ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'minecraft:bucket'})
  
  // добавление крафта ItemId
    event.shaped('minecraft:bucket', [
    '   ',
    'A A',
    ' A '
  ], {
    A: 'immersiveengineering:plate_iron'
//   ,B: ItemB
//   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
