import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar color='light' sticky='top' expand='sm'>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav navbar className='flex-grow-1 justify-content-evenly'>
          <NavLink to='/Events'>Events</NavLink>

          <NavLink to='/Hotels'>Hotels</NavLink>

          <hr />

          {/* <UncontrolledDropdown size="small" nav inNavbar>
              <DropdownToggle nav caret color="primary" className="text-light">
                By Day
              </DropdownToggle>
              <DropdownMenu>
              
                <Link to="/11"><DropdownItem>Saturday, June 11</DropdownItem></Link>
                <Link to="/12"><DropdownItem>Sunday, June 12</DropdownItem></Link>
                <Link to="/13"><DropdownItem>Monday, June 13</DropdownItem></Link>
                <Link to="/14"><DropdownItem>Tuesday, June 14</DropdownItem></Link>
                <Link to="/15"><DropdownItem>Wednesday, June 15</DropdownItem></Link>
                <Link to="/16"><DropdownItem>Thursday, June 16</DropdownItem></Link>
                <Link to="/17"><DropdownItem>Friday, June 17</DropdownItem></Link>
                <Link to="/18"><DropdownItem>Saturday, June 18</DropdownItem></Link>
                <Link to="/19"><DropdownItem>Sunday, June 19</DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
