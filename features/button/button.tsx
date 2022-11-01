interface Props {
  label: string;
}

const Button = (props: Props) => {
  const { label } = props;

  return (
    <button className="p-2 pl-6 pr-6 border-gray-400 bg-white rounded-[0.25rem] hover:scale-95 hover:transition-all ease-out duration-200">
      {label}
    </button>
  );
};

export default Button;
