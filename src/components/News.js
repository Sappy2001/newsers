import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';


// import axios from 'axios';

export class News extends Component {
	static defaultProps = {
		country: "in",
		category: "general",
		page: "1",
	};
	static propTypes = {
		country: PropTypes.string,
		category: PropTypes.string,
	};
	constructor(props) {
		super(props);
		console.log("hello im a constructor");
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			totalResults:0,
		};
		document.title = `${this.props.category}-NewsER`;
	}
	async UpdateNews() {
		this.props.setProgress(10);
		this.setState({ loading: true });
		let data = await fetch(
			`http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}`
		);
		this.props.setProgress(30);
		let parsedData = await data.json();
		console.log(parsedData);
		this.props.setProgress(60);
		this.setState({
			articles: parsedData.articles,
			loading: false,
			totalResults: parsedData.totalResults,
		});
		this.props.setProgress(100);
	}

	async componentDidMount() {
		// this.setState({ loading: true });
		// let data = await fetch(`http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3020a63409404e1a8ab3586ee41661ba&page=${this.props.page}`
		// );
		// let parsedData = await data.json();
		// console.log(parsedData);
		// this.setState({
		// 	articles: parsedData.articles,
		// 	loading: false,
		// 	totalResults: parsedData.totalResults,
		// });
		this.UpdateNews();
	}

	// prevClick = async () => {
	// 	console.log("prev");
	// 	this.setState({ loading: true });
	// 	let data = await fetch(
	// 		`https://newsapi.org/v2/top-headlines?country=${
	// 			this.props.country
	// 		}&category=${
	// 			this.props.category
	// 		}&apiKey=3020a63409404e1a8ab3586ee41661ba&page=${
	// 			this.state.page - 1
	// 		}&pageSize=12`
	// 	);

	// 	let parsedData = await data.json();
	// 	this.setState({
	// 		articles: parsedData.articles,
	// 		page: this.state.page - 1,
	// 		loading: false,
	// 	});
	// 	// this.setState({page:this.state.page-1});
	// 	// this.UpdateNews();
	// };
	// nextClick = async () => {
	// 	console.log("next");

	// 	if (this.state.totalResults - this.state.page * 12 > 0) {
	// 		this.setState({ loading: true });
	// 		let data = await fetch(
	// 			`https://newsapi.org/v2/top-headlines?country=${
	// 				this.props.country
	// 			}&category=${
	// 				this.props.category
	// 			}&apiKey=3020a63409404e1a8ab3586ee41661ba&page=${
	// 				this.state.page + 1
	// 			}&pageSize=12`
	// 		);

	// 		let parsedData = await data.json();
	// 		this.setState({
	// 			articles: parsedData.articles,
	// 			page: this.state.page + 1,
	// 			loading: false,
	// 		});
	// 	}
	// 	// this.setState({page:this.state.page+1});
	// 	// this.UpdateNews();}
	// };
	 fetchData = async() => {
		this.setState({page:this.state.page+1});
		const data = await fetch(
			`http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}`
		);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			loading: false,
			totalResults: parsedData.totalResults,
		});
	  };

	render() {
		console.log("render");
		return (
			<div className="container">
				<h2 className="text-center" style={{ margin: "70px 0px" }}>
					NewsERs-Top
					<span style={{ color: "red",textTransform:"uppercase"}}>{this.props.category}</span> HeadLines
				</h2>
				{this.state.loading && <Spinner />}

				<InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={this.state.articles.length!==this.state.totalResults}
  loader={<Spinner/>}>
	  <div className="container">

	  </div>
					<div className="row">
						{
						// !this.state.loading && 
						this.state.articles.map((e) => {
							return (
								<div className="col-md-4" key={e.url}>
									<NewsItems
										title={e.title ? e.title.slice(0, 40) + "..." : ""}
										description={
											e.description ? e.description.slice(0, 88) + "..." : ""
										}
										imageUrl={
											e.urlToImage
												? e.urlToImage
												: "https://picsum.photos/id/0/286/176"
										}
										newsUrl={e.url}
										author={e.author ? e.author : "unknown"}
										date={e.publishedAt}
										source={e.source.name}
									/>
								</div>
							);
						})}
					</div>
					</InfiniteScroll>
				
				{/* <div className="container d-flex justify-content-between">
					<button
						disabled={this.state.page <= 1}
						className={
							this.state.page <= 1
								? "btn btn-light bg-light"
								: "btn btn-dark m-2"
						}
						onClick={this.prevClick}
					>
						&larr;Previous
					</button>
					<button
						disabled={this.state.totalResults - this.state.page * 12 < 0}
						className={
							this.state.totalResults - this.state.page * 12 > 0
								? "btn btn-dark m-2"
								: "btn btn-light bg-light"
						}
						onClick={this.nextClick}
					>
						Next&rarr;
					</button>
				</div> */}
			</div>
		);
	}
}

export default News;
