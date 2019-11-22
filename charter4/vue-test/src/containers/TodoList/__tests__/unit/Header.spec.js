import { shallowMount } from '@vue/test-utils';
import Header from '../../components/Header.vue';

describe('Header.vue', () => {
  it('Header 包含 input', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    expect(input.exists()).toBe(true);
  });

  it('Header 中 input 框初始内容为空', () => {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('');
  });

  it('Header 中 input 发生变化,数据应该变化', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('cumelmell');
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('cumelmell');
  });

  it('Header 中 input 回车,无内容,无反应', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeFalsy();
  });

  it('Header 中 input 回车,有内容,触发 add 事件,并清空 inputValue', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('aaaa');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe('');
  });
});
