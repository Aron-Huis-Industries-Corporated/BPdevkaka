ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: Item.of('minecraft:golden_sword', '{Damage:0}')})
  
  // добавление крафта ItemId
    event.shaped(Item.of('minecraft:golden_sword', '{Damage:0}'), [
    ' A ',
    ' A ',
    ' B '
  ], {
    A: 'immersiveengineering:plate_gold'
   ,B: 'minecraft:stick'
//   ,C: ItemC
//	 ,D: ItemD
//	 ,E: ItemE
//	 ,F: ItemF
//	 ,G: ItemG
//	 ,H: ItemH
//	 ,I: ItemI
  })
})