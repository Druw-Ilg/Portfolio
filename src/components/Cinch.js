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
											<img src="assets/img/portfolio/cinch-3.png" alt="" />
										</div>

										<div className="swiper-slide">
											<img src="assets/img/portfolio/cinch-4.png" alt="" />
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
											<strong>Technologies</strong>: Yoast SEO, Wordpress
										</li>
										<li>
											<strong>Client</strong>: Cinchfin
										</li>
										<li>
											<strong>Project date</strong>: 01 March, 2022
										</li>
										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://cinchfin.co.za/">www.cinchfin.com</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										SEO and website optimization for Cinchfin. A South African
										financial services provider.
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

export default Cinch;
