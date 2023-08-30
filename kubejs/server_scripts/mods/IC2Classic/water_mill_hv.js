ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:water_mill_hv'})

    // добавление крафта ItemId
    let inter = 'ic2:water_mill_mv'
    event.recipes.create.sequenced_assembly(
        'ic2:water_mill_hv'
    , 'ic2:transformer_hv', [
         event.recipes.create.deploying(inter, [inter, 'ic2:water_mill_mv']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.deploying(inter, [inter, itemA]) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(8)
})                                    