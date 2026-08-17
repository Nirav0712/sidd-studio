// import React, { useState } from 'react';
// import { faqData } from '../../data/portfolioData';
// import { Plus, Minus } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const FAQItem = ({ question, answer, index, isOpen, toggleOpen }) => {
//     return (
//         <div className="border-b border-gray-200 py-6">
//             <button
//                 onClick={toggleOpen}
//                 className="w-full flex justify-between items-center text-left focus:outline-none group"
//             >
//                 <div className="flex items-center space-x-6">
//                     <span className="text-gray-400 font-display font-medium text-lg">
//                         {index < 9 ? `0${index + 1}` : index + 1}
//                     </span>
//                     <h3 className={`text-xl md:text-2xl font-display font-medium transition-colors ${isOpen ? 'text-accent' : 'text-gray-900 group-hover:text-accent'}`}>
//                         {question}
//                     </h3>
//                 </div>
//                 <div className={`p-2 rounded-full border transition-colors ${isOpen ? 'border-accent bg-accent text-white' : 'border-gray-300 text-gray-500 group-hover:border-accent group-hover:text-accent'}`}>
//                     {isOpen ? <Minus size={20} /> : <Plus size={20} />}
//                 </div>
//             </button>

//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                     >
//                         <p className="pt-6 pb-2 pl-12 text-gray-600 text-lg font-light leading-relaxed">
//                             {answer}
//                         </p>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// const FAQ = () => {
//     const [openIndex, setOpenIndex] = useState(0);

//     return (
//         <section className="py-24 bg-white">
//             <div className="max-w-4xl mx-auto px-6 md:px-12">
//                 <div className="text-center mb-16">
//                     <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">Answers</span>
//                     <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Frequently Asked Questions</h2>
//                 </div>

//                 <div>
//                     {faqData.map((item, index) => (
//                         <FAQItem
//                             key={index}
//                             question={item.question}
//                             answer={item.answer}
//                             index={index}
//                             isOpen={openIndex === index}
//                             toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FAQ;
