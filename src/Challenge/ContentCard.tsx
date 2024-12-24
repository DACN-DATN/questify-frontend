import React, { useState } from 'react';
import YouTube from 'react-youtube';

interface ContentCardProps {
  type: string;
  content: {
    title: string;
    content?: string;
    videoSrc?: string;
    questionText?: string;
    options?: string[];
    answer?: string;
    explaination?: string;
  };
  currentPage: number;
  totalPages: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ type, content, currentPage, totalPages }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [result, setResult] = useState<boolean | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setResult(selectedAnswer === content.answer);
  };

  return (
    <div className="flex h-full flex-col rounded-xl bg-[#F5F7FA] p-6 text-black mx-4">
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-2xl font-semibold">{content.title}</h2>
        <div className="bg-gray-500 text-white px-2 py-1 rounded-md">
          {currentPage}/{totalPages}
        </div>
      </div>
      <hr className="border-gray-300 w-full mb-4" />
      <div className="flex h-full flex-col justify-center">
        {type === 'standard' && (
          <div className="text-center w-full">
            <p className="mb-4">{content.content}</p>
          </div>
        )}
        {type === 'video' && (
          <div className="flex justify-center items-center h-full w-full">
            <YouTube
              videoId={content.videoSrc}
              loading="lazy"
              iframeClassName="w-full h-full"
              className="w-full h-full"
            />
          </div>
        )}
        {type === 'quiz' && (
          <div className="text-center w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="text-lg font-bold mb-4">{content.questionText}</p>
                {content.options?.map((option, idx) => (
                  <div key={idx} className="bg-purple-500 py-1 px-2 rounded-md mb-2">
                    <label className="block text-white">
                      <input
                        type="radio"
                        name="question"
                        value={option}
                        className="mr-2"
                        onChange={() => handleOptionChange(option)}
                      />
                      {option}
                    </label>
                  </div>
                ))}
                {result !== null && (
                  <>
                    <p className={result ? 'text-green-500' : 'text-red-500'}>
                      {result ? (
                        'Correct!'
                      ) : (
                        <>
                          Incorrect!
                          <br />
                          {content.explaination}
                        </>
                      )}
                    </p>
                  </>
                )}
              </div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-white"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
