import React from 'react';
import './Persion.css';
//function Person(){
//	or
const person = (props) => {
	return(
			<div className="Persion">
			<p onClick={props.click}>i am a {props.name} and i am {props.age}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
			</div>
		)
};

export default person;	

