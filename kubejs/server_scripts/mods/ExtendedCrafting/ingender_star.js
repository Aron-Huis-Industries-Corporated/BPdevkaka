ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'extendedcrafting:ender_star'})
  
  // добавление крафта ItemId
  event.recipes.create.mechanicalCrafting('wps_utilities:enchantmenttablebase',[
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