# Rudra Pratap Singh Rathore — Portfolio

<div align="center">

### Software Engineer · Full-Stack Developer · ML Engineer

An expressive, interactive portfolio for showcasing production-minded software, machine learning systems, and full-stack projects.

<p>
  <a href="https://github.com/RudraPratapSingh2008/Portfolio">
    <img src="https://img.shields.io/badge/source-GitHub-181717?style=for-the-badge&logo=github" alt="Source code on GitHub" />
  </a>
  <a href="https://nest-prediction.vercel.app/">
    <img src="https://img.shields.io/badge/live-NEST%20Prediction-ff6b35?style=for-the-badge&logo=vercel" alt="NEST Prediction live project" />
  </a>
  <a href="https://autozentic.com/">
    <img src="https://img.shields.io/badge/live-Autozentic-111827?style=for-the-badge&logo=vercel" alt="Autozentic live project" />
  </a>
</p>

</div>

## About

This portfolio is built around a playful sketchbook-inspired visual language, with layered paper effects, hand-drawn details, animated transitions, a responsive navigation system, and an interactive 3D hero scene.

It presents Rudra's work across:

- Full-stack web development
- Machine learning and data-driven systems
- Reinforcement learning experiments
- AI automation and product engineering
- Interactive frontend experiences

## Featured projects

| Project | What it does | Links |
| --- | --- | --- |
| **NEST Prediction System** | A five-model stacking ensemble for predicting high-frequency NEST exam topics across five subjects. | [Live](https://nest-prediction.vercel.app/) · [Code](https://github.com/RudraPratapSingh2008/NEST-prediction) |
| **Autozentic** | An AI automation agency concept presented at Idea Spark 2.0. | [Live](https://autozentic.com/) |
| **Freiwilliger** | A MERN platform connecting volunteers with community opportunities across India. | [Code](https://github.com/RudraPratapSingh2008/Freiwilliger-v1) |
| **Crypto Trade Bot** | A BiLSTM and PPO-based deep reinforcement learning trading agent. | [Code](https://github.com/RudraPratapSingh2008/Crypto-trade-bot) |
| **CO2Watch India** | A satellite CO2 monitoring project for power plants built during the OpenAI Academy x NxtWave Buildathon. | [Code](https://github.com/shreyash1234566/gasCV) |

## Highlights

- Responsive React 18 interface with Vite and TypeScript
- React Three Fiber hero canvas with a 3D laptop scene
- Framer Motion page transitions and scroll-based animations
- Sketchbook-inspired paper tears, dividers, cards, and cursor effects
- Tailwind CSS and shadcn/ui components
- Accessible project, skills, timeline, and contact sections
- Local resume download
- SPA fallback configured for Vercel deployments
- Chatbot UI kept disabled until a private backend is available

## Tech stack

| Area | Technologies |
| --- | --- |
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui, CSS custom properties |
| Motion | Framer Motion |
| 3D | Three.js, React Three Fiber, Drei |
| Routing and UI | React Router, Radix UI, Lucide React |
| Tooling | ESLint, Vitest, PostCSS, Vercel |

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/RudraPratapSingh2008/Portfolio.git
cd Portfolio/seamless-portfolio-experience-main
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

### Quality checks

```bash
npm run lint
npm run test
```

## Project structure

```text
seamless-portfolio-experience-main/
├── public/
│   ├── projects/       # Portfolio and project imagery
│   ├── favicon.svg     # Custom RP favicon
│   └── rudra-resume.pdf
├── src/
│   ├── components/
│   │   ├── portfolio/  # Portfolio sections and 3D experience
│   │   └── ui/         # Reusable shadcn/ui components
│   ├── data/
│   │   └── portfolio.ts # Portfolio content and links
│   ├── hooks/
│   └── pages/
├── index.html
├── vite.config.ts
└── vercel.json
```

## Personal links

- **Email:** [rudra.psr8@gmail.com](mailto:rudra.psr8@gmail.com)
- **GitHub:** [RudraPratapSingh2008](https://github.com/RudraPratapSingh2008)
- **LinkedIn:** [Rudra Pratap Singh Rathore](https://www.linkedin.com/in/-rudrapratapsinghrathore)
- **Resume:** [`public/rudra-resume.pdf`](./public/rudra-resume.pdf)

## Deployment

The project is ready to deploy on Vercel:

1. Import the GitHub repository into Vercel.
2. Set the project root to `seamless-portfolio-experience-main` if prompted.
3. Keep the default Vite build settings.
4. Deploy.

The included [`vercel.json`](./vercel.json) keeps client-side routes working through the SPA fallback.

## License

This portfolio is personal work. Please do not reuse the personal content, resume, images, or project branding without permission.
