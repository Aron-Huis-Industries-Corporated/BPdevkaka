StartupEvents.registry('item', event => {
    event.create('steam_engine_base', 'basic')
        .parentModel('wpd:steam_engine_base/steam_engine_base')
        .displayName('Основание парового двигателя')
})