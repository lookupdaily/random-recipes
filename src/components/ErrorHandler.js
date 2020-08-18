import React from 'react';

export const ErrorHandler = (props) => {
  let message;
  if (props.error) {
    message = 'Error: ' + props.error.message;
  };

  return <div>{message}</div>
}