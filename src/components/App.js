import React,{ Component } from 'react';
import Clock from './Clock';

class App extends Component{
	state = { deadline: 'October 27, 2019', newDeadline: ''};

	updateDeadline() {
		this.setState({ deadline: this.state.newDeadline});
	}

	render() {
		return(
		<div className="App">
		Countdown Champ
			<div className="App-title">Countdown to {this.state.deadline}</div>
			<Clock deadline={this.state.deadline} />
			<div className="Input">
				<input placeholder="enter date"
				onChange={event => this.setState({newDeadline: event.target.value})}
				onKeyPress={event => event.key=="Enter" ? this.updateDeadline() : null }
				/>
				<button onClick={() => this.updateDeadline() }>Set</button>
			</div>
		</div>
	);
	}
}



export default App;