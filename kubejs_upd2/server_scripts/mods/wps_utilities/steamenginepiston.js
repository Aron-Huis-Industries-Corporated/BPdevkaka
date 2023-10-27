ServerEvents.recipes(event => {
  // удаление крафта всех кравтов ItemId
  event.remove({output: 'bf_utilities:steamenginepiston'})


      // удаление крафта всех кравтов ItemId
    let ItemId = 'bf_utilities:steamenginepiston'
    let ItemA = '#forge:ingots/bronze'
    let ItemB = '#forge:ingots/steel'
    let ItemC = '#forge:rods/steel'
    let ItemD = '#forge:ingots/cast_iron'
//    let ItemE =
//    let ItemF = itemf
//    let ItemG = itemg
//    let ItemH = itemh
//    let ItemI = itemi

    // добавление крафта ItemId
    let inter = '#forge:ingots/steel'
    event.recipes.create.sequenced_assembly(
        ItemId
    , '#forge:ingots/steel', [
         event.recipes.create.deploying(inter, [inter, ItemA]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemA]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemD]) //Шаблон руки
        ,event.recipes.create.deploying(inter, [inter, ItemC]) //Шаблон руки
        ,event.recipes.create.pressing(inter, inter) // Шаблон пресса
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //Шаблон дозатара
//        ,event.recipes.create.cutting(inter, inter) // Шаблон пилы
    ]).transitionalItem(inter).loops(2)
  // добавление крафта ItemId
  event.recipes.create.mechanicalCrafting('bf_utilities:steamenginepiston', [
    ' DCD ',
    '  B  ',
    ' BCB ',
    '  A  '
  ], {
    A: '#forge:ingots/steel'
   ,B: '#forge:rods/steel'
   ,C: '#forge:ingots/bronze'
   ,D: '#forge:ingots/cast_iron'
//   ,E: ItemE
//   ,F: ItemF
//   ,G: ItemG
//   ,H: ItemH
//   ,I: ItemI
  })
})
