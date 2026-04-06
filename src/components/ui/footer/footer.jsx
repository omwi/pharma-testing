import Container from '../container/container';
import * as styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <a
          href="https://www.flaticon.com/free-icons/user-account"
          title="user account icons"
        >
          Default user icons created by Luch Phou - Flaticon
        </a>
      </Container>
    </footer>
  );
}
