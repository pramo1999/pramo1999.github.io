---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-12-11
        <!-- Proofs modal -->
        <div id="proofsModal" style="display:none;position:fixed;inset:0;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);z-index:9999">
          <div style="width:min(720px,95%);background:#fff;color:#111827;border-radius:0.5rem;padding:1.25rem;box-shadow:0 10px 30px rgba(2,6,23,0.3)">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
              <h3 style="margin:0;font-size:1.125rem">Proof Documents</h3>
              <button id="proofsClose" aria-label="Close" style="background:none;border:0;font-size:1.25rem;cursor:pointer">✕</button>
            </div>
            <div style="max-height:55vh;overflow:auto;padding-right:0.5rem">
              <ul style="padding-left:1.25rem;margin:0">
                <li><a href="/uploads/ProofOfAchievements/anu_transcript.pdf" target="_blank">ANU Transcript (PDF)</a></li>
                <li><a href="/uploads/ProofOfAchievements/9576222--exam-result-letter--april-2019---core-principles--cm--cs-and-cb-.pdf" target="_blank">Core Principles exam results — April 2019</a></li>
                <li><a href="/uploads/ProofOfAchievements/CS1_9576222--exam-result-letter--april-2019---core-principles--cm--cs-and-cb-[59].pdf" target="_blank">CS1 exam result — April 2019</a></li>
                <li><a href="/uploads/ProofOfAchievements/CMP%20Results%20Letter_Class%20Registrations_779123_407293.pdf" target="_blank">CMP (Control / Data cycle)</a></li>
                <li><a href="/uploads/ProofOfAchievements/ALM_Results%20Letter_Class%20Registrations_787287_489066.pdf" target="_blank">ALM</a></li>
                <li><a href="/uploads/ProofOfAchievements/LIRPD_Results%20Letter_Class%20Registrations_784254_464810.pdf" target="_blank">LIRPD</a></li>
                <li><a href="/uploads/ProofOfAchievements/LIRV_Results%20Letter_Class%20Registrations_788446_489087.pdf" target="_blank">LIRV</a></li>
              </ul>
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