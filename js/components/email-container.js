import React from 'react';

import EMAILS from '../emails';
import Email from './email';

export default function EmailContainer(props) {
    const email = EMAILS[props.params.mailbox_name];
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
