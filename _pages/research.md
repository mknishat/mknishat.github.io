---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<div class="main-content">

  <!-- High-Level Researcher Profile Visual -->
  <style>
    .research-profile { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 22px; align-items: stretch; margin: 10px 0 28px; }
    .profile-card { background: var(--card-background, #fff); border: 1px solid var(--border-color, #e0e0e0); border-radius: 8px; padding: 20px; }
    .profile-title { margin: 0 0 6px; font-size: 22px; font-weight: 700; color: var(--text-color, #333); }
    .profile-sub { margin: 4px 0 14px; color: var(--text-color, #555); font-size: 14px; }
    .focus-badges { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0 6px; }
    .focus-badge { padding: 4px 10px; border-radius: 12px; font-size: 12px; border: 1px solid var(--border-color, #e0e0e0); background: transparent; color: var(--text-color, #333); }
    .profile-list { margin: 8px 0 0 18px; color: var(--text-color, #444); font-size: 14px; line-height: 1.6; }
    .profile-stat { display: inline-block; margin-right: 16px; font-size: 12px; color: #777; }
    .profile-chart { background: var(--card-background, #fff); border: 1px solid var(--border-color, #e0e0e0); border-radius: 8px; padding: 16px; }
    .profile-chart h4 { margin: 0 0 8px; font-size: 14px; color: var(--text-color, #333); font-weight: 700; }
    @media (max-width: 900px) { .research-profile { grid-template-columns: 1fr; } }
  </style>

  <div class="research-profile">
    <div class="profile-card">
      <h3 class="profile-title"><i class="fas fa-user-astronaut"></i> High-Level Researcher Profile</h3>
      <p class="profile-sub">Focus across five core areas derived from current research themes.</p>

      <div class="focus-badges">
        <!-- Smart & Connected Systems -->
        <span class="focus-badge">IoT</span>
        <span class="focus-badge">Smart Systems</span>
        <span class="focus-badge">Connectivity</span>
        <!-- Manufacturing Process Control -->
        <span class="focus-badge">Process Control</span>
        <span class="focus-badge">SPC</span>
        <span class="focus-badge">Optimization</span>
        <!-- High Dimensional Data Modeling and Analysis -->
        <span class="focus-badge">Big Data</span>
        <span class="focus-badge">Dimensionality Reduction</span>
        <span class="focus-badge">Feature Engineering</span>
        <!-- Healthcare Optimization -->
        <span class="focus-badge">Healthcare Systems</span>
        <span class="focus-badge">Hospital Operations</span>
        <span class="focus-badge">Resource Optimization</span>
        <!-- Predictive Analytics and AI -->
        <span class="focus-badge">Predictive Analytics</span>
        <span class="focus-badge">AI/ML</span>
        <span class="focus-badge">Neural Networks</span>
        <span class="focus-badge">Explainable AI</span>
      </div>

      <ul class="profile-list">
        <li>Smart & Connected Systems: IoT platforms enabling real-time monitoring and control.</li>
        <li>Manufacturing Process Control: Feedback control, SPC, and process optimization.</li>
        <li>High-Dimensional Data: Dimensionality reduction, feature extraction, pattern discovery.</li>
        <li>Healthcare Optimization: Patient flow, resource allocation, clinical decision support.</li>
        <li>Predictive Analytics & AI: Neural nets, ensembles, and explainable AI.</li>
      </ul>

      <div style="margin-top: 12px;">
        <span class="profile-stat"><i class="fas fa-wifi"></i> Connected Systems</span>
        <span class="profile-stat"><i class="fas fa-cogs"></i> Process Control</span>
        <span class="profile-stat"><i class="fas fa-chart-area"></i> High-Dimensional</span>
        <span class="profile-stat"><i class="fas fa-heart"></i> Healthcare</span>
        <span class="profile-stat"><i class="fas fa-brain"></i> Predictive AI</span>
      </div>
    </div>

    <div class="profile-chart">
      <h4><i class="fas fa-chart-bar"></i> Research Focus Overview</h4>
      <canvas id="researchRadar" height="220"></canvas>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script>
    (function() {
      const labels = [
        'Smart & Connected Systems',
        'Manufacturing Process Control',
        'High-Dimensional Data',
        'Healthcare Optimization',
        'Predictive Analytics & AI'
      ];
      // Default weights derived from tag counts (3,3,3,3,4) -> scaled to 0-100
      const weights = [60, 60, 60, 60, 80];

      function themeColors() {
        const cs = getComputedStyle(document.documentElement);
        const text = cs.getPropertyValue('--text-color')?.trim() || '#333';
        const border = cs.getPropertyValue('--border-color')?.trim() || 'rgba(0,0,0,0.1)';
        const accent = cs.getPropertyValue('--link-color')?.trim() || '#1976d2';
        const fill = accent + '22'; // transparent fill
        return { text, border, accent, fill };
      }

      const ctx = document.getElementById('researchRadar');
      if (!ctx) return;

      let { text, border, accent, fill } = themeColors();
      let chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Focus', data: weights,
            backgroundColor: fill, borderColor: accent, borderWidth: 1, barThickness: 18, borderRadius: 4
          }]
        },
        options: {
          indexAxis: 'y', responsive: true, maintainAspectRatio: false,
          scales: {
            x: { min: 0, max: 100, grid: { color: border }, ticks: { color: text } },
            y: { grid: { display: false }, ticks: { color: text } }
          },
          plugins: { legend: { display: false }, tooltip: { enabled: true } }
        }
      });

      // Update on theme toggle (MutationObserver watches data-theme changes)
      const observer = new MutationObserver(() => {
        const c = themeColors();
        chart.data.datasets[0].borderColor = c.accent;
        chart.data.datasets[0].backgroundColor = c.fill;
        chart.options.scales.x.grid.color = c.border;
        chart.options.scales.x.ticks.color = c.text;
        chart.options.scales.y.ticks.color = c.text;
        chart.update();
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    })();
  </script>

  <h2 style="font-size: 24px; margin-bottom: 20px; color: #333;"><i class="fas fa-cube"></i> Research Areas</h2>

  <!-- Research Area 1 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #17a2b8; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-wifi"></i> Smart and Connected Systems</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Research on Internet of Things (IoT) platforms, connectivity protocols, and smart manufacturing ecosystems that enable seamless communication between devices, machines, and systems for real-time monitoring and control.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #e0f2f1; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #00695c;">IoT</span>
      <span style="background: #e0f2f1; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #00695c;">Smart Systems</span>
      <span style="background: #e0f2f1; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #00695c;">Connectivity</span>
    </div>
  </div>

  <!-- Research Area 2 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #e91e63; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-cogs"></i> Manufacturing Process Control</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Advanced control strategies for manufacturing processes including feedback control systems, process optimization, statistical process control (SPC), and real-time adjustment mechanisms to maintain quality and consistency.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6a1b9a;">Process Control</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6a1b9a;">SPC</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6a1b9a;">Optimization</span>
    </div>
  </div>

  <!-- Research Area 3 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #ff6f00; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-chart-area"></i> High Dimensional Data Modeling and Analysis</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Development of statistical and machine learning methods for handling large-scale, high-dimensional datasets common in modern manufacturing. Includes dimensionality reduction, feature extraction, and pattern discovery techniques.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc5200;">Big Data</span>
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc5200;">Dimensionality Reduction</span>
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc5200;">Feature Engineering</span>
    </div>
  </div>

  <!-- Research Area 4 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #c2185b; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-heart"></i> Healthcare Optimization</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Application of industrial engineering and optimization techniques to healthcare systems including hospital operations, patient flow management, resource allocation, and clinical decision support systems.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #fce4ec; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #880e4f;">Healthcare Systems</span>
      <span style="background: #fce4ec; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #880e4f;">Hospital Operations</span>
      <span style="background: #fce4ec; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #880e4f;">Resource Optimization</span>
    </div>
  </div>

  <!-- Research Area 5 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #1976d2; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-brain"></i> Predictive Analytics and Artificial Intelligence</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Development and application of advanced AI and machine learning techniques for predictive modeling, decision optimization, and autonomous systems. Includes neural networks, ensemble methods, and explainable AI approaches.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #e3f2fd; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0d47a1;">Predictive Analytics</span>
      <span style="background: #e3f2fd; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0d47a1;">AI/ML</span>
      <span style="background: #e3f2fd; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0d47a1;">Neural Networks</span>
      <span style="background: #e3f2fd; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0d47a1;">Explainable AI</span>
    </div>
  </div>

  <hr style="margin: 40px 0;">

  <h2 style="font-size: 24px; margin-bottom: 20px; color: #333;"><i class="fas fa-flask-vial"></i> Research Directions</h2>

  <!-- Research Direction 1 -->
  <div class="research-area" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #007bff; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-sensor"></i> Adaptive Sensor Design and Real-Time Process Monitoring</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      While manufacturing systems generate massive volumes of heterogeneous sensor data, a critical gap remains in systematically determining which variables to measure to optimize quality control under resource constraints. This research direction focuses on integrating adaptive sensor system design with advanced statistical process control and machine learning. My objective is to develop:
    </p>
    <ul style="font-size: 15px; color: #555; line-height: 1.6;">
      <li><strong>Adaptive sampling algorithms and sensor selection strategies</strong> that pinpoint critical monitoring locations based on failure criticality</li>
      <li><strong>Multi-sensor data fusion frameworks</strong> capable of harmonizing heterogeneous data types with varying sampling rates and signal-to-noise ratios</li>
      <li><strong>Hybrid fault diagnosis models</strong> combining deep learning with transfer learning for robust pattern recognition</li>
    </ul>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Applications will span production equipment monitoring, real-time defect detection in streaming data, and factory network analysis. Ultimately, this framework will enable cost-effective monitoring systems that minimize computational overhead while maximizing fault detection accuracy.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #e7f3ff; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0066cc;">Sensor Networks</span>
      <span style="background: #e7f3ff; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0066cc;">Data Fusion</span>
      <span style="background: #e7f3ff; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0066cc;">Fault Detection</span>
      <span style="background: #e7f3ff; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0066cc;">Deep Learning</span>
      <span style="background: #e7f3ff; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #0066cc;">Statistical Process Control</span>
    </div>
  </div>

  <!-- Research Direction 2 -->
  <div class="research-area" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #28a745; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-wrench"></i> System Degradation Modeling and Predictive Maintenance</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Modern manufacturing relies on interconnected sensor networks that generate multi-modal data streams, yet the systematic integration of this asynchronous information for comprehensive degradation assessment remains underdeveloped. This research aims to bridge this gap by developing advanced data-fusion and machine-learning frameworks for precise equipment-failure prediction. Key areas of investigation include:
    </p>
    <ul style="font-size: 15px; color: #555; line-height: 1.6;">
      <li><strong>Sensor fusion strategies</strong> that synthesize multi-rate information into unified degradation indicators</li>
      <li><strong>Deep learning and transfer learning architectures</strong> designed to capture complex interdependencies and identify nascent failure signals</li>
      <li><strong>Probabilistic prognostic models</strong> that provide rigorous uncertainty quantification for Remaining Useful Life (RUL) predictions</li>
    </ul>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      By applying these methods to assembly processes and automated production lines, this research will enable predictive maintenance strategies that balance reliability with operational costs, significantly reducing unplanned downtime.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #e8f5e9; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #2d7d3d;">Predictive Maintenance</span>
      <span style="background: #e8f5e9; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #2d7d3d;">RUL Prediction</span>
      <span style="background: #e8f5e9; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #2d7d3d;">Degradation Modeling</span>
      <span style="background: #e8f5e9; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #2d7d3d;">Uncertainty Quantification</span>
    </div>
  </div>

  <!-- Research Direction 3 -->
  <div class="research-area" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #fd7e14; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-link"></i> Digital Twins and Cyber-Physical Systems</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Integrating physical assets with digital replicas offers immense potential for real-time optimization, yet challenges persist in ensuring model fidelity amidst approximations and sensor noise. This research direction addresses the credibility of Digital Twins through rigorous verification, validation, and uncertainty quantification. I will investigate hybrid modeling approaches that fuse physics-based models with data-driven machine learning to capture both deterministic phenomena and emergent behaviors. Specifically, the work will target:
    </p>
    <ul style="font-size: 15px; color: #555; line-height: 1.6;">
      <li><strong>Real-time synchronization protocols</strong> to maintain consistency despite measurement latency</li>
      <li><strong>Anomaly detection systems</strong> that identify discrepancies between predicted and observed behaviors</li>
      <li><strong>Surrogate model development</strong> for efficient "what-if" scenario analysis</li>
      <li><strong>Probabilistic risk assessment</strong> for decision confidence</li>
    </ul>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      The impact includes enhanced predictive accuracy, reduced computational burden via surrogates, and the capability for virtual commissioning without operational disruption.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc6600;">Digital Twins</span>
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc6600;">Cyber-Physical Systems</span>
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc6600;">Hybrid Modeling</span>
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc6600;">Anomaly Detection</span>
      <span style="background: #fff3e0; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #cc6600;">Surrogate Models</span>
    </div>
  </div>

  <!-- Research Direction 4 -->
  <div class="research-area" style="margin-bottom: 30px; padding: 20px; border-left: 4px solid #6f42c1; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-robot"></i> Multi-Agent Reinforcement Learning for Distributed Manufacturing</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Autonomous decision-making in distributed manufacturing requires coordination among multiple intelligent agents to achieve system-wide objectives under partial observability. However, current approaches often struggle with convergence and policy interpretability. This research investigates Multi-Agent Reinforcement Learning (MARL) frameworks that incorporate domain-specific manufacturing constraints to enable emergent cooperation without centralized control. I propose to develop:
    </p>
    <ul style="font-size: 15px; color: #555; line-height: 1.6;">
      <li><strong>Constrained policy optimization</strong> that embeds physical limitations into the learning process</li>
      <li><strong>Hierarchical action abstraction</strong> for multi-level reasoning</li>
      <li><strong>Novel reward structures</strong> that balance individual agent incentives with global system objectives</li>
    </ul>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Applications include dynamic job shop scheduling, flexible assembly line coordination, and collaborative quality inspection. This will result in self-organizing production systems capable of adapting to demand fluctuations and equipment variability while maintaining high efficiency.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6600cc;">Reinforcement Learning</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6600cc;">Multi-Agent Systems</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6600cc;">Job Shop Scheduling</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6600cc;">Autonomous Systems</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #6600cc;">AI Coordination</span>
    </div>
  </div>

  <hr style="margin: 40px 0;">

  <h2 style="font-size: 24px; margin-bottom: 20px; color: #333;"><i class="fas fa-list"></i> Other Topics of Interest</h2>

  <!-- Other Topic 1 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #388e3c; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-network-wired"></i> Supply Chain Network Design</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Strategic design and optimization of supply chain networks including facility location, network topology, resilience strategies, and sustainability considerations in global supply chains.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #e8f5e9; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #1b5e20;">Network Design</span>
      <span style="background: #e8f5e9; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #1b5e20;">Supply Chain Strategy</span>
      <span style="background: #e8f5e9; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #1b5e20;">Resilience</span>
    </div>
  </div>

  <!-- Other Topic 2 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #7b1fa2; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-cube"></i> Additive Manufacturing</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Research on 3D printing technologies, process optimization, material characterization, design for additive manufacturing (DfAM), and quality control in additive manufacturing systems.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #4a148c;">3D Printing</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #4a148c;">Process Optimization</span>
      <span style="background: #f3e5f5; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #4a148c;">DfAM</span>
    </div>
  </div>

  <!-- Other Topic 3 -->
  <div class="research-area" style="margin-bottom: 25px; padding: 20px; border-left: 4px solid #d32f2f; background: #f8f9fa; border-radius: 4px;">
    <h3 style="font-size: 18px; color: #333; margin-top: 0;"><i class="fas fa-microchip"></i> Quantum Computing</h3>
    <p style="font-size: 15px; text-align: justify; color: #555; line-height: 1.6;">
      Exploration of quantum computing applications in optimization problems, machine learning algorithms, and solving complex industrial engineering challenges that are computationally intensive for classical computers.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <span style="background: #ffebee; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #b71c1c;">Quantum Algorithms</span>
      <span style="background: #ffebee; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #b71c1c;">Quantum Optimization</span>
      <span style="background: #ffebee; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #b71c1c;">Quantum ML</span>
    </div>
  </div>

  <hr style="margin: 40px 0;">

  <!-- Research Interests Summary -->
  <div style="background: #f0f8ff; padding: 25px; border-radius: 8px; border: 1px solid #b3d9ff;">
    <h3 style="font-size: 18px; color: #0066cc; margin-top: 0;"><i class="fas fa-lightbulb"></i> Research Interests & Collaboration</h3>
    <p style="font-size: 15px; text-align: justify; color: #333; line-height: 1.6;">
      My research is driven by a passion for solving complex industrial engineering problems through innovative applications of technology and data science. I am particularly interested in collaborating on projects that bridge the gap between traditional operations management and modern digital technologies. 
      <br><br>
      I welcome opportunities to contribute to research initiatives spanning smart manufacturing systems, advanced data analytics, predictive maintenance, supply chain optimization, and the application of AI/ML in industrial settings. Feel free to reach out if you have research proposals or collaborative opportunities.
    </p>
  </div>

</div>

<hr style="margin: 40px 0;">

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin: 20px 0;">
  <a href="{{ '/academics/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-graduation-cap"></i> Academics</a>
  <a href="{{ '/research/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-flask-vial"></i> Research</a>
  <a href="{{ '/projects/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-folder-open"></i> Projects</a>
  <a href="{{ '/experience/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-briefcase"></i> Experiences</a>
  <a href="{{ '/files/Nishat_CV.pdf' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-file-pdf"></i> CV</a>
</div>

</div>

<hr style="margin: 40px 0;">

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin: 20px 0;">
  <a href="{{ '/academics/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-graduation-cap"></i> Academics</a>
  <a href="{{ '/research/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-flask-vial"></i> Research</a>
  <a href="{{ '/projects/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-folder-open"></i> Projects</a>
  <a href="{{ '/experience/' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-briefcase"></i> Experiences</a>
  <a href="{{ '/files/Nishat_CV.pdf' | relative_url }}" style="padding: 8px 16px; text-decoration: none; background: #f0f0f0; color: #333; border-radius: 3px; font-size: 14px; transition: all 0.3s; border: 1px solid #ccc;"><i class="fas fa-file-pdf"></i> CV</a>
</div>
