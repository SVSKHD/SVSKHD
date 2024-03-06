import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const SvskhdNav = () => {
    const [bgcolor, setBgColor] = useState("bg-body-transparent")
    return (
        <Container>
            <Navbar onMouseEnter={() => setBgColor("bg-body-tertiary")} onMouseLeave={() => setBgColor("bg-body-transparent")} expand="lg" className={`shadow-lg p-2 rounded-4 mt-2 ${bgcolor}`}>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Navbar>
        </Container>
    );
}

export default SvskhdNav;