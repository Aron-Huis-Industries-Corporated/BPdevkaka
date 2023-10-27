ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:geothermal_generator'})

    // добавление крафта ItemId
    let inter = 'ic2:generator'
    event.recipes.create.sequenced_assembly(
        'ic2:geothermal_generator'
    , 'ic2:generator', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:cell_empty']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plate_advanced_alloy']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/refined_iron']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#ic2:rubber']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
     event.recipes.create.pressing('ic2:geothermal_generator', 'ic2:liquid_generator')
})