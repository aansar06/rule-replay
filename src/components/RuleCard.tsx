import { Link } from 'react-router-dom';
import { Rule } from '../types/rule';

interface RuleCardProps {
  rule: Rule;
  bestScore: number;
}

export default function RuleCard({ rule, bestScore }: RuleCardProps) {
  const completed = bestScore === 2;

  return (
    <div className="rule-card">
      <div className="rule-card__header">
        <h2 className="rule-card__title">{rule.title}</h2>
        {completed && <span className="completed-badge">Completed</span>}
      </div>
      <p className="rule-card__summary">{rule.summary}</p>
      <p className="rule-card__progress">Best: {bestScore}/2</p>
      <Link to={`/rules/${rule.id}`} className="btn btn-primary">
        Learn
      </Link>
    </div>
  );
}
