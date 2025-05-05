---
layout: post
title: "Welcome to Jekyll with Bootstrap"
date: 2023-01-01 09:00:00 +0000
categories: [jekyll, tutorial]
tags: [getting-started, bootstrap]
image: /assets/images/post-welcome.jpg
---

Welcome to your new Jekyll blog with Bootstrap! This post will guide you through the basics of creating content with Jekyll and the features available in this Bootstrap-powered template.

## What is Jekyll?

Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Instead of using a database, Jekyll takes your content, renders Markdown or HTML, and produces a complete, static website ready to be served by your favorite web server.

## Writing Posts

Jekyll makes blogging simple by allowing you to write your posts in Markdown. All you need to do is create a new file in the `_posts` directory following the `YYYY-MM-DD-title.md` naming convention.

### Front Matter

Each post begins with front matter, which is YAML between triple-dashed lines:

```yaml
---
layout: post
title: "Welcome to Jekyll with Bootstrap"
date: 2023-01-01 09:00:00 +0000
categories: [jekyll, tutorial]
tags: [getting-started, bootstrap]
image: /assets/images/post-welcome.jpg
---
```

### Markdown Examples

#### Headers

```markdown
# Header 1
## Header 2
### Header 3
```

#### Lists

```markdown
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
```

#### Code

```markdown
`inline code`

```javascript
// Code block
function hello() {
  console.log('Hello, world!');
}
```
```

## Bootstrap Features

This Jekyll blog is powered by Bootstrap 5, which includes a variety of components and utilities to create responsive and attractive web pages.

### Grid System

The Bootstrap grid system is used throughout this theme for layout. It's responsive and mobile-first, adapting to different screen sizes.

### Components

This theme includes styled Bootstrap components like:

- Cards
- Navbars
- Buttons
- Forms
- Alerts
- And more!

## Customizing Your Blog

You can customize this blog by:

1. Editing `_config.yml` to change site settings
2. Modifying the Sass variables in `_sass/custom.scss`
3. Adding or editing layouts in the `_layouts` directory
4. Creating new includes in the `_includes` directory

## Next Steps

Now that you have your Jekyll blog up and running:

1. Update your site information in `_config.yml`
2. Replace the default avatar in `assets/images/`
3. Write your first blog post
4. Customize the theme to match your brand

Happy blogging!