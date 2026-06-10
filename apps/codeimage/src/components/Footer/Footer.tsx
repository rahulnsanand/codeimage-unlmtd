import {Box, Link} from '@codeimage/ui';
import {link} from './Footer.css';
import * as styles from './Footer.css';

export const Footer = () => {
  return (
    <div class={styles.wrapper}>
      <Box display={'inlineFlex'} justifyContent={'flexEnd'} padding={1}>
        <Box>
          <Link
            class={link}
            href="https://github.com/rahulnsanand/codeimage-unlmtd"
            target="_blank"
            as={'a'}
            size="xs"
          >
            GitHub Repository
          </Link>
        </Box>
      </Box>
    </div>
  );
};
