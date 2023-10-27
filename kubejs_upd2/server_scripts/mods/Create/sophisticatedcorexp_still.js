ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:experience_block'})
  
  // добавление крафта ItemId
  event.recipes.create.compacting([Fluid.of('sophisticatedcore:xp_still',1000)],'create:experience_block').superheated()
})


//'sophisticatedcore:xp_still'create:experience_block'.heated()