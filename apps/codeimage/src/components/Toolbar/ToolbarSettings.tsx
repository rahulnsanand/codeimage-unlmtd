import {getAuth0State} from '@codeimage/store/auth/auth0';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  IconButton,
} from '@codeui/kit';
import {createControlledDialog} from '@core/hooks/createControlledDialog';
import {useNavigate} from '@solidjs/router';
import {Show} from 'solid-js';
import {MenuAlt2Icon} from '../Icons/DotVertical';
import {ExternalLinkIcon} from '../Icons/ExternalLink';
import {SettingsDialog} from './SettingsDialog';

export function ToolbarSettingsButton() {
  const navigate = useNavigate();
  const openDialog = createControlledDialog();
  const {signOut, loggedIn} = getAuth0State();

  return (
    <Show when={loggedIn()}>
      <DropdownMenu>
        <DropdownMenuTrigger
          as={IconButton}
          pill={true}
          size={'xs'}
          theme={'secondary'}
          aria-label={'Menu'}
        >
          <MenuAlt2Icon size={'sm'} />
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent>

            <Show when={loggedIn()}>
              <DropdownMenuItem
                onClick={() => signOut().then(() => navigate('/'))}
              >
                Logout
              </DropdownMenuItem>
            </Show>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </Show>
  );
}
