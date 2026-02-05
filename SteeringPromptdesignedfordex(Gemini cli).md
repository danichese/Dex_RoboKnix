# Steering Prompt: Dex Framework Upgrade via Gemini CLI

> This file is a steering prompt. Copy/paste it into Gemini CLI to upgrade the existing `.md` softcode in the Dex_RoboKnix repository using the output from `dex.md`.
>
> Created: 2026-02-05
> For use with: Gemini CLI (gemini-2.5-pro or equivalent)
> Input required: This prompt + the `dex.md` file + existing repo `.md` files

---

## How to Use This Prompt

### Prerequisites

1. Have Gemini CLI installed and authenticated
2. Be in the `Dex_RoboKnix` repository root directory
3. Have `dex.md` in the repo (created by the Opus 4.6 session)

### Execution

Run Gemini CLI from the repo root. Paste the steering prompt below. Gemini will read the repository files and apply the upgrades.

```bash
# From the Dex_RoboKnix directory:
gemini
```

Then paste everything below the `--- START PROMPT ---` line.

---

## --- START PROMPT ---

You are operating as a Dex RoboKnix framework upgrader. You have been given a `dex.md` file that contains a compressed analysis of how the Bidirectional Data Framework (BDF) operates as a prompt instruction set for LLMs. Your job is to upgrade the existing `.md` files in this repository to incorporate the discoveries from `dex.md`.

### Context: What You Are Working With

This repository contains the Dex RoboKnix framework — a cyberpunk methodology for building cognitive tools through systematic knowledge transformation. The core concept is the **Bidirectional Data Framework** (BDF): a 6-layer system (VALUES → PRINCIPLES → POLICY → PROCESS → PROCEDURE → PATTERN) where you decompose top-down and recompose bottom-up, and each transformation between layers is a capturable asset.

The `dex.md` file documents a discovery: the BDF works not just as a human thinking tool, but as a **prompt instruction set for LLMs**. The `dex()` function syntax activates BDF processing in the model's context. This means the framework is self-executing — it describes how to process itself.

### Your Upgrade Tasks

Read each file listed below. For each one, apply the specific upgrade instructions. Do not rewrite files from scratch — make targeted additions that integrate the `dex.md` discoveries without disrupting existing content.

#### 1. Upgrade `BIDIRECTIONAL_DATA_FRAMEWORK.md`

**What to add:** A new section after the "RECOMPOSITION" section titled `## BDF AS PROMPT INSTRUCTION SET`.

**Content for this section:**
- Explain that the BDF operates as an LLM instruction set, not just a human methodology
- Document the `dex()` function syntax: wrapping an instruction in `dex()` tells the model to process it through BDF layers
- List the key prompt operators discovered:
  - `assign mve` = decompose to PATTERN layer (extract minimum viable meaning)
  - `reduce to [categories]` = recompose upward to structured understanding
  - `DexOutput(format)` = format as specific PROCEDURE-layer artefact
  - `in human terms` = set output readability to PROCEDURE layer
  - `Assign to claude memory` = hold compressed output in active context
- Include the three-pass architecture: DECOMPOSE → RECOMPOSE → FORMAT
- Note that this was validated on Opus 4.6 and produced stable (convergent) output across runs
- Add to the ASSET INVENTORY table under PRINCIPLES: "BDF as LLM instruction set | Status: Validated"
- Add to the ASSET INVENTORY table under PATTERN: "dex() prompt operator syntax | Status: Validated"

**Tone:** Keep the existing cyberpunk/technical tone. Write like the rest of the document — direct, no fluff, framework-aware.

#### 2. Upgrade `DEX_ROBOKNIX.md`

**What to add:** Under "Layer 2: PRINCIPLES", add a new principle:

**Principle name:** `### Framework as Instruction Set`

**Content:**
- The BDF is not just a thinking model — it is executable by LLMs as a prompt instruction set
- The `dex()` syntax creates a namespace that constrains model interpretation to BDF operations
- This means Dex RoboKnix is self-executing: the framework documents describe how to process themselves
- Derived from: Visible Thinking, Making as Becoming

**Also add** under "What Dex RoboKnix Owns → Tools (Methodologies)" table:

| Tool | Purpose | Document |
|------|---------|----------|
| **dex() Prompt Operator** | BDF-as-LLM-instruction-set | [dex.md](./dex.md) |

#### 3. Upgrade `conductor/further-work.md`

**What to add:** New items in the appropriate layers:

Under **Layer 2: PRINCIPLES**:
```
### P5: Formalize dex() Prompt Operator Syntax
**Status:** `[~]` (validated but not formalized)
**Why:** dex() works as prompt operator but syntax is ad-hoc. Need formal grammar.
**Outcome:** Create dex() operator reference:
- Valid operations (assign mve, reduce to, DexOutput)
- Composability rules (chaining operations)
- Cross-platform compatibility (which models support it)
```

