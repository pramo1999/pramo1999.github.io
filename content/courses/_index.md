---
title: Courses
view: article-grid
summary: My courses
type: landing

cascade:
  - target:
      path: '{/courses/*/**}'
    type: docs
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: courses
    content:
      title: Courses
      subtitle: 'Selected High Distinction & Specialized Coursework'
      filters:
        tag: Course
        kinds:
          - section
      # This text block contains your grades table
      text: |
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
          
          <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
            <h4 style="margin-top: 0; color: #0ea5a4; display: flex; align-items: center;">
              🤖 Advanced Computing & AI
            </h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Foundations of Computing</span>
                <span style="font-weight: bold; color: #059669;">93% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Programming as Problem Solving</span>
                <span style="font-weight: bold; color: #059669;">89% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Number Theory & Cryptography</span>
                <span style="font-weight: bold; color: #059669;">81% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Algorithms</span>
                <span style="font-weight: bold; color: #059669;">80% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; border-top: 1px dashed #d1d5db; padding-top: 0.5rem; font-size: 0.9em; color: #4b5563;">
                <em>Specialized Electives:</em><br>
                Statistical Machine Learning (Distinction)<br>
                Document Analysis (Distinction)
              </li>
            </ul>
          </div>

          <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
            <h4 style="margin-top: 0; color: #0ea5a4; display: flex; align-items: center;">
              📈 Actuarial Science & Statistics
            </h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Discrete Mathematical Models</span>
                <span style="font-weight: bold; color: #059669;">93% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Quantitative Research Methods</span>
                <span style="font-weight: bold; color: #059669;">90% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Actuarial Data Analysis</span>
                <span style="font-weight: bold; color: #059669;">87% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Intro to Stochastic Processes</span>
                <span style="font-weight: bold; color: #059669;">84% (HD)</span>
              </li>
              <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span>Actuarial Control Cycle 2</span>
                <span style="font-weight: bold; color: #059669;">82% (HD)</span>
              </li>
            </ul>
          </div>

        </div>
    design:
      view: article-grid
      show_read_time: false
      show_date: false
      show_read_more: false
      columns: 1
---