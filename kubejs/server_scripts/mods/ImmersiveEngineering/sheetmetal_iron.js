ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'immersiveengineering:sheetmetal_iron'})
  
  // добавление крафта ItemId
    event.shaped('2x immersiveengineering:sheetmetal_iron', [
    ' A ',
    'A A',
    ' A '
  ], {
    A: 'create:iron_sheet'
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