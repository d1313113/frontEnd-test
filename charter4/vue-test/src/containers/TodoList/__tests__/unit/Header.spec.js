import { shallowMount } from '@vue/test-utils';
import Header from '../../components/Header.vue';
import { findTestWrapper } from '../../../../utils/testUtils';
import store from '../../../../store';

describe('Header.vue', () => {

  it('Header 样式改变提示', () => {
    const wrapper = shallowMount(Header, { store });
    expect(wrapper).toMatchSnapshot();
  })

  it('Header 包含 input', () => {
    const wrapper = shallowMount(Header, { store });
    const input = findTestWrapper(wrapper, 'input');
    expect(input.exists()).toBe(true);
  });

  it('Header 中 input 框初始内容为空', () => {
    const wrapper = shallowMount(Header, { store });
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('');
  });

  it('Header 中 input 发生变化,数据应该变化', () => {
    const wrapper = shallowMount(Header, { store });
    const input = findTestWrapper(wrapper, 'input');
    input.setValue('cumelmell');
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('cumelmell');
  });

  it('Header 中 input 回车,无内容,无反应', () => {
    const wrapper = shallowMount(Header, { store });
    const input = findTestWrapper(wrapper, 'input');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeTruthy();
  });

  it('Header 中 input 回车,有内容,触发 add 事件,并清空 inputValue', () => {
    const wrapper = shallowMount(Header, { store });
    const input = findTestWrapper(wrapper, 'input').at(0);
    input.setValue('aaaa');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.inputValue).toBe('');
  });
});
