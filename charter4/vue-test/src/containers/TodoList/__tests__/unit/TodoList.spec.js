import { shallowMount } from '@vue/test-utils';
import TodoList from '../../TodoList.vue';

describe('TodoList.vue', () => {
  it('组件渲正常', () => {
    const wrapper = shallowMount(TodoList);
  });
});
