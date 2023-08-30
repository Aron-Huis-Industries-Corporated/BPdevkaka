ServerEvents.recipes(event => {  
  // добавление крафта ItemId
  event.recipes.create.compacting('immersiveengineering:circuit_board', ['#forge:plates/plastic', '#forge:plates/copper']).heated()
})