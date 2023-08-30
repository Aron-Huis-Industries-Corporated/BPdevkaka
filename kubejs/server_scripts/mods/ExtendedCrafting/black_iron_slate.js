ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'extendedcrafting:black_iron_slate'})
  
  // добавление крафта ItemId
    event.shaped('extendedcrafting:black_iron_slate', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:iron_ingot'
   ,B: 'minecraft:obsidian'
//   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})