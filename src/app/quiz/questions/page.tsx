"use client";

import {useState} from "react";
import {questions} from "@/app/quiz/data/question";
import QuestionCard from "@/app/quiz/components/QuestionCard";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);

  function next() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  }

  function back() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  return (
    <section>
        <QuestionCard
            data={questions[current]}
            current={current + 1}
            total={questions.length}
            onNext={next}
            onBack={back}
        />
    </section>
  );
}