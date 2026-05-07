---
title: "Assistant Memory Risk In Legal Self-Help"
author: "Justin Monk"
affiliation: "Foltz Research"
country: "United States"
tags: [paper, pilot, legal-ai, local-ai]
status: submission-ready
stage: 3-writing
created: 2026-05-04
modified: 2026-05-06
manifest: MANIFEST.md
---

# Assistant Memory Risk In Legal Self-Help

## Abstract

We evaluate memory policies for legal self-help assistants under repeated intake, contradiction updates, address changes, income updates, language-preference shifts, and cross-matter fact leakage. Memory can reduce user burden, but legal self-help settings make stale facts and private-information exposure unusually costly. We introduce a controlled local benchmark with 3 memory policies, 6 scenarios, and 18 policy-scenario rows: no memory, raw memory, and provenance-scoped memory. The replay script derives results from manifest-listed local artifacts and controlled stimuli. Raw memory reduces repeated questions from 156 to 28 but produces 21 stale-fact errors, 17 PII exposure events, and 0.00 task success. Provenance-scoped memory reduces repeated questions to 49 while preserving 0 stale-fact errors, 0 PII exposure events, and 1.00 task success. The result is not a live-user study or a commercial assistant audit. It is a reproducible local benchmark showing that legal self-help memory should be evaluated as a provenance and freshness-control problem, not only as a convenience feature.

## 1. Motivation

Legal self-help assistants repeatedly ask users for household facts, income, children, addresses, benefits, deadlines, and filing context. Memory seems attractive because it can reduce repeated intake. The same mechanism can also create risk: a stale address can enter a court packet, an outdated income fact can change benefit screening, or private household facts can leak into an answer where they are not needed.

This paper asks:

- **RQ1:** How much repeated intake can raw memory reduce?
- **RQ2:** What stale-fact and PII exposure risks appear when memory lacks provenance and freshness controls?
- **RQ3:** Can provenance-scoped memory preserve most convenience benefits while eliminating the controlled stale-fact and PII failures?

## 1.1 Reader Takeaway

For legal self-help, memory should not be evaluated only as a convenience feature. The useful question is whether remembered facts carry provenance, freshness, task scope, and privacy boundaries that prevent stale facts or unnecessary private details from entering the next legal-help step.

## 2. Related Work And Positioning

AI governance and security guidance increasingly treats privacy, data control, and context scoping as core risks. OWASP's LLM guidance identifies sensitive-information disclosure and excessive agency as major application risks. NIST AI RMF and the NIST generative AI profile emphasize risk measurement, documentation, and management for AI systems. California court AI guidance explicitly raises confidentiality concerns when information is provided to public generative AI systems.

This paper contributes a legal-self-help memory benchmark that is smaller and more concrete than those governance frameworks. It measures the tradeoff between repeated-question reduction and memory safety under controlled legal-help scenarios.

Current legal AI industry materials show that memory-adjacent concerns are already surfacing in practice, but mostly through the lenses of traceability, source control, and enterprise governance rather than legal-self-help fact persistence. Harvey publicly advertises audit logs, data lifecycle management, and customer-set retention controls. Thomson Reuters states that CoCounsel prompt retention is configurable at the organization level and that customer data is not used to train underlying models. Legora emphasizes that its assistant can draw from internal databases, the open web, and trusted legal content while keeping answers cited and verifiable. vLex positions Vincent as producing legal answers with full citations over a very large legal corpus. These public materials show strong market attention to cited outputs, retention, and auditability. They do not, at least in public product descriptions, resolve the narrower question studied here: when a legal assistant remembers user-specific facts across turns, what provenance, freshness, and scope controls prevent stale or over-broad memory from entering the next legal-help step?

LegalWebAgent is relevant because it shows access-to-justice agents moving from answers into stateful browsing and action. That direction makes memory attractive but risky: if an assistant carries context across intake, form completion, legal-aid handoff, or appointment workflows, the evaluation must include provenance, freshness, and scope controls rather than only task success.

The Foltz Local Civic OS Testbed technical report documents the shared local harness, manifest boundary, and no-external-validator posture used by this paper. This paper contributes the memory-policy slice of that broader local measurement program.

This companion submission is not a variant of the certification, defensibility, readiness, tool-calling, language-access, or clerk-boundary papers. It uses the same local-replay discipline, but changes the evaluation object to assistant memory policy and changes the measured failures to repeated-question burden, stale-fact errors, PII exposure, and task success.

## 3. Memory Policies

The benchmark compares three policies:

- **No memory:** the assistant asks again and does not reuse prior session facts.
- **Raw memory:** the assistant reuses prior facts without provenance or freshness checks.
- **Provenance-scoped memory:** the assistant reuses facts only when provenance, freshness, and task scope permit reuse.

The policies are evaluated on repeated-intake, contradiction-update, address-change, income-update, language-preference, and cross-matter leakage scenarios. The benchmark measures repeated questions, stale-fact errors, PII exposure events, and task success.

## 4. Methods

This study uses a fresh Mac-local evidence bundle plus the paper-specific controlled stimulus file listed in `MANIFEST.md`. The run uses no external validators, no external GPU compute, and no hosted filing or legal research service. The replay script `scripts/run_pilot.mjs` emits the result summary and flat CSV table from manifest-listed local artifacts.

