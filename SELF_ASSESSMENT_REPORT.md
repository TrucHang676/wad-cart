# Self-assessment — IA#1

Submitted by: 23120201 — Nguyễn Thị Trúc Hằng

Repository: https://github.com/TrucHang676/wad-cart

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | src/cart.js (commit 9a280b2). Worked example returns `467400` as a number (`=== 467400` true); `>=` gives free shipping at the threshold; empty cart returns 0; `price: -1`, `qty: 1.5`, `qty: 0`, `qty: -1` throw RangeError — see test/cart.test.js. Extra probes outside the tests: `qty: NaN` and `qty: '2'` also throw; `price: 0` allowed |
| Tests | 20 | 20 | test/cart.test.js, 8 tests, `npm test` 8/8 green: 'the example from the slides', 'an empty cart returns 0', 'a subtotal just below the threshold pays shipping' (569999), 'a subtotal exactly at the threshold ships free' (540000), 'a negative price throws RangeError', 'a non-integer qty throws RangeError', 'a qty of 0 throws RangeError', 'a negative qty throws RangeError' (written by hand, commit 8bf58b0). Each test checks one rule; expected values come from the brief, not from the code |
| Harness | 20 | 20 | CLAUDE.md (commit ed3dc83, updated in 4c1dc65): stack, commands, style, five "Never" rules. Three gates: `npm test`, `npm run lint` (ESLint, commit b3c5efc), `npm run format:check` (Prettier, commit 4c1dc65). CI: .github/workflows/ci.yml (commit ad42b4c) runs all three on every push — runs #1–#3 red (lint on the unimplemented starter), green from 9a280b2 on, including 4c1dc65 with the format step |
| Brief | 15 | 15 | brief.md (commit 4f7964b): files it may touch and must not, contract, error cases, "no new dependencies", 7 tests with expected numbers, Done when. A fresh Claude Code session given only CLAUDE.md + brief.md produced the passing implementation in one prompt (AI-LOG.md, entry "cartTotal implementation and tests") — a stranger could give this brief and get my result |
| AI-LOG.md | 15 | 15 | AI-LOG.md: 10 entries, each with tool, request, kept / changed / rejected / by hand, and the commit hash to check it against the diff; entry "test for a negative qty" records the test I wrote by hand, entry "SELF_ASSESSMENT_REPORT.md" records the self-score I rejected. How the log was written is declared in its Note and under "What I did not manage" below |

## What I did not manage

- I wrote almost none of the production code or the tests by hand — only the negative-qty test (commit 8bf58b0).
  My other part was the brief draft, reading the diff against the slide 24 red flags, and running extra probes.
  I can explain every line, but most lines are the assistant's.
- AI-LOG.md was not written as I went: the setup and harness entries were drafted in one go by Claude Code after
  those commits, then translated into English.
- The format gate came late (commit 4c1dc65), after the implementation. Before it, my eslint.config.js went in with
  a 4-space indent against the 2-space rule in CLAUDE.md, and I caught that by reading, not by a gate (commit 4383bac).

## What I would do differently

Write each AI-LOG entry myself, right after each commit. Set up every gate — tests, lint and format — before writing
the first brief, not after. Write the tests by hand before handing the brief to the assistant, not one test after it.
