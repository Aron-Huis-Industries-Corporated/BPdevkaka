ServerEvents.recipes(event => {
    // добавление крафта ItemId
    let inter = '#forge:plates/iron'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:component_iron'
    , '#forge:plates/iron', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        event.recipes.create.deploying(inter, [inter, '#forge:ingots/copper']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:plates/iron']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})