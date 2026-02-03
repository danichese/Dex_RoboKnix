# Dex RoboKnix: Further Work Backlog

> Organized by Bidirectional Data Framework layers.
> Derived from BIDIRECTIONAL_DATA_FRAMEWORK.md asset inventory and critical gaps analysis.

---

## Status Key
- `[ ]` Not started
- `[~]` In progress
- `[x]` Complete
- `[?]` Needs clarification

---

## Layer 1: VALUES

### V1: Explicitly State "Democratizing Expertise" Value
**Status:** `[ ]`
**Why:** Implicit in use cases but not articulated. If true, should be explicit.
**Outcome:** Add to VALUES section of BIDIRECTIONAL_DATA_FRAMEWORK.md or refute and remove.

### V2: Deepen Data Value Paradox Resolution
**Status:** `[ ]`
**Why:** Current resolution ("value from transformation") works but feels incomplete.
**Outcome:** Write essay/document exploring paradox fully. May reveal new insights.

### V3: Define "Cyberpunk" More Precisely
**Status:** `[ ]`
**Why:** "Cyberpunk toolbuilding" is evocative but vague. What does it mean practically?
**Outcome:** Create manifesto or principles doc defining cyberpunk in Dex context.

---

## Layer 2: PRINCIPLES

### P1: Formalize Transformation Types
**Status:** `[ ]` **CRITICAL PATH**
**Why:** 6 transformations named (translation, specification, operationalization, codification, execution, inference, generalization, standardization, abstraction, synthesis) but not defined.
**Outcome:** Create transformation glossary with:
- Input/output for each type
- Examples from Ruliad or Dex itself
- When to use each

### P2: Define Asset Characteristics Precisely
**Status:** `[ ]`
**Why:** "Reusable, composable, queryable, versioned, transferable" - what do these mean?
**Outcome:** Create asset definition document with criteria and tests.

### P3: Operationalize "Orthogonal Divergence"
**Status:** `[ ]` **CRITICAL PATH** (from Ruliad, applies to Dex)
**Why:** Core principle in multi-perspective work, but no methodology for ensuring it.
**Outcome:** Create procedure for generating orthogonal strategies/viewpoints.

### P4: Validate "Emergence Over Prediction" Principle
**Status:** `[ ]`
**Why:** Stated as principle but not yet tested in practice.
**Outcome:** Run experiments (build small tools, compare predicted vs. emergent outcomes).

---

## Layer 3: POLICY

### PO1: Formalize "Build to Learn" Policy
**Status:** `[~]` (emerging, needs codification)
**Why:** Observed pattern: don't over-spec before building. Should be explicit policy.
**Outcome:** Write policy doc with:
- When to spec deeply vs. lightly
- Pattern validation checkpoints
- "Working hypothesis" documentation standards

### PO2: Define Product Inclusion Criteria
**Status:** `[ ]`
**Why:** What qualifies as a "Dex RoboKnix product"? Need criteria to evaluate ideas.
**Outcome:** Checklist or rubric for Product Pipeline evaluation.

### PO3: Decide Conductor Extraction Policy
**Status:** `[?]` (blocked on data)
**Why:** Should conductor be extracted to shared package, or stay duplicated per product?
**Outcome:** After Product #2, evaluate:
- Did duplication cause issues?
- Would shared package help?
- Make decision and document rationale

### PO4: Create Error Handling Policy
**Status:** `[ ]`
**Why:** No policy yet for how products should handle errors, failures, edge cases.
**Outcome:** Policy doc covering:
- Where to validate (boundaries only? internal too?)
- How to surface errors to users
- Graceful degradation patterns

### PO5: Create Cost Management Policy
**Status:** `[ ]`
**Why:** LLM-based tools have API costs. Need policy for rate limiting, budgets, monitoring.
**Outcome:** Policy for:
- Per-session budget limits
- Rate limiting strategies
- Cost visibility for users

---

## Layer 4: PROCESS

