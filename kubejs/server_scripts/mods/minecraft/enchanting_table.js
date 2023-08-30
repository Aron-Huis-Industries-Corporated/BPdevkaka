ServerEvents.recipes(event => {
  // добавление крафта ItemId
  event.remove({output: 'minecraft:enchanting_table'})
  event.recipes.create.filling('minecraft:enchanting_table', [Fluid.of('sophisticatedcore:xp_still',1000), 'wps_utilities:enchantmenttablebase'])
}) 