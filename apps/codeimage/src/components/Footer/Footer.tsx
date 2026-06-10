import {Box, Link} from '@codeimage/ui';

import {createControlledDialog} from '@core/hooks/createControlledDialog';
import {Changelog} from '../Changelog/Changelog';
import {link} from './Footer.css';
import * as styles from './Footer.css';

export const Footer = () => {
  const openDialog = createControlledDialog();

  return (
    <div class={styles.wrapper}>
      <Box display={'inlineFlex'} justifyContent={'flexEnd'} padding={1}>
        <Box>
          <Link
            class={link}
            as={'a'}
            size="xs"
            onClick={() => openDialog(Changelog, {latest: false})}
          >
            🎉
            <Box as={'span'} marginLeft={1}>
              What's new
            </Box>
          </Link>
        </Box>
      </Box>
    </div>
  );
};
