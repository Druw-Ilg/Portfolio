import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ page }) => {
	const [openMenu, setOpenMenu] = useState();

	return (
		<header id="header" className="fixed-top d-flex align-items-center">
			<div className="container d-flex align-items-center">
				<Link to="/" className="logo me-auto">
					<img
						src="assets/img/logo/logo-no-bg1-edited.png"
						alt=""
						className="img-fluid"
					/>
				</Link>

				<nav id="navbar" className={`navbar ${openMenu && "navbar-mobile"}`}>
					<ul>
						<li>
							<Link to="/" className={`${page === "home" && "active"}`}>
								Home
							</Link>
						</li>

						<li>
							<Link
								to="/portfolio"
								className={`${page === "portfolio" && "active"}`}
							>
								Portfolio
							</Link>
						</li>

						<li>
							<Link
								to="/reviews"
								className={`${page === "reviews" && "active"}`}
							>
								Testimonials
							</Link>
						</li>

						<li>
							<Link
								to="/contact"
								className={`${page === "contact" && "active"}`}
							>
								Contact
							</Link>
						</li>
					</ul>
					<i
						className={`bi bi-list mobile-nav-toggle ${
							openMenu && "bi-list bi-x"
						}`}
						onClick={() => {
							setOpenMenu(!openMenu);
						}}
					></i>
				</nav>
			</div>
		</header>
	);
};

Header.propTypes = {
	page: PropTypes.string.isRequired,
};
export default Header;
