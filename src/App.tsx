import { useState } from 'react';

interface LiteratureEntry {
  id: number;
  workTitle: string;
  author: string;
  category: string;
  tamilText: string;
  tamilExplanation: string;
  englishExplanation: string;
  themes: string[];
  citation: string;
  sourceStatus: string;
}

const DEMO_ENTRIES: LiteratureEntry[] = [
  {
    id: 1,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.',
    tamilExplanation:
      'எழுத்துக்களுக்கு “அ” எப்படி முதலாக இருக்கிறதோ, அதுபோல் உலகிற்கு ஆதிபகவன் முதன்மையானவர் என்று குறள் கூறுகிறது.',
    englishExplanation:
      'Just as the letter “A” is the beginning of all letters, the Supreme Being is considered the beginning of the world.',
    themes: ['Ethics', 'அறம்', 'Spirituality'],
    citation: 'கடவுள் வாழ்த்து — குறள் 1',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 2,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'கற்றதனால் ஆய பயனென்கொல் வாலறிவன்\nநற்றாள் தொழாஅர் எனின்.',
    tamilExplanation:
      'மிகுந்த அறிவுடைய இறைவனின் நல்ல திருவடிகளை வணங்காவிட்டால், ஒருவர் கற்ற கல்வியால் என்ன பயன் என்று வள்ளுவர் கேட்கிறார்.',
    englishExplanation:
      'Learning has little value if a person does not recognize and respect the feet of the wise and supreme source of knowledge.',
    themes: ['Learning', 'கல்வி', 'Spirituality'],
    citation: 'கடவுள் வாழ்த்து — குறள் 2',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 3,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்\nநிலமிசை நீடுவாழ் வார்.',
    tamilExplanation:
      'மலரின் மேல் வீற்றிருக்கும் இறைவனின் சிறந்த திருவடிகளைச் சார்ந்தவர்கள் உலகில் நீண்ட சிறப்பான வாழ்வு வாழ்வார்கள்.',
    englishExplanation:
      'Those who follow the noble feet of the divine one will live a long and meaningful life in this world.',
    themes: ['Spirituality', 'Virtue', 'அறம்'],
    citation: 'கடவுள் வாழ்த்து — குறள் 3',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 4,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு\nயாண்டும் இடும்பை இல.',
    tamilExplanation:
      'விருப்பமும் வெறுப்பும் இல்லாத இறைவனின் திருவடிகளைச் சார்ந்தவர்களுக்கு எந்தக் காலத்திலும் துன்பம் இல்லை.',
    englishExplanation:
      'Those who follow the feet of the one who is beyond desire and dislike are protected from suffering.',
    themes: ['Spirituality', 'Peace', 'அறம்'],
    citation: 'கடவுள் வாழ்த்து — குறள் 4',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 5,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'இருள்சேர் இருவினையும் சேரா இறைவன்\nபொருள்சேர் புகழ்புரிந்தார் மாட்டு.',
    tamilExplanation:
      'இறைவனின் உண்மையான புகழை போற்றுகிறவர்களை அறியாமையால் ஏற்படும் நல்வினை, தீவினை ஆகிய இருவகை வினைகளும் பற்றாது.',
    englishExplanation:
      'Those who truly praise the divine are freed from the effects of the two kinds of actions associated with ignorance.',
    themes: ['Spirituality', 'Virtue', 'அறம்'],
    citation: 'கடவுள் வாழ்த்து — குறள் 5',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 6,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க\nநெறிநின்றார் நீடுவாழ் வார்.',
    tamilExplanation:
      'ஐம்புலன்களையும் கட்டுப்படுத்திய இறைவனைப் போற்றி, பொய்யற்ற ஒழுக்க நெறியில் வாழ்பவர்கள் சிறப்புடன் நீண்ட காலம் வாழ்வார்கள்.',
    englishExplanation:
      'Those who follow a truthful and disciplined way of life, controlling their five senses, will live with lasting goodness.',
    themes: ['Discipline', 'ஒழுக்கம்', 'Virtue'],
    citation: 'கடவுள் வாழ்த்து — குறள் 6',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 7,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்\nமனக்கவலை மாற்றல் அரிது.',
    tamilExplanation:
      'தனக்கு இணையானவர் இல்லாத இறைவனின் திருவடிகளைச் சார்ந்தவர்களைத் தவிர, மற்றவர்களுக்கு மனக்கவலையை முழுமையாக நீக்குவது கடினம்.',
    englishExplanation:
      'It is difficult to overcome deep mental worries without seeking the support and guidance of the incomparable divine.',
    themes: ['Peace', 'Spirituality', 'மன அமைதி'],
    citation: 'கடவுள் வாழ்த்து — குறள் 7',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 8,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்\nபிறவாழி நீந்தல் அரிது.',
    tamilExplanation:
      'அறக்கடலாக விளங்கும் இறைவனின் திருவடிகளைச் சார்ந்தவர்களைத் தவிர, பிறவியாகிய பெருங்கடலைக் கடப்பது கடினம்.',
    englishExplanation:
      'Those who follow the feet of the divine embodiment of virtue can overcome the great difficulties of worldly existence.',
    themes: ['Virtue', 'அறம்', 'Spirituality'],
    citation: 'கடவுள் வாழ்த்து — குறள் 8',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 9,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'கோளில் பொறியின் குணமிலவே எண்குணத்தான்\nதாளை வணங்காத் தலை.',
    tamilExplanation:
      'எட்டு சிறப்புக் குணங்களைக் கொண்ட இறைவனின் திருவடிகளை வணங்காத மனிதனின் தலை, பயனற்ற புலன்களைப் போன்றது.',
    englishExplanation:
      'A person who does not respect the divine source of virtue is compared to a head that lacks the proper qualities and purpose.',
    themes: ['Virtue', 'அறம்', 'Spirituality'],
    citation: 'கடவுள் வாழ்த்து — குறள் 9',
    sourceStatus: 'Source: Project Madurai',
  },
  {
    id: 10,
    workTitle: 'திருக்குறள்',
    author: 'திருவள்ளுவர்',
    category: 'அறத்துப்பால்',
    tamilText: 'பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்\nஇறைவன் அடிசேரா தார்.',
    tamilExplanation:
      'இறைவனின் திருவடிகளைச் சார்ந்தவர்கள் மட்டுமே பிறவியாகிய பெருங்கடலைக் கடக்க முடியும்; அவரைச் சாராதவர்கள் கடக்க முடியாது.',
    englishExplanation:
      'Those who follow the feet of the divine can cross the great ocean of worldly existence, while those who do not cannot.',
    themes: ['Spirituality', 'Virtue', 'அறம்'],
    citation: 'கடவுள் வாழ்த்து — குறள் 10',
    sourceStatus: 'Source: Project Madurai',
  },
];

