// QuestionsDropdown.tsx
"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Question text goes here",
    answer: "Answer text goes here",
  },
  {
    id: 2,
    question: "Question text goes here",
    answer: "Answer text goes here",
  },
  {
    id: 3,
    question: "Question text goes here",
    answer: "Answer text goes here",
  },
  {
    id: 4,
    question: "Question text goes here",
    answer: "Answer text goes here",
  },
  {
    id: 5,
    question: "Question text goes here",
    answer: "Answer text goes here",
  },
];

const QuestionsDropdown: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="w-full space-y-0 border-t-[1px] border-gray-800">
      {questions.map((q) => (
        <div key={q.id} className="border-b-[1px] border-gray-800 w-full">
          <button
            className="flex justify-between items-center w-full text-left py-4 px-4 md:px-6"
            onClick={() => toggleQuestion(q.id)}
          >
            <span className="text-[#AFB5AD] text-[18px] font-semibold p-2">
              {q.question}
            </span>
            {openQuestion === q.id ? (
              <ChevronDown className="text-[#AFB5AD]" />
            ) : (
              <ChevronRight className="text-[#AFB5AD]" />
            )}
          </button>
          {openQuestion === q.id && (
            <p className="mt-2 pb-4 px-4 md:px-6 text-gray-600">{q.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionsDropdown;
