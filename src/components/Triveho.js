import React from "react";

const Triveho = () => {
	return (
		<>
			<main id="main">
				<section className="portfolio-details">
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-8">
								<iframe
									title="triveho"
									frameborder="0"
									scrolling="no"
									style={{
										marginheight: "0",
										marginwidth: "0",
										width: "100%",
										height: "100%",
									}}
									type="text/html"
									src="https://www.youtube.com/embed/wsVloQO3gMc?autoplay=1&mute=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
								>
									<div>
										<small>
											<a href="https://youtubeembedcode.com/pl/">
												youtubeembedcode.com/pl/
											</a>
										</small>
									</div>
									<div>
										<small>
											<a href="https://spelpaus.net/">spelpaus.net</a>
										</small>
									</div>
								</iframe>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Technologies</strong>: HTML, Bootstrap, Css,
											JQuery, PHP, MySql
										</li>
										<li>
											<strong>Client</strong>: N/A
										</li>
										<li>
											<strong>Project date</strong>: 01 January, 2021
										</li>
										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://triveho.com/">www.triveho.com</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										Triveho is a platform that i developed using JavaScript,
										JQuery, Bootstrap and Php/MySql. My inspiration behind this
										project was to allow people to find travellers with extra
										luggage space. Also, allow travellers to make extra cash by
										broadcasting their upcoming journey and carrying a package
										they are comfortable with. The site has a chat system that
										enable users to discuss directly via the platform. Triveho
										remains a work in progress as I keep maintaining the site
										and adding new features with new technologies such as
										React.js
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

export default Triveho;
