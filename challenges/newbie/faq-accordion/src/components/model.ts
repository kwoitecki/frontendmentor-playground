export type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
};

export type FAQListProps = {
  questions: FAQItemProps[];
};
