import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const APARTMENTS_DIR = path.join(process.cwd(), 'content', 'apartments');

export function getAllApartments() {
  const files = fs.readdirSync(APARTMENTS_DIR).filter((f) => f.endsWith('.yaml'));
  const apartments = files.map((file) => {
    const raw = fs.readFileSync(path.join(APARTMENTS_DIR, file), 'utf8');
    return yaml.load(raw);
  });
  // Available first, then available-from (soonest first), then everything else
  return apartments.sort((a, b) => {
    const rank = (apt) => (apt.status === 'available' ? 0 : apt.status === 'available_from' ? 1 : 2);
    return rank(a) - rank(b);
  });
}

export function getApartmentBySlug(slug) {
  const filePath = path.join(APARTMENTS_DIR, `${slug}.yaml`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  return yaml.load(raw);
}

export function getApartmentsByArea(areaSlug) {
  return getAllApartments().filter((apt) => apt.area_slug === areaSlug);
}

export function getAllApartmentSlugs() {
  const files = fs.readdirSync(APARTMENTS_DIR).filter((f) => f.endsWith('.yaml'));
  return files.map((f) => f.replace(/\.yaml$/, ''));
}
