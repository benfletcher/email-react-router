import React from 'react';
import {Link} from 'react-router';


export default function Email(props) {
	return (
		<div>
			<strong>
				<Link to={"/emails/" + props.id}>
					{props.name}
				</Link>
			</strong>
				&nbsp;
				{props.title}
		</div>
	);
}
