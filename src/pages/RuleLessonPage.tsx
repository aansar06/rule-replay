import { useParams, Link } from 'react-router-dom';
import { getRuleById } from '../data/rules';
import { useProgress } from '../hooks/useProgress';
import VideoPlaceholder from '../components/VideoPlaceholder';
import NotFoundPage from './NotFoundPage';

export default function RuleLessonPage() {
  const { ruleId } = useParams<{ ruleId: string }>();
  const { getBestScore } = useProgress();
  const rule = ruleId ? getRuleById(ruleId) : undefined;

  if (!rule) {
    return <NotFoundPage />;
  }

  const bestScore = getBestScore(rule.id);
  const completed = bestScore === 2;

  return (
    <div className="lesson">
      <Link to="/" className="btn btn-back">
        &larr; Back
      </Link>
      <h1 className="lesson__title">{rule.title}</h1>
      <VideoPlaceholder ruleId={rule.id} title={rule.title} />
      <p className="lesson__explanation">{rule.explanation}</p>
      <div className="lesson__progress">
        <span>Best: {bestScore}/2</span>
        {completed && <span className="completed-badge">Completed</span>}
      </div>
      <Link to={`/rules/${rule.id}/quiz`} className="btn btn-primary">
        Take Quick Quiz
      </Link>
    </div>
  );
}
