import React, { useState }  from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  import Logo from './../../assets/images/logo.png';

const HeaderNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);




    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <div className="d-flex">
                        <img src={Logo} alt='logo' width={150} />
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                <Nav navbar style={{fontSize:'25px'}}>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/jadwal">Jadwal</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/*">Bayar</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/*">Profil</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderNavBar



