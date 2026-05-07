---
name: Dynamic Vitality
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#bfc9c3'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#89938e'
  outline-variant: '#404945'
  surface-tint: '#96d3bd'
  primary: '#d5ffee'
  on-primary: '#00382b'
  primary-container: '#a8e6cf'
  on-primary-container: '#2c6957'
  inverse-primary: '#2c6956'
  secondary: '#ffb2b6'
  on-secondary: '#61101e'
  secondary-container: '#822a35'
  on-secondary-container: '#ff9da3'
  tertiary: '#fff4ee'
  on-tertiary: '#442a17'
  tertiary-container: '#fdd1b4'
  on-tertiary-container: '#785841'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b1efd8'
  primary-fixed-dim: '#96d3bd'
  on-primary-fixed: '#002118'
  on-primary-fixed-variant: '#0d503f'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b6'
  on-secondary-fixed: '#40000d'
  on-secondary-fixed-variant: '#7f2833'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#e8bea2'
  on-tertiary-fixed: '#2c1605'
  on-tertiary-fixed-variant: '#5e402b'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 57px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  title-lg:
    fontFamily: Lexend
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  title-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.15px
  body-lg:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Lexend
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 16px
  gutter: 12px
  card-padding: 20px
  section-gap: 24px
---

## Brand & Style

This design system is built on the principles of **Material Design 3 (Material You)**, tailored for a high-performance fitness and nutrition environment. The brand personality is encouraging, precise, and vital. It avoids the aggressive "gym-bro" aesthetic in favor of a modern, holistic wellness feel that balances technical data with human-centric accessibility.

The style leverages **Tonal Layering** and **Subtle Vibrancy**. In dark mode, it prioritizes legibility and eye comfort while using dynamic accent colors to signal progress and health categories (e.g., green for nutrition, coral for energy/calories). The interface feels responsive and alive, adapting its tonal palette to the user's focus.

## Colors

The palette centers on a **Deep Charcoal** foundation to reduce glare and provide a sophisticated backdrop for data. 
- **Primary (Soft Green):** Used for "Growth" metrics, completed goals, and primary actions. It evokes health and freshness.
- **Secondary (Coral):** Used for "Energy" metrics, active calorie burning, and high-energy alerts.
- **Surface Strategy:** We utilize M3 tonal surfaces. The background is the darkest layer, with "Surface Containers" elevated through slightly lighter charcoal values rather than heavy shadows.
- **Status Colors:** Success (Green), Warning (Amber), and Error (Coral/Red) are tuned for high WCAG accessibility against dark backgrounds.

## Typography

**Lexend** is the exclusive typeface for this design system. Specifically designed to reduce visual stress and improve reading proficiency, its expanded character widths and rhythmic spacing make it ideal for quick scanning of nutritional labels and workout stats.

- **Data Visualization:** Numbers for calories and macros should use `headline-md` or `title-lg` with a slightly heavier weight to ensure clear visual hierarchy.
- **Labels:** Secondary information (e.g., "g", "kcal", "remaining") uses `label-sm` in a muted silver-grey to keep the focus on the primary values.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first interaction. 
- **The 8pt Square:** All dimensions and offsets are multiples of 8px to ensure a consistent rhythmic flow.
- **Hierarchy of Space:** Calories and Macros are placed in a high-priority "Dashboard Zone" at the top of the viewport. 
- **Grouping:** Use `section-gap` to separate logical days or meal types, while using `gutter` for internal card elements to maintain a tight, data-rich density without feeling cluttered.

## Elevation & Depth

This design system uses **Tonal Layers** as the primary method of expressing elevation, following Material 3 guidelines.
- **Level 0 (Background):** Deepest charcoal (#121314).
- **Level 1 (Cards/Cards):** Slightly lighter (#1E2022). These contain the primary tracking data.
- **Level 2 (Dialogs/Menus):** Elevated further with a subtle primary-colored tint overlay (5% opacity) to signify interaction.
- **Shadows:** Shadows are used sparingly. When used, they are long, soft, and low-opacity (15-20%) with a slight tint of the primary color to avoid a "muddy" look on dark surfaces.

## Shapes

The shape language is **Fully Rounded**, emphasizing the "Modern and Accessible" intent.
- **Standard Cards:** Use a 16px (`rounded-lg`) radius to create a friendly, approachable container for data.
- **Input Fields & Chips:** Use 24px (`rounded-xl`) or full pill-shapes to signify interactable elements and distinguish them from static data containers.
- **Images:** Food and workout photography should always carry an 8px (`rounded-md`) radius to align with the soft aesthetic.

## Components

- **Tracking Cards:** Use a 2-column or 3-column split for macros (Carbs, Protein, Fat). Each macro is paired with a circular "Ring" progress indicator using the dynamic accent colors.
- **Primary Buttons:** High-emphasis, pill-shaped buttons using the Primary (Soft Green) color with dark text.
- **Filter Chips:** Used for toggling between "Today", "Week", and "Month" views. Active chips use a tonal container (Primary color at 20% opacity) with a solid border.
- **Progress Bars:** Lean, 4px height bars with rounded caps. The track is a low-opacity version of the fill color.
- **Input Fields:** Outlined style with a 1px border. On focus, the border thickens to 2px and adopts the Primary color.
- **Navigation Bar:** A bottom-docked Material 3 navigation bar with active states indicated by a pill-shaped "Active Indicator" behind the icon.