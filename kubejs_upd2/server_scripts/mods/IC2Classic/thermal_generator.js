ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:thermal_generator'})

    // добавление крафта ItemId
    let inter = 'ic2:advanced_machine_block'
    event.recipes.create.sequenced_assembly(
        'ic2:thermal_generator'
    , 'ic2:advanced_machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:geothermal_generator']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plating']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('ic2:blazing_lava', 1000)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:thermal_generator', [
    '  C  ',
    ' CDC ',
    'CBABC',
    ' CDC ',
    '  C  '
  ], {
    A: 'ic2:advanced_machine_block'
   ,B: 'ic2:geothermal_generator'
   ,C: 'ic2:plating'
   ,D: 'ic2:cell_blazing_lava'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})