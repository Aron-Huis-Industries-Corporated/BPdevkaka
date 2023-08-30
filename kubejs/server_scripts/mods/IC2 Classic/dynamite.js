ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'ic2:dynamite'})
  
  // добавление крафта ItemId
    event.shaped('ic2:dynamite', [
    'BAB',
    'CEC',
    'CDC'
  ], {
    A: 'immersiveengineering:hemp_fiber'
   ,B: 'minecraft:red_dye'
   ,C: 'minecraft:paper'
   ,D: 'immersiveengineering:dust_sulfur'
   ,E: 'minecraft:gunpowder'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
