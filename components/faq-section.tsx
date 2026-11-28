'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const faqs = [
  {
    q: 'What is Arya Samaj and what does it teach?',
    qHi: 'आर्य समाज क्या है और इसकी मुख्य शिक्षा क्या है?',
    a: 'Arya Samaj ("Society of Nobles") is a Vedic reform movement founded in 1875. It teaches devotion to one formless God, the authority of the four Vedas as books of true knowledge, equality of all human beings, universal education, and selfless service (Seva).',
    aHi: 'आर्य समाज 1875 में स्थापित एक वैदिक सुधार आंदोलन है। यह एक निराकार ईश्वर की उपासना, चारों वेदों के ज्ञान, सामाजिक समानता, सर्वव्यापक शिक्षा और निःस्वार्थ सेवा की शिक्षा देता है।',
  },
  {
    q: 'Who founded Arya Samaj and what is Satyarth Prakash?',
    qHi: 'आर्य समाज के संस्थापक कौन थे और सत्यार्थ प्रकाश क्या है?',
    a: 'Maharshi Dayananda Saraswati (1824–1883) founded Arya Samaj on 10 April 1875 in Bombay. His seminal work, Satyarth Prakash ("The Light of Truth"), explains Vedic philosophy, social reform, education, and ethical governance.',
    aHi: 'महर्षि दयानंद सरस्वती (1824–1883) ने 10 अप्रैल 1875 को बंबई में आर्य समाज की स्थापना की। उनका प्रसिद्ध ग्रंथ "सत्यार्थ प्रकाश" वैदिक दर्शन, समाज सुधार और नैतिक जीवन का प्रकाश स्तंभ है।',
  },
  {
    q: 'What happens during an Agnihotra Havan?',
    qHi: 'दैनिक अग्निहोत्र हवन में क्या होता है?',
    a: 'Havan (Devayajna) is a peaceful Vedic fire ceremony where pure cow ghee and medicinal herbs (samagri) are offered into the sacred fire while chanting Rigveda and Yajurveda mantras, cultivating gratitude, clarity, and environmental purity.',
    aHi: 'हवन (देवयज्ञ) एक पावन वैदिक अनुष्ठान है जिसमें ऋग्वेद और यजुर्वेद के मंत्रों के साथ शुद्ध घी एवं औषधीय सामग्री की आहुति दी जाती है, जिससे मन, वातावरण और विचार शुद्ध होते हैं।',
  },
  {
    q: 'Can anyone visit or attend Arya Samaj Satsang?',
    qHi: 'क्या कोई भी व्यक्ति आर्य समाज के सत्संग में भाग ले सकता है?',
    a: 'Yes. Arya Samaj Mandirs welcome everyone without distinction of caste, birth, gender, or nationality. First-time visitors are warmly invited to attend daily Sandhya, Havan, or Sunday morning Satsang.',
    aHi: 'हाँ। आर्य समाज मंदिर बिना किसी जाति, जन्म, लिंग या भेदभाव के सभी का हार्दिक स्वागत करते हैं। आप दैनिक हवन या रविवार सत्संग में सपरिवार पधार सकते हैं।',
  },
  {
    q: 'How do I arrange a Vedic Sanskar or Vivah ceremony?',
    qHi: 'वैदिक संस्कार या विवाह कैसे संपन्न कराएं?',
    a: 'Use the "Arrange Ceremony" button in the Sanskars section above or contact the Sarvadeshik Arya Pratinidhi Sabha / your nearest Arya Samaj Mandir to coordinate Acharya availability, dates, and samagri.',
    aHi: 'ऊपर दिए गए "संस्कार बुक करें" बटन से पूछताछ भेजें या सार्वदेशिक आर्य प्रतिनिधि सभा / अपने निकटतम आर्य समाज मंदिर से संपर्क करें।',
  },
]

export function FaqSection() {
  const { lang } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="faq-section section-wrap" id="faq" aria-labelledby="faq-heading">
      <div className="faq-desk-layout">
        <aside className="faq-intro-card">
          <span className="faq-om" aria-hidden="true">
            ॐ
          </span>
          <p className="eyebrow">
            {lang === 'hi' ? 'जिज्ञासा एवं समाधान' : 'QUESTIONS & CLARITY'} <span />
          </p>
          <h2 id="faq-heading">
            {lang === 'hi' ? 'सामान्य' : 'Frequently asked'}{' '}
            <em>{lang === 'hi' ? 'प्रश्न।' : 'questions.'}</em>
          </h2>
          <p className="faq-intro-copy">
            {lang === 'hi'
              ? 'प्रथम बार पधारने वाले अतिथियों और परिवारों के लिए आवश्यक जानकारी।'
              : 'Helpful answers for first-time visitors, families, and anyone exploring the Vedic tradition.'}
          </p>
          <a href="#contact" className="btn btn-dark">
            {lang === 'hi' ? 'सभा से पूछें' : 'Contact the Sabha'}{' '}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </aside>

        <div className="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            const panelId = `faq-panel-${idx}`
            const btnId = `faq-btn-${idx}`
            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span>{lang === 'hi' ? item.qHi : item.q}</span>
                    <ChevronDown size={18} className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="faq-panel"
                  hidden={!isOpen}
                >
                  <p>{lang === 'hi' ? item.aHi : item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
