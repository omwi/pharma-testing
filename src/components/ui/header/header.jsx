import clsx from 'clsx';
import { useRef, useState } from 'react';
import {
  IoGitCompareOutline,
  IoGridOutline,
  IoMenuOutline,
} from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';

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

  const isSmallScreen = useMediaQuery({ query: '(width < 768px)' });

  const avatarRef = useRef(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  function toggleUserMenu() {
    setIsUserMenuOpen((prev) => !prev);
  }

  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu(e) {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.actions}>
          <div className={clsx({ [styles.hidden]: !isSmallScreen })}>
            <span
              ref={menuRef}
              onClick={toggleMenu}
              className={styles.menuButtonWrapper}
            >
              <IconContainer size={32} className={styles.menuButton}>
                <IoMenuOutline />
              </IconContainer>
            </span>
            <PopupMenu
              anchorRef={menuRef}
              isOpen={isMenuOpen}
              toggle={toggleMenu}
              className={styles.popupRight}
            >
              <div className={styles.menuPopupContainer}>
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
              </div>
            </PopupMenu>
          </div>
        </div>
        <nav className={clsx(styles.nav, { [styles.hidden]: isSmallScreen })}>
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
            className={clsx({ [styles.popupLeft]: isSmallScreen })}
          >
            {auth ? <LogoutButton /> : <LoginButton />}
          </PopupMenu>
        </div>
      </Container>
    </header>
  );
}
