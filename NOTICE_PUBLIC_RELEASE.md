# Public Release Boundary

This repository is a public reproducibility package for the Paper 134 benchmark.

## Included

- replay script
- public source-bundle manifest
- controlled stimuli
- deterministic output files
- manuscript source
- final PDF
- artifact checksums

## Sanitized

- absolute local filesystem paths
- local bundle directory labels that are not necessary for aggregate benchmark reproduction

## Not Included

- raw local source-bundle files from the original Foltz workspace
- unrelated Foltz repository materials
- external credentials, API keys, or private local paths

## Why This Boundary Exists

The benchmark reported in the paper is a controlled memory-policy study. The replay script consumes the manifest summary and the controlled stimulus file, then emits deterministic result files. Public release therefore focuses on:

- numerical reproducibility
- artifact integrity
- transparent scope and non-claims

rather than redistributing a larger working tree.
