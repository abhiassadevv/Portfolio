const Button = (props) => {
  const {
    variant = "bg-blue-700",
    height = "h-12",
    width = "w-20",
    classname,
    children,
  } = props;

  return (
    <>
      <button
        className={`${variant} ${height} ${width} ${classname} hover:bg-blue-800 hover:duration-200`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
