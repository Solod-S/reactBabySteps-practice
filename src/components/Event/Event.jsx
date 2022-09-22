import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
// испорт иконок из библиотеки

import { formatEventStart } from 'utils/formatEventStart';
// импорт утилиты по приобразованию даты 2022-02-17T14:30:00 ==> 17 February 2022, 14:30
import { formatEventDuration } from 'utils/formatEventDuration';
// импорт утилиты по подсчету разницы времени ("2022-02-17T14:30:00","2022-02-17T16:30:00") => 2h
import { iconSize } from '../../constants';
// есть index в constants в котором импортировано все
import { EventCard, EventTitle, EventInfo, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, start, end, type }) => {
  // const { name, location, speaker, start, end } = events;
  const formatedStart = formatEventStart(start);
  const formatdDuration = formatEventDuration(start, end);
  return (
    <EventCard>
      <EventTitle>{name}</EventTitle>
      <EventInfo>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt />

        {formatedStart}
      </EventInfo>
      <EventInfo>
        <FaClock />
        {formatdDuration}
      </EventInfo>
      <Chip eventType={type}>{type}</Chip>
      {/* передаем пропсами значение тайпа чтобы потом внутри Event.styled функцией задать правильную стилизацию*/}
    </EventCard>
  );
};

Event.propTypes = {
  // events: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
