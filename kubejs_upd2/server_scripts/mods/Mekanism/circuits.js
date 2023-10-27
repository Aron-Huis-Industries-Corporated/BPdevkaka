ServerEvents.recipes(event => {
  event.remove({output: 'mekanism:basic_control_circuit'})
  event.remove({output: 'mekanism:advanced_control_circuit'})
  event.remove({output: 'mekanism:elite_control_circuit'})
  event.remove({output: 'mekanism:ultimate_control_circuit'})

  event.recipes.mekanismMetallurgicInfusing('mekanism:basic_control_circuit', 'mekanism:alloy_infused', 'mekanism:carbon')
  event.recipes.mekanismMetallurgicInfusing('mekanism:advanced_control_circuit', 'mekanism:alloy_infused', 'mekanism:redstone')
  event.recipes.mekanismMetallurgicInfusing('mekanism:elite_control_circuit', 'mekanism:alloy_reinforced', 'mekanism:diamond')
  event.recipes.mekanismMetallurgicInfusing('mekanism:ultimate_control_circuit', 'mekanism:alloy_atomic', 'mekanism:refined_obsidian')

  // event.custom({"type":"mekanism:metallurgic_infusing"
  //     ,"chemicalInput":{"amount":20,"tag":"mekanism:redstone"}
  //     ,"itemInput":{"ingredient":{"tag":'mekanism:alloy_infused'}}
  //     ,"output":{"item":"mekanism:basic_control_circuit"}
  // })


})
