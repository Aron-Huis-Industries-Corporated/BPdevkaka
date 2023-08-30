ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'cgm:basic_bullet'})
  
  // добавление крафта ItemId
    event.shaped('cgm:basic_bullet', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'create:copper_nugget'
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