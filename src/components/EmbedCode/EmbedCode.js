import React, { PropTypes } from 'react';
import format from 'string-template';


const template = `
<script src="https://npmcdn.com/react@^15.0/dist/react.min.js"></script>
<script src="https://npmcdn.com/react-dom@^15.0/dist/react-dom.min.js"></script>
<script src="https://npmcdn.com/react-climb-social@2.0.0-alpha.5/dist/react-climb-social.min.js"></script>
<div data-climb data-collection-id="{id}" data-layout="{layout}"></div>
`.replace(/\r?\n|\r/g, '');


const EmbedCode = ({ collectionId: id, layoutName: layout }) => (
  <code>{format(template, { id, layout })}</code>
);

EmbedCode.propTypes = {
  collectionId: PropTypes.string.isRequired,
  layoutName: PropTypes.string.isRequired,
};

export default EmbedCode;
