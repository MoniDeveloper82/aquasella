
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <ChevronDownIcon
          className={`w-6 h-6 text-sky-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <p className="pb-4 text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
