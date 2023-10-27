ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:hose_pulley'})
  
  // добавление крафта ItemId
    event.shaped('create:hose_pulley', [
    'EDE',
    'ACA',
    ' B '
  ], {
    A: '#ic2:rubber'
   ,B: '#forge:plates/copper'
   ,C: 'minecraft:dried_kelp_block'
   ,D: 'create:copper_casing'
   ,E: 'create:shaft'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})