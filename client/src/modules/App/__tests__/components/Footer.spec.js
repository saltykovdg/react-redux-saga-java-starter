import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';
import { intl } from '../../../../util/react-intl-test-helper';

const enabledLanguages = ['en', 'ru'];
const intlProp = { ...intl, enabledLanguages };

const props = {
  switchLanguage: () => {},
  intl: intlProp,
};

describe('renders the footer properly', () => {
  const wrapper = shallow(<Footer {...props} />);
  it('contains footer element', () => {
    expect(wrapper.find('footer').length).toBe(1);
  });
  it('contains switch language text element', () => {
    expect(wrapper.find('footer').containsMatchingElement(<FormattedMessage id="switchLanguage" />)).toBe(true);
  });
  it('contains switch language buttons element', () => {
    expect(wrapper.find('button').length).toBe(enabledLanguages.length);
  });
});

