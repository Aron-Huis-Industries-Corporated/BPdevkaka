ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:brass_ingot'})
  
  // добавление крафта ItemId
  event.recipes.create.mixing(Item.of('3x create:brass_ingot').withChance(0.5),['minecraft:copper_ingot','minecraft:copper_ingot','create:zinc_ingot']).heated()
})

//'create:brass_ingot'