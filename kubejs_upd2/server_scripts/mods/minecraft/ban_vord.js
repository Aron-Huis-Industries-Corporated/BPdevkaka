ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create_sa:portable_drill'})
  event.remove({output: Item.of('create_sa:block_picker', '{tagAction:0b}')})
})