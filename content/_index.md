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
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        My Honours thesis, **"Rethinking Mortality Using a State-Based Dynamic Probabilistic Model,"** focused on improving traditional mortality predictions to support better planning horizons for Australian retirees. 
        
        This research leveraged the **Personal-Level Integrated Data Asset (PLIDA)** to incorporate health-based impacts on mortality and the dynamic nature of individual health status into actuarial forecasting.
    design:
      columns: '1'
  - block: markdown
    content:
      title: '🎓 Education & Credentials'
      subtitle: ''
      text: |-
        **Bachelor of Computing (Honours)** | *Australian National University* First Class Honours (Thesis Grade: 92%)  
        *Graduated: Dec 2025*

        **Bachelor of Actuarial Studies & Bachelor of Science** | *Australian National University* Major: Computer Science, Minor: Mathematics  
        *Graduated: Dec 2024*
        
        **Professional Qualifications** | *Actuaries Institute Australia*
        * **Associateship (AIAA):** Eligible & Awaiting Ceremony
        * **Fellowship Program:** 2/3 exams completed (Life Insurance & Retirement)
        * **Actuary Program:** 4/4 exams completed (Control Cycle, Data Science, Asset Liability)
        * **Foundation Program:** 6/6 exams completed

        <br>

        <details style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
          <summary style="cursor: pointer; font-weight: bold; color: #0ea5a4;">📂 Click to View Official Transcripts & Results</summary>
          <div style="margin-top: 1rem;">
            
            <p style="margin-bottom: 5px;"><strong>University Transcripts</strong></p>
            <ul style="margin-top: 0; padding-left: 20px;">
              <li><a href="uploads/ProofOfAchievements/anu_transcript.pdf" target="_blank">📄 ANU Official Transcript</a></li>
            </ul>

            <p style="margin-bottom: 5px; margin-top: 15px;"><strong>Actuarial Exam Results (Core Principles)</strong></p>
            <ul style="margin-top: 0; padding-left: 20px;">
              <li><a href="uploads/ProofOfAchievements/9576222--exam-result-letter--april-2019---core-principles--cm--cs-and-cb-.pdf" target="_blank">📄 Core Principles Results (CM, CS, CB)</a></li>
              <li><a href="uploads/ProofOfAchievements/CS1_9576222--exam-result-letter--april-2019---core-principles--cm--cs-and-cb-[59].pdf" target="_blank">📄 CS1 Exam Result</a></li>
            </ul>

            <p style="margin-bottom: 5px; margin-top: 15px;"><strong>Actuarial Exam Results (Part II & III)</strong></p>
            <ul style="margin-top: 0; padding-left: 20px;">
               <li><a href="uploads/ProofOfAchievements/CMP%20Results%20Letter_Class%20Registrations_779123_407293.pdf" target="_blank">📄 CMP (Control Cycle)</a></li>
               <li><a href="uploads/ProofOfAchievements/ALM_Results%20Letter_Class%20Registrations_787287_489066.pdf" target="_blank">📄 ALM (Asset Liability Management)</a></li>
               <li><a href="uploads/ProofOfAchievements/LIRPD_Results%20Letter_Class%20Registrations_784254_464810.pdf" target="_blank">📄 LIRPD (Life Insurance Product Dev)</a></li>
               <li><a href="uploads/ProofOfAchievements/LIRV_Results%20Letter_Class%20Registrations_788446_489087.pdf" target="_blank">📄 LIRV (Life Insurance Valuation)</a></li>
            </ul>

          </div>
        </details>
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
      title: Recent & Upcoming Talks
      filters:
        folders:
          - events
          - events/example
    design:
      view: card

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: blog
      count: 10
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]
---