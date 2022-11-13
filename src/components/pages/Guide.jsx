import { GuideLogo } from "../atoms/text/GuideLogo";
import { SecondaryText } from "../atoms/text/SecondaryText";
import { PrimaryText } from "../atoms/text/PrimaryText";

export const Guide = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-12 mx-auto'>
        <h1 className='text-4xl font-semibold text-gray-800 lg:text-4xl dark:text-white'>
          How to use Typlus?
        </h1>
        <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3'>
          <div>
            <GuideLogo />
            <div>
              <PrimaryText>How to get started?</PrimaryText>
              <SecondaryText>
                First, press Get started button.
                <br />
                Then click anywhere on the English word.
                <br />
                After that, you can start typing.
              </SecondaryText>
            </div>
          </div>
          <div>
            <GuideLogo />
            <div>
              <PrimaryText>What if I want to start over?</PrimaryText>
              <SecondaryText>
                Press Retry button.
                <br />
                Then You can start all over again!
              </SecondaryText>
            </div>
          </div>
          <div>
            <GuideLogo />
            <div>
              <PrimaryText>
                What happens if I type to the last letter?
              </PrimaryText>
              <SecondaryText>
                A modal is displayed.
                <br />
                There you can see score, correct type, miss type and accuracy.
              </SecondaryText>
            </div>
          </div>
          <div>
            <GuideLogo />
            <div>
              <PrimaryText>
                What if I finish typing and want to start over again?
              </PrimaryText>
              <SecondaryText>
                There is Again button on the modal.
                <br />
                Then you can start over again!
              </SecondaryText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
