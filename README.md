# Zheng Shuyan · Personal Homepage

A dependency-free personal homepage for GitHub Pages.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173` in a browser. The page uses only `index.html`, `styles.css`, and `script.js`.

## Replace personal links

Edit the `profile.contacts` list in `script.js` to add the personal GitHub and LinkedIn URLs. The first version intentionally leaves those two links as clearly marked placeholders until the real accounts are confirmed.

## GitHub Pages

The repository can be deployed as a static site with the workflow at `.github/workflows/pages.yml`. Set the repository's Pages source to GitHub Actions, then push to the default branch.

## Brand assets

The homepage uses locally stored monochrome versions of the official East China Normal University mark and SenseTime logo, sourced from their official websites:

- https://www.ecnu.edu.cn/wzcd/xxgk/xxbs.htm
- https://www.sensetime.com/en
