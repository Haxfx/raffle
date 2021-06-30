import { ReactElement } from 'react';
import Accordion from '../Faq';
import { AccordionItem } from '../Faq/AccordionItem';
import { FAQ } from '../../constants/context';
import { useFaqs } from '../../hooks/useFaq';

export const Faq = (): ReactElement => {
  const { data } = useFaqs();

  return (
    <div>
      <Accordion className="block bg-blue-backgroundLight border-b-2 border-purple-dark">
        <Accordion.Title className="flex p-5">{FAQ.TITLE}</Accordion.Title>

        <Accordion.Frame>
          {data &&
            data.map((item, key) => (
              <AccordionItem
                key={key}
                className="w-full border-b-2 border-purple-dark"
                title={item.question}
                content={item.answer}
              />
            ))}
        </Accordion.Frame>
      </Accordion>
    </div>
  );
};
