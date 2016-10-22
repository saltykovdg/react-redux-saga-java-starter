import React from 'react';
import { shallow } from 'enzyme';
import { MessageCreateWidget } from '../../components/MessageCreateWidget/MessageCreateWidget';
import { mountWithIntl, shallowWithIntl, intl } from '../../../../util/react-intl-test-helper';

const enabledLanguages = ['en', 'ru'];
const intlProp = { ...intl, enabledLanguages };

describe('renders the message create widget properly', () => {
  const wrapper = shallowWithIntl(
    <MessageCreateWidget onPost={() => {}} intl={intlProp} />
  );
  it('contains root element', () => {
    expect(wrapper.find('.post-form').length).toBe(1);
  });
  it('contains input elements', () => {
    expect(wrapper.find('input').length).toBe(2);
  });
});
