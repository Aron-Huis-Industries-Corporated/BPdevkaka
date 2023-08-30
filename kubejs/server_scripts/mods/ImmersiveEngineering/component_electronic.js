ServerEvents.recipes(event => {
    // добавление крафта ItemId
    let inter = '#forge:treated_wood_slab'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:component_electronic'
    , '#forge:treated_wood_slab', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, '#forge:gems/quartz']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/electrum']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:dusts/redstone']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})