### PR1: Create "Documentation as Discovery" Process Guide
**Status:** `[~]` (emerging from practice)
**Why:** Pattern observed: questions → extraction → backlog → tracks → learning. Formalize it.
**Outcome:** Process guide with phases, inputs/outputs, when to use.

### PR2: Define Divergent Day Workflow Concretely
**Status:** `[ ]`
**Why:** "2-3 divergent, 1 convergent session" is stated but not instantiated.
**Outcome:** Create session templates:
- Divergent session structure
- Convergent session structure
- Examples of each

### PR3: Create Priority Matrix Scoring Process
**Status:** `[ ]`
**Why:** Derived from recomposition (Ruliad has 47 items, no prioritization).
**Outcome:** Document process:
- Scoring axes (unlock value, learning value)
- 2x2 matrix visualization
- Decision rules (work top-right to bottom-left)

### PR4: Create Knowledge Transfer Process
**Status:** `[~]` (extraction protocol exists, needs full process)
**Why:** Extraction protocol works, but full process unclear (when to run, how to integrate).
**Outcome:** End-to-end process:
- When to run extraction (new product? stuck? milestone?)
- How to integrate results (update docs? create tracks?)
- How to share between products

### PR5: Create Product Inception Process
**Status:** `[~]` (outlined in VALUE_CASCADE, needs detail)
**Why:** "Creating a New Dex RoboKnix Product" exists in PROCEDURE layer but needs full process.
**Outcome:** Detailed inception guide:
- Pre-work (research, validation)
- Inception session structure
- First 30 days roadmap template

---

## Layer 5: PROCEDURE

### PD1: Create Track Templates
**Status:** `[ ]` **CRITICAL PATH**
**Why:** Track structure defined, but no templates to copy/paste.
**Outcome:** Create templates:
- `index.md` template
- `spec.md` template
- `plan.md` template
- `metadata.json` template

### PD2: Create Style Guide Templates
**Status:** `[ ]`
**Why:** Style guides referenced but don't exist yet.
**Outcome:** Create:
- `conductor/code_styleguides/python.md` (can borrow from Ruliad)
- `conductor/code_styleguides/javascript.md` (can borrow from Ruliad)

### PD3: Create Living Document Templates
**Status:** `[ ]`
**Why:** VISION.md, CONCEPTS.md, QUESTIONS.md, DECISIONS.md, LEARNING_LOG.md referenced but no templates.
**Outcome:** Create template for each with:
- Purpose statement
- Structure/sections
- Example entries

### PD4: Document Priority Matrix Visualization Procedure
**Status:** `[ ]`
**Why:** Scoring process exists (PR3) but need procedure for creating visual matrix.
**Outcome:** Script or instructions:
- Input: scored work items
- Output: 2x2 matrix (ASCII art? markdown table? actual chart?)

### PD5: Create Git Workflow Cheatsheet
**Status:** `[ ]`
**Why:** Workflow exists in VALUE_CASCADE, but cheatsheet would help.
**Outcome:** Quick reference:
- Commit message format with heredoc
- Adding git notes
- Pushing with context preservation

### PD6: Create Product Bootstrap Script
**Status:** `[ ]`
**Why:** "Creating a New Dex RoboKnix Product" is manual steps. Could be scripted.
**Outcome:** Bash script:
```bash
./bootstrap-product.sh ProductName
```
- Creates repo structure
- Copies templates
- Initializes git
- First commit

### PD7: Create Knowledge Extraction Template
**Status:** `[ ]`
**Why:** Extraction protocol exists but no markdown template to fill in.
**Outcome:** Template with all questions pre-populated, ready to answer.

### PD8: Create Session Context Capture Procedure
**Status:** `[ ]`
**Why:** Commit messages include session URLs, but no procedure for what else to capture.
**Outcome:** Procedure for:
- What to capture during session (key decisions, insights, blockers)
- Where to capture it (git notes? session-notes/ dir? track updates?)
- How to review later

---

## Layer 6: PATTERN

### PA1: Create Pattern Validation Checkpoints
**Status:** `[ ]` **CRITICAL PATH**
**Why:** "Build to Learn" policy requires validating patterns before over-specifying.
**Outcome:** Define checkpoints:
- What makes a "validated pattern"?
- How to demonstrate it (screenshot? video? test output?)
- When to advance from pattern to procedure

