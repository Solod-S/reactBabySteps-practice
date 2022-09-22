import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event.jsx';
import css from 'components/EventBoard/EventBoard.module.css';

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(event => (
        <Event
          key={event.name}
          // делаем уникальное айди для каждой карточки товара
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          start={event.time.start}
          end={event.time.end}
          type={event.type}
        />
      ))}
    </div>
  );
};

EventBoard.prototypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    }),
  ),
  // arrayOf массив ( в скобках прям подробно расписываем что должно быть)
};
// Event - board;
