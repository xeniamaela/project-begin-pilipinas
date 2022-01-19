import React, { useState } from "react";
import mainLogo from "../../assests/images/logo/pbpLogo.png";
import whiteLogo from "../../assests/images/logo/WhiteLogo.png";

export default function Navbar() {
	const [nav, setNav] = useState(false);
	const [logo, setLogo] = useState(false);
	const [collapseBtn, setCollapseBtn] = useState("bi bi-list nav__icon");

	const changeBackground = () => {
		console.log(window.scrollY);
		if (window.scrollY >= 80) {
			setNav(true);
		} else {
			setNav(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	const changeLogo = () => {
		if (window.scrollY >= 80) {
			setLogo(true);
		} else {
			setLogo(false);
		}
	};

	window.addEventListener("scroll", changeLogo);

	const changeIcon = () => {
		if (collapseBtn === "bi bi-list nav__icon") {
			setCollapseBtn("bi bi-x-lg nav__icon");
		} else {
			setCollapseBtn("bi bi-list nav__icon");
		}
	};

	return (
		<>
			<nav className={nav ? "nav active" : "nav"}>
				<a href="/" className="nav__brand">
					<img src={logo ? whiteLogo : mainLogo} className="nav__logo" />
				</a>
				<input type="checkbox" id="check" className="nav__btn" onClick={changeIcon} />
				<label htmlFor="check" className="nav__icon">
					<i className={collapseBtn}></i>
				</label>
				<ul className="nav__list">
					<li className="nav__item">
						<a href="/" className="nav__link">
							Home
							{/* <i className="bi bi-house-door-fill"></i> */}
						</a>
					</li>
					<li className="nav__item">
						<a href="/" className="nav__link">
							About
							{/* <i className="bi bi-info-circle-fill"></i> */}
						</a>
					</li>
					<li className="nav__item">
						<a href="/" className="nav__link">
							Projects
							{/* <i className="bi bi-file-earmark-code-fill"></i> */}
						</a>
					</li>
					<li className="nav__item">
						<a href="/" className="nav__link">
							Contact
							{/* <i className="bi bi-envelope-fill"></i> */}
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
