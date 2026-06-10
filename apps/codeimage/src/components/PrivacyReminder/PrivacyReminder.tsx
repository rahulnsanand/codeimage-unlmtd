import {Box} from '@codeimage/ui';
import {
  Button,
  Dialog,
  DialogPanelContent,
  DialogPanelFooter,
} from '@codeui/kit';
import type {ControlledDialogProps} from '@core/hooks/createControlledDialog';
import {useModality} from '@core/hooks/isMobile';

export function PrivacyReminder(props: ControlledDialogProps) {
  const modality = useModality();

  return (
    <Dialog
      title={"Welcome to CodeImage unlmtd!"}
      open={props.isOpen}
      size={modality === 'mobile' ? 'full' : 'md'}
      onOpenChange={open => {
        props.onOpenChange(open);
      }}
    >
      <DialogPanelContent>
        <Box display={'flex'} flexDirection={'column'} gap={4}>
          <Box>
            <strong>🔒 Privacy First</strong>
            <Box as="p" marginTop={1}>No data is collected, not even for usage or diagnostics. Your privacy is paramount.</Box>
          </Box>
          <Box>
            <strong>💻 Local Storage</strong>
            <Box as="p" marginTop={1}>All your data and snippets are securely stored only in your local browser.</Box>
          </Box>
          <Box>
            <strong>🔓 Open Source</strong>
            <Box as="p" marginTop={1}>The code is 100% free and open-source.</Box>
          </Box>
          <Box>
            <strong>☁️ Self-Hostable</strong>
            <Box as="p" marginTop={1}>You can easily deploy and self-host this tool on your own infrastructure.</Box>
          </Box>
        </Box>
      </DialogPanelContent>
      <DialogPanelFooter>
        <Box display={'flex'} justifyContent={'flexEnd'}>
          <Button
            theme={'primary'}
            onClick={() => props.onOpenChange(false)}
          >
            I understand
          </Button>
        </Box>
      </DialogPanelFooter>
    </Dialog>
  );
}
