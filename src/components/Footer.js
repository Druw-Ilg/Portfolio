import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="footer-info">
									<Link to="/" className="logo me-auto">
										<img
											src="assets/img/logo/logo-no-bg2-edited.png"
											alt=""
											className="img-fluid footer-logo"
										/>
									</Link>
									
									<div className="social-links mt-3">
										
										<a
											href="https://www.linkedin.com/in/andruw-ilagou-507745198"
											className="linkedin"
										>
											<i className="bx bxl-linkedin"></i>
										</a>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 footer-links">
								<h4>Useful Links</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i>{" "}
										<Link to="/">Home</Link>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{" "}
										<Link to="/reviews">Testimonials</Link>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{" "}
										<Link to="/contact">Contact</Link>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{" "}
										<Link to="/privacy-policy">Privacy policy</Link>
									</li>
								</ul>
							</div>

							
						</div>
					</div>
				</div>

				<div className="container">
					<div className="copyright">
						&copy; Copyright 2022{" "}
						<strong>
							<span>Andruw Ilagou</span>
						</strong>
						. All Rights Reserved
					</div>
				</div>
			</footer>
			<a
				href="./#"
				className="back-to-top d-flex align-items-center justify-content-center"
			>
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</>
	);
};

export default Footer;
