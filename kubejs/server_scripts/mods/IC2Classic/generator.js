ServerEvents.recipes(event => {
    // удаление крафта всех кравтов ItemId
    event.remove({output: 'ic2:generator'})

    // добавление крафта ItemId
    let inter = 'ic2:machine_block'
    event.recipes.create.sequenced_assembly(
        'ic2:generator'
    , 'ic2:machine_block', [
//        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
         event.recipes.create.deploying(inter, [inter, 'ic2:re_battery']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:ingots/refined_iron']) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, '#forge:wires/copper']) //Шаблон руки
//        ,event.recipes.create.filling(inter, [inter, FluidId]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
  event.recipes.create.mechanicalCrafting('ic2:generator', [
    'BBB',
    'ADA',
    'BBB'
  ], {
    A: 'ic2:re_battery'
   ,B: '#forge:ingots/refined_iron'
//   ,C: '#forge:wires/copper'
   ,D: '#forge:plates/copper'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})