import { Link } from 'react-router-dom';

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
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[550px]'>
            <div className='h-[40%]'>
                <a href={link}>
                    <img className='rounded-t-lg h-full' src={image} alt='' />
                </a>
            </div>
            <div className='h-[15%] px-2 flex items-center justify-center'>
                <a href={link}>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        {title}
                    </h5>
                </a>
            </div>
            <div className='h-[35%] px-2'>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {description}
                </p>
            </div>
            <div className='h-[10%] px-2 text-center'>
                <button className='button-85 py-3 px-5' role='button'>
                    <Link to={link} target='_blank'>
                        Press
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Card;
