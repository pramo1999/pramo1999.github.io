---
title: Blog
view: article-grid
summary: "Insights on Actuarial Science, Machine Learning, and R."
type: landing

cascade:
  - target:
      path: '{/blog/*/**}'
    type: article
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: posts
    content:
      title: Latest Insights
      subtitle: "Exploring the intersection of Actuarial Science, Data, and Technology."
      text: ""
      filters:
        folders:
              - blog
        exclude_featured: false
    design:
      view: article-grid
      columns: 3 # 3 columns looks best for blog posts
      show_read_time: true
      show_date: true
      show_authors: false
      
---
