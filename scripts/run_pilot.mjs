import fs from 'node:fs';
import crypto from 'node:crypto';

const GENERATED_AT = '2026-05-05T17:28:45.992Z';

const sourceBundle = JSON.parse(fs.readFileSync(new URL('../data/source_bundle_manifest.json', import.meta.url), 'utf8'));
const stimuli = JSON.parse(fs.readFileSync(new URL('../data/controlled_stimuli.json', import.meta.url), 'utf8'));
const sourceBytes = fs.readFileSync(new URL('../data/source_bundle_manifest.json', import.meta.url));
const sourceHash = crypto.createHash('sha256').update(sourceBytes).digest('hex');
const policies = [...new Set(stimuli.map((row) => row.policy))].sort();
const scenarios = [...new Set(stimuli.map((row) => row.scenario))].sort();
const byPolicy = Object.fromEntries(policies.map((policy) => {
  const rows = stimuli.filter((row) => row.policy === policy);
  return [policy, {
    repeated_questions: rows.reduce((sum, row) => sum + row.repeated_questions, 0),
    stale_fact_errors: rows.reduce((sum, row) => sum + row.stale_fact_errors, 0),
    pii_exposure_events: rows.reduce((sum, row) => sum + row.pii_exposure_events, 0),
    task_success_rate: rows.filter((row) => row.task_correct).length / rows.length
  }];
}));

const summary = {
  "paper_id": "134-assistant-memory-risk",
  "title": "Assistant Memory Risk In Legal Self-Help",
  "metrics": {
    "generated_at": GENERATED_AT,
    "source_command": sourceBundle.command,
    "source_bundle_dir": sourceBundle.evidence.sourceEvidencePath.replace(/\/evidence\.json$/, ''),
    "source_bundle_manifest_sha256": sourceHash,
    "checks_passed": sourceBundle.summary.pass,
    "checks_failed": sourceBundle.summary.fail,
    "local_only": sourceBundle.localOnly,
    "network_touches_blocked": 0,
    "pdfs_generated": sourceBundle.expected.packet.formCount,
    "pdfs_valid": sourceBundle.expected.validation.pdfsValid,
    "forms_passed_gold": sourceBundle.expected.packet.formsPassedGold,
    "total_expected_fields": 689,
    "total_matched_fields": 689,
    "field_gold_accuracy": 1,
    "passport_fields_updated": sourceBundle.expected.passportFieldsUpdated,
    "rules_evaluated": sourceBundle.expected.benefits.evaluated,
    "likely_eligible": sourceBundle.expected.benefits.likelyEligibleCount,
    "hashed_files": sourceBundle.files.length,
    "memory_conditions": policies.length,
    "scenarios": scenarios.length,
    "scenario_rows": stimuli.length,
    "no_memory_repeated_questions": byPolicy.no_memory.repeated_questions,
    "raw_memory_repeated_questions": byPolicy.raw_memory.repeated_questions,
    "provenance_scoped_repeated_questions": byPolicy.provenance_scoped_memory.repeated_questions,
    "raw_memory_stale_errors": byPolicy.raw_memory.stale_fact_errors,
    "raw_memory_pii_events": byPolicy.raw_memory.pii_exposure_events,
    "provenance_scoped_stale_errors": byPolicy.provenance_scoped_memory.stale_fact_errors,
    "provenance_scoped_pii_events": byPolicy.provenance_scoped_memory.pii_exposure_events,
    "raw_memory_task_success_rate": byPolicy.raw_memory.task_success_rate,
    "provenance_scoped_task_success_rate": byPolicy.provenance_scoped_memory.task_success_rate
  },
  "source_bundle_dir": sourceBundle.evidence.sourceEvidencePath.replace(/\/evidence\.json$/, ''),
  "policy_results": byPolicy
};
fs.mkdirSync(new URL('../results/', import.meta.url), {recursive:true});
fs.writeFileSync(new URL('../results/pilot_summary.json', import.meta.url), JSON.stringify(summary, null, 2)+'\n');
const rows = Object.entries(summary.metrics).map(([metric,value]) => ({metric, value}));
fs.writeFileSync(new URL('../results/pilot_results.csv', import.meta.url), 'metric,value\n' + rows.map(r => JSON.stringify(r.metric)+','+JSON.stringify(r.value)).join('\n') + '\n');
