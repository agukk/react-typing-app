import { Link } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { ResultDetail } from "../atoms/text/ResultDetail";
import { ResultHeadline } from "../atoms/text/ResultHeadline";

export const ResultModal = ({correctCount, missCount, modalOpen, initilize, accuracy}) => {
    return(
        <>
            {modalOpen ? (
                <div className="fixed top-36 right-0 bottom-0 left-36 pl-80">
                    <div className="relative rounded-lg p-4 w-full max-w-lg h-full md:h-auto">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow-2xl">
                            {/* Modal header */}
                            <div className="flex justify-center items-center p-10 rounded-t border-b dark:border-gray-600">
                                <ResultHeadline>Score : {((correctCount - missCount) * (accuracy / 100)).toFixed(0)}</ResultHeadline>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <ResultDetail>Correct Type : {correctCount}</ResultDetail>
                                <ResultDetail>Miss Type : {missCount}</ResultDetail>
                                <ResultDetail>Accuracy : {accuracy} %</ResultDetail>
                            </div>
                            {/* Modal footer */}
                            <div className="flex justify-center pt-5 pb-16 space-x-16">
                                <span onClick={initilize}>
                                    <SecondaryButton>Again</SecondaryButton>
                                </span>
                                <Link to='/'>
                                    <SecondaryButton>Home</SecondaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}