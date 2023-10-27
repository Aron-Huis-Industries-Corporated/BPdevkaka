ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'mekanism:steel_casing'})

    // добавление крафта ItemId
    let inter = 'mekanism:block_steel'
    event.recipes.create.sequenced_assembly(
        'mekanism:steel_casing'
    , 'ic2:stabilized_machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'mekanism:alloy_infused']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'mekanism:ingot_steel']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'mekanism:basic_control_circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:re_battery']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(3)
})
