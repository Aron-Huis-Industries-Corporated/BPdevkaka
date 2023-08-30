ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:redstone_link'})
  
  // добавление крафта ItemId
    event.shaped('8x create:redstone_link', [
    ' DE',
    'BCC',
    'AAA'
  ], {
    A: 'create:brass_casing'
   ,B: 'minecraft:redstone_torch'
   ,C: '#forge:plates/brass'
   ,D: '#forge:dyes/red'
   ,E: '#forge:dyes/blue'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
