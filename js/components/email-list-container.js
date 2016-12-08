import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';

export default function EmailListContainer(props) {
	return <EmailList emails={EMAILS} />;
};
