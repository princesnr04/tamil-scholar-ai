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
    workTitle: '[DEMO] Sample Classical Work',
    author: '[DEMO] Sample Author',
    category: '[DEMO] Sample Category',
    tamilText: '[DEMO] நட்பு தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] இது ஒரு மாதிரி விளக்கம். உண்மையான உரையை இங்கே பின்னர் சேர்க்க வேண்டும்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about friendship. Replace with verified content.',
    themes: ['Friendship', 'நட்பு'],
    citation: '[DEMO] Chapter 1, Verse 1',
    sourceStatus: 'Demo source — verify before publishing',
  },
  {
    id: 2,
    workTitle: '[DEMO] Sample Classical Work',
    author: '[DEMO] Sample Author',
    category: '[DEMO] Sample Category',
    tamilText: '[DEMO] கல்வி தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] கல்வியின் முக்கியத்துவம் பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about learning. Replace with verified content.',
    themes: ['Learning', 'கல்வி'],
    citation: '[DEMO] Chapter 2, Verse 5',
    sourceStatus: 'Demo source — verify before publishing',
  },
  {
    id: 3,
    workTitle: '[DEMO] Sample Classical Work',
    author: '[DEMO] Sample Author',
    category: '[DEMO] Sample Category',
    tamilText: '[DEMO] நீதி தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] நெறிமுறைகள் பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about ethics. Replace with verified content.',
    themes: ['Ethics'],
    citation: '[DEMO] Chapter 3, Verse 12',
    sourceStatus: 'Demo source — verify before publishing',
  },
  {
    id: 4,
    workTitle: '[DEMO] Sample Classical Work',
    author: '[DEMO] Sample Author',
    category: '[DEMO] Sample Category',
    tamilText: '[DEMO] தலைமை தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] தலைமைத்துவம் பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about leadership. Replace with verified content.',
    themes: ['Leadership'],
    citation: '[DEMO] Chapter 4, Verse 8',
    sourceStatus: 'Demo source — verify before publishing',
  },
  {
    id: 5,
    workTitle: '[DEMO] Sample Classical Work',
    author: '[DEMO] Sample Author',
    category: '[DEMO] Sample Category',
    tamilText: '[DEMO] அன்பு தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] அன்பின் மதிப்பு பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about love. Replace with verified content.',
    themes: ['Love'],
    citation: '[DEMO] Chapter 5, Verse 3',
    sourceStatus: 'Demo source — verify before publishing',
  },
  {
    id: 6,
    workTitle: '[DEMO] Sample Classical Work II',
    author: '[DEMO] Sample Author II',
    category: '[DEMO] Sample Category',
    tamilText: '[DEMO] நட்பு மற்றும் நீதி தொடர்பான இரண்டாவது மாதிரி வரி',
    tamilExplanation: '[DEMO] நல்ல நண்பர்களைத் தேர்ந்தெடுப்பது பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] A second placeholder example touching on friendship and ethics together.',
    themes: ['Friendship', 'Ethics', 'நட்பு'],
    citation: '[DEMO] Chapter 1, Verse 9',
    sourceStatus: 'Demo source — verify before publishing',
  },
];

const EXAMPLE_SEARCHES = ['Friendship', 'Learning', 'Ethics', 'நட்பு', 'கல்வி'];
const THEMES = ['Ethics', 'Friendship', 'Learning', 'Leadership', 'Love'];

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
          <p className="no-results">No results found. Try a different search term or theme.</p>
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
                  <span><strong>Work:</strong> {entry.workTitle}</span>
                  <span><strong>Author:</strong> {entry.author}</span>
                  <span><strong>Category:</strong> {entry.category}</span>
                  <span><strong>Reference:</strong> {entry.citation}</span>
                </div>

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
          Tamil Scholar AI is currently displaying demo placeholder entries only.
          None of the Tamil text, explanations, sources, or references shown on this
          page are verified Classical Tamil literature. Every citation, verse, and
          source reference must be checked against the original, authoritative source
          before this content is published or relied upon in any way.
        </p>
      </section>
    </div>
  );
}

export default App;