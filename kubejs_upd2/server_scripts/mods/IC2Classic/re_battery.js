ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({id:  'ic2:re_battery_0'})

    // добавление крафта ItemId
    let inter = 'kubejs:case_re_battery'
    event.recipes.create.sequenced_assembly(
        Item.of('ic2:re_battery', '{charge:5000}')
    , '#forge:ingots/tin', [
	 event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:glass_panes']) //Шаблон руки
        ,event.recipes.create.filling(inter, [inter, Fluid.of('immersiveengineering:redstone_acid', 500)]) //Шаблон дозатара        
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/zinc']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:screw']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, 'createindustry:screwdriver']) //Шаблон руки
    ]).transitionalItem(inter).loops(2)
})
