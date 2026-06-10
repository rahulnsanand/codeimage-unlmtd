import styles from '~/components/Footer/Footer.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.content}>
        <div class={styles.grid}>
          <div class={styles.info}>
            <span class={styles.copyright}>© 2022 Riccardo Perra.</span>
            <span class={styles.description}>
              Made with{' '}
              <a class={styles.link} href={'https://github.com/solidjs/solid'}>
                SolidJS
              </a>{' '}
              ❤️
            </span>
          </div>

          <div class={styles.linkRow}>
            <a
              class={`${styles.link} ${styles.onlyDesktopLink}`}
              href={
                'https://github.com/rahulnsanand/codeimage-unlmtd'
              }
              target={'_blank'}
              rel={'noopener'}
              title="CodeImage UNLMTD"
            >
              CodeImage UNLMTD
            </a>
            <a
              class={styles.link}
              href={'https://github.com/rahulnsanand/codeimage-unlmtd'}
              title="GitHub repository"
            >
              GitHub
            </a>
            <a
              class={styles.link}
              href={'https://github.com/rahulnsanand/codeimage-unlmtd/issues'}
              title="Issues"
            >
              Issues & Feedback
            </a>
            <a
              class={styles.link}
              href={'https://github.com/rahulnsanand/codeimage-unlmtd/releases'}
              title="Releases"
            >
              Releases
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
