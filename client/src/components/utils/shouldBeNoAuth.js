import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const { auth } = this.props;
      if (!auth.loading && auth.isAuthenticated && auth.user) {
        const { typeAccess } = auth.user;
        if (typeAccess == 'user') {
          this.props.history.push('/');
        }else if (typeAccess == 'restaurant') {
          this.props.history.push('/dashboard');
        }
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
