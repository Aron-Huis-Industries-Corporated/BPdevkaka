ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:experience_block'})
  
  // добавление крафта ItemId
    event.shaped('create:experience_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'create_sa:heap_of_experience'
//   ,B: ItemB
//   ,C: ItemC
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})