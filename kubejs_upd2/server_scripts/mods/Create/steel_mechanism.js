ServerEvents.recipes(event => {         
    // добавление крафта ItemId
    let inter = 'createindustry:unprocessed_steel_mechanism'
    event.recipes.create.sequenced_assembly(
        'createindustry:steel_mechanism'
    , 'create:precision_mechanism', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'createindustry:screw']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:screwdriver']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:heavy_plate']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 100)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:turbine_blade']) //Шаблон руки
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(3)
})