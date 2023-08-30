ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:fluid_pipe'})
  
  // добавление крафта ItemId
    event.shaped('16x create:fluid_pipe', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:plates/copper'
   ,B: '#ic2:rubber'
   ,C: '#forge:ingots/copper'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})