import {
  IoGitCompareOutline,
  IoGridOutline,
  IoHomeOutline,
  IoMenu,
  IoMenuOutline,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/auth/auth-slice';

import Avatar from '../avatar';
import Container from '../container';
import IconContainer from '../icon-container';
import IconNavLink from '../icon-nav-link';
import * as styles from './header.module.css';

export default function Header() {
  const user = useSelector(selectCurrentUser);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.actions}>
          <IconContainer size={32} className={styles.menuButton}>
            <IoMenuOutline />
          </IconContainer>
        </div>
        <nav>
          <IconNavLink text="Home" to="/" icon={<IoHomeOutline />} />
          <IconNavLink
            text="Dashboard"
            to="/dashboard"
            icon={<IoGridOutline />}
          />
          <IconNavLink
            text="Processes"
            to="/processes"
            icon={<IoGitCompareOutline />}
          />
        </nav>
        <div className={styles.actions}>
          <Avatar
            src={user?.image}
            alt={user ? `${user.firstName} ${user.lastName}` : ''}
          />
        </div>
      </Container>
    </header>
  );
}
