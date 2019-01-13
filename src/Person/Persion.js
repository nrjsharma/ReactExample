import React from 'react';

//function Person(){
//	or
const person = (props) => {
	return(
			<div>
			<p>i am a {props.name} and i am {props.age}</p>
			<p>{props.children}</p>
			</div>
		);
}

export default person;

