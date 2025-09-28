import Typography from '@/components/Typography';
import Link from 'next/link';

export interface Question {
  question: string;
  answer: React.ReactNode;
}

export const QUESTIONS: Question[] = [
  {
    question: 'What is a hackathon?',
    answer:
      'A hackathon is an event where hackers come together to collaborate, create, and develop projects within a set timeframe (usually 24–48 hours). Participants form teams to brainstorm ideas, write code, and build solutions, with a focus on innovation and creativity.',
  },
  {
    question: 'Do I need any prior experience?',
    answer:
      "No, hackers of any experience levels are welcome! We'll have workshops and mentors to help you get started, and beginners have the chance to win prizes specifically for first time hackers.",
  },
  {
    question: 'Who can I reach out to for questions and concerns?',
    answer: (
      <>
        Please reach out to <Link href="mailto:hackathon@acmucsd.org">hackathon@acmucsd.org</Link>{' '}
        with any questions or concerns about DiamondHacks!
      </>
    ),
  },
  {
    question: 'Where will DiamondHacks be held?',
    answer:
      'DiamondHacks will be hosted at UC San Diego, in the Computer Science & Engineering Buildings, as well as Jacobs Hall.',
  },
  {
    question: 'Who can attend DiamondHacks?',
    answer: (
      <>
        Any undergraduate students enrolled in <b>any</b> college or university are eligible to
        attend!
      </>
    ),
  },
  
];
