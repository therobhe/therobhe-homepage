# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This website showcases my professional experience, projects, and skills.

## Features

- Responsive design with Tailwind CSS
- Multilingual support (English/German) using i18next
- Interactive project showcase
- Modal component for detailed views
- Light/dark mode (if implemented)
- SEO optimization with sitemap and robots.txt

## Tech Stack

- React
- Vite
- Tailwind CSS
- i18next for internationalization
- ESLint for code quality

## Project Structure

The project follows a modular architecture:
- `components/` - Reusable UI components
- `components/areas/` - Layout sections (Header, Main, Footer)
- `components/sections/` - Content sections (Hero, AboutMe, Projects, etc.)
- `context/` - React context providers
- `data/` - Static content and configuration
- `language/` - Translation files for i18next
- `assets/` - Images and other static assets

## Getting Started

### Prerequisites

- Node.js (v24+)
- npm

### Available Scripts

- `npm run dev`: Starts local Vite development server
- `npm run build`: Builds the production bundle to `dist/`
- `npm run lint`: Runs ESLint over project files
- `npm run preview`: Previews the production build locally

## CI/CD & Automation

This repository includes automated GitHub Actions workflows:

- **CI (`.github/workflows/ci.yml`)**: Automatically triggers on pushes and pull requests to `master`, validating dependency installation (`npm ci`), code linting (`npm run lint`), and build compilation (`npm run build`).
- **Weekly Security Audit (`.github/workflows/weekly-audit.yml`)**: Runs weekly via cron and on manual trigger (`workflow_dispatch`). It executes `npm audit fix`, verifies that linting and builds succeed, and creates an automated Pull Request with updates for review and Netlify Deploy Preview verification.
