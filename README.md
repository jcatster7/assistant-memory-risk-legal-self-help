# Assistant Memory Risk In Legal Self-Help

Artifact repository for the paper *Assistant Memory Risk In Legal Self-Help*.

This repository packages the materials needed to reproduce the controlled local benchmark reported in the paper:

- controlled stimulus file
- source-bundle manifest
- replay script
- generated results
- manuscript source
- final submission PDF
- checksums and verification instructions

## What This Repository Reproduces

The benchmark measures the tradeoff between repeated-question reduction and memory safety in legal self-help assistants. It compares three memory policies:

- `no_memory`
- `raw_memory`
- `provenance_scoped_memory`

The reproduced headline outputs are:

- `results/pilot_summary.json`
- `results/pilot_results.csv`

## Quick Start

Requirements:

- Node.js 25 or newer
- `sha256sum`

Reproduce the benchmark:

```bash
npm run reproduce
```

Verify the repository checksums:

```bash
npm run verify
```

## Public Release Notes

This public artifact release intentionally sanitizes:

- absolute local filesystem paths
- local bundle directory labels that are not needed to reproduce the benchmark

The benchmark logic, controlled stimuli, scenario counts, and reported aggregate metrics are unchanged. See [NOTICE_PUBLIC_RELEASE.md](./NOTICE_PUBLIC_RELEASE.md) for the exact release boundary.

## Repository Layout

- `paper/` manuscript source and final PDF
- `data/` public benchmark inputs
- `results/` reproduced benchmark outputs
- `scripts/` replay and verification scripts
- `MANIFEST.md` artifact manifest with reproducibility scope
- `REPRODUCIBILITY.md` step-by-step replay guidance
- `CITATION.cff` citation metadata

## Citation

Use the metadata in `CITATION.cff`, or cite the paper directly from `paper/`.

## Rights

`LICENSE` applies to the code and reproducibility scaffolding in this repository.

The manuscript source and PDF in `paper/` are included as linked research artifacts. See [RIGHTS.md](./RIGHTS.md) for the release boundary.
