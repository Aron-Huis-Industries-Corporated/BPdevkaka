ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'minecraft:netherite_ingot'})
  
  // добавление крафта ItemId
  event.shapeless('minecraft:netherite_ingot', ['minecraft:netherite_scrap','minecraft:netherite_scrap','minecraft:netherite_scrap','minecraft:netherite_scrap','minecraft:gold_ingot','minecraft:gold_ingot',
'minecraft:gold_ingot','minecraft:gold_ingot','extendedcrafting:black_iron_ingot'])
})


























































ServerEvents.recipes(event => {
    event.shaped('9x minecraft:diamond_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:diamond_block'
  })
})
