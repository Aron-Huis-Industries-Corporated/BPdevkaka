ServerEvents.tags('fluid', event => {
   event.removeAll('minecraft:water')
   event.add('minecraft:water', 'minecraft:water')
   event.add('minecraft:water', 'minecraft:flowing_water')
})