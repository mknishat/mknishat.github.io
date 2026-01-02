<!-- ---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
--- -->

<style>
/* General Styling */
body {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* Table Styling */
.publication-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
}

.publication-table td {
  vertical-align: top;
  padding: 15px;
  background-color: #fdfdfd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Type Column */
.publication-type {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #555;
  width: 15%;
  text-align: center;
  border-right: 3px solid #eaeaea;
}

/* Details Column */
.publication-details {
  width: 70%;
  font-size: 14px;
  line-height: 1.5;
}

.publication-title {
  font-size: 18px;
  font-weight: bold;
  color: #222;
}

.publication-authors {
  font-size: 14px;
  color: #555;
  margin-top: 5px;
}

.publication-venue {
  font-size: 14px;
  font-style: italic;
  color: #0073e6;
  margin-top: 5px;
}

/* Date Column */
.publication-date {
  width: 15%;
  font-size: 14px;
  text-align: center;
  color: #666;
  font-weight: 600;
}

/* Abstract */
.abstract-toggle {
  cursor: pointer;
  color: #0066cc;
  font-size: 13px;
  margin-top: 10px;
  display: inline-block;
  text-decoration: underline;
}

.abstract {
  display: none;
  font-size: 14px;
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-left: 3px solid #0073e6;
  border-radius: 5px;
}

/* Button */
.download-button {
  display: inline-block;
  margin-top: 10px;
  padding: 7px 15px;
  font-size: 13px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.download-button:hover {
  background-color: #45a049;
}

/* Responsive Design */
@media (max-width: 768px) {
  .publication-table td {
    display: block;
    width: 100%;
    box-shadow: none;
    border-radius: 0;
  }

  .publication-type, .publication-date {
    text-align: left;
  }

  .publication-type {
    margin-bottom: 10px;
  }

  .publication-date {
    margin-top: 10px;
  }
}
</style>

<table class="publication-table">
  <tr>
    <td class="publication-type">Journal</td>
    <td class="publication-details">
      <div class="publication-title">Towards sustainable AI: a comprehensive framework for Green AI</div>
      <div class="publication-authors">Abdulaziz Tabbakh, Lisan Al Amin, Mahbubul Islam, <strong>Mahbubul Kabir Nishat</strong>, Imranul Kabir Chowdhury, Md Saddam Hossain Mukta</div>
      <div class="publication-venue">Discover Sustainability</div>
      <div class="abstract-toggle" onclick="toggleAbstract('abstract-2')">See Abstract</div>
      <div id="abstract-2" class="abstract">
        <strong>Abstract:</strong> The rapid advancement of artificial intelligence (AI) has brought significant benefits across various domains, yet it has also led to increased energy consumption and environmental impact. This paper positions Green AI as a crucial direction for future research and development. It proposes a comprehensive framework for understanding, implementing, and advancing sustainable AI practices. We provide an overview of Green AI, highlighting its significance and current state regarding AI’s energy consumption and environmental impact. The paper explores sustainable AI techniques, such as model optimization methods, and the development of efficient algorithms. Additionally, we review energy-efficient hardware alternatives like tensor processing units (TPUs) and field-programmable gate arrays (FPGAs), and discuss strategies for designing and operating energy-efficient data centers. Case studies in natural language processing (NLP) and Computer Vision illustrate successful implementations of Green AI practices. Through these efforts, we aim to balance the performance and resource efficiency of AI technologies, aligning them with global sustainability goals.
      </div>
      <a href="https://link.springer.com/article/10.1007/s43621-024-00641-4" class="download-button">Journal Link</a>
    </td>
    <td class="publication-date">15th Nov 2024</td>
  </tr>
  <tr>
    <td class="publication-type">Journal</td>
    <td class="publication-details">
      <div class="publication-title">Application of artificial intelligence in reverse logistics: A bibliometric and network analysis</div>
      <div class="publication-authors">Oyshik Bhowmik, Sudipta Chowdhury, Jahid Hasan Ashik,<strong>Mahbubul Kabir Nishat</strong>, Md Muzahid Khan, Niamat Ullah Ibne Hossain</div>
      <div class="publication-venue">Supply Chain Analytics</div>
      <div class="abstract-toggle" onclick="toggleAbstract('abstract-1')">See Abstract</div>
      <div id="abstract-1" class="abstract">
        <strong>Abstract:</strong> Despite abundant research on the application of artificial intelligence (AI) in reverse logistics, no comprehensive study with bibliometric and network analysis has been conducted. This study uses bibliometric analysis to derive the prominent research statistics in AI-centric reverse logistics, considering 2929 articles from the last three decades. The most impactful contributors and countries that employ AI in reverse logistics are identified using various bibliometric tools. Also, network analysis is performed to reveal the most influential articles and emerging trends and map the relationships via clustering. The results of keyword co-occurrence and co-citation analyses reveal that machine learning and deep learning techniques have been commonly used for addressing reverse logistics challenges with higher frequency in recent years. Furthermore, a systematic review is carried out, considering the influential articles from recent years. The review is conducted following the systematic literature review framework, and 79 articles are chosen to be studied thoroughly. Subsequently, the articles are divided based on various reverse logistics processes, and the most frequently used AI techniques are identified and categorized into five distinct groups. The comprehensive investigation of AI techniques reveals the use-case scenario of AI algorithms in the reverse logistics domain. This study concludes with implications and recommendations for prospects by addressing the shortcomings of the current studies and providing future researchers and practitioners with a robust roadmap to investigate reverse logistics in their research further.
      </div>
      <a href="https://doi.org/10.1016/j.sca.2024.100076" class="download-button">Journal Link</a>
    </td>
    <td class="publication-date">September 2024</td>
  </tr>
  <tr>
    <td class="publication-type">Thesis</td>
    <td class="publication-details">
      <div class="publication-title">Solving a Capacitated Vehicle Routing Problem (CVRP) by Using Heuristics and Google OR-Tools: A Case Study</div>
      <div class="publication-authors">Mahbubul Kabir Nishat <strong> Supervisor: </strong> Md. Habibur Rahman</div>
      <div class="publication-venue">Khulna University of Engineering & Technology</div>
      <div class="abstract-toggle" onclick="toggleAbstract('abstract-3')">See Abstract</div>
      <div id="abstract-3" class="abstract">
        <strong>Abstract:</strong> When it comes to logistics management, the distribution of finished goods from depots to customers is both a practical and difficult problem to solve. Because more customers can be served in a shorter period of time, better routing and scheduling decisions can result in higher levels of customer satisfaction. The objective of this study is to solve the poor vehicle routing, underutilization of vehicles, and decreased service level of Company X by finding optimal routes for distribution where the company uses vehicles that have limited capacity. In order to fulfill that objective, three heuristics (Nearest Neighbor, Sweep, Clarke & Wright) and Google OR-Tools are used to analyze, calculate and solve the Capacitated Vehicle Routing Problem (CVRP). The result of the methods are then compared, and finally, Google OR-Tool is selected as it gives the most optimal route with minimum distance among the four methods.
      </div>
    </td>
    <td class="publication-date">10th Apr 2022</td>
  </tr>
</table>

<script>
function toggleAbstract(id) {
  var abstract = document.getElementById(id);
  if (abstract.style.display === "none" || abstract.style.display === "") {
    abstract.style.display = "block";
  } else {
    abstract.style.display = "none";
  }
}
</script>
