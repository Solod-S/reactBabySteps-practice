import React, { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.url !== this.props.url) {
  //     this.setState({ isVideoLoaded: false });
  //   }
  // }
  componentDidUpdate(pP, pS) {
    if (pP.url !== this.props.url) {
      console.log(`Url не равен`);
      this.setState({
        isVideoLoaded: false,
      });
    }
  }
  // проверяем прошлый пропс с нынешним и если они не равны то ставим isVideoLoaded: false(чтобы работал 'Загружаем видео...')
  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    // выбран url (this.props) + isVideoLoaded === false
    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {showLoader && <h2>Загружаем видео...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playerSize}
              height={playerSize}
              onReady={() => this.setState({ isVideoLoaded: true })}
              // когда видео загрузилось
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
