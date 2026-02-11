import { rules } from '../data/rules';
import { useProgress } from '../hooks/useProgress';
import RuleCard from '../components/RuleCard';

export default function HomePage() {
  const { getBestScore } = useProgress();

  return (
    <div className="home">
      <h1 className="home__title">Rule Library</h1>
      <div className="home__cards">
        {rules.map((rule) => (
          <RuleCard
            key={rule.id}
            rule={rule}
            bestScore={getBestScore(rule.id)}
          />
        ))}
      </div>
    </div>
  );
}
