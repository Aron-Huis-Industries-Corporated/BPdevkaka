ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'minecraft:tnt'})
  
  // добавление крафта ItemId
  event.recipes.create.compacting([Item.of('minecraft:tnt').withChance(0.9),Item.of('17x immersiveengineering:dust_sulfur').withChance(0.1)], ['ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','ic2:dynamite','minecraft:paper','minecraft:paper','minecraft:paper','minecraft:paper'])
})