import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<Header page={"home"} />
			<section id="hero">
				<div
					id="heroCarousel"
					data-bs-interval="5000"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
					pause="false"
				>
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#heroCarousel"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#heroCarousel"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
					</div>

					<div className="carousel-inner">
						{/* Slide 1 */}
						<div
							className="carousel-item active"
							style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
						>
							<div className="carousel-container">
								<div className="container">
									<h2 className="animate__animated animate__fadeInDown">
										Hi, I'm <span>Andruw Ilagou</span>
									</h2>
									<p className="animate__animated animate__fadeInUp">
										<span style={{ fontWeight: "600" }}>
											A motivated software developer
										</span>{" "}
										with the ability to challenge others and myself to develop
										solutions to problems and situations. I am driven by growth
										within this field of work. I have shown strong leadership
										skills with an understanding of both individual and team
										goals to collaboratively work towards a common objective. My
										aspiration as a software developer is to develop solutions
										to technology’s complex problems and use the knowledge I
										possess to improve the quality and ease of work in
										businesses through software.
									</p>
									<Link
										to="/contact"
										className="btn-get-started animate__animated animate__fadeInUp scrollto"
									>
										Contact Me
									</Link>
								</div>
							</div>
						</div>

						{/* Slide 2 */}
						<div
							className="carousel-item"
							style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
						>
							<div className="carousel-container">
								<div className="container">
									<h2 className="animate__animated animate__fadeInDown">
										My Skills
									</h2>
									<p className="animate__animated animate__fadeInUp icons-languages">
										<span className="icons-divider">
											<i
												className="bx bxl-html5"
												title="Html5"
												style={{ color: "#ba3329" }}
											></i>
											<i
												className="bx bxl-css3"
												title="Css3"
												style={{ color: "#1769aa" }}
											></i>

											<span className="bx">
												<iconify-icon
													icon="logos:javascript"
													width="65"
													title="JavaScript"
												></iconify-icon>
											</span>

											<i
												className="bx bxl-jquery"
												title="JQuery"
												style={{ color: "#1769aa" }}
											></i>
											<i
												className="bx bxl-bootstrap"
												title="Bootstrap"
												style={{ color: "#7e13f8" }}
											></i>

											<i
												className="bx bxl-react"
												title="React"
												style={{ color: "#00d8ff" }}
											></i>

											<span className="bx">
												<iconify-icon
													icon="logos:nextjs"
													width="105"
													title="Next.Js"
												/>
											</span>
										</span>
										<span className="icons-divider">
											<span className="bx">
												<iconify-icon
													icon="logos:java"
													width="65"
													title="Java"
												></iconify-icon>
											</span>

											<span className="bx iconify">
												<iconify-icon
													icon="logos:mongodb-icon"
													width="35"
													title="MongoDb"
												></iconify-icon>
											</span>

											<i
												className="bx bxl-nodejs"
												title="NodeJs"
												style={{ color: "#539e43" }}
											></i>

											<i
												className="bx bxl-php"
												title="Php"
												style={{ color: "#6181b6" }}
											></i>

											<span className="bx iconify">
												<iconify-icon
													icon="logos:mysql"
													width="80"
													title="MySql"
												></iconify-icon>
											</span>

											<span className="bx iconify">
												<iconify-icon
													icon="logos:adobe-xd"
													width="65"
													title="Adobe XD"
												></iconify-icon>
											</span>
										</span>
									</p>
									<Link
										to="/contact"
										className="btn-get-started animate__animated animate__fadeInUp scrollto"
									>
										Contact Me
									</Link>
								</div>
							</div>
						</div>
					</div>

					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#heroCarousel"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#heroCarousel"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;
