ServerEvents.recipes(event => {
    event.remove({output: 'ic2:ingot_refined_iron'})
    event.recipes.create.sequenced_assembly(
        [
            Item.of('ic2:ingot_refined_iron').withChance(80),
            Item.of('ic2:scrap_metal').withChance(4),
            Item.of('minecraft:iron_nugget').withChance(8),
            Item.of('minecraft:iron_ingot').withChance(8)
        ],
        'wps_utilities:hotironingot',
        [
            event.recipes.create.filling(
                'kubejs:incomplete_ingot_refined_iron',
                [
                    'kubejs:incomplete_ingot_refined_iron',
                    Fluid.of('minecraft:water', 1000)
                ]),
            event.recipes.create.filling(
                'kubejs:incomplete_ingot_refined_iron',
                [
                    'kubejs:incomplete_ingot_refined_iron',
                    Fluid.of('minecraft:water', 1000)
                ]),
            event.recipes.create.pressing(
                'kubejs:incomplete_ingot_refined_iron',
                'kubejs:incomplete_ingot_refined_iron'),
            event.recipes.create.pressing(
                'kubejs:incomplete_ingot_refined_iron',
                'kubejs:incomplete_ingot_refined_iron')
        ])
        .transitionalItem('kubejs:incomplete_ingot_refined_iron')
        .loops(2)
})