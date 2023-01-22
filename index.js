class App extends React.Component{
	render(){
		return(
			<div>
				<Hello to="Pelin" from="Mert"/>
				<Hello to="Veysel" from="Naile"/>
			<NumPicker/>
			<Machine s1="orange" s2="apple" s3="cucumber"/>
			<Machine s1="orange" s2="orange" s3="orange"/>
			<Machine s1="orange" s2="apple" s3="bla"/>
			</div>
		)
	}
}
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);





