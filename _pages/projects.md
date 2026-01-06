---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<style>
.project-card {
  border: 2px solid #ddd;
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  background: #fff;
}
.project-card.thesis { border-left: 5px solid #007bff; }
.project-card.undergrad { border-left: 5px solid #ffc107; }
.project-card.vrp { border-left: 5px solid #28a745; }

.card-header {
  padding: 18px 22px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-card.thesis .card-header { background: #f0f8ff; }
.project-card.undergrad .card-header { background: #fffbf0; }
.project-card.vrp .card-header { background: #f0fff4; }

.card-header:hover { opacity: 0.9; }

.card-title {
  font-size: 17px;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.card-category {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
  font-weight: 600;
}
.project-card.thesis .card-category { color: #007bff; }
.project-card.undergrad .card-category { color: #cc8800; }
.project-card.vrp .card-category { color: #28a745; }

.card-subtitle {
  font-size: 13px;
  color: #666;
  margin: 5px 0 0 0;
}
.toggle-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  flex-shrink: 0;
  margin-left: 15px;
}
.project-card.thesis .toggle-icon { background: #007bff; }
.project-card.undergrad .toggle-icon { background: #ffc107; color: #333; }
.project-card.vrp .toggle-icon { background: #28a745; }

.card-body {
  display: none;
  padding: 22px;
  border-top: 1px solid #eee;
}
.project-card.open .card-body { display: block; }
.project-card.open .toggle-icon i { transform: rotate(180deg); }

.card-body p {
  font-size: 14px;
  line-height: 1.7;
  color: #555;
  text-align: justify;
  margin: 12px 0;
}
.card-body img {
  max-width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin: 15px 0;
}
.card-body figcaption {
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 15px;
}
.keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 15px;
}
.keyword {
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: 500;
}
.keyword.blue { background: #e7f3ff; color: #0066cc; border: 1px solid #0066cc; }
.keyword.yellow { background: #fff3cd; color: #cc8800; border: 1px solid #ffc107; }
.keyword.green { background: #d4edda; color: #28a745; border: 1px solid #28a745; }

.btn-link {
  display: inline-block;
  padding: 8px 16px;
  margin: 5px 5px 5px 0;
  border-radius: 5px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
}
.btn-link.green { background: #28a745; color: white; }
.btn-link.dark { background: #333; color: white; }

.results-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  margin: 15px 0;
}
.results-table th, .results-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
.results-table thead { background: #333; color: white; }
.results-table .highlight { background: #d4edda; font-weight: bold; }

.click-hint {
  text-align: center;
  color: #888;
  font-size: 13px;
  margin-bottom: 20px;
}
</style>

<h2><i class="fas fa-folder-open"></i> Featured Projects</h2>

<p style="text-align: justify; color: #555;">
Welcome to my projects portfolio featuring research in data science, machine learning, industrial engineering, and optimization.
</p>

<p class="click-hint"><i class="fas fa-hand-pointer"></i> Click on any project card to expand details</p>

<!-- PROJECT 1: Master's Thesis -->
<div class="project-card thesis" onclick="this.classList.toggle('open')">
  <div class="card-header">
    <div>
      <div class="card-category"><i class="fas fa-graduation-cap"></i> Master's Thesis</div>
      <h3 class="card-title">A Machine Learning Approach for Evaluating Climate Sensitivity of Infectious Diseases in Refugee Communities</h3>
      <p class="card-subtitle">ML framework with SHAP interpretability using VAE data augmentation</p>
    </div>
    <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
  </div>
  <div class="card-body">
    <p><strong>Abstract:</strong> This study develops a robust, interpretable machine learning framework to identify climatic factors contributing to infectious disease incidence in refugee communities, who are particularly vulnerable due to overcrowding, inadequate sanitation, and delayed healthcare access.</p>
    
    <img src="/images/thesis-framework.png" alt="ML Framework">
    <figcaption>Figure 1: Comprehensive ML framework for disease prediction</figcaption>
    
    <p><strong>Methodology:</strong> The framework integrates PSO and Genetic Algorithm for feature selection, Time-VAE for data augmentation, and SHAP for interpretability.</p>
    
    <h4>Diarrhea Outbreak Prediction - SHAP Analysis</h4>
    <img src="/images/shap-diarrhea.png" alt="SHAP Diarrhea">
    <figcaption>Figure 2: SHAP feature importance for Diarrhea prediction</figcaption>
    
    <h4>Malaria Outbreak Prediction - SHAP Analysis</h4>
    <img src="/images/shap-malaria.png" alt="SHAP Malaria">
    <figcaption>Figure 3: SHAP feature importance for Malaria prediction</figcaption>
    
    <h4>RTI Outbreak Prediction - SHAP Analysis</h4>
    <img src="/images/shap-rti.png" alt="SHAP RTI">
    <figcaption>Figure 4: SHAP feature importance for RTI prediction</figcaption>
    
    <p><strong>Key Findings:</strong> VAE significantly improves predictive performance. BART best captures complex nonlinear climate-disease relationships.</p>
    <div class="keywords">
      <span class="keyword blue">Variational Auto-Encoder</span>
      <span class="keyword blue">Explainable AI</span>
      <span class="keyword blue">SHAP</span>
      <span class="keyword blue">Climate Sensitivity</span>
      <span class="keyword blue">PSO</span>
      <span class="keyword blue">BART</span>
      <span class="keyword blue">Diarrhea</span>
      <span class="keyword blue">Malaria</span>
      <span class="keyword blue">RTI</span>
    </div>
  </div>
</div>

<!-- PROJECT 2: Undergraduate Thesis -->
<div class="project-card undergrad" onclick="this.classList.toggle('open')">
  <div class="card-header">
    <div>
      <div class="card-category"><i class="fas fa-book"></i> Undergraduate Thesis</div>
      <h3 class="card-title">Industry 4.0 Readiness Assessment Framework and Barrier Analysis</h3>
      <p class="card-subtitle">BWM-based framework for digital transformation readiness across 7 dimensions</p>
    </div>
    <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
  </div>
  <div class="card-body">
    <p><strong>Overview:</strong> This thesis presents a comprehensive framework for evaluating organizational readiness for Industry 4.0 digital transformation, identifying and prioritizing implementation barriers using hierarchical weighting analysis.</p>
    
    <img src="/images/industry40-readiness.png" alt="Industry 4.0 Readiness">
    <figcaption>Figure 1: Readiness assessment radar chart across 7 dimensions</figcaption>
    
    <img src="/images/industry40-dimensions.png" alt="Industry 4.0 Dimensions">
    <figcaption>Figure 2: The Seven Dimensions of Industry 4.0 Readiness Framework</figcaption>
    
    <p><strong>Methodology:</strong> Best-Worst Method (BWM) with weighted scoring evaluates organizational readiness. Barrier analysis identifies 17 sub-barriers under four major categories.</p>
    <p><strong>Key Findings:</strong> Organizational barriers (44.7%) dominate over Technological (30.4%), Human Resource (15.3%), and Environmental (9.7%) barriers.</p>
    <div class="keywords">
      <span class="keyword yellow">Industry 4.0</span>
      <span class="keyword yellow">Best-Worst Method</span>
      <span class="keyword yellow">Digital Transformation</span>
      <span class="keyword yellow">Barrier Analysis</span>
      <span class="keyword yellow">Smart Manufacturing</span>
    </div>
  </div>
</div>

<!-- PROJECT 3: VRP -->
<div class="project-card vrp" onclick="this.classList.toggle('open')">
  <div class="card-header">
    <div>
      <div class="card-category"><i class="fas fa-truck"></i> Operations Research Project</div>
      <h3 class="card-title">Multi-Depot Vehicle Routing Problem with Heterogeneous Fleet</h3>
      <p class="card-subtitle">Optimization framework for last-mile delivery with EV/GV mixed fleet</p>
    </div>
    <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
  </div>
  <div class="card-body">
    <p><strong>Abstract:</strong> This project presents a computational framework for solving the Multi-Depot Heterogeneous Fleet Vehicle Routing Problem (MDHFVRP) in last-mile delivery logistics, optimizing routes across 3 depots serving 69 customers.</p>
    
    <a href="/files/vrp-project/Technical_Report.pdf" class="btn-link green" target="_blank"><i class="fas fa-file-pdf"></i> Technical Report</a>
    <a href="https://github.com/mknishat/Last-Mile-Delivery-Optimization" class="btn-link dark" target="_blank"><i class="fab fa-github"></i> GitHub</a>
    
    <img src="/images/vrp-project/fig1_multi_depot_topology.png" alt="Network Topology">
    <figcaption>Figure 1: Multi-Depot Delivery Network Topology</figcaption>
    
    <img src="/images/vrp-project/fig7_multi_depot_routes.png" alt="Optimized Routes">
    <figcaption>Figure 2: Optimized Multi-Depot Routes</figcaption>
    
    <img src="/images/vrp-project/fig5_ev_gv_cost_comparison.png" alt="EV vs GV Cost">
    <figcaption>Figure 3: EV vs GV Cost Comparison</figcaption>
    
    <img src="/images/vrp-project/fig6_fleet_composition_analysis.png" alt="Fleet Composition">
    <figcaption>Figure 4: Fleet Composition Analysis</figcaption>
    
    <p><strong>Methodology:</strong> Decomposition strategy with Google OR-Tools using PATH_CHEAPEST_ARC heuristic and Guided Local Search metaheuristic.</p>
    
    <table class="results-table">
      <thead><tr><th>Configuration</th><th>EVs</th><th>GVs</th><th>Cost (USD)</th></tr></thead>
      <tbody>
        <tr><td>All GV</td><td>0</td><td>30</td><td>6,568</td></tr>
        <tr><td>Mixed 30%</td><td>9</td><td>21</td><td>6,200</td></tr>
        <tr class="highlight"><td>Mixed 50%</td><td>15</td><td>15</td><td>5,971</td></tr>
      </tbody>
    </table>
    
    <img src="/images/vrp-project/fig8_summary_dashboard.png" alt="Summary Dashboard">
    <figcaption>Figure 5: Optimization Results Summary Dashboard</figcaption>
    
    <p><strong>Key Findings:</strong> Fleet electrification reduces costs by 9.1% while maintaining service levels.</p>
    <div class="keywords">
      <span class="keyword green">Vehicle Routing</span>
      <span class="keyword green">Multi-Depot</span>
      <span class="keyword green">Electric Vehicles</span>
      <span class="keyword green">OR-Tools</span>
      <span class="keyword green">Last-Mile Delivery</span>
    </div>
  </div>
</div>