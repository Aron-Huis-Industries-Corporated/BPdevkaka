ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:windmill'})

    // добавление крафта ItemId
    let inter = 'ic2:transformer_hv'
    event.recipes.create.sequenced_assembly(
        'ic2:windmill'
    , 'ic2:transformer_hv', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:wind_turbine']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:complex_circuit']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 500)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, 'ic2:advanced_machine_block']) //Шаблон руки
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(4)
})