import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Home extends Component {
  state = {  }
  render() {
    return (
      <div>
          <Link to='/con/0'>开始答题</Link>
      </div>
    );
  }
}

export default Home;