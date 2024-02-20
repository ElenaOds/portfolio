import { useState, useEffect } from "react";
import { StyledArrow, Wrapper } from './styles/ArrowUp';
import scrollToTop from '../helpers/ScrollToTop';

const ButtonUp = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
   
  return (
    <Wrapper>
        {showTopBtn && (
            <StyledArrow
                onClick={scrollToTop}
            />
        )}
    </Wrapper>
  )
}

export default ButtonUp;
