ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output:'kubejs:black_iron_ingot'})
  
  // добавление крафта ItemId
    event.shaped('kubejs:black_iron_ingot' , [
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