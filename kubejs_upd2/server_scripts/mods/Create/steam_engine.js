ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'create:steam_engine'})

    // ���������� ������ ItemId
    let inter = 'bf_utilities:steamenginebase'
    event.recipes.create.sequenced_assembly(
        'create:steam_engine'
    , 'bf_utilities:steamenginebase', [
//        ,event.recipes.create.pressing(inter, inter) // ������ ������
         event.recipes.create.filling(inter, [inter, Fluid.of('createindustry:lubrication_oil', 1000)]) //������ ��������
        ,event.recipes.create.deploying(inter, [inter, 'bf_utilities:steamenginepiston']) //������ ����
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(1)
})
