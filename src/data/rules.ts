import { Rule } from '../types/rule';

export const rules: Rule[] = [
  {
    id: 'holding',
    title: 'Holding',
    summary: 'Grabbing an opponent to stop them.',
    explanation:
      "Holding is when a player grabs another player to stop them from moving. It's not allowed because it gives an unfair advantage.",
    videoUrl: '',
    quizQuestions: [
      {
        question: 'What is "holding" in football?',
        options: [
          'Running with the ball',
          'Grabbing an opponent to stop them',
          'Kicking the ball',
          'Calling a timeout',
        ],
        correctOptionIndex: 1,
      },
      {
        question: 'Why is holding illegal?',
        options: [
          'It makes the game faster',
          'It gives an unfair advantage',
          'It helps the defense score',
          'It wastes time',
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: 'offside',
    title: 'Offside',
    summary: 'Crossing early before the snap.',
    explanation:
      'Offside happens when a defensive player crosses the line of scrimmage before the ball is snapped.',
    videoUrl: '',
    quizQuestions: [
      {
        question: 'Offside usually happens when…',
        options: [
          'A player moves after the whistle',
          'The defense crosses early before the snap',
          'The quarterback throws the ball away',
          'The kicker misses a field goal',
        ],
        correctOptionIndex: 1,
      },
      {
        question: 'When does offside occur?',
        options: [
          'After the play ends',
          'Before the ball is snapped',
          'Only on kickoffs',
          'Only in the 4th quarter',
        ],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    id: 'false-start',
    title: 'False Start',
    summary: 'Offense moves too early.',
    explanation:
      "A false start is when an offensive player moves before the snap when they're supposed to stay still.",
    videoUrl: '',
    quizQuestions: [
      {
        question: 'A false start is called on…',
        options: ['The offense', 'The defense', 'The refs', 'The fans'],
        correctOptionIndex: 0,
      },
      {
        question: 'False start happens when…',
        options: [
          'The ball is snapped too early',
          'An offensive player moves before the snap',
          'The defense celebrates',
          'A receiver catches the ball',
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];

export function getRuleById(id: string): Rule | undefined {
  return rules.find((r) => r.id === id);
}
