import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvnts from '../../upcoming-events.json';
import { Container } from './App.styled';
import { Title } from 'components/PageTitle/PageTitle.styled';
export const App = () => {
  return (
    <div>
      <Container>
        <PageTitle text="Annual Collaborative Conference" />

        <EventBoard events={upcomingEvnts} />
      </Container>
    </div>
  );
};
