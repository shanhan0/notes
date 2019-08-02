import React, { Component } from "react";
class List extends Component {
  state = {};
  render() {
    const {
      list,
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <div>
        <h3>{list[id].title}</h3>
        {list[id].list.map(item => (
          <div key={item.id}>{item.text}</div>
        ))}
      </div>
    );
  }
}

export default List;
