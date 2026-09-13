import { useState } from 'react';
import './App.css';

interface LiteratureEntry {
  id: number;
  workTitle: string;
  author: string;
  category: string;
  chapter: string;
  tamilText: string;
  tamilExplanation: string;
  englishExplanation: string;
  themes: string[];
  citation: string;
  sourceUrl: string;
  sourceStatus: string;
}

function copyCitation(entry: LiteratureEntry) {
  const citation = `${entry.workTitle} — ${entry.citation} — Project Madurai`;
  navigator.clipboard.writeText(citation);
}

// Tamil verse text for Kurals 1-20 is copied exactly, character-for-character,
// from Project Madurai's Unicode Thirukkural edition:
// https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html
// Chapter 1 (Kurals 1-10): கடவுள் வாழ்த்து
// Chapter 2 (Kurals 11-20): வான்சிறப்பு
//
// IMPORTANT: Only the Tamil verse (tamilText) has been verified against
// Project Madurai. The Tamil/English explanations below are AI-drafted
// for this app and have NOT been reviewed by a Tamil literature expert.
// They must be checked before publishing, same as any other content here.
const LITERATURE_ENTRIES: LiteratureEntry[] = [
  {
    id: 1,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.',
    tamilExplanation: '[AI DRAFT — verify] "அ" என்ற எழுத்து எழுத்துக்களுக்கு முதலாக இருப்பதுபோல, கடவுள் இவ்வுலகிற்கு முதலாக இருக்கிறார் என்பது இக்குறளின் கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Just as the letter "A" is the first of all letters, God is the first cause of the world.',
    themes: ['Ethics', 'கடவுள்'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 1',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 2,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'கற்றதனால் ஆய பயனென்கொல் வாலறிவன்\nநற்றாள் தொழாஅர் எனின்.',
    tamilExplanation: '[AI DRAFT — verify] தூய அறிவுடைய கடவுளின் திருவடிகளை வணங்காதவர்க்குக் கற்ற கல்வியால் என்ன பயன் விளையும் என்று கேட்கும் குறள்.',
    englishExplanation: '[AI DRAFT — verify] What use is all the learning of one who does not worship the good feet of the Lord of pure wisdom?',
    themes: ['Learning', 'கல்வி'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 2',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 3,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்\nநிலமிசை நீடுவாழ் வார்.',
    tamilExplanation: '[AI DRAFT — verify] மலர் மேல் நடந்தான் எனப்படும் கடவுளின் சிறந்த திருவடிகளை அடைந்தவர்கள் இப்பூமியில் நீண்ட காலம் புகழுடன் வாழ்வார்கள்.',
    englishExplanation: '[AI DRAFT — verify] Those who reach the great feet of the One who moves on the lotus flower will live long and honored on this earth.',
    themes: ['Ethics'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 3',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 4,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு\nயாண்டும் இடும்பை இல.',
    tamilExplanation: '[AI DRAFT — verify] விருப்பு வெறுப்பு இல்லாத கடவுளின் திருவடிகளை அடைந்தவர்களுக்கு எப்போதும் துன்பம் இல்லை என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Those who reach the feet of the One who is free of desire and aversion will never know sorrow.',
    themes: ['Ethics'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 4',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 5,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'இருள்சேர் இருவினையும் சேரா இறைவன்\nபொருள்சேர் புகழ்புரிந்தார் மாட்டு.',
    tamilExplanation: '[AI DRAFT — verify] கடவுளின் மேன்மையான புகழை விரும்பி நிற்பவரிடம் நல்வினை தீவினை என்னும் இருவினைகளும் அணுகா என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] The dark twin karmas (good and bad deeds) will not touch those devoted to the true praise of God.',
    themes: ['Ethics'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 5',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 6,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க\nநெறிநின்றார் நீடுவாழ் வார்.',
    tamilExplanation: '[AI DRAFT — verify] ஐம்பொறிகளையும் அடக்கிய கடவுளின் பொய்யற்ற நல்வழியில் நிற்பவர் நெடுங்காலம் வாழ்வர் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Those who follow the flawless path of the One who conquered the five senses will live long, honored lives.',
    themes: ['Ethics', 'Learning'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 6',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 7,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்\nமனக்கவலை மாற்றல் அரிது.',
    tamilExplanation: '[AI DRAFT — verify] ஒப்பற்ற கடவுளின் திருவடிகளை அடைந்தவர்களைத் தவிர மற்றவர்க்கு மனக் கவலையை நீக்குவது கடினம் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Only those who reach the feet of the incomparable One can truly remove the worries of the mind.',
    themes: ['Ethics'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 7',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 8,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்\nபிறவாழி நீந்தல் அரிது.',
    tamilExplanation: '[AI DRAFT — verify] அறக்கடலாகிய கடவுளின் திருவடிகளை அடையாதவர்க்குப் பிறவிக் கடலைக் கடத்தல் கடினம் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Only those who reach the feet of the righteous One, an ocean of virtue, can cross the other ocean — the cycle of rebirth.',
    themes: ['Ethics', 'Learning'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 8',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 9,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'கோளில் பொறியின் குணமிலவே எண்குணத்தான்\nதாளை வணங்காத் தலை.',
    tamilExplanation: '[AI DRAFT — verify] எட்டு நற்குணங்களை உடைய கடவுளின் திருவடிகளை வணங்காதவரின் தலை, செயலற்ற பொறிகளைப் போல பயனற்றது என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] A head that does not bow to the eight-fold-virtued Lord is as useless as a sense organ that cannot perceive.',
    themes: ['Ethics'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 9',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 10,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText: 'பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்\nஇறைவன் அடிசேரா தார்.',
    tamilExplanation: '[AI DRAFT — verify] கடவுளின் திருவடிகளை அடைந்தவர் பிறவியாகிய பெருங்கடலைக் கடப்பர்; அடையாதவர் கடக்க மாட்டார் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Those who reach the feet of the Lord will cross the great ocean of rebirth; those who do not, will not.',
    themes: ['Ethics'],
    citation: 'திருக்குறள், அதிகாரம் 1, குறள் 10',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Tamil text verified — Project Madurai. Explanations unverified — check before publishing.',
  },
  {
    id: 11,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'வான்நின்று உலகம் வழங்கி வருதலால்\nதான்அமிழ்தம் என்றுணரற் பாற்று.',
    tamilExplanation: '[AI DRAFT — verify] மழையே உலகத்தை நிலைநிறுத்தி வழங்கி வருவதால், மழையை அமிழ்தமாகவே கருத வேண்டும் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Since rain sustains the world by its constant giving, it should be regarded as nectar (life-giving ambrosia).',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 11',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 12,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'துப்பார்க்குத் துப்பாய துப்பாக்கித் துப்பார்க்குத்\nதுப்பாய தூஉம் மழை.',
    tamilExplanation: '[AI DRAFT — verify] உண்பவர்க்கு உணவாகும் பொருள்களை விளைவித்துத் தானும் உணவாகி நிற்பது மழை என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Rain produces the food that people eat, and rain itself becomes a kind of nourishment as well.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 12',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 13,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'விண்இன்று பொய்ப்பின் விரிநீர் வியனுலகத்து\nஉள்நின்று உடற்றும் பசி.',
    tamilExplanation: '[AI DRAFT — verify] மழை பெய்யாமல் வானம் தவறினால், கடல் சூழ்ந்த பரந்த உலகத்திலும் பசி துன்புறுத்தும் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] If the sky fails to give rain, hunger will torment the whole wide world, even one surrounded by seas.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 13',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 14,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'ஏரின் உழாஅர் உழவர் புயல்என்னும்\nவாரி வளங்குன்றிக் கால்.',
    tamilExplanation: '[AI DRAFT — verify] மழையாகிய வருவாய் வளம் குறைந்துவிட்டால், உழவர் ஏர் கொண்டு நிலத்தை உழமாட்டார்கள் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] When the abundance that comes from rain declines, farmers will no longer plough the land with their ploughs.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 14',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 15,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற் றாங்கே\nஎடுப்பதூஉம் எல்லாம் மழை.',
    tamilExplanation: '[AI DRAFT — verify] உலகை அழிப்பதும், அழிந்தவர்க்குப் பிறகு மீண்டும் துணையாக நின்று உயர்த்துவதும் எல்லாம் மழையே என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] It is rain that both destroys (through excess or absence) and later restores and uplifts those who were ruined.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 15',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 16,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'விசும்பின் துளிவீழின் அல்லால்மற் றாங்கே\nபசும்புல் தலைகாண்பு அரிது.',
    tamilExplanation: '[AI DRAFT — verify] வானத்திலிருந்து மழைத்துளி விழுந்தால் அல்லாமல், பசும்புல் தலை காண்பது கூடக் கடினம் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Unless raindrops fall from the sky, it would be hard even to see a single blade of green grass.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 16',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 17,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'நெடுங்கடலும் தன்நீர்மை குன்றும் தடிந்தெழிலி\nதான்நல்கா தாகி விடின்.',
    tamilExplanation: '[AI DRAFT — verify] மேகம் நீரைத் தடுத்து மழையாகக் கொடுக்காமல் போனால், பெரிய கடல்கூட தன் நீர்மையிலிருந்து குறையும் என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Even the vast ocean will diminish in its nature if the clouds withhold their rain and give nothing back.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 17',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 18,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'சிறப்பொடு பூசனை செல்லாது வானம்\nவறக்குமேல் வானோர்க்கும் ஈண்டு.',
    tamilExplanation: '[AI DRAFT — verify] மழை பெய்யாமல் வானம் வறண்டுவிட்டால், இங்கே வானோர்க்குரிய சிறப்பான வழிபாடுகளும் நடைபெறாது என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] If the sky becomes barren without rain, even the special rites and offerings to the gods here will cease.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 18',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 19,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'தானம் தவம்இரண்டும் தங்கா வியன்உலகம்\nவானம் வழங்கா தெனின்.',
    tamilExplanation: '[AI DRAFT — verify] மழை பொழியாவிட்டால், அகன்ற இவ்வுலகில் தானமும் தவமும் என்னும் இரண்டும் நிலைத்து நிற்காது என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] If the sky does not give rain, neither charity nor penance can endure in this vast world.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 19',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 20,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText: 'நீர்இன்று அமையாது உலகெனின் யார்யார்க்கும்\nவான்இன்று அமையாது ஒழுக்கு.',
    tamilExplanation: '[AI DRAFT — verify] நீர் இல்லாமல் உலகம் இயங்காது என்றால், மழை இல்லாமல் யாருடைய நல்லொழுக்கமும் நிலைத்து நிற்காது என்பது கருத்து.',
    englishExplanation: '[AI DRAFT — verify] Just as the world cannot function without water, no one\'s virtuous conduct can endure without rain.',
    themes: ['Ethics', 'மழை'],
    citation: 'வான்சிறப்பு — குறள் 20',
    sourceUrl: 'https://www.projectmadurai.org/pm_etexts/utf8/pmuni0001.html',
    sourceStatus: 'Source: Project Madurai',
  },
];

const EXAMPLE_SEARCHES = ['Friendship', 'Learning', 'Ethics', 'நட்பு', 'கல்வி'];
const THEMES = ['Ethics', 'Friendship', 'Learning', 'Leadership', 'Love'];

function App() {
  const [query, setQuery] = useState('');
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResults = LITERATURE_ENTRIES.filter((entry) => {
    const matchesQuery =
      normalizedQuery === '' ||
      entry.tamilText.toLowerCase().includes(normalizedQuery) ||
      entry.tamilExplanation.toLowerCase().includes(normalizedQuery) ||
      entry.englishExplanation.toLowerCase().includes(normalizedQuery) ||
      entry.workTitle.toLowerCase().includes(normalizedQuery) ||
      entry.author.toLowerCase().includes(normalizedQuery) ||
      entry.category.toLowerCase().includes(normalizedQuery) ||
      entry.chapter.toLowerCase().includes(normalizedQuery) ||
      entry.themes.some((t) => t.toLowerCase().includes(normalizedQuery));

    const matchesTheme =
      activeTheme === null || entry.themes.includes(activeTheme);

    return matchesQuery && matchesTheme;
  });

  const handleExampleClick = (term: string) => {
    setQuery(term);
  };

  const handleThemeClick = (theme: string) => {
    setActiveTheme((prev) => (prev === theme ? null : theme));
  };

  const handleClear = () => {
    setQuery('');
    setActiveTheme(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Tamil Scholar AI</h1>
        <p className="subtitle">
          Discover Classical Tamil literature with trusted sources.
        </p>
      </header>

      <section className="search-section">
        <input
          type="text"
          className="search-box"
          placeholder="Search in Tamil or English..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="button-group">
          <span className="group-label">Example searches:</span>
          <div className="button-row">
            {EXAMPLE_SEARCHES.map((term) => (
              <button
                key={term}
                className="pill-button"
                onClick={() => handleExampleClick(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="button-group">
          <span className="group-label">Themes:</span>
          <div className="button-row">
            {THEMES.map((theme) => (
              <button
                key={theme}
                className={
                  activeTheme === theme
                    ? 'pill-button pill-button-active'
                    : 'pill-button'
                }
                onClick={() => handleThemeClick(theme)}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {(query !== '' || activeTheme !== null) && (
          <button className="clear-button" onClick={handleClear}>
            Clear search and filters
          </button>
        )}
      </section>

      <section className="results-section">
        {filteredResults.length === 0 ? (
          <p className="no-results">No results found. Try a different search term or theme.</p>
        ) : (
          <div className="results-list">
            {filteredResults.map((entry) => (
              <article key={entry.id} className="result-card">
                <p className="tamil-text">
                  {entry.tamilText.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>

                <div className="explanation-block">
                  <h3>Tamil Explanation</h3>
                  <p>{entry.tamilExplanation}</p>
                </div>

                <div className="explanation-block">
                  <h3>English Explanation</h3>
                  <p>{entry.englishExplanation}</p>
                </div>

                <div className="tags-row">
                  {entry.themes.map((theme) => (
                    <span key={theme} className="theme-tag">
                      {theme}
                    </span>
                  ))}
                </div>

                <div className="meta-row">
  <span><strong>Work:</strong> {entry.workTitle}</span>

  <span><strong>Author:</strong> {entry.author}</span>

  <span><strong>Category:</strong> {entry.category}</span>

  <span><strong>Chapter:</strong> {entry.chapter}</span>

  <span><strong>Reference:</strong> {entry.citation}</span>

  <span>
    <strong>Source:</strong>{" "}
    <a
      href={entry.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="source-link"
    >
      View Project Madurai
    </a>
  </span>
</div>

<p className="source-link-container">
  <a
    href={entry.sourceUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="source-link"
  >
    View Project Madurai
  </a>
</p>

<button
  type="button"
  className="copy-citation-button"
  onClick={() => copyCitation(entry)}
>
  Copy Citation
</button>

<div className="source-status">
  {entry.sourceStatus}
</div>

                
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="about-section">
        <h2>About</h2>
        <p>
          Tamil Scholar AI currently displays the first twenty verses of the
          Thirukkural — Chapter 1, கடவுள் வாழ்த்து (Kurals 1–10), and Chapter 2,
          வான்சிறப்பு (Kurals 11–20). The original Tamil verse text for each
          entry has been copied exactly from Project Madurai's Unicode
          Thirukkural edition.
        </p>
        <p>
          The Tamil and English explanations shown alongside each verse were
          drafted for this app and have not yet been reviewed by a Tamil
          literature expert. Every citation, verse, translation, and
          explanation on this page must be checked against a trusted,
          authoritative source before this content is published or relied
          upon in any way.
        </p>
      </section>
    </div>
  );
}

export default App;