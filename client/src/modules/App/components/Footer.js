import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

function Footer(props) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <button key={lang} onClick={() => props.switchLanguage(lang)}>{lang}</button>
  );

  return (
    <footer>
      <FormattedMessage id="switchLanguage" />
      {languageNodes}
    </footer>
  );
}

Footer.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Footer;
