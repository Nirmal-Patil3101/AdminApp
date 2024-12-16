import React, { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import '../CSS/MyOffCanvas.css';

const MyOffCanvas = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

  return (
    <div className="componant">
      <Navbar className="Navbar-con">
        <Navbar.Brand className="brand" onClick={handleShow}>
          <IoMenuSharp/>
        </Navbar.Brand>
      </Navbar>

      {/* Offcanvas with placement on the left (start) */}
      <Offcanvas show={showCanvas} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Ensure vertical stacking with flex-column */}
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>
              <FaHome/> Home
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/menu" onClick={handleClose}>
              <IoMenu/> Menu
            </Nav.Link> */}
            <Nav.Link as={Link} to="/review" onClick={handleClose}>
             <MdRateReview/> Review
            </Nav.Link>
            <Nav.Link as={Link} to="/order" onClick={handleClose}>
             <BiSolidDish/> Order
            </Nav.Link>
            <Nav.Link as={Link} to="/alldish" onClick={handleClose}>
             <BiSolidDish/> All Dish
            </Nav.Link>
            <Nav.Link as={Link} to="/adddish" onClick={handleClose}>
              Add Dish
            </Nav.Link>
            <Nav.Link as={Link} to="/customers" onClick={handleClose}>
              Customers
            </Nav.Link>
          </Nav>
    
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MyOffCanvas;
