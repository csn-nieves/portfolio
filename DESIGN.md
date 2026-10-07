# Portfolio design direction

Status: Stages 3–5 implemented. This document records the visual system and content constraints for future updates.

## Purpose and audience

Christopher Nieves is a software engineer. The portfolio should let a hiring manager or potential collaborator understand who he is, inspect actual projects, and reach him by email. The first screen must establish role and show that work follows immediately. Existing projects are older work, so the site should describe them accurately and leave room for newer projects without implying current outcomes or experience levels.

## Direction: a clear personal introduction with work in view

Use a quiet page with strong type and generous room around project imagery. The default light presentation follows the original direction, while a deliberate dark palette is available from the persistent header. The grayscale portrait remains a personal anchor, but takes less space than it does in the current split-screen layout. A large, tightly set name stays within its text column and maintains clear space beside the portrait at every width. The portrait retains its intermittent glitch effect. Together they form the one expressive moment; the rest of the page stays simple. On mobile, the name and portrait stack naturally with no overlap that hides content.

This draws on the direct role statement and work-first hierarchy seen in the supplied portfolio references. The site should retain Christopher's identity and projects rather than recreate any reference site's styling.

## Design tokens (proposed)

| Role | Token | Use |
| --- | --- | --- |
| Paper | `#F6F7F5` | Main background |
| Ink | `#171B1D` | Primary text |
| Quiet text | `#536064` | Supporting copy |
| Rule | `#D7DEDF` | Section separators and image frames |
| Deep teal | `#246775` | Links, focus, and small active details |
| Media ground | `#E8EEEE` | Consistent background behind varied project screenshots |

Use the accent sparingly. Do not recolor project screenshots; each project keeps its own visual character inside a consistent frame.

The portfolio starts in light mode and offers an explicit Light/Dark control in the persistent header. The visitor's choice is stored locally and restored before the page paints; device color preference does not override it. Dark mode uses paper `#111719`, ink `#EDF2F1`, quiet text `#A9B5B7`, rule `#334347`, teal `#73BDCA`, and media ground `#1C272A`. Semantic CSS custom properties in `styles/portfolio.css` are the runtime source for both modes. Browser chrome follows the selected paper color. Portraits and project screenshots remain unfiltered in either mode.

- Display: **Archivo** (variable), bold and closely tracked for the name and large section headings.
- Body: **Source Sans 3**, regular/semibold, with comfortable line height.
- Utility: **IBM Plex Mono** for short project technology labels only. Avoid decorative numbers and labels.
- Content width: about 1240px; desktop page gutters 48–72px; mobile gutters 20–24px.
- Spacing: an 8px base with generous section gaps; use text width of roughly 60–70 characters for longer descriptions.
- Imagery: preserve screenshot aspect ratios, put them on a neutral media ground, and avoid grayscale filters on project work.

Stage 3 implements these tokens in `styles/portfolio.css` under `:root` and page-scoped selectors. The homepage loads its font families from Google Fonts in `pages/index.js`. The older alternate routes retain their previous stylesheet and presentation.

## Page structure

1. **Header:** name or CN mark at left; Work, About, Contact at right. The header stays visible while the page scrolls so navigation remains available. Links navigate to real sections. On mobile, use a clearly labeled menu if all links do not fit.
2. **Introduction:** “Christopher Nieves” leads the page. The role and broader engineering focus are grouped by a short teal signal rail so they read as one positioning statement without competing with the name or portrait; Saratoga Springs remains separate metadata. Primary action goes to selected work; contact is a secondary text link. The glitch portrait is visible on desktop and mobile.
3. **Selected work:** four current entries from `data.js`, with image, project name, one factual description, and only verified technologies. No invented outcomes, client names, or status labels. The layout should allow new projects to replace older ones without redesigning the grid.
4. **About:** restore the verified location, SUNY Potsdam and Fullstack Academy background, most recent software engineer role, listed skills, and interests in a readable fact layout. Leave out percentage skill bars and unverified current-employment dates.
5. **Contact:** direct email action to `csn.nieves@gmail.com`, with LinkedIn and GitHub links. Keep the action obvious without a form until a real submission path exists.
6. **Footer:** small copyright and a return-to-top link if the page is long enough to benefit from it.

Project detail presentation belongs to Stage 4. Stage 3 should keep the current details usable while introducing the work-first page.

## Interaction and responsive rules

- Normal vertical document scrolling replaces the current full-screen panel switching. The URL hash identifies sections and native back/forward navigation remains useful.
- Keep the header pinned to the top of the viewport on desktop and mobile. In-page anchors reserve enough space for it so section headings remain visible after navigation.
- Project cards have a clear action and visible focus state. Hover can reveal detail but may not be the only way to discover it.
- The portrait retains an intermittent, localized glitch treatment from the original site; other motion stays limited to purposeful hover/focus feedback. Honor `prefers-reduced-motion` by showing the still portrait.
- Reserve image dimensions to prevent layout shifts. Preserve visible scrollbars and readable content at narrow widths and 200% zoom.
- Target WCAG 2.2 AA for text contrast, keyboard access, focus visibility, accessible names, and touch targets.

## Implementation boundary

Stage 2 produced the direction and wireframes. Stage 3 implemented the scrollable homepage, Stage 4 added project pages, and Stage 5 verified responsive layout, keyboard navigation, and accessibility. See [wireframes](docs/wireframes.md) for the original desktop and mobile composition.
