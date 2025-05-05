# Bootstrap Jekyll Blog - Usage Guide

This guide will walk you through setting up, customizing, and using your new Bootstrap Jekyll blog.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Local Development](#local-development)
3. [Creating Content](#creating-content)
4. [Customizing Your Blog](#customizing-your-blog)
5. [Deploying to GitHub Pages](#deploying-to-github-pages)
6. [Advanced Configuration](#advanced-configuration)
7. [Troubleshooting](#troubleshooting)

## Initial Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (version 2.5.0 or higher)
- [RubyGems](https://rubygems.org/pages/download)
- [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/)
- [Git](https://git-scm.com/downloads)

### Setup Steps

1. **Clone this repository**:

   ```bash
   git clone https://github.com/yourusername/bootstrap-jekyll-blog.git
   cd bootstrap-jekyll-blog
   ```

2. **Install Jekyll and dependencies**:

   ```bash
   gem install bundler
   bundle install
   ```

3. **Update site configuration**:

   Edit `_config.yml` with your personal information:
   - Add `--drafts` to include draft posts:
     ```bash
     bundle exec jekyll serve --drafts
     ```

## Creating Content

### Blog Posts

1. **Create a new post**:

   Create a new file in the `_posts` directory with the naming format:
   ```
   YYYY-MM-DD-title-of-your-post.md
   ```

2. **Add front matter**:

   Include the following YAML front matter at the top of your post:
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

3. **Write your content** in Markdown below the front matter.

4. **Adding images**:

   - Place images in the `assets/images/` directory
   - Reference them in your posts using:
     ```markdown
     ![Alt text](/assets/images/your-image.jpg)
     ```

### Pages

1. **Create a new page**:

   Create a new file in the `pages` directory or in the root directory:
   ```
   your-page-name.md
   ```

2. **Add front matter**:

   ```yaml
   ---
   layout: page
   title: "Your Page Title"
   permalink: /your-page-url/
   ---
   ```

3. **Write your content** in Markdown below the front matter.

### Drafts

1. **Create a draft post**:

   Create a new file in the `_drafts` directory (without the date in the filename):
   ```
   title-of-your-draft.md
   ```

2. **Preview your drafts** by running:
   ```bash
   bundle exec jekyll serve --drafts
   ```

## Customizing Your Blog

### Theme Customization

1. **Bootstrap variables**:

   Edit `_sass/custom.scss` to override Bootstrap variables:
   ```scss
   $primary: #3498db;
   $font-family-sans-serif: 'Roboto', sans-serif;
   ```

2. **Custom CSS**:

   Add additional CSS rules to `assets/css/main.scss`.

3. **Layout templates**:

   Modify files in the `_layouts` directory to change page structures.

4. **Components**:

   Edit files in the `_includes` directory to update reusable components.

### Adding Features

1. **Enable comments**:

   - Sign up for a [Disqus](https://disqus.com/) account
   - Update the `disqus.shortname` in `_config.yml`

2. **Add Google Analytics**:

   - Create a [Google Analytics](https://analytics.google.com/) account
   - Update the `google_analytics` ID in `_config.yml`

3. **Enable search functionality**:

   The search functionality is already implemented. To update the search index:
   
   ```bash
   # Install required NPM packages
   npm install gray-matter marked striptags
   
   # Generate the search index
   node scripts/generate-search-index.js
   ```

## Deploying to GitHub Pages

### Method 1: User/Organization Site

1. **Create a repository** named `yourusername.github.io`

2. **Push your site**:
   ```bash
   git remote set-url origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Your site will be available at `https://yourusername.github.io/`

### Method 2: Project Site

1. **Create a repository** with any name

2. **Push your site**:
   ```bash
   git remote set-url origin https://github.com/yourusername/repository-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings"
   - Navigate to "Pages" section
   - Select "main" as the source branch
   - Click "Save"

4. Your site will be available at `https://yourusername.github.io/repository-name/`

5. **Update the baseurl**:
   
   Edit `_config.yml` and set:
   ```yaml
   baseurl: "/repository-name"
   ```

## Advanced Configuration

### Adding Jekyll Plugins

1. **Update the Gemfile**:
   
   Add your desired plugins:
   ```ruby
   group :jekyll_plugins do
     gem "jekyll-paginate"
     gem "jekyll-feed"
     gem "jekyll-sitemap"
     gem "jekyll-seo-tag"
     gem "your-new-plugin"
   end
   ```

2. **Install the plugins**:
   ```bash
   bundle install
   ```

3. **Update `_config.yml`**:
   ```yaml
   plugins:
     - jekyll-paginate
     - jekyll-feed
     - jekyll-sitemap
     - jekyll-seo-tag
     - your-new-plugin
   ```

### Custom Domain

1. **Purchase a domain** from a domain registrar

2. **Create a CNAME file** in the root directory with your domain:
   ```
   yourdomain.com
   ```

3. **Configure DNS settings** with your domain provider:
   - Add an `A` record pointing to `185.199.108.153`
   - Add an `A` record pointing to `185.199.109.153`
   - Add an `A` record pointing to `185.199.110.153`
   - Add an `A` record pointing to `185.199.111.153`
   - Add a `CNAME` record with `www` pointing to `yourusername.github.io`

4. **Enable HTTPS** in your GitHub Pages settings

## Troubleshooting

### Common Issues

1. **Dependency errors**:
   
   Try updating your gems:
   ```bash
   bundle update
   ```

2. **Page not found errors**:
   
   Check your `baseurl` setting in `_config.yml`

3. **CSS not loading**:
   
   Verify that paths are correct and include `{{ site.baseurl }}` before URLs

4. **Changes not appearing**:
   
   - Make sure you're saving files
   - Try rebuilding the site:
     ```bash
     bundle exec jekyll clean
     bundle exec jekyll build
     ```

### Getting Help

If you encounter issues:

1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Search for similar issues on [Stack Overflow](https://stackoverflow.com/questions/tagged/jekyll)
3. Ask for help in the [Jekyll forum](https://talk.jekyllrb.com/)

Happy blogging! Site title and description
   - Author information
   - Social media links
   - Disqus shortname (if using comments)
   - Google Analytics ID (if using analytics)

## Local Development

1. **Start the local development server**:

   ```bash
   bundle exec jekyll serve
   ```

2. **View your site** at [http://localhost:4000](http://localhost:4000)

3. **Development options**:

   - Add `--livereload` for automatic page refreshing:
     ```bash
     bundle exec jekyll serve --livereload
     ```
   
   -