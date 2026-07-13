type SvgModule = string | { default: string };

const uploadedSvgs = import.meta.glob<SvgModule>('../../assets/illustrations/**/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const normalise = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.svg$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const assetEntries = Object.entries(uploadedSvgs).map(([path, module]) => {
  const url = typeof module === 'string' ? module : module.default;
  const filename = path.split('/').pop() ?? path;
  const folder = path.split('/').slice(-2, -1)[0] ?? '';
  return {
    path,
    url,
    isProfessional: true as const,
    keys: new Set([normalise(filename), normalise(path), normalise(folder)]),
  };
});

const illustrationAliases: Record<string, string[]> = {
  'crown-overview': ['dental-crown', 'crown', 'crown-overview', 'sarung-gigi'],
  'crown-cross-section': ['crown-cross-section', 'crown-anatomy', 'tooth-core-crown'],
  'crown-process': ['crown-process', 'crown-stages', 'crown-treatment-stages'],
  'crown-indications': ['crown-indications', 'crown-uses'],
  crown: ['dental-crown', 'crown', 'sarung-gigi'],
  'crown-components': ['crown-components', 'crown-anatomy'],
  'cocr-overview': ['chrome-cobalt-denture', 'cocr', 'cocr-overview', 'metal-denture', 'gigi-palsu-besi'],
  'cocr-components': ['cocr-components', 'chrome-cobalt-framework', 'framework-components'],
  'cocr-mouth': ['cocr-mouth', 'chrome-cobalt-mouth', 'in-mouth-placement'],
  cocr: ['chrome-cobalt-denture', 'cocr', 'chrome-cobalt'],
  'denture-comparison': ['acrylic-vs-chrome-cobalt-denture', 'denture-comparison', 'acrylic-vs-cocr'],
  acrylic: ['acrylic-denture', 'acrylic'],
  'acrylic-components': ['acrylic-denture-components', 'acrylic-components'],
  'acrylic-process': ['acrylic-denture-process', 'acrylic-process'],
  implant: ['dental-implant', 'implant', 'titanium-implant'],
  'implant-components': ['implant-components', 'implant-anatomy'],
  'implant-process': ['implant-process', 'implant-stages'],
  rct: ['root-canal-treatment', 'root-canal', 'rct'],
  'rct-components': ['rct-components', 'root-canal-anatomy'],
  'rct-process': ['rct-process', 'root-canal-process'],
};

export type IllustrationSource = {
  url: string;
  path: string;
  isProfessional: true;
};

export function getProfessionalIllustration(illustrationId: string): IllustrationSource | undefined {
  const candidates = [illustrationId, ...(illustrationAliases[illustrationId] ?? [])].map(normalise);
  return assetEntries.find((asset) => candidates.some((candidate) => asset.keys.has(candidate) || [...asset.keys].some((key) => key.includes(candidate) || candidate.includes(key)))) as IllustrationSource | undefined;
}

export function getProfessionalIllustrationInventory() {
  return assetEntries.map(({ path, url }) => ({ path, url }));
}
