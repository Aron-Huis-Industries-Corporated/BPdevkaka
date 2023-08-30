ServerEvents.recipes(event => {
    event.remove({output: 'create:brass_tunnel'})
    event.recipes.create.mechanical_crafting(Item.of('create:brass_tunnel', 2),
        [
            'BBBB',
            'BPEB',
            'BDDB'
        ],
        {
            B: 'create:brass_sheet',
            P: 'create:precision_mechanism',
            D: 'minecraft:dried_kelp',
            E: 'create:electron_tube',
        })
})