---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-12-11
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: |-
        Hi—I'm Pramo. I am an Actuarial Analyst and Computer Scientist based in Canberra. I recently graduated from the Australian National University with First Class Honours in Computing, alongside degrees in Actuarial Studies and Science.

        I bring over three years of experience from the Australian Government Actuary (Treasury), where I specialize in developing and debugging actuarial models using SAS and R. My research interests lie at the intersection of machine learning and actuarial science, specifically using national-scale health data (PLIDA) to improve mortality forecasting.

        Additionally, I have been actively pursuing my qualification with the Actuaries Institute. Alongside full-time university studies, I have successfully completed all but one actuarial exam and am currently awaiting my Associateship.

        <div style="display:flex;gap:0.5rem;align-items:center;padding-top:1rem">
        <a href="experience/" style="display:inline-block;padding:0.5rem 1rem;background:#0ea5a4;color:#ffffff;border-radius:0.375rem;text-decoration:none">View Experience</a>
        <a href="uploads/resume.pdf" target="_blank" style="display:inline-block;padding:0.5rem 1rem;background:#111827;color:#ffffff;border-radius:0.375rem;text-decoration:none">Download CV (pdf)</a>
        <a href="uploads/Resume_Dec2025.docx" style="display:inline-block;padding:0.5rem 1rem;background:#6b7280;color:#ffffff;border-radius:0.375rem;text-decoration:none">Download CV (word)</a>
        </div>
    design:
      background:
        gradient_mesh:
          enable: true
      avatar:
        size: medium 
        shape: circle

  - block: markdown
    id: my-research
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        <style>#my-research .prose { max-width: none !important; }</style>

        My Honours research, “Rethinking Mortality Using a State-Based Dynamic Probabilistic Model,” tackles one of the most complex financial and social challenges in Australia: predicting how long a population will live when health and lifestyle are constantly shifting. 
        
        #### The Innovation: Breaking the "Static" Mold

        Traditional mortality models are "static"—they rely on broad population averages that fail to account for an individual’s evolving health. This leads to massive systemic risks that affect every Australian. My research is novel because it moves away from these averages, creating a dynamic, state-based model that adapts as an individual’s health status changes.

        #### The Impact: Retirement Products & Government Subsidies

        The precision of this model has direct consequences for the Australian economy:

        **Retirement Product Pricing:** For the private sector, accurate mortality forecasting is the "engine" behind Annuities and Pension products. If models are inaccurate, these products become either too expensive for the average person or financially unstable for the provider. My research enables more equitable pricing, ensuring retirees get the most out of their hard-earned savings.

        **Sustainability of Subsidies:** On a federal level, the Age Pension and various Retirement Subsidies represent one of the government’s largest expenditures. Even a slight miscalculation in mortality trends can lead to billions of dollars in "hidden" liabilities. In coorporating health variables to mortality predictions provides a more robust framework for the government to manage these subsidies, ensuring the system remains solvent for future generations.

        **The Social Impact:** Longevity vs. Quality of Life
        At its heart, this is about dignity in aging. The social impact of this research is profound: it helps solve the "fear of outliving your money." By providing a clearer planning horizon, we can reduce the anxiety of retirees, allowing them to spend their savings with confidence rather than living in unnecessary frugality due to statistical uncertainty.

        #### Novelty of this research 

        What makes this research truly unique is the data behind it. I was granted highly restricted access to the Personal-Level Integrated Data Asset (PLIDA).

        Extreme Difficulty of Access: PLIDA is a massive, national-scale dataset that links health, census, and government records. Gaining access requires rigorous ethical clearance and high-level technical trust.

        A "First-of-its-Kind" View: This is Australias first attempt to incorporate health information for mortality on a national scale,. With this research I was able to observe real-world health transitions that have never been factored into traditional actuarial models.

    design:
      columns: '1'

  - block: markdown
    content:
      title: '🎓 Education & Credentials'
      subtitle: ''
      text: |
        <div style="margin-bottom: 2.5rem;">
          <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Bachelor of Computing (Honours)</h3>
          <p style="margin: 0; color: #4b5563;"><em>Australian National University</em> | Graduated: Dec 2025</p>
          <p style="margin-top: 0.5rem;"><strong>Grade:</strong> First Class Honours (Thesis: 92%)</p>
          <p style="margin-top: 0.5rem; font-size: 0.95rem;">
            <strong>Thesis:</strong> "Rethinking Mortality Using a State-Based Dynamic Probabilistic Model Leveraging National-Scale Health Data" <br>
            <strong>Relevant Coursework:</strong> Statistical Machine Learning, Research Methods, Document Analysis, Computer Vision.
          </p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Bachelor of Actuarial Studies & Bachelor of Science</h3>
          <p style="margin: 0; color: #4b5563;"><em>Australian National University</em> | Graduated: Dec 2024</p>
          <p style="margin-top: 0.5rem;"><strong>GPA:</strong> Science (6.63/7.0) | Actuarial (6.06/7.0)</p>
          <p style="margin-top: 0.5rem; font-size: 0.95rem;">
            <strong>Major:</strong> Computer Science | <strong>Minor:</strong> Mathematics <br>
            <strong>Key Coursework:</strong> Algorithms, Number Theory & Cryptography, Actuarial Data Analytics, Survival Modelling, Life Contingencies.
          </p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Professional Qualifications</h3>
          <p style="margin: 0; color: #4b5563;"><em>Actuaries Institute Australia</em></p>
          <ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;">
            <li><strong>Fellowship Program:</strong> 2/3 exams completed (Life Insurance & Retirement Product Development & Valuation)</li>
            <li><strong>Actuary Program:</strong> 4/4 exams completed (Control Cycle, Data Science Principles, Asset Liability Matching)</li>
            <li><strong>Foundation Program:</strong> 6/6 exams completed (Statistics, Economics, Finance, Mathematics)</li>
          </ul>
        </div>

        
        <p style="margin-top:0.5rem;">
          <a href="/documents/" style="text-decoration:underline; color:inherit">See full list of documents</a>
        </p>
    design:
      columns: '1'

  # - block: markdown
  #   content:
  #     title: 'Transcripts and documentation'
  #     subtitle: 'Scroll to see more →'
  #     text: 
  #       📂 Click to View Official Transcripts & Results
  #     folders:
  #       - /uploads/ProofOfAchievements/
  #   design:
  #     columns: 1

  # --- NEW: Horizontal Scroll R-Blog Section ---
  - block: collection
    id: blog
    content:
      title: R-Blog & Actuarial Projects
      # subtitle: 'Scroll to see more →'
      subtitle: ''
      text: '<a href="/blog/" style="display:inline-block;padding:0.5rem 1rem;background:#0ea5a4;color:#ffffff;border-radius:0.375rem;text-decoration:none;margin-bottom:1rem;">View all blog posts</a>'
      count: 6
      filters:
        # Use folders to select blog content (posts with cover/image front matter).
        folders:
          - blog
        exclude_featured: false
    design:
      view: article-grid
      columns: 3

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: talks
    content:
      title: Upcoming Talks and Presentations
      filters:
        folders:
          - future
    design:
      view: card

  - block: collection
    id: talks
    content:
      title: Recent Talks and Presentations
      text: '<a href="/talks/" style="display:inline-block;padding:0.5rem 1rem;background:#0ea5a4;color:#ffffff;border-radius:0.375rem;text-decoration:none;margin-bottom:1rem;">View more talks and presentations</a>'
      count: 3
      filters:
        folders:
          - events
    design:
      view: article-grid
      columns: 3

  - block: collection
    id: certifications
    content:
      title: Certifications Completed and ongoing
      subtitle: 'Selected certificates and professional courses'
      text: ''
      count: 6
      filters:
        folders:
          - certifications
        exclude_featured: false
    design:
      view: article-grid
      columns: 3

  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     page_type: blog
  #     count: 10
  #     filters:
  #       author: ''
  #       category: ''
  #       tag: ''
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ''
  #     offset: 0
  #     order: desc
  #   design:
  #     view: card
  #     spacing:
  #       padding: [0, 0, 0, 0]
---