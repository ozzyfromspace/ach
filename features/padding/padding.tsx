interface Props {
  children: React.ReactNode;
}

const Padding = (props: Props) => {
  const { children } = props;

  return <div className="px-6">{children}</div>;
};

export default Padding;
