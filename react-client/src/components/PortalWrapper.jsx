import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const portalRoot = document.getElementById('review-photo-portal');

class PortalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

PortalWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PortalWrapper;
