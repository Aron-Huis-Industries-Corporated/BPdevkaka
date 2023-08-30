ServerEvents.tags('item', event => {
  // Add tall grass to the climbable tag. This does make it climable!
  event.add('forge:ingots/aluminium', 'createindustry:aluminum_ingot')
  event.add('forge:ingots/aluminium', 'immersiveengineering:ingot_aluminum')
  event.add('forge:ingots/aluminum', 'ic2:ingot_aluminium')
})