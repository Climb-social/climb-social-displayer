import React, { PropTypes } from 'react';

export class PushButton extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    isActive: false,
  };

  render() {
    const { isActive, ...others } = this.props;

    return (
      <button
        className={isActive ? 'is-active' : ''}
        {...others}
      />
    );
  }
}

export default PushButton;
