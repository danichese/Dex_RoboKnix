# Dex RoboKnix: Bidirectional Value Cascade

> The complete conceptual architecture of Dex RoboKnix organized by transformation layers.
> Each layer is an asset. Decompose top-down. Recompose bottom-up.

---

## The Framework

```
VALUES          ←→  What we believe/stand for
   ↕               [Translation]
PRINCIPLES      ←→  How we think/decide
   ↕               [Specification]
POLICY          ←→  What we mandate/allow
   ↕               [Operationalization]
PROCESS         ←→  How we organize work
   ↕               [Codification]
PROCEDURE       ←→  Specific steps/actions
   ↕               [Execution]
PATTERN         ←→  Observable behaviors/data
```

**Core Insight:** All data is valid. Value emerges from transformation, not from data itself.

---

## DECOMPOSITION (Top-Down)

### Layer 1: VALUES

**What Dex RoboKnix fundamentally IS:**

A cyberpunk framework for building cutting-edge cognitive tools that exploit knowledge structures through systematic transformation.

**Core Values:**

1. **All Data is Valid** (Social Field Computing)
   - No signal is privileged over another at collection
   - "Not seeing the cat" = "seeing the cat" in raw validity
   - Value emerges through processing, not source authority

2. **Transformation is the Asset**
   - The process of moving between layers creates value
   - Each transformation step is capturable, reusable, composable
   - Knowledge work is asset generation, not just output production

3. **Bidirectionality as Method**
   - Every system can be decomposed (values → patterns)
   - Every system can be recomposed (patterns → values)
   - Reverse engineering is co-equal with forward engineering

4. **Cyberpunk Toolbuilding**
   - DIY cutting-edge technology
   - Exploit knowledge structures, don't just use them
   - Anti-establishment approach to cognitive work
   - Find the exploits in information systems

**Beliefs/Assumptions:**

- Complexity cannot be predicted, only computed (computational irreducibility)
- Expertise can be decomposed into reusable transformation layers
- Individual cognition + LLM scope widening > either alone
- Tools should teach while they work (learning vehicles first, productivity second)

**Problem Space:**

Knowledge work under complexity, ambiguity, and rapid change. Specifically:
- Making sense of systems (reverse engineering)
- Building tools to think with (cognitive prosthetics)
- Navigating divergent exploration without getting lost
- Converting learning into reusable assets

---

### Layer 2: PRINCIPLES

**Key Conceptual Frameworks:**

1. **The Bidirectional Value Cascade**
   - 6 layers: Values → Principles → Policy → Process → Procedure → Pattern
   - Downward = decomposition (translation, specification, operationalization, codification, execution)
   - Upward = recomposition (inference, generalization, standardization, abstraction, synthesis)
   - Each transformation is named, explicit, capturable

2. **Asset-Based Knowledge Work**
   - Every layer output is an asset (reusable, composable, queryable, versioned, transferable)
   - Assets compound over time
   - Work to build assets, not just solve immediate problems
   - Documentation IS the asset layer between cognition and code

3. **Cognition-Lead, LLM-Widen**
   - Human makes creative leaps, sets direction, exercises judgment
   - LLMs expand search space, challenge assumptions, accelerate research, document thinking
   - The human is the lead, AI is scope expansion
   - Tools serve learning goals, not just productivity

4. **Divergent-Convergent Rhythm**
   - Divergent exploration: free-form thinking, reading, sketching possibilities
   - Convergent crystallization: distill insights, make decisions, define steps
   - Iterative building: small increments, learn from each, stay at learning edge
   - Match tool use to energy/mode

**Non-Negotiable Thinking Patterns:**

- Make implicit thinking explicit (articulate transformations)
- Capture while you think (documentation concurrent with cognition)
- Question before building (conceptual work precedes implementation)
- Work in public (GPL v3, open by default)
- Treat contradictions as exploits (paradoxes reveal valuable edge cases)

**How Wolfram's Ruliad Informs:**

The Ruliad (entangled limit of all computations) suggests:
- Some problems need multi-path exploration, not single-solution optimization
- Computational irreducibility means you must RUN the process, not predict it
- Products built on Dex should embrace parallel exploration (like Ruliad Swarm)

