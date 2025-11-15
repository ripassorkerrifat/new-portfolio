# Design System - Quick Reference Guide

## 🎨 Color Palette

```
Primary Blue:     #3b82f6  (var(--primary-color))
Secondary Cyan:   #06b6d4  (var(--secondary-color))
Accent Purple:    #8b5cf6  (var(--accent-color))

Primary BG:       #0f0f23  (var(--primary-bg))
Secondary BG:     #1a1a2e  (var(--secondary-bg))
Accent BG:        #16213e  (var(--accent-bg))

Text Primary:     #f8fafc  (var(--text-primary))
Text Secondary:   #cbd5e1  (var(--text-secondary))
Text Muted:       #94a3b8  (var(--text-muted))

Border:           #334155  (var(--border-color))
Border Light:     #475569  (var(--border-light))
```

---

## 📝 Typography

### Heading Sizes
| Screen | Size | Class |
|--------|------|-------|
| Mobile | 3xl | `text-3xl` |
| Small | 4xl | `sm:text-4xl` |
| Medium | 5xl | `md:text-5xl` |
| Large | 6xl | `lg:text-6xl` |

### Font Weights
- **Bold**: `font-bold` - Standard headings
- **Black**: `font-black` - Gradient emphasis
- **Semibold**: `font-semibold` - Badges
- **Light**: `font-light` - Descriptions

---

## 🏗️ Unified Header Pattern

Every section should include:

```jsx
{/* Subtitle Badge */}
<div className="mb-8 animate-slide-up inline-block">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
        bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 
        backdrop-blur-sm">
        <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] 
            animate-pulse"></div>
        <span className="text-xs sm:text-sm font-semibold 
            text-[var(--primary-color)] uppercase tracking-wider">
            BADGE TEXT
        </span>
    </div>
</div>

{/* Main Heading */}
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
    text-[var(--text-primary)] mb-6 leading-tight animate-slide-up" 
    style={{animationDelay: "0.1s"}}>
    First Word{" "}
    <span className="bg-gradient-to-r from-[var(--primary-color)] 
        via-[var(--secondary-color)] to-[var(--accent-color)] 
        bg-clip-text text-transparent font-black">
        Emphasized Word
    </span>
</h2>

{/* Description */}
<p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] 
    max-w-2xl mx-auto leading-relaxed animate-slide-up font-light"
    style={{animationDelay: "0.2s"}}>
    Description text here
</p>
```

---

## 🎯 Section Badges

| Section | Badge |
|---------|-------|
| About | "Who I Am" |
| Skills | "My Expertise" |
| Experience | "My Journey" |
| Contact | "Get In Touch" |
| Projects | "Portfolio" |

---

## 📏 Spacing Standards

```
Section Padding:      py-12 sm:py-16 lg:py-20
Header Margin Bottom: mb-16 sm:mb-20
Content Margin:       mb-8 to mb-12
Container Padding:    px-4 sm:px-6 lg:px-8
Gap Between Items:    gap-4 sm:gap-6 lg:gap-8
```

---

## 🎬 Animations

### Staggered Animation Delays
```
Element 1: animationDelay: "0.1s"
Element 2: animationDelay: "0.2s"
Element 3: animationDelay: "0.3s"
Element 4: animationDelay: "0.4s"
...and so on
```

### Common Animation Classes
- `animate-slide-up` - Slide up with fade
- `animate-pulse` - Pulsing effect
- `animate-bounce` - Bouncing effect
- `hover:scale-105` - Scale on hover
- `hover:shadow-lg` - Shadow on hover

---

## 🔘 Button Styles

### Primary Button
```jsx
className="bg-gradient-to-r from-[var(--primary-color)] 
    to-[var(--secondary-color)] hover:from-[var(--primary-color)]/95 
    hover:to-[var(--secondary-color)]/95 text-white font-semibold 
    py-3 px-8 rounded-2xl transition-all duration-300 transform 
    hover:scale-105 shadow-lg hover:shadow-2xl 
    hover:shadow-[var(--primary-color)]/40"
```

