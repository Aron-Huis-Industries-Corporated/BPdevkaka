ServerEvents.recipes(event => {
  // добавление крафта ItemId
  event.recipes.create.mechanicalCrafting('bf_utilities:enchantmenttablebase',[
    'BBBB',
    'ACCA',
    'ACCA',
    'BBBB'
  ], {
    A: 'minecraft:diamond'
   ,B: 'minecraft:obsidian'
   ,C: 'create:sturdy_sheet'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
