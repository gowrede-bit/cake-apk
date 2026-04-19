import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const [platform, mode] = process.argv.slice(2);
const allowedPlatforms = new Set(['android', 'ios']);
const allowedModes = new Set(['testing', 'distribution']);

if (!allowedPlatforms.has(platform) || !allowedModes.has(mode)) {
  console.error(
    'Usage: node scripts/mobile-build-stub.mjs <android|ios> <testing|distribution>'
  );
  process.exit(1);
}

const now = new Date().toISOString();
const defaultOutput = path.join('artifacts', `${platform}-${mode}-stub.log`);
const outputPath = process.env.STUB_LOG_PATH || defaultOutput;

const summaryLine =
  platform === 'ios' && mode === 'distribution'
    ? 'Target artifact: IPA (distribution).'
    : platform === 'ios' && mode === 'testing'
      ? 'Target artifact: iOS simulator/testing build.'
      : platform === 'android' && mode === 'distribution'
        ? 'Target artifact: Android release APK/AAB (distribution).'
        : 'Target artifact: Android debug/testing APK.';

const lines = [
  '=== Mobile Build Stub ===',
  `timestamp: ${now}`,
  `platform: ${platform}`,
  `mode: ${mode}`,
  summaryLine,
  'status: STUB_ONLY',
  'details: No signing credentials or EAS pipeline is configured yet.',
  'next_step: Replace this stub command with real EAS/local build command when credentials are ready.',
];

const logContent = `${lines.join('\n')}\n`;
mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, logContent, 'utf-8');

console.log(logContent.trim());
console.log(`stub_log_path=${outputPath}`);
