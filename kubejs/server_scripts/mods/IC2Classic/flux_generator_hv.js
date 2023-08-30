ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:flux_generator_hv'})

    // добавление крафта ItemId
    let inter = 'ic2:transformer_hv'
    event.recipes.create.sequenced_assembly(
        'ic2:flux_generator_hv'
    , 'ic2:flux_generator_mv', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:transformer_hv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:glassfiber_cable_item']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:lapatron_crystal']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:wirecoil_steel']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:transformer_hv']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})