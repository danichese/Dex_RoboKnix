import './App.css'

function App() {
  return (
    <div className="whitepaper">
      <header className="hero">
        <pre className="ascii-art">
{`██████╗ ███████╗██╗  ██╗
██╔══██╗██╔════╝╚██╗██╔╝
██║  ██║█████╗   ╚███╔╝
██║  ██║██╔══╝   ██╔██╗
██████╔╝███████╗██╔╝ ██╗
╚═════╝ ╚══════╝╚═╝  ╚═╝`}
        </pre>
        <h1>DEX ROBOKNIX</h1>
        <p className="tagline">Cognitive Tools for Cyberpunk Minds</p>
        <p className="subtitle">A soft whitepaper on building tools that think</p>
      </header>

      <main>
        <section className="section">
          <h2>What Is Dex RoboKnix?</h2>
          <div className="two-col">
            <div className="card">
              <h3>Internal</h3>
              <p>A human-AI cognitive unit. One developer + Claude Code operating as an extended self.</p>
            </div>
            <div className="card">
              <h3>External</h3>
              <p>An open-source umbrella for frameworks, methodologies, and cognitive tools.</p>
            </div>
          </div>
          <p className="core-insight">
            <strong>Core Insight:</strong> All data is valid. Value emerges from transformation.
          </p>
        </section>

        <section className="section">
          <h2>The Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🧠</span>
              <h4>Extended Self</h4>
              <p>Dex is a cognitive exocortex. Tools are extensions of the creator's mind.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">📚</span>
              <h4>Learning Over Production</h4>
              <p>Tools exist to make you smarter, not faster. Productivity is a side effect.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🔨</span>
              <h4>Making as Becoming</h4>
              <p>You grow by building. The tool teaches while it works.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">📝</span>
              <h4>Visible Thinking</h4>
              <p>Documentation IS the work. Externalize cognition so it compounds.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">👁️</span>
              <h4>Attention Sovereignty</h4>
              <p>Reclaim control from tech platforms. Terminal-first is attention-first.</p>
            </div>
          </div>
        </section>

        <section className="section dark">
          <h2>Bidirectional Data Framework</h2>
          <pre className="framework-diagram">
{`VALUES          What we believe
    ↕           [Translation]
PRINCIPLES      How we think
    ↕           [Specification]
POLICY          What we mandate
    ↕           [Operationalization]
PROCESS         How we organize
    ↕           [Codification]
PROCEDURE       Specific steps
    ↕           [Execution]
PATTERN         Observable data`}
          </pre>
          <p className="center">
            <strong>Decompose</strong> top-down. <strong>Recompose</strong> bottom-up.<br/>
            Each layer is an asset. Both directions create value.
          </p>
        </section>

        <section className="section">
          <h2>Products</h2>
          <div className="products">
            <div className="product active">
              <h3>Ruliad Swarm</h3>
              <span className="status">ACTIVE</span>
              <p>Multi-agent decision engine. 8 parallel agents exploring problems through orthogonal strategies.</p>
              <div className="progress-bar">
                <div className="progress" style={{width: '70%'}}></div>
              </div>
            </div>
            <div className="product pending">
              <h3>Product #2</h3>
              <span className="status">PIPELINE</span>
              <p>Cross-domain validation. Needed to prove framework generalizability.</p>
              <div className="progress-bar">
                <div className="progress" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Entity Ownership</h2>
          <div className="ownership">
            <code>#creator: danichese</code>
            <code>#entity: Dex RoboKnix</code>
          </div>
          <p className="center">
            There is only one Dex RoboKnix. If you clone, you instantiate <em>your own</em> entity.<br/>
            The tools transfer. The identity does not.
          </p>
        </section>

        <section className="section cta">
          <h2>Get Started</h2>
          <div className="links">
            <a href="https://github.com/danichese/Dex_RoboKnix" className="btn primary">
              View Repository
            </a>
            <a href="https://github.com/danichese/Dex_RoboKnix/blob/main/DEX_ROBOKNIX.md" className="btn secondary">
              Entity Definition
            </a>
            <a href="https://github.com/danichese/Dex_RoboKnix/blob/main/BIDIRECTIONAL_DATA_FRAMEWORK.md" className="btn secondary">
              Framework Docs
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>GPL v3 | Open by default | Terminal-first</p>
        <p className="quote">"All data is valid. Transformation creates value."</p>
      </footer>
    </div>
  )
}

export default App
