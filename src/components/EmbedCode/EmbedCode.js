import React, { PropTypes } from 'react';
import format from 'string-template';
import CopyToClipboard from 'react-copy-to-clipboard';


const template = `
<script src="https://unpkg.com/react@^15.0/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@^15.0/dist/react-dom.min.js"></script>
<script src="https://unpkg.com/react-climb-social@2.0.0-alpha.5/dist/react-climb-social.min.js"></script>
<div data-climb data-collection-id="{id}" data-layout="{layout}"></div>
`.replace(/\r?\n|\r/g, '');


export class EmbedCode extends React.Component {
  static propTypes = {
    collectionId: PropTypes.string.isRequired,
    layoutName: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
  };

  state = {
    copied: false,
  };

  getText() {
    const { collectionId: id, layoutName: layout } = this.props;
    return format(template, { id, layout });
  }

  handleCopy() {
    const { onCopy } = this.props;
    if (onCopy) onCopy();
    this.setState({copied: true}, () => setTimeout(() => this.setState({copied: false}), 100));
  }

  render() {
    const text = this.getText();
    const { copied } = this.state;

    return (
      <div className={copied ? 'is-copied' : ''}>
        <CopyToClipboard
          text={text}
          onCopy={() => this.handleCopy()}
        >
          <code>{text}</code>
        </CopyToClipboard>
      </div>
    );
  }
}

export default EmbedCode;
