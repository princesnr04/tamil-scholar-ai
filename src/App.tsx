import { useState } from 'react';

interface KuralResult {
  id: number;
  tamilText: string;
  tamilExplanation: string;
  englishExplanation: string;
  themes: string[];
  sourceWork: string;
  chapterVerse: string;
}

const DEMO_RESULTS: KuralResult[] = [
  {
    id: 1,
    tamilText: '[DEMO] நட்பு தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] இது ஒரு மாதிரி விளக்கம். உண்மையான உரையை இங்கே பின்னர் சேர்க்க வேண்டும்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about friendship. Replace with verified content.',
    themes: ['Friendship', 'நட்பு'],
    sourceWork: '[DEMO] Sample Classical Work',
    chapterVerse: '[DEMO] Chapter 1, Verse 1',
  },
  {
    id: 2,
    tamilText: '[DEMO] கல்வி தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] கல்வியின் முக்கியத்துவம் பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about learning. Replace with verified content.',
    themes: ['Learning', 'கல்வி'],
    sourceWork: '[DEMO] Sample Classical Work',
    chapterVerse: '[DEMO] Chapter 2, Verse 5',
  },
  {
    id: 3,
    tamilText: '[DEMO] நீதி தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] நெறிமுறைகள் பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about ethics. Replace with verified content.',
    themes: ['Ethics'],
    sourceWork: '[DEMO] Sample Classical Work',
    chapterVerse: '[DEMO] Chapter 3, Verse 12',
  },
  {
    id: 4,
    tamilText: '[DEMO] தலைமை தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] தலைமைத்துவம் பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about leadership. Replace with verified content.',
    themes: ['Leadership'],
    sourceWork: '[DEMO] Sample Classical Work',
    chapterVerse: '[DEMO] Chapter 4, Verse 8',
  },
  {
    id: 5,
    tamilText: '[DEMO] அன்பு தொடர்பான மாதிரி தமிழ் வரி — இது உண்மையான குறள் அல்ல',
    tamilExplanation: '[DEMO] அன்பின் மதிப்பு பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] This is a placeholder explanation about love. Replace with verified content.',
    themes: ['Love'],
    sourceWork: '[DEMO] Sample Classical Work',
    chapterVerse: '[DEMO] Chapter 5, Verse 3',
  },
  {
    id: 6,
    tamilText: '[DEMO] நட்பு மற்றும் நீதி தொடர்பான இரண்டாவது மாதிரி வரி',
    tamilExplanation: '[DEMO] நல்ல நண்பர்களைத் தேர்ந்தெடுப்பது பற்றிய மாதிரி விளக்கம்.',
    englishExplanation: '[DEMO] A second placeholder example touching on friendship and ethics together.',
    themes: ['Friendship', 'Ethics', 'நட்பு'],
    sourceWork: '[DEMO] Sample Classical Work II',
    chapterVerse: '[DEMO] Chapter 1, Verse 9',
  },
];

const EXAMPLE_SEARCHES = ['Friendship', 'Learning', 'Ethics', 'நட்பு', 'கல்வி'];
const THEMES = ['Ethics', 'Friendship', 'Learning', 'Leadership', 'Love'];

function App() {
  const [query, setQuery] = useState('');
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResults = DEMO_RESULTS.filter((result) => {
    const matchesQuery =
      normalizedQuery === '' ||
      result.tamilText.toLowerCase().includes(normalizedQuery) ||
      result.tamilExplanation.toLowerCase().includes(normalizedQuery) ||
      result.englishExplanation.toLowerCase().includes(normalizedQuery) ||
      result.themes.some((t) => t.toLowerCase().includes(normalizedQuery));

    const matchesTheme =
      activeTheme === null || result.themes.includes(activeTheme);

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
            {filteredResults.map((result) => (
              <article key={result.id} className="result-card">
                <p className="tamil-text">{result.tamilText}</p>

                <div className="explanation-block">
                  <h3>Tamil Explanation</h3>
                  <p>{result.tamilExplanation}</p>
                </div>

                <div className="explanation-block">
                  <h3>English Explanation</h3>
                  <p>{result.englishExplanation}</p>
                </div>

                <div className="tags-row">
                  {result.themes.map((theme) => (
                    <span key={theme} className="theme-tag">
                      {theme}
                    </span>
                  ))}
                </div>

                <div className="meta-row">
                  <span><strong>Source work:</strong> {result.sourceWork}</span>
                  <span><strong>Reference:</strong> {result.chapterVerse}</span>
                </div>

                <div className="source-status">
                  Demo source — verify before publishing
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