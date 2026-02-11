import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRuleById } from '../data/rules';
import { useProgress } from '../hooks/useProgress';
import NotFoundPage from './NotFoundPage';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function QuizPage() {
  const { ruleId } = useParams<{ ruleId: string }>();
  const { updateBestScore } = useProgress();
  const rule = ruleId ? getRuleById(ruleId) : undefined;

  const [selections, setSelections] = useState<(number | null)[]>([null, null]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!rule) {
    return <NotFoundPage />;
  }

  const allAnswered = selections.every((s) => s !== null);

  function handleSelect(questionIndex: number, optionIndex: number) {
    if (submitted) return;
    setSelections((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function handleSubmit() {
    if (!allAnswered || !rule) return;
    let correct = 0;
    rule.quizQuestions.forEach((q, i) => {
      if (selections[i] === q.correctOptionIndex) {
        correct++;
      }
    });
    setScore(correct);
    setSubmitted(true);
    updateBestScore(rule.id, correct);
  }

  function handleTryAgain() {
    setSelections([null, null]);
    setSubmitted(false);
    setScore(0);
  }

  function getOptionClass(qIndex: number, oIndex: number): string {
    const base = 'quiz-option';
    const selected = selections[qIndex] === oIndex;

    if (!submitted) {
      return selected ? `${base} quiz-option--selected` : base;
    }

    const isCorrect = rule!.quizQuestions[qIndex].correctOptionIndex === oIndex;

    if (isCorrect) {
      return `${base} quiz-option--correct`;
    }
    if (selected && !isCorrect) {
      return `${base} quiz-option--incorrect`;
    }
    return `${base} quiz-option--disabled`;
  }

  return (
    <div className="quiz">
      <h1 className="quiz__title">{rule.title} – Quick Quiz</h1>

      {rule.quizQuestions.map((q, qIndex) => (
        <div key={qIndex} className="quiz__question">
          <h3 className="quiz__question-text">
            {qIndex + 1}. {q.question}
          </h3>
          <div className="quiz__options">
            {q.options.map((option, oIndex) => (
              <button
                key={oIndex}
                className={getOptionClass(qIndex, oIndex)}
                onClick={() => handleSelect(qIndex, oIndex)}
                disabled={submitted}
                type="button"
              >
                <span className="quiz-option__label">
                  {OPTION_LABELS[oIndex]}.
                </span>{' '}
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {!submitted && (
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={!allAnswered}
          type="button"
        >
          Submit
        </button>
      )}

      {submitted && (
        <div className="quiz__results">
          <h2 className="quiz__score">You got {score}/2</h2>
          <div className="quiz__actions">
            <button
              className="btn btn-secondary"
              onClick={handleTryAgain}
              type="button"
            >
              Try Again
            </button>
            <Link to={`/rules/${rule.id}`} className="btn btn-primary">
              Back to Rules
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
