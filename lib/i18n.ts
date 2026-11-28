'use client'

import { createContext, createElement, useContext, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'hi'

export const dictionary = {
  en: {
    brandName: 'Arya Samaj',
    brandTagline: 'KRINVANTO VISHWAM ARYAM · EST. 1875',
    skipToContent: 'Skip to content',
    nav: {
      about: 'Heritage',
      live: 'Live & Schedule',
      principles: 'Das Niyam',
      services: 'Sanskars',
      events: 'Festivals',
      contact: 'Visit',
      visitUs: 'Plan a Visit',
      liveBadge: 'Live',
    },
    hero: {
      eyebrow: 'VEDIC DHARMA · SOCIAL REFORM · SEVA',
      shloka: 'कृण्वन्तो विश्वमार्यम् — Make the whole world noble (Rig Veda 9.63.5)',
      titleStart: 'Awaken to the',
      titleEm: 'eternal Vedic light.',
      copy: 'Rooted in the revelations of the four Vedas and the vision of Maharshi Dayananda Saraswati, Arya Samaj unites rational inquiry, sacred Agnihotra, and selfless service to humanity.',
      ctaLive: 'Join Daily Satsang',
      ctaMission: 'Explore Our Heritage',
      nextLabel: 'NEXT HAVAN & SATSANG',
      joinLive: 'Join live',
    },
    live: {
      eyebrow: 'DAILY UPASANA & PRAVACHAN',
      headingStart: 'Sacred Sandhya & Havan,',
      headingEm: 'live from the Mandir.',
      aside: 'Participate in morning Agnihotra, Vedic mantra chanting, and discourses on Satyarth Prakash from anywhere.',
      offlineTitle: 'Mandir Broadcast Standby',
      offlineDesc:
        'Daily Agnihotra Havan streams at 07:00 AM IST. Configure NEXT_PUBLIC_YOUTUBE_CHANNEL_ID to embed your Mandir’s live feed, or watch our official channel recordings below.',
      scheduleTitle: 'Daily Panch Mahayajna & Satsang',
      recordingsTitle: 'Vedic Discourses & Havan Recordings',
      watchNow: 'Watch on YouTube',
    },
    about: {
      eyebrow: 'OUR VEDIC HERITAGE',
      headingStart: 'A renaissance of truth,',
      headingEm: 'reason & universal dignity.',
      p1: 'Founded in Bombay on 10 April 1875 by Maharshi Dayananda Saraswati, Arya Samaj called India back to the pure, monotheistic wisdom of the Vedas—rejecting superstition, caste hierarchy, and blind dogma.',
      p2: 'Through Gurukuls, DAV institutions, women’s education, and the sixteen Vedic Sanskars, the movement transforms spiritual clarity into civic duty and compassionate service.',
      noteTitle: 'Vedon Ki Or Lauton — Back to the Vedas',
      noteSub: 'Guided by Satyarth Prakash and the Ten Principles (Das Niyam).',
      cta: 'Read the Ten Principles',
      caption: 'Sacred Agnihotra in the Arya Samaj Hawan Kaksh',
      timelineTitle: 'Maharshi Dayananda Saraswati — Life & Legacy',
    },
    principles: {
      eyebrow: 'DAS NIYAM · THE TEN PRINCIPLES',
      headingStart: 'Ten timeless vows for',
      headingEm: 'noble living.',
      aside: 'Formulated in 1875 as a universal ethical charter. Select any principle to explore its deeper Vedic meaning.',
    },
    services: {
      eyebrow: 'VEDIC SANSKARS & VIDYA',
      headingStart: 'Sacred rites with',
      headingEm: 'clarity and purpose.',
      ctaTop: 'Request a Ceremony',
      enquire: 'Arrange Ceremony',
    },
    events: {
      eyebrow: 'UTSAV & VEDIC CALENDAR',
      headingStart: 'Upcoming Mandirs,',
      headingEm: 'festivals & seva.',
      aside: 'Join upcoming Mahayajnas, Rishi Bodh Diwas observances, Ved Prachar gatherings, and community seva.',
      addCalendar: 'Add to calendar',
    },
    community: {
      eyebrow: 'SANGAT & GURUKUL',
      headingStart: 'Rooted in Vidya.',
      headingEm: 'Devoted to Lok-Kalyan.',
      copy: 'From morning Yajna circles to Gurukul classrooms and relief drives, our community grows together through learning, humility, and shared responsibility.',
      cta: 'Connect with our Sabha',
    },
    invitation: {
      eyebrow: 'ATITHI DEVO BHAVA · ALL ARE WELCOME',
      headingStart: 'Walk the path of',
      headingEm: 'Dharma & Vidya.',
      copy: 'Every Arya Samaj Mandir opens its doors without distinction of caste, creed, or background. Join us for Sunday Havan, Vedic study, and fellowship.',
      ctaPrimary: 'Plan Your Visit',
      ctaSecondary: 'Contact the Sabha',
    },
    contact: {
      eyebrow: 'SARVADESHIK ARYA PRATINIDHI SABHA',
      headingStart: 'Visit the central',
      headingEm: 'Mandir & Sabha.',
      intro: 'Connect with the apex international body of Arya Samaj at Maharishi Dayanand Bhawan, New Delhi, or locate your nearest local Arya Samaj Mandir.',
      hq: 'CENTRAL HEADQUARTERS',
      phoneEmail: 'TELEPHONE & EMAIL',
      hours: 'OFFICE HOURS',
      whatsapp: 'WhatsApp',
      callNow: 'Call Office',
    },
    footer: {
      tagline1: 'Truth above all.',
      tagline2: 'Knowledge & service for every soul.',
      newsletterTitle: 'VEDIC PATRIKA',
      newsletterDesc: 'Receive monthly Vedic reflections, festival dates, and Satsang updates.',
      newsletterPlaceholder: 'Enter your email address',
      newsletterBtn: 'Subscribe',
      newsletterSuccess: 'Namaste! You are subscribed to updates.',
      backTop: 'Back to top ↑',
    },
  },
  hi: {
    brandName: 'आर्य समाज',
    brandTagline: 'कृण्वन्तो विश्वमार्यम् · स्था. १८७५',
    skipToContent: 'मुख्य सामग्री पर जाएं',
    nav: {
      about: 'विरासत',
      live: 'लाइव एवं समय',
      principles: 'दस नियम',
      services: 'संस्कार',
      events: 'उत्सव',
      contact: 'संपर्क',
      visitUs: 'पधारें',
      liveBadge: 'लाइव',
    },
    hero: {
      eyebrow: 'वैदिक धर्म · समाज सुधार · सेवा',
      shloka: 'कृण्वन्तो विश्वमार्यम् — संपूर्ण विश्व को श्रेष्ठ बनाएं (ऋग्वेद ९.६३.५)',
      titleStart: 'शाश्वत वैदिक',
      titleEm: 'प्रकाश से जुड़ें।',
      copy: 'चारों वेदों के ज्ञान और महर्षि दयानंद सरस्वती की दूरदृष्टि से प्रेरित, आर्य समाज विवेक, पवित्र अग्निहोत्र और मानव सेवा का संगम है।',
      ctaLive: 'दैनिक सत्संग से जुड़ें',
      ctaMission: 'हमारी विरासत जानें',
      nextLabel: 'आगामी हवन एवं सत्संग',
      joinLive: 'लाइव जुड़ें',
    },
    live: {
      eyebrow: 'दैनिक उपासना एवं प्रवचन',
      headingStart: 'पवित्र संध्या एवं हवन,',
      headingEm: 'मंदिर से सीधा प्रसारण।',
      aside: 'कहीं से भी प्रातःकालीन अग्निहोत्र, वैदिक मंत्रोच्चार और सत्यार्थ प्रकाश प्रवचन में सहभागी बनें।',
      offlineTitle: 'प्रसारण प्रतीक्षारत',
      offlineDesc:
        'दैनिक अग्निहोत्र हवन प्रातः 07:00 बजे प्रारंभ होता है। लाइव स्ट्रीम जोड़ने के लिए NEXT_PUBLIC_YOUTUBE_CHANNEL_ID सेट करें या नीचे रिकॉर्डिंग देखें।',
      scheduleTitle: 'दैनिक पंचमहायज्ञ एवं सत्संग',
      recordingsTitle: 'वैदिक प्रवचन एवं हवन रिकॉर्डिंग',
      watchNow: 'यूट्यूब पर देखें',
    },
    about: {
      eyebrow: 'हमारी वैदिक विरासत',
      headingStart: 'सत्य, विवेक और',
      headingEm: 'सार्वभौमिक गरिमा का नवजागरण।',
      p1: '10 अप्रैल 1875 को महर्षि दयानंद सरस्वती द्वारा बंबई में स्थापित आर्य समाज ने अंधविश्वास, जातिगत भेदभाव और पाखंड को अस्वीकार कर वेदों के विशुद्ध ज्ञान की ओर लौटने का आह्वान किया।',
      p2: 'गुरुकुलों, डी.ए.वी. शिक्षण संस्थानों, स्त्री-शिक्षा और सोलह वैदिक संस्कारों के माध्यम से यह आंदोलन आध्यात्मिक बोध को लोक-कल्याण में बदलता है।',
      noteTitle: 'वेदों की ओर लौटो',
      noteSub: 'सत्यार्थ प्रकाश और दस नियमों द्वारा आलोकित जीवन।',
      cta: 'दस नियम पढ़ें',
      caption: 'आर्य समाज मंदिर के हवन कक्ष में पवित्र अग्निहोत्र',
      timelineTitle: 'महर्षि दयानंद सरस्वती — जीवन एवं योगदान',
    },
    principles: {
      eyebrow: 'आर्य समाज के दस नियम',
      headingStart: 'श्रेष्ठ जीवन के',
      headingEm: 'दस शाश्वत सूत्र।',
      aside: '1875 में स्थापित सार्वभौमिक आचार संहिता। प्रत्येक नियम का विस्तृत भाव पढ़ने के लिए कार्ड चुनें।',
    },
    services: {
      eyebrow: 'वैदिक संस्कार एवं विद्या',
      headingStart: 'अर्थपूर्ण एवं पावन',
      headingEm: 'वैदिक संस्कार।',
      ctaTop: 'संस्कार हेतु संपर्क करें',
      enquire: 'संस्कार बुक करें',
    },
    events: {
      eyebrow: 'उत्सव एवं वैदिक पंचांग',
      headingStart: 'आगामी महायज्ञ,',
      headingEm: 'पर्व एवं सेवा कार्य।',
      aside: 'आगामी ऋषि बोध दिवस, वेद प्रचार सप्ताह और सामुदायिक सेवा अभियानों की तिथियां देखें।',
      addCalendar: 'कैलेंडर में जोड़ें',
    },
    community: {
      eyebrow: 'संगत एवं गुरुकुल',
      headingStart: 'विद्या में निहित।',
      headingEm: 'लोक-कल्याण को समर्पित।',
      copy: 'प्रातःकालीन यज्ञ से लेकर गुरुकुल अध्ययन और सेवा अभियानों तक, हमारा समाज ज्ञान, विनम्रता और सहयोग से आगे बढ़ता है।',
      cta: 'सभा से जुड़ें',
    },
    invitation: {
      eyebrow: 'अतिथि देवो भव · सबका स्वागत है',
      headingStart: 'धर्म और विद्या के',
      headingEm: 'पथ पर चलें।',
      copy: 'प्रत्येक आर्य समाज मंदिर बिना किसी भेदभाव के सभी का स्वागत करता है। रविवार हवन, स्वाध्याय और सत्संग में पधारें।',
      ctaPrimary: 'आगमन की योजना बनाएं',
      ctaSecondary: 'सभा से संपर्क करें',
    },
    contact: {
      eyebrow: 'सार्वदेशिक आर्य प्रतिनिधि सभा',
      headingStart: 'केंद्रीय मंदिर एवं',
      headingEm: 'सभा में पधारें।',
      intro: 'महर्षि दयानंद भवन, नई दिल्ली स्थित आर्य समाज की सर्वोच्च संस्था से जुड़ें या अपने निकटतम आर्य समाज मंदिर की जानकारी प्राप्त करें।',
      hq: 'केंद्रीय मुख्यालय',
      phoneEmail: 'दूरभाष एवं ईमेल',
      hours: 'कार्यालय समय',
      whatsapp: 'व्हाट्सएप',
      callNow: 'कॉल करें',
    },
    footer: {
      tagline1: 'सत्य ही सर्वोपरि है।',
      tagline2: 'प्रत्येक प्राणी के लिए ज्ञान और सेवा।',
      newsletterTitle: 'वैदिक पत्रिका',
      newsletterDesc: 'मासिक वैदिक विचार, पर्व तिथियां और सत्संग सूचनाएं प्राप्त करें।',
      newsletterPlaceholder: 'अपना ईमेल लिखें',
      newsletterBtn: 'जुड़ें',
      newsletterSuccess: 'नमस्ते! आप सूचनाओं के लिए पंजीकृत हो गए हैं।',
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
