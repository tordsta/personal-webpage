import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { App } from '../App';

const children = <h1>test</h1>;
const wrapper = shallow(<App children={children} />);

test('render properly', t => {
  t.true(wrapper.find('div').children.length >= 1);
});

test('prop children renders', t => {
  t.true(wrapper.contains(children));
});

test.todo('responsive design');
