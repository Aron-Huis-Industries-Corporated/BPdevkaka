ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'nzgmaddon:medium_bullet'})
  
  // добавление крафта ItemId
    event.shaped('nzgmaddon:medium_bullet', [
    ' A ',
    ' B ',
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