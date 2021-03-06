import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

// import './header.styles.scss'; // swaped with styled-components;
import {HeaderContainer, LogoContainer, OptoinsContainer, OptionDiv, OptionLink} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo' />
    </LogoContainer>
    <OptoinsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      { 
        currentUser ?
        (<OptionDiv onClick={() => auth.signOut()} >SIGN OUT</OptionDiv>)
        :
        (<OptionLink to='/signin'>SIGN IN</OptionLink>)
      }
      <CartIcon />
    </OptoinsContainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);