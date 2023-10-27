ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'cgm:advanced_bullet'})
  
  // добавление крафта ItemId
    event.shaped('cgm:advanced_bullet', [
    ' A ',
    'BAB',
    ' C '
  ], {
    A: 'immersiveengineering:nugget_lead'
   ,B: 'minecraft:gunpowder'
   ,C: 'immersiveengineering:empty_casing'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})