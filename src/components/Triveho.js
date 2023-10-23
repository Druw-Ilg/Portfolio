import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Triveho = () => {
	const { t } = useTranslation();

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
									<h3>{t("Project information")}</h3>
									<ul>
										<li>
											<strong>Stack</strong>: HTML, Bootstrap, Css, JQuery, PHP,
											MySql
										</li>

										<li>
											<strong>{t("Project URL")}</strong>:{" "}
											<a href="https://triveho.com/">www.triveho.com</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>{t("trivehoDesc")}</p>
								</div>
								<Link to="/work">
									<i class="bi bi-arrow-left"></i>
									{t("Back")}
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Triveho;
