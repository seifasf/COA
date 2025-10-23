# Deployment Instructions for COA Holding Company

## Quick Deploy to Hostinger (Manual - RECOMMENDED)

1. Login to **Hostinger Control Panel**
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain root for coaholding.com)
4. **Delete all files** in that directory
5. **Upload ALL files from the `build/` folder:**
   - .htaccess
   - index.html
   - favicon.png
   - favicon.jpg
   - asset-manifest.json
   - static/ (entire folder)
6. Visit https://coaholding.com/ and refresh

## Important Notes

- ⚠️ Upload the **CONTENTS** of the `build/` folder, not the folder itself
- ⚠️ Make sure `.htaccess` uploads (enable "Show Hidden Files" if needed)
- ⚠️ The `static/` folder must be completely uploaded with all subfolders
- ⚠️ Do NOT deploy from the root of the GitHub repository - only use build folder contents

## If using Git Deployment

The `.cpanel.yml` file is configured to copy only the build folder contents during deployment.
Make sure to commit and push the build folder to GitHub.

## Verify Deployment

After uploading, your public_html should contain:
```
public_html/
├── .htaccess
├── index.html
├── favicon.png
├── favicon.jpg
├── asset-manifest.json
└── static/
    ├── css/
    ├── js/
    └── media/
```

## Website Features

✅ Coming Soon hero section
✅ Contact form
✅ Footer with social links (Instagram & LinkedIn)
✅ Content protection (no copy/paste, no image dragging)
✅ Responsive design (mobile, tablet, desktop)
✅ Black & white minimalist theme

