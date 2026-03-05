"use client";

import {useState} from "react";
import {questions} from "@/app/quiz/data/question";
import QuestionCard from "@/app/quiz/components/QuestionCard";
import {useRouter} from "next/navigation";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const router = useRouter();

  function calculateResult(answers: (number | null)[]) {
    const counts = [0, 0, 0]; // [Piper, Ping, Poppy]

    answers.forEach((index) => {
      if (index !== null) {
        counts[index]++;
      }
    });

    const maxIndex = counts.indexOf(Math.max(...counts));

    if (maxIndex === 0) return "piper";
    if (maxIndex === 1) return "ping";
    return "poppy";
  }

  function next(selectedIndex: number | null) {
    const updated = [...answers];
    updated[current] = selectedIndex;
    setAnswers(updated);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const result = calculateResult(updated);
      router.push(`/quiz/results?type=${result}`);
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