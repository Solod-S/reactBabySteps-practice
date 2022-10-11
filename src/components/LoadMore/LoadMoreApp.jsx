import React from 'react';

export class LoadMore extends React.Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      console.log(`Fetch Data`);
    }
  }
  nandleSubmit = event => {
    event.preventDefault();

    // console.log(event.target.elements.query.value);
    const queryFromSubmit = event.target.elements.query.value;
    this.setState({
      page: 1,
      query: queryFromSubmit,
      items: [],
    });
    event.target.reset();
  };
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.nandleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>
        <button type="button" onClick={this.onLoadMore}>
          Load more
        </button>
      </div>
    );
  }
}
