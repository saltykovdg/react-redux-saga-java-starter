import {
  SWITCH_LANGUAGE,
  switchLanguage,
} from '../IntlActions';
import { localizationData } from '../../../Intl/setup';

const lang = 'en';

describe('intl actions', () => {
  it('should return the correct type for switchLanguage', () => {
    const expectedAction = {
      type: SWITCH_LANGUAGE,
      ...localizationData[lang],
    };
    expect(switchLanguage(lang)).toEqual(expectedAction);
  });
});
