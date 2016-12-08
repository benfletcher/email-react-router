import React from 'react';
import {Link} from 'react-router';

export default function Email(props) {
	console.log("email", props);
  const email = props.email;
	return (
		<div>
			<strong>
				{/*}<Link to={"/emails/" + props.id}>
			</Link>*/}
			</strong>
			<ul style={{listStyle: "none"}}>
				<li>{"From: " + email.from}</li>
				<li>{"To: " + email.to}</li>
				<li>{"Title: " + email.title}</li>
				<li>{"Content: " + email.content}</li>
			</ul>
		</div>
	);
}
