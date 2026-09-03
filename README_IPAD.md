# Canada Explorer — iPad App Setup

This is the personal iPad-ready version of the Canada Explorer project.

## What was added
- Progressive Web App (PWA) manifest
- iPad Home Screen / standalone web-app metadata
- Canada Explorer Home Screen icon
- Service worker for caching the app shell and packaged local assets

The existing lessons, content, navigation, photos, and videos were not intentionally changed.

## Important
The app still contains some remote Wikimedia Commons media used by the interactive regional lessons. Those items require an internet connection. The packaged local assets can be cached for offline use after the app has been opened online at least once.

## Free installation on iPad
1. Put this folder on a web host that provides HTTPS. GitHub Pages is one free option for a personal static site.
2. Open the published Canada Explorer address in Safari on the iPad.
3. Tap Share → More → Add to Home Screen.
4. Turn on **Open as Web App**.
5. Tap **Add**.

The Canada Explorer icon will appear on the iPad Home Screen and open like an app.
