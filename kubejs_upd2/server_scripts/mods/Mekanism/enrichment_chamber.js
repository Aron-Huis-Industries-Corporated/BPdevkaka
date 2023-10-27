ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    let o = 'mekanism:enrichment_chamber'
    let b = 'mekanism:basic_enriching_factory'
    let a = 'mekanism:advanced_enriching_factory'
    let e = 'mekanism:elite_enriching_factory'
    let u = 'mekanism:ultimate_enriching_factory'

    event.remove({output: o})
    event.remove({output: b})
    event.remove({output: a})
    event.remove({output: e})
    event.remove({output: u})

    // добавление крафта ItemId
    let inter1 = 'mekanism:steel_casing'
    event.recipes.create.sequenced_assembly(
        o
    , 'mekanism:steel_casing', [
         event.recipes.create.deploying(inter1, [inter1, 'ic2:obsidian_blade']) //Шаблон руки
        ,event.recipes.create.deploying(inter1, [inter1, 'mekanism:basic_control_circuit']) //Шаблон руки
        ,event.recipes.create.deploying(inter1, [inter1, 'mekanism:alloy_infused']) //Шаблон руки
        ,event.recipes.create.pressing(inter1, inter1) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter1).loops(2)

        // добавление крафта ItemId
    let inter2 = o
    event.recipes.create.sequenced_assembly(
        b
    , o, [
         event.recipes.create.deploying(inter2, [inter2, 'minecraft:redstone']) //Шаблон руки
        ,event.recipes.create.deploying(inter2, [inter2, 'mekanism:basic_control_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter2, inter2) // Шаблон пресса
        ,event.recipes.create.deploying(inter2, [inter2, 'minecraft:redstone']) //Шаблон руки
        ,event.recipes.create.deploying(inter2, [inter2, 'ic2:obsidian_blade']) //Шаблон руки
        ,event.recipes.create.pressing(inter2, inter2) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter2).loops(2)

    let inter3 = b
    event.recipes.create.sequenced_assembly(
        a
    , b, [
         event.recipes.create.deploying(inter3, [inter3, 'mekanism:alloy_infused']) //Шаблон руки
        ,event.recipes.create.deploying(inter3, [inter3, 'mekanism:advanced_control_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter3, inter3) // Шаблон пресса
        ,event.recipes.create.deploying(inter3, [inter3, 'mekanism:alloy_infused']) //Шаблон руки
        ,event.recipes.create.deploying(inter3, [inter3, 'mekanism:ingot_osmium']) //Шаблон руки
        ,event.recipes.create.pressing(inter3, inter3) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter3).loops(2)

    let inter4 = a
    event.recipes.create.sequenced_assembly(
        e
    , a, [
         event.recipes.create.deploying(inter4, [inter4, 'mekanism:alloy_reinforced']) //Шаблон руки
        ,event.recipes.create.deploying(inter4, [inter4, 'mekanism:elite_control_circuit']) //Шаблон руки
        ,event.recipes.create.pressing(inter4, inter4) // Шаблон пресса
        ,event.recipes.create.deploying(inter4, [inter4, 'mekanism:alloy_reinforced']) //Шаблон руки
        ,event.recipes.create.deploying(inter4, [inter4, 'minecraft:gold_ingot']) //Шаблон руки
        ,event.recipes.create.pressing(inter4, inter4) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter4).loops(2)

    let inter5 = e
    event.recipes.create.sequenced_assembly(
        u
    , e, [
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
