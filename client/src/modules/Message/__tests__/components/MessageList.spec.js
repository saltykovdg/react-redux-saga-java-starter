import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import MessageList from '../../components/MessageList';
import { mountWithIntl } from '../../../../util/react-intl-test-helper';

const message1 = { text: 'Message 1', use_intl: false };
const message2 = { text: 'Message 2', use_intl: false };
const messages = [message1, message2];

describe('renders the message list properly', () => {
  const wrapper = shallow(<MessageList messages={messages} />);
  it('should contains ul element', () => {
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('ul').hasClass('messages')).toBe(true);
  });
  it('should contains h4 element', () => {
    expect(wrapper.find('h4').length).toBe(1);
  });
  it('should contains FormattedMessage with id messageListHeader (in h4)', () => {
    expect(wrapper.find('h4').containsMatchingElement(<FormattedMessage id="messageListHeader" />)).toBe(true);
  });
  it('should contains MessageListItem', () => {
    expect(wrapper.find('MessageListItem').length).toBe(2);
  });
});

describe('message list has correct props', () => {
  it('has contains prop messages', () => {
    const wrapper = mountWithIntl(<MessageList messages={messages} />);
    expect(wrapper.prop('messages')).toBe(messages);
  });
});
