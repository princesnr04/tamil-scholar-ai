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
  sourceStatus: string;
}

const LITERATURE_ENTRIES: LiteratureEntry[] = [
  {
    id: 1,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.',
    tamilExplanation:
      'எழுத்துகளுக்கு அகரம் முதன்மையானது போல, உலகத்திற்கும் இறைவனே முதன்மையானவன்.',
    englishExplanation:
      'Just as the letter A is the beginning of all letters, the Divine is considered the beginning of the world.',
    themes: ['Ethics', 'Learning'],
    citation: 'திருக்குறள் 1',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 2,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'கற்றதனால் ஆய பயனென்கொல் வாலறிவன்\nநற்றாள் தொழாஅர் எனின்.',
    tamilExplanation:
      'அறிவில் சிறந்த இறைவனின் நல்ல பாதங்களை வணங்காவிட்டால், ஒருவர் கற்ற கல்வியால் என்ன பயன்?',
    englishExplanation:
      'Learning has little value if it does not lead a person toward wisdom and goodness.',
    themes: ['Learning', 'Ethics'],
    citation: 'திருக்குறள் 2',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 3,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்\nநிலமிசை நீடுவாழ் வார்.',
    tamilExplanation:
      'இறைவனின் சிறந்த பாதங்களை மனதில் கொண்டவர்கள் உலகில் நல்ல வாழ்வை வாழ்வார்கள்.',
    englishExplanation:
      'Those who follow the noble path of the Divine are said to live a meaningful and lasting life.',
    themes: ['Ethics'],
    citation: 'திருக்குறள் 3',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 4,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு\nயாண்டும் இடும்பை இல.',
    tamilExplanation:
      'விருப்பமும் வெறுப்பும் இல்லாத இறைவனின் பாதத்தைச் சேர்ந்தவர்களுக்கு துன்பம் குறையும்.',
    englishExplanation:
      'Those who follow a path free from excessive attachment and hatred can remain free from much suffering.',
    themes: ['Ethics'],
    citation: 'திருக்குறள் 4',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 5,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'இருள்சேர் இருவினையும் சேரா இறைவன்\nபொருள்சேர் புகழ்புரிந்தார் மாட்டு.',
    tamilExplanation:
      'இறைவனின் உண்மையான பெருமையைப் போற்றுபவர்களை அறியாமையும் தீய செயல்களின் விளைவுகளும் பாதிக்காது.',
    englishExplanation:
      'Those who follow true goodness are protected from the darkness caused by ignorance and harmful actions.',
    themes: ['Ethics'],
    citation: 'திருக்குறள் 5',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 6,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க\nநெறிநின்றார் நீடுவாழ் வார்.',
    tamilExplanation:
      'ஐம்புலன்களையும் கட்டுப்படுத்தி நல்ல ஒழுக்கத்தில் வாழ்பவர்கள் சிறந்த வாழ்க்கையைப் பெறுவார்கள்.',
    englishExplanation:
      'Those who control their senses and live by truthful conduct can lead a stable and meaningful life.',
    themes: ['Ethics'],
    citation: 'திருக்குறள் 6',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 7,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்\nமனக்கவலை மாற்றல் அரிது.',
    tamilExplanation:
      'ஒப்பற்ற இறைவனின் நல்ல வழியைப் பின்பற்றாமல் மனக்கவலைகளை முழுமையாக நீக்குவது கடினம்.',
    englishExplanation:
      'Following a higher and virtuous path can help a person overcome mental worries.',
    themes: ['Ethics'],
    citation: 'திருக்குறள் 7',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 8,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்\nபிறவாழி நீந்தல் அரிது.',
    tamilExplanation:
      'அறத்தின் பெருங்கடலைப் போன்ற இறைவனின் நல்ல பாதையைப் பின்பற்றாமல் வாழ்க்கையின் துன்பங்களை கடப்பது கடினம்.',
    englishExplanation:
      'A life guided by virtue helps a person cross the difficulties of life.',
    themes: ['Ethics'],
    citation: 'திருக்குறள் 8',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 9,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'கோளில் பொறியில் குணமிலவே எண்குணத்தான்\nதாளை வணங்காத் தலை.',
    tamilExplanation:
      'உயர்ந்த நற்குணங்களை மதிக்காத தலைமை அல்லது அறிவு பயனற்றதாகிவிடும்.',
    englishExplanation:
      'A person who does not respect higher virtues cannot make good use of knowledge or position.',
    themes: ['Ethics', 'Leadership'],
    citation: 'திருக்குறள் 9',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 10,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'கடவுள் வாழ்த்து',
    tamilText:
      'பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்\nஇறைவன் அடிசேரா தார்.',
    tamilExplanation:
      'நல்ல வழியைப் பின்பற்றுபவர்கள் வாழ்க்கையின் பெரிய துன்பங்களைக் கடக்க முடியும்.',
    englishExplanation:
      'Those who follow a virtuous path can cross the great difficulties of life.',
    themes: ['Ethics'],
    citation: 'திருக்குறள் 10',
    sourceStatus: 'Source: Project Madurai',
  },

  {
    id: 11,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'வான்நின்று உலகம் வழங்கி வருதலால்\nதான்அமிழ்தம் என்றுணரற் பாற்று.',
    tamilExplanation:
      'மழை உலகிற்கு வாழ்வையும் வளத்தையும் வழங்குவதால், அது அமுதம் போன்றது.',
    englishExplanation:
      'Rain gives life and prosperity to the world, so it can be thought of as nectar.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 11',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 12,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'துப்பார்க்குத் துப்பாய துப்பாக்கித் துப்பார்க்குத்\nதுப்பாய தூஉம் மழை.',
    tamilExplanation:
      'மழை உணவை விளைவிக்க உதவுவதுடன், குடிநீராகவும் பயன்படுகிறது.',
    englishExplanation:
      'Rain helps produce food and also provides water needed by living beings.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 12',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 13,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'விண்இன்று பொய்ப்பின் விரிநீர் வியனுலகத்து\nஉள்நின்று உடற்றும் பசி.',
    tamilExplanation:
      'மழை பெய்யாமல் போனால், பெரிய உலகத்திலேயே பசி மக்களைத் துன்புறுத்தும்.',
    englishExplanation:
      'If rain fails, hunger can spread throughout the world and cause great suffering.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 13',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 14,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'ஏரின் உழாஅர் உழவர் புயல்என்னும்\nவாரி வளங்குன்றிக் கால்.',
    tamilExplanation:
      'மழை எனப்படும் நீர்வளம் குறைந்தால், விவசாயிகள் நிலத்தை உழ முடியாது.',
    englishExplanation:
      'When rainfall decreases, farmers cannot properly cultivate their fields.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 14',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 15,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற் றாங்கே\nஎடுப்பதூஉம் எல்லாம் மழை.',
    tamilExplanation:
      'மழை இல்லாமல் உலகிற்கு அழிவை ஏற்படுத்தவும் முடியும்; மழை பெய்தால் உலகை வளப்படுத்தவும் முடியும்.',
    englishExplanation:
      'Rain can cause hardship when it fails, but it can also restore and support life when it comes.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 15',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 16,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'விசும்பின் துளிவீழின் அல்லால்மற் றாங்கே\nபசும்புல் தலைகாண்பு அரிது.',
    tamilExplanation:
      'வானிலிருந்து மழைத்துளி விழாமல் இருந்தால், பசும்புல் கூட வளர்வது அரிது.',
    englishExplanation:
      'Without rain from the sky, even green grass is difficult to grow.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 16',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 17,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'நெடுங்கடலும் தன்நீர்மை குன்றும் தடிந்தெழிலி\nதான்நல்கா தாகி விடின்.',
    tamilExplanation:
      'மேகங்கள் மழையை வழங்காமல் போனால், பெரிய கடலின் நீரளவும் குறையக்கூடும்.',
    englishExplanation:
      'If clouds stop giving rain, even the great ocean can lose some of its water through the natural cycle.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 17',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 18,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'சிறப்பொடு பூசனை செல்லாது வானம்\nவறக்குமேல் வானோர்க்கும் ஈண்டு.',
    tamilExplanation:
      'மழை இல்லாமல் போனால், உலகில் நடைபெறும் வழிபாடுகளும் சிறப்புகளும் பாதிக்கப்படும்.',
    englishExplanation:
      'When rain fails, even important social and religious activities are affected.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 18',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 19,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'தானம் தவம்இரண்டும் தங்கா வியன்உலகம்\nவானம் வழங்கா தெனின்.',
    tamilExplanation:
      'மழை இல்லாமல் போனால், தானம் மற்றும் தவம் போன்ற அறச்செயல்களும் நிலைத்திருக்க முடியாது.',
    englishExplanation:
      'Without rain, charitable and spiritual practices also become difficult to sustain.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 19',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 20,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    chapter: 'வான்சிறப்பு',
    tamilText:
      'நீர்இன்று அமையாது உலகெனின் யார்யார்க்கும்\nவான்இன்று அமையாது ஒழுக்கு.',
    tamilExplanation:
      'நீர் இல்லாமல் உலகம் இயங்க முடியாது; அதுபோல மழை இல்லாமல் உலக வாழ்க்கையின் ஒழுங்கும் நிலைக்காது.',
    englishExplanation:
      'The world cannot exist without water, and human life cannot function properly without rain.',
    themes: ['Ethics', 'மழை'],
    citation: 'திருக்குறள் 20',
    sourceStatus: 'Source: Project Madurai',
  },
];

