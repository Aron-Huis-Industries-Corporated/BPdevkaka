ServerEvents.recipes(event => {
event.remove({output: 'minecraft:bread'})
event.smelting('minecraft:bread', ['farmersdelight:wheat_dough','create:dough'])
})
//'minecraft:bread'