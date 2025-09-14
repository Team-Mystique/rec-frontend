# Deployment Guide for Rise Edu Consult (riseedu.com)

This guide explains how to host the rec-frontend React application with the custom domain `riseedu.com`.

## Prerequisites

1. A registered domain `riseedu.com`
2. Access to DNS settings for the domain
3. Choose your hosting platform (GitHub Pages, Netlify, Vercel, or traditional web server)

## Hosting Options

### Option 1: GitHub Pages (Recommended for Open Source)

1. **Setup Repository**: Ensure your code is pushed to a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch" 
   - Branch: `gh-pages` (will be created automatically)
3. **DNS Configuration**:
   - Add a CNAME record: `www.riseedu.com` → `your-github-username.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
4. **Deploy**: The GitHub Action will automatically deploy on push to main/master

### Option 2: Netlify (Recommended for Easy Setup)

1. **Connect Repository**: 
   - Sign up/in to Netlify
   - Connect your GitHub repository
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `build`
3. **Domain Configuration**:
   - In Netlify dashboard → Domain settings
   - Add custom domain: `riseedu.com`
   - Configure DNS as instructed by Netlify
4. **Auto-Deploy**: Automatic deployment on git push

### Option 3: Vercel

1. **Connect Repository**: Import your project from GitHub
2. **Domain Setup**: Add `riseedu.com` in project settings
3. **DNS Configuration**: Follow Vercel's DNS instructions
4. **Deploy**: Automatic deployment on git push

### Option 4: Traditional Web Server (Apache/Nginx)

1. **Build the Application**:
   ```bash
   npm install
   npm run build
   ```
2. **Upload Files**: Upload the entire `build/` folder contents to your web server
3. **Configure Server**:
   - **Apache**: The `.htaccess` file is included for SPA routing
   - **Nginx**: Add this to your server block:
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```
4. **Domain Configuration**: Point `riseedu.com` to your server's IP

## Environment Variables

The application uses these environment variables:

- `REACT_APP_API_URL`: Backend API endpoint
- `REACT_APP_ENV`: Environment (development/production)

**Production values**:
- `REACT_APP_API_URL=https://api.riseedu.com/api`
- `REACT_APP_ENV=production`

## Build Process

```bash
# Install dependencies
npm install

# Run tests
npm test -- --watchAll=false

# Build for production
npm run build

# The build/ folder contains the static files ready for deployment
```

## Domain Configuration

1. **Purchase Domain**: Ensure `riseedu.com` is registered
2. **DNS Settings**: Configure A records and CNAME as per your hosting provider
3. **SSL Certificate**: Most modern hosting platforms provide free SSL automatically

## Verification

After deployment:

1. Visit `https://riseedu.com` 
2. Check that all routes work (test navigation)
3. Verify API calls work with production backend
4. Test on mobile devices

## Troubleshooting

- **404 on page refresh**: Ensure SPA routing is configured (see platform-specific configs)
- **API calls failing**: Check CORS settings on backend for `riseedu.com` domain
- **SSL issues**: Ensure your hosting platform has SSL enabled

## Files Added for Deployment

- `public/CNAME` - GitHub Pages domain configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment
- `netlify.toml` - Netlify configuration
- `vercel.json` - Vercel configuration  
- `public/.htaccess` - Apache SPA routing
- `.env.production` - Production environment variables

Choose the hosting option that best fits your needs and follow the corresponding setup instructions.