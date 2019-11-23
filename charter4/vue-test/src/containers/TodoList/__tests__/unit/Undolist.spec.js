import { shallowMount } from '@vue/test-utils';
import UndoList from '../../components/UndoList.vue';
import { findTestWrapper } from '../../../../utils/testUtils';

describe('UndoList.vue', () => {
  it('UndoList 参数为 [], count 值应该为0,且列表无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    });
    const countEle = findTestWrapper(wrapper, 'count');
    const listItem = findTestWrapper(wrapper, 'item');
    expect(countEle.at(0).text()).toBe('0');
    expect(listItem.length).toBe(0);
  });

  it('UndoList 参数为[1, 2, 3], count 值为3, 且列表有内容,且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    });
    const countEle = findTestWrapper(wrapper, 'count');
    const listItem = findTestWrapper(wrapper, 'item');
    const deleteBtns = findTestWrapper(wrapper, 'delete-btn');
    expect(countEle.at(0).text()).toBe('3');
    expect(listItem.length).toBe(3);
    expect(deleteBtns.length).toBe(3);
  });

  it('UndoList 删除按钮点击时,向外触发删除时间', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    });
    const deleteBtn = findTestWrapper(wrapper, 'delete-btn').at(1);
    deleteBtn.trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
    // 参数是1
    expect(wrapper.emitted().delete[0][0]).toBe(1);
  });

  it('列表项被点击,向外触发 changeStatus 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    });

    const item = findTestWrapper(wrapper, 'item').at(1);
    item.trigger('click');
    expect(wrapper.emitted().status).toBeTruthy();
    expect(wrapper.emitted().status[0][0]).toBe(1);
  });

  it('列表项显示一个输入框,两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    });

    const input = findTestWrapper(wrapper, 'input');
    expect(input.at(0).element.value).toBe("2");
    expect(input.length).toBe(1);
  });

  it('输入框触失去焦点时,向外触发 reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    });

    const inputEle = findTestWrapper(wrapper, 'input').at(0);
    inputEle.trigger('blur');
    expect(wrapper.emitted().reset).toBeTruthy();
  });

  it('输入框变化时,向外触发 change 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 123 },
          { status: 'div', value: 3 }
        ]
      }
    });

    const inputEle = findTestWrapper(wrapper, 'input').at(0);
    inputEle.trigger('change');
    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change[0][0]).toEqual({
      value: "123",
      index: 1
    });
  });
});
