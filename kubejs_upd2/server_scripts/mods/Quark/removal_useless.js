ServerEvents.recipes(event => {
    event.remove({output: 'quark:potato_crate'})
    event.remove({output: 'quark:carrot_crate'})
    event.remove({output: 'quark:beetroot_crate'})
})