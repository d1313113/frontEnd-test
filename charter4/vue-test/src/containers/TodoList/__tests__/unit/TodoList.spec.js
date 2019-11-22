import { shallowMount } from '@vue/test-utils';
import TodoList from '../../TodoList.vue';
import Header from '../../components/Header.vue';

describe('TodoList.vue', () => {
  it('TodoList 初始化时, undoList 为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  });

  it('TodoList 监听到 Header 的 add 事件时执行 addItem 时,会增加一个内容', () => {
    const wrapper = shallowMount(TodoList);
    const header = wrapper.find(Header);
    header.vm.$emit('add', 'cumelmell');
    // 手动触发组件方法
    // wrapper.vm.addUndoItem('cumelmell');
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual(['cumelmell']);
  });
});