### PA2: Document Existing Patterns Formally
**Status:** `[ ]`
**Why:** Ruliad has TUI + JSON patterns. Should be documented for reuse.
**Outcome:** Pattern library:
- Pattern: TUI with 2x4 grid (Textual)
- Pattern: Multi-agent JSON output
- Pattern: Living documentation
- Pattern: Knowledge extraction

### PA3: Create Product #2 to Generate New Patterns
**Status:** `[ ]` **CRITICAL PATH**
**Why:** Need second product to validate framework generalizability.
**Outcome:**
- Ideate Product #2 candidates
- Run inception process
- Build enough to generate patterns
- Compare to Ruliad patterns

### PA4: Create Examples of Good Divergent vs. Convergent Sessions
**Status:** `[ ]`
**Why:** Process describes divergent/convergent but no concrete examples.
**Outcome:** Document 2-3 actual sessions:
- Divergent example (exploration, questions, possibilities)
- Convergent example (decisions, documentation, definition)

### PA5: Visualize Priority Matrix with Actual Data
**Status:** `[ ]`
**Why:** Conceptual matrix exists but no real visualization with Dex work items.
**Outcome:** Create matrix with this backlog:
- Score each item (V1-PA6, R1-R11, D1-D5)
- Plot on 2x2
- Use to drive work prioritization

### PA6: Document Transformation Examples
**Status:** `[ ]` (blocked on P1)
**Why:** Need concrete examples of each transformation type.
**Outcome:** For each transformation, show:
- Input (e.g., VALUES layer content)
- Process (what happens during translation?)
- Output (PRINCIPLES layer content)
- Use Dex or Ruliad as example

---

## RECOMPOSITION WORK (Bottom-Up)

### R1: From Pattern → Procedure: Ruliad Integration
**Status:** `[ ]` (Ruliad work)
**Why:** Ruliad has TUI pattern + JSON pattern. Need procedure to wire them.
**Outcome:** (Tracked in Ruliad repo, but relevant here as pattern source)

### R2: From Procedure → Process: Extract Common Dev Workflow
**Status:** `[ ]`
**Why:** Ruliad has workflow. After Product #2, can we extract shared process?
**Outcome:** Compare Ruliad workflow to Product #2 workflow. Extract common elements.

### R3: From Process → Policy: Validate Specification Depth Policy
**Status:** `[ ]` (blocked on PA3)
**Why:** "Build to Learn" policy is hypothesis. Need Product #2 to validate.
**Outcome:** After Product #2, evaluate:
- Did light spec + pattern validation work?
- Did we over-spec? Under-spec?
- Refine policy based on data

### R4: From Policy → Principles: Refine "Asset-Based" Principle
**Status:** `[ ]`
**Why:** As we build, we'll discover what makes good assets vs. bad.
**Outcome:** Update "Asset-Based Knowledge Work" principle with learnings.

### R5: From Principles → Values: Test "Transformation as Asset"
**Status:** `[~]` (in progress via this session)
**Why:** This session is actively testing whether transformations are valuable.
**Outcome:** After completing this backlog, reflect:
- Did documenting transformations help?
- Are they reusable?
- Update VALUES if needed

### R6: Bottom-Up: Contradiction Detection
**Status:** `[ ]`
**Why:** As patterns emerge, they may contradict policies or principles.
**Outcome:** Regular review process:
- Compare observed patterns to stated policies
- Surface contradictions
- Update cascade (bottom wins over top if validated)

### R7: Asset Inventory Refresh Cadence
**Status:** `[ ]`
**Why:** Asset inventory in BIDIRECTIONAL_DATA_FRAMEWORK.md will get stale.
**Outcome:** Define refresh cadence:
- After each product milestone?
- Monthly?
- When something feels wrong?

### R8: Cross-Product Pattern Mining
**Status:** `[ ]` (blocked on PA3)
**Why:** With 2+ products, can mine for shared patterns.
**Outcome:** After Product #2, run analysis:
- What patterns appear in both Ruliad and Product #2?
- Should they be extracted to Dex framework?

