import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	const navActive = () => {
		setActived(!actived);
	};

	return (
		<div>
			<div className="navbar">
				<button className="btn-menu" onClick={showSidebar}>
					<div className="line satu"></div>
					<div className="line dua"></div>
					<div className="line tiga"></div>
				</button>
			</div>
			<div className={sidebar ? 'bar-menu active' : 'bar-menu'}>
				<ul className="sidebar-items">
					<li>
						<Link to="#" className="close-sidebar">
							<AiOutlineClose onClick={showSidebar} />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li className={item.cName}>
								<Link key={index} to={item.path} className="nav-text">
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
