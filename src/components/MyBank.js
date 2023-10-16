import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const MyBank = () => {
	return (
		<>
			<main id="main">
				<section className="portfolio-details">
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-8">
								<Swiper
									loop={true}
									pagination={{
										type: "bullets",
										clickable: true,
									}}
									modules={[Autoplay, Pagination]}
									autoplay={{ delay: 3000, disableOnInteraction: false }}
									className="portfolio-details-slider"
								>
									<div className="swiper-wrapper align-items-center">
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank.png" alt="" />
										</SwiperSlide>

										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank2.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank3.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank4.png" alt="" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="assets/img/portfolio/my-bank5.png" alt="" />
										</SwiperSlide>
									</div>
								</Swiper>
							</div>

							<div className="col-lg-4">
								<div className="portfolio-info">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Stack</strong>:JavaScript, Next.JS, Bootstrap,
											Node.js, MongoDb, SCSS
										</li>

										<li>
											<strong>Project URL</strong>:{" "}
											<a href="https://my-bank-six.vercel.app/">
												www.my-bank-six.vercel.app
											</a>
										</li>
										<li>
											<strong>Github</strong>:{" "}
											<a href="https://github.com/Druw-Ilg/my-bank">
												www.github.com/Druw-Ilg/my-bank
											</a>
										</li>
									</ul>
								</div>
								<div className="portfolio-description">
									<h2>Description</h2>
									<p>
										My-Bank is an online banking web app using all CRUD
										functions. The app allows users to create an account and
										perfrom several operations. At registration it automatically
										assigns a "Check account" to the user, he/she can directly
										make a deposit, create a business or saving account. The
										user can also make a transfer to one of his/her other
										account and make a payment to another user account on the
										app.
									</p>
								</div>
								<Link to="/work">
									<i class="bi bi-arrow-left"></i>Back
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default MyBank;
