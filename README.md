# DentVisual

**Clear dental explanations in seconds**

DentVisual is a chairside visual-reference Progressive Web App for dentists to use while explaining common dental procedures, appliances, conditions and materials to patients. The dentist controls the app; it is not intended for independent patient diagnosis or self-treatment.

## Main features

- Fast search-first workflow: Search → Open topic → Show visual → Swipe cards → Return to consultation.
- 16 completed MVP topics with bilingual English / Bahasa Melayu titles, descriptions, keywords and visual cards.
- Strong modules for dental crowns and chrome cobalt dentures.
- Original reusable React SVG-style illustration components with labels.
- Category browsing, all topics, favourites and eight-topic recent history.
- Language modes: English, Bahasa Melayu and bilingual.
- Full-screen chairside presentation mode for tablets and landscape use.
- Temporary annotation mode with pen, highlighter, undo and clear.
- LocalStorage persistence for language, favourites and recent topics.
- PWA configuration for installability and offline app-shell caching.
- No backend, login, analytics, patient records, remote fonts or remote image assets.

## Screenshots

> Placeholder: Home screen with prominent search bar.

> Placeholder: Crown topic chairside card.

> Placeholder: Chrome cobalt denture framework comparison.

## Technology stack

- React
- TypeScript
- Vite
- Tailwind CSS utility classes
- Lucide React icons
- React Router
- Local TypeScript content files
- LocalStorage
- vite-plugin-pwa
- Vitest

## Installation

```bash
npm install
```

If the package registry is unavailable in the execution environment, retry on a network that can access npm packages.

## Development commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

## Production build

```bash
npm run build
```

The production assets are emitted to `dist/` by Vite.

## PWA installation

DentVisual includes a manifest and service worker configuration through `vite-plugin-pwa`. After first loading the production build in a supported browser, choose the browser's install action. The app shell and local assets are cached for offline use after installation / first load.

## Content architecture

- `src/types/content.ts` defines `Topic`, `TopicCard`, labels and language modes.
- `src/data/categories.ts` defines browse categories and reference terms.
- `src/data/topics/index.ts` contains bilingual topic content, keywords, cards, related topics and the developer-only prototype illustration note.
- `src/lib/search.ts` contains local instant search logic.
- `src/lib/storage.ts` contains LocalStorage helpers.
- `src/components/illustrations/DentalIllustration.tsx` contains reusable original SVG illustration primitives.

## Adding a new topic

1. Add a `Topic` entry in `src/data/topics/index.ts`.
2. Include English and Bahasa Melayu titles and descriptions.
3. Add English, BM, abbreviation, misspelling and Malaysian patient-terminology keywords.
4. Provide at least three meaningful cards.
5. Add related topic IDs.
6. Reuse or add an `illustrationId` handled by `DentalIllustration`.
7. Run `npm run test`, `npm run typecheck` and `npm run build`.

## Replacing an SVG illustration

1. Keep the `illustrationId` stable where possible.
2. Update or add a reusable primitive in `src/components/illustrations/DentalIllustration.tsx`.
3. Keep labels data-driven through card `labels`.
4. Ensure the illustration remains non-graphic, patient-friendly and accessible.
5. Run the full verification commands.

## Clinical-review disclaimer

DentVisual is intended to support explanations by qualified dental professionals. It does not replace clinical examination, diagnosis, professional judgement or informed consent. Prototype illustrations require clinical and artwork review before commercial release.

## Suggested future roadmap

- Professionally commissioned clinical artwork.
- Dentist-curated topic packs by specialty.
- Dark mode.
- Optional print/share consultation summary without patient data.
- More orthodontic, periodontal and surgical topics.
- Expanded BM localization review by Malaysian clinicians.
