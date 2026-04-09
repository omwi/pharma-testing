import { useRef, useState } from 'react';
import {
  IoGitCompareOutline,
  IoGridOutline,
  IoMenuOutline,
} from 'react-icons/io5';

import LoginButton from '@/features/auth/components/login-button/login-button';
import LogoutButton from '@/features/auth/components/logout-button/logout-button';
import { useAuth } from '@/features/auth/hooks/useAuth';

import Avatar from '../avatar/avatar';
import Container from '../container/container';
import IconContainer from '../icon-container/icon-container';
import IconNavLink from '../icon-nav-link/icon-nav-link';
import PopupMenu from '../popup-menu/popup-menu';
import * as styles from './header.module.css';

export default function Header() {
  const auth = useAuth();

  const avatarRef = useRef(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  function toggleUserMenu() {
    setIsUserMenuOpen((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.actions}>
          <IconContainer size={32} className={styles.menuButton}>
            <IoMenuOutline />
          </IconContainer>
        </div>
        <nav>
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
            ref={avatarRef}
            onClick={toggleUserMenu}
            className={styles.avatar}
            src={auth?.image}
            alt={auth ? `${auth.firstName} ${auth.lastName}` : ''}
          />
          <PopupMenu
            anchorRef={avatarRef}
            isOpen={isUserMenuOpen}
            toggle={toggleUserMenu}
          >
            {auth ? <LogoutButton /> : <LoginButton />}
          </PopupMenu>
        </div>
      </Container>
    </header>
  );
}
