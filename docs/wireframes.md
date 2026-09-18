# Portfolio wireframes

Status: Stage 2 proposal. These are content and layout guides, not pixel-perfect mockups. Text in brackets describes image placement or behavior.

## Desktop — approximately 1440px

```text
┌───────────────────────────────────────────────────────────────────────────┐
│ CN / Christopher Nieves                         Work    About    Contact  │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  Christopher                                                              │
│  Nieves                               ┌──────────────────────────────┐    │
│                                      │ grayscale portrait, smaller  │    │
│  Software engineer                   │ than the current split pane  │    │
│  Building web applications.          │                              │    │
│                                      └──────────────────────────────┘    │
│  View selected work  →       Email me                                    │
│                                                                           │
├───────────────────────────────────────────────────────────────────────────┤
│  Selected work                                                            │
│                                                                           │
│  ┌───────────────────────────────────┐  Flock                            │
│  │                                   │  Group run web app concept        │
│  │        project screenshot         │  React · Redux · ...              │
│  │                                   │  View project →                   │
│  └───────────────────────────────────┘                                   │
│                                                                           │
│  Candy Co.                      ┌───────────────────────────────────┐     │
│  Mock online candy store        │        project screenshot         │     │
│  View project →                 └───────────────────────────────────┘     │
│                                                                           │
│  [Fitness-TS and Contracted Site continue in the same rhythm]            │
├───────────────────────────────────────────────────────────────────────────┤
│  About                               Contact                              │
│  Short, current bio                  Email me →                           │
│  LinkedIn / GitHub                   csn.nieves@gmail.com                 │
└───────────────────────────────────────────────────────────────────────────┘
```

The top of the first project should be visible without navigating to another panel on a common desktop viewport. Project rows may alternate image alignment for rhythm, but reading order must remain image → name → description → action in the DOM. The hero's large name may overlap the portrait frame slightly; no copy should cross the face or become hard to read.

## Mobile — approximately 390px

```text
┌──────────────────────────────┐
│ CN                      Menu  │
├──────────────────────────────┤
│ Christopher                  │
│ Nieves                       │
│ Software engineer            │
│ Building web applications.   │
│                              │
│ View selected work  →        │
│ Email me                     │
│                              │
│  ┌────────────────────────┐  │
│  │ grayscale portrait     │  │
│  └────────────────────────┘  │
├──────────────────────────────┤
│ Selected work                │
│ ┌──────────────────────────┐ │
│ │ Flock screenshot         │ │
│ └──────────────────────────┘ │
│ Flock                        │
│ Group run web app concept    │
│ View project →               │
│                              │
│ [Other projects stack]       │
├──────────────────────────────┤
│ About                        │
│ Short bio and profile links  │
├──────────────────────────────┤
│ Contact                      │
│ Email me →                   │
└──────────────────────────────┘
```

At 390px, the portrait remains present but does not push all project content far below the fold. Use a single project column, full-width screenshots within the page gutter, and plain text actions. The mobile menu opens without covering the active link's focus indicator and closes after navigation. At smaller widths, the name wraps within the viewport and long technology lists wrap rather than truncate.

## Content and route behavior

- Header Work → `#work`; About → `#about`; Contact → `#contact`.
- “View selected work” → `#work`; “Email me” → `mailto:csn.nieves@gmail.com`.
- A project action opens its actual detail content during Stage 3. Stage 4 may replace this with a dedicated project page if the available material supports a useful case study.
- No Blog, Services, skill percentages, decorative filter tabs, or outdated template demo routes appear in the redesigned navigation.

## Review points before implementation

- Confirm the overall direction when reviewing Stage 2: type-led introduction, smaller grayscale portrait, light neutral shell, and work visible on the first page.
- Confirm project order when newer work is available. The current four entries are a temporary content set, so the layout must not depend on their names or count.
