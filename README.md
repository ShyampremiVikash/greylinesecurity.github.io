# greylinesecurity.github.io
# GreyLine Security — Website

A clean, professional static website for an infrastructure and application security consultancy.

## Services Covered
- Firewall Implementation & Support
- Web Application Penetration Testing (OWASP-aligned)
- Network Architecture Design (on-premise)
- Network Security Posture Assessment (DNS cache poisoning, ARP spoofing, MITM)

## Stack
- Pure HTML5, CSS3, Vanilla JS — no frameworks, no build step
- Google Fonts (Syne, DM Mono, Lora) loaded via CDN
- Fully static — works on GitHub Pages out of the box

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo-name>`

## File Structure

```
/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactions
├── assets/
│   └── favicon.svg     # SVG favicon
└── README.md
```

## Customisation

- **Brand name**: Search for `GreyLine` / `GreyLine Security` in `index.html` and replace
- **Email**: Change `hello@GreyLinesec.io` in the contact section
- **Colours**: Edit CSS variables at the top of `style.css` (`:root` block)
- **Form**: The form currently shows a success state client-side only. Wire it up to Formspree, Netlify Forms, or similar for real submissions.

### Connect a form (Formspree example)
Replace the form tag:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```
And remove the JS form handler in `main.js`.
