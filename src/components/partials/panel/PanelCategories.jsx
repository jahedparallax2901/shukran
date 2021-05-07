import React, { Component } from "react";
import { Menu } from "antd";
import { processGetRequest } from "../../../services/baseServices";
import { Link } from "react-router-dom";
// import categories from '../../../public/static/data/static-categories.json';

// const { SubMenu } = Menu;

class PanelCategories extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    categories: [],
  };

  componentDidMount() {
    processGetRequest("/generic-info", { info_type: 1 })
      .then((res) => {
        this.setState({
          categories: res.categories,
        });
      })
      .catch((err) => console.log(err));
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
      >
        {this.state?.categories?.length > 0 ? (
          <>
            {this.state?.categories?.map((category) => (
              <Menu.Item key={category.id}>
                <Link to={`/search?category_id=${category.id}`}>
                  <a>
                    {category?.icon && <i className={category.icon}></i>}
                    {category.name}
                  </a>
                </Link>
              </Menu.Item>
            ))}
          </>
        ) : (
          <p>No category exist</p>
        )}
      </Menu>
    );
  }
}

export default PanelCategories;
