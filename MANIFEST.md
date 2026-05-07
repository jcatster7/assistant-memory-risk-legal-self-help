---
paper: "134-assistant-memory-risk"
title: "Assistant Memory Risk In Legal Self-Help"
artifact_repo: "https://github.com/jcatster7/assistant-memory-risk-legal-self-help"
last_updated: "2026-05-06"
status: "public artifact release"
public_release: true
real_data:
  - path: "data/source_bundle_manifest.json"
    sha256: "45968707cc70fdcef6da6776076042a950fe5fd336354e1af04e08a67b4d733d"
    generated_by: "Sanitized public copy of the local Maria source-bundle manifest"
    note: "Absolute local paths are replaced with public placeholders; counts and summary values are unchanged."
  - path: "data/controlled_stimuli.json"
    sha256: "d1283343eb5ad04ff5997204ca001f5ecffd76878451af0e8137efcd8e9f7adb"
    generated_by: "Controlled benchmark stimulus design"
    note: "Eighteen controlled policy-scenario rows."
  - path: "scripts/run_pilot.mjs"
    sha256: "0851fea433f90bdda27eac55c6f48661da6727a08acb96046ea32948ecc7d1d8"
    generated_by: "Local benchmark harness"
    note: "Replay script with a fixed timestamp for checksum-stable reruns."
  - path: "results/pilot_summary.json"
    sha256: "86c927f5bbac77c784575cc34dbf62e227c17f6c597f9617442be1da08e8739e"
    generated_by: "scripts/run_pilot.mjs"
    note: "Public replay summary regenerated from the sanitized source-bundle manifest."
  - path: "results/pilot_results.csv"
    sha256: "5cd89643d19da34b285da824bda7da1bcbfdcf4b916e62e1b83db49ad4bab0f5"
    generated_by: "scripts/run_pilot.mjs"
    note: "Flat metrics table regenerated from the sanitized source-bundle manifest."
  - path: "paper/paper.md"
    sha256: "762994b621f0d6af60789ebaa2e5ba8debae0981aa77ebad1acf0a9b58844bb1"
    generated_by: "Canonical manuscript source"
    note: "Public manuscript source mirrored from the canonical paper directory."
  - path: "paper/Assistant Memory Risk In Legal Self-Help.pdf"
    sha256: "9785d2c01a93e82131ce47b2fe2ce18120d26847c5644f2ecf92550c6aee1d13"
    generated_by: "Canonical ACM build"
    note: "Final PDF included as a linked research artifact."
lost_data: []
synthetic_or_draft_data: []
provenance_notes: |
  This repository is a public reproducibility package for a controlled Mac-local benchmark. It uses no external validators, no paid APIs, and no external GPU compute. Public release sanitizes absolute local filesystem paths and local bundle directory labels while preserving the reported scenario counts, policy counts, and aggregate benchmark metrics.
---

# Manifest - Assistant Memory Risk In Legal Self-Help

This manifest is the source of truth for the public artifact release.

Use it together with:

- `checksums.sha256` for file verification
- `REPRODUCIBILITY.md` for replay steps
- `NOTICE_PUBLIC_RELEASE.md` for the public-release boundary
