# Word Analytics

A React-based text analysis tool that provides real-time character and word counting with social media platform limits.

## Features

- Real-time word counting
- Character counting with limits for Instagram (280) and Facebook (2200)
- Visual feedback when character limits are exceeded
- Input validation preventing `<span>` tags and @ symbols
- Responsive design for mobile and desktop

## Setup

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
src/
├── Components/
│   ├── App.jsx
│   ├── BackgroundImage.jsx
│   ├── Container.jsx
│   ├── Footer.jsx
│   ├── H1.jsx
│   ├── Header.jsx
│   ├── Stats.jsx
│   ├── TextArea.jsx
│   └── Warning.jsx
├── lib/
│   └── Constants.js
└── main.jsx
```

## Component Overview

- `Container.jsx`: Main component managing text state and statistics
- `TextArea.jsx`: Text input with validation
- `Stats.jsx`: Displays word count and character limits
- `Warning.jsx`: Shows validation error messages

## Technology Stack

- React
- CSS3 with Flexbox
- Background gradient with image overlay

## Responsive Design

- Adapts to viewport sizes below 1150px
- Mobile-friendly statistics display
- Fluid typography and layout

## Author

Abdulrahman Elsmmany
