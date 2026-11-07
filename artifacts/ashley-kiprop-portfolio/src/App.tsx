import { type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCase, setOpenCase] = useState<number | null>(null);
  return (
    <div className="portfolio">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Ashley Kiprop, back to top">
          <span className="monogram">AK</span>
          <span>Ashley Kiprop<small>Data science</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true"><path d="M1 3h20M1 9h20M1 15h20" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Illustrative work</a>
          <a href="#principles" onClick={() => setMenuOpen(false)}>Principles</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact note <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">Independent perspective · Data science</div>
            <h1 id="hero-title">Ashley<br /><span>Kiprop</span></h1>
            <p className="hero-lede">I turn messy questions into clear, decision-useful analysis — with care for what the data can say, and what it can’t.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#approach">Explore my approach <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#work">View demo studies</a>
            </div>
            <div className="hero-note">Evidence first. Clarity always.</div>
          </div>
          <div className="hero-art" aria-label="Illustrative chart showing observations and a fitted trend">
            <div className="orbit" />
            <div className="chart-stamp">Read the signal<br />not the noise</div>
            <div className="chart-paper">
              <div className="chart-label"><span>Field note 01</span><span>Illustrative</span></div>
              <div className="chart-title">A question, made legible.</div>
              <div className="chart-sub">Synthetic observations · relationship shown for demonstration</div>
              <div className="plot">
                <svg viewBox="0 0 360 190" role="img" aria-label="Synthetic scatter plot and trend line">
                  <path className="plot-grid" d="M0 20H360M0 60H360M0 100H360M0 140H360M40 0V170M110 0V170M180 0V170M250 0V170M320 0V170" />
                  <path className="line-b" d="M8 150 C75 140 105 126 150 108 S235 76 352 27" />
                  <path className="line-a" d="M15 145 C55 118 72 131 104 108 S146 113 174 87 S221 94 248 62 S302 56 342 23" />
                  <g fill="#c47452" stroke="#f3f0e7" strokeWidth="2"><circle cx="25" cy="142" r="4"/><circle cx="67" cy="119" r="4"/><circle cx="94" cy="127" r="4"/><circle cx="122" cy="101" r="4"/><circle cx="158" cy="105" r="4"/><circle cx="188" cy="83" r="4"/><circle cx="223" cy="91" r="4"/><circle cx="258" cy="58" r="4"/><circle cx="291" cy="64" r="4"/><circle cx="325" cy="36" r="4"/></g>
                </svg>
              </div>
              <div className="chart-caption"><span>Observation</span><span>Association ≠ causation</span><span>Signal →</span></div>
            </div>
            <div className="side-note">Clarity is a practice</div>
          </div>
        </section>

        <div className="ticker" aria-label="Analytical principles">
          <div className="ticker-inner"><span>Good questions first</span><span>Methods with context</span><span>Uncertainty made visible</span><span>Decisions, not decoration</span></div>
        </div>

        <section className="section" id="approach">
          <div className="section-head">
            <div className="section-kicker">01 / How I think</div>
            <h2 className="section-title">Analysis starts before<br />the <em>analysis.</em></h2>
          </div>
          <div className="approach-grid">
            <article className="approach-item"><span className="step-no">01</span><div><h3>Find the real question</h3><p>Translate a broad or ambiguous ask into a decision, a population, and a measure that can be examined.</p></div></article>
            <article className="approach-item"><span className="step-no">02</span><div><h3>Learn the shape of the data</h3><p>Check how it was gathered, what is missing, and where definitions or collection choices may distort the picture.</p></div></article>
            <article className="approach-item"><span className="step-no">03</span><div><h3>Choose a method that fits</h3><p>Use the simplest defensible approach for the question, then test whether the answer holds under reasonable alternatives.</p></div></article>
            <article className="approach-item"><span className="step-no">04</span><div><h3>Make the answer useful</h3><p>Show the finding, its uncertainty, and the next practical step in language people can act on.</p></div></article>
          </div>
        </section>

        <section className="manifesto" aria-label="Analytical point of view">
          <div className="section-kicker">A working belief</div>
          <blockquote>“A useful answer is not the most complex one. It’s the one that makes the <em>next decision clearer</em>.”</blockquote>
        </section>

        <section className="work" id="work">
          <div className="section">
            <div className="work-header">
              <div><div className="section-kicker">02 / Practice, not claims</div><h2 className="section-title">Small studies.<br /><em>Honest limits.</em></h2></div>
              <p className="demo-note">These are illustrative portfolio exercises built with synthetic data. They are not client work or Ashley’s real projects.</p>
            </div>

            <article className={`case-study${openCase === 1 ? ' is-open' : ''}`}>
              <div className="case-info">
                <span className="case-tag">Illustrative demo · Synthetic data</span>
                <h3>When does a service feel slow?</h3>
                <p>A small exploration of service wait times: how a daily average can hide peak-hour pressure, and how to communicate the difference without overstating the evidence.</p>
                <div className="case-meta"><div><span>Question</span><span>Where does delay cluster?</span></div><div><span>Method</span><span>Time-of-day comparison</span></div></div>
                <button className="case-open" type="button" aria-expanded={openCase === 1} onClick={() => setOpenCase(openCase === 1 ? null : 1)}>{openCase === 1 ? 'Close the note' : 'Read the analysis note'} <span className="arrow" aria-hidden="true">↗</span></button>
                <div className="case-detail"><strong>What this demo illustrates:</strong> define a meaningful baseline, inspect the distribution rather than just its average, then compare time windows. The synthetic pattern suggests a concentrated afternoon rise; it does not establish why it happens or predict a real service.</div>
              </div>
              <div className="case-visual visual-1" aria-label="Synthetic demo dashboard with distribution bars">
                <div className="mini-dashboard"><div className="dash-head"><span>Wait-time distribution</span><span>DEMO / SYNTHETIC</span></div><div className="dash-value">The average is not the whole story.</div><div className="dash-caption">Illustrative wait-time observations by time block</div><div className="bars">{[35,45,52,43,62,68,81,73,56,39,32].map((height, i) => <i key={i} style={{ '--h': `${height}%` } as React.CSSProperties} />)}</div><div className="dash-foot"><span>EARLY</span><span>MIDDAY</span><span>PEAK</span><span>LATE</span></div></div>
              </div>
            </article>

            <article className={`case-study${openCase === 2 ? ' is-open' : ''}`}>
              <div className="case-info">
                <span className="case-tag">Illustrative demo · Synthetic data</span>
                <h3>What changed after a reminder?</h3>
                <p>A cautious look at a hypothetical reminder experiment, focusing on comparison groups, selection effects, and the difference between a measured lift and a causal claim.</p>
                <div className="case-meta"><div><span>Question</span><span>Did attendance shift?</span></div><div><span>Method</span><span>Group comparison</span></div></div>
                <button className="case-open" type="button" aria-expanded={openCase === 2} onClick={() => setOpenCase(openCase === 2 ? null : 2)}>{openCase === 2 ? 'Close the note' : 'Read the analysis note'} <span className="arrow" aria-hidden="true">↗</span></button>
                <div className="case-detail"><strong>What this demo illustrates:</strong> a difference between groups can be informative, but assignment and baseline comparability matter. In an actual analysis, I would document how groups were formed, quantify uncertainty, and avoid causal language unless the design supports it.</div>
              </div>
              <div className="case-visual visual-2" aria-label="Synthetic demo chart comparing two groups">
                <div className="mini-dashboard"><div className="dash-head"><span>Attendance by group</span><span>DEMO / SYNTHETIC</span></div><div className="dash-value">Compare carefully.</div><div className="dash-caption">Hypothetical reminder / no-reminder cohorts</div><div className="bars">{[40,48,51,57,55,63,69,65,72,76,81].map((height, i) => <i key={i} style={{ '--h': `${height}%` } as React.CSSProperties} />)}</div><div className="dash-foot"><span>COHORT A</span><span>BASELINE</span><span>COHORT B</span><span>FOLLOW-UP</span></div></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="principles">
          <div className="principles">
            <div><div className="section-kicker">03 / What matters</div><h2 className="section-title" style={{ marginTop: 22 }}>Care is part<br />of the <em>method.</em></h2></div>
            <div className="principle-list">
              <article className="principle"><span className="principle-no">A.</span><div><h3>Context before confidence</h3><p>Data is produced by people and systems. Understanding its origin is part of understanding its meaning.</p></div></article>
              <article className="principle"><span className="principle-no">B.</span><div><h3>Uncertainty belongs in the room</h3><p>Assumptions, limits, and variation should be visible enough to inform a decision—not buried in a footnote.</p></div></article>
              <article className="principle"><span className="principle-no">C.</span><div><h3>Clarity is a form of respect</h3><p>Good communication helps people see what is known, what remains open, and what is worth doing next.</p></div></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div><div className="section-kicker">04 / A note on getting in touch</div><h2>Let’s make<br />a question <em>clear.</em></h2></div>
            <div className="contact-status"><strong>Contact details not provided</strong>This portfolio does not include an email address or social profile because none was supplied. Add a preferred contact method here when ready.</div>
          </div>
        </section>
      </main>
      <footer className="footer"><span>© Ashley Kiprop · Data science</span><a href="#top">Back to the beginning ↑</a><span>Thoughtful by design</span></footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
