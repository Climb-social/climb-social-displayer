import React, { PropTypes } from 'react';

export class FastInput extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf(['text']).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    type: 'text',
  };

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  handleChange(value) {
    this.setState({ value }, () => this.props.onChange(value));
  }

  render() {
    const { type } = this.props;
    const { value } = this.state;

    return (
      <input
        type={type}
        value={value}
        onChange={({ target }) => this.handleChange(target.value)}
      />
    );
  }
}

export default FastInput;

