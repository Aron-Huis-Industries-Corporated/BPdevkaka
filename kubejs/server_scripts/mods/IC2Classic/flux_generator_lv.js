ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:flux_generator_lv'})

    // добавление крафта ItemId
    let inter = 'ic2:transformer_lv'
    event.recipes.create.sequenced_assembly(
        'ic2:flux_generator_lv'
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:transformer_lv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:copper_cable_item']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:re_battery']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:connector_lv']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})