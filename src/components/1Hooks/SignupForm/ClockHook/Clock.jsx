import React, { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function ClockHook() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      //   console.log('Это интервал каждые 1000ms ' + new Date());
      setTime(new Date());
    }, 1000);
    return () => {
      console.log(`componentDidUnmount`);
      stop();
      // чистим при интервал если допустим переходим на другую вкладку (запускаеться каждый раз перед запуском сл useEffect, так как зависимостей нет то ретерн будет запущен как было описано ранее)
    };
  }, []);
  // ставим в зависимость пустой массив (чтобы оно зарандерилось только один раз и начало считать, а при каждом новом обновлении не делала новый сет тайм аут)
  const stop = () => {
    clearInterval(intervalId.current);
  };
  //   console.log(intervalId)
  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
