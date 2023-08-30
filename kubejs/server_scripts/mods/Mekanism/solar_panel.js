ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'mekanismgenerators:solar_panel'})

    // добавление крафта ItemId
    let inter = '#forge:plates/steel'
    event.recipes.create.sequenced_assembly(
        '4x mekanismgenerators:solar_panel'
    , '#forge:plates/steel', [
         event.recipes.create.deploying(inter, [inter, '#forge:dusts/charcoal']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/copper']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/zinc']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass_panes']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
})