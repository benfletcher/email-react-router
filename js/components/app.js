import React from 'react';

export default function App(props) {

  console.log(props.params.mailbox_name);

	return (
		<div className="app">
			<h1>
				Gmail-Killer Email App
      </h1>
      <nav>
        {/* inbox link
          spam link */}
      </nav>
			<div>
				{/* {props.children} */}
			</div>
		</div>
	);
};
