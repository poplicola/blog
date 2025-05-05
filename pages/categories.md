---
layout: page
title: Categories
permalink: /categories/
---

## Post Categories

Browse all posts by category:

<div class="categories-list">
  {% assign categories_list = site.categories | sort %}
  {% for category in categories_list %}
    <div id="{{ category[0] | slugize }}" class="category-section mb-4">
      <h3>{{ category[0] }}</h3>
      <ul class="list-unstyled">
        {% for post in category[1] %}
          <li class="mb-2">
            <a href="{{ site.baseurl }}{{ post.url }}" class="text-decoration-none">{{ post.title }}</a>
            <small class="text-muted ms-2">{{ post.date | date: "%B %d, %Y" }}</small>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>