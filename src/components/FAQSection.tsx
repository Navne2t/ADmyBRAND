//src/components/FAQSection.tsx
import Accordion from "./Accordion";

const faqItems = [
  {
    question: "What is ADmyBRAND AI Suite?",
    answer:
      "ADmyBRAND AI Suite is an AI-powered marketing platform that automates your ad campaigns and improves ROI with advanced analytics and AI insights.",
  },
  {
    question: "Can I change my pricing plan later?",
    answer: "Yes, you can upgrade or downgrade your plan anytime from your account dashboard.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely! We provide 24/7 priority support on the Pro and Enterprise plans.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all plans to help you get started risk-free.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use industry-standard encryption and security protocols to protect your data at all times.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-[#0e0e0e] text-white max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="divide-y divide-gray-700">
        {faqItems.map(({ question, answer }, idx) => (
          <Accordion key={idx} title={question}>
            {answer}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
