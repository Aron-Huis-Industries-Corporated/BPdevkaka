//'sophisticatedbackpacks:backpack'
ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'sophisticatedbackpacks:backpack'})
  
  // добавление крафта ItemId
    event.shaped('sophisticatedbackpacks:backpack', [
    'ABA',
    'ACA',
    'BBB'
  ], {
    A: 'minecraft:string'
   ,B: 'minecraft:leather'
   ,C: 'create:item_vault'
//   ,D: ItemD
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})