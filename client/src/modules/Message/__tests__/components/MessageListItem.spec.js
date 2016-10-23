import React from 'react';
import { shallow } from 'enzyme';
import MessageListItem from '../../components/MessageListItem/MessageListItem';
import { mountWithIntl } from '../../../../util/react-intl-test-helper';

const message1 = { text: 'Message 1', use_intl: false };

describe('renders the message list item properly', () => {
  const wrapper = shallow(<MessageListItem message={message1} />);
  it('should contains li element', () => {
    expect(wrapper.find('li').length).toBe(1);
  });
  it('has correct li value', () => {
    expect(wrapper.find('li').text()).toBe(message1.text);
  });
});

describe('message list item has correct props', () => {
  it('has contains prop message', () => {
    const wrapper = mountWithIntl(<MessageListItem message={message1} />);
    expect(wrapper.prop('message')).toBe(message1);
  });
});
