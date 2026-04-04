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
.project-card.ai { border-left: 5px solid #dc3545; }

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
.project-card.ai .card-header { background: #fff5f5; }

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
.project-card.ai .card-category { color: #dc3545; }

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
.project-card.ai .toggle-icon { background: #dc3545; }

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
    <p><strong>Abstract:</strong> Globalization, climate change, and increased population mobility have intensified the challenges of infectious disease outbreaks for global public health, as many infectious pathogen's life cycles exhibit strong climate sensitivity. Refugee communities are particularly vulnerable to contagious diseases due to overcrowding, inadequate sanitation infrastructure, and delayed healthcare access. Accurate predictions of disease dynamics can help public health organizations plan interventions to reduce transmission. However, traditional time-series methods and reporting surveillance systems fail to detect complex patterns from multiple features in infectious disease forecasting in refugee communities, where data scarcity and crisis-specific factors make reliable predictions difficult. This study develops and validates a robust, interpretable machine learning framework to identify and assess climatic factors contributing to infectious disease incidence in refugee communities. The proposed framework integrates meta-heuristics feature selection algorithm to select relevant variables, a Time Variational Auto-Encoder (Time-VAE) for synthetic data generation to address data scarcity, and SHAP values to explain feature importance and its impact on the model's prediction. Additionally, it assesses multiple hyperparameter tuning techniques to ensure model-specific and dataset-specific configurations. This study finds significant improvement in predictive performance against a limited sample size by using a Variational Auto-Encoder as a data augmentation technique, and Bayesian Additive Regression Trees (BART) best capture the complex structure of the data.</p>
    
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
      <span class="keyword blue">Respiratory Tract Infection</span>
      <span class="keyword blue">Diarrhea</span>
      <span class="keyword blue">Malaria</span>
      <span class="keyword blue">Variational Auto-Encoder</span>
      <span class="keyword blue">Explainable AI</span>
      <span class="keyword blue">Particle Swarm Optimization</span>
      <span class="keyword blue">Genetic Algorithm</span>
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
    <p><strong>Abstract:</strong></p>
    <p><strong>Purpose:</strong> Industry 4.0 is a new industrial stage in which several developing technologies are coming together to deliver digital solutions. However, there are several barriers to implementing Industry 4.0 in manufacturing processes. This research aims to investigate the current readiness level of industry 4.0 and identify the challenges for adopting industry 4.0 in Bangladeshi electronics industries.</p>
    <p><strong>Design/methodology/approach:</strong> The research utilized A. A. Wagire's readiness model, which contains seven key dimensions and 38 maturity items. The Best-Worst Method of Multi-Criteria Decision Making is used to assess the 17 barriers identified by a comprehensive literature review and expert discussions. The data were acquired from four Bangladeshi electronics companies.</p>
    <p><strong>Findings:</strong> The findings of the study are as follows: i) four organizations scored 3.572, 3.060, 3.098, and 2.638 out of 5 on the overall maturity scale, indicating that three companies are at the 'Experienced' readiness level and the fourth is at the 'Digital Novice' readiness level ii) The most critical barrier that may stymie the adoption of Industry 4.0 in Bangladesh is 'digital strategy limitations and resource shortage,' while 'cheap labor' is the least of the concerns that may hinder the implementation of Industry 4.0 in Bangladesh's electronics industry.</p>
    <p><strong>Practical implications:</strong> This study may aid decision-makers, industrial managers, and practitioners in the Bangladeshi electronics industry in recognizing the actual challenges they face when attempting to implement Industry 4.0 and focusing their attention on how to address these challenges so that Industry 4.0 can be implemented successfully.</p>
    <p><strong>Originality/value:</strong> Several studies on Industry 4.0 implementation have been done, but none have established the present degree of preparation for Industry 4.0 in Bangladeshi electronics or highlighted the problems that firms face. As a consequence, companies, and researchers can better comprehend Industry 4.0 and plan and monitor transformation operations.</p>
    
    <img src="/images/industry40-readiness.png" alt="Industry 4.0 Readiness">
    <figcaption>Figure 1: Readiness assessment radar chart across 7 dimensions</figcaption>
    
    <img src="/images/industry40-dimensions.png" alt="Industry 4.0 Dimensions">
    <figcaption>Figure 2: The Seven Dimensions of Industry 4.0 Readiness Framework</figcaption>
    
    <p><strong>Methodology:</strong> Best-Worst Method (BWM) with weighted scoring evaluates organizational readiness. Barrier analysis identifies 17 sub-barriers under four major categories.</p>
    <p><strong>Key Findings:</strong> Organizational barriers (44.7%) dominate over Technological (30.4%), Human Resource (15.3%), and Environmental (9.7%) barriers.</p>
    <div class="keywords">
      <span class="keyword yellow">Industry 4.0</span>
      <span class="keyword yellow">Maturity Model</span>
      <span class="keyword yellow">Challenges</span>
      <span class="keyword yellow">Readiness Level</span>
      <span class="keyword yellow">Digital Transformation</span>
      <span class="keyword yellow">Electronics Industries</span>
      <span class="keyword yellow">Barriers</span>
      <span class="keyword yellow">Best-Worst Method (BWM)</span>
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
<!-- PROJECT 4: Supply Chain Optimization -->
<div class="project-card vrp" onclick="this.classList.toggle('open')">
  <div class="card-header">
    <div>
      <div class="card-category"><i class="fas fa-network-wired"></i> Operations Research Project</div>
      <h3 class="card-title">Bioethanol Supply Chain Network Design with Sensitivity Analysis</h3>
      <p class="card-subtitle">MILP-based facility location model optimizing biomass flow in Texas</p>
    </div>
    <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
  </div>
  <div class="card-body">
    <p><strong>Abstract:</strong> This project presents a mixed-integer linear programming (MILP) model for designing an optimal bioethanol supply chain network in Texas. The model determines optimal hub and plant locations while balancing local biomass sourcing with third-party procurement to minimize total system cost including facility investments, transportation, and purchasing costs.</p>

    <a href="https://github.com/mknishat/SC_Network_gurobi" class="btn-link dark" target="_blank"><i class="fab fa-github"></i> GitHub Repository</a>
    <a href="/files/supply_chain_map.html" class="btn-link green" target="_blank"><i class="fas fa-map"></i> Interactive Map</a>

    <p><strong>Problem Overview:</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Total Demand: 6.36 million Mg of biomass annually</li>
      <li>Local Supply Available: 3.05 million Mg (48% of demand)</li>
      <li>Network: 167 suppliers, 21 potential hubs, 10 potential plants</li>
      <li>Transportation: Truck (supplierhub) and Rail (hubplant)</li>
    </ul>

    <p><strong>Mathematical Formulation:</strong></p>
    <p style="font-size: 13px; color: #555;">Minimize: Hub Investment + Plant Investment + Truck Transport + Rail Transport + Third-Party Purchases</p>
    <p style="font-size: 13px; color: #555;">Subject to: Supply limits, Hub/Plant capacity constraints, Flow balance, Demand satisfaction</p>

    <p><strong>Key Parameters:</strong></p>
    <table class="results-table">
      <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>Hub Investment</td><td>.47M each</td></tr>
        <tr><td>Plant Investment</td><td>.96M each</td></tr>
        <tr><td>Hub Capacity</td><td>300,000 Mg</td></tr>
        <tr><td>Plant Capacity</td><td>655,447 Mg</td></tr>
      </tbody>
    </table>

    <img src="/images/sc-project/sensitivity_analysis.png" alt="Sensitivity Analysis">
    <figcaption>Figure 1: Sensitivity Analysis - Cost vs Third-Party Price</figcaption>

    <p><strong>Sensitivity Analysis Results:</strong></p>
    <table class="results-table">
      <thead><tr><th>3rd-Party Price</th><th>Total Cost</th><th>Own Production</th><th>Facilities</th></tr></thead>
      <tbody>
        <tr><td>/Mg</td><td>.49B</td><td>0%</td><td>0 hubs, 0 plants</td></tr>
        <tr><td>/Mg</td><td>.67B</td><td>48%</td><td>11 hubs, 5 plants</td></tr>
        <tr class="highlight"><td>/Mg</td><td>.92B</td><td>48%</td><td>11 hubs, 5 plants</td></tr>
      </tbody>
    </table>

    <p><strong>Methodology:</strong> Mixed-Integer Linear Programming solved using PuLP with CBC solver. Includes interactive map visualization with Folium and comprehensive sensitivity analysis on third-party biomass pricing.</p>

    <p><strong>Key Findings:</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Local supply can only meet 48% of demand - third-party procurement is unavoidable</li>
      <li>Third-party price significantly impacts total cost (.49B to .92B range)</li>
      <li>Optimal network requires 11 hubs and 5 plants at higher third-party prices</li>
      <li>At low third-party prices (/Mg), building own facilities is not cost-effective</li>
    </ul>

    <div class="keywords">
      <span class="keyword green">Supply Chain Optimization</span>
      <span class="keyword green">Mixed-Integer Programming</span>
      <span class="keyword green">Facility Location</span>
      <span class="keyword green">PuLP/CBC Solver</span>
      <span class="keyword green">Sensitivity Analysis</span>
      <span class="keyword green">Bioethanol</span>
    </div>
  </div>
</div>



<!-- PROJECT 5: TRSPTW -->
<div class="project-card vrp" onclick="this.classList.toggle('open')">
  <div class="card-header">
    <div>
      <div class="card-category"><i class="fas fa-route"></i> Operations Research Project</div>
      <h3 class="card-title">Technician Routing and Scheduling Problem with Time Windows (TRSPTW)</h3>
      <p class="card-subtitle">GA and MIP optimization for multi-technician service scheduling</p>
    </div>
    <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
  </div>
  <div class="card-body">
    <p><strong>Abstract:</strong> This project addresses the Technician Routing and Scheduling Problem with Time Windows (TRSPTW), optimizing multi-technician routes while minimizing travel costs, service delays, and overtime expenses. The implementation combines Genetic Algorithms for fast near-optimal solutions and Mixed-Integer Programming for exact optimization.</p>
    
    <a href="https://github.com/mknishat/TRSPTW" class="btn-link dark" target="_blank"><i class="fab fa-github"></i> GitHub Repository</a>`n    <a href="/files/project_details.pdf" class="btn-link green" target="_blank"><i class="fas fa-file-pdf"></i> Mathematical Formulations</a>

    <p><strong>Problem Overview:</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Network: 9 customer communities across regions</li>
      <li>Resources: 3 technicians with individual workday schedules</li>
      <li>Constraints: Time windows, service requirements, workday limits</li>
      <li>Objectives: Minimize total cost (travel + delay + overtime)</li>
    </ul>

    <p><strong>Optimization Approaches:</strong></p>
    <p style="font-size: 13px; color: #555;"><strong>Genetic Algorithm:</strong> Population-based search with tournament selection, order crossover, and swap mutation (Population=50, Generations=100)</p>
    <p style="font-size: 13px; color: #555;"><strong>Mixed-Integer Programming:</strong> Exact formulation solved with PuLP/CBC solver (5-minute time limit)</p>

    <img src="/images/trsptw-project/convergence_plot.png" alt="GA Convergence">
    <figcaption>Figure 1: Genetic Algorithm Convergence Over 100 Generations</figcaption>

    <img src="/images/trsptw-project/cost_breakdown.png" alt="Cost Breakdown">
    <figcaption>Figure 2: Cost Components Analysis (Travel, Delay, Overtime)</figcaption>

    <img src="/images/trsptw-project/schedule_gantt.png" alt="Schedule Gantt">
    <figcaption>Figure 3: Technician Schedule Gantt Chart with Time Windows</figcaption>

    <img src="/images/trsptw-project/route_map.png" alt="Route Visualization">
    <figcaption>Figure 4: Optimized Technician Routes Across Communities</figcaption>

    <p><strong>Key Results:</strong></p>
    <table class="results-table">
      <thead><tr><th>Metric</th><th>Initial Solution</th><th>Optimized (GA)</th><th>Improvement</th></tr></thead>
      <tbody>
        <tr><td>Total Cost</td><td>$6,090</td><td>$5,152</td><td>15.4%</td></tr>
        <tr><td>Travel Cost</td><td>$4,040</td><td>$2,637</td><td>34.7%</td></tr>
        <tr><td>Delay Cost</td><td>$1,350</td><td>$1,815</td><td>-34.4%</td></tr>
        <tr class="highlight"><td>Overtime Cost</td><td>$700</td><td>$700</td><td>0%</td></tr>
      </tbody>
    </table>

    <p><strong>Methodology:</strong> Genetic Algorithm with tournament selection (size=5), order crossover (rate=0.8), and swap mutation (rate=0.2). MIP formulation uses binary decision variables for route assignments with time window constraints.</p>

    <p><strong>Key Findings:</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>GA achieves 15.4% cost reduction compared to initial greedy solution</li>
      <li>Travel efficiency improves 34.7% through intelligent route optimization</li>
      <li>MIP solver validates GA solutions with exact optimal benchmarks</li>
    </ul>

    <div class="keywords">
      <span class="keyword green">Technician Routing</span>
      <span class="keyword green">Time Windows</span>
      <span class="keyword green">Genetic Algorithm</span>
      <span class="keyword green">Mixed-Integer Programming</span>
      <span class="keyword green">PuLP/CBC Solver</span>
      <span class="keyword green">Operations Research</span>
    </div>
  </div>
</div>

<!-- PROJECT 6: Healthcare MARL -->
<div class="project-card ai" onclick="this.classList.toggle('open')" style="width: 100%;">
  <div class="card-header">
    <div>
      <div class="card-category"><i class="fas fa-brain"></i> AI/ML Project</div>
      <h3 class="card-title">Multi-Agent Reinforcement Learning for Healthcare Resource Allocation</h3>
      <p class="card-subtitle">Comprehensive MARL system with SOTA algorithms for ICU resource optimization across hospital networks</p>
    </div>
    <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
  </div>
  <div class="card-body" style="width: 100%;">
    <p><strong>Abstract:</strong> During healthcare crises (pandemics, mass casualty events, seasonal surges), efficient allocation of limited ICU resources across hospital networks is critical. Traditional rule-based systems fail to adapt to dynamic patient flows and varying severity levels. This project implements a comprehensive Multi-Agent Deep Reinforcement Learning (MARL) system for optimizing ICU resource allocation across hospital networks. The system supports multiple state-of-the-art algorithms including DQN, PPO, SAC, QMIX, and MAPPO, with features like patient transfers, fairness constraints, inter-hospital communication, and statistical validation. It provides comprehensive analysis with bootstrap confidence intervals, Wilcoxon tests, and Cohen's d effect sizes.</p>
    
    <a href="https://github.com/mknishat/ICU-resource-optimization-RL" class="btn-link dark" target="_blank"><i class="fab fa-github"></i> GitHub Repository</a>
    
    <p><strong>Key Results:</strong></p>
    <table class="results-table" style="width: 100%; max-width: 100%;">
      <thead><tr><th>Method</th><th>Deaths (mean±std)</th><th>95% CI</th><th>vs FIFO</th></tr></thead>
      <tbody>
        <tr class="highlight"><td><strong>SAC</strong></td><td>3,372.6 ± 108.6</td><td>[3,217.9, 3,565.1]</td><td><strong>+52.3%</strong></td></tr>
        <tr><td>DQN</td><td>4,978.4 ± 1,253.7</td><td>[3,596.2, 6,331.2]</td><td>+29.6%</td></tr>
        <tr><td>QMIX</td><td>6,698.2 ± 155.0</td><td>[6,317.6, 6,883.5]</td><td>+5.3%</td></tr>
        <tr><td>FIFO (baseline)</td><td>7,076.1 ± 84.3</td><td>—</td><td>—</td></tr>
      </tbody>
    </table>
    

    <img src="/images/training_curves_real.png" alt="Training Curves">
    <figcaption>Figure 4: Training Curves for Different Algorithms</figcaption>
    
    <img src="/images/performance_table_real.png" alt="Performance Table">
    <figcaption>Figure 2: Detailed Performance Metrics Table</figcaption>
    
    <img src="/images/agent_heatmap_real.png" alt="Agent Heatmap">
    <figcaption>Figure 3: Agent Performance Heatmap Across Hospitals</figcaption>
    
    <img src="/images/survival_rates_real.png" alt="Survival Rates">
    <figcaption>Figure 4: Survival Rates by Algorithm and Scenario</figcaption>
    
    <p><strong>Algorithms Implemented:</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li><strong>DQN (Ensemble):</strong> Deep Q-Network with uncertainty estimation</li>
      <li><strong>PPO:</strong> Proximal Policy Optimization with advantage estimation</li>
      <li><strong>SAC:</strong> Soft Actor-Critic with entropy regularization</li>
      <li><strong>QMIX:</strong> Centralized training, decentralized execution</li>
      <li><strong>MAPPO:</strong> Multi-Agent PPO with shared critic</li>
    </ul>
    
    <p><strong>Environment Features:</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>10 hospitals with different specialties (Trauma, Cardiac, Respiratory, etc.)</li>
      <li>Realistic patient generation calibrated to MIMIC-IV statistics</li>
      <li>Multiple scenarios: Normal, Surge, Pandemic, Mass Casualty</li>
      <li>Inter-hospital patient transfers and communication</li>
      <li>Fairness tracking across demographics</li>
    </ul>
    
    <p><strong>Analysis & Validation:</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Bootstrap 95% confidence intervals</li>
      <li>Statistical tests (Wilcoxon, Mann-Whitney U, Cohen's d)</li>
      <li>Comprehensive data collection and visualization</li>
      <li>Ablation studies and scalability analysis</li>
    </ul>
    
    <p><strong>Key Finding:</strong> SAC achieves 52.3% reduction in deaths compared to FIFO baseline, demonstrating significant potential of RL-based resource allocation in healthcare crises.</p>
    
    <div class="keywords">
      <span class="keyword blue">Multi-Agent Reinforcement Learning</span>
      <span class="keyword blue">Healthcare Optimization</span>
      <span class="keyword blue">Deep Q-Network</span>
      <span class="keyword blue">Soft Actor-Critic</span>
      <span class="keyword blue">QMIX</span>
      <span class="keyword blue">Resource Allocation</span>
      <span class="keyword blue">ICU Management</span>
    </div>
  </div>
</div>

<!-- PROJECT 7: Car Damage Classification -->
<div class="project-card ai" onclick="this.classList.toggle('open')">
  <div class="card-header">
    <div>
      <div class="card-category"><i class="fas fa-car-crash"></i> AI/ML Project</div>
      <h3 class="card-title">Car Damage Multi-Label Classification and Severity Analysis</h3>
      <p class="card-subtitle">EfficientNet ensemble for damage-location and severity-aware predictions with threshold-calibrated confidence curves</p>
    </div>
    <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
  </div>
  <div class="card-body">
    <a href="https://github.com/mknishat/Car-Damage-Classification" class="btn-link dark" target="_blank"><i class="fab fa-github"></i> Project Repository</a>
    <a href="https://github.com/mknishat/Car-Damage-Classification/tree/main/Dataset" class="btn-link dark" target="_blank"><i class="fab fa-github"></i> Dataset Folder</a>
    <a href="https://github.com/mknishat/Car-Damage-Classification/tree/main/finetune_dataset_multilabel" class="btn-link green" target="_blank"><i class="fab fa-github"></i> finetune_dataset_multilabel</a>

    <h4>0) Abstract</h4>
    <p>This Project presents a comprehensive deep learning framework for multi-label car damage classification, capable of simultaneously identifying both the location (back, corner, door, front, tire) and severity (high, low) of damage across ten fine-grained categories. The proposed system employs an ensemble of EfficientNet-B0 and EfficientNet-B1 backbones augmented with a channel attention mechanism, a multi-task auxiliary loss, and Asymmetric Loss (ASL) to address severe class imbalance. Advanced training strategies - including CutMix, MixUp, RandAugment, Exponential Moving Average (EMA), Test-Time Augmentation (TTA), temperature calibration, and structured per-class threshold optimization - are systematically integrated. Experimental results demonstrate a micro-F1 score of 0.47 and a macro-F1 score of 0.52 at an optimal confidence threshold of approximately 0.50, with per-class F1 scores ranging from 0.24 to 0.59. Precision-recall analysis reveals strong recall capacity but limited precision at low confidence thresholds, underscoring the challenge of fine-grained damage differentiation. The findings provide actionable insights for both model improvement and real-world deployment.</p>
    <p><strong>Keywords:</strong> multi-label classification, car damage detection, EfficientNet, ensemble learning, asymmetric loss, CutMix, threshold optimization, deep learning.</p>

    <h4>1) Project Description</h4>
    <p>The automated detection and classification of vehicle damage has emerged as a high-value application of computer vision, particularly within the automotive insurance, fleet management, and road safety domains. Traditionally, damage assessment has relied on manual inspection by trained assessors - a process that is time-consuming, inconsistent, and often subject to human bias. The rapid advancement of deep convolutional neural networks (CNNs) offers a compelling alternative: automated systems capable of analyzing vehicle images and providing structured, repeatable damage assessments at scale.</p>
    <p>This project addresses the challenge of multi-label car damage classification, wherein a single vehicle image may simultaneously exhibit damage at multiple locations and of varying severity levels. Unlike binary or single-label classification, the multi-label setting introduces additional complexity due to label co-occurrence, class imbalance, and the need for semantically coherent prediction structures.</p>
    <p>The system classifies vehicle damage across ten fine-grained categories, formed by the Cartesian product of five damage locations (back, corner, door, front, tire) and two severity levels (high, low). A key design goal is to maintain location exclusivity - i.e., at most one severity level predicted per location - while allowing predictions across multiple locations. This structural constraint reflects real-world inspection requirements and is enforced through post-processing logic applied after model inference.</p>

    <h4>2) Dataset Description</h4>
    <p>The dataset employed in this study is a curated multi-label image collection organized around a hierarchical taxonomy of vehicle damage. Images are stored in a directory structure where each subdirectory corresponds to one of the ten damage classes, and a single image may reside in multiple class folders, thereby encoding its multi-label ground truth. Exact duplicate images are identified and deduplicated using MD5 checksums computed at ingestion time, ensuring no image contributes to multiple splits.</p>
    <p><strong>Class Taxonomy:</strong> The label space is defined by the Cartesian product of two attribute axes: Location (5 categories: back, corner, door, front, tire) and Severity (2 levels: high, low). This yields ten joint class labels: back_high, back_low, corner_high, corner_low, door_high, door_low, front_high, front_low, tire_high, and tire_low.</p>
    <p><strong>Class Imbalance Characteristics:</strong> The dataset exhibits significant label imbalance, with some classes (e.g., back_high, back_low) substantially underrepresented relative to others (e.g., front_low, door_low). This is addressed through a three-pronged strategy:</p>
    <ul style="font-size: 14px; color: #555;">
      <li>Deterministic oversampling: the lowest-frequency quarter of classes are oversampled 5x; the next quarter are oversampled 2x, producing an augmented training pool.</li>
      <li>Weighted random sampling: sample weights computed as inverse class frequency to the power of 0.75, applied via WeightedRandomSampler.</li>
      <li>Loss-level reweighting: Asymmetric Loss further down-weights easy negative samples.</li>
    </ul>
    <p><strong>2.4 Data Augmentation:</strong> A rich augmentation policy is applied during training: random resized cropping with scale (0.6-1.0), RandAugment (2 operations, magnitude 12), random horizontal flip (p=0.5), random vertical flip (p=0.2), random affine transforms (+/-10 deg, translation 8%, scale 90-110%), color jitter, and random erasing (p=0.3). At the batch level, CutMix (p=0.4, alpha=1.0) and MixUp (p=0.2, alpha=0.4) are applied with soft label mixing. Evaluation images are resized to 288x288 and normalized using ImageNet statistics only.</p>
    <p><strong>Class-wise number of images:</strong></p>
    <table class="results-table">
      <thead><tr><th>Class</th><th>Train</th><th>Val</th><th>Test</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>back_high</td><td>79</td><td>18</td><td>3</td><td>100</td></tr>
        <tr><td>back_low</td><td>105</td><td>18</td><td>2</td><td>125</td></tr>
        <tr><td>corner_high</td><td>201</td><td>38</td><td>12</td><td>251</td></tr>
        <tr><td>corner_low</td><td>218</td><td>43</td><td>14</td><td>275</td></tr>
        <tr><td>door_high</td><td>138</td><td>28</td><td>3</td><td>169</td></tr>
        <tr><td>door_low</td><td>242</td><td>51</td><td>5</td><td>298</td></tr>
        <tr><td>front_high</td><td>225</td><td>49</td><td>16</td><td>290</td></tr>
        <tr class="highlight"><td>front_low</td><td>222</td><td>53</td><td>37</td><td>312</td></tr>
        <tr><td>tire_high</td><td>161</td><td>31</td><td>9</td><td>201</td></tr>
        <tr><td>tire_low</td><td>207</td><td>37</td><td>23</td><td>267</td></tr>
      </tbody>
    </table>

    <h4>3) Methodology (Flowchart)</h4>
    <p>The proposed framework integrates complementary techniques across data preparation, model architecture, training strategy, and post-processing. The end-to-end pipeline is presented in the flowchart below, followed by detailed descriptions of each component.</p>
    <img src="/images/car-damage/car_damage_pipeline_flowchart.png" alt="Car Damage Pipeline Flowchart">
    <figcaption>Figure M1: End-to-end pipeline for multi-label car damage classification</figcaption>
    <p><strong>Model Architecture:</strong> Each ensemble member adopts the ImprovedMultiTaskModel architecture. The backbone is a pretrained EfficientNet (B0 or B1) from the timm library with stochastic depth regularization (drop_path_rate=0.2). Features from the global average pooling layer are refined by a channel attention module - a squeeze-and-excitation style two-layer MLP (d -> d/4 -> d) with sigmoid activation - before passing to three task-specific heads:</p>
    <ul style="font-size: 14px; color: #555;">
      <li>Main head: Dropout(0.5) -> Linear(d, d/2) -> ReLU -> Dropout(0.3) -> Linear(d/2, 10 classes).</li>
      <li>Location auxiliary head: Dropout(0.4) -> Linear(d, 5 locations).</li>
      <li>Severity auxiliary head: Dropout(0.4) -> Linear(d, 2 severity levels).</li>
    </ul>
    <p>The auxiliary heads are supervised using marginal labels derived from the joint label vectors, providing structured supervisory signal encoding the semantic relationship between joint damage classes and their constituent spatial and severity attributes.</p>
    <p><strong>3.3 Loss Function:</strong> The primary classification objective uses Asymmetric Loss (ASL) with gamma+ = 1.0 for positive samples, gamma- = 4.0 for negative samples, and a probability margin shift of 0.05 to decouple easy negatives. This design specifically targets the multi-label, class-imbalanced regime where easy negatives dominate gradients. Auxiliary losses use binary cross-entropy with class-frequency-derived positive weights (clamped to [0.5, 15]). The total loss is: L_total = L_ASL (main) + 0.25 x ( L_BCE (location) + L_BCE (severity) ).</p>
    <p><strong>3.4 Training Protocol:</strong> Training proceeds for up to 35 epochs with early stopping (patience = 10). The backbone is frozen for the first 3 epochs to stabilize task heads before end-to-end fine-tuning. Learning rate scheduling combines linear warmup (epochs 1-4, start factor = 0.05) with cosine annealing (epochs 5-35, eta_min = 1x10^-7). The base learning rate is 1.5x10^-5 with AdamW (weight decay = 2x10^-3). Gradient accumulation over 2 steps and gradient clipping (max_norm = 0.5) ensure stable optimization. An Exponential Moving Average of model weights (decay = 0.9997) is maintained and used for all validation and test evaluation passes.</p>
    <p><strong>3.5 Ensemble and Test-Time Augmentation:</strong> Two model variants - EfficientNet-B0 and EfficientNet-B1 - are trained independently, and their predicted probabilities are averaged to form the ensemble output. At inference, Test-Time Augmentation is applied by averaging predictions across three views: the original image, a horizontal flip, and a vertical flip. Before threshold application, logits are temperature-scaled using a scalar T calibrated by minimizing binary cross-entropy on the validation set (T searched over [0.3, 3.0] in 100 steps).</p>
    <p><strong>3.6 Threshold Optimization and Post-Processing:</strong> Per-class decision thresholds are independently optimized on the validation set via exhaustive grid search over [0.05, 0.85] (81 points), selecting the threshold maximizing per-class binary F1. Structured prediction constraints are then enforced: total active labels are clamped to [1, 4]; within each location group, at most one severity label is retained (the one with the highest predicted probability). This post-processing step prevents physically implausible multi-severity predictions for the same damage location.</p>

    <h4>4) Result with Plots</h4>
    <p>The following five plots summarize class-level quality, operating thresholds, and confidence sensitivity for deployment tuning.</p>

    <img src="/images/car-damage/evaluation_summary.png" alt="Car Damage Evaluation Summary">
    <figcaption>Figure 1: Per-class F1, distribution alignment, optimized thresholds, and TP/FP/FN analysis</figcaption>

    <img src="/images/car-damage/precision_confidence.png" alt="Precision Confidence Curve">
    <figcaption>Figure 2: Precision vs confidence threshold</figcaption>

    <img src="/images/car-damage/recall_confidence.png?v=20260404d" alt="Recall Confidence Curve">
    <figcaption>Figure 3: Recall vs confidence threshold</figcaption>

    <img src="/images/car-damage/precision_recall.png" alt="Precision Recall Curve">
    <figcaption>Figure 4: Precision-Recall performance trade-off</figcaption>

    <img src="/images/car-damage/f1_confidence.png" alt="F1 Confidence Curve">
    <figcaption>Figure 5: F1 score vs confidence threshold</figcaption>

    <p><strong>Figure-wise insights:</strong> Figure 1 (evaluation summary) shows class-level F1 and TP/FP/FN behavior, where majority classes remain more stable and minority classes account for most residual errors. Figure 2 (precision-confidence) rises with threshold, indicating cleaner positive predictions at stricter confidence settings. Figure 3 (recall-confidence) declines with threshold, showing that strict filtering increases missed positives, especially for difficult labels. Figure 4 (precision-recall) highlights the operating trade-off frontier and indicates the most balanced region in mid-threshold settings. Figure 5 (F1-confidence) peaks in a narrow middle band, which is the recommended default operating zone when balanced performance is required.</p>
    <p>The evaluation curves for the Car Damage detection model reveal several critical characteristics of its performance across ten damage categories. The Precision-Recall curve demonstrates that the model achieves its highest precision values (reaching up to ~0.85 for front_high and ~0.75 for door_low) only at very low recall levels, with precision declining sharply as recall increases toward 1.0, indicating a fundamental precision-recall trade-off that is particularly pronounced for underrepresented classes such as back_high and back_low, which maintain comparatively low precision throughout. The F1 vs. Confidence curve shows that per-class F1 scores remain relatively stable across a wide range of confidence thresholds (approximately 0.1-0.45), with the macro F1 peaking at roughly 0.52 and the micro F1 at approximately 0.47 near the optimal threshold of ~0.5, beyond which all scores collapse precipitously to near zero - suggesting the model's predictions are heavily clustered around a narrow confidence band. This behavior is corroborated by the Recall vs. Confidence curve, where recall remains near 1.0 for all classes until the confidence threshold approaches ~0.5, at which point it drops abruptly, indicating that the model assigns low-to-moderate confidence scores to the vast majority of its detections. Similarly, the Precision vs. Confidence curve reveals that raw precision values are low across all classes at permissive thresholds (~0.13-0.42), rising sharply only near the 0.5 threshold before detection volume becomes negligible. Collectively, these results suggest that while the model demonstrates reasonable recall capacity, its overall discriminative ability is limited - reflected in moderate macro F1 scores and low baseline precision - pointing to the need for improved training data balance, class-specific augmentation strategies, or post-hoc threshold calibration to achieve operationally acceptable performance across all damage categories.</p>

    <h4>5) Discussion</h4>
    <p><strong>5.1 Interpretation of Performance Patterns:</strong> The results highlight a clear dichotomy in model performance between well-represented and underrepresented classes. Front and corner damage categories, which tend to be more visually distinctive and more frequently photographed in automotive datasets, achieve comparatively higher F1 scores (~0.53-0.59). Conversely, back_high and back_low exhibit markedly lower precision and F1, suggesting that even after aggressive oversampling, the model lacks sufficient training diversity to develop reliable discriminative representations for these categories.</p>
    <p>The sharp collapse of recall beyond a confidence threshold of ~0.50 is a notable behavioral pattern. This indicates the model operates in a low-confidence regime for the majority of its correct predictions. This is a known consequence of training with Asymmetric Loss under severe class imbalance: ASL suppresses easy negatives effectively but may not sufficiently encourage high-confidence positive activations, particularly for rare classes.</p>
    <p><strong>5.2 Impact of Ensemble and TTA:</strong> The use of a two-model ensemble (EfficientNet-B0 and B1) combined with TTA across three views provides consistent improvement in prediction stability. Averaging logits across architecturally complementary models reduces prediction variance for borderline examples near the decision boundary. TTA with horizontal and vertical flips is well-motivated for vehicle damage images, as damage may appear at various orientations depending on the camera angle and parking configuration.</p>
    <p><strong>5.3 Effectiveness of Structured Post-Processing:</strong> The location exclusivity constraint - enforcing that only one severity level is predicted per spatial location - is critical for semantically coherent predictions. Without this constraint, the model would occasionally predict both high and low severity for the same location, which is physically implausible. The combination of label count bounds (1-4 active labels) and location exclusivity significantly reduces the rate of structurally invalid predictions near threshold boundaries.</p>

    <h4>6) Limitation</h4>
    <p>Despite the comprehensive design of the proposed framework, several limitations constrain the current system's performance and generalizability:</p>
    <p><strong>6.1 Data-Level Limitations</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Persistent class imbalance: back_high and back_low remain substantially underrepresented even after aggressive oversampling. Oversampling cannot compensate for the lack of true visual diversity in rare class examples.</li>
      <li>Dataset size: the absolute number of unique images may be insufficient to learn fine-grained severity discrimination from visual evidence alone, particularly for less distinctive damage patterns.</li>
      <li>Label quality: the boundary between high and low severity damage is not objectively defined and may vary between annotators, introducing label noise that degrades calibration.</li>
      <li>Domain coverage: the dataset may not represent diverse lighting conditions, vehicle types, colors, viewing angles, and geographic contexts, limiting out-of-distribution generalization.</li>
    </ul>
    <p><strong>6.2 Model-Level Limitations</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Low-confidence predictions: the model systematically assigns low-to-moderate confidence scores to correct predictions, as evidenced by the recall-confidence curves. This limits the use of confidence scores as reliable uncertainty estimates in deployment.</li>
      <li>Limited ensemble diversity: both architectures belong to the EfficientNet family. Including architecturally distinct models (e.g., Vision Transformers, ConvNeXt) would provide stronger complementarity and improved ensemble gains.</li>
      <li>Fixed auxiliary loss weight: the auxiliary loss weight (0.25) is set heuristically and not tuned via cross-validation, potentially leaving performance improvements unrealized.</li>
    </ul>
    <p><strong>6.3 Evaluation Limitations</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Threshold collapse artifact: the abrupt collapse of all class metrics at the ~0.50 threshold suggests a potential training-test distribution mismatch in confidence scores, warranting calibration diagnostics such as reliability diagrams and Expected Calibration Error (ECE).</li>
      <li>Single test set: performance is reported on one held-out split from the same source distribution. Evaluation on independently collected external datasets would be necessary to confirm generalizability.</li>
    </ul>

    <h4>7) Future Direction</h4>
    <p>The identified limitations motivate several concrete directions for future research and engineering:</p>
    <p><strong>7.1 Data Improvement</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Synthetic data generation: leverage GANs or diffusion models to synthesize photorealistic vehicle damage images for underrepresented classes (back_high, back_low), directly addressing the root cause of poor rare-class performance.</li>
      <li>Active learning: deploy the current model in a human-in-the-loop labeling pipeline, prioritizing annotation of high-uncertainty or rare-class examples to efficiently expand coverage.</li>
      <li>Cross-dataset augmentation: incorporate publicly available damage datasets to increase distributional diversity and improve out-of-distribution robustness.</li>
      <li>Annotation refinement: adopt a multi-annotator protocol with inter-rater agreement measurement (e.g., Cohen's kappa) and label consolidation to reduce the impact of ambiguous ground truth.</li>
    </ul>
    <p><strong>7.2 Model Architecture Improvements</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Vision Transformers: integrate ViT or Swin Transformer backbones to exploit global contextual reasoning, which may better capture the spatial extent of vehicle damage regions.</li>
      <li>Graph-based label dependency: model semantic relationships between damage locations and severities using a graph neural module to improve multi-label prediction coherence.</li>
      <li>Weakly supervised localization: integrate Grad-CAM or class activation map supervision to improve spatial attention and interpretability.</li>
      <li>Vision-language models: explore adapting large models such as CLIP or LLaVA to the damage classification task via prompt engineering or parameter-efficient fine-tuning.</li>
    </ul>
    <p><strong>7.3 Training Strategy Improvements</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Advanced loss design: explore poly loss, distribution-balanced loss, or learnable ASL parameters as alternatives, and investigate their interaction with the auxiliary multi-task objective.</li>
      <li>Label co-occurrence modeling: explicitly model co-occurrence statistics of the ten damage classes as soft constraints in the loss function or as prior knowledge in post-processing.</li>
      <li>Neural architecture search (NAS): automate the search for optimal backbone and head configurations for this specific multi-label fine-grained task.</li>
    </ul>
    <p><strong>7.4 Deployment and Evaluation</strong></p>
    <ul style="font-size: 14px; color: #555;">
      <li>Calibration: apply per-class temperature scaling or isotonic regression to produce well-calibrated probability outputs suitable for downstream risk quantification in insurance workflows.</li>
      <li>Mobile and edge deployment: distill the ensemble into a lightweight model (e.g., MobileNetV3 or EfficientNet-Lite) via knowledge distillation, enabling on-device claim assessment via smartphone cameras.</li>
      <li>Longitudinal evaluation: establish a benchmark protocol for repeated evaluation over time to detect distribution drift and trigger systematic model re-calibration.</li>
      <li>Human-AI comparison study: conduct a controlled study comparing model predictions against expert assessors on a standardized damage image set to quantify the human-machine performance gap.</li>
    </ul>

    <div class="keywords">
      <span class="keyword blue">Computer Vision</span>
      <span class="keyword blue">Multi-Label Classification</span>
      <span class="keyword blue">EfficientNet</span>
      <span class="keyword blue">Damage Severity</span>
      <span class="keyword blue">Confidence Calibration</span>
      <span class="keyword blue">Precision-Recall</span>
    </div>
  </div>
</div>

