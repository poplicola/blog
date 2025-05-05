# Bootstrap Jekyll Blog

A sleek, responsive Jekyll blog template using Bootstrap 5, designed for easy deployment to GitHub Pages.

## Features

- Responsive design using Bootstrap 5
- Clean and modern interface
- Category and tag support
- Pagination
- SEO optimized
- Social media integration
- Comment section (Disqus)
- Easy GitHub Pages deployment

## Quick Start

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/bootstrap-jekyll-blog.git
   cd bootstrap-jekyll-blog
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View your site** at http://localhost:4000

## Creating a New Post

1. Create a new file in the `_posts` directory with the format:
   `YYYY-MM-DD-title-of-your-post.md`

2. Add the following front matter at the top of your file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD HH:MM:SS +0000
   categories: [category1, category2]
   tags: [tag1, tag2]
   image: /assets/images/featured-image.jpg
   ---
   ```

3. Write your post content in Markdown below the front matter.

## Customization

### Site Configuration

Edit `_config.yml` to customize your site settings:

- Site title and description
- Author information
- Social media links
- Navigation menu items
- Disqus comments

### Theme Customization

- Modify `_sass/custom.scss` to override Bootstrap variables
- Edit files in `_includes` directory to customize page components
- Update layouts in `_layouts` directory

## Directory Structure

```
.
├── _config.yml                  # Site configuration
├── _posts/                      # Blog posts
├── _drafts/                     # Draft posts
├── _layouts/                    # Page layouts
│   ├── default.html             # Default layout
│   ├── post.html                # Post layout
│   └── home.html                # Home page layout
├── _includes/                   # Reusable components
│   ├── header.html              # Header component
│   ├── footer.html              # Footer component
│   └── ...                      # Other components
├── _sass/                       # Sass partials
│   ├── custom.scss              # Custom styling
│   └── ...                      # Other Sass files
├── assets/                      # Static assets
│   ├── css/                     # Compiled CSS
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── pages/                       # Additional pages
│   ├── about.md                 # About page
│   └── contact.md               # Contact page
└── index.html                   # Home page
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub.

2. Push your local repository to GitHub:
   ```bash
   git remote set-url origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Click "Settings"
   - Navigate to "Pages" section
   - Select "main" as the source branch
   - Click "Save"

4. Your site will be available at `https://yourusername.github.io/`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
