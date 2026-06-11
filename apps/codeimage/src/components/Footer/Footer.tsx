import {Box, Link} from '@codeimage/ui';
import {createControlledDialog} from '@core/hooks/createControlledDialog';
import {PrivacyReminder} from '../PrivacyReminder/PrivacyReminder';
import {link} from './Footer.css';
import * as styles from './Footer.css';

export const Footer = () => {
  const openDialog = createControlledDialog();

  return (
    <div class={styles.wrapper}>
      <Box
        display={'inlineFlex'}
        justifyContent={'flexEnd'}
        padding={1}
        style={{gap: '16px', 'align-items': 'center'}}
      >
        <Box>
          <Link
            class={link}
            as={'button'}
            onClick={() => openDialog(PrivacyReminder, {})}
            size="xs"
            style={{
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              padding: 0,
              color: '#f55d00',
              'font-weight': 600,
            }}
          >
            What's New
          </Link>
        </Box>
        <Box>
          <Link
            class={link}
            href="https://github.com/lyfie-org/codeimage-unlmtd"
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
