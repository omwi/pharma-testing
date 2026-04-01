import { NavLink } from 'react-router';

import IconContainer from '../icon-container';
import * as styles from './icon-nav-link.module.css';

export default function IconNavLink({ icon, text, to }) {
  return (
    <NavLink className={styles.navLink} to={to}>
      <IconContainer>{icon}</IconContainer>
      <span>{text}</span>
    </NavLink>
  );
}
