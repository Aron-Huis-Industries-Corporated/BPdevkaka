ServerEvents.recipes(event => {
    event.remove({output: 'create:fluid_valve'})
    event.shaped(Item.of('create:fluid_valve', 1),
        [
            ' I ',
            ' F ',
            ' C '
        ],
        {
            I: '#forge:plates/iron',
            F: 'create:fluid_pipe',
            C: 'create:shaft'
        })
})