import React, { useState } from "react"
//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
import { Link, useLocation } from 'react-router-dom'
import { Nav } from "react-bootstrap"

import { routes } from "../routes"

export default function Sidebar() {

  /* REVISE OPTIONS HERE
   SOME PROPS AND FUNCS are IRRELEVANT as well as unused */

  const location = useLocation();
  const { pathname } = location; 
  const [show, setShow] = useState(false);

    const NavItem = (props) => {
        const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
        const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
        const navItemClassName = link === pathname ? "active" : "";
        const linkProps = external ? { href: link } : { as: Link, to: link };
    
        return (
          <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
            <Nav.Link {...linkProps} target={target} className={classNames}>
              <span>
                <span className="sidebar-text">{title}</span>
              </span>
            </Nav.Link>
          </Nav.Item>
        );
      };

  return (
    <Nav onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
      {/* Side bar menu for Navigation */}
      {/* CHECK CSS PROPERTIES */}
      <NavItem title="Dashboard" link={ routes.Dashboard.path } />
      <NavItem title="Logout" link={""} />
    </Nav>
  )
};
