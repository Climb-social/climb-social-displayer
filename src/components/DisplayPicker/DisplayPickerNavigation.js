import React, { PropTypes } from 'react';
import PushButton from 'components/PushButton';

export class DisplayPickerNavigation extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    selected: PropTypes.object.isRequired,
    setDisplay: PropTypes.func.isRequired,
  };

  static defaultProps = {
    options: [],
  };

  render() {
    const { options, selected, setDisplay } = this.props;

    return (
      <ul>
        {options.map(option =>
          <PushButton
            key={option.key}
            onClick={() => setDisplay(option)}
            isActive={selected.key === option.key}
          >{option.name}</PushButton>
        )}
      </ul>
    );
  }
}

export default DisplayPickerNavigation;
