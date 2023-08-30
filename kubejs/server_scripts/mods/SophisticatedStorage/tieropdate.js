ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'sophisticatedstorage:iron_to_netherite_tier_upgrade'})
  event.remove({output: 'sophisticatedstorage:iron_to_diamond_tier_upgrade'})
  event.remove({output: 'sophisticatedstorage:basic_to_gold_tier_upgrade'})
  event.remove({output: 'sophisticatedstorage:basic_to_diamond_tier_upgrade'})
  event.remove({output: 'sophisticatedstorage:basic_to_netherite_tier_upgrade'})
  event.remove({output: 'sophisticatedstorage:gold_to_netherite_tier_upgrade'})
 })

