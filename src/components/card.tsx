import { Link } from "react-router-dom";

const Card = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={link}>
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button className="button-85 py-3 px-5" role="button">
          <Link to={link}>Press</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
