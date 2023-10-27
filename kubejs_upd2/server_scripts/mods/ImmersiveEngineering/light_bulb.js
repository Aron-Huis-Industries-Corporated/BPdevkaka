ServerEvents.recipes(event => {
    // добавление крафта ItemId
    let inter = '#forge:ingots/copper'
    event.recipes.create.sequenced_assembly(
        '3x immersiveengineering:light_bulb'
    , '#forge:ingots/copper', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'minecraft:bamboo']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(3)
})