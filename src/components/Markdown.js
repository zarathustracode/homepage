import React from 'react';
import ReactMarkdown from 'react-markdown';

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false
});

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default Markdown;