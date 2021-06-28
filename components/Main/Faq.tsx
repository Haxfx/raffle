import Accordion from '../Faq';
import faqsData from '../../fixtures/faqs.json';

export const Faq = () => (
  <div>
    <Accordion className="block bg-blue-backgroundLight border-b-2 border-purple-dark">
      <Accordion.Title className="flex self-center text-center p-5">
        Frequently Asked Questions
      </Accordion.Title>

      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item
            key={item.id}
            className="w-full border-b-2 border-purple-dark transition duration-150"
          >
            <Accordion.Header className="flex py-4 cursor-pointer justify-between transition duration-150">
              <span className="ml-5 text-sm">{item.header}</span>
            </Accordion.Header>

            <Accordion.Body className="p-4 text-sm font-thin transition duration-150">
              {item.body}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
    </Accordion>
  </div>
);
