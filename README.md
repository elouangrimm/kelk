🖌️ [Demo](https://kleki.com/) | ❓ [About](https://kleki.com/about/) | 📝 [Dev Blog](https://blog.kleki.com/)

<p style="text-align:center">
<img src="https://bitbof.com/stuff/2022-01-klecks/2022-03-klecks-github.png" alt="kelk"><br>
</p>

kelk (German for "splash of color", pronounced "clex") is the official open-source release of the community-funded online painting app [Kleki](https://kleki.com).

kelk can run in standalone mode (e.g. on [kleki.com](https://kleki.com)).

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

Created by developer/artist [bitbof](https://bitbof.com)

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


# Contribute
kelk is community funded. [Donate today](https://kleki.com/donate/)

# License

bitbof © 2025 - Released under the MIT License. Icons by bitbof are public domain (excluding the kelk logo, bitbof logo).

If you wish to say you're using "kelk" and use its branding you must acquire a license from bitbof. You are free to say you're using "kelk".
