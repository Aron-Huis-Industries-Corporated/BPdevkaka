ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'ic2:liquid_generator'})
  
  // добавление крафта ItemId
  event.recipes.create.pressing('ic2:liquid_generator', 'ic2:geothermal_generator')
  event.recipes.create.mechanicalCrafting('ic2:liquid_generator', [
    '  D  ',
    ' CEC ',
    'DABAD',
    ' CEC ',
    '  D  '
  ], {
    A: 'ic2:cell_empty'
   ,B: 'ic2:generator'
   ,C: 'ic2:plate_advanced_alloy'
   ,D: '#forge:ingots/refined_iron'
   ,E: '#ic2:rubber'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})