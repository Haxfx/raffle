import { ReactElement, ReactNode } from 'react';

interface IAccordion {
  className?: string;
  children: ReactNode;
}

export default function Accordion({ children, ...restProps }: IAccordion): ReactElement {
  return <div {...restProps}>{children}</div>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }: IAccordion): ReactElement {
  return <div {...restProps}>{children}</div>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }: IAccordion): ReactElement {
  return <div {...restProps}>{children}</div>;
};
