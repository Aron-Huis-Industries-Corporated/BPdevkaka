ServerEvents.recipes(event => {
    event.remove({output: 'create:pulse_repeater'})
    event.shaped(Item.of('create:pulse_repeater', 1),
        [
            '   ',
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