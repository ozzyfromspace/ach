interface Props {
  label: string;
  full: boolean;
  fixed: boolean;
  className: string;
}

const Button = (props: Props) => {
  const { label, full, fixed, className } = props;
  const width = full ? (fixed ? '' : 'w-full') : '';
  const fixedClasses = fixed
    ? 'fixed z-10 bg-blue-dark bottom-6 left-6 right-6'
    : '';

  return (
    <button
      className={`${className} p-2 pl-6 pr-6 border-gray-400 gradient-blue text-white font-normal rounded-[0.25rem] hover:scale-[0.98] hover:transition-all ease-in-out duration-[350ms] ${width} ${fixedClasses}`}
    >
      {label}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  full: false,
  fixed: false,
  className: '',
};
