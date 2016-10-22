import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';
import { intl } from '../../../../util/react-intl-test-helper';

const enabledLanguages = ['en', 'ru'];
const intlProp = { ...intl, enabledLanguages };

describe('renders the footer properly', () => {
  const wrapper = shallow(
    <Footer switchLanguage={() => {}} intl={intlProp} />
  );
  it('contains footer element', () => {
    expect(wrapper.find('footer').length).toBe(1);
  });
  it('contains switch language text element', () => {
    expect(wrapper.find('footer').containsMatchingElement(<FormattedMessage id="switchLanguage" />)).toBe(true);
  });
  it('contains switch language buttons element', () => {
    expect(wrapper.find('input').length).toBe(enabledLanguages.length);
  });
});
