---
title: "Phase-Field Modeling of Non-Solvent Induced Phase Separation (PVDF Membranes)"
order: 2
status: "in-progress"
summary: "A GPU-accelerated phase-field model of non-solvent induced phase separation (NIPS) in PVDF membranes, built to connect how a membrane forms with the pore structure that governs transport in membrane distillation (MD)."
problem: "In membrane distillation, vapor transport and wetting resistance depend on the internal pore structure: pore size, porosity, and features such as macrovoids. That structure is set during fabrication by the thermodynamics and kinetics of phase separation, which are hard to observe directly during casting. A simulation that resolves how the polymer-rich and polymer-lean phases evolve can help explain why a given casting condition yields a given pore morphology, and therefore how it may affect MD performance."
methods: "The model couples a Cahn-Hilliard phase-field description of phase separation with Flory-Huggins thermodynamics for the polymer / solvent / non-solvent system, including vitrification and gelation kinetics that arrest the structure. Solvent and non-solvent exchange is treated by diffusion, with advection-diffusion coupling used where flow matters. The equations are solved with spectral (FFT/DCT) and finite-difference schemes in Python, accelerated on GPU (CUDA / Numba) to make large simulation grids practical."
limitations: "This is a continuum, mean-field model: it does not resolve molecular-scale detail, and its behavior depends on parameters (interaction parameters, mobilities, kinetic arrest criteria) that must be calibrated against experiment. The link from simulated pore morphology to measured MD flux and salt rejection is the goal of this work and should not be read as already established here."
nextSteps: "Quantify simulated pore size, porosity, and connectivity, and compare them against SEM-measured membrane structure and MD performance."
---
