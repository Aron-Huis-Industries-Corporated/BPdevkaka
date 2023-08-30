ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:encased_chain_drive'})
  
  // добавление крафта ItemId
    event.shaped('4x create:encased_chain_drive', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    A: 'create:andesite_casing'
   ,B: 'minecraft:chain'
//   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
