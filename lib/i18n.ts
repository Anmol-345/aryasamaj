'use client'

import { createContext, createElement, useContext, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'hi'

export const dictionary = {
  en: {
    brandName: 'Arya Samaj',
    brandTagline: 'TRUTH · KNOWLEDGE · SERVICE',
    skipToContent: 'Skip to content',
    nav: {
      about: 'About',
      live: 'Live',
      principles: 'Principles',
      services: 'Services',
      events: 'Events',
      donate: 'Donate',
      contact: 'Contact',
      visitUs: 'Visit us',
      liveBadge: 'Live',
    },
    hero: {
      eyebrow: 'A LIVING VEDIC TRADITION',
      shloka: 'कृण्वन्तो विश्वमार्यम् — Make the whole world noble',
      titleStart: 'Rediscover the',
      titleEm: 'light of truth.',
      copy: 'Guided by the timeless wisdom of the Vedas, we come together to cultivate truth, knowledge, compassion, and a life of purpose.',
      ctaLive: 'Watch Live Satsang',
      ctaMission: 'Explore our mission',
      nextLabel: 'NEXT HAVAN & SATSANG',
      joinLive: 'Join live',
    },
    live: {
      eyebrow: 'LIVE SATSANG & SCHEDULE',
      headingStart: 'Join the sacred gathering',
      headingEm: 'from anywhere.',
      aside: 'Stream daily Sandhya, Agnihotra Havan, and Sunday Vedic discourses.',
      offlineTitle: 'Live Stream Offline',
      offlineDesc:
        'Our daily live broadcast begins at 07:00 AM IST. Configure NEXT_PUBLIC_YOUTUBE_CHANNEL_ID to embed your live channel feed here.',
      scheduleTitle: 'Today’s Vedic Schedule',
      recordingsTitle: 'Recent Recordings',
      watchNow: 'Watch recording',
    },
    about: {
      eyebrow: 'OUR FOUNDATION',
      headingStart: 'A movement built on truth, knowledge &',
      headingEm: 'righteousness.',
      p1: 'Arya Samaj is a Vedic reform movement that calls people to return to the source: to seek truth, think clearly, and live with compassion. Its teachings place education, social responsibility, and the dignity of every human being at the heart of a meaningful life.',
      p2: 'Inspired by the Vedas, it encourages an honest, questioning spirit—one that meets tradition with reason and turns understanding into service.',
      noteTitle: 'Back to the Vedas',
      noteSub: 'A call to seek knowledge at its source.',
      cta: 'Discover our principles',
      caption: 'A path of inquiry, learning, and service',
      timelineTitle: 'Maharshi Dayanand Saraswati — Milestones',
    },
    principles: {
      eyebrow: 'A GUIDE FOR EVERYDAY LIVING',
      headingStart: 'Living by the',
      headingEm: 'principles of truth.',
      aside: 'Ten guiding principles inspire a life of knowledge, righteousness, compassion, and service. Select any card to read more.',
    },
    services: {
      eyebrow: 'PRACTICE & PARTICIPATION',
      headingStart: 'Traditions that give',
      headingEm: 'life meaning.',
      ctaTop: 'Enquire about a ceremony',
      enquire: 'Enquire now',
    },
    events: {
      eyebrow: 'UPCOMING GATHERINGS',
      headingStart: 'Events &',
      headingEm: 'Satsang calendar.',
      aside: 'Mark your calendar for upcoming Havan ceremonies, study circles, and seva drives.',
      addCalendar: 'Add to calendar',
    },
    community: {
      eyebrow: 'A PLACE TO BELONG',
      headingStart: 'Together in faith.',
      headingEm: 'United in service.',
      copy: 'Meaningful traditions are made stronger when shared. Find space here to learn, reflect, and contribute to the wellbeing of all.',
      cta: 'Explore our community',
    },
    donate: {
      eyebrow: 'SEVA & SUPPORT',
      headingStart: 'Support Vedic',
      headingEm: 'knowledge & seva.',
      aside: 'Every contribution sustains daily Havan, Gurukul education, and community welfare.',
      tiersTitle: 'Choose a Seva Offering',
      upiTitle: 'UPI & Direct Bank Transfer',
      upiNote: 'Placeholder QR — replace with your Mandir’s verified UPI QR code.',
      taxNote: 'Contributions may qualify for 80G tax exemption where applicable (confirm registration details with your local Arya Samaj trust).',
    },
    invitation: {
      eyebrow: 'A WELCOME, WITH OPEN ARMS',
      headingStart: 'Your journey towards truth',
      headingEm: 'begins here.',
      copy: 'Join us in embracing truth, knowledge, compassion, and a more meaningful life.',
      ctaPrimary: 'Plan a visit',
      ctaSecondary: 'Get in touch',
    },
    contact: {
      eyebrow: 'COME AS YOU ARE',
      headingStart: 'We’d be glad to welcome',
      headingEm: 'you.',
      intro: 'Founded on 10 April 1875 by Swami Dayananda Saraswati, Arya Samaj’s apex body—Sarvadeshik Arya Pratinidhi Sabha—is headquartered in New Delhi.',
      hq: 'HEADQUARTERS',
      phoneEmail: 'PHONE & EMAIL',
      hours: 'OFFICE HOURS',
      whatsapp: 'WhatsApp',
      callNow: 'Call now',
    },
    footer: {
      tagline1: 'A life guided by truth.',
      tagline2: 'A community devoted to all.',
      newsletterTitle: 'NEWSLETTER',
      newsletterDesc: 'Receive monthly Vedic reflections and event reminders.',
      newsletterPlaceholder: 'Your email address',
      newsletterBtn: 'Subscribe',
      newsletterSuccess: 'Thank you for subscribing.',
      backTop: 'Back to top ↑',
    },
  },
  hi: {
    brandName: 'आर्य समाज',
    brandTagline: 'सत्य · ज्ञान · सेवा',
    skipToContent: 'मुख्य सामग्री पर जाएं',
    nav: {
      about: 'परिचय',
      live: 'लाइव',
      principles: 'नियम',
      services: 'संस्कार',
      events: 'कार्यक्रम',
      donate: 'दान',
      contact: 'संपर्क',
      visitUs: 'पधारें',
      liveBadge: 'लाइव',
    },
    hero: {
      eyebrow: 'एक जीवंत वैदिक परंपरा',
      shloka: 'कृण्वन्तो विश्वमार्यम् — संपूर्ण विश्व को श्रेष्ठ बनाएं',
      titleStart: 'सत्य के प्रकाश को',
      titleEm: 'पुनः जानें।',
      copy: 'वेदों के शाश्वत ज्ञान से प्रेरित होकर, हम सत्य, ज्ञान, करुणा और उद्देश्यपूर्ण जीवन के लिए एकत्रित होते हैं।',
      ctaLive: 'लाइव सत्संग देखें',
      ctaMission: 'हमारा मिशन जानें',
      nextLabel: 'आगामी हवन एवं सत्संग',
      joinLive: 'लाइव जुड़ें',
    },
    live: {
      eyebrow: 'लाइव सत्संग एवं समय-सारणी',
      headingStart: 'पवित्र संगति से जुड़ें',
      headingEm: 'कहीं से भी।',
      aside: 'दैनिक संध्या, अग्निहोत्र हवन और रविवार के वैदिक प्रवचन देखें।',
      offlineTitle: 'लाइव प्रसारण अभी बंद है',
      offlineDesc:
        'दैनिक लाइव प्रसारण प्रातः 07:00 बजे शुरू होता है। अपने चैनल को जोड़ने के लिए NEXT_PUBLIC_YOUTUBE_CHANNEL_ID सेट करें।',
      scheduleTitle: 'आज की वैदिक समय-सारणी',
      recordingsTitle: 'हाल की रिकॉर्डिंग',
      watchNow: 'रिकॉर्डिंग देखें',
    },
    about: {
      eyebrow: 'हमारी नींव',
      headingStart: 'सत्य, ज्ञान और धर्म पर',
      headingEm: 'आधारित आंदोलन।',
      p1: 'आर्य समाज एक वैदिक सुधार आंदोलन है जो लोगों को मूल की ओर लौटने का आह्वान करता है: सत्य की खोज करें, स्पष्ट विचार करें और करुणा के साथ जिएं।',
      p2: 'वेदों से प्रेरित होकर यह तर्क, शिक्षा, सामाजिक समानता और निःस्वार्थ सेवा को जीवन के केंद्र में रखता है।',
      noteTitle: 'वेदों की ओर लौटो',
      noteSub: 'ज्ञान को उसके मूल स्रोत से जानने का आह्वान।',
      cta: 'हमारे दस नियम जानें',
      caption: 'जिज्ञासा, ज्ञान और सेवा का मार्ग',
      timelineTitle: 'महर्षि दयानंद सरस्वती — प्रमुख पड़ाव',
    },
    principles: {
      eyebrow: 'दैनिक जीवन का मार्गदर्शन',
      headingStart: 'सत्य के दस',
      headingEm: 'नियमों का पालन।',
      aside: 'आर्य समाज के दस नियम ज्ञान, धर्म, करुणा और सेवा का मार्ग दिखाते हैं। विस्तार देखने के लिए कार्ड चुनें।',
    },
    services: {
      eyebrow: 'अभ्यास एवं सहभागिता',
      headingStart: 'संस्कार जो जीवन को',
      headingEm: 'सार्थक बनाते हैं।',
      ctaTop: 'संस्कार के लिए पूछताछ करें',
      enquire: 'पूछताछ करें',
    },
    events: {
      eyebrow: 'आगामी आयोजन',
      headingStart: 'सत्संग एवं',
      headingEm: 'कार्यक्रम पंचांग।',
      aside: 'आगामी हवन, स्वाध्याय मंडल और सेवा अभियानों की तिथियां देखें।',
      addCalendar: 'कैलेंडर में जोड़ें',
    },
    community: {
      eyebrow: 'अपनापन और संगति',
      headingStart: 'श्रद्धा में एक।',
      headingEm: 'सेवा में समर्पित।',
      copy: 'जब परंपराएं साझा की जाती हैं तो वे और सुदृढ़ होती हैं। सीखने, चिंतन करने और सबके कल्याण में योगदान देने के लिए जुड़ें।',
      cta: 'समुदाय से जुड़ें',
    },
    donate: {
      eyebrow: 'सेवा एवं सहयोग',
      headingStart: 'वैदिक ज्ञान और',
      headingEm: 'सेवा में सहयोग करें।',
      aside: 'आपका प्रत्येक सहयोग दैनिक हवन, गुरुकुल शिक्षा और जनकल्याण कार्यों को संबल देता है।',
      tiersTitle: 'सेवा निधि चुनें',
      upiTitle: 'यूपीआई एवं बैंक विवरण',
      upiNote: 'प्लेसहोल्डर QR — अपने मंदिर का सत्यापित UPI QR कोड लगाएं।',
      taxNote: 'लागू होने पर दान 80G कर छूट के पात्र हो सकते हैं (स्थानीय न्यास से पुष्टि करें)।',
    },
    invitation: {
      eyebrow: 'हार्दिक स्वागत',
      headingStart: 'सत्य की ओर आपकी यात्रा',
      headingEm: 'यहीं से प्रारंभ होती है।',
      copy: 'सत्य, ज्ञान, करुणा और सार्थक जीवन को अपनाने में हमारे साथ जुड़ें।',
      ctaPrimary: 'आगमन की योजना बनाएं',
      ctaSecondary: 'संपर्क करें',
    },
    contact: {
      eyebrow: 'स्वागत है',
      headingStart: 'हम आपका स्वागत करने को',
      headingEm: 'तत्पर हैं।',
      intro: '10 अप्रैल 1875 को स्वामी दयानंद सरस्वती द्वारा स्थापित आर्य समाज की सर्वोच्च संस्था—सार्वदेशिक आर्य प्रतिनिधि सभा—नई दिल्ली में स्थित है।',
      hq: 'मुख्यालय',
      phoneEmail: 'दूरभाष एवं ईमेल',
      hours: 'कार्यालय समय',
      whatsapp: 'व्हाट्सएप',
      callNow: 'कॉल करें',
    },
    footer: {
      tagline1: 'सत्य से प्रेरित जीवन।',
      tagline2: 'सबके कल्याण को समर्पित समाज।',
      newsletterTitle: 'समाचार पत्र',
      newsletterDesc: 'मासिक वैदिक विचार और कार्यक्रम सूचनाएं प्राप्त करें।',
      newsletterPlaceholder: 'आपका ईमेल पता',
      newsletterBtn: 'सदस्यता लें',
      newsletterSuccess: 'सदस्यता के लिए धन्यवाद।',
      backTop: 'शीर्ष पर जाएं ↑',
    },
  },
} as const

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof dictionary)['en'] | (typeof dictionary)['hi']
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: dictionary.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return createElement(
    LanguageContext.Provider,
    { value: { lang, setLang, t: dictionary[lang] } },
    children,
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
