ServerEvents.recipes(event => {
    event.remove({output: 'create:rotation_speed_controller'})
    event.shaped(Item.of('create:rotation_speed_controller', 1),
        [
            ' P ',
            ' B ',
            ' S '
        ],
        {
            P: 'create:precision_mechanism',
            B: 'create:brass_casing',
            S: 'create:shaft'
        })
})