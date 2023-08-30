ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:chromatic_compound'})
  
  // добавление крафта ItemId
  event.recipes.create.mixing('create:chromatic_compound', ['create:powdered_obsidian','create:powdered_obsidian','create:powdered_obsidian', 'minecraft:glowstone_dust','minecraft:glowstone_dust','minecraft:glowstone_dust', 'create:polished_rose_quartz']).superheated()
})