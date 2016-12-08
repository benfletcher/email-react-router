import React from 'react';

export default function App(props) {
  console.log("app");
  // console.log(props.params.mailbox_name);

	return (
		<div className="app">
			<h1>
				Gmail-Killer Email App
      </h1>
      <nav>
        {"SIDEBAR: inbox / spam links"}
      </nav>
			<div>
				{props.children}
			</div>
		</div>
	);
};
