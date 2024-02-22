import Resume from '../assets/cv.pdf';
import { Button } from './styles/Cv.styled';

const CV = () => {
  return (
    <div>
      <Button
      href={Resume}
      download="CV_Olena_Pedko_Frontend_developer"
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.target.blur()}
      aria-label="CV"
      >
      Download CV
      </Button>
    </div>
  )
}

export default CV;
