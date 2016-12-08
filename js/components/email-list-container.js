import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';

export default function EmailListContainer(props) {
  console.log('params', props.params);
	// console.log("email-list-container");
	return <EmailList emails={EMAILS.inbox} />;
};
