---
name: Obsidian & Gilt
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#303034'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#efc88e'
  on-tertiary: '#432c00'
  tertiary-container: '#d2ad75'
  on-tertiary-container: '#5a4012'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdeae'
  tertiary-fixed-dim: '#e7c187'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5c4214'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

The design system projects commanding stage presence, cinematic polish, and bespoke exclusivity. Engineered specifically for elite conference emcees, television hosts, and high-stakes moderators, the interface bridges editorial authority with broadcast luxury. 

The emotional response should feel like stepping backstage at a world-class auditorium: dramatic, quiet, impeccably prepared, and lit with precise spotlighting. It eschews generic tech minimalism in favor of an evocative **Editorial Dark Glass** aesthetic—pairing deep obsidian and charcoal structural planes with luminous warm champagne gold and subtle antique bronze accents. Every layout is calibrated to showcase gravitas, commanding media, high-production showreels, and verified prestige.

## Colors

The palette revolves around deep optical depths accented by metallic, light-reflecting tones:

- **Primary (`#D4AF37` - Champagne Gold):** Used for focal calls-to-action, key headlines, active highlights, and critical accolades. It functions as the stage spotlight across dark canvases.
- **Secondary (`#C5A059` - Pale Gilt):** A softer, brushed metallic tone intended for subtle borders, secondary accents, badges, and active hover states.
- **Tertiary (`#8C6D3B` - Antique Bronze):** A rich, grounded bronze used for decorative hairline dividers, structural brackets, and muted metadata indicators.
- **Neutral Canvas (`#0D0E11` - Obsidian Noir):** The primary root surface. Accompanied by layered atmospheric tints:
  - Surface Tier 1 (Background): `#0D0E11`
  - Surface Tier 2 (Card / Rail Base): `#14161C`
  - Surface Tier 3 (Raised / Floating Layers): `#1B1E26`
  - Neutral High (Primary Text): `#F5F5F7`
  - Neutral Medium (Secondary Text & Captions): `#9E9EA7`
  - Neutral Low (Borders & Inactive states): `rgba(255, 255, 255, 0.08)`

## Typography

The typographic pairing reflects red-carpet discipline. **Playfair Display** delivers dramatic editorial impact with deliberate contrast and sculpted serifs, evoking magazine editorial covers and broadcast program intros. **Hanken Grotesk** serves as the rational counterpoint: an exceptionally precise, legible modern grotesque that preserves clarity on high-density information grids, event agendas, and technical specs.

- Keep hero headings balanced and avoid multi-line runaways by enforcing maximum widths (`max-w-4xl`).
- Uppercase tracking (`letter-spacing: 0.06em` to `0.08em`) is reserved exclusively for `label-md` and `label-sm` (e.g., categories, timestamps, metadata, and prestige badges).
- Dynamic italic styling in Playfair Display should be used sparingly for narrative pull quotes and key prestige descriptors (e.g., *"Keynote Moderator"*, *"Master of Ceremonies"*).

## Layout & Spacing

The system operates on an asymmetric 12-column grid designed for cinematic rhythm and generous breathing room. 

- **Desktop (1280px+):** 12 columns with `gutter-desktop` (2.5rem / 40px) and `margin-desktop` (4rem / 64px), capped at a max-width container of `1440px`.
- **Tablet (768px - 1279px):** 8 columns, `1.5rem` gutters, and `2rem` page margins.
- **Mobile (Up to 767px):** 4 columns, `1rem` gutters, and `1.25rem` page margins.

Layout rhythm alternates between tight, structural informational clusters (e.g., booking specs, speaker bio specs) and widescreen showcase moments (edge-to-edge video reels, keynote panoramic photo modules). Section vertical spacing maintains a consistent rhythm of `5rem` to `8rem` on desktop to convey prestige through unhurried negative space.

## Elevation & Depth

Visual hierarchy leverages layered optical depth rather than traditional drop shadows:

- **Stage Backdrops & Radial Halos:** Primary surfaces sit atop a dark charcoal canvas, illuminated by subtle, warm champagne-tinted radial gradients (e.g., `radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)`) to mimic theatrical backlighting.
- **Frosted Charcoal Glass (Showreel & Card Containers):** `background: rgba(20, 22, 28, 0.65)` layered with `backdrop-filter: blur(16px)` and bounded by a razor-thin border: `1px solid rgba(212, 175, 55, 0.18)`.
- **Spotlight Hover States:** Hovering over media tiles or interactive booking cards enhances the border to `rgba(212, 175, 55, 0.45)` accompanied by a diffuse champagne ambient glow: `box-shadow: 0 12px 40px -10px rgba(212, 175, 55, 0.12)`.

## Shapes

The design system embraces a **Soft / Architectural (`roundedness: 1`)** silhouette. Sharp rectangular profiles feel overly clinical, while circular, rounded forms dilute authority. 

- Interactive buttons, form controls, and micro-badges employ a refined `0.25rem` (4px) corner radius.
- Cards, modal dialogues, and showreel viewports use `rounded-lg` (`0.5rem` / 8px).
- Highlight chips and press badges use `rounded-sm` (`0.25rem`), preserving a disciplined architectural structure throughout the experience.

## Components

### Buttons
- **Primary (Stage Gold):** Solid fill of `#D4AF37` with `#0D0E11` bold text (`label-md`). Hover transitions smoothly to `#E5C358` with subtle forward movement (`translate-y(-1px)`).
- **Secondary (Obsidian Glass):** Background `rgba(255, 255, 255, 0.03)` with a hairline metallic border `1px solid rgba(212, 175, 55, 0.3)`. Text is `#F5F5F7`. Hover shifts the border to full `#D4AF37` and surface to `rgba(212, 175, 55, 0.06)`.
- **Text Action:** Clean underlined link in Champagne Gold with trailing micro-arrow (`→`) with a 4px ease-in-out transition.

### Cards & Showreel Frames
- Encased in dark obsidian glass (`rgba(20, 22, 28, 0.7)`), 1px gold hairline border (`rgba(212, 175, 55, 0.15)`).
- **Showreel Player Frame:** 16:9 cinematic aspect ratio with a subtle inset shadow and floating play button: a champagne gold round badge with frosted backdrop blur and dark center glyph.

### Press & Client Logo Ticker
- Monochromatic logos filtered to `grayscale(100%) opacity(40%)`.
- On hover, transitions cleanly to `opacity(90%)` with a faint warm bronze tint. Set against a seamless scrolling infinite strip framed by subtle fade masks on each canvas edge.

### Chips & Accolade Tags
- Low-profile tags for event genres (e.g., *Global Summits*, *Broadcast Live*, *Tech Keynotes*).
- Height `28px`, uppercase typography (`label-sm`), background `rgba(212, 175, 55, 0.06)`, border `1px solid rgba(212, 175, 55, 0.25)`, text `#C5A059`.

### Form Fields & Booking Widget
- **Inputs & Selects:** Grounded fields with `rgba(255, 255, 255, 0.02)` background, `1px solid rgba(255, 255, 255, 0.1)` boundary, and `16px` padding. Focus states bring a crisp highlight ring: `border-color: #D4AF37` with an ambient glow (`0 0 0 1px #D4AF37`).
- **Date / Range Selectors:** Styled custom calendar popovers matching the frosted dark theme, highlighting selected availability with gold capsules.

### Lists & Key Deliverables
- Minimal hairline separation (`1px solid rgba(255, 255, 255, 0.06)`).
- Bullet icons replaced by fine metallic diamond pips (`◆`) in `#D4AF37`.