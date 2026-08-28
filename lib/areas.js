import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const AREAS_DIR = path.join(process.cwd(), 'content', 'areas');

export function getAllAreas() {
  const files = fs.readdirSync(AREAS_DIR).filter((f) => f.endsWith('.yaml'));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(AREAS_DIR, file), 'utf8');
    return yaml.load(raw);
  });
}

export function getAreaBySlug(slug) {
  const filePath = path.join(AREAS_DIR, `${slug}.yaml`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  return yaml.load(raw);
}

export function getAllAreaSlugs() {
  const files = fs.readdirSync(AREAS_DIR).filter((f) => f.endsWith('.yaml'));
  return files.map((f) => f.replace(/\.yaml$/, ''));
}
