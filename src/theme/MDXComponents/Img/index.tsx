import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import mediumZoom from 'medium-zoom';
import type {Props} from '@theme/MDXComponents/Img';

import styles from './styles.module.css';

function transformImgClassName(className?: string): string {
  return clsx(className, styles.img);
}

export default function MDXImg(props: Props): JSX.Element {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      mediumZoom(imgRef.current, {
        background: 'rgba(0, 0, 0, 0.5)',
        margin: 24,
      });
    }
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      ref={imgRef}
      decoding="async"
      loading="lazy"
      {...props}
      className={transformImgClassName(props.className)}
    />
  );
}
