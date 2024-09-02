import { FaDownload, FaEye } from 'react-icons/fa';
import { Button } from '../Button/Button';
import {
  ButtonsContainer,
  Container,
  ImageLogo,
  LogoContainer,
} from './styles';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <ImageLogo
          src="/images/geogis-inline.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </LogoContainer>
      <ButtonsContainer>
        <Button>
          Preview
          <FaEye size={16} />
        </Button>
        <Button>
          Download
          <FaDownload size={16} />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