---

### Layer 3: POLICY

**Scope Decisions:**

**Included in Dex RoboKnix:**
- The bidirectional value cascade as organizing framework
- The conductor system (track-based development, workflow, style guides)
- Documentation-first approach (thinking captured in markdown)
- Living documents that evolve with understanding
- Asset inventory methodology (complete/in-progress/missing)
- Python and JavaScript as primary languages
- Terminal/CLI aesthetics (cyberpunk preference)
- GPL v3 licensing

**Excluded from Dex RoboKnix:**
- Rigid waterfall planning (embrace emergence)
- Web-first interfaces (terminal-first, web optional)
- Proprietary/closed tooling
- "Move fast and break things" (move deliberately and learn things)
- Building before understanding (conceptual work is real work)

**Design Mandates:**

| Mandate | Rationale |
|---------|-----------|
| Every product uses conductor system | Consistency, knowledge transfer between products |
| Every product defines its value cascade | Makes thinking explicit, enables reuse |
| Documentation lives in repo with code | Single source of truth, versioned together |
| Commit messages include session URLs | Auditability, context preservation |
| Living documents preferred over static | Embrace iteration and refinement |

**Architectural Choices:**

- **Polyrepo over monorepo**: Each product (Ruliad, future tools) is separate repo
- **Conductor as shared pattern**: Duplicated per product, not package dependency
- **Markdown as lingua franca**: All documentation, planning, thinking in markdown
- **Git as audit trail**: Every change tracked, context preserved in notes/commits
- **TDD when building**: Test-driven when code exists, doc-driven when conceptualizing

---

### Layer 4: PROCESS

**Established Workflows:**

1. **Project Inception Process**
   ```
   Conceptual Phase:
   → Define value cascade (values → pattern)
   → Create conductor/ structure
   → Write living docs (VISION.md, CONCEPTS.md, QUESTIONS.md)
   → Identify first patterns to implement

   Building Phase:
   → Create track for feature
   → TDD cycle: Red → Green → Refactor
   → Update docs as understanding evolves
   → Commit with context URLs
   ```

2. **Track-Based Development** (inherited from Ruliad)
   - Each major feature/question gets a track
   - Track structure: index.md, spec.md, plan.md, metadata.json
   - Tracks organize thinking + work
   - Track completion = asset creation

3. **Divergent Day Integration**
   - 2-3 sessions/week: Divergent exploration (LLM dialogue, research, sketching)
   - 1 session/week: Convergent crystallization (decisions, documentation)
   - As-ready: Iterative building (small, meaningful increments)
   - Session notes captured in tracks or docs

4. **Knowledge Extraction Protocol**
   - Use value cascade interrogation for knowledge transfer
   - Layer-by-layer extraction: Values → Pattern
   - Bottom-up recomposition: Pattern → Values
   - Asset inventory at each layer
   - Creates "further work backlog" artifacts

**Knowledge Organization:**

```
repo/
├── README.md                    # Project overview
├── LICENSE                      # GPL v3
├── VALUE_CASCADE.md            # This document
├── conductor/
│   ├── index.md                # Navigation hub
│   ├── product.md              # What this product is
│   ├── vision.md               # Long-term direction
│   ├── tech-stack.md           # Technical decisions
│   ├── workflow.md             # How we work
│   ├── tracks.md               # Track registry
│   ├── further-work.md         # Organized backlog
│   ├── tracks/                 # Active work
│   │   └── track-name/
│   │       ├── index.md
│   │       ├── spec.md
│   │       ├── plan.md
│   │       └── metadata.json
│   └── code_styleguides/       # Language style guides
│       ├── python.md
│       └── javascript.md
├── docs/                       # Additional documentation
│   ├── VISION.md
│   ├── CONCEPTS.md
│   ├── QUESTIONS.md
│   ├── DECISIONS.md
│   └── LEARNING_LOG.md
└── [product-specific code/]
```

**Transformations/Pipelines:**

