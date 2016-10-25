import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">
          <FormattedMessage id="linkMain" />
        </Link>
      </li>
      <li>
        <Link to="/message">
          <FormattedMessage id="linkMessage" />
        </Link>
      </li>
    </ul>
  );
}

export default Header;
