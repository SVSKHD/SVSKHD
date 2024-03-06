import React, { useState, useEffect , useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaSun, FaMoon } from "react-icons/fa";
import useSound from 'use-sound';

const SvskhdNav = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [play] = useSound("../../assests/audio/switch.mp3")

  const toggleTheme = () => {
    setIsChecked(!isChecked);
    play()
  };
  return (
    <div>
      <Container>
        <Navbar expand="lg" className={`bg-white shadow-lg p-2 rounded-4 ${isChecked ? 'dark-theme' : ''}`}>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <button className='btn btn-base' onClick={toggleTheme}>
            {isChecked ? <FaSun /> : <FaMoon />}
          </button>
        </Navbar>
      </Container>
    </div>
  );
}

export default SvskhdNav;
