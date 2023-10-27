StartupEvents.registry("block", (event) => {
    event.create("black_iron_block") // Create a new block
    .displayName("Блок чёрного железа") // Set a custom name
    .material("metal") // Set a material (affects the sounds and some properties)
    .hardness(2.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .tagBlock("forge:storage_blocks") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("minecraft:needs_stone_tool") // the tool tier must be at least iron
    .tagBlock("forge:storage_blocks/black_iron")
})