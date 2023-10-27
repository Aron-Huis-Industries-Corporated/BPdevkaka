ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'create:steam_engine'})

    // добавление крафта ItemId
    let inter = 'bf_utilities:steamenginebase'
    event.recipes.create.sequenced_assembly(
        'create:steam_engine'
    , 'bf_utilities:steamenginebase', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 1000)]) //Шаблон дозатара
        ,event.recipes.create.deploying(inter, [inter, 'bf_utilities:steamenginepiston']) //Шаблон руки
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(1)
})
