import { shallowMount } from '@vue/test-utils';
import TodoList from '../../TodoList.vue';
import Header from '../../components/Header.vue';
import UndoList from '../../components/UndoList.vue';

describe('TodoList.vue', () => {
  it('TodoList 初始化时, undoList 为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  });

  it('TodoList 监听到 Header 的 add 事件时执行 addItem 时,会增加一个内容', () => {
    // 集成测试,涉及到两个组件
    // const wrapper = shallowMount(TodoList);
    // const header = wrapper.find(Header);
    // header.vm.$emit('add', 'cumelmell');
    // 手动触发组件方法
    // wrapper.vm.addUndoItem('cumelmell');
    // const undoList = wrapper.vm.$data.undoList;
    // expect(undoList).toEqual(['cumelmell']);

    // 单元测试
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3]
    });
    wrapper.vm.addUndoItem(4);
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4]);
  });

  it('TodoList 调用 UndoList, 应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.find(UndoList);
    const list = undoList.props('list');
    expect(list).toBeTruthy();
  });

  it('TodoList 中 handleItemDelete 方法被调时, UndoList 列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3]
    });
    wrapper.vm.handleItemDelete(1);
    expect(wrapper.vm.$data.undoList).toEqual([1, 3]);
  });
});
