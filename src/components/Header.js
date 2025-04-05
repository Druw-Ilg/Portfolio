import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const lngs = [
  {
    value: "en",
    label: "English",
    icon: <iconify-icon icon="flagpack:gb-ukm"></iconify-icon>,
  },
  {
    value: "fr",
    label: "Français",
    icon: <iconify-icon icon="flag:fr-4x3"></iconify-icon>,
  },
];

const Header = ({ page }) => {
  const [openMenu, setOpenMenu] = useState();
  const { t, i18n } = useTranslation();

  return (
    <header id="header" className="sticky-top d-flex align-items-center">
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
                {t("Home")}
              </Link>
            </li>

            <li>
              <Link to="/work" className={`${page === "work" && "active"}`}>
                {t("My Work")}
              </Link>
            </li>

            <li>
              <Link
                to="/reviews"
                className={`${page === "reviews" && "active"}`}
              >
                {t("Testimonials")}
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
            <li style={!openMenu ? { marginLeft: "17px" } : {}}>
              {/* translator switcher */}
              <Select
                options={lngs}
                isSearchable={false}
                defaultValue={lngs[0]}
                onChange={(lng) => i18n.changeLanguage(lng.value)}
                getOptionLabel={(lng) => (
                  <div>
                    <span>{lng.label} </span>
                    <span>{lng.icon}</span>
                  </div>
                )}
                getOptionValue={(lng) => lng.value}
              />
              {/* <select
								name="languages"
								onChange={(e) => i18n.changeLanguage(e.target.value)}
							>
								<option value="English">English</option>
								<option value="french">
									Français{" "}
									<img
										src="assets/img/france.png"
										alt=""
										className="img-fluid"
									/>
								</option>
								{Object.keys(lngs).map((lng) => (
									<option value={lng} key={lng.toString()}>
										{lngs[lng].nativeLanguage}
									</option>
								))}
							</select> */}
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
