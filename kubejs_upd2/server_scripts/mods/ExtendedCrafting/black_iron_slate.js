ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('2x kubejs:black_iron_slate'), // arg 1: output
    [ 
      'kubejs:black_iron_ingot',
      '#immersiveengineering:tools/hammers',
    ]
  )})