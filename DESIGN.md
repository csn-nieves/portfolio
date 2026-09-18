# Portfolio design direction

Status: Stage 2 proposal for the next implementation stages. This records design intent; the current site does not implement it yet.

## Purpose and audience

Christopher Nieves is a software engineer. The portfolio should let a hiring manager or potential collaborator understand who he is, inspect actual projects, and reach him by email. The first screen must establish role and show that work follows immediately. Existing projects are older work, so the site should describe them accurately and leave room for newer projects without implying current outcomes or experience levels.

## Direction: a clear personal introduction with work in view

Use a quiet, light page with strong dark type and generous room around project imagery. The grayscale portrait remains a personal anchor, but takes less space than it does in the current split-screen layout. A large, tightly set name crosses the edge of the portrait frame on desktop. That overlap is the one expressive gesture; the rest of the page stays simple. On mobile, the name and portrait stack naturally with no overlap that hides content.

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

- Display: **Archivo** (variable), bold and closely tracked for the name and large section headings.
- Body: **Source Sans 3**, regular/semibold, with comfortable line height.
- Utility: **IBM Plex Mono** for short project technology labels only. Avoid decorative numbers and labels.
- Content width: about 1240px; desktop page gutters 48–72px; mobile gutters 20–24px.
- Spacing: an 8px base with generous section gaps; use text width of roughly 60–70 characters for longer descriptions.
- Imagery: preserve screenshot aspect ratios, put them on a neutral media ground, and avoid grayscale filters on project work.

Fonts and token values can be tuned against rendered screens in Stage 3, but changes should update this file with the CSS source of truth.

## Page structure

1. **Header:** name or CN mark at left; Work, About, Contact at right. Links navigate to real sections. On mobile, use a clearly labeled menu if all links do not fit.
2. **Introduction:** “Christopher Nieves” and “Software engineer” in plain language. One short sentence may point to the work below. Primary action goes to selected work; contact is a secondary text link. The portrait is visible on desktop and mobile.
3. **Selected work:** four current entries from `data.js`, with image, project name, one factual description, and only verified technologies. No invented outcomes, client names, or status labels. The layout should allow new projects to replace older ones without redesigning the grid.
4. **About:** a short bio and relevant links. Remove percentage skill bars and dated experience counts in the redesign; demonstrate skills through work instead.
5. **Contact:** direct email action to `csn.nieves@gmail.com`, with LinkedIn and GitHub links. Keep the action obvious without a form until a real submission path exists.
6. **Footer:** small copyright and a return-to-top link if the page is long enough to benefit from it.

Project detail presentation belongs to Stage 4. Stage 3 should keep the current details usable while introducing the work-first page.

## Interaction and responsive rules

- Normal vertical document scrolling replaces the current full-screen panel switching. The URL hash identifies sections and native back/forward navigation remains useful.
- Project cards have a clear action and visible focus state. Hover can reveal detail but may not be the only way to discover it.
- Motion is limited to one subtle entrance/reveal treatment and purposeful hover/focus feedback. Honor `prefers-reduced-motion` by removing nonessential movement.
- Reserve image dimensions to prevent layout shifts. Preserve visible scrollbars and readable content at narrow widths and 200% zoom.
- Target WCAG 2.2 AA for text contrast, keyboard access, focus visibility, accessible names, and touch targets.

## Implementation boundary

Stage 2 produces direction and wireframes only. Stage 3 implements the home/work structure and responsive visual system; Stage 4 expands project stories and supporting sections; Stage 5 verifies polish and accessibility. See [wireframes](docs/wireframes.md) for the proposed desktop and mobile composition.
