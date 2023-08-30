ServerEvents.recipes(event => { 
  // добавление крафта ItemId
  event.recipes.create.deploying('create:refined_radiance_casing', ['#forge:stripped_logs', 'create:refined_radiance'])
})