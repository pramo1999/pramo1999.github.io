---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-12-11
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: markdown
    id: introduction
    content:
      text: |-
        <section class="interactive-intro" aria-labelledby="intro-title">
          <h1 id="intro-title">Hi, I’m Pramo.</h1>
          <div class="intro-copy">
            <p class="intro-lede">I am an <strong>Actuarial Analyst and Computer Scientist</strong> based in Canberra.</p>
            <p class="intro-summary">I recently graduated from the <strong>Australian National University</strong> with <strong>First Class Honours in Computing</strong>, alongside degrees in <strong>Actuarial Studies and Science</strong> (Computing major and Mathematics minor).</p>
            <p class="intro-summary intro-original-highlight"><strong>My greatest assets are my drive and dedication. I look forward to sharing my professional journey here on this website!</strong></p>
            <details class="intro-more">
              <summary>➕ Read more about my background</summary>
              <div class="intro-more-copy">
                <h3>Professional Vision</h3>
                <p>My expertise lies at the intersection of machine learning and actuarial science. I am dedicated to applying advanced computing techniques to enhance data interpretation and risk assessment. My core philosophy is to move beyond "black box" modeling, ensuring that complex algorithms remain interpretable, transparent, and ethically sound for stakeholders.</p>
                <h3>My Value Proposition: Grit and Dedication</h3>
                <p>While many focus solely on technical aptitude, I believe my greatest asset is my <strong>unwavering drive and dedication</strong>. I pursued a multidisciplinary double degree to develop a niche skill set that bridges the gap between raw data science and rigorous actuarial standards.</p>
                <p>I have a proven track record of managing high-pressure, complex workloads. During my final two years of university, I successfully balanced a role at the <strong>Australian Government Actuary</strong> while overloading with multiple Part 2 and 3 courses for the Actuaries Institute. As a result, I completed <strong>all but one actuarial exam</strong> required for Fellowship prior to graduation.</p>
                <h3>Proactive Leadership &amp; Initiative</h3>
                <p>I am a proactive leader who identifies gaps and creates solutions. Recognizing a need for better community representation, I <strong>initiated and co-founded the first Sri Lankan Society at ANU</strong>. This role required high-level organization, task management, and the ability to coordinate large-scale events and programs from the ground up.</p>
                <h3>Research &amp; Mentorship</h3>
                <p>I am deeply committed to the idea of "lifting as you climb." As a tutor and mentor, I took the initiative to redesign course content and develop original assignments to improve the student experience (examples of which can be found in my <a href="/projects/">Projects section</a>).</p>
                <p>My commitment to impactful work also drove my <strong>Honours research</strong>, which introduced novel health-based variables into mortality projections. This research aims to refine mortality predictions to ensure more accurate and sustainable retirement pricing for Australians.</p>
              </div>
            </details>
          </div>
          <div class="intro-visual" role="img" aria-label="Stylized portrait of Pramo whose head and eyes follow the pointer" data-gaze-atlas="/images/pramo-gaze-frames.webp?v=20261112">
            <img class="intro-portrait" src="/images/pramo-3d-character-v2-transparent.png" alt="" width="1278" height="1230" fetchpriority="high">
            <canvas class="intro-gaze-canvas" aria-hidden="true"></canvas>
          </div>
          <div class="intro-actions">
            <a class="intro-button intro-button-primary" href="/experience/">View Experience <span aria-hidden="true">↗</span></a>
            <a class="intro-button intro-button-secondary" href="/uploads/resume.pdf" target="_blank" rel="noopener">Download CV (pdf) <span aria-hidden="true">↓</span></a>
          </div>
          <details class="intro-info">
            <summary aria-label="About the portrait and animation">i</summary>
            <div class="intro-info-panel">
              <h2>About this portrait</h2>
              <p><strong>Image</strong> The stylized portrait was generated with ChatGPT image generation using my uploaded photo as the identity reference and a second image for style and framing. Backgrounds are removed from the still and movement frames so the section’s beige gradient shows through.</p>
              <p><strong>Motion</strong> A directional head-and-eye sequence was generated with Google Flow. On desktop, a 64-frame WebP atlas is displayed with native JavaScript Canvas 2D, Pointer Events and <code>requestAnimationFrame</code>; the pointer selects one pre-rendered frame. The website hero plays no video or audio. Touch devices and reduced-motion settings use the still portrait.</p>
              <p><strong>Website</strong> The site is built with Hugo Blox and Tailwind CSS.</p>
            </div>
          </details>
        </section>
    design:
      columns: '1'

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

  - block: markdown
    id: my-research
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        <style>#my-research .prose { max-width: 90ch !important; }</style>

        My Honours research, “Rethinking Mortality Using a State-Based Dynamic Probabilistic Model,” tackles one of the most complex financial and social challenges in Australia: predicting how long a population will live when health and lifestyle are constantly shifting. 

        I continue this work as a **Research Assistant at UNSW**, extending mortality-improvement research with medical information and dynamic health-state models. I co-authored the Actuaries Institute article [“Incorporating Socio-economic Factors in Mortality Modelling”](https://content.actuaries.asn.au/resources/resource-ce6yyqn64sx3-786882053-16716) and helped launch the [Australian Longevity Explorer](https://auslongevity.shinyapps.io/explorer/), including leading development of its medical explorer component.
        
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
