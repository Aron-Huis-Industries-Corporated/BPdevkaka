ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:mechanical_press'})
  
  // добавление крафта ItemId
    event.shaped('create:mechanical_press', [
    ' A ',
    'BCB',
    'DED'
  ], {
    A: 'create:piston_extension_pole'
   ,B: 'create:cogwheel'
   ,C: 'minecraft:iron_block'
   ,D: 'create:andesite_casing'
   ,E: 'extendedcrafting:black_iron_slate'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})