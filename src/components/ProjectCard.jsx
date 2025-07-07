const ProjectCard = (props) => {
  const { name, description, image } = props;

  return (
    <>
      <div>
        <img src={image} />
        <h4 className="text-xl font-bold text-white mt-4">{name}</h4>
        <p className="text-base font-normal text-white opacity-80">
          {description}
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
