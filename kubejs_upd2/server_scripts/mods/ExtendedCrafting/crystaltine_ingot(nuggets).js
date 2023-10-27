ServerEvents.recipes(event => {
  // добавление крафта ItemId
    event.shaped('kubejs:crystaltine_ingot', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'kubejs:crystaltine_nugget'
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