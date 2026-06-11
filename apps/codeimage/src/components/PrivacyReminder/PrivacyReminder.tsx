import {Box, Text} from '@codeimage/ui';
import {
  Button,
  Dialog,
  DialogPanelContent,
  DialogPanelFooter,
  Checkbox,
} from '@codeui/kit';
import type {ControlledDialogProps} from '@core/hooks/createControlledDialog';
import {useModality} from '@core/hooks/isMobile';
import {createSignal} from 'solid-js';

import {CloudIcon} from '../Icons/CloudIcon';
import {DownloadIcon} from '../Icons/Download';
import {SparklesIcon} from '../Icons/SparklesIcon';
import {CheckCircle} from '../Icons/CheckCircle';
import {CodeImageLogoV2} from '../Icons/CodeImageLogoV2';
import {UploadIcon} from '../Icons/UploadIcon';
import {DockerIcon} from '../Icons/DockerIcon';
import {ExternalLinkIcon} from '../Icons/ExternalLink';

export function PrivacyReminder(props: ControlledDialogProps) {
  const modality = useModality();
  const [dontShowAgain, setDontShowAgain] = createSignal(
    !!localStorage.getItem('hideWelcomeModal'),
  );

  const handleDontShowAgainChange = (checked: boolean) => {
    setDontShowAgain(checked);
    if (checked) {
      localStorage.setItem('hideWelcomeModal', 'true');
    } else {
      localStorage.removeItem('hideWelcomeModal');
    }
  };

  return (
    <Dialog
      open={props.isOpen}
      size={modality === 'mobile' ? 'full' : 'lg'}
      onOpenChange={open => {
        props.onOpenChange(open);
      }}
    >
      <DialogPanelContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingTop={4}
          style={{gap: '12px', width: '100%'}}
        >
          <Text weight="bold" size="xl">
            Welcome to
          </Text>
          <CodeImageLogoV2 height={28} />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          paddingY={4}
          style={{gap: '24px'}}
        >
          <Box>
            <Text size="base" style={{color: 'var(--cui-text-muted)'}}>
              The supercharged, beautifully optimized version of CodeImage.
              We've stripped out the heavy backend to give you a pure,
              lightning-fast experience.
            </Text>
          </Box>

          <div
            style={{
              display: 'grid',
              'grid-template-columns':
                modality === 'mobile' ? '1fr' : '1fr 1fr',
              gap: '24px',
            }}
          >
            <Box display="flex" flexDirection="column" style={{gap: '8px'}}>
              <Box display="flex" alignItems="center" style={{gap: '8px'}}>
                <Box style={{color: '#3b82f6', display: 'flex'}}>
                  <CloudIcon size="lg" />
                </Box>
                <Text weight="semibold">100% Serverless</Text>
              </Box>
              <Text size="sm" style={{color: 'var(--cui-text-muted)'}}>
                No databases, no heavy APIs. Everything runs blazingly fast
                entirely in your browser.
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" style={{gap: '8px'}}>
              <Box display="flex" alignItems="center" style={{gap: '8px'}}>
                <Box style={{color: '#10b981', display: 'flex'}}>
                  <CheckCircle size="lg" />
                </Box>
                <Text weight="semibold">Privacy First</Text>
              </Box>
              <Text size="sm" style={{color: 'var(--cui-text-muted)'}}>
                No telemetry, no tracking, and no data collection. Your code
                stays yours.
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" style={{gap: '8px'}}>
              <Box display="flex" alignItems="center" style={{gap: '8px'}}>
                <Box style={{color: '#8b5cf6', display: 'flex'}}>
                  <DownloadIcon size="lg" />
                </Box>
                <Text weight="semibold">16x Export Resolution</Text>
              </Box>
              <Text size="sm" style={{color: 'var(--cui-text-muted)'}}>
                Supercharged export options up to 16x multiplier for
                pixel-perfect social media posts.
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" style={{gap: '8px'}}>
              <Box display="flex" alignItems="center" style={{gap: '8px'}}>
                <Box style={{color: '#f59e0b', display: 'flex'}}>
                  <SparklesIcon size="lg" />
                </Box>
                <Text weight="semibold">Uncapped Features</Text>
              </Box>
              <Text size="sm" style={{color: 'var(--cui-text-muted)'}}>
                Free and uncapped. Generate unlimited screenshots without any
                paywalls or limits.
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" style={{gap: '8px'}}>
              <Box display="flex" alignItems="center" style={{gap: '8px'}}>
                <Box style={{color: '#f97316', display: 'flex'}}>
                  <UploadIcon size="lg" />
                </Box>
                <Text weight="semibold">Import Code from File</Text>
              </Box>
              <Text size="sm" style={{color: 'var(--cui-text-muted)'}}>
                Import code files directly from your device. Languages are
                automatically detected and formatted entirely in your browser.
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" style={{gap: '8px'}}>
              <Box display="flex" alignItems="center" style={{gap: '8px'}}>
                <Box style={{color: '#0db7ed', display: 'flex'}}>
                  <DockerIcon size="lg" />
                </Box>
                <Text weight="semibold">Self-Host with Docker</Text>
              </Box>
              <Text size="sm" style={{color: 'var(--cui-text-muted)', display: 'flex', 'flex-direction': 'column', gap: '4px'}}>
                <span>
                  Deploy this application locally on Windows, macOS, Linux, or
                  Raspberry Pi servers.
                </span>
                <a
                  href="https://github.com/rahulnsanand/codeimage-unlmtd/blob/main/DOCKER.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0db7ed',
                    'text-decoration': 'underline',
                    display: 'inline-flex',
                    'align-items': 'center',
                    gap: '4px',
                    'font-weight': '500',
                  }}
                >
                  View Docker Guide
                  <ExternalLinkIcon size="xs" />
                </a>
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              style={{gap: '8px', 'grid-column': '1 / -1'}}
            >
              <Box display="flex" alignItems="center" style={{gap: '8px'}}>
                <Box style={{color: '#14b8a6', display: 'flex'}}>
                  <CheckCircle size="lg" />
                </Box>
                <Text weight="semibold">Zero Vulnerabilities</Text>
              </Box>
              <Text size="sm" style={{color: 'var(--cui-text-muted)'}}>
                Built on a modern stack with no deprecated dependencies and
                absolutely zero runtime security vulnerabilities.
              </Text>
            </Box>
          </div>
        </Box>
      </DialogPanelContent>
      <DialogPanelFooter>
        <Box
          display={'flex'}
          justifyContent={'spaceBetween'}
          alignItems={'center'}
          width="100%"
        >
          <Checkbox
            size="md"
            label="Don't show this again"
            checked={dontShowAgain()}
            onChange={handleDontShowAgainChange}
          />
          <Button
            theme={'primary'}
            size="lg"
            onClick={() => props.onOpenChange(false)}
            style={{width: modality === 'mobile' ? '100%' : 'auto'}}
          >
            Start Creating
          </Button>
        </Box>
      </DialogPanelFooter>
    </Dialog>
  );
}
