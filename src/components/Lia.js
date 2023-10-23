import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Lia = () => {
	const { t } = useTranslation();

	return (
		<>
			<main id="main">
				<section className="portfolio-details">
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-8">
								<iframe
									title="lia-sa"
									frameborder="0"
									scrolling="no"
									style={{
										marginheight: "0",
										marginwidth: "0",
										width: "100%",
										height: "100%",
									}}
									type="text/html"
									src="https://www.youtube.com/embed/g-wLu8LjKQM?autoplay=1&mute=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
								>
									<div>
										<small>
											<a href="https://youtubeembedcode.com/pl/">
												youtubeembedcode pl
											</a>
										</small>
									</div>
									<div>
										<small>
											<a href="https://xn--bstacasinonutansvensklicens-bkc.se/">
												https://xn--bstacasinonutansvensklicens-bkc.se/
											</a>
										</small>
									</div>
								</iframe>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>{t("Project information")}</h3>
									<ul>
										<li>
											<strong>Stack</strong>:HTML, Css, JavaScript
										</li>

										<li>
											<strong>{t("Project URL")}</strong>:{" "}
											<a href="https://lia-sa.com/">www.lia-sa.com</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>{t("liaDesc")}</p>
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

export default Lia;
