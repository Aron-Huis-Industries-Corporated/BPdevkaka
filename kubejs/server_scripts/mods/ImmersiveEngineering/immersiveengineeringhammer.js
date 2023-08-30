ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: Item.of('immersiveengineering:hammer', '{Damage:0}')})
  
  // добавление крафта ItemId
    event.shaped(Item.of('immersiveengineering:hammer', '{Damage:0}'), [
    ' AC',
    ' BA',
    'B  '
  ], {
    A: 'create:brass_sheet'
   ,B: 'minecraft:stick'
   ,C: 'minecraft:string'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})