interface Props {
  label: string;
}

const Button = (props: Props) => {
  const { label } = props;

  return (
    <button className="p-2 pl-6 pr-6 border-[0.5px] border-gray-500 bg-white rounded-[0.25rem] hover:scale-95 hover:transition-all ease-out duration-200">
      <p className="text-lg">{label}</p>
    </button>
  );
};

export default Button;
