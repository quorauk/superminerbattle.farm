import React from 'react';
import { Navbar, NavbarBurger, NavbarBrand, NavbarItem, NavbarMenu, NavbarEnd } from 'bloomer';

class Header extends React.Component {
  state = { isActive: false, isDropdownOpen: false };

  onClickNav = () => {
      this.setState((state) => ({ isActive: !state.isActive }));
  }

  onClickDropdown = () => {
      this.setState((state) => ({ isDropdownOpen: !state.isDropdownOpen }));
  }

  render() {
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem href="/">
            Super Miner Battle Farm
          </NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav}></NavbarBurger>
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarEnd>
            <NavbarItem href="https://www.facebook.com/pg/SuperMinerBattleFarm/events/">
              Events
            </NavbarItem>
            <NavbarItem href="https://discord.gg/ud6cAnU">
               Discord
            </NavbarItem>
            <NavbarItem href="https://smbf.challonge.com/tournaments">
              Tournaments
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header
