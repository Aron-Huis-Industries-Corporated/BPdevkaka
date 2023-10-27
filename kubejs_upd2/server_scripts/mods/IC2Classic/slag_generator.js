ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:slag_generator'})

    // добавление крафта ItemId
    let inter = 'ic2:advanced_machine_block'
    event.recipes.create.sequenced_assembly(
        'ic2:slag_generator'
    , 'ic2:advanced_machine_block', [
         event.recipes.create.deploying(inter, [inter, 'ic2:generator']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.deploying(inter, [inter, 'ic2:recycler']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plate_advanced_alloy']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса

//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
  event.recipes.create.mechanicalCrafting('ic2:slag_generator', [
    ' D ',
    'ABC',
    ' D '
  ], {
    A: 'ic2:generator'
   ,B: 'ic2:advanced_machine_block'
   ,C: 'ic2:recycler'
   ,D: 'ic2:plate_advanced_alloy'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})