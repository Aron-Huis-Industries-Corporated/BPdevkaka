ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'mekanism:alloy_infused'})

  // добавление крафта ItemId
  event.recipes.mekanismMetallurgicInfusing('kubejs:unfinished_alloy_infused', 'createindustry:steel_mechanism', 'mekanism:redstone')
      let inter1 = 'kubejs:unfinished_alloy_infused'
    event.recipes.create.sequenced_assembly(
        'mekanism:alloy_infused'
    , 'kubejs:unfinished_alloy_infused', [
         event.recipes.create.filling(inter1, [inter1, Fluid.of('immersiveengineering:redstone_acid', 250)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter1, [inter1, 'ic2:circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter1, inter1) // Шаблон пресса
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter1).loops(2)

      event.remove({output: 'mekanism:alloy_reinforced'})

  // добавление крафта ItemId
  event.recipes.mekanismMetallurgicInfusing('kubejs:unfinished_alloy_reinforced', 'mekanism:alloy_infused', 'mekanism:diamond')
      let inter2 = 'kubejs:unfinished_alloy_reinforced'
    event.recipes.create.sequenced_assembly(
        'mekanism:alloy_reinforced'
    , 'kubejs:unfinished_alloy_reinforced', [
         event.recipes.create.filling(inter2, [inter2, Fluid.of('mekanism:oxygen', 500)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter2, [inter2, 'ic2:advanced_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter2, inter2) // Шаблон пресса
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter2).loops(2)

     event.remove({output: 'mekanism:alloy_atomic'})

  // добавление крафта ItemId
  event.recipes.mekanismMetallurgicInfusing('kubejs:unfinished_alloy_atomic', 'mekanism:alloy_reinforced', 'mekanism:refined_obsidian')
      let inter = 'kubejs:unfinished_alloy_atomic'
    event.recipes.create.sequenced_assembly(
        'mekanism:alloy_atomic'
    , 'kubejs:unfinished_alloy_atomic', [
         event.recipes.create.filling(inter, [inter, Fluid.of('mekanism:ethene', 1000)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, 'ic2:complex_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
})
