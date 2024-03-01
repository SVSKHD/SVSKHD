import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const SvskhdNav = () => {
    const [bgcolor, setBgColor] = useState("bg-body-transparent")
    return (
        <Navbar onMouseEnter={() => setBgColor("bg-body-tertiary")} onMouseLeave={() => setBgColor("bg-body-transparent")} expand="lg" className={`${bgcolor}`}>
            <Container fluid>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default SvskhdNav;