### R9: Failure Analysis Process
**Status:** `[ ]`
**Why:** When things don't work, go bottom-up to find root cause.
**Outcome:** Process for:
- Identifying failure pattern
- Tracing up cascade (which layer broke?)
- Updating that layer

### R10: Success Analysis Process
**Status:** `[ ]`
**Why:** When things work well, go bottom-up to understand why.
**Outcome:** Process for:
- Identifying success pattern
- Tracing up cascade (which layer enabled it?)
- Codifying for reuse

### R11: Living Document Evolution Tracking
**Status:** `[ ]`
**Why:** Living docs evolve, but how do we track *why* they changed?
**Outcome:** Process or tool:
- Git history shows *what* changed
- Need to capture *why* (in commit messages? doc changelog?)

---

## DEX INTEGRATION WORK

### D1: Define Dex ↔ Product Relationship Formally
**Status:** `[ ]`
**Why:** Currently informal ("products use conductor, feed back learnings").
**Outcome:** Document:
- What does Dex provide? (framework, patterns, templates)
- What do products provide? (validation, extensions, new patterns)
- How does feedback loop work?

### D2: Create Product Pipeline Document
**Status:** `[ ]`
**Why:** Need systematic way to generate/evaluate product ideas.
**Outcome:** Document with:
- Brainstormed product ideas
- Evaluation criteria (from PO2)
- Priority ranking
- Next 3 products roadmap

### D3: Evaluate Conductor Extraction After Product #2
**Status:** `[ ]` (blocked on PA3)
**Why:** Should conductor be shared package? Can't know until we have 2 products.
**Outcome:** After Product #2 inception:
- Did we duplicate work?
- Did duplication cause issues?
- Would shared package help or hurt?
- Make decision and implement

### D4: Create Dex Methodology Guide for External Users
**Status:** `[ ]`
**Why:** If others want to use Dex framework, need guide.
**Outcome:** Tutorial/guide:
- What is Dex?
- How to use Bidirectional Data Framework
- How to run extraction
- How to build a product
- Examples

### D5: Define Contribution Model
**Status:** `[ ]`
**Why:** GPL v3 means others can fork/extend. How do contributions come back?
**Outcome:** Document:
- How to propose changes to framework
- How to share new products
- How to contribute patterns
- Community structure (if any)

---

## PRIORITY MATRIX

### Critical Path (Do First)
These unblock everything else:

1. **P1:** Formalize transformation types (enables PA6, D1)
2. **PD1:** Create track templates (enables all PROCEDURE work)
3. **PA3:** Create Product #2 (validates framework, generates patterns, unblocks R2, R3, D3)

### High Value (Do Soon)
Important but not blocking:

- **V2:** Deepen data value paradox
- **P3:** Operationalize orthogonal divergence
- **PR2:** Define divergent day workflow
- **PA2:** Document existing patterns formally

### Fill-In (Do When Ready)
Useful but can wait:

- **PO4:** Error handling policy
- **PD5:** Git workflow cheatsheet
- **PA4:** Examples of sessions
- **R7:** Asset inventory refresh cadence

### Defer (Do Eventually)
Nice to have:

- **V3:** Define cyberpunk more precisely
- **PD6:** Product bootstrap script
- **D4:** Methodology guide for external users
- **D5:** Contribution model

---

## USING THIS BACKLOG

**For Planning:**
- Pick items from Critical Path first
- Match items to your energy/mode (divergent = V/P/PA, convergent = PO/PR/PD)
- Create tracks for PROCEDURE+ level work

**For Tracking:**
- Update status checkboxes as you work
- Cross-reference track IDs when created
- Refresh after major milestones

**For Evolving:**
- Add items as gaps discovered
- Remove items if invalidated
- Resort priority as landscape changes

---

**Status:** Living backlog, v1.0 created 2026-02-03
**Last Updated:** 2026-02-03
**Next Review:** After track creation and Product #2 inception
