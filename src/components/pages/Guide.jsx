import { GuideLogo } from "../atoms/text/GuideLogo";
import { GuideText } from "../atoms/text/GuideText";
import { GuideTitle } from "../atoms/text/GuideTitle";

export const Guide = () => {
    return(
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-4xl font-semibold text-gray-800 lg:text-4xl dark:text-white">How to use Typlus?</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <GuideLogo/>
                        <div>
                            <GuideTitle>How to get started?</GuideTitle>
                            <GuideText>
                                First, press Get started button.<br/>
                                Then click anywhere on the English word.<br/>
                                After that, you can start typing.
                            </GuideText>
                        </div>
                    </div>
                    <div>
                        <GuideLogo/>
                        <div>
                            <GuideTitle>What if I want to start over?</GuideTitle>
                            <GuideText>
                                Press Retry button.<br/> 
                                Then You can start all over again!
                            </GuideText>
                        </div>
                    </div>
                    <div>
                        <GuideLogo/>
                        <div>
                            <GuideTitle>What happens if I type to the last letter?</GuideTitle>
                            <GuideText>
                                A modal is displayed.<br/>
                                There you can see score, correct type, miss type and accuracy.
                            </GuideText>
                        </div>
                    </div>
                    <div>
                        <GuideLogo/>
                        <div>
                            <GuideTitle>What if I finish typing and want to start over again?</GuideTitle>
                            <GuideText>
                                There is Again button on the modal.<br/>
                                Then you can start over again!
                            </GuideText>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}