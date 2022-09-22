import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvnts from '../../upcoming-events.json';
export const App = () => {
  return (
    <div>
      <PageTitle text="Annual Collaborative Conference" />
      <EventBoard events={upcomingEvnts} />
    </div>
  );
};
