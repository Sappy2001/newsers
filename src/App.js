import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import {BrowserRouter} from "react-router-dom";

import { Router, Route, Switch } from "react-router-dom";
export default class App extends Component {

	state = {
		progress: 0,
	};
	setProgress = (progress) => {
		this.setState({ progress: progress });
	};
	apiKey = process.env.REACT_APP_NEWS_API;
	render() {
		return (
			<>
				<BrowserRouter basename="/newsers">
					<Navbar />
					<LoadingBar
						height={3}
						color="#f11946"
						progress={this.state.progress}
					/>
					<Switch>
						<Route exact path="/">
							<News
								setProgress={this.setProgress}
								key="general"
								country="in"
								apiKey={this.apiKey}
								category="general"
							/>
						</Route>
						<Route exact path="/business">
							<News
								setProgress={this.setProgress}
								key="business"
								country="in"
								apiKey={this.apiKey}
								category="business"
							/>
						</Route>
						<Route exact path="/entertainment">
							<News
								setProgress={this.setProgress}
								key="entertainment"
								country="in"
								apiKey={this.apiKey}
								category="entertainment"
							/>
						</Route>

						<Route exact path="/health">
							<News
								setProgress={this.setProgress}
								key="health"
								country="in"
								apiKey={this.apiKey}
								category="health"
							/>
						</Route>
						<Route exact path="/science">
							<News
								setProgress={this.setProgress}
								key="science"
								country="in"
								apiKey={this.apiKey}
								category="science"
							/>
						</Route>
						<Route exact path="/sports">
							<News
								setProgress={this.setProgress}
								key="sports"
								country="in"
								apiKey={this.apiKey}
								category="sports"
							/>
						</Route>
						<Route exact path="/technology">
							<News
								setProgress={this.setProgress}
								key="technology"
								country="in"
								apiKey={this.apiKey}
								category="technology"
							/>
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		);
	}
}
