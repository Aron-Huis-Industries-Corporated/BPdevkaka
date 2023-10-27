ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:adjustable_chain_gearshift'})
  
  // добавление крафта ItemId
    event.shaped('create:adjustable_chain_gearshift', [
    ' B ',
    'EDC',
    ' A '
  ], {
    A: 'create:encased_chain_drive'
   ,B: 'minecraft:redstone'
   ,C: 'create:cogwheel'
   ,D: 'create:shaft'
   ,E: 'create:large_cogwheel'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
