---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: markdown
    content:
      title: ''
      text: |
        <div id="more-experience-wrapper" class="more-experience" style="margin: 1rem 0 2.5rem 0;">
        <details class="more-experience-card">
        <summary class="more-experience-toggle">➕ View More Experience</summary>
        <div class="more-experience-list">
        <h4><strong>Research Support Officer</strong></h4>
        <p class="more-experience-meta"><em>Orima Research</em> | Feb 2021 – Dec 2021</p>
        <p class="more-experience-description">Conducted data analytics using Excel and SPSS. Assisted with coding open-ended comments and checking data accuracy in reports.</p>
        <h4><strong>P.A.L Mentor</strong></h4>
        <p class="more-experience-meta"><em>Australian National University</em> | Semester 1, 2020</p>
        <p class="more-experience-description">Mentored peers as a Peer-Assisted Learning (P.A.L) leader, facilitating collaborative study sessions and supporting student transition to university life.</p>
        <h4><strong>Actuarial Intern</strong></h4>
        <p class="more-experience-meta"><em>Softlogic Life Insurance PLC (Sri Lanka)</em> | Nov 2019 – Feb 2020</p>
        <p class="more-experience-description">Gained foundational international experience in life insurance modeling and risk assessment.</p>
        </div>
        </details>
        </div>
        
        <script>
          document.addEventListener("DOMContentLoaded", function() {
            // Find the Education header and automatically move the pop-up above it
            const headers = document.querySelectorAll('h2, h3');
            for (let h of headers) {
              if (h.textContent.trim() === 'Education') {
                const popup = document.getElementById('more-experience-wrapper');
                if (popup && h.parentNode) {
                  h.parentNode.insertBefore(popup, h);
                }
                break;
              }
            }
          });
        </script>
    design:
      columns: 1
      spacing:
        padding: ['0', '0', '0', '0']
  - block: resume-awards
    content:
      title: Awards
      username: admin
    design:
      columns: 2
  - block: markdown
    content:
      title: Volunteer Experience
      text: |
        * **Founding Member**, YAP Career & Leadership Working Group, Actuaries Institute Australia (May 2026 – Present)<br>
          Supporting the Actuaries Institute Career Series and young actuary engagement through event support, theme development, member-focused programming, and early planning for Young Actuaries Conference initiatives.
        * **Panelist**, First Year Panel at ASOC’s “Understanding Exemptions” event, ANU (March 2024, Feb 2025)
        * **Guest speaker**, Actuarial information session for high school students, ANU (Sem 2 2023)
        * **First aid officer**, CSIT, ANU (Feb 2022 – Aug 2023)
        * **Director of finance**, United Nations Youth ACT (Dec 2020 – Dec 2021)  
          Developing budgets for the division, overseeing the budgets for events, obtaining sponsorship for the division, maintaining the bank accounts for the division, and developing audited financial reports for the division.
        * **Set4ANU mentor**, ANU (Sem 2 2020, Sem 1 2021)
        * **ANU+**, ANU (Jan 2020 – Dec 2022)  
          Completed ANU+ (over 100 hours of volunteer work).
        * **Facilitator**, United Nations Youth (Sept 2020 – Dec 2024)
        * **Retail Worker**, Vinnies (Dec 2020 – Aug 2021)
        * **Substitute Teacher**, Musaeus College, Sri Lanka (Sept 2018 – Nov 2018)  
          Assigned two advanced level classes of around 30 students each to teach combined mathematics and chemistry. Also taught in lower nursery classes as an assistant teacher during this period.
    design:
      columns: 1
  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false
      columns: 2
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
