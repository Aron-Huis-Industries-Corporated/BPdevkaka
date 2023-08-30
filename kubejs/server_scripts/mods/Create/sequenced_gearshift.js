ServerEvents.recipes(event => {
    event.remove({output: 'create:sequenced_gearshift'})
    event.shaped(Item.of('create:sequenced_gearshift', 1),
        [
            '   ',
            'PBE',
            ' C '
        ],
        {
            B: 'create:brass_casing',
            P: 'create:precision_mechanism',
            C: 'create:cogwheel',
            E: 'create:electron_tube'
        })
})