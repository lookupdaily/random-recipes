import React from 'react';
import ReactHTMLParser from 'react-html-parser';

export const Summary = (props) => {
  const text = props.children
  return <p>{ReactHTMLParser(text)}</p>
}
