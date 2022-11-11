import { Link } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { ResultDetail } from "../atoms/text/ResultDetail";
import { ResultHeadline } from "../atoms/text/ResultHeadline";

export const ResultModal = ({correctCount, missCount, modalOpen, initilize, accuracy}) => {
    return(
        <>
            {modalOpen ? (
                <div className="relative z-10">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-autow">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-4">
                            <div className="relative transform overflow-hidden rounded-lg bg-gray-50 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                                <div className="p-5 border-b dark:border-gray-600">
                                    <ResultHeadline>Score : {((correctCount - missCount) * (accuracy / 100)).toFixed(0)}</ResultHeadline>
                                </div>
                                <div className="p-5 space-y-3">
                                    <ResultDetail>Correct Type : {correctCount}</ResultDetail>
                                    <ResultDetail>Miss Type : {missCount}</ResultDetail>
                                    <ResultDetail>Accuracy : {accuracy} %</ResultDetail>
                                </div>
                                <div className="flex justify-center pt-5 pb-10 px-10 space-x-16">
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
                </div>
            ) : (
                <></>
            )}
        </>
    );
}