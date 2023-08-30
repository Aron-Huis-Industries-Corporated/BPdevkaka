ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:water_mill_lv'})

    // добавление крафта ItemId
    let inter = 'ic2:water_mill'
    event.recipes.create.sequenced_assembly(
        'ic2:water_mill_lv'
    , 'ic2:transformer_lv', [
         event.recipes.create.deploying(inter, [inter, 'ic2:water_mill']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.deploying(inter, [inter, itemA]) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(8)
})