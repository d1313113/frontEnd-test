import React from 'react';
import { shallow } from 'enzyme';
import UndoList from '../../components/UndoList';
import { findTestWrapper } from '../../../../utils/testUtils';

it('UndoList 初始化 count 为0,列表无内容', () => {
  const wrapper = shallow(<UndoList list={ [] }/>);
  const countEle = findTestWrapper(wrapper, 'count');
  const listItems = findTestWrapper(wrapper, 'list-item');
  expect(countEle.text()).toBe("0");
  expect(listItems.length).toBe(0);
});

it('UndoList 列表有数据时, count为数据长度,列表不为空', () => {
  const listData = ['学习jest', '学习TDD', '学习单元测试'];
  const wrapper = shallow(<UndoList list={ listData }/>);
  const countEle = findTestWrapper(wrapper, 'count');
  const listItems = findTestWrapper(wrapper, 'list-item');
  expect(countEle.text()).toBe(listData.length.toString());
  expect(listItems.length).toBe(listData.length);
});

it('UndoList 列表有数据时,存在删除按钮', () => {
  const listData = ['学习jest', '学习TDD', '学习单元测试'];
  const wrapper = shallow(<UndoList list={ listData }/>);
  const deleteEle = findTestWrapper(wrapper, 'delete-item');
  expect(deleteEle.length).toBe(listData.length);
});

it('UndoList 列表有数据时,点击某个删除按钮,会调用删除方法', () => {
  const listData = ['学习jest', '学习TDD', '学习单元测试'];
  const fn = jest.fn();
  const wrapper = shallow(<UndoList deleteItem={ fn } list={ listData }/>);
  const deleteEle = findTestWrapper(wrapper, 'delete-item');
  deleteEle.at(1).simulate('click');
  expect(fn).toHaveBeenLastCalledWith(1);
});