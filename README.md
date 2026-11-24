<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/pixo.webp" alt="Pixo Photo Editor: A browser image editor with filters, stickers, overlays and cropping" width="100%" />

<br />
<br />

# Pixo Photo Editor

### A browser image editor with filters, stickers, overlays and cropping

A React and Vite photo editor where you upload an image, adjust brightness, contrast and saturation, apply filters, add stickers and overlays, crop and download the result.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Webcrumbs](https://img.shields.io/badge/Built_with_Webcrumbs-141414?style=for-the-badge)](https://www.webcrumbs.ai)

[Webcrumbs docs](https://www.webcrumbs.ai) &nbsp;·&nbsp; [Webcrumbs](https://www.webcrumbs.ai) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

Pixo is a simple image editor built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). You upload an image, adjust it, apply filters, and download the edited result.

This is the first version of Pixo. The UI was generated with Webcrumbs Frontend AI and the code with GitHub Copilot. There is a lot of room for improvement, and feedback, suggestions and contributions are welcome.

## Features

- **Image upload**: click to upload an image into the editor canvas.
- **Basic adjustments**: brightness, contrast and saturation sliders, all starting at 100.
- **Filters**: pick a filter, held in editor state alongside the other settings.
- **Crop and resize**: choose a crop ratio (default 1/1) and zoom in or out.
- **Stickers and overlays**: add draggable, resizable stickers from an elements gallery, plus overlay, light flare and shadow options (`public/overlay1.webp`, `public/overlay2.png`).
- **Reset and download**: reset the canvas to defaults, or download the edited image.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [React](https://react.dev) 19 |
| Build tool | [Vite](https://vite.dev) |
| State | [Zustand](https://zustand-demo.pmnd.rs) |
| Interaction | [react-draggable](https://github.com/react-grid-layout/react-draggable), [re-resizable](https://github.com/bokuweb/re-resizable) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |

## Getting started

### Prerequisites

- Node.js 18 or later and npm

### Installation

```bash
git clone https://github.com/Studio1HQ/pixo.git
cd pixo
npm install
```

### Environment variables

None are used.

### Run

Start the development server with hot module replacement:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## How it works

```text
src/
├── App.jsx
├── components/PhotoEditor.jsx          # editor layout
├── components/ui/Sidebar.jsx           # upload, adjustments, crop and resize
├── components/ui/EditorCanvas.jsx      # canvas preview
├── components/ui/ElementsGallery.jsx   # stickers and overlays
├── hooks/useEditorCanvas.js            # canvas logic: zoom, filters, stickers, reset
└── store/usePhotoStore.js              # Zustand store for all editor state
```

All editor state (image, zoom, brightness, contrast, saturation, filter, crop, stickers, light flare, shadow, overlay) lives in `usePhotoStore`, and the canvas hook reads from it.

## Contributing

1. Raise an issue to discuss the changes you would like to make.
2. Fork the repository and clone it to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them.

## Resources

- [React](https://reactjs.org/): UI library.
- [Vite](https://vitejs.dev/): build tool.
- [Webcrumbs](https://www.webcrumbs.ai/): the Frontend AI tool used to generate the first UI.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Webcrumbs](https://www.webcrumbs.ai).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
