---
layout: page
title: Tags
permalink: /tags/
---

## Post Tags

Browse all posts by tag:

<div class="tags-cloud mb-4">
  {% assign tags_list = site.tags | sort %}
  {% for tag in tags_list %}
    <a href="#{{ tag[0] | slugize }}" class="badge bg-light text-dark text-decoration-none m-1 p-2">
      {{ tag[0] }} <span class="badge bg-secondary">{{ tag[1].size }}</span>
    </a>
  {% endfor %}
</div>

<div class="tags-list">
  {% for tag in tags_list %}
    <div id="{{ tag[0] | slugize }}" class="tag-section mb-4">
      <h3>{{ tag[0] }}</h3>
      <ul class="list-unstyled">
        {% for post in tag[1] %}
          <li class="mb-2">
            <a href="{{ site.baseurl }}{{ post.url }}" class="text-decoration-none">{{ post.title }}</a>
            <small class="text-muted ms-2">{{ post.date | date: "%B %d, %Y" }}</small>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>