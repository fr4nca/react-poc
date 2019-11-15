import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as UserActions from "../../../store/modules/user/actions";

import { Navbar, Logo, Container, User } from "./styles";

class Header extends React.Component {
  handleClearName = () => {
    const { clearUser }: any = this.props;
    clearUser();
  };

  render() {
    const { user }: any = this.props;

    return (
      <Navbar>
        <Container>
          <Logo />
          <User href="#!" onClick={this.handleClearName}>
            {user.user && (
              <p style={{ fontSize: 15 + "px", marginRight: 10 + "px" }}>
                Click in the name and you'll clear the redux user state. ->
              </p>
            )}
            {user.user}
          </User>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ user }: any) => ({ user });
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