### Secondary Button
```jsx
className="border-2 border-[var(--secondary-color)] 
    text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] 
    hover:text-white font-semibold py-3 px-8 rounded-2xl 
    transition-all duration-300 transform hover:scale-105 
    shadow-md hover:shadow-xl hover:shadow-[var(--secondary-color)]/30"
```

---

## 🎨 Gradient Text

```jsx
className="bg-gradient-to-r from-[var(--primary-color)] 
    via-[var(--secondary-color)] to-[var(--accent-color)] 
    bg-clip-text text-transparent font-black"
```

---

## 🔍 Glass Morphism

### Standard Glass
```jsx
className="glass rounded-2xl p-6 border border-[var(--border-color)]/30 
    backdrop-blur-sm"
```

### Enhanced Glass
```jsx
className="glass rounded-3xl p-8 border border-[var(--border-color)]/30 
    backdrop-blur-2xl bg-gradient-to-br from-[var(--primary-bg)]/90 
    to-[var(--secondary-bg)]/90"
```

---

## 📱 Responsive Breakpoints

```
Mobile:       < 640px (default)
Small:        640px+  (sm:)
Medium:       768px+  (md:)
Large:        1024px+ (lg:)
Extra Large:  1280px+ (xl:)
```

---

## ✨ Common Patterns

### Card with Hover Effect
```jsx
className="group glass rounded-2xl p-6 border border-[var(--border-color)]/30 
    hover:border-[var(--primary-color)]/60 transition-all duration-300 
    group-hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-color)]/20"
```

### Icon Container
```jsx
className="w-12 h-12 bg-gradient-to-r from-[var(--primary-color)] 
    to-[var(--secondary-color)] rounded-xl flex items-center justify-center 
    group-hover:scale-110 transition-transform duration-300 shadow-md"
```

### Badge with Pulse
```jsx
className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
    bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 
    backdrop-blur-sm">
    <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] 
        animate-pulse"></div>
    <span className="text-xs font-semibold text-[var(--primary-color)] 
        uppercase tracking-wider">BADGE</span>
</div>
```

---

## 🚀 Quick Copy-Paste Snippets

### Section Header
```jsx
<div className="text-center mb-16 sm:mb-20">
    <div className="mb-8 animate-slide-up inline-block">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 
            backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] 
                animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold 
                text-[var(--primary-color)] uppercase tracking-wider">
                BADGE
            </span>
        </div>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
        text-[var(--text-primary)] mb-6 leading-tight animate-slide-up" 
        style={{animationDelay: "0.1s"}}>
        First <span className="bg-gradient-to-r from-[var(--primary-color)] 
            via-[var(--secondary-color)] to-[var(--accent-color)] 
            bg-clip-text text-transparent font-black">Emphasized</span>
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] 
        max-w-2xl mx-auto leading-relaxed animate-slide-up font-light"
        style={{animationDelay: "0.2s"}}>
        Description
    </p>
</div>
```

---

## 📋 Checklist for New Sections

- [ ] Add subtitle badge with pulsing indicator
- [ ] Use consistent heading sizes (text-3xl to text-6xl)
- [ ] Apply gradient text to emphasized words
- [ ] Use light font weight for descriptions
- [ ] Maintain mb-16 to mb-20 spacing
- [ ] Add staggered animation delays
- [ ] Use consistent color palette
- [ ] Test on mobile, tablet, desktop
- [ ] Verify accessibility and contrast

---

## 🎓 Best Practices

1. **Always use the unified header pattern** for consistency
2. **Maintain the color palette** - don't introduce new colors
3. **Use staggered animations** - 0.1s between elements
4. **Keep spacing consistent** - use the 8px grid
5. **Test responsiveness** - mobile first approach
6. **Use semantic HTML** - proper heading hierarchy
7. **Optimize performance** - avoid excessive animations
8. **Ensure accessibility** - sufficient color contrast

---

## 🔗 Related Documents

- **PROFESSIONAL-DESIGN-SYSTEM.md** - Complete design documentation
- **UI-REDESIGN-SUMMARY.md** - Full redesign summary
- **Component Files** - Implementation examples

---

**Last Updated**: November 15, 2025  
**Version**: 1.0
