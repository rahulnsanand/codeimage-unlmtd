import {SUPPORTED_LANGUAGES} from '@codeimage/config';
import {useI18n} from '@codeimage/locale';
import {getActiveEditorStore} from '@codeimage/store/editor/activeEditor';
import {HStack, Text, themeVars, VStack} from '@codeimage/ui';
import {Button, Dialog, DialogPanelContent, DialogPanelFooter} from '@codeui/kit';
import {useModality} from '@core/hooks/isMobile';
import {DynamicSizedContainer} from '@ui/DynamicSizedContainer/DynamicSizedContainer';
import type {Component} from 'solid-js';
import {createSignal, Show} from 'solid-js';
import type {AppLocaleEntries} from '../../i18n';
import {UploadIcon} from '../Icons/UploadIcon';

const SUPPORTED_EXTENSIONS = SUPPORTED_LANGUAGES.flatMap(language =>
  language.icons.map(icon => ({
    extension: icon.extension.replace(/^\./, '').toLowerCase(),
    languageId: language.id,
  })),
);

const ACCEPT_ATTRIBUTE = [
  ...new Set(SUPPORTED_EXTENSIONS.map(({extension}) => `.${extension}`)),
].join(',');

export const ImportFileButton: Component = () => {
  const [t] = useI18n<AppLocaleEntries>();
  const modality = useModality();
  const buttonSize = () => (modality === 'full' ? 'sm' : 'xs');
  const [open, setOpen] = createSignal(false);
  const {setCode, setLanguageId} = getActiveEditorStore();

  return (
    <>
      <Button
        theme={'primary'}
        block
        size={buttonSize()}
        leftIcon={<UploadIcon />}
        onClick={e => {
          if (e.currentTarget instanceof HTMLElement) {
            e.currentTarget.blur();
          }
          setOpen(true);
        }}
      >
        {t('importFile.label')}
      </Button>

      <ImportFileDialog
        open={open()}
        onOpenChange={setOpen}
        size={modality === 'mobile' ? 'full' : 'md'}
        onConfirm={(fileContent, languageId) => {
          setLanguageId(languageId);
          setCode(fileContent);
        }}
      />
    </>
  );
};

export type ImportFileDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size: 'md' | 'full';
  onConfirm: (fileContent: string, languageId: string) => void;
};

export function ImportFileDialog(props: ImportFileDialogProps) {
  const [t] = useI18n<AppLocaleEntries>();
  const [dragActive, setDragActive] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const reset = () => {
    setDragActive(false);
    setError(null);
  };

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleFile = (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    const match = extension
      ? SUPPORTED_EXTENSIONS.find(entry => entry.extension === extension)
      : undefined;

    if (!match) {
      setError(t('importFile.unsupportedExtension'));
      return;
    }

    const reader = new FileReader();
    reader.onload = event => {
      const result = event.target?.result;
      if (typeof result !== 'string') {
        setError(t('importFile.invalidFile'));
        return;
      }
      props.onConfirm(result, match.languageId);
      props.onOpenChange(false);
    };
    reader.onerror = () => setError(t('importFile.invalidFile'));
    reader.readAsText(file);
  };

  const handleDrop = (e: DragEvent) => {
    handleDrag(e);
    setDragActive(false);
    const file = e.dataTransfer?.files?.[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: Event) => {
    const file = (e.currentTarget as HTMLInputElement).files?.[0];
    if (file) handleFile(file);
  };

  return (
    <Dialog
      open={props.open}
      onOpenChange={value => {
        reset();
        props.onOpenChange(value);
      }}
      modal={true}
      size={props.size}
      title={t('importFile.title')}
    >
      <DialogPanelContent>
        <DynamicSizedContainer>
          <VStack spacing={'4'}>
            <Text
              size={'sm'}
              style={{
                color: themeVars.dynamicColors.descriptionTextColor,
                'text-align': 'center',
              }}
            >
              {t('importFile.privacyNotice')}
            </Text>

            <label
              for={'import-file-input'}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              style={{
                display: 'flex',
                'flex-direction': 'column',
                'align-items': 'center',
                gap: '8px',
                padding: '40px 20px',
                'border-radius': '12px',
                cursor: 'pointer',
                'text-align': 'center',
                border: `2px dashed ${
                  dragActive()
                    ? themeVars.dynamicColors.primary
                    : themeVars.dynamicColors.divider
                }`,
                transition: 'border-color .2s',
              }}
            >
              <input
                id={'import-file-input'}
                type={'file'}
                accept={ACCEPT_ATTRIBUTE}
                multiple={false}
                onChange={handleChange}
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: '0',
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  border: '0',
                }}
              />
              <UploadIcon
                style={{
                  width: '32px',
                  height: '32px',
                  color: themeVars.dynamicColors.descriptionTextColor,
                }}
              />
              <Text size={'base'} weight={'medium'}>
                {t('importFile.dropLabel')}
              </Text>
              <Text
                size={'sm'}
                style={{color: themeVars.dynamicColors.descriptionTextColor}}
              >
                {t('importFile.browseLabel')}
              </Text>
            </label>

            <Show when={error()}>
              <Text
                size={'sm'}
                style={{
                  color: themeVars.dynamicColors.button.danger.backgroundColor,
                  'text-align': 'center',
                }}
              >
                {error()}
              </Text>
            </Show>
          </VStack>
        </DynamicSizedContainer>
      </DialogPanelContent>
      <DialogPanelFooter>
        <HStack spacing={'2'} justifyContent={'flexEnd'}>
          <Button
            block
            type="button"
            theme={'secondary'}
            onClick={() => props.onOpenChange(false)}
          >
            {t('common.close')}
          </Button>
        </HStack>
      </DialogPanelFooter>
    </Dialog>
  );
}
