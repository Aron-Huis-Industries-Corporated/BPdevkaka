ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.remove({output: 'mekanism:basic_infusing_factory'})
    event.remove({output: 'mekanism:advanced_infusing_factory'})
    event.remove({output: 'mekanism:elite_infusing_factory'})
    event.remove({output: 'mekanism:ultimate_infusing_factory'})

    // добавление крафта ItemId
    let inter1 = 'ic2:stabilized_machine_block'
    event.recipes.create.sequenced_assembly(
        'mekanism:metallurgic_infuser'
    , 'ic2:stabilized_machine_block', [
         event.recipes.create.deploying(inter1, [inter1, 'ic2:cell_empty']) //Шаблон руки
        ,event.recipes.create.deploying(inter1, [inter1, 'ic2:advanced_circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter1, [inter1, 'ic2:re_battery']) //Шаблон руки
        ,event.recipes.create.pressing(inter1, inter1) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter1).loops(3)

        // добавление крафта ItemId
    let inter2 = 'mekanism:metallurgic_infuser'
    event.recipes.create.sequenced_assembly(
        'mekanism:basic_infusing_factory'
    , 'mekanism:metallurgic_infuser', [
         event.recipes.create.deploying(inter2, [inter2, 'minecraft:redstone']) //Шаблон руки
        ,event.recipes.create.deploying(inter2, [inter2, 'mekanism:basic_control_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter2, inter2) // Шаблон пресса
        ,event.recipes.create.deploying(inter2, [inter2, 'minecraft:redstone']) //Шаблон руки
        ,event.recipes.create.deploying(inter2, [inter2, 'minecraft:iron_ingot']) //Шаблон руки
        ,event.recipes.create.pressing(inter2, inter2) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter2).loops(2)

    let inter3 = 'mekanism:basic_infusing_factory'
    event.recipes.create.sequenced_assembly(
        'mekanism:advanced_infusing_factory'
    , 'mekanism:basic_infusing_factory', [
         event.recipes.create.deploying(inter3, [inter3, 'mekanism:alloy_infused']) //Шаблон руки
        ,event.recipes.create.deploying(inter3, [inter3, 'mekanism:advanced_control_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter3, inter3) // Шаблон пресса
        ,event.recipes.create.deploying(inter3, [inter3, 'mekanism:alloy_infused']) //Шаблон руки
        ,event.recipes.create.deploying(inter3, [inter3, 'mekanism:ingot_osmium']) //Шаблон руки
        ,event.recipes.create.pressing(inter3, inter3) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter3).loops(2)

    let inter4 = 'mekanism:advanced_infusing_factory'
    event.recipes.create.sequenced_assembly(
        'mekanism:elite_infusing_factory'
    , 'mekanism:advanced_infusing_factory', [
         event.recipes.create.deploying(inter4, [inter4, 'mekanism:alloy_reinforced']) //Шаблон руки
        ,event.recipes.create.deploying(inter4, [inter4, 'mekanism:elite_control_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter4, inter4) // Шаблон пресса
        ,event.recipes.create.deploying(inter4, [inter4, 'mekanism:alloy_reinforced']) //Шаблон руки
        ,event.recipes.create.deploying(inter4, [inter4, 'minecraft:gold_ingot']) //Шаблон руки
        ,event.recipes.create.pressing(inter4, inter4) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter4).loops(2)

    let inter5 = 'mekanism:elite_infusing_factory'
    event.recipes.create.sequenced_assembly(
        'mekanism:ultimate_infusing_factory'
    , 'mekanism:elite_infusing_factory', [
         event.recipes.create.deploying(inter5, [inter5, 'mekanism:alloy_atomic']) //Шаблон руки
        ,event.recipes.create.deploying(inter5, [inter5, 'mekanism:ultimate_control_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter5, inter5) // Шаблон пресса
        ,event.recipes.create.deploying(inter5, [inter5, 'mekanism:alloy_atomic']) //Шаблон руки
        ,event.recipes.create.deploying(inter5, [inter5, '#forge:gems/diamond']) //Шаблон руки
        ,event.recipes.create.pressing(inter5, inter5) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter5).loops(2)
})
