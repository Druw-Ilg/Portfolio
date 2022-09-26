import React from "react";

const Cinch = () => {
	return (
		<>
			<main id="main">
				<section className="portfolio-details">
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-8">
								<div className="portfolio-details-slider swiper">
									<div className="swiper-wrapper align-items-center">
										<div className="swiper-slide">
											<img src="assets/img/portfolio/myPortfolio.png" alt="" />
										</div>

										<div className="swiper-slide">
											<img
												src="assets/img/portfolio/myPortfolio-2.png"
												alt=""
											/>
										</div>
										<div className="swiper-slide">
											<img
												src="assets/img/portfolio/myPortfolio-3.png"
												alt=""
											/>
										</div>
									</div>
									<div className="swiper-pagination"></div>
								</div>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Technologies</strong>:React.js, Bootstrap, Css,
											JavaScript, Firebase
										</li>

										<li>
											<strong>Project date</strong>: 09 April, 2021
										</li>
										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://andruwilagou.com/">
												www.andruwilagou.com
											</a>
										</li>
										<li>
											<strong>GitHub</strong>:
											<a href="https://github.com/Druw-Ilg/Portfolio">
												www.github.com/Druw-Ilg/Portfolio
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>My Portfolio.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Cinch;
