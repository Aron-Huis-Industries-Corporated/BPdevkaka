ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:solar_panel_lv'})

    // добавление крафта ItemId
    let inter = 'ic2:solar_panel'
    event.recipes.create.sequenced_assembly(
        'ic2:solar_panel_lv'
    , 'ic2:solar_panel', [
         event.recipes.create.deploying(inter, [inter, 'ic2:solar_panel']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.deploying(inter, [inter, itemA]) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(8)
})