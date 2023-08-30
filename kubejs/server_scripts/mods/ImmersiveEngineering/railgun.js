ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'immersiveengineering:railgun'})

    // добавление крафта ItemId
    let inter = 'wps_utilities:shotgunbody'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:railgun'
    , 'immersiveengineering:wooden_grip', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'immersiveengineering:capacitor_hv']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 200)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/steel']) //Шаблон руки  
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:coil_mv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/steel']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:coil_mv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic_adv']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_electronic']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, Fluid.of(FluidId, mb)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})