ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'immersiveengineering:revolver'})

    // добавление крафта ItemId
    let inter = 'wps_utilities:pistolbody'
    event.recipes.create.sequenced_assembly(
        'immersiveengineering:revolver'
    , 'immersiveengineering:wooden_grip', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'immersiveengineering:component_steel']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 100)]) //Шаблон дозатара
	,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:gunpart_drum']) //Шаблон руки
	,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:gunpart_hammer']) //Шаблон руки
	,event.recipes.create.deploying(inter, [inter, 'immersiveengineering:gunpart_barrel']) //Шаблон руки

//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})