- **Thinking → Documentation**: Capture insights in markdown as they emerge
- **Documentation → Code**: Tests and implementation follow from specs
- **Code → Learning**: Each build teaches, updates understanding
- **Learning → Documentation**: Insights loop back to living docs

---

### Layer 5: PROCEDURE

**Specific Repeatable Steps:**

1. **Creating a New Dex RoboKnix Product**
   ```bash
   # 1. Create repo
   mkdir Dex_RoboKnix_[ProductName]
   cd Dex_RoboKnix_[ProductName]
   git init

   # 2. Add license
   cp ~/templates/GPL-3.0.txt LICENSE

   # 3. Create conductor structure
   mkdir -p conductor/tracks conductor/code_styleguides

   # 4. Bootstrap docs
   touch README.md VALUE_CASCADE.md
   touch conductor/{index,product,vision,tech-stack,workflow,tracks,further-work}.md

   # 5. First commit
   git add .
   git commit -m "Initial commit: [ProductName] inception"

   # 6. Start value cascade extraction
   # Use knowledge extraction protocol to populate VALUE_CASCADE.md
   ```

2. **Running Knowledge Extraction on Existing Work**
   ```
   1. Open VALUE_CASCADE.md or create extraction doc
   2. Use interrogation framework:
      - Layer 1 VALUES: purpose, beliefs, problem space
      - Layer 2 PRINCIPLES: frameworks, patterns, Ruliad influence
      - Layer 3 POLICY: scope, mandates, architecture
      - Layer 4 PROCESS: workflows, organization, transformations
      - Layer 5 PROCEDURE: steps, artifacts, actions
      - Layer 6 PATTERN: outputs, data, demonstrations
   3. Run recomposition (bottom-up)
   4. Create asset inventory
   5. Generate further-work.md backlog
   ```

3. **Creating a Track**
   ```bash
   # 1. Choose track ID (format: short-name_YYYYMMDD)
   TRACK_ID="feature-name_20260203"

   # 2. Create track structure
   mkdir -p conductor/tracks/$TRACK_ID
   cd conductor/tracks/$TRACK_ID

   # 3. Create files from templates
   touch index.md spec.md plan.md metadata.json

   # 4. Register in conductor/tracks.md
   echo "- [$TRACK_ID](./tracks/$TRACK_ID/)" >> ../../tracks.md

   # 5. Populate index.md with context
   # 6. Define spec.md with requirements
   # 7. Create phased plan.md
   # 8. Update metadata.json with status
   ```

4. **Git Workflow with Context Preservation**
   ```bash
   # During work
   git add [files]

   # Commit with heredoc for formatting
   git commit -m "$(cat <<'EOF'
   scope(component): Brief description

   Longer explanation of what changed and why.
   Key decisions made.

   https://claude.ai/code/session_[SESSION_ID]
   EOF
   )"

   # Add notes for extra context
   git notes add -m "Additional context or reasoning"

   # Push
   git push -u origin [branch]
   ```

**Concrete Artifacts Created:**

| Artifact | Purpose | Status |
|----------|---------|--------|
| VALUE_CASCADE.md | Framework definition | ✅ This document |
| conductor/ system | Project management structure | ✅ In progress |
| Knowledge extraction protocol | Transfer thinking between sessions | ✅ Defined |
| Track templates | Standardized work packaging | ⏳ To be created |
| Style guides | Code consistency | ⏳ To be created |
| Living docs templates | Capture thinking | ⏳ To be created |

---

### Layer 6: PATTERN

**Observable Outputs:**

