import React from 'react';
import Email from './email'
import EMAILS from '../emails';

export default function EmailList(props)  {
  const emails = EMAILS[props.params.mailbox_name];

	return (
		<ul>
			{Object.keys(emails).map((key, index) => {
        return <Email email={emails[key]} key={index}/>
      })}
		</ul>
		);
};
