import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Components
import DevTools from './components/DevTools';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { switchLanguage } from '../../modules/Intl/IntlActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // eslint-disable-line
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV !== 'production' && <DevTools />}
        <Header />
        {this.props.children}
        <Footer
          switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
          intl={this.props.intl}
        />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.objectOf(PropTypes.shape).isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
