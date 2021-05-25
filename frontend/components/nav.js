import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Navi from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import styles from '.././styles/styles.module.css';

const Nav = ({ categories }) => {
	const[count, setCount] = useState(1);
	useEffect(() => { setCount(1);}, [count]);
  return (
<div>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

	<link rel="icon" type="image/png" href="../assets/img/favicon-32x32.png" />

	<title>Levity</title>
</head>
<body>
	  <div className={styles.topheading}>

		<Navbar fixed="top" expand="lg" variant="light" bg="light" className={styles.navbar}>
	  	    <Container className="justify-center-md-content">
	  	    <Navbar.Brand href="#" className={styles.navbarBrand,styles.fontBold}>
	  	        <Image className={styles.logo} src="./assets/img/logo.png" />
	  	        Levity</Navbar.Brand>
	  	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  	    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
		        <Navi>
            			{categories.map((category) => {
              			return (
	  				<Navi.Item>
                  				<Navi.Link href="/category/{category.id}">
                    				{category.name}
                  				</Navi.Link>
	  				</Navi.Item>
              				);
            				})}
	  			<Navi.Item>
		            	    <Navi.Link href="/blog" >Blog</Navi.Link>
	  			</Navi.Item>
	  			<Navi.Item>
		                    <Navi.Link href="/learnmore" >About</Navi.Link>
	  			</Navi.Item>
	  			<Navi.Item>
		                    <Navi.Link href="https://github.com/levitytech" ><i data-feather="github"></i></Navi.Link>
	  			</Navi.Item>
	  			<Navi.Item>
		                    <Button variant="primary" href="https://calendly.com/bazyl/">Free Consultation</Button>
	  			</Navi.Item>
		        </Navi>
	  	    </Navbar.Collapse>
	  	    </Container>
		</Navbar>
	  </div>

    </body>
</div>
  );
};

export default Nav;
