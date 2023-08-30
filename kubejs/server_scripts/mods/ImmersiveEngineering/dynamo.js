ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'immersiveengineering:dynamo'})
  
  // добавление крафта ItemId
    event.shaped('immersiveengineering:dynamo', [
    ' BD',
    'ACE',
    ' BD'
  ], {
    A: 'immersiveengineering:connector_lv'
   ,B: '#forge:plates/steel'
   ,C: 'immersiveengineering:coil_lv'
   ,D: 'immersiveengineering:component_iron'
   ,E: 'createaddition:alternator'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})