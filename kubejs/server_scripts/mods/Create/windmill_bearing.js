ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'create:windmill_bearing'})
  
  // добавление крафта ItemId
    event.shaped('create:windmill_bearing', [
    'DED',
    'ACA',
    ' B '
  ], {
    A: 'create:andesite_alloy'
   ,B: 'create:shaft'
   ,C: 'create:andesite_casing'
   ,D: 'minecraft:cobbled_deepslate_slab'
   ,E: 'minecraft:slime_ball'
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
