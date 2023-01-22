function getNumber(){
	return Math.floor(Math.random()*10) +1; 
	
}

class NumPicker extends React.Component {
	render() {
		const num = getNumber();
		let msg;
		// if (num<5){msg="small"}else{msg="big"}
		(num<5 ? msg="yey" : msg="nahh");

		return(
			<div>
				<h1> Your number is {num} </h1>
				{/* {num <5 ? result="true" : result="false"} */}
				{msg}
				
			
			</div>
		)
	}
  }

// function Car(){
// 	return <h2>Hi, I am a Car!</h2>;
// }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<NumPicker />);