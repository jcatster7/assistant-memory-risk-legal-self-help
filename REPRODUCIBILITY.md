# Reproducibility

## Environment

- Node.js 25 or newer
- `sha256sum`

The replay script has no external package dependencies.

## Replay

From the repository root:

```bash
node scripts/run_pilot.mjs
```

This regenerates:

- `results/pilot_summary.json`
- `results/pilot_results.csv`

## Verification

Run:

```bash
bash scripts/verify_artifacts.sh
```

This:

1. reruns the benchmark
2. checks the expected artifact checksums

## Expected Benchmark Shape

- 3 memory policies
- 6 scenario types
- 18 policy-scenario rows

## Notes

This is a controlled local benchmark, not a live-user study or a commercial assistant audit. The repository reproduces the reported memory-policy measurements and result files, not field deployment behavior or legal outcomes.
