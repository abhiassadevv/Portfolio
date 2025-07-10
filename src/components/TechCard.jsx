const TechCard = (props) => {
  const { width, border, rounded, icon } = props;

  return (
    <>
      <div
        className={`${border} border-slate-900 h-32 ${width} ${rounded} flex justify-center items-center hover:bg-slate-900 hover:duration-200`}
      >
        <img src={icon} className="w-16"></img>
      </div>
    </>
  );
};

export default TechCard;