Under **Layer 6: PATTERN**:
```
### PA7: Test dex() Operator on Multiple LLMs
**Status:** `[ ]`
**Why:** Validated on Opus 4.6 only. Need to test Gemini, GPT, open-source models.
**Outcome:** Compatibility matrix:
- Which models respect the dex() namespace framing
- Which models produce stable (convergent) output
- Minimum context window required for MVE extraction
```

Under **PRIORITY MATRIX → High Value**:
- Add: **P5:** Formalize dex() prompt operator syntax

#### 4. Upgrade `conductor/product.md`

**What to add:** Under "The Dex RoboKnix Approach", add a 5th item:

```
5. **Use the Framework as Its Own Prompt**
   - The BDF is self-executing — it processes itself
   - dex() syntax wraps instructions in BDF-aware processing
   - Cross-platform: export Dex-processed output to other AI systems
   - Validated: Opus 4.6 produces stable output through the dex() chain
```

#### 5. Upgrade `README.md`

**What to add:** In the "Core Philosophy" table, add a 5th entry (new row):

```html
<tr>
<td width="100%" valign="top">

### Self-Executing Framework
The BDF is both documentation and instruction set.
`dex()` syntax makes any LLM a Dex processor.

**The framework runs itself.**

</td>
</tr>
```

Also in the "Framework Status" table, add under PRINCIPLES row a note:
- Update PRINCIPLES to note: "BDF-as-instruction-set validated"

#### 6. Upgrade `conductor/index.md`

**What to add:** Under "Key Concepts", add:

```
### dex() Prompt Operator
The BDF can be invoked as an LLM instruction set using `dex()` syntax.
Operations: `assign mve` (decompose), `reduce to` (recompose), `DexOutput` (format).
See [dex.md](../dex.md) for full analysis.
```

### Rules for Making These Changes

1. **Do not delete existing content** — only add to it
2. **Match the existing tone** — cyberpunk, direct, framework-aware, no corporate language
3. **Use the existing formatting conventions** — markdown tables, code blocks, section headers match the surrounding style
4. **Preserve all existing links** — do not break any cross-references
5. **Mark new content as v1.1** — update the "Status" footer in each file to note the dex.md integration
6. **Keep it concise** — the existing docs are already comprehensive. Add the minimum necessary to capture the dex() discovery
7. **Do not add emojis** unless the file already uses them (README.md uses some, others don't)

### Verification

After making all changes, run through this checklist:

- [ ] `BIDIRECTIONAL_DATA_FRAMEWORK.md` has new "BDF AS PROMPT INSTRUCTION SET" section
- [ ] `DEX_ROBOKNIX.md` has "Framework as Instruction Set" principle + tools table entry
- [ ] `conductor/further-work.md` has P5 and PA7 items + priority matrix update
- [ ] `conductor/product.md` has 5th approach item
- [ ] `README.md` has self-executing framework in philosophy + status note
- [ ] `conductor/index.md` has dex() prompt operator in key concepts
- [ ] No existing content was deleted or broken
- [ ] All new content matches surrounding tone and format
- [ ] Links to `dex.md` are correct relative paths

### Output

Show me the diffs for each file. Present them as unified diff format so I can review before committing. Do not commit — just show the changes.

## --- END PROMPT ---

---

## What This Steering Prompt Does (In Human Terms)

This prompt tells Gemini CLI to:

1. **Read `dex.md`** — understand that the BDF works as an LLM prompt instruction set
2. **Read every `.md` file in the repo** — understand the existing framework documentation
3. **Make targeted additions to 6 files** — integrate the `dex()` discovery without rewriting anything
4. **Show diffs, not commit** — let you review before applying changes

The net effect: the repository's softcode (`.md` documentation) gets upgraded to reflect that the Bidirectional Data Framework is not just a human thinking tool but a self-executing instruction set that LLMs can process through `dex()` syntax.

This is the BDF applied to itself: using the framework's own methodology (decompose → recompose → deliver) to upgrade the framework's own documentation. Recursive bootstrapping through prompt chaining across two different AI systems (Opus 4.6 → Gemini CLI).

---

## Why Gemini CLI Specifically

The steering prompt is designed for Gemini CLI because:

1. **File system access** — Gemini CLI can read the repo files directly
2. **Long context** — Gemini 2.5 Pro handles the full repo context
3. **Instruction following** — the structured task format (numbered files, specific sections, verification checklist) maps to Gemini's strengths
4. **Cross-platform validation** — using a different model to upgrade the framework tests whether the BDF is model-agnostic (if Gemini understands and correctly applies the dex() concept, it validates cross-platform portability)

---

**Status:** Ready for use
**Input:** Paste into Gemini CLI from Dex_RoboKnix repo root
**Expected output:** Unified diffs for 6 files
**Next step:** Review diffs, apply, commit
