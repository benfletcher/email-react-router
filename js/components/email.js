import React from 'react';
import {Link} from 'react-router';

export default function Email(props) {
	console.log("email");
	return (
		<div>
			<strong>
				{/*}<Link to={"/emails/" + props.id}>
			</Link>*/}
			</strong>
			<ul style={{listStyle: "none"}}>
				<li>{"From: " + props.from}</li>
				<li>{"To: " + props.to}</li>
				<li>{"Title: " + props.title}</li>
				<li>{"Content: " + props.content}</li>
			</ul>
		</div>
	);
}
