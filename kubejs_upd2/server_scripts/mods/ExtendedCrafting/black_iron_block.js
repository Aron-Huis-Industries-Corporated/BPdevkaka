ServerEvents.recipes(event => {
  // добавление крафта ItemId
    event.shaped('kubejs:black_iron_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'kubejs:black_iron_ingot'
// ,B: 'minecraft:obsidian'
//   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})