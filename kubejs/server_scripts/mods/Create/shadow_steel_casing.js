ServerEvents.recipes(event => {  
  // добавление крафта ItemId
  event.recipes.create.deploying('create:shadow_steel_casing', ['#forge:stripped_logs', 'create:shadow_steel'])
})