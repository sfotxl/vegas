import { Navbar, Nav } from 'reactstrap';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

const Header = () => {
  //   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar color='light' expand='sm'>
        {/* <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar> */}
        <Nav
          navbar
          className='flex-grow-1 justify-content-evenly flex-row text-align-center'
        >
          <div>WE'RE GOING TO VEGAS Y'ALL</div>
          <a href='#1'>Friday</a>
          <a href='#5'>Saturday</a>
          <a href='#9'>Sunday</a>

          {/* <NavLink to='/'>Hotels</NavLink> */}

          {/* <hr /> */}

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
        {/* </Collapse> */}
      </Navbar>
      <div className='spotify'>
        <iframe
          title='spotify'
          src='https://open.spotify.com/embed/playlist/2m64Pkzd4XlxnpIs5ygOlr?utm_source=generator&theme=0'
          width='380'
          height='80'
          frameBorder='0'
          allowfullscreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>
      <div className='flex-center' height='100px'></div>
    </>
  );
};

export default Header;
