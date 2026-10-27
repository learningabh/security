# Kinetic Resource Group website

Single-page marketing site for Kinetic Resource Group (KRG), built with React 19 and Vite.

```bash
npm install
npm run dev      # local development
npm run lint
npm run build    # production build in dist/
```

## Where things live

| What | File |
| --- | --- |
| Company name, contact details, legal links, nav | `src/data/site.js` |
| Services, industries, principles, reasons, process steps | `src/data/content.js` |
| Design tokens (colors, type, spacing) | `src/index.css` |
| Component styles | `src/style.css` |
| Page sections | `src/components/` (assembled in `Home.jsx`) |

## Before launch

1. **Confirm industries.** Services are confirmed (KRG provides physical/manned security
   only, with no CCTV or electronic systems). Industries in `src/data/content.js` are still
   `confirmed: false` and show a "To confirm" flag in `npm run dev` (never in production).
2. Contact details are set in `src/data/site.js` (shared with Alert Intelligence).
3. **Contact form email.** The form does not send email itself: on submit it opens Gmail
   (or the visitor's email app) with the enquiry pre-filled, addressed to `enquiryEmail` in
   `src/data/site.js`, currently a **testing** address. Replace it with the client's email.
4. **Privacy Policy / Terms of Service.** Add the pages, then set `legal.privacyUrl` and
   `legal.termsUrl` in `src/data/site.js`; the footer links appear automatically.
5. **Open Graph image.** In `index.html`, change `og:image` to an absolute URL on the live domain.
6. **Photography.** Replace the hero image (`src/assets/photos/commercial-lobby.jpg`) with a
   real photo of KRG personnel when one is available.

## Image sources

All photos are CC0 (public domain) from Wikimedia Commons, so no attribution is required:

- `commercial-lobby.jpg`: [OCT Tower lobby, Shenzhen](https://commons.wikimedia.org/wiki/File:SZ_%E6%B7%B1%E5%9C%B3_Shenzhen_%E5%8D%97%E5%B1%B1%E5%8D%80_Nanshan_%E8%8F%AF%E5%83%91%E5%9F%8E%E5%A4%A7%E5%BB%88_OCT_Tower_office_building_main_lobby_September_2024_R12S_02.jpg)
- `corporate-facade.jpg`: [Port Corporate Tower, Rio de Janeiro](https://commons.wikimedia.org/wiki/File:Port_Corporate_Tower_Building,_Rio_de_Janeiro,_Brazil.jpg)
- `residential-tower.jpg`: [Abay 130 residential complex, Almaty](https://commons.wikimedia.org/wiki/File:Abay_130_residential_complex_facade_at_Abay_Avenue_130k3_in_Almaty.jpg)

`src/assets/images/secure.webp` is no longer used: the uniforms in it carry another
company's name ("Uniworth Security Services").
