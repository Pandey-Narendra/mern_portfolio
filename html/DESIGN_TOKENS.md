# Design Tokens Reference

## Color Palette

### Primary Colors
- **Primary Brand**: `#f48fb1` (Pink)
- **Secondary**: `#81d4fa` (Light Blue)
- **Accent/Highlight**: `#f7c873` (Golden)
- **Primary Glow**: `rgba(244, 143, 177, 0.6)` (Pink with 60% opacity)

### Background Colors
```css
--bg-dark:  #0b0b0c;    /* Main background */
--bg-light: #121212;    /* Navbar/elevated sections */
--bg-card:  #151515;    /* Card backgrounds */
```

### Text Colors
```css
--text-color:  #e2e2e2;  /* Primary text */
--text-muted:  #ccc;     /* Secondary text */
--accent:      #f7c873;  /* Highlights and links */
```

### Border & Shadows
```css
--border-color:            #333;                                /* Subtle borders */
--shadow-sm:               0 2px 8px rgba(0, 0, 0, 0.3);      /* Subtle shadow */
--shadow-md:               0 5px 15px rgba(0, 0, 0, 0.5);     /* Medium shadow */
--shadow-lg:               0 0 20px var(--highlight-color);   /* Glow shadow */
--elevation-glow-accent:   0 0 20px var(--highlight-color);   /* Hover glow */
```

## Spacing Scale

```css
--spacing-xs:  0.5rem;   /* 8px */
--spacing-sm:  1rem;     /* 16px */
--spacing-md:  1.5rem;   /* 24px */
--spacing-lg:  2rem;     /* 32px */
--spacing-xl:  3rem;     /* 48px */
```

**Usage Pattern**: Use incrementally for padding, margins, gaps
- Small element padding: `var(--spacing-xs)`
- Standard padding: `var(--spacing-sm)`
- Section spacing: `var(--spacing-lg)` to `var(--spacing-xl)`

## Typography

### Font Families
```css
--font-main:  'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif;
--font-alt:   'Cormorant Garamond', serif;     /* Headings */
--font-sans:  'Lato', sans-serif;              /* Alternative sans-serif */
```

### Font Sizes (Using clamp for responsiveness)
```css
h1: clamp(1.5rem, 5vw, 3.5rem);      /* 24px → 56px */
h2: clamp(1.25rem, 4vw, 2.5rem);     /* 20px → 40px */
h3: clamp(1.1rem, 3vw, 1.8rem);      /* 18px → 29px */
h4: clamp(1rem, 2.5vw, 1.5rem);      /* 16px → 24px */
p:  clamp(0.95rem, 1.5vw, 1.1rem);   /* 15px → 18px */
```

**Benefit**: Fonts scale smoothly across all screen sizes without breakpoints.

## Border Radius

```css
--radius-sm:  0.5rem;   /* 8px - Small buttons, inputs */
--radius-md:  1rem;     /* 16px - Cards, standard elements */
--radius-lg:  1.5rem;   /* 24px - Large containers */
```

## Transitions

```css
--transition-base:   300ms ease-in-out;  /* Standard transitions */
--transition-hover:  200ms ease-out;     /* Faster hover feedback */
```

**Usage**:
```css
transition: transform var(--transition-base), 
            box-shadow var(--transition-base),
            color var(--transition-hover);
```

## Accessibility Standards

### Touch Targets
All interactive elements have minimum:
- **Height**: 44px
- **Width**: 44px
- **Gap**: 8px between targets

### Color Contrast
All text meets WCAG AA standards:
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus Indicators
```css
/* Visible on keyboard navigation */
outline: 2px solid var(--accent);
outline-offset: 2px;
```

## Component Token Usage

### Buttons
```css
.btn-outline {
  border: 2px solid var(--accent);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: background var(--transition-base);
  min-height: 44px;
}
```

### Cards
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base),
              box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--elevation-glow-accent);
}
```

### Sections
```css
.section {
  padding: var(--spacing-lg) var(--spacing-sm);
  gap: var(--spacing-md);
}
```

## Responsive Breakpoints

```css
@media screen and (max-width: 480px) {
  /* Mobile devices */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* Tablets */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  /* Small desktops */
}

@media screen and (min-width: 1025px) {
  /* Large desktops */
}
```

## Variables Update Guide

To maintain consistency when updating the design:

1. **Change Primary Color**:
   ```css
   --accent: #newcolor;  /* Updates all highlights automatically */
   ```

2. **Adjust Spacing Globally**:
   ```css
   --spacing-sm: 1.2rem;  /* All components using this scale up */
   ```

3. **Modify Transition Timing**:
   ```css
   --transition-base: 400ms ease-in-out;  /* All transitions update */
   ```

4. **Update Shadow System**:
   ```css
   --shadow-md: 0 8px 20px rgba(0, 0, 0, 0.6);  /* New shadow depth */
   ```

---

**Last Updated**: March 6, 2026
**Maintained By**: Design System Team
