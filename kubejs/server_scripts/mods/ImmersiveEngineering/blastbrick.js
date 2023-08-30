ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'immersiveengineering:blastbrick'})
  
  // добавление крафта ItemId
    event.shaped('3x immersiveengineering:blastbrick', [
    'ABA',
    'DCD',
    'ABA'
  ], {
    A: '#forge:ingots/nether_brick'
   ,B: '#forge:ingots/brick'
   ,C: 'create:chromatic_compound'
   ,D: '#forge:ingots/brass'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})