const Button = (props) => {
  const {
    variant = "bg-blue-700",
    height = "h-10",
    width = "w-20",
    classname,
    children,
  } = props;

  return (
    <>
      <button className={`${variant} ${height} ${width} ${classname}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
