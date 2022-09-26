import React from "react";

const PortfolioDetails = () => {
	return (
		<>
			<main id="main">
				<section className="portfolio-details">
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-8">
								<iframe
									title="movilib"
									frameBorder="0"
									scrolling="no"
									style={{
										marginheight: "0",
										marginwidth: "0",
										width: "100%",
										height: "100%",
									}}
									type="text/html"
									src="https://www.youtube.com/embed/pzZJXtHmcPE?autoplay=1&mute=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"
								>
									<div>
										<small>
											<a href="https://youtubeembedcode.com/nl/">
												youtubeembedcode.com/nl/
											</a>
										</small>
									</div>
									<div>
										<small>
											<a href="https://oddsutansvensklicens.nu/">
												https://oddsutansvensklicens.nu/
											</a>
										</small>
									</div>
									<div>
										<small>
											<a href="https://youtubeembedcode.com/nl/">
												youtubeembedcode nl
											</a>
										</small>
									</div>
									<div>
										<small>
											<a href="https://oddssidorutansvensklicens.se/">
												oddssidorutansvensklicens.se
											</a>
										</small>
									</div>
								</iframe>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Technologies</strong>:React.js, Css, TMDB's API,
											Firebase
										</li>

										<li>
											<strong>Project date</strong>: 16 August, 2021
										</li>
										<li>
											<strong>Project URL</strong>:
											<a href="https://movilib.web.app/">www.movilib.web.app</a>
										</li>
										<li>
											<strong>GitHub</strong>:
											<a href="https://github.com/Druw-Ilg/movilib">
												www.github.com/Druw-Ilg/movilib
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										Movie library inspired by Netflix. Movilib is a React.js
										application using TMDB api and deployed on firebase. It
										contains a wide suggestion of movies and allows to watch
										movie trailers. This app is still an ongoing project as I
										plan to add several features to it for an amazing user
										experience and also, I envision a mobile application
										version.
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

export default PortfolioDetails;
