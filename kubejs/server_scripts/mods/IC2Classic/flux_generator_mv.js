ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:flux_generator_mv'})

    // добавление крафта ItemId
    let inter = 'ic2:transformer_mv'
    event.recipes.create.sequenced_assembly(
        'ic2:flux_generator_mv'
    , 'ic2:flux_generator_lv', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:transformer_mv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:gold_cable_item']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:energy_crystal']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/gold']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:transformer']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})