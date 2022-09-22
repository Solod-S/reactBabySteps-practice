import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
// испорт иконок из библиотеки
import css from 'components/Event/Event.module.css';
// импорт css  стилей
import { formatEventStart } from 'utils/formatEventStart';
// импорт утилиты по приобразованию даты 2022-02-17T14:30:00 ==> 17 February 2022, 14:30
import { formatEventDuration } from 'utils/formatEventDuration';
// импорт утилиты по подсчету разницы времени ("2022-02-17T14:30:00","2022-02-17T16:30:00") => 2h
import { iconSize } from '../../constants';
// есть index в constants в котором импортировано все

export const Event = ({ name, location, speaker, start, end, type }) => {
  // const { name, location, speaker, start, end } = events;
  const formatedStart = formatEventStart(start);
  const formatdDuration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />

        {formatedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        {formatdDuration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
      {/* в className  передаем шаблонными строками значения .chip или в зависимости от входящего объека .vip .free.. */}
    </div>
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
