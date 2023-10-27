ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        [
            Item.of('cgm:silencer').withChance(60),
            Item.of('create:powdered_obsidian').withChance(40)
        ],
        'create:sturdy_sheet',
        [
            event.recipes.create.deploying('kubejs:incomplete_silencer', ['kubejs:incomplete_silencer', 'mekanism:nugget_steel']),
        ])
        .transitionalItem('kubejs:incomplete_silencer')
        .loops(5)
})