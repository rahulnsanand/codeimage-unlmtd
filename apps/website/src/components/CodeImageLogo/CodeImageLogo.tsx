import type {JSX} from 'solid-js';
import {useAssets} from 'solid-js/web';

export const CodeImageLogoSvgRemote = (props: JSX.IntrinsicElements['img']) => {
  useAssets(() => <link rel="preload" as="image" href={'/favicon.svg'} />);

  return (
    <picture style={{display: 'flex'}}>
      <img src={'/favicon.svg'} alt={'CodeImage logo svg'} {...props} />
    </picture>
  );
};
