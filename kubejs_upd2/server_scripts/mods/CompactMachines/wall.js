ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'compactmachines:wall'})
  event.remove({output: 'compactmachines:personal_shrinking_device'})
  event.remove({output: 'cgm:workbench'})
})
