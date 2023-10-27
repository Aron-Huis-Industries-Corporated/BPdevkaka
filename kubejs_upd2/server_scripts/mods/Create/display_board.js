ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:display_board'})
  
  // добавление крафта ItemId
    event.shaped('4x create:display_board', [
    'DDD',
    'BCB',
    ' A '
  ], {
    A: 'create:shaft'
   ,B: 'create:andesite_alloy'
   ,C: 'create:cogwheel'
   ,D: 'create:electron_tube'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