const EXAMPLE_SEARCHES = [
  'Friendship',
  'Learning',
  'Ethics',
  'நட்பு',
  'கல்வி',
  'மழை',
  'குறள் 20',
];

const THEMES = [
  'All',
  'Ethics',
  'Friendship',
  'Learning',
  'Leadership',
  'Love',
  'மழை',
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('All');

  const filteredEntries = LITERATURE_ENTRIES.filter((entry) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      query === '' ||
      entry.tamilText.toLowerCase().includes(query) ||
      entry.tamilExplanation.toLowerCase().includes(query) ||
      entry.englishExplanation.toLowerCase().includes(query) ||
      entry.workTitle.toLowerCase().includes(query) ||
      entry.author.toLowerCase().includes(query) ||
      entry.category.toLowerCase().includes(query) ||
      entry.chapter.toLowerCase().includes(query) ||
      entry.citation.toLowerCase().includes(query) ||
      entry.id.toString() === query;

    const matchesTheme =
      selectedTheme === 'All' || entry.themes.includes(selectedTheme);

    return matchesSearch && matchesTheme;
  });

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedTheme('All');
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">TAMIL SCHOLAR AI</p>

          <h1>
            Explore Tamil
            <br />
            Literature
          </h1>

          <p className="hero-description">
            Search Tamil literary works and discover simple explanations,
            themes, and references.
          </p>

          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search in Tamil or English..."
              aria-label="Search Tamil literature"
            />

            <button onClick={clearSearch}>Clear</button>
          </div>

          <div className="example-searches">
            <span>Try:</span>

            {EXAMPLE_SEARCHES.map((example) => (
              <button
                key={example}
                onClick={() => setSearchQuery(example)}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="theme-section">
          <h2>Browse by theme</h2>

          <div className="theme-buttons">
            {THEMES.map((theme) => (
              <button
                key={theme}
                className={selectedTheme === theme ? 'active' : ''}
                onClick={() => setSelectedTheme(theme)}
              >
                {theme}
              </button>
            ))}
          </div>
        </section>

        <section className="results-section">
          <div className="results-header">
            <h2>Literature</h2>
            <span>{filteredEntries.length} result(s)</span>
          </div>

          {filteredEntries.length === 0 ? (
            <div className="no-results">
              <h3>No results found</h3>
              <p>
                Try another Tamil or English word, theme, or Kural number.
              </p>

              <button onClick={clearSearch}>Clear search</button>
            </div>
          ) : (
            <div className="literature-list">
              {filteredEntries.map((entry) => (
                <article className="literature-card" key={entry.id}>
                  <div className="card-top">
                    <div>
                      <p className="card-category">{entry.category}</p>
                      <h3>{entry.citation}</h3>
                    </div>

                    <span className="kural-number">
                      #{entry.id}
                    </span>
                  </div>

                  <div className="tamil-text">
                    {entry.tamilText.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>

                  <div className="explanation-grid">
                    <div>
                      <h4>தமிழ் விளக்கம்</h4>
                      <p>{entry.tamilExplanation}</p>
                    </div>

                    <div>
                      <h4>English Explanation</h4>
                      <p>{entry.englishExplanation}</p>
                    </div>
                  </div>

                  <div className="themes">
                    {entry.themes.map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setSelectedTheme(theme)}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>

                  <div className="reference">
                    <div>
                      <strong>Work:</strong> {entry.workTitle}
                    </div>

                    <div>
                      <strong>Author:</strong> {entry.author}
                    </div>

                    <div>
                      <strong>Chapter:</strong> {entry.chapter}
                    </div>

                    <div>
                      <strong>Reference:</strong> {entry.citation}
                    </div>
                  </div>

                  <p className="source-status">
                    {entry.sourceStatus}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="about-section">
          <h2>About Tamil Scholar AI</h2>

          <p>
            Tamil Scholar AI is a learning-focused project for exploring
            Tamil literature through searchable passages, simple
            explanations, and references.
          </p>

          <p>
            The first twenty Thirukkural verses in this version use the
            Unicode Tamil text from Project Madurai. The explanations are
            simplified learning explanations and should not be treated as
            authoritative scholarly translations.
          </p>

          <p>
            Source: Project Madurai — திருக்குறள் by திருவள்ளுவர்.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;