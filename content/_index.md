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
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      # Inline HTML for two side-by-side download links (always renders)
      text: |-
        Hi—I'm Pramo. I am an Actuarial Analyst and Computer Scientist based in Canberra. I recently graduated from the Australian National University with First Class Honours in Computing, alongside degrees in Actuarial Studies and Science.

        I bring over three years of experience from the Australian Government Actuary (Treasury), where I specialize in developing and debugging actuarial models using SAS and R. My research interests lie at the intersection of machine learning and actuarial science, specifically using national-scale health data (PLIDA) to improve mortality forecasting.

        Additionally, I have been actively pursuing my qualification with the Actuaries Institute. Alongside full-time university studies, I have successfully completed all but one actuarial exam and am currently awaiting my Associateship.

        <div style="display:flex;gap:0.5rem;align-items:center">
          <a href="uploads/resume.pdf" style="display:inline-block;padding:0.5rem 1rem;background:#111827;color:#ffffff;border-radius:0.375rem;text-decoration:none">Download CV (pdf)</a>
          <a href="uploads/Resume_Dec2025.docx" style="display:inline-block;padding:0.5rem 1rem;background:#6b7280;color:#ffffff;border-radius:0.375rem;text-decoration:none">Download CV (word)</a>
          <button id="proofsBtn" style="display:inline-block;padding:0.5rem 1rem;border-radius:0.375rem;border:0;background:#0ea5a4;color:#ffffff;cursor:pointer">View Proofs</button>
        </div>

        <!-- Proofs modal -->
        <div id="proofsModal" style="display:none;position:fixed;inset:0;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);z-index:9999">
          <div style="width:min(720px,95%);background:#fff;color:#111827;border-radius:0.5rem;padding:1.25rem;box-shadow:0 10px 30px rgba(2,6,23,0.3)">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
              <h3 style="margin:0;font-size:1.125rem">Proof of Achievements</h3>
              <button id="proofsClose" aria-label="Close" style="background:none;border:0;font-size:1.25rem;cursor:pointer">✕</button>
            </div>
            <div style="max-height:55vh;overflow:auto;padding-right:0.5rem">
              <h4 style="margin:0 0 0.5rem 0">ANU Transcript</h4>
              <p style="margin:0 0 0.5rem 0">Proof of degree and course completions. Shows CS2, CM1, CM2, CB1, CB2. (Graduation: Nov 2024)</p>
              <ul style="padding-left:1.25rem;margin:0 0 0.75rem 0">
                <li><a href="/uploads/ProofOfAchievements/anu_transcript.pdf" target="_blank">ANU Transcript (PDF)</a></li>
              </ul>

              <h4 style="margin:0 0 0.5rem 0">Actuarial - Core / Part I</h4>
              <p style="margin:0 0 0.5rem 0">Core Principles (CM/CS/CB) and related exam result letters.</p>
              <ul style="padding-left:1.25rem;margin:0 0 0.75rem 0">
                <li><a href="/uploads/ProofOfAchievements/9576222--exam-result-letter--april-2019---core-principles--cm--cs-and-cb-.pdf" target="_blank">Core Principles exam results — April 2019</a></li>
                <li><a href="/uploads/ProofOfAchievements/CS1_9576222--exam-result-letter--april-2019---core-principles--cm--cs-and-cb-[59].pdf" target="_blank">CS1 exam result — April 2019</a></li>
              </ul>

              <h4 style="margin:0 0 0.5rem 0">Actuarial - Part II</h4>
              <p style="margin:0 0 0.5rem 0">Part II papers such as Data & Control Cycle, ALM and CMP.</p>
              <ul style="padding-left:1.25rem;margin:0 0 0.75rem 0">
                <li><a href="/uploads/ProofOfAchievements/CMP%20Results%20Letter_Class%20Registrations_779123_407293.pdf" target="_blank">CMP (Control / Data cycle) — year not available in filename</a></li>
                <li><a href="/uploads/ProofOfAchievements/ALM_Results%20Letter_Class%20Registrations_787287_489066.pdf" target="_blank">ALM — year not available in filename</a></li>
              </ul>

              <h4 style="margin:0 0 0.5rem 0">Actuarial - Part III</h4>
              <p style="margin:0 0 0.5rem 0">Advanced practice papers (LIRPD, LIRV).</p>
              <ul style="padding-left:1.25rem;margin:0 0 0.75rem 0">
                <li><a href="/uploads/ProofOfAchievements/LIRPD_Results%20Letter_Class%20Registrations_784254_464810.pdf" target="_blank">LIRPD — year not available in filename</a></li>
                <li><a href="/uploads/ProofOfAchievements/LIRV_Results%20Letter_Class%20Registrations_788446_489087.pdf" target="_blank">LIRV — year not available in filename</a></li>
              </ul>
              <p style="margin:0;font-size:0.9rem;color:#6b7280">Note: I included years where they were present in filenames (April 2019). For files without a year in the filename I left "year not available" — tell me if you want me to attempt extracting exact dates from the PDFs.</p>
            </div>
            <div style="text-align:right;margin-top:0.75rem"><button id="proofsClose2" style="padding:0.5rem 0.75rem;border-radius:0.375rem;border:0;background:#111827;color:#fff;cursor:pointer">Close</button></div>
          </div>
        </div>

        <script>
        (function(){
          try{
            var btn = document.getElementById('proofsBtn');
            var modal = document.getElementById('proofsModal');
            var close = document.getElementById('proofsClose');
            var close2 = document.getElementById('proofsClose2');
            if(btn && modal){
              btn.addEventListener('click', function(e){ e.preventDefault(); modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; });
            }
            if(close){ close.addEventListener('click', function(){ modal.style.display='none'; document.body.style.overflow=''; }); }
            if(close2){ close2.addEventListener('click', function(){ modal.style.display='none'; document.body.style.overflow=''; }); }
            if(modal){ modal.addEventListener('click', function(e){ if(e.target === modal){ modal.style.display='none'; document.body.style.overflow=''; } }); }
          }catch(e){ console.error('Proofs modal init error', e); }
        })();
        </script>
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true
      # Avatar customization
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
        **Degree:** Bachelor of Science (Honours), Australian National University  
        Major: Computing (First Class Honours)  
        Additional: Actuarial Studies & Science (Double Degrees)  
        **Graduation:** November 2024
        
        **Professional Qualifications:**  
        Actuaries Institute - Successfully completed all but one actuarial exam  
        Currently awaiting Associateship (ASA)
        
        **Relevant Coursework:**  
        Machine Learning, Statistical Inference, Data Analysis, Actuarial Modelling, Risk Management
        
        **Proof of Achievements:**
        - [ANU Transcript](uploads/ProofOfAchievements/anu_transcript.pdf)
        - [Actuarial Exam Results - Core Principles (CM, CS, CB)](uploads/ProofOfAchievements/9576222--exam-result-letter--april-2019---core-principles--cm--cs-and-cb-.pdf)
        - [Actuarial Exam Results - LIRPD](uploads/ProofOfAchievements/LIRPD_Results%20Letter_Class%20Registrations_784254_464810.pdf)
        - [Actuarial Exam Results - LIRV](uploads/ProofOfAchievements/LIRV_Results%20Letter_Class%20Registrations_788446_489087.pdf)
        - [Actuarial Exam Results - CMP](uploads/ProofOfAchievements/CMP%20Results%20Letter_Class%20Registrations_779123_407293.pdf)
        - [Actuarial Exam Results - ALM](uploads/ProofOfAchievements/ALM_Results%20Letter_Class%20Registrations_787287_489066.pdf)
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

  # - block: cta-card
  #   demo: true # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: 👉 Build your own academic website like this
  #     text: |-
  #       This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

  #       <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

  #       Easily build anything with blocks - no-code required!

  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: 'bg-primary-300 dark:bg-primary-700'
  #       css_style: ''
---