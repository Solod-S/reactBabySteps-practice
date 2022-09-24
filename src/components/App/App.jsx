import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import { Button, ButtonComp } from 'components/Button/Button';
import upcomingEvnts from '../../upcoming-events.json';
import { Container } from './App.styled';
import { IoAirplaneOutline, IoAccessibility, IoBaseballSharp } from 'react-icons/io5';
import { Box } from 'components/Box/Box';
export const App = () => {
  return (
    <Box
      bg="white"
      color="primaryText"
      px={4}
      display="flex"
      justifyItems="center"
      justifyContent="center"
      position="relative"
      as="main"
      // делаем мейном
    >
      <div>
        <Container>
          <PageTitle text="Annual Collaborative Conference" />

          <EventBoard events={upcomingEvnts} />
          <Box
            py={4}
            bg="white"
            color="primaryText"
            px={4}
            display="flex"
            justifyItems="center"
            justifyContent="center"
            position="relative"
            as="div"
            // делаем дивом
          >
            <ButtonComp icon={<IoAirplaneOutline />}>Search</ButtonComp>
            <ButtonComp icon={<IoAccessibility />}>Cancel</ButtonComp>
            <ButtonComp icon={<IoBaseballSharp />} type="submit" disabled>
              LogIn
            </ButtonComp>
            <Button icon={IoAirplaneOutline}>Search</Button>
            <Button icon={IoAccessibility}>Cancel</Button>
            <Button icon={IoBaseballSharp} type="submit" disabled>
              LogIn
            </Button>
          </Box>
        </Container>
      </div>
    </Box>
  );
};
