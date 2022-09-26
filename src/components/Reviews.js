import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Reviews = () => {
	return (
		<>
			<Header page={"reviews"} />
			<main id="main">
				<section id="breadcrumbs" className="breadcrumbs">
					<div className="container">
						<div className="d-flex justify-content-between align-items-center">
							<h2>Testimonials</h2>
							<ol>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>Testimonials</li>
							</ol>
						</div>
					</div>
				</section>

				<section id="testimonials" className="testimonials">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="testimonial-item">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										It is hard to find a web developer you can trust nowadays. I
										can focus on other important aspects of my organization
										knowing that I can depend on you to take care of my
										business's online presencece.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<h3>Blessing</h3>
									<h4>CEO &amp; Founder at Cinchfin</h4>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="testimonial-item mt-4 mt-lg-0">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>I
										really like your work, the site is very nice and contains
										all information I need to show to my audience. Along with
										your professionalism, the quality of your services are
										remarkable.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<h3>Fidelle Banza</h3>
									<h4>CEO &amp; Founder at Fidelle Tech Support</h4>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="testimonial-item mt-4">
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										An amazing work, I came with a vision for my organization
										and you were able to come up with a work even better than
										expected.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
									<h3>Themba</h3>
									<h4>CEO at Lia-sa</h4>
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

export default Reviews;
