"use client";

import React from "react";
import FaqHeading from "./FAQsContent/FaqsHeading";
import QuestionsDropdown from "./FAQsContent/QuestionsDropdown";
import StillHaveQuestions from "./FAQsContent/StillhaveQuestions";

const FaqsContainer: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <FaqHeading />
      <QuestionsDropdown />
      <StillHaveQuestions />
    </div>
  );
};

export default FaqsContainer;
