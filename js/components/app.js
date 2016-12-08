import React from 'react';
import {Link} from 'react-router';

export default function App(props) {
  // console.log("app");
  // console.log(props.params.mailbox_name);

	return (
		<div className="app">
			<h1>
				Gmail-Killer Email App
      </h1>
      <nav className="navbar">
        <Link to={"/"}>
          Home
        </Link>
        <Link to={"/inbox"}>
          Inbox
        </Link>
        <Link to={"/spam"}>
          Spam
        </Link>
      </nav>
			<div>
				{props.children}
			</div>
		</div>
	);
};
