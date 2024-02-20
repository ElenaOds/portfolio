import Resume from '../assets/cv.pdf';
import { Button } from './styles/Button.styled';

const CV = () => {
  return (
    <div>
<Button
  href={Resume}
  download="CV_Olena_Pedko_Frontend_developer"
  target="_blank"
  rel="noreferrer"
>
Download CV
</Button>
    </div>
  )
}

export default CV;
