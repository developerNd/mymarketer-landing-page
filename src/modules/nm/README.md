# NM Module - Network Marketing Page

This module contains a self-contained Network Marketing landing page with its own theme and styling to prevent conflicts with the main project. **Exact copy of lovable-spark-deck-main design.**

## Structure

```
src/modules/nm/
├── styles/              # Module-specific styles
│   └── nm-theme.css     # Isolated theme CSS (exact copy from lovable-spark-deck)
├── assets/              # Module-specific assets
│   ├── hero-marketer.jpg
│   ├── team-building.jpg
│   └── automation-system.jpg
├── NMPage.tsx          # Complete page component (exact copy from lovable-spark-deck)
├── index.ts            # Module exports
└── README.md           # This file
```

## Features

- **Exact Design Match**: Identical to lovable-spark-deck-main project
- **Isolated Theme**: Uses `nm-` prefixed CSS classes to prevent conflicts
- **Complete Page**: Single component with all sections included
- **Self-contained Assets**: All images are within the module
- **Original Styling**: Exact colors, gradients, animations, and glass effects

## Usage

```tsx
import { NMPage } from '@/modules/nm';

// Use the complete page
<NMPage />
```

## CSS Classes

All CSS classes are prefixed with `nm-` to prevent conflicts:
- `nm-module` - Main container
- `nm-glass-card` - Glass effect cards
- `nm-text-gradient-primary` - Primary gradient text
- `nm-animate-fade-in-up` - Fade in animation
- And many more...

## Theme Colors

- Primary: Blue (#3b82f6)
- Success: Green (#10b981)
- Warning: Amber (#f59e0b)
- Destructive: Red (#ef4444)
- Background: Dark slate (#0f172a)
