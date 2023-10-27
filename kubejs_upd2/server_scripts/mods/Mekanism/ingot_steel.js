ServerEvents.tags('item', event => {
   event.remove('forge:ingots/steel', 'mekanism:ingot_steel')
   event.remove('forge:dusts/steel', 'mekanism:dust_steel')
})
ServerEvents.recipes(event => {
   event.remove({id: 'mekanism:processing/steel/ingot_to_dust'})

   event.remove({output: 'mekanism:ingot_steel'})
   event.remove({output: 'mekanism:nugget_steel'})
   event.remove({output: 'mekanism:block_steel'})

   event.shapeless('9x mekanism:ingot_steel', ['mekanism:block_steel'])
   event.shapeless('mekanism:block_steel', ['mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel', 'mekanism:ingot_steel'])

   event.shapeless('mekanism:ingot_steel', ['mekanism:nugget_steel', 'mekanism:nugget_steel', 'mekanism:nugget_steel', 'mekanism:nugget_steel', 'mekanism:nugget_steel', 'mekanism:nugget_steel', 'mekanism:nugget_steel', 'mekanism:nugget_steel', 'mekanism:nugget_steel'])

   event.recipes.immersiveengineeringArcFurnace('mekanism:ingot_steel', 'mekanism:dust_steel', ['createbb:white_phosphorus'], 'immersiveengineering:slag').time(1200)
})
