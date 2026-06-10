import {getAuth0State} from '@codeimage/store/auth/auth0';
import {getRootEditorStore} from '@codeimage/store/editor';
import {getEditorSyncAdapter} from '@codeimage/store/editor/createEditorSync';
import {getThemeStore} from '@codeimage/store/theme/theme.store';
import {backgroundColorVar, Box, colorVar, HStack} from '@codeimage/ui';
import {buttonStyles, Link, IconButton} from '@codeui/kit';
import {createControlledDialog} from '@core/hooks/createControlledDialog';
import {useModality} from '@core/hooks/isMobile';
import {A as LocalLink} from '@solidjs/router';
import {assignInlineVars} from '@vanilla-extract/dynamic';
import type {VoidProps} from 'solid-js';
import {createMemo, Show} from 'solid-js';
import {CodeImageLogoV2} from '../Icons/CodeImageLogoV2';
import {CollectionIcon} from '../Icons/Collection';
import {sidebarLogo} from '../Scaffold/Sidebar/Sidebar.css';

import {ExportButton} from './ExportButton';
import {ShareButton} from './ShareButton';
import * as styles from './Toolbar.css';
import {SettingsIcon} from '../Icons/SettingsIcon';
import {GithubIcon} from '../Icons/GithubIcon';
import {SettingsDialog} from './SettingsDialog';
import {ToolbarSettingsButton} from './ToolbarSettings';
import {ToolbarSnippetName} from './ToolbarSnippetName';

interface ToolbarProps {
  canvasRef: HTMLElement | undefined;
}

export function Toolbar(props: VoidProps<ToolbarProps>) {
  const modality = useModality();
  const editor = getRootEditorStore();
  const {themeArray: themes} = getThemeStore();
  const loggedIn = () => getAuth0State().loggedIn();
  const isRemote = () => !!getEditorSyncAdapter()?.snippetId();
  const openDialog = createControlledDialog();

  const themeConfiguration = createMemo(
    () =>
      themes().find(
        theme => theme()?.id === editor.state.options.themeId,
      )?.() ?? themes()[0]()!,
  );

  function SnippetNameBox() {
    return (
      <div class={styles.toolbarSnippetBox}>
        <ToolbarSnippetName />
      </div>
    );
  }

  return (
    <div class={styles.toolbar}>
      <div class={styles.wrapper}>
        <ToolbarSettingsButton />
        <Box display={'flex'} alignItems={'center'} marginLeft={5}>
          <div class={sidebarLogo}>
            <CodeImageLogoV2 height={26} />
          </div>
          <Show when={loggedIn() && modality === 'full'}>
            <Box marginLeft={16}>
              <Link
                as={LocalLink}
                href={'/dashboard'}
                class={buttonStyles.button({
                  theme: 'secondary',
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                <CollectionIcon />
                Dashboard
              </Link>
            </Box>
          </Show>
        </Box>

        <Show when={modality === 'full' && isRemote()} keyed={false}>
          <SnippetNameBox />
        </Show>

        <Box class={styles.actionBox} flexGrow={1}>
          <HStack marginLeft={'auto'} spacing={'2'}>
            <Show when={modality === 'full'} keyed={false}>
              <ExportButton canvasRef={props.canvasRef} />

              <IconButton
                as="a"
                href="https://github.com/rahulnsanand/codeimage-unlmtd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                theme="secondary"
                size="sm"
              >
                <GithubIcon size="sm" />
              </IconButton>

              <ShareButton showLabel={false} />

              <IconButton
                onClick={() => openDialog(SettingsDialog, () => ({}))}
                aria-label="Settings"
                theme="secondary"
                size="sm"
              >
                <SettingsIcon size="sm" />
              </IconButton>
            </Show>

          </HStack>
        </Box>
      </div>
      <Show when={modality === 'mobile' && isRemote()} keyed={false}>
        <div
          class={styles.mobileToolbarSnippet}
          style={assignInlineVars({
            [backgroundColorVar]:
              themeConfiguration().properties.previewBackground,
            [colorVar]: themeConfiguration().properties.terminal.text,
          })}
        >
          <SnippetNameBox />
        </div>
      </Show>
    </div>
  );
}
