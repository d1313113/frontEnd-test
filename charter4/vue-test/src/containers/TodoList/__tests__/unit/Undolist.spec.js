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
        list: [1, 2, 3]
      }
    });
    const deleteBtn = findTestWrapper(wrapper, 'delete-btn').at(1);
    deleteBtn.trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
    // 参数是1
    expect(wrapper.emitted().delete[0][0]).toBe(1);
  });
});
