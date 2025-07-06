const Statistic = (props) => {
  const { title, description } = props;

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm font-normal text-white opacity-80">
          {description}
        </p>
      </div>
    </>
  );
};

export default Statistic;
