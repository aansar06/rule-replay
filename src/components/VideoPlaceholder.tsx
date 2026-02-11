import type { FC } from 'react';
import HoldingAnimation from './animations/HoldingAnimation';
import OffsideAnimation from './animations/OffsideAnimation';
import FalseStartAnimation from './animations/FalseStartAnimation';

interface VideoPlaceholderProps {
  ruleId: string;
  title: string;
}

const animations: Record<string, FC> = {
  holding: HoldingAnimation,
  offside: OffsideAnimation,
  'false-start': FalseStartAnimation,
};

export default function VideoPlaceholder({ ruleId, title }: VideoPlaceholderProps) {
  const Animation = animations[ruleId];

  if (Animation) {
    return (
      <div className="rule-animation">
        <Animation />
      </div>
    );
  }

  return (
    <div className="video-placeholder">
      <div className="video-placeholder__play">&#9654;</div>
      <p className="video-placeholder__label">Animation here</p>
      <p className="video-placeholder__title">{title}</p>
    </div>
  );
}
