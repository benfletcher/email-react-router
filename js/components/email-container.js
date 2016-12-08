import React from 'react';
import EMAILS from '../emails';
import Email from './email';

export default function EmailContainer(props) {
  console.log("email-container");

    const email = EMAILS[props.params.mailbox_name][0];
    return (
      <Email
        id={email.id}
        from={email.from}
        to={email.to}
        title={email.title}
        content={email.content}
      />
    );
};
