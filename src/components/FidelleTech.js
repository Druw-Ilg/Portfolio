import React from "react";

const FidelleTech = () => {
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
											<img src="assets/img/portfolio/fts-1.png" alt="" />
										</div>

										<div className="swiper-slide">
											<img src="assets/img/portfolio/fts-2.png" alt="" />
										</div>

										<div className="swiper-slide">
											<img src="assets/img/portfolio/fts-3.png" alt="" />
										</div>
										<div className="swiper-slide">
											<img src="assets/img/portfolio/fts-4.png" alt="" />
										</div>
										<div className="swiper-slide">
											<img src="assets/img/portfolio/fts-5.png" alt="" />
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
											<strong>Technologies</strong>: HTML, Bootstrap, Css,
											JavaScript, Firebase
										</li>
										<li>
											<strong>Client</strong>: Fidelle Tech Support
										</li>
										<li>
											<strong>Project date</strong>: 01 February, 2022
										</li>
										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://fidelle-tech-support.web.app/">
												www.fidelle-tech-support.com
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										Professional portfolio developed for Fidelle Tech Support.
										An authorised IT services provider.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default FidelleTech;
