import { Link } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const HeadlineButtom = () => {
  return (
    <div className='bg-white dark:bg-gray-800 '>
      <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:pb-8 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl'>
          <span className='block'>Want to improve typing skill ?</span>
          <span className='block text-indigo-500 mt-2'>
            If so, Let's typing!
          </span>
        </h2>
        <p className='text-xl mt-4 max-w-md mx-auto text-gray-400'>
          You can practice typing by displaying ten random words on this site.
        </p>
        <div className='lg:mt-0 lg:flex-shrink-0'>
          <div className='mt-8 inline-flex rounded-md shadow'>
            <Link to='typing'>
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
