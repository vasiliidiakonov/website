# Glassmorphism Effect Styling Guide

This document details the glassmorphism (glass effect) styling used throughout the portfolio website.

## Core Glass Effect Properties

The glassmorphism effect combines several CSS properties to create a translucent, frosted glass appearance:

```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 2px solid rgba(255, 255, 255, 0.6);
border-radius: 16px;
box-shadow: 0 2px 8px rgba(25, 25, 112, 0.1);
transition: all 0.3s ease;
```

### Property Breakdown

1. **Semi-transparent Background**
   - `background: rgba(255, 255, 255, 0.4)`
   - White with 40% opacity
   - Allows background elements to show through

2. **Backdrop Blur**
   - `backdrop-filter: blur(10px)`
   - `-webkit-backdrop-filter: blur(10px)` (Safari support)
   - Creates the frosted glass effect by blurring content behind the element
   - 10px blur radius provides optimal balance between transparency and readability

3. **Border**
   - `border: 2px solid rgba(255, 255, 255, 0.6)`
   - Semi-transparent white border (60% opacity)
   - Defines the glass panel edges
   - 2px thickness for subtle definition

4. **Border Radius**
   - `border-radius: 24px` (cards)
   - `border-radius: 8px` (image placeholders)
   - Rounded corners for modern, friendly appearance
   - Cards use larger radius for prominent glass effect

5. **Box Shadow**
   - `box-shadow: 0 2px 8px rgba(25, 25, 112, 0.1)`
   - Subtle shadow using midnightblue color at 10% opacity
   - Provides depth and separation from background
   - Vertical offset: 2px, blur: 8px

6. **Transition**
   - `transition: all 0.3s ease`
   - Smooth animation for all property changes
   - 300ms duration with ease timing

## Hover State

The glass effect intensifies on hover to provide interactive feedback:

```css
.work-card:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(25, 25, 112, 0.15),
              inset 0 4px 16px rgba(255, 255, 255, 0.6);
  border-color: rgba(255, 255, 255, 0.8);
}
```

### Hover Changes

1. **Increased Opacity**
   - Background changes from 40% to 50% opacity
   - Makes the glass more prominent

2. **Lift Effect**
   - `transform: translateY(-2px)`
   - Subtle upward movement suggests interactivity

3. **Enhanced Shadow**
   - Outer shadow: `0 4px 16px rgba(25, 25, 112, 0.15)`
     - Doubled vertical offset (2px → 4px)
     - Doubled blur (8px → 16px)
     - Increased opacity (10% → 15%)
   - Inner shadow: `inset 0 4px 16px rgba(255, 255, 255, 0.6)`
     - White glow inside the element
     - Creates depth and luminosity
     - 60% opacity for pronounced effect

4. **Brighter Border**
   - Border opacity increases from 60% to 80%
   - More defined edges on interaction

## Color Palette

The glassmorphism effect uses the portfolio's color scheme:

