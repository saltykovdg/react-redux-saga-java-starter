import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import { MessageCreateWidget } from '../../components/MessageCreateWidget/MessageCreateWidget';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';

describe('renders the message create widget properly', () => {
  const wrapper = shallowWithIntl(<MessageCreateWidget onPost={() => {}} />);
  it('contains root element', () => {
    expect(wrapper.find('.post-form').length).toBe(1);
  });
  it('contains input field', () => {
    expect(wrapper.find('input').length).toBe(1);
  });
  it('contains button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });
  it('contains button message', () => {
    expect(wrapper.find('button').containsMatchingElement(<FormattedMessage id="messageCreateWidgetSendButton" />)).toBe(true);
  });
});

describe('message create widget has correct props', () => {
  it('has contains prop onPost', () => {
    const onPost = () => {};
    const wrapper = mountWithIntl(<MessageCreateWidget onPost={onPost} />);
    expect(wrapper.prop('onPost')).toBe(onPost);
  });
});

describe('message create widget has correct calls', () => {
  it('calls onPost', () => {
    const onPost = sinon.spy();
    const testMessage = 'test message 1';
    const wrapper = mountWithIntl(<MessageCreateWidget onPost={onPost} />);
    wrapper.find('input').get(0).value = testMessage;
    wrapper.find('button').simulate('click');
    expect(onPost.calledOnce).toBe(true);
    expect(onPost.calledWith(testMessage)).toBe(true);
  });
  it('doesn\'t calls onPost', () => {
    const onPost = sinon.spy();
    const wrapper = mountWithIntl(<MessageCreateWidget onPost={onPost} />);
    wrapper.find('button').simulate('click');
    expect(onPost.calledOnce).toBe(false);
  });
});
