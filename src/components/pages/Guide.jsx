import { Guideline } from "../atoms/text/Guideline";

export const Guide = () => {
    return(
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <div className='space-y-20 font-sans text-2xl'>
                <Guideline>・タイピングを始める際には、単語のどこかをクリックしてください。</Guideline>
                <Guideline>・タイピング途中でやり直したい場合は、Retryボタンを押してください。</Guideline>
                <Guideline>・タイピングが終わり次第、スコアが出ます。</Guideline>
            </div>
        </div>  
    );
}