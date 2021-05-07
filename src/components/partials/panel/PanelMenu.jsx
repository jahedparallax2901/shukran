import React, { Component } from "react";
// import { connect } from 'react-redux';

import { Menu } from "antd";
import { processGetRequest } from "../../../services/baseServices";
import { Link } from "react-router-dom";
import { menuItems } from "../../../temp-data/homeData";

// const { SubMenu } = Menu;

class PanelMenu extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    menuItems: [],
  };

  componentDidMount() {
   this.setState({menuItems});
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
        className="menu--mobile-2"
      >
        {this.state?.menuItems?.length > 0 ? (
          <>
            {this.state?.menuItems?.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <Link to={item.url}>
                    <a>
                      {item?.icon && <i className={item.icon}></i>}
                      {item.name}
                    </a>
                  </Link>
                </Menu.Item>
              );
            })}
          </>
        ) : (
           <p>No Items exist</p>
        )}
      </Menu>
    );
  }
}

// const mapStateToProps = (state) => {
//   return state.setting;
// };

// export default connect(mapStateToProps)(PanelMenu);
export default PanelMenu;
