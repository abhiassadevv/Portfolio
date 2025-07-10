const ProjectCard = (props) => {
  const { name, description, image, link } = props;

  return (
    <>
      <a href={link}>
        <div className="hover:scale-105 hover:duration-200">
          <img src={image} />
          <h4 className="text-xl font-bold text-white mt-4">{name}</h4>
          <p className="text-base font-normal text-white opacity-80">
            {description}
          </p>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;
