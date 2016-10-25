import React from 'react';
import { FormattedMessage } from 'react-intl';

export function WelcomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage id="welcomePageTitle" />
      </h1>
      <p>
        <FormattedMessage id="welcomePageText" />
      </p>
    </div>
  );
}

export default WelcomePage;
