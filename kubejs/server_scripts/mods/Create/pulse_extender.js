ServerEvents.recipes(event => {
    event.remove({output: 'create:pulse_extender'})
    event.shaped(Item.of('create:pulse_extender', 1),
        [
            '  T',
            'RBT',
            'DCD'
        ],
        {
            T: 'minecraft:redstone_torch',
            R: 'minecraft:redstone',
            D: '#forge:stone',
            B: 'create:brass_sheet',
            C: 'create:cogwheel'
        })
})