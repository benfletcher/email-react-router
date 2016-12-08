import React from 'react';
import Email from './email'

export default function EmailList(props)  {
	const emails = Object.keys(props.emails)
	.map((emailId, index) => {
		const email = props.emails[emailId];
		return (
			<li key={index}>
				<Email id={email.id} name={email.name}
					phoneNumber={email.phoneNumber} />
			</li>
			);
	});
  
	return (
		<ul>
			{emails}
		</ul>
		);
};
