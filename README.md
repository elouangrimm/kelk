🖌️ [Demo](https://kleki.com/) | ❓ [About](https://kleki.com/about/)

<p style="text-align:center">
<img src="https://bitbof.com/stuff/2022-01-klecks/2022-03-klecks-github.png" alt="kelk"><br>
</p>

An open-source, community funded, painting tool for the browser forked from <a href="https://klecks.org" target="_blank" rel="noopener noreferrer">Klecks</a>.

## Features
- Layers
- Pen-support with pressure and stabilizer
- Touch gestures
- Brushes: pen, blend, sketchy, pixel, chemy, smudge, eraser
- Tools: selection, paint bucket, text, shapes, gradient
- WebGL-powered filters: blur, tilt-shift, curves, distort, noise.
- Lineart extraction
- Editing tools: transform, crop/expand, resize, perspective
- Supports all major form factors: desktop, tablet and phone

---

# Commands
- initialize via `npm install` (requires node and npm to be installed already)
- `npm run start` - dev server (to run it locally)
- `npm run build` - build standalone into `/dist/`
- `npm run build:help` - build help page (when clicking the questionmark) into `/dist/`

# Docker
To run kelk (standalone) within a Docker container, run the following commands in project root:

`docker-compose build`

`docker-compose up -d`

It is then accessible through: http://localhost:5050