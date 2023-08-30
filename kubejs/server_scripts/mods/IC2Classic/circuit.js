ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:circuit'})

    // добавление крафта ItemId
    let inter = '#forge:ingots/refined_iron'
    event.recipes.create.sequenced_assembly(
        'ic2:circuit'
    , '#forge:ingots/refined_iron', [
         event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#immersiveengineering:circuits/logic']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#immersiveengineering:circuits/logic']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:copper_insulated_cable_item']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'ic2:copper_insulated_cable_item']) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(3)
})