The source bundle records 8 passed checks, 0 failures, 5 generated PDFs, 5 valid PDFs, 5 gold-passing forms, 689/689 matched expected fields, 169 deterministic eligibility rules evaluated, and 10 hashed source files. The memory benchmark then evaluates 18 controlled policy-scenario rows.

### 4.1 Data And Materials

The study materials are the manifest-listed source bundle, `data/controlled_stimuli.json`, `scripts/run_pilot.mjs`, `results/pilot_summary.json`, and `results/pilot_results.csv`. The controlled stimuli cover repeated intake, contradiction updates, address changes, income updates, language-preference shifts, and cross-matter leakage.

These are local controlled stimuli, not live-user transcripts and not commercial assistant observations. The variables are the memory policy, scenario type, repeated-question count, stale-fact error count, PII exposure count, and task-success score.

## 5. Results

The summary metrics are:

- **No memory:** 156 repeated questions, 0 stale-fact errors, 0 PII exposure events, and 1.00 task success.
- **Raw memory:** 28 repeated questions, 21 stale-fact errors, 17 PII exposure events, and 0.00 task success.
- **Provenance-scoped memory:** 49 repeated questions, 0 stale-fact errors, 0 PII exposure events, and 1.00 task success.

Raw memory achieves the lowest repeated-question count but fails all six scenarios. Provenance-scoped memory preserves most of the convenience gain while avoiding the controlled stale-fact and PII failures.

## 6. Interpretation

The benchmark exposes a false economy. Raw memory minimizes repeated questions, but in this legal-help setting that reduction comes with stale-fact and PII exposure failures. No memory is safe in the controlled scenarios but imposes the highest repeated-intake burden. Provenance-scoped memory is the useful middle path: it reduces repeated questions substantially while keeping stale-fact and PII exposure counts at zero.

The result should be read as a controlled policy benchmark. It does not prove that provenance-scoped memory solves every memory risk; it shows that memory convenience should not be measured without freshness, scope, and privacy failure metrics.

## 7. Non-Claims

The paper does not claim:

- that live users were studied;
- that any commercial assistant was audited;
- that provenance-scoped memory eliminates all privacy risk;
- that the controlled stimuli represent all legal self-help memory hazards;
- that the benchmark measures legal correctness or legal outcomes.

## 8. Limitations

The sessions are controlled simulations. A stronger version should add longer session chains and ethically sourced anonymized support transcripts if such data can be used without increasing privacy risk. No external validators are used; this keeps the benchmark local and cheap, but limits external validity.

## 9. Reproducibility

The reproducibility package is maintained in the [artifact repository](https://github.com/jcatster7/assistant-memory-risk). It contains the path-redacted source-bundle manifest, controlled stimulus file, replay script, reproduced result files, manuscript source, final PDF, and repository checksums.

`MANIFEST.md` is the checksum gate. From the repository root, `node scripts/run_pilot.mjs` regenerates the JSON summary and flat CSV table from the manifest-listed inputs. The public package redacts local filesystem paths and local bundle labels while preserving the controlled stimulus set, policy counts, scenario counts, and aggregate benchmark metrics.

The replay performs no network calls and uses no external validators, paid APIs, GPU services, live-user transcripts, or hosted filing systems. The PDF is a separate formatting build produced by `./build.sh`. Regenerated artifacts should be compared against the manifest hashes before citing new results.

## 10. References

\begingroup\footnotesize

- OWASP GenAI Security Project. 2025. *OWASP Top 10 for LLM Applications 2025.* [Resource page](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/).
- NIST. *AI Risk Management Framework (AI RMF 1.0).* [NIST AI 100-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).
- NIST. *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile.* [NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf).
- California Courts Newsroom. *Q&A: Generative Artificial Intelligence and the California Judicial Branch.* [Article](https://newsroom.courts.ca.gov/news/qa-generative-artificial-intelligence-and-california-judicial-branch).
- Harvey. *Secure legal AI for the most sensitive matters.* [Page](https://www.harvey.ai/brand/security).
- Thomson Reuters. *CoCounsel: The industry-leading AI for professionals.* [Page](https://www.thomsonreuters.com/en/cocounsel).
- Legora. *Legal research.* [Page](https://legora.com/product/legal-research).
- vLex. *What is Vincent?* [Knowledge base](https://support.vlex.com/vincent-by-vlex/vincent/getting-started-with-vincent/understanding-what-vincent-is).
- Jinzhe Tan and Karim Benyekhlef. 2025. *LegalWebAgent: Empowering Access to Justice via LLM-Based Web Agents.* arXiv:2512.04105.
- Justin Monk. 2026. *The Foltz Local Civic OS Testbed.* Technical report.
- Justin Monk. 2026. *Assistant Memory Risk In Legal Self-Help Artifact Repository.* GitHub repository. [Repository](https://github.com/jcatster7/assistant-memory-risk).
- Justin Monk. 2026. *The Evidence Gap in Consumer Legal AI: Defensibility Packages Between Attorney Recordkeeping and Enterprise AI Audit Trails.* Companion manuscript.
- Justin Monk. 2026. *Certifying Consumer Legal AI: Evidence Packages for Courts, Bars, and Legal Aid.* Companion manuscript.
- Justin Monk. 2026. *Tool-Calling Protocols For Offline Legal Agents.* Companion manuscript.

\endgroup
