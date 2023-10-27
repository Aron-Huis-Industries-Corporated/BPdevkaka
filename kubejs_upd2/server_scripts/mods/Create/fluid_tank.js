ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:fluid_tank'})
  
  // добавление крафта ItemId
    event.shaped('create:fluid_tank', [
    'BDB',
    'CAC',
    'BDB'
  ], {
    A: '#ic2:rubber'
   ,B: '#forge:plates/copper'
   ,C: '#forge:glass_panes'
   ,D: '#forge:ingots/copper'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})