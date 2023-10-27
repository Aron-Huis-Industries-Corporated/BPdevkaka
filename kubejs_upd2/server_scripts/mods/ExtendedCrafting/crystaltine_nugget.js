ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('9x kubejs:crystaltine_nugget'), // arg 1: output
    [ 
      'kubejs:crystaltine_ingot',
    ]
  )})