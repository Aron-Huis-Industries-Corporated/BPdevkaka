ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:ocean_generator'})

    // добавление крафта ItemId
    let inter = 'ic2:water_mill_lv'
    event.recipes.create.sequenced_assembly(
        'ic2:ocean_generator'
    , 'ic2:water_mill_lv', [
         event.recipes.create.deploying(inter, [inter, 'ic2:turbine_blade']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:plate_advanced_alloy']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:rods/steel']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 1000)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, 'ic2:turbine_blade']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(3)
        ,event.recipes.create.pressing('ic2:ocean_generator', 'ic2:wave_generator') // Шаблон пресса
})