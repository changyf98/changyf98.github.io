---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}


Education
======
* B.S. in School of Mathematical Science,University of Science and Technology of China, 2020
* Ph.D in Department of computational Mathematics, Tsinghua University, 2025 (expected)

Internship
======
* 2023.7 ~ Now: Quantitative Research
  * High-frequency trading, 世纪前沿
  * Duties included: High-frequency futures and crypto
  * Supervisor: Chen Lv

* 2022.5 ~ 2022.12: Quantitative Research
  * CTA, 灵均投资
  * Duties included: Stock Index Futures, High-frequency commodity futures, Low-frequency commodity futures
  * Supervisor: Zhe Li

* 2021.6 ~ 2021.12: Data Analysis
  * Data Analysis Department, 快手
  * Duties included: AB Test; Causal Inference; Live streaming, consumption, short video data analysis
  * Supervisor: Jingci Meng

* 2021.2 ~ 2021.8: teacher
  * 英才计划, 新东方北京学校
  * Duties included: High school math competition
  * Supervisor: Yu Zhu
  
Honors and Awards
======
<div class="awards-container">
  <div class="award-item">
    <span class="award-name">Zhao Fangxiong Scholarship of Tsinghua University</span>
    <span class="award-year">2025</span>
  </div>
  <div class="award-item">
    <span class="award-name">Tsinghua University Postgraduate Comprehensive Scholarship, First Prize</span>
    <span class="award-year">2024</span>
  </div>
  <div class="award-item">
    <span class="award-name">Excellent Teaching Assistant of Tsinghua University</span>
    <span class="award-year">2022</span>
  </div>
  <div class="award-item">
    <span class="award-name">Tsinghua University Postgraduate Comprehensive Scholarship, Second Prize</span>
    <span class="award-year">2021</span>
  </div>
  <div class="award-item">
    <span class="award-name">Outstanding Student Scholarship for four years, University of Science and Technology of China</span>
    <span class="award-year">2016-2020</span>
  </div>
  <div class="award-item">
    <span class="award-name">First prize of National Mathematics Competition (Mathematics major) for College Students, University of Science and Technology of China</span>
    <span class="award-year">2018</span>
  </div>
  <div class="award-item">
    <span class="award-name">First prize of National High School Mathematics League, Tianjin No.1 Middle School</span>
    <span class="award-year">2016</span>
  </div>
  <!-- 其他奖项 -->
</div>
  <style>
    .awards-container {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 20px auto;
      padding-left: 20px;
    }
    .award-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      position: relative;
      list-style-type: none;
    }
    .award-item::before {
      content: "•";
      position: absolute;
      left: -15px;
      color: #333;
    }
    .award-name {
      flex: 1;
    }
    .award-year {
      color: #666;
    }
  </style>

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
