import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Portfolio = () => {
	return (
		<>
			<Header page={"portfolio"} />
			<main id="main">
				<section id="breadcrumbs" className="breadcrumbs">
					<div className="container">
						<div className="d-flex justify-content-between align-items-center">
							<h2>Portolio</h2>
							<ol>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>Portolio</li>
							</ol>
						</div>
					</div>
				</section>

				<section id="portfolio" className="portfolio">
					<div className="container">
						{/* <div className="row">
							<div className="col-lg-12 d-flex justify-content-center">
								<ul id="portfolio-filters">
									<li data-filter="*" className="filter-active">
										All
									</li>
									<li data-filter=".filter-app">Projects</li>
									<li data-filter=".filter-freelance">Freelance</li>
									
								</ul>
							</div>
						</div> */}

						<div className="row portfolio-container">
							<div className="col-lg-4 col-md-6 portfolio-item filter-app">
								<div className="portfolio-wrap">
									<img
										src="assets/img/portfolio/movilib-1.png"
										className="img-fluid"
										alt=""
									/>
									<div className="portfolio-info">
										<h4>Movilib</h4>
										<p></p>
										<div className="portfolio-links">
											<Link
												to="/movilib"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-plus"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-app">
								<div className="portfolio-wrap">
									<img
										src="../assets/img/portfolio/triveho-1.png"
										className="img-fluid"
										alt=""
									/>
									<div className="portfolio-info">
										<h4>Triveho</h4>
										<p></p>
										<div className="portfolio-links">
											<Link
												to="/triveho"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-plus"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="filter-freelance col-lg-4 col-md-6 portfolio-item">
								<div className="portfolio-wrap">
									<img
										src="../assets/img/portfolio/fts-1.png"
										className="img-fluid"
										alt=""
									/>
									<div className="portfolio-info">
										<h4>Fidelle Tech Support</h4>
										<p></p>
										<div className="portfolio-links">
											<Link
												to="/fidelle-tech"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-plus"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="filter-freelance col-lg-4 col-md-6 portfolio-item">
								<div className="portfolio-wrap">
									<img
										src="../assets/img/portfolio/myPortfolio.png"
										className="img-fluid"
										alt=""
									/>
									<div className="portfolio-info">
										<h4>My Portfolio</h4>
										<p></p>
										<div className="portfolio-links">
											<Link
												to="/myPortfolio"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-plus"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="filter-freelance col-lg-4 col-md-6 portfolio-item">
								<div className="portfolio-wrap" style={{ textAlign: "center" }}>
									<img
										src="../assets/img/portfolio/cinch-1.png"
										className="img-fluid"
										alt=""
									/>
									<div className="portfolio-info">
										<h4>Cinch Finance</h4>
										<p></p>
										<div className="portfolio-links">
											<Link
												to="/cinch"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-plus"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 portfolio-item filter-freelance">
								<div className="portfolio-wrap">
									<img
										src="../assets/img/portfolio/lia-1.png"
										className="img-fluid"
										alt=""
									/>
									<div className="portfolio-info">
										<h4>Lia-sa</h4>
										<p></p>
										<div className="portfolio-links">
											<Link
												to="/lia-sa"
												className="portfolio-details-lightbox"
												data-glightbox="type: external"
												title="Portfolio Details"
											>
												<i className="bx bx-plus"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Portfolio;
