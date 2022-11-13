export const Feature = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-12 mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <span class='inline-block text-amber-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-8 h-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                />
              </svg>
            </span>

            <h1 className='mt-4 text-xl font-semibold text-gray-800 dark:text-white'>
              Easy to use
            </h1>

            <p className='mt-2 text-gray-500 dark:text-gray-400'>
              Don't need to sign up.
              <br />
              You can practice typing quickly!
            </p>
          </div>

          <div>
            <span class='inline-block text-red-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-8 h-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                />
              </svg>
            </span>

            <h1 className='mt-4 text-xl font-semibold text-gray-800 dark:text-white'>
              Learn English
            </h1>

            <p className='mt-2 text-gray-500 dark:text-gray-400'>
              You can experience various English words that are excerpted from
              <a
                href='http://random-word-api.herokuapp.com/home'
                className='text-blue-500 hover:text-blue-400'
              >
                {" "}
                Random Word API
              </a>
              .
            </p>
          </div>

          <div>
            <svg className='w-8 h-8' viewBox='0 0 30 30' fill='none'>
              <path
                d='M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z'
                fill='#00bfff'
              />
              <path
                d='M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z'
                fill='#696969'
              />
              <path
                d='M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z'
                fill='#696969'
              />
            </svg>

            <h1 className='mt-4 text-xl font-semibold text-gray-800 dark:text-white'>
              Responsive Web design
            </h1>

            <p className='mt-2 text-gray-500 dark:text-gray-400'>
              You can practice typing comfortably no matter what size it is,
              because it is supported by responsive design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
