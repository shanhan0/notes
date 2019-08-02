import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import List from "../List";
import End from "../End";
class Cont extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          title: "过年吃啥",
          name: "fu",
          list: [
            {
              id: 1,
              text: "汤圆"
            },
            {
              id: 2,
              text: "jiaozi"
            },
            {
              id: 3,
              text: "niangao"
            }
          ]
        },
        {
          id: 2,
          title: "过年喝啥",
          name: "lu",
          list: [
            {
              id: 1,
              text: "白酒"
            },
            {
              id: 2,
              text: "啤酒"
            },
            {
              id: 3,
              text: "黄酒"
            }
          ]
        },
        {
          id: 3,
          title: "过年去哪",
          name: "cai",
          list: [
            {
              id: 1,
              text: "拜年"
            },
            {
              id: 2,
              text: "聚餐"
            },
            {
              id: 3,
              text: "玩"
            }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.list.map((item, index) => (
          <Fragment key={item.id}>
            <Link to={`/con/${index}`}>{item.name}</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Fragment>
        ))}
        <Link to="/con/end">end</Link>
        <br />
        <Switch>
          <Route
            path="/con/end"
            render={props => <End {...this.state} {...props} />}
          />
          <Route
            path="/con/:id"
            render={props => <List {...this.state} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Cont;
