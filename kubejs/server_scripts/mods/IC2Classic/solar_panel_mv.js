ServerEvents.recipes(event => {
    // �������� ������ ���� ������� ItemId
    event.remove({output: 'ic2:solar_panel_mv'})

    // ���������� ������ ItemId
    let inter = 'ic2:solar_panel_lv'
    event.recipes.create.sequenced_assembly(
        'ic2:solar_panel_mv'
    , 'ic2:solar_panel_lv', [
         event.recipes.create.deploying(inter, [inter, 'ic2:solar_panel_lv']) //������ ����
        ,event.recipes.create.pressing(inter, inter) // ������ ������
        ,event.recipes.create.pressing(inter, inter) // ������ ������
        ,event.recipes.create.pressing(inter, inter) // ������ ������
//        ,event.recipes.create.deploying(inter, [inter, itemA]) //������ ����
//        ,event.recipes.create.filling(inter, [inter, Fluid.of('FluidId', 10)]) //������ ��������
//        ,event.recipes.create.cutting(inter, inter) // ������ ����
    ]).transitionalItem(inter).loops(8)
})