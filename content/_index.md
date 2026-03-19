---
title: Talks & Presentations
summary: "A complete archive of my recent and upcoming talks, seminars, and presentations."
type: landing

cascade:
  - target:
      path: '{/events/*/**}'
    type: event
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: talks
    content:
      title: All Talks
      subtitle: ""
      text: ""
      filters:
        folders:
          - events
        exclude_featured: false
    design:
      view: card
      columns: '3'
      show_date: true
---