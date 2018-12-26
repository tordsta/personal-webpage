import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import WelcomeText from '../../components/WelcomeText';

const wrapper = shallow(<WelcomeText />);

test('that component renders', t => {
  t.true(wrapper.find('div').children.length >= 1);
});

test('component has a headline', t => {
  t.is(wrapper.find('h1').length, 1);
});

test('component has at least one paragraph', t => {
  t.true(wrapper.find('p').length >= 1);
});
