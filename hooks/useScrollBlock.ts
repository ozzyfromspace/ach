import { useRef } from 'react';

export const useScrollBlock = (): [() => void, () => void] => {
  const scrollBlocked = useRef(false);
  if (typeof window === 'undefined') return [() => {}, () => {}];

  const safeDocument = window.document;
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = (): void => {
    if (!body || !body.style || scrollBlocked.current) return;
    if (document === undefined) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right')
      ) || 0;

    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = (): void => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};
