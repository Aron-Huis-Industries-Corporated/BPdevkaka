ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('9x kubejs:black_iron_nugget'), // arg 1: output
    [ 
      'kubejs:black_iron_ingot',
    ]
  )})