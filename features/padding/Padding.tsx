import React from 'react';

interface Props {
  _px: string;
  _py: string;
  _pt: string;
  _pb: string;
  children: React.ReactNode;
  id: string;
  className: string;
  style: React.CSSProperties;
}

const Padding = (props: Props) => {
  const { children, _px, _py, _pt, _pb, className, ...rest } = props;
  const pTop = _pt === 'pt-0' ? _py : _pt;
  const pBot = _pb === 'pb-0' ? _py : _pb;

  return (
    <div className={`${pTop} ${pBot} ${_px} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Padding;

Padding.defaultProps = {
  _px: 'px-6',
  _py: 'py-0',
  _pt: 'pt-0',
  _pb: 'pb-0',
  className: '',
  id: '',
  style: {},
};
