import React from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication';
const LS_KEY = 'reader_item_index';
class Reader extends React.Component {
  state = {
    index: 0,
  };
  // onNext = () => {
  //   if (this.state.index < this.props.items.length - 1) {
  //     this.setState(prevState => ({ index: prevState.index + 1 }));
  //   }
  // };
  // onPrev = () => {
  //   if (this.state.index > 0) {
  //     this.setState(prevState => ({ index: prevState.index - 1 }));
  //   }
  // };
  changeValue = value => {
    this.setState(prevState => ({ index: prevState.index + value }));
  };

  componentDidUpdate(prevState, prevProps) {
    if (!prevState.index !== this.state.index) {
      // console.log('UPDATE');
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }
  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    const savedIndex = Number(savedState);
    if (savedState) {
      this.setState({ index: savedIndex });
    }
  }
  render() {
    const { index } = this.state;
    const { items } = this.props;
    const currentItem = items[index];
    const totalItems = items.length;

    return (
      <div>
        {/* <!-- Разметка компонента <Controls> --> */}
        <Controls
          index={index}
          totalItems={totalItems}
          onPrevClick={() => this.changeValue(-1)}
          onNextClick={() => this.changeValue(+1)}
        />
        {/* <section>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => this.changeValue(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={index + 1 === totalItems}
            onClick={() => this.changeValue(+1)}
          >
            Вперед
          </button>
        </section> */}
        {/* <!-- Разметка компонента <Progress> --> */}
        <Progress current={index + 1} totalItems={totalItems} />
        {/* <!-- Разметка компонента <Publication> --> */}
        <Publication title={currentItem.title} text={currentItem.text} />
        {/* <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article> */}
      </div>
    );
  }
}
export default Reader;
