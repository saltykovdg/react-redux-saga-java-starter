import reducer from '../IntlReducer';
import { switchLanguage } from '../IntlActions';
import { localizationData, enabledLanguages } from '../../../Intl/setup';

// test('action for SWITCH_LANGUAGE is working', reducerTest(
//   intlReducer,
//   { locale: 'en', enabledLanguages, ...localizationData.en },
//   switchLanguage('ru'),
//   { locale: 'ru', enabledLanguages, ...localizationData.ru },
// ));

const initLocale1 = (global.navigator && global.navigator.language) || 'en';
const initialState1 = {
  locale: initLocale1,
  enabledLanguages,
  ...(localizationData[initLocale1] || {}),
};

const initialState2 = {
  locale: 'en',
  enabledLanguages,
  ...localizationData.en,
};

describe('intl reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState1);
  });
  it('should handle switchLanguage', () => {
    expect(
      reducer(initialState2, switchLanguage('ru'))
    ).toEqual({ locale: 'ru', enabledLanguages, ...localizationData.ru });
  });
});