- **Background**: `lavender` (#E6E6FA)
- **Text/Accent**: `midnightblue` (#191970)
- **Glass Material**: White with varying opacity (40%-80%)
- **Shadows**: Midnightblue at low opacity (10%-15%)

## Implementation Examples

### Work Cards (Bento Grid)

```css
.work-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(25, 25, 112, 0.1);
  transition: all 0.3s ease;
}
```

### Close Button

```css
.close-btn {
  display: inline-block;
  padding: 6px 20px !important;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(25, 25, 112, 0.1);
  color: midnightblue;
  font-size: 24px;
  line-height: 1 !important;
  font-weight: 600;
  transition: all 0.3s ease;
}
```

Note: Close button uses `border-radius: 24px` for a pill shape instead of the standard 16px.

## Browser Compatibility

- **Backdrop Filter**: Supported in modern browsers
  - Chrome 76+
  - Safari 9+ (with `-webkit-` prefix)
  - Firefox 103+
  - Edge 79+

- **Fallback**: For browsers without backdrop-filter support, the element will still display with the semi-transparent background, just without the blur effect.

## Best Practices

1. **Use on Lavender Background**: The glass effect is optimized for the lavender (#E6E6FA) background color
2. **Consistent Border Radius**: Maintain 24px radius for cards, 8px for image placeholders, 24px for pill-shaped buttons
3. **Maintain Color Ratios**: Keep the opacity relationships consistent (40% base, 50% hover, 60-80% borders)
4. **Always Include Transitions**: The 300ms ease transition is essential for smooth interactions
5. **Pair with Inner Shadow on Hover**: The white inner glow is crucial for the premium feel
6. **Image Placeholders**: Always add inner shadow (inset 0 0 8px 0) to image containers for depth

## Visual Hierarchy

The glassmorphism effect creates clear visual hierarchy:

1. **Base State**: Subtle, allows focus on content
2. **Hover State**: More prominent, indicates interactivity
3. **Inner Glow**: Premium feel, draws attention to active elements

This creates a tactile, three-dimensional interface that feels modern and interactive while maintaining excellent readability.

---

## Recreating in Figma

Follow these step-by-step instructions to recreate the glassmorphism effect in Figma:

### Base Glass Effect

1. **Create Your Shape**
   - Draw a rectangle or frame
   - Set corner radius to `24` for cards (or `24` for pill-shaped buttons, `8` for image placeholders)

2. **Fill Settings**
   - Add a solid fill
   - Color: `#FFFFFF` (white)
   - Opacity: `40%`

3. **Background Blur Effect**
   - In the Effects section, click `+` and select **Background blur**
   - Set blur amount to `10`
   - This creates the frosted glass effect

4. **Drop Shadow (Outer)**
   - Add another effect: **Drop shadow**
   - X: `0`, Y: `2`, Blur: `8`, Spread: `0`
   - Color: `#191970` (midnightblue)
   - Opacity: `10%`

5. **Stroke (Border)**
   - Add a stroke
   - Type: **Inside**
   - Width: `2`
   - Color: `#FFFFFF` (white)
   - Opacity: `60%`

### Hover State

Create a variant or separate component for the hover state:

1. **Update Fill Opacity**
   - Change fill opacity from `40%` to `50%`

2. **Update Drop Shadow**
   - Modify existing drop shadow:
   - Y: `4`, Blur: `16`
   - Opacity: `15%`

3. **Add Inner Shadow (Inner Glow)**
   - Add a new effect: **Inner shadow**
   - X: `0`, Y: `4`, Blur: `16`, Spread: `0`
   - Color: `#FFFFFF` (white)
   - Opacity: `60%`
   - This creates the luminous inner glow

4. **Update Stroke Opacity**
   - Change stroke opacity from `60%` to `80%`

5. **Add Lift Effect (Optional)**
   - If creating a prototype, add `translateY(-2px)` effect
   - In Figma, this can be simulated by moving the hover variant up by 2px

### Using Figma Variables (Recommended)

For easier maintenance, create variables for consistent values:

1. **Color Variables**
   - `glass-white`: `#FFFFFF`
   - `glass-accent`: `#191970` (midnightblue)

2. **Number Variables**
   - `glass-fill-opacity-default`: `0.4` (40%)
   - `glass-fill-opacity-hover`: `0.5` (50%)
   - `glass-stroke-opacity-default`: `0.6` (60%)
   - `glass-stroke-opacity-hover`: `0.8` (80%)
   - `glass-radius-card`: `24`
   - `glass-radius-image`: `8`
   - `glass-radius-pill`: `24`
   - `glass-blur`: `10`

### Creating a Component

1. **Make it a Component**
   - Select your glass element
   - Press `Cmd/Ctrl + Alt + K` to create a component

2. **Add Variants**
   - Click "Add variant" in the properties panel
   - Create a property named "State" with values: "Default" and "Hover"

3. **Configure Each Variant**
   - Apply base glass effect to "Default" state
   - Apply hover glass effect to "Hover" state

4. **Add Prototype Connection**
   - In Prototype mode, connect Default → Hover
   - Interaction: While hovering
   - Animation: Ease out, 300ms

### Quick Reference Card

| Property | Default | Hover |
|----------|---------|-------|
| Fill Opacity | 40% | 50% |
| Background Blur | 10 | 10 |
| Drop Shadow | 0/2/8 @ 10% | 0/4/16 @ 15% |
| Inner Shadow (card) | None | 0/4/16 @ 60% |
| Inner Shadow (image) | 0/0/8 @ 15% | 0/0/8 @ 15% |
| Stroke Opacity | 60% | 80% |
| Border Radius (card) | 24px | 24px |
| Border Radius (image) | 8px | 8px |
| Stroke Width | 2px | 2px |

**Color Codes:**
- Background: `#E6E6FA` (lavender)
- Glass Fill: `#FFFFFF` (white)
- Shadow/Stroke: `#FFFFFF` (white) or `#191970` (midnightblue)

### Tips

- **Always use Background Blur**, not Layer Blur—background blur only affects content behind the element
- **Test on Lavender Background** (`#E6E6FA`) to see the true effect
- **Duplicate for consistency**: Once you have one glass element perfect, duplicate it for all similar elements
- **Use Auto Layout**: Combine glass components with auto layout for responsive cards
- **Layer Order Matters**: Ensure fill is below effects in the layer stack