**From Ruliad (Dex RoboKnix Product #1):**
- ✅ TUI runs independently (Textual interface works)
- ✅ Multi-agent Swarm produces JSON output (core computation works)
- ⏳ Integration gap: TUI ↔ JSON pipeline needs wiring
- ✅ Comprehensive documentation using conductor system
- ✅ Value cascade extraction completed with 47-item backlog

**From Dex RoboKnix Framework:**
- ✅ Bidirectional value cascade articulated
- ✅ Conductor system defined structurally
- ⏳ Templates for new products (in progress)
- ⏳ Asset inventory methodology (in progress)

**Data/Examples Captured:**

- Ruliad's 10 use cases demonstrate the "cyberpunk toolbuilding" value
- Ruliad's further-work.md shows asset inventory methodology
- This VALUE_CASCADE.md demonstrates decomposition in action

**What Can Be Demonstrated:**

- The value cascade itself (this document is the proof)
- Knowledge extraction protocol (Ruliad session showed it works)
- Bidirectional analysis (Ruliad backlog shows recomposition)
- Living documentation approach (both repos use it)

---

## RECOMPOSITION (Bottom-Up)

### From PATTERN → PROCEDURE

**Observed:** Ruliad created 47 organized work items, but no prioritization workflow exists.

**Derived Procedure:** Create "Priority Matrix Scoring" procedure:
1. For each work item, score on 2 axes:
   - **Unlock value**: Does it unblock other work? (1-5)
   - **Learning value**: Does it teach us something critical? (1-5)
2. Plot on 2x2 matrix: Quick Wins / Strategic / Fill-In / Defer
3. Work top-right to bottom-left

### From PROCEDURE → PROCESS

**Observed:** Multiple procedures for documentation (extraction, tracks, living docs)

**Derived Process:** "Documentation as Discovery" process:
1. **Start with questions** (QUESTIONS.md)
2. **Extract current state** (knowledge extraction protocol)
3. **Organize work** (further-work.md backlog)
4. **Work in tracks** (spec → plan → implement)
5. **Update understanding** (living docs evolve)
6. **Repeat** (documentation never "done")

### From PROCESS → POLICY

**Observed:** Ruliad has extensive planning but limited implementation

**Emerging Policy:** "Build to Learn" policy:
- Specification depth must match implementation readiness
- Every track requires at least one "pattern validation" checkpoint
- Documentation quality maintained, but don't over-spec before building
- It's acceptable to write "working hypothesis" docs that evolve

### From POLICY → PRINCIPLES

**Validated Principles:**
- ✅ Bidirectionality works (Ruliad extraction proved it)
- ✅ Asset-based thinking is generative (47 items from one extraction)
- ✅ Documentation-first enables LLM collaboration (this session proves it)

**Challenged Principles:**
- ⚠️ "All data is valid" creates paradox: if all data equal, where does value come from?
- **Resolution:** Value emerges from transformation, not data. The principle holds.

### From PRINCIPLES → VALUES

**Reinforced Values:**
- **Transformation is the asset** ← Extraction protocol literally transforms thinking into backlog
- **Bidirectionality as method** ← This recomposition section proves the value of upward analysis

**Discovered Values:**
- **Emergence over prediction** ← Can't predict what Dex RoboKnix will become; must build and see
- **Tools as learning vehicles** ← Ruliad teaches multi-agent thinking while being built
- **Recursive bootstrapping** ← Ruliad builds Dex builds Ruliad (strange loop is feature, not bug)

---

## ASSET INVENTORY

### VALUES Layer
| Asset | Status |
|-------|--------|
| Core purpose defined | ✅ Complete |
| 4 core values articulated | ✅ Complete |
| Problem space scoped | ✅ Complete |
| Cyberpunk identity established | ✅ Complete |

### PRINCIPLES Layer
| Asset | Status |
|-------|--------|
| Bidirectional value cascade framework | ✅ Complete |
| Asset-based knowledge work principle | ✅ Complete |
| Cognition-lead, LLM-widen model | ✅ Complete |
| Divergent-convergent rhythm | ✅ Complete |
| Named transformations (6 types) | ⏳ In progress |

### POLICY Layer
| Asset | Status |
|-------|--------|
| Scope boundaries defined | ✅ Complete |
| Design mandates table | ✅ Complete |
| Architectural choices documented | ✅ Complete |
| "Build to Learn" policy | ⏳ Needs validation |

### PROCESS Layer
| Asset | Status |
|-------|--------|
| Project inception process | ✅ Complete |
| Track-based development | ✅ Complete (from Ruliad) |
| Divergent day integration | ✅ Complete |
| Knowledge extraction protocol | ✅ Complete |
| Documentation as discovery | ⏳ Emerging |

### PROCEDURE Layer
| Asset | Status |
|-------|--------|
| New product creation steps | ✅ Complete |
| Knowledge extraction steps | ✅ Complete |
| Track creation steps | ✅ Complete |
| Git workflow with context | ✅ Complete |
| Priority matrix scoring | ⏳ Derived, needs testing |
| Track templates | ❌ Missing |
| Style guide templates | ❌ Missing |

### PATTERN Layer
| Asset | Status |
|-------|--------|
| Ruliad TUI working | ✅ Complete |
| Ruliad JSON output working | ✅ Complete |
| Value cascade document (this) | ✅ Complete |
| Ruliad 47-item backlog | ✅ Complete |
| Priority matrix visualization | ❌ Missing |
| Product #2 ideas | ❌ Missing |

---

## CRITICAL GAPS

### Intellectual Gaps (Need Thinking)
1. **Transformation naming** needs completion
   - What exactly is "translation" (values → principles)?
   - Can we formalize each transformation type?

2. **Asset definition** needs precision
   - What makes something reusable? Composable? Queryable?
   - How do we version conceptual assets?

3. **Paradox resolution** needs deeper work
   - "All data valid" vs. "value creation" tension
   - Current resolution: value emerges from transformation (but explore further)

### Structural Gaps (Need Building)
1. **Templates don't exist yet**
   - Track templates
   - Style guides
   - Living document templates

2. **Conductor system incomplete**
   - No workflow.md yet
   - No product.md yet
   - No tech-stack.md yet

3. **No products beyond Ruliad**
   - Need pipeline of product ideas
   - Need selection criteria

### Integration Gaps (Need Connection)
1. **Ruliad ↔ Dex relationship unclear**
   - Should conductor be extracted to shared package?
   - How does Ruliad contribute back to Dex?

2. **Divergent day workflow not instantiated**
   - No session templates
   - No examples of good divergent vs. convergent work

---

## NEXT ACTIONS

Based on critical path analysis:

### Immediate (This Session)
- [x] Create VALUE_CASCADE.md (this document)
- [ ] Create conductor/index.md (navigation hub)
- [ ] Create conductor/product.md (what is Dex RoboKnix)
- [ ] Update README.md with framework overview

### Near-Term (Next Sessions)
- [ ] Create track templates
- [ ] Define transformation types precisely
- [ ] Create "Product Pipeline" document (what to build next)
- [ ] Document divergent day session examples

### Strategic (Ongoing)
- [ ] Build Product #2 to validate framework
- [ ] Extract conductor to shared package (if pattern proven)
- [ ] Create Dex RoboKnix methodology guide for others
- [ ] Publish framework (blog post / talk?)

---

## INTEGRATION: Dex RoboKnix ↔ Products

### Current Relationship

```
Dex RoboKnix (Framework)
    │
    ├── Provides: Conductor system, value cascade, methodology
    ├── Expects: Products to extend/validate framework
    │
    └── Ruliad (Product #1)
            │
            ├── Uses: Conductor, value cascade, TDD workflow
            ├── Teaches: Multi-agent orchestration, parallel exploration
            └── Feeds back: Further-work.md methodology, living docs pattern
```

### Recursive Bootstrapping

Ruliad can be used ON Dex RoboKnix development:
- "How should I architect Product #2?"
- "What's the critical path for Dex?"
- "Should conductor be extracted to a package?"

This creates self-improvement loop: the tools build themselves.

---

## USING THIS DOCUMENT

**For Understanding:**
- Read top-down to see how abstract values become concrete patterns
- Read bottom-up to see how observations inform principles

**For Building:**
- Start with PATTERN (what works?) or VALUES (what matters?)
- Use PROCEDURE layer as cookbook
- Create tracks for PROCESS-level work

**For Integrating:**
- New products should complete their own value cascade
- Compare cascades to find shared infrastructure opportunities
- Extraction protocol transfers knowledge between sessions

**For Evolving:**
- This is a living document
- Update as understanding deepens
- Track changes in git (document evolution is data)

---

**Status:** Living document, v1.0 created 2026-02-03

**Next Review:** After Product #2 inception (validate framework generalizability)
