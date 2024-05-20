interface CardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

const CardService: React.FC<CardProps> = ({
  icon,
  title,
  description,
  href,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:shadow-xl hover:scale-105"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="text-6xl mb-4">
        <i className={icon}></i>
      </div>
      <h4 className="text-xl font-semibold mb-2">
        <a href={href ? href : '#'}>{title}</a>
      </h4>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default CardService;
