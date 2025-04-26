import React, { useState } from "react";

const faqData = [
  {
    category: "Abroad Education",
    faqs: [
      { question: "What are the requirements to study abroad?", answer: "Requirements vary by country and program but typically include academic transcripts, language proficiency (like IELTS or TOEFL), a statement of purpose, and recommendation letters." },
      { question: "Do I need to take an English language test?", answer: "Yes, most universities require proof of English proficiency through tests like IELTS, TOEFL, or PTE." },
      { question: "What are the best countries for international students?", answer: "Popular choices include Canada, Australia, the USA, the UK, and Germany due to quality education and work opportunities." },
      { question: "Can I work while studying?", answer: "Yes, most student visas allow part-time work (typically 20 hours/week) during semesters." },
      { question: "Are scholarships available for international students?", answer: "Yes, universities and governments offer scholarships based on merit, need, or specific programs." },
    ],
  },
  {
    category: "Job & Career",
    faqs: [
      { question: "Can I get a job abroad after completing my studies?", answer: "Yes, many countries offer post-study work permits or job search visas to help international graduates find employment." },
      { question: "Do I need prior work experience to get a job abroad?", answer: "Not always. Some entry-level roles are available, especially for graduates. Experience helps for skilled roles." },
      { question: "What are in-demand professions globally?", answer: "IT, engineering, healthcare, and finance are typically high-demand fields across many countries." },
      { question: "How do I apply for jobs internationally?", answer: "Use global job portals, professional networks (like LinkedIn), or recruitment agencies that specialize in overseas jobs." },
      { question: "Do international jobs require local language skills?", answer: "It depends on the country and job type. For example, jobs in Germany or Japan might require local language proficiency." },
    ],
  },
  {
    category: "Permanent Residency",
    faqs: [
      { question: "How can I apply for permanent residency abroad?", answer: "Each country has its own PR process, typically involving a point-based system based on age, education, work experience, and language skills." },
      { question: "How long does it take to get PR?", answer: "Processing time varies by country and applicant profile. It can range from a few months to several years." },
      { question: "Can international students apply for PR after graduation?", answer: "Yes, many countries allow students to transition to PR after gaining local work experience." },
      { question: "Do I need a job offer to apply for PR?", answer: "In some cases yes, while in others, having a high points score can make you eligible without one." },
      { question: "Which countries are easiest to get PR?", answer: "Canada, Australia, and New Zealand offer transparent and relatively quicker PR pathways." },
    ],
  },
  {
    category: "Visa & Immigration",
    faqs: [
      { question: "What documents are needed for a student visa?", answer: "You'll typically need a passport, university acceptance letter, proof of funds, health insurance, and language test scores." },
      { question: "What is the visa interview process like?", answer: "It usually involves verifying your study intent, finances, and ties to your home country. Confidence and documentation are key." },
      { question: "Can I bring dependents on a student visa?", answer: "Some countries like Canada and Australia allow spouses or children to accompany international students." },
      { question: "What if my visa gets rejected?", answer: "You can reapply with better documentation or clarification. Rejections aren't the end—many students succeed on reapplication." },
      { question: "How soon can I apply for a visa after getting admission?", answer: "It’s advisable to start your visa process immediately after receiving your acceptance letter and arranging funds." },
    ],
  },
  {
    category: "Other Common Questions",
    faqs: [
      { question: "Do I need to take health insurance?", answer: "Yes, most countries require students to have valid health insurance throughout their stay." },
      { question: "Can Vision Square help me with SOPs and LORs?", answer: "Absolutely. Our experts assist you in crafting professional and impactful SOPs and Letters of Recommendation." },
      { question: "Is accommodation arranged by the consultancy?", answer: "Yes, we help you find reliable and affordable accommodation near your institution abroad." },
      { question: "What makes Vision Square different?", answer: "We offer personalized guidance, end-to-end services, 100% transparency, and a proven success record." },
      { question: "Can I apply to multiple countries at once?", answer: "Yes, we support multi-country applications based on your profile and preferences." },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  const filteredFaqs = faqData
    .map((section) => ({
      ...section,
      faqs: section.faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.faqs.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
        Frequently Asked Questions
      </h2>

      {/* Search Bar */}
      <div className="mb-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search a question..."
          className="w-full sm:w-1/2 mx-auto block p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* FAQs */}
      {filteredFaqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-3 border-b pb-1">
            {section.category}
          </h3>
          <div className="space-y-2">
            {section.faqs.map((faq, faqIndex) => {
              const index = globalIndex++;
              const isOpen = openIndex === index;
              return (
                <div
                  key={faqIndex}
                  className="border border-gray-200 rounded-lg shadow-sm bg-white"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center p-4 text-left hover:bg-blue-50 focus:outline-none transition"
                  >
                    <span className="font-medium text-sm md:text-base">
                      {faq.question}
                    </span>
                    <span className="text-lg">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-600 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {filteredFaqs.length === 0 && (
        <p className="text-center text-gray-500">No FAQs matched your search.</p>
      )}
    </div>
  );
};

export default FAQ;