const EXAMPLE_SEARCHES = ['Friendship', 'Learning', 'Ethics', 'நட்பு', 'கல்வி'];
const THEMES = [
  'Ethics',
  'Friendship',
  'Learning',
  'Leadership',
  'Love',
  'அறம்',
  'கல்வி',
  'Spirituality',
];

function App() {
  const [query, setQuery] = useState('');
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResults = DEMO_ENTRIES.filter((entry) => {
    const matchesQuery =
      normalizedQuery === '' ||
      entry.tamilText.toLowerCase().includes(normalizedQuery) ||
      entry.tamilExplanation.toLowerCase().includes(normalizedQuery) ||
      entry.englishExplanation.toLowerCase().includes(normalizedQuery) ||
      entry.workTitle.toLowerCase().includes(normalizedQuery) ||
      entry.author.toLowerCase().includes(normalizedQuery) ||
      entry.category.toLowerCase().includes(normalizedQuery) ||
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
          <p className="no-results">
            No results found. Try a different search term or theme.
          </p>
        ) : (
          <div className="results-list">
            {filteredResults.map((entry) => (
              <article key={entry.id} className="result-card">
                <p className="tamil-text">{entry.tamilText}</p>

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
                  <span>
                    <strong>Work:</strong> {entry.workTitle}
                  </span>
                  <span>
                    <strong>Author:</strong> {entry.author}
                  </span>
                  <span>
                    <strong>Category:</strong> {entry.category}
                  </span>
                  <span>
                    <strong>Reference:</strong> {entry.citation}
                  </span>
                </div>

                <div className="source-status">{entry.sourceStatus}</div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="about-section">
        <h2>About</h2>
        <p>
          Tamil Scholar AI currently contains the first 10 Thirukkural verses
          from the chapter கடவுள் வாழ்த்து. The original Tamil text is sourced
          from Project Madurai. The explanations and themes are simplified
          descriptions intended to help readers understand the verses.
        </p>
      </section>
    </div>
  );
}

export default App;