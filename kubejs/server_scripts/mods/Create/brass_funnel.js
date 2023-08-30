ServerEvents.recipes(event => {
    event.remove({output: 'create:brass_funnel'})
    event.shaped(Item.of('create:brass_funnel', 2),
        [
            'EBB',
            'PBB',
            'SBB'
        ],
        {
            S: 'create:brass_sheet',
            E: 'create:electron_tube',
            P: 'create:precision_mechanism',
            B: 'minecraft:bedrock'
        })
    event.shaped(Item.of('create:brass_funnel', 2),
        [
            'SES',
            'SPS',
            'SDS'
        ],
        {
            S: 'create:brass_sheet',
            E: 'create:electron_tube',
            D: 'minecraft:dried_kelp',
            P: 'create:precision_mechanism'
        })
})