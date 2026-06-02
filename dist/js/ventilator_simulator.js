const simulatorPresets = {
    "reverse-triggering-1-2-pressure": {
        "settings": {
            "mode": "pressure_control",
            "peep": 10,
            "deltaPressure": 15,
            "iTime": 0.8,
            "tidalVolume": 450,
            "flow": 40,
            "flowPattern": "constant",
            "inspiratoryPause": 0,
            "prvcTargetVolume": 500,
            "prvcPmax": 35,
            "pavSupportPercent": 50,
            "pavPmax": 35,
            "pressureSupport": 10,
            "flowCyclePercent": 25,
            "riseTime": 0.1,
            "triggerType": "flow",
            "pressureTrigger": -1,
            "flowTrigger": 2,
            "rate": 24,
            "fio2": 0.4
        },
        "patient": {
            "patientSex": null,
            "patientHeight": null,
            "compliance": 30,
            "resistance": 10,
            "elastanceRecoilEnabled": false,
            "recruitedVolume": 0,
            "spontaneousBreathingEnabled": true,
            "spontaneousRate": 16,
            "pmusAmplitude": 10,
            "responsivePmus": false,
            "pmusDuration": 0.7,
            "pmusRiseTime": 0.3,
            "pmusHoldTime": 0,
            "pmusDecayTime": 0.4,
            "pmusRiseShape": "smoothstep",
            "pmusDecayShape": "smoothstep",
            "pmusRateCoupling": false,
            "pmusRateCouplingThreshold": 25,
            "pmusOffset": 0.4,
            "positivePmus": false,
            "recoilStrength": 5,
            "airwayOpeningPressure": 0,
            "stressIndexEnabled": false,
            "stressIndex": 1,
            "upperInflectionEnabled": false,
            "upperInflectionPoint": 30,
            "entrainmentEnabled": true,
            "entrainmentRatio": "1:2",
            "cardiacOscillationsEnabled": false,
            "heartRate": 80,
            "naturalVariabilityEnabled": false,
            "variabilityAmount": 0.1,
            "flowLimitationEnabled": false,
            "flowLimitSeverity": "moderate",
            "criticalClosingPressure": 7,
            "flowLimitK": 10,
            "peepStentingFactor": 0.8
        }
    },
    "reverse-triggering-1-2-volume": {
        "settings": {
            "mode": "volume_control",
            "peep": 5,
            "deltaPressure": 15,
            "iTime": 0.8,
            "tidalVolume": 450,
            "flow": 60,
            "flowPattern": "constant",
            "inspiratoryPause": 0.3,
            "prvcTargetVolume": 500,
            "prvcPmax": 35,
            "pavSupportPercent": 50,
            "pavPmax": 35,
            "pressureSupport": 10,
            "flowCyclePercent": 25,
            "riseTime": 0.1,
            "triggerType": "flow",
            "pressureTrigger": -1,
            "flowTrigger": 2,
            "rate": 24,
            "fio2": 0.4
        },
        "patient": {
            "patientSex": null,
            "patientHeight": null,
            "compliance": 30,
            "resistance": 15,
            "elastanceRecoilEnabled": false,
            "recruitedVolume": 0,
            "spontaneousBreathingEnabled": true,
            "spontaneousRate": 16,
            "pmusAmplitude": 8,
            "responsivePmus": false,
            "pmusDuration": 0.72,
            "pmusRiseTime": 0.3,
            "pmusHoldTime": 0,
            "pmusDecayTime": 0.4,
            "pmusRiseShape": "smoothstep",
            "pmusDecayShape": "smoothstep",
            "pmusRateCoupling": false,
            "pmusRateCouplingThreshold": 25,
            "pmusOffset": 0.3,
            "positivePmus": false,
            "recoilStrength": 5,
            "airwayOpeningPressure": 0,
            "stressIndexEnabled": false,
            "stressIndex": 1,
            "upperInflectionEnabled": false,
            "upperInflectionPoint": 30,
            "entrainmentEnabled": true,
            "entrainmentRatio": "1:2",
            "cardiacOscillationsEnabled": false,
            "heartRate": 80,
            "naturalVariabilityEnabled": false,
            "variabilityAmount": 0.1,
            "flowLimitationEnabled": false,
            "flowLimitSeverity": "moderate",
            "criticalClosingPressure": 7,
            "flowLimitK": 10,
            "peepStentingFactor": 0.8
        }
    },
    "ineffective-efforts": {
        "settings": {
            "mode": "pressure_support",
            "peep": 5,
            "deltaPressure": 22,
            "iTime": 1,
            "tidalVolume": 500,
            "flow": 40,
            "flowPattern": "constant",
            "inspiratoryPause": 0,
            "prvcTargetVolume": 500,
            "prvcPmax": 35,
            "pavSupportPercent": 50,
            "pavPmax": 35,
            "pressureSupport": 20,
            "flowCyclePercent": 25,
            "riseTime": 0.1,
            "triggerType": "flow",
            "pressureTrigger": -1,
            "flowTrigger": 2,
            "rate": 15,
            "fio2": 0.4
        },
        "patient": {
            "patientSex": null,
            "patientHeight": null,
            "compliance": 50,
            "resistance": 20,
            "elastanceRecoilEnabled": false,
            "recruitedVolume": 0,
            "spontaneousBreathingEnabled": true,
            "spontaneousRate": 24,
            "pmusAmplitude": 4,
            "responsivePmus": false,
            "pmusDuration": 0.8,
            "pmusRiseTime": 0.3,
            "pmusHoldTime": 0,
            "pmusDecayTime": 0.4,
            "pmusRiseShape": "smoothstep",
            "pmusDecayShape": "smoothstep",
            "pmusRateCoupling": false,
            "pmusRateCouplingThreshold": 25,
            "pmusOffset": 0,
            "positivePmus": false,
            "recoilStrength": 5,
            "airwayOpeningPressure": 0,
            "stressIndexEnabled": false,
            "stressIndex": 1,
            "upperInflectionEnabled": false,
            "upperInflectionPoint": 30,
            "entrainmentEnabled": false,
            "entrainmentRatio": "1:1",
            "cardiacOscillationsEnabled": false,
            "heartRate": 80,
            "naturalVariabilityEnabled": false,
            "variabilityAmount": 0.1,
            "flowLimitationEnabled": false,
            "flowLimitSeverity": "moderate",
            "criticalClosingPressure": 7,
            "flowLimitK": 10,
            "peepStentingFactor": 0.8
        }
    },
    "early-cycling": {
        "settings": {
            "mode": "pressure_control",
            "peep": 5,
            "deltaPressure": 10,
            "iTime": 0.7,
            "tidalVolume": 500,
            "flow": 40,
            "flowPattern": "constant",
            "inspiratoryPause": 0,
            "prvcTargetVolume": 500,
            "prvcPmax": 35,
            "pavSupportPercent": 50,
            "pavPmax": 35,
            "pressureSupport": 10,
            "flowCyclePercent": 25,
            "riseTime": 0.1,
            "triggerType": "flow",
            "pressureTrigger": -1,
            "flowTrigger": 2,
            "rate": 16,
            "fio2": 0.4
        },
        "patient": {
            "patientSex": null,
            "patientHeight": null,
            "compliance": 35,
            "resistance": 10,
            "elastanceRecoilEnabled": false,
            "recruitedVolume": 0,
            "spontaneousBreathingEnabled": true,
            "spontaneousRate": 20,
            "pmusAmplitude": 8,
            "responsivePmus": false,
            "pmusDuration": 1.1,
            "pmusRiseTime": 0.3,
            "pmusHoldTime": 0,
            "pmusDecayTime": 0.4,
            "pmusRiseShape": "smoothstep",
            "pmusDecayShape": "smoothstep",
            "pmusRateCoupling": false,
            "pmusRateCouplingThreshold": 25,
            "pmusOffset": 0,
            "positivePmus": false,
            "recoilStrength": 5,
            "airwayOpeningPressure": 0,
            "stressIndexEnabled": false,
            "stressIndex": 1,
            "upperInflectionEnabled": false,
            "upperInflectionPoint": 30,
            "entrainmentEnabled": false,
            "entrainmentRatio": "1:1",
            "cardiacOscillationsEnabled": false,
            "heartRate": 80,
            "naturalVariabilityEnabled": false,
            "variabilityAmount": 0.1,
            "flowLimitationEnabled": false,
            "flowLimitSeverity": "moderate",
            "criticalClosingPressure": 7,
            "flowLimitK": 10,
            "peepStentingFactor": 0.8
        }
    },
    "late-cycling": {
        "settings": {
            "mode": "pressure_control",
            "peep": 5,
            "deltaPressure": 10,
            "iTime": 1,
            "tidalVolume": 500,
            "flow": 40,
            "flowPattern": "constant",
            "inspiratoryPause": 0,
            "prvcTargetVolume": 500,
            "prvcPmax": 35,
            "pavSupportPercent": 50,
            "pavPmax": 35,
            "pressureSupport": 10,
            "flowCyclePercent": 40,
            "riseTime": 0.1,
            "triggerType": "flow",
            "pressureTrigger": -1,
            "flowTrigger": 2,
            "rate": 20,
            "fio2": 0.4
        },
        "patient": {
            "patientSex": null,
            "patientHeight": null,
            "compliance": 30,
            "resistance": 10,
            "elastanceRecoilEnabled": false,
            "recruitedVolume": 0,
            "spontaneousBreathingEnabled": true,
            "spontaneousRate": 28,
            "pmusAmplitude": 10,
            "responsivePmus": false,
            "pmusDuration": 0.8,
            "pmusRiseTime": 0.3,
            "pmusHoldTime": 0,
            "pmusDecayTime": 0.4,
            "pmusRiseShape": "smoothstep",
            "pmusDecayShape": "smoothstep",
            "pmusRateCoupling": false,
            "pmusRateCouplingThreshold": 25,
            "pmusOffset": 0,
            "positivePmus": false,
            "recoilStrength": 5,
            "airwayOpeningPressure": 0,
            "stressIndexEnabled": false,
            "stressIndex": 1,
            "upperInflectionEnabled": false,
            "upperInflectionPoint": 30,
            "entrainmentEnabled": false,
            "entrainmentRatio": "1:1",
            "cardiacOscillationsEnabled": false,
            "heartRate": 80,
            "naturalVariabilityEnabled": false,
            "variabilityAmount": 0.1,
            "flowLimitationEnabled": false,
            "flowLimitSeverity": "moderate",
            "criticalClosingPressure": 7,
            "flowLimitK": 10,
            "peepStentingFactor": 0.8
        }
    },
    "auto-trigger": {
        "settings": {
            "mode": "pressure_support",
            "peep": 5,
            "deltaPressure": 12,
            "iTime": 1,
            "tidalVolume": 500,
            "flow": 60,
            "flowPattern": "constant",
            "inspiratoryPause": 0.3,
            "prvcTargetVolume": 500,
            "prvcPmax": 35,
            "pavSupportPercent": 50,
            "pavPmax": 35,
            "pressureSupport": 10,
            "flowCyclePercent": 25,
            "riseTime": 0.1,
            "triggerType": "flow",
            "pressureTrigger": -1,
            "flowTrigger": 2,
            "rate": 24,
            "fio2": 0.4
        },
        "patient": {
            "patientSex": null,
            "patientHeight": null,
            "compliance": 50,
            "resistance": 10,
            "elastanceRecoilEnabled": false,
            "recruitedVolume": 0,
            "spontaneousBreathingEnabled": true,
            "spontaneousRate": 0,
            "pmusAmplitude": 8,
            "responsivePmus": false,
            "pmusDuration": 0.8,
            "pmusRiseTime": 0.3,
            "pmusHoldTime": 0,
            "pmusDecayTime": 0.4,
            "pmusRiseShape": "smoothstep",
            "pmusDecayShape": "smoothstep",
            "pmusRateCoupling": false,
            "pmusRateCouplingThreshold": 25,
            "pmusOffset": 0,
            "positivePmus": false,
            "recoilStrength": 5,
            "airwayOpeningPressure": 0,
            "stressIndexEnabled": false,
            "stressIndex": 1,
            "upperInflectionEnabled": false,
            "upperInflectionPoint": 30,
            "entrainmentEnabled": false,
            "entrainmentRatio": "1:1",
            "cardiacOscillationsEnabled": true,
            "heartRate": 100,
            "naturalVariabilityEnabled": false,
            "variabilityAmount": 0.1,
            "flowLimitationEnabled": false,
            "flowLimitSeverity": "moderate",
            "criticalClosingPressure": 7,
            "flowLimitK": 10,
            "peepStentingFactor": 0.8
        }
    },
    "breath-stacking": {
        "settings": {
            "mode": "volume_control",
            "peep": 5,
            "deltaPressure": 15,
            "iTime": 0.6,
            "tidalVolume": 400,
            "flow": 60,
            "flowPattern": "constant",
            "inspiratoryPause": 0,
            "prvcTargetVolume": 500,
            "prvcPmax": 35,
            "pavSupportPercent": 50,
            "pavPmax": 35,
            "pressureSupport": 10,
            "flowCyclePercent": 25,
            "riseTime": 0.1,
            "triggerType": "flow",
            "pressureTrigger": -1,
            "flowTrigger": 2,
            "rate": 15,
            "fio2": 0.4
        },
        "patient": {
            "patientSex": null,
            "patientHeight": null,
            "compliance": 40,
            "resistance": 15,
            "elastanceRecoilEnabled": false,
            "recruitedVolume": 0,
            "spontaneousBreathingEnabled": true,
            "spontaneousRate": 22,
            "pmusAmplitude": 12,
            "responsivePmus": false,
            "pmusDuration": 1.1,
            "pmusRiseTime": 0.3,
            "pmusHoldTime": 0,
            "pmusDecayTime": 0.4,
            "pmusRiseShape": "smoothstep",
            "pmusDecayShape": "smoothstep",
            "pmusRateCoupling": false,
            "pmusRateCouplingThreshold": 25,
            "pmusOffset": 0,
            "positivePmus": false,
            "recoilStrength": 5,
            "airwayOpeningPressure": 0,
            "stressIndexEnabled": false,
            "stressIndex": 1,
            "upperInflectionEnabled": false,
            "upperInflectionPoint": 30,
            "entrainmentEnabled": false,
            "entrainmentRatio": "1:1",
            "cardiacOscillationsEnabled": false,
            "heartRate": 80,
            "naturalVariabilityEnabled": false,
            "variabilityAmount": 0.1,
            "flowLimitationEnabled": false,
            "flowLimitSeverity": "moderate",
            "criticalClosingPressure": 7,
            "flowLimitK": 10,
            "peepStentingFactor": 0.8
        }
    }
};


    // Store charts outside Alpine's reactive system
    let chartInstances = {
        pressure: null,
        flow: null,
        volume: null
    };

    function ventilatorSimulator() {
        return {
            $wire: {
                teachingModeEnabled: false,
                broadcastSettings() {},
                saveScenarioFromAlpine() { return Promise.resolve(); },
                set(key, val) {}
            },
            loadPresetScenario(name) {
                const preset = simulatorPresets[name];
                if (preset) {
                    this.loadScenario(preset);
                }
            },
            // Mode flag for learner vs teacher view
            isLearnerMode: false,


            // Shared Scenario Initial Load (from /scenario/{code} URL)
            sharedScenarioInitial: null,

            // Ventilator Settings
            settings: {
                mode: 'volume_control',
                peep: 5,
                // Pressure Control settings
                deltaPressure: 12,  // Driving pressure above PEEP (cmH2O)
                iTime: 1.0,  // Inspiratory time in seconds (for PC and PRVC)
                // Volume Control settings
                tidalVolume: 500,  // mL
                flow: 60,  // L/min
                flowPattern: 'constant',  // 'constant' or 'decelerating'
                inspiratoryPause: 0.3,  // seconds
                // PRVC settings
                prvcTargetVolume: 500,  // Target tidal volume in mL
                prvcPmax: 35,  // Maximum pressure limit above PEEP (cmH2O)
                // PAV+ settings
                pavSupportPercent: 50,  // % of work done by ventilator (5-95%)
                pavPmax: 35,  // Maximum pressure limit (cmH2O)
                // Pressure Support settings
                pressureSupport: 8,  // Pressure support level above PEEP (cmH2O)
                flowCyclePercent: 25,  // % of peak flow to cycle off inspiration
                riseTime: 0.1,  // Pressurization rise time in seconds (default 100ms)
                // Trigger settings (applies to all modes)
                triggerType: 'flow',  // 'pressure' or 'flow'
                pressureTrigger: -1,  // cmH2O (negative pressure drop to trigger)
                flowTrigger: 2,  // L/min (flow to trigger)
                // Common settings
                rate: 24,  // Only used in PC/VC/PRVC modes
                fio2: 0.40  // Fraction of inspired oxygen (0.21 to 1.0)
            },

            // PRVC internal state (not user-visible)
            prvcWorkingPressure: 10,  // Current pressure level being used (cmH2O above PEEP)
            prvcPreviousDeliveredVolume: 0,  // Volume delivered in previous breath (mL)

            // Patient Characteristics
            patient: {
                patientSex: null,  // 'M' or 'F' for PBW calculation (null = not set)
                patientHeight: null,  // Height in cm for PBW calculation (null = not set)
                compliance: 50,  // mL/cmH2O - normal adult
                resistance: 10,   // cmH2O/L/s - endotracheal tube resistance (typical for 7-8mm ETT)
                // Passive elastance recoil (affects peak expiratory flow in passive breaths)
                elastanceRecoilEnabled: false,  // Enable elastance-driven peak flow boost (uses EL/Ers ratio)
                recruitedVolume: 0,  // mL - recruited lung volume from high PEEP (released when PEEP decreases from ≥15)
                // Spontaneous breathing parameters
                spontaneousBreathingEnabled: false,  // Enable/disable spontaneous breathing
                spontaneousRate: 20,  // Spontaneous breaths per minute
                pmusAmplitude: 0,  // Peak Pmus in cmH2O (0 = disabled by default)
                responsivePmus: false,  // When enabled, Pmus scales down as vent support increases
                responsivePmusSensitivity: 70,  // Sensitivity as percentage (0-100), 70 = 0.7 factor
                // --- Work-share Responsive Pmus baselines (Task 2) ---
                // These are captured/reset to current Pmus settings whenever Responsive is toggled on
                // or the user explicitly edits Pmus. They define what the patient wants to do AT THE
                // CURRENT support level — not what they'd do unsupported.
                baselinePmusAmplitude: 0,
                baselineRiseTime: 0,
                baselineHoldTime: 0,
                baselineDecayTime: 0,
                // "responsiveness" is the new gain (0..1). Old responsivePmusSensitivity (10..100 percent)
                // is retained for migration and reused as the source of truth for this value.
                // We *will not* introduce a separate field — sensitivity/100 IS responsiveness.
                pmusDuration: 0.9,  // Total Pmus duration (auto-synced from rise+hold+decay)
                pmusRiseTime: 0.40,  // Trise: ramp from 0 to peak [s]
                pmusHoldTime: 0.10,     // Thold: dwell at peak [s] (default 0 = single rounded peak; spec allows up to ~400ms for high-drive scenarios)
                pmusDecayTime: 0.50,  // Tdecay: post-inspiratory inspiratory activity (PIIA) decay [s]
                pmusRiseShape: 'smoothstep',  // 'linear' | 'smoothstep' | 'half-cosine' (smoothstep eases at both ends — no angle at peak)
                pmusDecayShape: 'smoothstep',  // 'smoothstep' | 'half-cosine' | 'exponential' (smoothstep is C¹ smooth at both peak and baseline — no angles)
                pmusRateCoupling: false,  // Shorten timings as RR rises above threshold
                pmusRateCouplingThreshold: 25,  // bpm above which timings start shortening
                pmusOffset: 0,  // Offset time in seconds (for asynchrony simulation)
                positivePmus: false,  // Display Pmus as positive (upward) instead of negative
                recoilStrength: 5,  // Chest-wall recoil contribution (% of lung elastic recoil). Default 5% reflects near-neutral chest-wall recoil at FRC during quiet breathing; raise (up to 50%) for high-elastance scenarios (ARDS, restrictive disease).
                effort: 0,  // Legacy parameter for PC/VC modes
                // Airway closure parameters
                airwayOpeningPressure: 0,  // Pressure required to open closed airways (0 = no closure)
                // Stress index for volume control mode (affects pressure-time curve shape)
                stressIndexEnabled: true,  // Enable stress index abnormality
                stressIndex: 1.0,  // Normal range 0.9-1.1; <0.9 = recruitment; >1.1 = overdistension
                stressIndexPreviousPeep: 5,  // Previous applied PEEP for tracking PEEP changes affecting stress index
                // Upper inflection point (UIP) for pressure-based modes
                upperInflectionEnabled: false,  // Enable UIP compliance reduction
                upperInflectionPoint: 30,  // cmH2O - alveolar pressure threshold above which compliance decreases
                // Reverse triggering entrainment parameters
                entrainmentEnabled: false,  // Enable entrainment of patient effort to ventilator breaths
                entrainmentRatio: '1:1',  // Entrainment ratio - patient effort per N ventilator breaths
                // Cardiac oscillation parameters
                cardiacOscillationsEnabled: false,  // Enable cardiac oscillations affecting flow and pressure
                heartRate: 80,  // Heart rate in beats per minute
                // Natural variability parameters (adds realistic noise to ventilation)
                naturalVariabilityEnabled: false,  // Enable breath-to-breath variability
                variabilityAmount: 0.10,  // Coefficient of variation (0.10 = 10% standard deviation)
                // Flow limitation parameters (obstructive physiology - COPD/Asthma)
                flowLimitationEnabled: false,  // Enable expiratory flow limitation
                flowLimitSeverity: 'moderate',  // 'mild', 'moderate', 'severe', 'custom'
                criticalClosingPressure: 7,  // cmH2O - pressure below which airways collapse
                flowLimitK: 10,  // Conductance factor (L/min per sqrt(cmH2O))
                peepStentingFactor: 0.8,  // How effectively PEEP prevents collapse (0-1)
                compressionDevelopmentTime: 0.08,  // Time for dynamic compression to develop (80ms)
            },

            // Per-breath variability factors (regenerated each breath when naturalVariabilityEnabled)
            breathVariability: {
                complianceFactor: 1.0,  // Multiplier for compliance this breath
                resistanceFactor: 1.0,  // Multiplier for resistance this breath
                pmusAmplitudeFactor: 1.0,  // Multiplier for Pmus amplitude this breath
                spontaneousIntervalFactor: 1.0,  // Multiplier for time to next spontaneous breath
            },

            // Simulation State
            isRunning: true,
            isFullscreen: false,
            currentTime: 0,
            breathPhase: 'expiration', // 'inspiration', 'expiration', or 'pause' - start in expiration
            breathStartTime: -3, // Start at end of breath cycle (-(60/20) for default rate 20) so first frame triggers new breath cleanly
            endExpiratoryVolume: 0, // Track volume at end of expiration

            // Spontaneous breathing state (for PS mode)
            nextSpontaneousBreathTime: 0,
            nextSpontaneousPmusTime: 0, // When next independent Pmus effort should start
            spontaneousBreathScheduled: false, // Flag to prevent double-scheduling
            lastSpontaneousRate: 20, // Track rate changes
            patientRespiratoryPhaseStartTime: 0, // When patient's current respiratory cycle started
            pmusStartTime: 0,
            peakInspiratoryFlow: 0,  // Track peak flow for PS cycling
            inspirationEndTime: null, // Actual inspiration end time (for flow-cycled PS)
            endInspiratoryVolume: 0, // Actual volume at end of inspiration
            endInspiratoryPressure: 0, // Actual pressure at end of inspiration
            breathInspirationTime: 0, // Inspiration time locked at breath start (for VC phase transitions)
            breathPauseTime: 0, // Pause time locked at breath start (for VC phase transitions)
            lastCalculatedPressure: 5, // Track last pressure for smooth transitions
            pressureAtTrigger: 5, // Pressure when breath was triggered
            flowAtTrigger: 0, // Flow when breath was triggered (for smooth transition)
            triggerDetectedTime: null, // When trigger was detected
            triggerResponseDelay: 0.08, // Ventilator response time (80ms)
            residualVolume: 0, // Volume remaining from incomplete exhalation (breath-stacking)
            previousPeepTotal: null, // Previous PEEPtotal (applied + auto) for tracking SI changes
            previousAppliedPeep: null, // Previous applied PEEP for tracking therapeutic PEEP changes
            trueLungVolumeAtEndExpiration: 0, // True lung volume at end of expiration (for residual capture)
            isBreathStacking: false, // True if < 50% of volume was exhaled (stack waveform), false for air-trapping (restart waveform)
            pmusWasActiveThisBreath: false, // Track if pmus occurred during current breath (for recoil pressure)
            pmusWasActiveDuringInspiration: false, // Track if pmus was active specifically during inspiration (for volume calculation)
            breathWasTriggered: false, // Track if current breath was patient-triggered vs time-triggered
            cpapCumulativeVolume: 0, // Track cumulative volume during CPAP mode breathing
            cpapPeakVolume: 0, // Peak volume during CPAP inspiration
            cpapInspStartVolume: 0, // Lung volume above FRC at start of current Pmus inspiration (for VT calc when residual carries over)
            cpapInInspiration: false, // Track if patient is currently inspiring in CPAP
            cpapExpirationStartTime: 0, // Time when CPAP exhalation started
            cpapExpirationStartVolume: 0, // Volume at start of CPAP exhalation
            cpapPmusWasActive: false, // Track Pmus state for metrics updates in CPAP mode
            pavInspiratoryVolume: 0, // Track inspiratory volume during PAV+ (resets each breath)

            // Legacy braking state for other modes (used by calculateExpiratoryPmusBraking helper)
            filteredBrakingFlow: 0,
            lastBrakingUpdateTime: 0,
            smoothedBrakingFlow: 0, // Low-pass filtered braking flow — provides smooth tail when Pmus ends

            // PS mode ineffective effort tracking (CPAP-style two-phase approach)
            psEffortActive: false,
            psEffortVolume: 0,
            psEffortExhaleStart: 0,    // Time when passive exhale phase started
            psEffortExhaleVolume: 0,   // Volume at start of passive exhale phase

            // Entrainment state (for reverse triggering)
            lastMandatoryBreathTime: 0, // Time of the last qualified mandatory breath (used for entrainment)
            mandatoryBreathsSinceEntrain: 0, // Count of mandatory breaths since last entrained patient effort
            lastEntrainedEffortTime: 0, // Time when last entrained Pmus effort started
            currentPmusTime: -1, // Current time within Pmus effort for this frame (-1 = no effort active)
            lastPmusEffortStart: 0, // Time when the most recent Pmus effort started (persists after breath scheduling)

            // Universal flow integration tracking
            // Volume = ∫flow for the entire breath cycle, ensuring flow modifications always affect volume
            integratedVolume: 0, // Current volume from flow integration (mL)
            lastBreathPhaseForVolumeTracking: null, // To detect phase transitions
            lastBreathCountForVolumeTracking: -1, // To detect new breaths reliably

            // Volume display smoothing (EWMA - exponential weighted moving average)
            smoothedDisplayVolume: 0, // Smoothed volume for display
            volumeSmoothingAlpha: 0.5, // Lower = more smoothing, higher = more responsive

            // UI State
            showSettings: false,
            settingsJustConfirmed: false, // Track if settings were just confirmed (for Done button)
            showPmusTrace: false, // Show Pmus trace on pressure waveform (user toggle)
            showP01: false, // Show P0.1 measurement (user toggle)
            hideMeasurements: false, // Hide PIP/Plateau/PEEP from learners (teaching feature)
            waveformHeight: 300, // Height in pixels (fixed at 300px)
            savedWaveformHeight: null, // Store original height when entering fullscreen

            // Crosshair values for frozen waveform display (shown in chart titles instead of floating tooltip)
            crosshairTime: null,
            crosshairPressure: null,
            crosshairFlow: null,
            crosshairVolume: null,
            crosshairPmus: null,

            // Pending settings system - changes require confirmation and apply at next breath
            // pendingSettings/pendingPatient: What the UI controls show (user is editing)
            // stagedSettings/stagedPatient: Confirmed changes waiting for next breath
            // settings/patient: Currently active settings
            pendingSettings: null, // Will be initialized in init()
            pendingPatient: null,
            stagedSettings: null, // Confirmed but waiting for next breath's expiration
            stagedPatient: null,
            hasConfirmedChanges: false, // True when staged changes are waiting for application
            hasConfirmedVentilatorChanges: false, // True when ventilator settings are waiting for application
            hasConfirmedPatientChanges: false, // True when patient settings are waiting for application
            settingsConfirmedAtBreathId: null, // Breath ID when settings were confirmed (apply after this breath)
            settingsConfirmedAtTime: null, // Timestamp when settings were confirmed (for timeout fallback)
            previousVentSettings: null, // Previous ventilator settings (for revert feature)
            isLoadingScenario: false, // Guard to prevent watchers from triggering during scenario load

            // PEEP change tracking for physiological FRC adjustments
            previousPeepBeforeChange: null, // PEEP value before settings were applied (for calculating delta)
            volumeFrcOffset: 0, // Current FRC volume offset from PEEP change (mL) - for display only
            resetVolumeOffsetOnNextBreath: false, // Flag to reset volume baseline on next breath start
            peepTransitionActive: false, // True when lung is equilibrating to new PEEP
            peepTransitionStartVolume: 0, // Volume at moment PEEP changed
            peepTransitionTargetDelta: 0, // Target volume change (+/- mL) for this PEEP transition
            peepTransitionCurrentOffset: 0, // Current offset during transition (mL) - for display only
            peepTransitionFlowOffset: 0, // Flow offset during transition (L/min) - for display only
            peepTransitionVolumeForMeasurement: 0, // Volume to add to exhaled Vt measurement (captures FRC change + recruited volume)

            // Pause maneuver state
            inspiratoryPauseActive: false,
            expiratoryPauseActive: false,
            activePauseType: null,  // Track which pause is currently active: 'inspiratory', 'expiratory', or null
            inspiratoryPauseRequested: false,  // Button was pressed, waiting for breath to complete
            expiratoryPauseRequested: false,   // Button was pressed, waiting for breath to complete
            breathIdWhenInspPauseRequested: null,  // Which breath was ON when insp pause requested
            breathIdWhenExpPauseRequested: null,   // Which breath was ON when exp pause requested
            currentBreathId: 0,  // Increments each new breath to track breath cycles
            pauseStartTime: 0,
            pauseDuration: 0,
            pauseVolumeAtStart: 0,
            pausePressureAtStart: 0,
            _holdActivationTime: 0, // When hold actually activated (valve closed)
            pauseFrozenPressure: 0, // Frozen pressure value during pause
            pauseFrozenVolume: 0,   // Frozen volume value during pause (for display)
            pauseFrozenVolumeForPressure: 0, // True lung volume during pause (for pressure/auto-PEEP calculation)
            pauseFrozenFlow: 0,     // Flow value at pause start (for valve inertia decay)
            pausePreHoldPressure: null, // Pre-hold pressure for smooth transition to plateau (inspiratory)
            expPausePreHoldPressure: null, // Pre-hold pressure for smooth transition (expiratory)
            expPauseActivationTime: 0, // When expiratory pause activated
            holdAlveolarRise: 0, // Equilibration baseline during exp hold: rises from 0 to auto-PEEP only after effort releases
            valveInertiaTime: 0.075, // Valve closure time constant (75ms)
            pauseActivationTime: 0, // Time when pause actually activated (for valve inertia)
            lastInspiratoryFlow: 0, // Track inspiratory flow for valve inertia capture
            skipBuiltInPauseTime: false,  // Flag to skip built-in pause time when releasing from manual hold
            pauseTimeToSkip: 0,           // Amount of pause time to skip
            manualHoldPlateauDisplayUntil: 0, // Show plateau measurement until this time (after manual inspiratory hold)
            pavHoldReleaseTime: null, // Time when PAV+ hold was released (for smooth decay)
            pavHoldReleasePressure: null, // Pressure at PAV+ hold release (for smooth decay)

            // Current Metrics
            currentMetrics: {
                pressure: 5,
                flow: 0,
                volume: 0
            },

            // Measured values (from actual breaths)
            measurements: {
                pip: 0,           // Peak inspiratory pressure (measured)
                plateau: 0,       // Plateau pressure (only for VC with pause)
                peep: 0,          // Measured PEEP (total PEEP including auto-PEEP)
                rate: 0,          // Actual respiratory rate (measured)
                tidalVolume: 0,   // Exhaled tidal volume from last breath
                minuteVent: 0,    // Minute ventilation
                p01: null         // P0.1 occlusion pressure (cmH2O) - only for triggered breaths
            },

            // P0.1 tracking
            p01TriggerTime: null,        // Time when trigger was detected
            p01PmusActiveAtTrigger: false, // Whether Pmus was active when trigger occurred
            p01PmusTimeAtTrigger: null,  // Where in Pmus cycle the trigger occurred
            p01MinPressure: null,        // Track minimum pressure in 100ms window (for cardiac-only triggers)
            p01Calculated: false,        // Whether P0.1 has been calculated for this breath

            // Tracking for measurements
            lastBreathTime: 0,
            breathCount: 0,
            breathStartTimes: [], // Rolling window of breath start times for accurate rate calculation
            breathVolumeHistory: [], // Rolling window of {time, volume} for minute ventilation calculation
            peakPressureThisBreath: 0,
            peakVolumeThisBreath: 0,
            // --- Work-share Responsive Pmus state ---
            wVentAccum: 0,        // cmH₂O·mL — running ∫(P_aw − PEEP)·dV during inspiration of current breath
            wPatientAccum: 0,     // cmH₂O·mL — running ∫Pmus·dV during inspiration of current breath
            lastVolumeForWork: 0, // mL — previous tick's lung volume, for dV
            wVentLastBreath: 0,   // J — final value from previous breath (after /10197 conversion)
            wPatientLastBreath: 0,// J — final value from previous breath
            wRef: null,           // J — reference vent work captured at scenario load / toggle-on / baseline edit (null = not yet captured)
            wRefArmed: false,     // After migration/toggle-on: skip the first breath end's W_vent (it may be partial) and capture wRef on the second
            wRefSamples: [],      // Buffer of post-anchor breath wVent values; wRef is set as the average of settled samples after dropping the first (transient) breath
            unloadFactor: 1.0,    // dimensionless — multiplier applied this breath
            plateauPressureThisBreath: 0,

            // Data arrays for charts (scrolling window)
            data: {
                time: [],
                pressure: [],
                pmus: [],  // Patient effort (negative pleural pressure)
                flow: [],
                volume: [],
                pressureTriggerMarkers: [],  // Trigger markers for pressure chart
                flowTriggerMarkers: []       // Trigger markers for flow chart
            },

            // Track min/max values for autoscaling
            breathMetrics: {
                pressureMin: [],
                pressureMax: [],
                flowMin: [],
                flowMax: [],
                volumeMin: [],
                volumeMax: [],
                maxBreaths: 2  // Track last 2 breaths for averaging
            },

            maxDataPoints: 600, // Max data points for display
            timeWindow: ((() => { const s = Math.max(window.innerWidth, window.innerHeight); return s < 1000 ? 7 : (s < 1300 ? 10 : 12); })()), // Time window in seconds — uses larger of width/height so orientation and browser chrome don't drop iPad-class devices into the small bucket; adjustable via slider
            updateInterval: 20, // ms (50 Hz update rate for smoother waveforms)
            simulationInterval: null,
            lastUpdateTime: null, // Track actual elapsed time
            lastWrappedTime: undefined, // Track last wrapped time to detect wrap-around
            tabHidden: false, // Track if browser tab is hidden to pause simulation

            initDataArrays() {
                const intervalS = this.updateInterval / 1000;
                const arraySize = Math.round(this.timeWindow / intervalS);

                this.data.time = [];
                this.data.pressure = [];
                this.data.pmus = [];
                this.data.flow = [];
                this.data.volume = [];

                for (let i = 0; i < arraySize; i++) {
                    const t = (i / arraySize) * this.timeWindow;
                    this.data.pressure.push({ x: t, y: null });
                    this.data.pmus.push({ x: t, y: null });
                    this.data.flow.push({ x: t, y: null });
                    this.data.volume.push({ x: t, y: null });
                }

                this.data.pressureTriggerMarkers = [];
                this.data.flowTriggerMarkers = [];
            },

            init() {
                this.initDataArrays();
                // Load shared scenario settings if present (from /scenario/{code} URL)
                if (this.sharedScenarioInitial) {
                    this.$nextTick(() => {
                        this.loadScenario({ settings: this.sharedScenarioInitial });
                    });
                }

                // Initialize pending settings as copies of current active settings
                // UI controls bind to pending, confirm button stages them, new breath applies them
                this.pendingSettings = JSON.parse(JSON.stringify(this.settings));
                this.pendingPatient = JSON.parse(JSON.stringify(this.patient));

                // Watch for mode changes and adjust defaults
                this.$watch('pendingSettings.mode', (newMode) => {
                    if (newMode === 'pressure_support') {
                        this.pendingPatient.airwayOpeningPressure = 0;
                    }
                    // Enable elastic recoil when switching modes with spont breathing on
                    if (this.pendingPatient.spontaneousBreathingEnabled) {
                        this.pendingPatient.elastanceRecoilEnabled = true;
                    }
                });

                // Watch for spontaneous breathing toggle
                this.$watch('pendingPatient.spontaneousBreathingEnabled', (enabled) => {
                    if (enabled) {
                        this.pendingPatient.airwayOpeningPressure = 0;
                        // Enable elastic recoil when spontaneous breathing is enabled
                        this.pendingPatient.elastanceRecoilEnabled = true;
                    }
                });

                // Keep pmusDuration synced to rise+hold+decay so the ~30 existing call sites
                // that read pmusDuration as the "active window" stay correct without surgery.
                const syncPmusDuration = () => {
                    const r = this.pendingPatient.pmusRiseTime ?? 0;
                    const h = this.pendingPatient.pmusHoldTime ?? 0;
                    const d = this.pendingPatient.pmusDecayTime ?? 0;
                    this.pendingPatient.pmusDuration = +(r + h + d).toFixed(3);
                };
                this.$watch('pendingPatient.pmusRiseTime', syncPmusDuration);
                this.$watch('pendingPatient.pmusHoldTime', syncPmusDuration);
                this.$watch('pendingPatient.pmusDecayTime', syncPmusDuration);

                // Task 6: Responsive Pmus W_ref invalidation triggers.
                // W_ref must be re-captured when:
                //   1. Scenario load — handled in Task 8 migration.
                //   2. responsivePmus toggled on — handled below.
                //   3. User edits a baseline Pmus parameter (amplitude / rise / hold / decay)
                //      from the patient panel — handled below.
                //   4. Patient changes (e.g., compliance, resistance, age) — NOT a trigger;
                //      compliance/resistance changes are PHYSIOLOGICAL changes the model should
                //      respond to, not user-intent re-baselining.
                //   5. Vent settings (PS, deltaP, etc.) — NOT a trigger; the whole point is to
                //      respond to support changes.
                //
                // Toggle ON: capture baseline + null wRef.
                // Toggle OFF: clear unload factor; baseline retained for re-toggle.
                this.$watch('pendingPatient.responsivePmus', (val, old) => {
                    if (this.isLoadingScenario) return;
                    if (val && !old) {
                        this.captureResponsiveBaseline();
                    } else if (!val && old) {
                        this.unloadFactor = 1.0;
                        this.wRef = null;
                        this.wRefArmed = false;
                        this.wRefSamples = [];
                    }
                });

                // Edits to baseline Pmus parameters from the panel propagate to the matching
                // baseline* field so they take effect immediately, but wRef and unloadFactor
                // are preserved. This lets an instructor adjust effort or shape mid-case
                // without snapping the live Pmus back to the newly-set reference value —
                // the current unload state is retained, so the visible amplitude is the new
                // baseline scaled by the existing unloadFactor.
                //
                // We watch *pending* values because edits land there before Confirm.
                const baselineFieldFor = {
                    pmusAmplitude: 'baselinePmusAmplitude',
                    pmusRiseTime:  'baselineRiseTime',
                    pmusHoldTime:  'baselineHoldTime',
                    pmusDecayTime: 'baselineDecayTime',
                };
                Object.entries(baselineFieldFor).forEach(([field, baselineKey]) => {
                    this.$watch(`pendingPatient.${field}`, (val) => {
                        if (this.isLoadingScenario) return;
                        if (!this.pendingPatient.responsivePmus) return;
                        const v = +val || 0;
                        this.pendingPatient[baselineKey] = v;
                        this.patient[baselineKey] = v;
                    });
                });



                // Watch for timeWindow changes and update chart axes
                this.$watch('timeWindow', (newTimeWindow) => {
                    if (chartInstances.pressure) {
                        // Update all chart x-axes to new timeWindow
                        chartInstances.pressure.options.scales.x.max = newTimeWindow;
                        chartInstances.pressure.options.scales.x.ticks.stepSize = newTimeWindow / 6;
                        chartInstances.pressure.update('none');

                        chartInstances.flow.options.scales.x.max = newTimeWindow;
                        chartInstances.flow.options.scales.x.ticks.stepSize = newTimeWindow / 6;
                        // Update zero line to span new time window
                        if (chartInstances.flow.data.datasets[2]) {
                            chartInstances.flow.data.datasets[2].data = [{x: 0, y: 0}, {x: newTimeWindow, y: 0}];
                        }
                        chartInstances.flow.update('none');

                        chartInstances.volume.options.scales.x.max = newTimeWindow;
                        chartInstances.volume.options.scales.x.ticks.stepSize = newTimeWindow / 6;
                        chartInstances.volume.update('none');

                        // Clear data to restart with new window
                        this.initDataArrays();
                        this.lastWrappedTime = undefined;
                    }
                });

                // Handle tab visibility changes to prevent waveform glitches
                // When tab is hidden, browser throttles setInterval but performance.now() keeps advancing
                // This causes huge deltaTime jumps when returning, corrupting the waveforms
                // Solution: Pause updates entirely when tab is hidden
                document.addEventListener('visibilitychange', () => {
                    if (document.visibilityState === 'hidden') {
                        // Tab is being hidden - pause simulation updates
                        this.tabHidden = true;
                    } else if (document.visibilityState === 'visible') {
                        // Tab is visible again - resume simulation
                        // Reset the timing reference to prevent large deltaTime jump
                        this.lastUpdateTime = performance.now();
                        this.tabHidden = false;
                    }
                });

                // Handle fullscreen changes (e.g., when user presses Escape)
                const handleFullscreenChange = () => {
                    const wasFullscreen = this.isFullscreen;
                    const fullscreenEl = document.fullscreenElement || document.webkitFullscreenElement;
                    this.isFullscreen = !!fullscreenEl;

                    if (this.isFullscreen && !wasFullscreen) {
                        // Entering fullscreen - save current height and auto-size
                        this.savedWaveformHeight = this.waveformHeight;
                        // Delay to allow browser to update viewport dimensions
                        setTimeout(() => {
                            this.autoSizeWaveforms();
                            this.$nextTick(() => this.resizeCharts());
                        }, 100);
                    } else if (!this.isFullscreen && wasFullscreen) {
                        // Exiting fullscreen - restore original height
                        if (this.savedWaveformHeight !== null) {
                            this.waveformHeight = this.savedWaveformHeight;
                            this.savedWaveformHeight = null;
                        }
                        this.$nextTick(() => this.resizeCharts());
                    } else {
                        // Resize charts after fullscreen change
                        this.$nextTick(() => this.resizeCharts());
                    }
                };
                document.addEventListener('fullscreenchange', handleFullscreenChange);
                document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

                // Delay initialization to ensure DOM is ready and Chart.js is loaded
                this.$nextTick(() => {
                    setTimeout(() => {
                        if (typeof Chart === 'undefined') {
                            console.error('Chart.js not loaded!');
                            return;
                        }
                        this.initializeCharts();
                        this.startSimulation();
                    }, 100);
                });
            },

            // === PENDING SETTINGS METHODS ===

            // Check if there are any pending changes (pending differs from active)
            hasPendingChanges() {
                return this.hasPendingSettingsChanges() || this.hasPendingPatientChanges();
            },

            // Check if there are pending ventilator setting changes
            hasPendingSettingsChanges() {
                if (!this.pendingSettings) return false;
                return JSON.stringify(this.pendingSettings) !== JSON.stringify(this.settings);
            },

            // Check if there are pending patient characteristic changes
            hasPendingPatientChanges() {
                if (!this.pendingPatient) return false;
                return JSON.stringify(this.pendingPatient) !== JSON.stringify(this.patient);
            },

            // Calculate expiratory time for pending settings (returns seconds, or 0 if no expiratory time)
            getPendingExpiratoryTime() {
                if (!this.pendingSettings) return 1; // Default to valid
                const mode = this.pendingSettings.mode;
                const rate = this.pendingSettings.rate || 12;
                const breathPeriod = 60 / rate;

                // PS mode doesn't have fixed timing - skip validation
                if (mode === 'pressure_support') return 1;

                let inspiratoryTime = 0;

                if (mode === 'volume_control') {
                    // VC: iTime calculated from flow and volume
                    const flowRateMLPerS = (this.pendingSettings.flow || 60) * 1000 / 60;
                    const tidalVolume = this.pendingSettings.tidalVolume || 500;
                    inspiratoryTime = this.pendingSettings.flowPattern === 'decelerating'
                        ? (2 * tidalVolume) / flowRateMLPerS
                        : tidalVolume / flowRateMLPerS;
                    // Add inspiratory pause
                    inspiratoryTime += this.pendingSettings.inspiratoryPause || 0;
                } else {
                    // PC and PRVC: use iTime directly
                    inspiratoryTime = this.pendingSettings.iTime || 1.0;
                }

                return breathPeriod - inspiratoryTime;
            },

            // Check if pending settings would result in invalid I:E ratio (no expiratory time)
            hasInvalidIERatio() {
                // Minimum expiratory time of 0.1 seconds (I:E ratio must be at least ~1:0.1)
                return this.getPendingExpiratoryTime() < 0.1;
            },

            // Check if we're waiting for an extended breath period due to mode change with slower rate
            isWaitingForExtendedBreath() {
                if (!this.hasConfirmedChanges || !this.stagedSettings) return false;
                const isModeChange = this.stagedSettings.mode !== this.settings.mode;
                const newRate = this.stagedSettings.rate;
                const currentRate = this.settings.rate;
                return isModeChange && newRate < currentRate;
            },

            // Confirm pending changes - stages them for application at end of next breath's inspiration
            confirmSettings() {
                if (!this.hasPendingChanges()) return;
                if (this.hasInvalidIERatio()) return; // Prevent confirmation with invalid I:E ratio

                // Track which type of changes are being confirmed
                this.hasConfirmedVentilatorChanges = this.hasPendingSettingsChanges();
                this.hasConfirmedPatientChanges = this.hasPendingPatientChanges();

                // Stage the pending settings for application at end of next breath's inspiration
                this.stagedSettings = JSON.parse(JSON.stringify(this.pendingSettings));
                this.stagedPatient = JSON.parse(JSON.stringify(this.pendingPatient));
                this.hasConfirmedChanges = true;
                // Record which breath we're on - settings apply after THIS breath ends
                this.settingsConfirmedAtBreathId = this.currentBreathId;
                this.settingsConfirmedAtTime = Date.now();

                // Mark settings as just confirmed (button changes to "Done")
                this.settingsJustConfirmed = true;

                // CPAP mode: apply settings immediately since there are no breath cycles
                // Check both current mode and pending mode - if either is CPAP, apply immediately
                const currentlyInCpap = this.settings.mode === 'pressure_support' && this.settings.pressureSupport === 0;
                const switchingToCpap = this.pendingSettings.mode === 'pressure_support' && this.pendingSettings.pressureSupport === 0;
                if (currentlyInCpap || switchingToCpap) {
                    this.applyStagedSettings();
                }


            },

            // Close settings panel after confirming (Done button)
            closeSettingsPanel() {
                this.showSettings = false;
                this.settingsJustConfirmed = false;
            },

            // Cancel pending changes - revert pending to match active
            cancelPendingChanges() {
                this.pendingSettings = JSON.parse(JSON.stringify(this.settings));
                this.pendingPatient = JSON.parse(JSON.stringify(this.patient));
            },

            // Check if there are previous vent settings to revert to
            hasPreviousVentSettings() {
                return this.previousVentSettings !== null;
            },

            // Revert to previous ventilator settings (loads them as pending for confirmation)
            revertToPreviousSettings() {
                if (!this.previousVentSettings) return;
                // Load previous settings as pending
                this.pendingSettings = JSON.parse(JSON.stringify(this.previousVentSettings));
            },

            // Toggle fullscreen mode for waveforms
            toggleFullscreen() {
                const el = document.getElementById('waveforms-container');
                if (!el) return;

                // Check if native fullscreen API is available and supported
                const fullscreenAvailable = document.fullscreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.msFullscreenEnabled;

                if (fullscreenAvailable && !this.isFullscreen) {
                    // Try native fullscreen first
                    const requestFullscreen = el.requestFullscreen ||
                        el.webkitRequestFullscreen ||
                        el.mozRequestFullScreen ||
                        el.msRequestFullscreen;

                    if (requestFullscreen) {
                        requestFullscreen.call(el).catch(() => {
                            // Native fullscreen failed, use CSS fallback
                            this.savedWaveformHeight = this.waveformHeight;
                            this.isFullscreen = true;
                            el.classList.add('fullscreen-fallback');
                            document.body.style.overflow = 'hidden';
                            this.autoSizeWaveforms();
                            this.$nextTick(() => this.resizeCharts());
                        });
                    }
                } else if (document.fullscreenElement || document.webkitFullscreenElement) {
                    // Exit native fullscreen
                    const exitFullscreen = document.exitFullscreen ||
                        document.webkitExitFullscreen ||
                        document.mozCancelFullScreen ||
                        document.msExitFullscreen;
                    if (exitFullscreen) {
                        exitFullscreen.call(document);
                    }
                } else {
                    // CSS fallback toggle
                    this.isFullscreen = !this.isFullscreen;
                    if (this.isFullscreen) {
                        this.savedWaveformHeight = this.waveformHeight;
                        el.classList.add('fullscreen-fallback');
                        document.body.style.overflow = 'hidden';
                        this.autoSizeWaveforms();
                    } else {
                        el.classList.remove('fullscreen-fallback');
                        document.body.style.overflow = '';
                        if (this.savedWaveformHeight !== null) {
                            this.waveformHeight = this.savedWaveformHeight;
                            this.savedWaveformHeight = null;
                        }
                    }
                    // Resize charts after toggle
                    this.$nextTick(() => {
                        this.resizeCharts();
                    });
                }
            },

            // Apply staged settings to active (called at end of breath's inspiration, after the confirmation breath)
            applyStagedSettings() {
                if (!this.hasConfirmedChanges || !this.stagedSettings || !this.stagedPatient) return;

                // Early-lock wRef if a settings change is about to apply
                // before stability-gated anchoring has locked. Without this,
                // the post-change breath's vent work would feed the anchor
                // and mask the user's change as part of the baseline,
                // suppressing the responsive reaction. Use the most recent
                // 3 samples when available (best estimate of current
                // pre-change steady state); otherwise drop sample[0] when
                // ≥2 samples exist, or fall back to the single sample.
                if (this.patient.responsivePmus &&
                    this.wRef === null &&
                    this.wRefSamples.length > 0) {
                    const samples = this.wRefSamples.length >= 3
                        ? this.wRefSamples.slice(-3)
                        : (this.wRefSamples.length > 1
                            ? this.wRefSamples.slice(1)
                            : this.wRefSamples);
                    this.wRef = samples.reduce((a, b) => a + b, 0) / samples.length;
                    this.wRefSamples = [];
                }

                // Save current vent settings for revert feature (only if vent settings are changing)
                if (JSON.stringify(this.stagedSettings) !== JSON.stringify(this.settings)) {
                    this.previousVentSettings = JSON.parse(JSON.stringify(this.settings));
                }

                // Store previous settings for comparison
                const previousPeep = this.settings.peep;
                const previousSpontEnabled = this.patient.spontaneousBreathingEnabled;
                const previousSpontRate = this.patient.spontaneousRate;
                const previousVentRate = this.settings.rate;
                const previousMode = this.settings.mode;
                const previousPressureSupport = this.settings.pressureSupport;

                // Apply staged settings to active (use Object.assign to preserve Alpine reactivity)
                Object.assign(this.settings, JSON.parse(JSON.stringify(this.stagedSettings)));
                Object.assign(this.patient, JSON.parse(JSON.stringify(this.stagedPatient)));
                // Explicitly set positivePmus to ensure reactivity (boolean properties can have issues)
                if (this.stagedPatient.positivePmus !== undefined) {
                    this.patient.positivePmus = this.stagedPatient.positivePmus;
                }

                // Task 8: under the work-share model, learner-mode vent setting changes do
                // NOT directly modify pmusAmplitude — the next breath's vent work feeds the
                // unload-factor loop and the displayed amplitude follows. Nothing to do here.

                // Calculate PEEP change and set up FRC transition if PEEP changed
                const peepDelta = this.settings.peep - previousPeep;
                if (peepDelta !== 0) {
                    // FRC change = effective PEEP change × compliance
                    // Positive delta = PEEP increased = FRC increases = less volume exhaled
                    // Negative delta = PEEP decreased = FRC decreases = more volume exhaled
                    //
                    // When AOP is present, only the portion of PEEP above AOP contributes to
                    // alveolar volume changes (below AOP, airways are closed)
                    const aop = this.patient.airwayOpeningPressure || 0;
                    const newPeep = this.settings.peep;

                    let effectivePeepDelta = peepDelta;
                    if (aop > 0) {
                        // Calculate effective PEEP values (clamped to AOP minimum)
                        const effectivePreviousPeep = Math.max(previousPeep, aop);
                        const effectiveNewPeep = Math.max(newPeep, aop);
                        effectivePeepDelta = effectiveNewPeep - effectivePreviousPeep;
                    }

                    this.peepTransitionTargetDelta = effectivePeepDelta * this.patient.compliance;

                    // Add recruited volume when PEEP decreases from ≥15
                    // Recruited volume represents de-recruitment of lung units that were opened by high PEEP
                    // This adds to the exhaled volume (makes peepTransitionTargetDelta more negative)
                    if (peepDelta < 0 && previousPeep >= 15 && this.patient.recruitedVolume > 0) {
                        this.peepTransitionTargetDelta -= this.patient.recruitedVolume;
                    }

                    // Store for exhaled Vt measurement: negate because negative FRC change = positive exhaled volume
                    this.peepTransitionVolumeForMeasurement = -this.peepTransitionTargetDelta;

                    this.peepTransitionActive = true;
                    this.peepTransitionStartVolume = this.currentMetrics.volume;
                    this.previousPeepBeforeChange = previousPeep;
                }

                // Clear breath history when breathing pattern changes significantly
                // This prevents rate calculation artifacts when switching between:
                // - Spontaneous (triggered) and passive breathing
                // - Significantly different spontaneous rates
                // - Significantly different ventilator rates
                const newSpontEnabled = this.patient.spontaneousBreathingEnabled;
                const newSpontRate = this.patient.spontaneousRate;
                const newVentRate = this.settings.rate;

                const spontToggled = previousSpontEnabled !== newSpontEnabled;
                const spontRateChanged = Math.abs(previousSpontRate - newSpontRate) >= 4;
                const ventRateChanged = Math.abs(previousVentRate - newVentRate) >= 4;

                if (spontToggled || spontRateChanged || ventRateChanged) {
                    // Clear breath history to avoid mixing different breathing patterns
                    this.breathStartTimes = [];
                    this.breathVolumeHistory = [];
                    // Initialize rate to the expected new rate for immediate feedback
                    this.measurements.rate = newSpontEnabled ? newSpontRate : newVentRate;
                }

                // CPAP mode: reset CPAP state variables
                // Note: Scales are calculated directly from physics in render loop
                const isCpapModeNow = this.settings.mode === 'pressure_support' && this.settings.pressureSupport === 0;
                const wasInCpap = previousMode === 'pressure_support' && previousPressureSupport === 0;
                if (isCpapModeNow) {
                    this.cpapCumulativeVolume = 0;
                    this.cpapPeakVolume = 0;
                    this.cpapInspStartVolume = 0;
                    this.cpapInInspiration = false;
                    this.cpapPmusWasActive = false;

                    // Entering CPAP: invalidate Responsive Pmus work-anchor. Without this,
                    // wRef stays anchored to PS-era vent work while wVentLastBreath drops
                    // to 0, so dW = -wRef saturates rawFactor and unloadFactor ramps over
                    // ~3-4 breaths — visible as truncated expiratory flow on the first
                    // few CPAP breaths until Pmus amplitude recovers.
                    if (!wasInCpap) {
                        this.wRef = null;
                        this.wRefArmed = false;
                        this.wRefSamples = [];
                        this.wVentAccum = 0;
                        this.wPatientAccum = 0;
                        this.lastVolumeForWork = this.integratedVolume;
                        this.unloadFactor = 1.0;
                    }
                }

                // Clear staged state
                this.stagedSettings = null;
                this.stagedPatient = null;
                this.hasConfirmedChanges = false;
                this.hasConfirmedVentilatorChanges = false;
                this.hasConfirmedPatientChanges = false;
                this.settingsConfirmedAtBreathId = null;
                this.settingsConfirmedAtTime = null;
                // Note: Don't reset settingsJustConfirmed here - keep Done button visible
                // until user clicks it or makes new changes

                // Ensure pending matches the new active settings (use Object.assign to preserve reactivity)
                Object.assign(this.pendingSettings, JSON.parse(JSON.stringify(this.settings)));
                Object.assign(this.pendingPatient, JSON.parse(JSON.stringify(this.patient)));
                // Explicitly set positivePmus for reactivity
                this.pendingPatient.positivePmus = this.patient.positivePmus;
            },

            // Backward-compatibility migrations for patientData arriving from saved
            // scenarios or built-in presets. Mutates patientData in place.
            // The Pmus timing migration relies on the fact that the legacy asymmetric
            // sine (peak at 65% of duration) is exactly two half-cosines joined at
            // the peak — so the legacy shape is reproduced losslessly by setting
            // rise = 0.65T, hold = 0, decay = 0.35T with half-cosine shapes.
            migratePatientData(patientData) {
                if (patientData.stressIndexReferencePeep !== undefined && patientData.stressIndexPreviousPeep === undefined) {
                    patientData.stressIndexPreviousPeep = patientData.stressIndexReferencePeep;
                    delete patientData.stressIndexReferencePeep;
                }
                if (patientData.lungElastanceRatio !== undefined && patientData.recoilStrength === undefined) {
                    patientData.recoilStrength = 100 - patientData.lungElastanceRatio;
                    patientData.elastanceRecoilEnabled = true;
                    delete patientData.lungElastanceRatio;
                }
                // Match both `undefined` (key absent) and `null` (PHP `?? null` fallback) so old
                // saved scenarios that pre-date the rise/hold/decay fields still get migrated.
                if (patientData.pmusRiseTime == null && patientData.pmusDuration != null) {
                    const T = patientData.pmusDuration;
                    patientData.pmusRiseTime = +(0.65 * T).toFixed(3);
                    patientData.pmusHoldTime = 0;
                    patientData.pmusDecayTime = +(0.35 * T).toFixed(3);
                    patientData.pmusRiseShape = 'half-cosine';
                    patientData.pmusDecayShape = 'half-cosine';
                }
            },

            // Method to load a scenario from Livewire
            loadScenario(data) {
                // Set guard to prevent watchers from triggering during load
                this.isLoadingScenario = true;

                // Handle both formats: direct {settings, patient} or wrapped {settings: {settings, patient}}
                const settingsData = data.settings?.settings || data.settings;
                const patientData = data.settings?.patient || data.patient;

                // Check if this is just a UI toggle (showPmusTrace or hideMeasurements, no actual ventilator settings)
                // In this case, just update the flags without resetting waveforms
                const showPmusTrace = data.settings?.showPmusTrace ?? data.showPmusTrace;
                const hideMeasurements = data.settings?.hideMeasurements ?? data.hideMeasurements;
                const hasActualSettings = settingsData && settingsData.mode !== undefined;
                const hasActualPatient = patientData && patientData.compliance !== undefined;
                if (!hasActualSettings && !hasActualPatient) {
                    if (showPmusTrace !== undefined) this.showPmusTrace = showPmusTrace;
                    if (hideMeasurements !== undefined) this.hideMeasurements = hideMeasurements;
                    this.isLoadingScenario = false;
                    return;
                }

                // Check for patient-only scenario load
                // This updates only patient characteristics without resetting waveforms
                const patientOnly = data.patientOnly ?? data.settings?.patientOnly ?? false;
                if (patientOnly && patientData) {
                    this.migratePatientData(patientData);

                    // Update patient settings directly (instant application)
                    Object.assign(this.patient, patientData);
                    if (patientData.positivePmus !== undefined) {
                        this.patient.positivePmus = patientData.positivePmus;
                    }

                    // Task 8: legacy scenario migration — convert old { responsivePmus, pmusDrive,
                    // responsivePmusSensitivity } into the new work-share model. The legacy
                    // pmusDrive was the patient's effort *at zero support* with a linear
                    // unload formula. We re-anchor to the *current* support level by simply
                    // snapshotting the displayed pmusAmplitude as the new baseline; the unload
                    // factor will naturally compute from the next breath's vent work.
                    if (this.patient.responsivePmus && (this.patient.pmusAmplitude || 0) > 0) {
                        this.patient.baselinePmusAmplitude = this.patient.pmusAmplitude;
                        this.patient.baselineRiseTime      = this.patient.pmusRiseTime  || 0;
                        this.patient.baselineHoldTime      = this.patient.pmusHoldTime  || 0;
                        this.patient.baselineDecayTime     = this.patient.pmusDecayTime || 0;
                        // Skip-first-breath anchoring: the in-flight breath at load is
                        // likely partial; using its wVentLastBreath as wRef would make
                        // every subsequent full breath look like "more work" and
                        // produce a phantom unload. Skip the first breath, anchor on
                        // the second.
                        this.wRef = null;
                        this.wRefArmed = false;
                        this.wRefSamples = [];
                        this.unloadFactor = 1.0;
                        this.wVentAccum = 0;
                        this.wPatientAccum = 0;
                        this.lastVolumeForWork = this.integratedVolume;
                    }
                    // pmusDrive is intentionally not migrated; it had no analogue in the new model.
                    delete this.patient.pmusDrive;

                    // Sync pending to match (no staging, instant application)
                    this.pendingPatient = JSON.parse(JSON.stringify(this.patient));
                    this.pendingPatient.positivePmus = this.patient.positivePmus;



                    this.isLoadingScenario = false;
                    return;
                }

                // Update settings
                if (settingsData) {
                    Object.assign(this.settings, settingsData);
                }

                // Update patient characteristics
                if (patientData) {
                    this.migratePatientData(patientData);
                    Object.assign(this.patient, patientData);
                    // Explicitly set positivePmus to ensure reactivity
                    if (patientData.positivePmus !== undefined) {
                        this.patient.positivePmus = patientData.positivePmus;
                    }

                    // Task 8: legacy scenario migration — convert old { responsivePmus, pmusDrive,
                    // responsivePmusSensitivity } into the new work-share model. The legacy
                    // pmusDrive was the patient's effort *at zero support* with a linear
                    // unload formula. We re-anchor to the *current* support level by simply
                    // snapshotting the displayed pmusAmplitude as the new baseline; the unload
                    // factor will naturally compute from the next breath's vent work.
                    if (this.patient.responsivePmus && (this.patient.pmusAmplitude || 0) > 0) {
                        this.patient.baselinePmusAmplitude = this.patient.pmusAmplitude;
                        this.patient.baselineRiseTime      = this.patient.pmusRiseTime  || 0;
                        this.patient.baselineHoldTime      = this.patient.pmusHoldTime  || 0;
                        this.patient.baselineDecayTime     = this.patient.pmusDecayTime || 0;
                        // Skip-first-breath anchoring: the in-flight breath at load is
                        // likely partial; using its wVentLastBreath as wRef would make
                        // every subsequent full breath look like "more work" and
                        // produce a phantom unload. Skip the first breath, anchor on
                        // the second.
                        this.wRef = null;
                        this.wRefArmed = false;
                        this.wRefSamples = [];
                        this.unloadFactor = 1.0;
                        this.wVentAccum = 0;
                        this.wPatientAccum = 0;
                        this.lastVolumeForWork = this.integratedVolume;
                    }
                    // pmusDrive is intentionally not migrated; it had no analogue in the new model.
                    delete this.patient.pmusDrive;
                }

                // Apply UI flags if provided (from teacher broadcast)
                if (showPmusTrace !== undefined) {
                    this.showPmusTrace = showPmusTrace;
                }
                if (hideMeasurements !== undefined) {
                    this.hideMeasurements = hideMeasurements;
                }

                // Sync pending settings to match active (scenarios apply immediately)
                this.pendingSettings = JSON.parse(JSON.stringify(this.settings));
                this.pendingPatient = JSON.parse(JSON.stringify(this.patient));

                // Clear any staged changes
                this.stagedSettings = null;
                this.stagedPatient = null;
                this.hasConfirmedChanges = false;
                this.hasConfirmedVentilatorChanges = false;
                this.hasConfirmedPatientChanges = false;
                this.settingsConfirmedAtBreathId = null;
                this.settingsConfirmedAtTime = null;

                // Reset PEEP transition state
                this.peepTransitionActive = false;
                this.previousPeepBeforeChange = null;
                this.peepTransitionTargetDelta = 0;
                this.peepTransitionCurrentOffset = 0;
                this.peepTransitionFlowOffset = 0;
                this.peepTransitionVolumeForMeasurement = 0;
                this.volumeFrcOffset = 0;

                // Reset simulation state for clean scenario load
                this.currentTime = 0;
                this.breathPhase = 'expiration';
                // Set breathStartTime to end of breath cycle so first frame starts a new breath cleanly at PEEP/0 flow
                this.breathStartTime = -(60 / this.settings.rate);
                this.skipBuiltInPauseTime = false;
                this.pauseTimeToSkip = 0;
                this.initDataArrays();
                this.smoothedDisplayVolume = 0;

                // Reset patient breathing rhythm tracking
                // Critical: must reset these when currentTime resets to avoid negative timing calculations
                this.patientBreathCycleStart = 0;
                this.lastSpontaneousRate = 0;

                // Reset entrainment state
                this.lastMandatoryBreathTime = 0;
                this.mandatoryBreathsSinceEntrain = 0;
                this.lastEntrainedEffortTime = 0;
                this.currentPmusTime = -1;

                // Reset measurement tracking to avoid stale/negative values after time reset
                this.lastBreathTime = 0;
                this.breathCount = 0;
                this.breathStartTimes = [];
                this.breathVolumeHistory = [];
                this.peakPressureThisBreath = 0;
                this.peakVolumeThisBreath = 0;
                this.wVentAccum = 0;
                this.wPatientAccum = 0;
                this.lastVolumeForWork = this.integratedVolume;
                this.plateauPressureThisBreath = 0;
                this.manualHoldPlateauDisplayUntil = 0;

                // Reset P0.1 tracking
                this.p01TriggerTime = null;
                this.p01PmusActiveAtTrigger = false;
                this.p01PmusTimeAtTrigger = null;
                this.p01MinPressure = null;
                this.p01Calculated = false;

                // Reset PRVC working pressure to initial estimate based on compliance and target
                // Starting pressure = Target Volume / Compliance (gives a reasonable initial pressure)
                if (this.settings.mode === 'prvc') {
                    const estimatedPressure = this.settings.prvcTargetVolume / this.patient.compliance;
                    this.prvcWorkingPressure = Math.min(this.settings.prvcPmax, Math.max(3, estimatedPressure));
                }

                // Reset displayed measurements
                this.measurements = {
                    pip: 0,
                    plateau: 0,
                    peep: this.settings.peep, // Initialize to set PEEP
                    rate: this.settings.rate, // Initialize to set rate
                    tidalVolume: 0,
                    minuteVent: 0,
                    p01: null
                };

                // CPAP mode: reset CPAP state variables
                // Note: Scales are calculated directly from physics in render loop
                const isCpapModeLoaded = this.settings.mode === 'pressure_support' && this.settings.pressureSupport === 0;
                if (isCpapModeLoaded) {
                    this.cpapCumulativeVolume = 0;
                    this.cpapPeakVolume = 0;
                    this.cpapInspStartVolume = 0;
                    this.cpapInInspiration = false;
                    this.cpapPmusWasActive = false;
                }

                // Force chart update and resize
                this.$nextTick(() => {
                    if (chartInstances.pressure) chartInstances.pressure.resize();
                    if (chartInstances.flow) chartInstances.flow.resize();
                    if (chartInstances.volume) chartInstances.volume.resize();
                });



                // Clear the guard after all updates are done
                this.$nextTick(() => {
                    this.isLoadingScenario = false;
                });
            },

            // Method to apply settings without resetting waveforms (for learner sync on settings_update)
            // This stages settings for application at next breath, similar to confirmSettings()
            applySettings(data) {
                const settingsData = data.settings?.settings || data.settings;
                const patientData = data.settings?.patient || data.patient;
                const showPmusTrace = data.settings?.showPmusTrace ?? data.showPmusTrace;
                const hideMeasurements = data.settings?.hideMeasurements ?? data.hideMeasurements;

                // Apply UI flags immediately
                if (showPmusTrace !== undefined) this.showPmusTrace = showPmusTrace;
                if (hideMeasurements !== undefined) this.hideMeasurements = hideMeasurements;

                // If only UI flags (no actual settings), return early
                const hasActualSettings = settingsData && settingsData.mode !== undefined;
                const hasActualPatient = patientData && patientData.compliance !== undefined;
                if (!hasActualSettings && !hasActualPatient) return;

                // Stage settings for application at next breath (same as confirmSettings)
                // Always initialize both stagedSettings and stagedPatient - applyStagedSettings requires both
                if (hasActualSettings) {
                    this.stagedSettings = JSON.parse(JSON.stringify(settingsData));
                    // Merge with current settings for any missing fields
                    Object.keys(this.settings).forEach(key => {
                        if (this.stagedSettings[key] === undefined) {
                            this.stagedSettings[key] = this.settings[key];
                        }
                    });
                } else {
                    // No settings provided - use current active settings unchanged
                    this.stagedSettings = JSON.parse(JSON.stringify(this.settings));
                }

                if (hasActualPatient) {
                    // Backward compatibility: map old property name to new
                    if (patientData.stressIndexReferencePeep !== undefined && patientData.stressIndexPreviousPeep === undefined) {
                        patientData.stressIndexPreviousPeep = patientData.stressIndexReferencePeep;
                        delete patientData.stressIndexReferencePeep;
                    }
                    this.stagedPatient = JSON.parse(JSON.stringify(patientData));
                    // Merge with current patient for any missing fields
                    Object.keys(this.patient).forEach(key => {
                        if (this.stagedPatient[key] === undefined) {
                            this.stagedPatient[key] = this.patient[key];
                        }
                    });
                } else {
                    // No patient provided - use current active patient unchanged
                    this.stagedPatient = JSON.parse(JSON.stringify(this.patient));
                }

                // Mark as having confirmed changes to trigger application at next breath
                this.hasConfirmedChanges = true;
                this.settingsConfirmedAtBreathId = this.currentBreathId;
                this.settingsConfirmedAtTime = Date.now();

                // Mark as just confirmed so UI shows "Applying..." instead of Confirm/Cancel
                // This is important for learners receiving pushed settings from teacher
                this.settingsJustConfirmed = true;

                // CPAP mode: apply settings immediately since there are no breath cycles
                // Check both current mode and staged mode - if either is CPAP, apply immediately
                const currentlyInCpap = this.settings.mode === 'pressure_support' && this.settings.pressureSupport === 0;
                const switchingToCpap = this.stagedSettings?.mode === 'pressure_support' && this.stagedSettings?.pressureSupport === 0;
                if (currentlyInCpap || switchingToCpap) {
                    this.applyStagedSettings();
                    return; // applyStagedSettings already syncs pending with active
                }

                // Update pending to match staged for UI consistency (use Object.assign to preserve reactivity)
                if (this.stagedSettings) Object.assign(this.pendingSettings, JSON.parse(JSON.stringify(this.stagedSettings)));
                if (this.stagedPatient) {
                    Object.assign(this.pendingPatient, JSON.parse(JSON.stringify(this.stagedPatient)));
                    // Explicitly set positivePmus for reactivity
                    if (this.stagedPatient.positivePmus !== undefined) {
                        this.pendingPatient.positivePmus = this.stagedPatient.positivePmus;
                    }
                }
            },


            // Method to reset to default values for current mode
            resetToDefaults() {
                const currentMode = this.settings.mode;

                // Reset to default settings
                this.settings = {
                    mode: currentMode,
                    peep: 5,
                    deltaPressure: 12,
                    iTime: 1.0,
                    tidalVolume: 500,
                    flow: 60,
                    flowPattern: 'constant',
                    inspiratoryPause: 0.3,
                    prvcTargetVolume: 500,
                    prvcPmax: 35,
                    pavSupportPercent: 50,
                    pavPmax: 35,
                    pressureSupport: 8,
                    flowCyclePercent: 25,
                    riseTime: 0.1,
                    triggerType: 'flow',
                    pressureTrigger: -1,
                    flowTrigger: 2,
                    rate: 24,
                    fio2: 0.40
                };

                // Reset to default patient characteristics
                // For PS and PAV+ modes, spontaneous breathing must be enabled
                const isSpontMode = currentMode === 'pressure_support' || currentMode === 'pav_plus';
                this.patient = {
                    patientSex: null,
                    patientHeight: null,
                    compliance: 50,
                    resistance: 10,
                    recruitedVolume: 0,
                    spontaneousBreathingEnabled: isSpontMode,
                    spontaneousRate: 20,
                    pmusAmplitude: isSpontMode ? 8 : 0,
                    pmusDuration: 0.9,
                    pmusRiseTime: 0.40,
                    pmusHoldTime: 0.10,
                    pmusDecayTime: 0.50,
                    pmusRiseShape: 'smoothstep',
                    pmusDecayShape: 'smoothstep',
                    pmusRateCoupling: false,
                    pmusRateCouplingThreshold: 25,
                    pmusOffset: 0,
                    effort: 0,
                    airwayOpeningPressure: 0,
                    stressIndexEnabled: true,
                    stressIndex: 1.0,
                    stressIndexPreviousPeep: 5,
                    upperInflectionEnabled: false,
                    upperInflectionPoint: 30,
                    entrainmentEnabled: false,
                    entrainmentRatio: '1:1',
                    cardiacOscillationsEnabled: false,
                    heartRate: 80,
                    naturalVariabilityEnabled: false,
                    variabilityAmount: 0.10,
                    flowLimitationEnabled: false,
                    flowLimitSeverity: 'moderate',
                    criticalClosingPressure: 7,
                    flowLimitK: 10,
                    peepStentingFactor: 0.8,
                    // Enable elastic recoil when spont breathing is on in pressure modes
                    elastanceRecoilEnabled: isSpontMode,  // PS/PAV+ modes have spont breathing on by default
                    recoilStrength: 5,
                    responsivePmus: false,
                    responsivePmusSensitivity: 70,
                    baselinePmusAmplitude: 0,
                    baselineRiseTime: 0,
                    baselineHoldTime: 0,
                    baselineDecayTime: 0,
                };

                // Sync pending settings to match active (resets apply immediately)
                this.pendingSettings = JSON.parse(JSON.stringify(this.settings));
                this.pendingPatient = JSON.parse(JSON.stringify(this.patient));

                // Clear any staged changes
                this.stagedSettings = null;
                this.stagedPatient = null;
                this.hasConfirmedChanges = false;
                this.hasConfirmedVentilatorChanges = false;
                this.hasConfirmedPatientChanges = false;
                this.settingsConfirmedAtBreathId = null;
                this.settingsConfirmedAtTime = null;

                // Reset PEEP transition state
                this.peepTransitionActive = false;
                this.previousPeepBeforeChange = null;
                this.peepTransitionTargetDelta = 0;
                this.peepTransitionCurrentOffset = 0;
                this.peepTransitionFlowOffset = 0;
                this.peepTransitionVolumeForMeasurement = 0;
                this.volumeFrcOffset = 0;

                // Reset simulation state
                this.currentTime = 0;
                this.breathPhase = 'expiration';
                // Set breathStartTime to end of breath cycle so first frame starts a new breath cleanly at PEEP/0 flow
                this.breathStartTime = -(60 / this.settings.rate);
                this.skipBuiltInPauseTime = false;
                this.pauseTimeToSkip = 0;
                this.breathCount = 0;
                this.initDataArrays();
                this.smoothedDisplayVolume = 0;

                // Reset patient breathing rhythm tracking
                // Critical: must reset these when currentTime resets to avoid negative timing calculations
                this.patientBreathCycleStart = 0;
                this.lastSpontaneousRate = 0;

                // Reset entrainment state
                this.lastMandatoryBreathTime = 0;
                this.mandatoryBreathsSinceEntrain = 0;
                this.lastEntrainedEffortTime = 0;
                this.currentPmusTime = -1;


            },

            // Method to resize charts (called after Livewire updates)
            resizeCharts() {
                this.$nextTick(() => {
                    if (chartInstances.pressure) chartInstances.pressure.resize();
                    if (chartInstances.flow) chartInstances.flow.resize();
                    if (chartInstances.volume) chartInstances.volume.resize();
                });
            },

            // Auto-size waveforms to maximize screen usage in fullscreen mode
            autoSizeWaveforms() {
                const viewportHeight = window.innerHeight;
                // Account for: fullscreen header (~56px), container padding (32px),
                // three chart card paddings (3 * 32px), three chart titles (3 * 28px),
                // gaps between cards (~24px), footer/attribution text (~60px)
                const overhead = 56 + 32 + (3 * 32) + (3 * 28) + 24 + 60;
                const availableHeight = viewportHeight - overhead;
                // Divide by 3 charts and clamp to reasonable range
                let optimalHeight = Math.floor(availableHeight / 3);
                optimalHeight = Math.max(100, Math.min(600, optimalHeight));
                this.waveformHeight = optimalHeight;
            },

            initializeCharts() {
                // Prevent re-initialization
                if (chartInstances.pressure !== null) {
                    return;
                }

                // Custom plugin to draw crosshair line
                const crosshairPlugin = {
                    id: 'crosshair',
                    afterDraw: (chart) => {
                        // Only draw crosshair when simulation is frozen
                        if (this.isRunning) {
                            return;
                        }

                        let x = null;

                        // Get crosshair position from the chart's own active elements
                        // This ensures the line aligns with the hover dot on THIS chart
                        const activeElements = chart.getActiveElements();
                        if (activeElements && activeElements.length > 0) {
                            x = activeElements[0].element.x;
                        }

                        // Draw the crosshair line if we have an x position
                        if (x !== null) {
                            const ctx = chart.ctx;
                            const topY = chart.scales.y.top;
                            const bottomY = chart.scales.y.bottom;

                            // Draw vertical line
                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(x, topY);
                            ctx.lineTo(x, bottomY);
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = '#999';
                            ctx.setLineDash([5, 5]);
                            ctx.stroke();
                            ctx.restore();
                        }
                    }
                };

                // Register the plugin
                if (!Chart.registry.plugins.get('crosshair')) {
                    Chart.register(crosshairPlugin);
                }

                const chartConfig = (label, color, yMin, yMax, unit) => ({
                    type: 'line',
                    data: {
                        datasets: [{
                            label: label,
                            data: [],
                            borderColor: color,
                            backgroundColor: color + '20',
                            borderWidth: 2,
                            tension: 0.15,
                            cubicInterpolationMode: 'monotone',  // Smooth without overshooting peaks
                            pointRadius: 0,
                            pointHoverRadius: (context) => {
                                // Only show hover points when simulation is frozen
                                return this.isRunning ? 0 : 4;
                            },
                            pointHoverBackgroundColor: color,
                            pointHoverBorderColor: '#fff',
                            pointHoverBorderWidth: 2,
                            fill: false,  // Disable fill to prevent double-shading during wrap
                            spanGaps: false,
                            segment: {
                                // Hide line when x jumps backwards (wrap point)
                                borderColor: ctx => {
                                    if (!ctx.p0 || !ctx.p1) return undefined;
                                    const xDiff = ctx.p1.parsed.x - ctx.p0.parsed.x;
                                    // If x goes backwards at all (negative diff), we wrapped - hide segment
                                    return xDiff < -0.1 ? 'transparent' : undefined;
                                }
                            }
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: false,
                        interaction: {
                            mode: 'index',
                            intersect: false
                        },
                        scales: {
                            x: {
                                type: 'linear',
                                display: true,
                                title: {
                                    display: true,
                                    text: 'Time (s)'
                                },
                                min: 0,
                                max: this.timeWindow,
                                bounds: 'ticks',
                                beginAtZero: true,
                                grace: 0,  // No grace/padding
                                ticks: {
                                    stepSize: this.timeWindow / 6,
                                    min: 0,
                                    max: this.timeWindow,
                                    callback: function (value, index, ticks) {
                                        return value.toFixed(0);
                                    }
                                }
                            },
                            y: {
                                display: true,
                                title: {
                                    display: true,
                                    text: unit
                                },
                                ...(yMin !== null && {min: yMin}),
                                ...(yMax !== null && {max: yMax}),
                                grace: '5%',
                                ticks: {
                                    callback: function (value) {
                                        return Math.round(value);
                                    }
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                enabled: false, // Disabled - values shown in chart titles instead
                                mode: 'index',
                                intersect: false,
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                padding: 10,
                                displayColors: false,
                                callbacks: {
                                    title: function (context) {
                                        return 'Time: ' + context[0].parsed.x.toFixed(2) + ' s';
                                    },
                                    label: function (context) {
                                        return label + ': ' + context.parsed.y.toFixed(2) + ' ' + unit;
                                    }
                                }
                            }
                        },
                        onHover: (event, activeElements, chart) => {
                            // Skip all hover processing while simulation is running
                            // Prevents conflicting chart updates that cause rendering artifacts
                            if (this.isRunning) return;

                            // Only show crosshair when simulation is frozen (not running)
                            if (activeElements.length > 0) {
                                chart.canvas.style.cursor = 'crosshair';

                                // Get the data index from the active element
                                const dataIndex = activeElements[0].index;

                                // Get time value from the data point
                                const dataPoint = chart.data.datasets[0]?.data[dataIndex];
                                if (dataPoint) {
                                    this.crosshairTime = dataPoint.x;
                                }

                                // Get values from each chart at this data index
                                if (chartInstances.pressure?.data.datasets[0]?.data[dataIndex]) {
                                    this.crosshairPressure = chartInstances.pressure.data.datasets[0].data[dataIndex].y;
                                }
                                if (chartInstances.flow?.data.datasets[0]?.data[dataIndex]) {
                                    this.crosshairFlow = chartInstances.flow.data.datasets[0].data[dataIndex].y;
                                }
                                if (chartInstances.volume?.data.datasets[0]?.data[dataIndex]) {
                                    this.crosshairVolume = chartInstances.volume.data.datasets[0].data[dataIndex].y;
                                }
                                // Get Pmus value from pressure chart's second dataset (when visible)
                                if (this.showPmusTrace && this.patient.spontaneousBreathingEnabled && chartInstances.pressure?.data.datasets[1]?.data[dataIndex]) {
                                    this.crosshairPmus = chartInstances.pressure.data.datasets[1].data[dataIndex].y;
                                } else {
                                    this.crosshairPmus = null;
                                }

                                // Update all other charts to show crosshair at same data index
                                Object.keys(chartInstances).forEach(key => {
                                    const otherChart = chartInstances[key];
                                    if (otherChart && otherChart !== chart) {
                                        otherChart.canvas.style.cursor = 'crosshair';

                                        // Set active elements by data index - crosshair will align with each chart's own element
                                        const activeElementsToSet = [];
                                        otherChart.data.datasets.forEach((dataset, datasetIndex) => {
                                            if (dataset.data[dataIndex]) {
                                                activeElementsToSet.push({
                                                    datasetIndex: datasetIndex,
                                                    index: dataIndex
                                                });
                                            }
                                        });

                                        otherChart.setActiveElements(activeElementsToSet);
                                        otherChart.update('none');
                                    }
                                });
                            } else {
                                // Clear crosshair values and cursor from ALL charts
                                this.crosshairTime = null;
                                this.crosshairPressure = null;
                                this.crosshairFlow = null;
                                this.crosshairVolume = null;
                                this.crosshairPmus = null;

                                Object.keys(chartInstances).forEach(key => {
                                    const otherChart = chartInstances[key];
                                    if (otherChart) {
                                        otherChart.canvas.style.cursor = 'default';
                                        otherChart.setActiveElements([]);
                                        if (otherChart.tooltip) {
                                            otherChart.tooltip.setActiveElements([], {x: 0, y: 0});
                                        }
                                        otherChart.update('none');
                                    }
                                });
                            }
                        }
                    }
                });

                try {
                    const pressureCanvas = document.getElementById('pressureChart');
                    const flowCanvas = document.getElementById('flowChart');
                    const volumeCanvas = document.getElementById('volumeChart');

                    // Pressure chart with Pmus overlay
                    const pressureConfig = chartConfig('Pressure', '#3b82f6', null, null, 'cmH₂O');
                    pressureConfig.data.datasets.push({
                        label: 'Neg. Pmus',
                        data: [],
                        borderColor: '#ef4444',  // Red
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        tension: 0.15,
                        cubicInterpolationMode: 'monotone',  // Smooth without overshooting peaks
                        pointRadius: 0,
                        pointHoverRadius: (context) => {
                            // Only show hover points when simulation is frozen
                            return this.isRunning ? 0 : 4;
                        },
                        pointHoverBackgroundColor: '#ef4444',
                        pointHoverBorderColor: '#fff',
                        pointHoverBorderWidth: 2,
                        fill: false,
                        spanGaps: false,
                        segment: {
                            // Hide line when x jumps backwards (wrap point)
                            borderColor: ctx => {
                                if (!ctx.p0 || !ctx.p1) return undefined;
                                const xDiff = ctx.p1.parsed.x - ctx.p0.parsed.x;
                                // If x goes backwards at all (negative diff), we wrapped - hide segment
                                return xDiff < -0.1 ? 'transparent' : undefined;
                            }
                        }
                    });
                    pressureConfig.options.plugins.legend.display = true;
                    pressureConfig.options.plugins.legend.position = 'top';
                    pressureConfig.options.plugins.legend.labels = {
                        boxWidth: 20,
                        padding: 10,
                        font: {size: 11}
                    };
                    // Enable display colors for multi-dataset tooltip
                    pressureConfig.options.plugins.tooltip.displayColors = true;

                    // Add trigger marker dataset to pressure chart (red triangles)
                    pressureConfig.data.datasets.push({
                        label: 'Trigger',
                        data: [],
                        type: 'scatter',
                        pointStyle: 'triangle',
                        pointRadius: 8,
                        pointHoverRadius: 10,
                        backgroundColor: '#ef4444',
                        borderColor: '#ef4444',
                        borderWidth: 0,
                        rotation: 0, // Triangle pointing up
                        showLine: false
                    });

                    chartInstances.pressure = new Chart(pressureCanvas, pressureConfig);

                    // Create flow config and add trigger marker dataset
                    const flowConfig = chartConfig('Flow', '#10b981', null, null, 'L/min');
                    flowConfig.data.datasets.push({
                        label: 'Trigger',
                        data: [],
                        type: 'scatter',
                        pointStyle: 'triangle',
                        pointRadius: 8,
                        pointHoverRadius: 10,
                        backgroundColor: '#ef4444',
                        borderColor: '#ef4444',
                        borderWidth: 0,
                        rotation: 0, // Triangle pointing up
                        showLine: false
                    });
                    // Add zero line dataset (dotted line at y=0)
                    flowConfig.data.datasets.push({
                        label: 'Zero',
                        data: [{x: 0, y: 0}, {x: this.timeWindow, y: 0}],
                        borderColor: 'rgba(156, 163, 175, 0.5)', // Gray with transparency
                        borderWidth: 1,
                        borderDash: [4, 4], // Dotted line
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        fill: false,
                        tension: 0,
                        order: 10 // Draw behind other datasets
                    });
                    // Exclude zero line and trigger markers from tooltip
                    flowConfig.options.plugins.tooltip.filter = (tooltipItem) => {
                        return tooltipItem.datasetIndex === 0; // Only show main flow dataset
                    };

                    chartInstances.flow = new Chart(flowCanvas, flowConfig);

                    chartInstances.volume = new Chart(
                        volumeCanvas,
                        chartConfig('Volume', '#f59e0b', null, null, 'mL')
                    );

                    // Disable pointer events on canvases while simulation is running
                    // This prevents Chart.js from processing any mouse events internally
                    Object.values(chartInstances).forEach(c => {
                        if (c) c.canvas.style.pointerEvents = 'none';
                    });

                    // Add mouseleave event listeners to clear crosshairs when mouse leaves chart area
                    const clearAllCharts = () => {
                        if (this.isRunning) return;
                        // Clear crosshair values displayed in chart titles
                        this.crosshairTime = null;
                        this.crosshairPressure = null;
                        this.crosshairFlow = null;
                        this.crosshairVolume = null;

                        Object.keys(chartInstances).forEach(key => {
                            const chart = chartInstances[key];
                            if (chart) {
                                chart.canvas.style.cursor = 'default';
                                chart.setActiveElements([]);
                                if (chart.tooltip) {
                                    chart.tooltip.setActiveElements([], {x: 0, y: 0});
                                }
                                chart.update('none');
                            }
                        });
                    };

                    pressureCanvas.addEventListener('mouseleave', clearAllCharts);
                    flowCanvas.addEventListener('mouseleave', clearAllCharts);
                    volumeCanvas.addEventListener('mouseleave', clearAllCharts);
                } catch (error) {
                    console.error('Error initializing charts:', error);
                }
            },

            startSimulation() {
                this.lastUpdateTime = performance.now();
                this.simulationInterval = setInterval(() => {
                    // Skip updates when tab is hidden to prevent waveform corruption
                    if (this.isRunning && !this.tabHidden) {
                        this.updateSimulation();
                    } else if (!this.isRunning && this.hasConfirmedChanges && this.settingsConfirmedAtTime) {
                        // When frozen, still apply settings after timeout (no breath timing to wait for)
                        const timeSinceConfirmed = Date.now() - this.settingsConfirmedAtTime;
                        if (timeSinceConfirmed > 1000) { // 1 second timeout when frozen
                            this.applyStagedSettings();
                        }
                    }
                }, this.updateInterval);
            },

            updateSimulation() {
                // Use actual elapsed time for accurate real-time simulation
                const now = performance.now();
                let deltaTime = (now - this.lastUpdateTime) / 1000; // Convert to seconds
                this.lastUpdateTime = now;

                // Cap deltaTime to prevent large jumps when tab was hidden
                // Browser throttles setInterval when tab is hidden, causing accumulated time
                // If more than 100ms has passed, just use 100ms to keep waveforms smooth
                const maxDeltaTime = 0.1; // 100ms max
                if (deltaTime > maxDeltaTime) {
                    deltaTime = maxDeltaTime;
                }

                this.currentTime += deltaTime;

                // Timeout fallback: if settings are confirmed but no breath has occurred in X seconds,
                // apply them anyway. This handles cases where patient can't trigger (weak Pmus, CPAP, etc.)
                // Timeout is based on the longest possible wait: remaining current breath + full next breath
                // This ensures PEEP changes wait for the next breath's inspiration to complete
                if (this.hasConfirmedChanges && this.settingsConfirmedAtTime && this.stagedSettings) {
                    const timeSinceConfirmed = Date.now() - this.settingsConfirmedAtTime;

                    // Calculate timeout based on breath period - need to wait for:
                    // 1. Current breath to finish (up to 1 full breath period)
                    // 2. Next breath's inspiration to complete (roughly half a breath period)
                    // Use the longer of current or new rate to be safe
                    const currentRate = this.settings.rate;
                    const newRate = this.stagedSettings.rate || currentRate;
                    const effectiveRate = Math.min(currentRate, newRate); // Use slower rate
                    const breathPeriodMs = (60 / effectiveRate) * 1000;

                    // Timeout = 1.5 breath periods + 1 second buffer
                    // This covers: rest of current breath + next breath's inspiration + buffer
                    const timeoutMs = (breathPeriodMs * 1.5) + 1000;

                    if (timeSinceConfirmed > timeoutMs) {
                        this.applyStagedSettings();
                    }
                }

                // Reset patient breathing variables if spontaneous breathing is disabled
                if (!this.patient.spontaneousBreathingEnabled) {
                    this.patientBreathCycleStart = 0;
                    this.lastSpontaneousRate = 0;
                    this.pressureAtTrigger = 0;
                    this.flowAtTrigger = 0;
                }

                // === PATIENT'S BREATHING RHYTHM ===
                // Can be either independent (normal spontaneous) or entrained (reverse triggering)
                let patientRespiratoryEffort = 0;

                // Determine if entrainment should be active
                // Entrainment only applies to control modes (PC/VC), not PS
                // Also, if patient's spontaneous rate > ventilator rate, patient triggers instead (no entrainment)
                const isControlMode = this.settings.mode === 'pressure_control' || this.settings.mode === 'volume_control' || this.settings.mode === 'prvc';
                const ventilatorRate = this.settings.rate;
                const patientWouldTrigger = this.patient.spontaneousRate > ventilatorRate;
                // During an active hold maneuver, bypass entrainment and let the patient's underlying
                // spontaneous rate drive Pmus — clinicians use holds to probe for patient drive, which
                // would be invisible if entrainment suppressed spontaneous efforts while mandatory
                // breaths are blocked.
                const holdManeuverActive = this.activePauseType === 'inspiratory' || this.activePauseType === 'expiratory';
                const useEntrainment = this.patient.entrainmentEnabled && isControlMode && !patientWouldTrigger && !holdManeuverActive;

                // Store the current Pmus time for use by all mechanics calculations
                // This is the time into the current Pmus effort, or -1 if not in an effort
                this.currentPmusTime = -1;

                if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                    if (useEntrainment) {
                        // === ENTRAINED BREATHING (Reverse Triggering) ===
                        // Patient effort is triggered BY the ventilator breath, delayed by pmusOffset
                        // The entrainment tracking (mandatory breath detection, ratio counting) happens
                        // in the "new breath" detection section below

                        // Clear any independent-mode state so the next fallback (e.g., a hold) re-initializes
                        // from lastEntrainedEffortTime instead of using stale scheduling.
                        this.nextSpontaneousPmusTime = 0;
                        this.spontaneousBreathScheduled = false;

                        // Calculate when the entrained effort should start
                        // Pmus starts at: lastEntrainedEffortTime (which is set based on mandatory breath + offset)
                        const timeSinceEntrainedEffort = this.currentTime - this.lastEntrainedEffortTime;

                        // Always calculate Pmus from the waveform - let calculatePmus handle boundaries
                        // This ensures smooth transitions even when frame timing skips the exact end point
                        if (this.lastEntrainedEffortTime > 0 && timeSinceEntrainedEffort >= 0) {
                            this.currentPmusTime = timeSinceEntrainedEffort;
                            // calculatePmus returns 0 for times > duration, so no hard cutoff needed
                            patientRespiratoryEffort = this.calculatePmus(this.currentPmusTime);
                        }
                    } else {
                        // === INDEPENDENT BREATHING (Normal spontaneous) ===
                        // Patient has their own neurological respiratory drive, independent of ventilator
                        // With natural variability enabled, each breath interval varies

                        // Calculate base breath period
                        const baseBreathPeriod = 60 / this.patient.spontaneousRate;

                        // Initialize tracking variables if not set
                        if (this.nextSpontaneousPmusTime === undefined || this.nextSpontaneousPmusTime === 0) {
                            // If we're falling back from entrainment (e.g., during a hold), anchor the
                            // next independent effort to the last entrained effort + spontaneous interval
                            // so Pmus fires at a natural cadence rather than immediately on hold entry.
                            if (holdManeuverActive && this.patient.entrainmentEnabled && this.lastEntrainedEffortTime > 0) {
                                let nextEffort = this.lastEntrainedEffortTime + baseBreathPeriod;
                                // If one or more spontaneous intervals already elapsed since the last
                                // entrained effort, advance by whole periods so Pmus starts cleanly
                                // at the beginning of its wave rather than mid-effort.
                                // Actual Pmus onset happens at (nextEffort - pmusOffset); advance
                                // while that onset is already in the past.
                                while (nextEffort - this.patient.pmusOffset <= this.currentTime) {
                                    nextEffort += baseBreathPeriod;
                                }
                                this.nextSpontaneousPmusTime = nextEffort;
                            } else {
                                this.nextSpontaneousPmusTime = this.currentTime;
                            }
                            this.spontaneousBreathScheduled = false;
                            // Prime lastSpontaneousRate so the rate-change check below does not
                            // spuriously reset nextSpontaneousPmusTime to currentTime on this same
                            // frame (which would fire Pmus mid-wave at hold activation).
                            this.lastSpontaneousRate = this.patient.spontaneousRate;
                        }

                        // Detect if spontaneous rate changed - restart the cycle
                        if (this.patient.spontaneousRate !== this.lastSpontaneousRate) {
                            this.lastSpontaneousRate = this.patient.spontaneousRate;
                            this.nextSpontaneousPmusTime = this.currentTime;
                            this.spontaneousBreathScheduled = false;
                        }

                        // Check if we're in the Pmus effort window
                        const timeSincePmusStart = this.currentTime - this.nextSpontaneousPmusTime + this.patient.pmusOffset;

                        // Always calculate Pmus from the waveform - let calculatePmus handle boundaries
                        // This ensures smooth transitions even when frame timing skips the exact end point
                        if (timeSincePmusStart >= 0) {
                            this.currentPmusTime = timeSincePmusStart;
                            // calculatePmus returns 0 for times > duration, so no hard cutoff needed
                            patientRespiratoryEffort = this.calculatePmus(this.currentPmusTime);

                            // Save effort start time for tracking
                            if (timeSincePmusStart < this.patient.pmusDuration) {
                                this.lastPmusEffortStart = this.nextSpontaneousPmusTime - this.patient.pmusOffset;
                                this.spontaneousBreathScheduled = false;
                            }
                        }

                        // Schedule next breath after current effort ends
                        if (timeSincePmusStart >= this.patient.pmusDuration && !this.spontaneousBreathScheduled) {
                            // Calculate interval for next breath with variability
                            const intervalFactor = this.patient.naturalVariabilityEnabled
                                ? this.breathVariability.spontaneousIntervalFactor
                                : 1.0;
                            const variableBreathPeriod = baseBreathPeriod * intervalFactor;

                            // Schedule next breath
                            this.nextSpontaneousPmusTime = this.nextSpontaneousPmusTime + variableBreathPeriod;
                            this.spontaneousBreathScheduled = true;

                            // Pre-generate variability factor for the NEXT breath
                            if (this.patient.naturalVariabilityEnabled) {
                                this.breathVariability.spontaneousIntervalFactor =
                                    Math.max(0.7, Math.min(1.3, this.gaussianRandom(1.0, this.patient.variabilityAmount)));
                            }
                        }
                    }
                } else {
                    // Spontaneous breathing disabled - reset
                    this.patientBreathCycleStart = 0;
                    this.lastSpontaneousRate = 0;
                    patientRespiratoryEffort = 0;
                }

                // Calculate breath cycle timing based on mode
                let breathPeriod, inspirationTime, pauseTime, expirationTime;

                if (this.settings.mode === 'pressure_control') {
                    breathPeriod = 60 / this.settings.rate;
                    inspirationTime = this.settings.iTime;
                    pauseTime = 0;
                    expirationTime = breathPeriod - inspirationTime;
                } else if (this.settings.mode === 'prvc') {
                    // PRVC uses same timing as PC (iTime based)
                    breathPeriod = 60 / this.settings.rate;
                    inspirationTime = this.settings.iTime;
                    pauseTime = 0;
                    expirationTime = breathPeriod - inspirationTime;
                } else if (this.settings.mode === 'volume_control') {
                    breathPeriod = 60 / this.settings.rate;
                    // In VC, inspiratory time is determined by VT / flow
                    // For constant flow: Ti = VT / Flow
                    // For decelerating (descending ramp): Ti = 2 × VT / Peak Flow (average flow is half of peak)
                    const flowRateMLPerS = this.settings.flow * 1000 / 60; // Convert L/min to mL/s
                    if (this.settings.flowPattern === 'decelerating') {
                        inspirationTime = (2 * this.settings.tidalVolume) / flowRateMLPerS;
                    } else {
                        inspirationTime = this.settings.tidalVolume / flowRateMLPerS;
                    }
                    pauseTime = this.settings.inspiratoryPause;
                    expirationTime = breathPeriod - inspirationTime - pauseTime;
                } else if (this.settings.mode === 'pressure_support' || this.settings.mode === 'pav_plus') {
                    // PS/PAV+ mode: breath timing based on patient's spontaneous rate
                    breathPeriod = 60 / this.patient.spontaneousRate;
                    inspirationTime = this.patient.pmusDuration; // Determined by Pmus duration
                    pauseTime = 0;
                    expirationTime = breathPeriod - inspirationTime;

                    // Initialize breath timing on first update to be near trigger window
                    if (this.breathStartTime === 0 && this.currentTime < 0.1) {
                        // Start with breathStartTime such that we're 0.15s away from trigger window
                        // This gives time for the simulation to stabilize before first trigger
                        const triggerWindow = 0.1; // Typical trigger window
                        this.breathStartTime = -(breathPeriod - triggerWindow - 0.15);
                    }

                    // Initialize next spontaneous breath time if needed
                    if (this.nextSpontaneousBreathTime === 0) {
                        this.nextSpontaneousBreathTime = this.currentTime + breathPeriod;
                    }
                }

                // Apply deferred pause time skip from releasing manual inspiratory hold
                // This must happen BEFORE timeInBreath calculation so the adjustment takes effect
                if (this.skipBuiltInPauseTime && this.pauseTimeToSkip > 0) {
                    this.breathStartTime -= this.pauseTimeToSkip;
                    this.skipBuiltInPauseTime = false;
                    this.pauseTimeToSkip = 0;
                }

                let timeInBreath = (this.currentTime - this.breathStartTime);

                // Determine breath phase and detect new breath
                let isNewBreath = false;
                let triggeredBreath = false;
                let previousBreathPhase = this.breathPhase; // Track for transition detection

                // Calculate patient effort that causes trigger (during late expiration)
                // This MUST be calculated BEFORE mechanics calculation
                // Patient's respiratory effort is calculated independently above and just used here
                let triggerEffort = 0;

                // CPAP mode (PS = 0): no triggering, continuous pressure maintenance
                const isCpapMode = this.settings.mode === 'pressure_support' && this.settings.pressureSupport === 0;

                if (this.settings.mode === 'pressure_support' && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.breathPhase === 'expiration' && !isCpapMode) {
                    // PS mode (not CPAP) - patient's effort is always present during expiration based on their independent rhythm
                    triggerEffort = patientRespiratoryEffort;
                } else if (this.settings.mode === 'pav_plus' && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.breathPhase === 'expiration') {
                    // PAV+ mode - patient's effort is always present during expiration based on their independent rhythm
                    triggerEffort = patientRespiratoryEffort;
                } else if (this.settings.mode === 'pressure_control' && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                    // PC mode with Pmus - patient's effort is always present based on their independent rhythm
                    // During expiration, this effort can trigger a breath if it meets trigger criteria
                    triggerEffort = patientRespiratoryEffort;
                } else if (this.settings.mode === 'volume_control' && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                    // VC mode with Pmus - patient's effort is always present based on their independent rhythm
                    // During expiration, this effort can trigger a breath if it meets trigger criteria
                    triggerEffort = patientRespiratoryEffort;
                } else if (this.settings.mode === 'prvc' && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                    // PRVC mode with Pmus - same as PC mode, patient's effort can trigger breaths
                    triggerEffort = patientRespiratoryEffort;
                }

                // Calculate current mechanics WITH trigger effort applied
                const currentMechanics = this.calculateRespiratoryMechanics(timeInBreath, inspirationTime, pauseTime, expirationTime, triggerEffort);

                // Apply cardiac oscillations to flow and pressure
                // Cardiogenic oscillations are most prominent during expiration when baseline flow is near zero
                // These oscillations can auto-trigger the ventilator with sensitive flow trigger settings
                const cardiacOsc = this.calculateCardiacOscillation();
                currentMechanics.flow += cardiacOsc.flowOscillation;
                currentMechanics.pressure += cardiacOsc.pressureOscillation;

                // Task 1: accumulate inspiratory work integrals for Responsive Pmus feedback.
                // Use lung volume (peakVolumeThisBreath tracks integratedVolume); compute dV from integratedVolume.
                this.accumulateWorkThisTick(currentMechanics.pressure, patientRespiratoryEffort || 0, this.integratedVolume);

                // Track inspiratory flow for valve inertia during manual hold
                // This captures the flow BEFORE the breath transitions to pause/expiration
                if (this.breathPhase === 'inspiration' && currentMechanics.flow > 0) {
                    this.lastInspiratoryFlow = currentMechanics.flow;
                }

                // Check for trigger during expiration (patient-initiated breath)
                // NEVER trigger during expiratory pause maneuver (active or requested)
                // NEVER trigger during PEEP transition - pressure/flow values are in flux and can cause false triggers
                // NEVER trigger in CPAP mode - continuous pressure maintenance, no discrete breaths
                const expiratoryPauseCurrentlyActive = this.activePauseType === 'expiratory';
                const expiratoryPauseRequested = this.expiratoryPauseActive; // Button is held, waiting to activate
                // Pre-compute corrected expiratory flow for this frame (matches display path)
                // This eliminates the one-frame lag that caused the trigger to fire late
                const currentCorrectedFlow = (this.breathPhase === 'expiration')
                    ? this.computeCorrectedExpiratoryFlow(inspirationTime, pauseTime, patientRespiratoryEffort)
                    : null;

                if (this.breathPhase === 'expiration' && timeInBreath > 0.1 && !expiratoryPauseCurrentlyActive && !expiratoryPauseRequested && !isCpapMode) {
                    // Simple trigger detection: does airway pressure drop below threshold?
                    let triggerConditionMet = false;

                    if (this.settings.triggerType === 'pressure') {
                        // Pressure trigger: airway pressure drops below (PEEP - trigger threshold)
                        const triggerThreshold = Math.abs(this.settings.pressureTrigger);
                        const pressureDrop = this.settings.peep - currentMechanics.pressure;

                        if (pressureDrop >= triggerThreshold) {
                            triggerConditionMet = true;
                        }
                    } else if (this.settings.triggerType === 'flow') {
                        // Flow trigger: use corrected flow (matches display) for accurate trigger timing
                        if (currentCorrectedFlow >= this.settings.flowTrigger) {
                            triggerConditionMet = true;
                        }
                    }

                    // Trigger immediately when condition is met (no delay)
                    if (triggerConditionMet) {
                        triggeredBreath = true;
                        this.breathWasTriggered = true; // Mark this breath as patient-triggered
                        // Store the pressure and flow at trigger for smooth transition to inspiration
                        this.pressureAtTrigger = currentMechanics.pressure;
                        this.flowAtTrigger = currentCorrectedFlow; // Capture current frame's displayed flow

                        // Start P0.1 tracking - store trigger time and Pmus state
                        this.p01TriggerTime = this.currentTime;
                        this.p01PmusActiveAtTrigger = this.currentPmusTime >= 0; // Was Pmus active at trigger?
                        this.p01PmusTimeAtTrigger = this.currentPmusTime; // Where in Pmus cycle trigger occurred
                        this.p01MinPressure = currentMechanics.pressure; // Initialize min pressure tracking
                        this.p01Calculated = false;

                        // Record trigger marker for visualization
                        const wrappedTime = this.currentTime % this.timeWindow;
                        if (this.pendingSettings.triggerType === 'pressure') {
                            this.data.pressureTriggerMarkers.push({x: wrappedTime, y: null}); // y set in updateCharts
                        } else {
                            this.data.flowTriggerMarkers.push({x: wrappedTime, y: null}); // y set in updateCharts
                        }
                    }
                }

                // For PS mode with patient effort, only start breaths on trigger (patient-driven)
                // For PS mode WITHOUT patient effort, no breaths are delivered (apnea)
                // For other modes, use backup timer to ensure minimum rate
                // NEVER start new breath if EXPIRATORY pause is active OR button is held during expiration
                // This blocks mandatory breaths during the hold and prevents the race condition
                // where a new breath starts at breathPeriod before the hold activates at 5×tau
                // Allow new breath if INSPIRATORY pause is active (we want the breath to happen so we can pause it)
                const expiratoryPauseManeuverActive = this.activePauseType === 'expiratory' ||
                    (this.expiratoryPauseActive && this.breathPhase === 'expiration');
                let shouldStartNewBreath = false;
                if (!expiratoryPauseManeuverActive) {
                    if (isCpapMode) {
                        // CPAP mode: no discrete breaths, never start new breath cycle
                        shouldStartNewBreath = false;
                    } else if (this.settings.mode === 'pressure_support' || this.settings.mode === 'pav_plus') {
                        // PS/PAV+ mode: breaths ONLY on patient trigger, no backup rate
                        // If spontaneous breathing is disabled or no effort, apnea occurs
                        shouldStartNewBreath = triggeredBreath;
                    } else {
                        // Control modes (PC/VC/PRVC): trigger or backup timer
                        // When there's a pending mode change with a slower rate, use the new (longer)
                        // breath period so the full new cycle time elapses before the new mode starts
                        let effectiveBreathPeriod = breathPeriod;
                        if (this.hasConfirmedChanges && this.stagedSettings) {
                            const isModeChange = this.stagedSettings.mode !== this.settings.mode;
                            const newRate = this.stagedSettings.rate;
                            const currentRate = this.settings.rate;
                            // If switching to a slower rate, use the new (longer) breath period
                            if (isModeChange && newRate < currentRate) {
                                effectiveBreathPeriod = 60 / newRate;
                            }
                        }
                        shouldStartNewBreath = triggeredBreath || timeInBreath >= effectiveBreathPeriod;
                    }
                }

                if (shouldStartNewBreath) {
                    // Apply staged settings at start of new breath for:
                    // 1. Mode changes - should wait until after expiration completes
                    // 2. VC timing parameters (flow, tidal volume, flow pattern, pause) - these affect
                    //    inspiratory timing and must be applied at breath start to avoid phase transition issues
                    // Other setting changes (PEEP, pressures, etc.) are applied at end of inspiration
                    if (this.hasConfirmedChanges && this.currentBreathId >= this.settingsConfirmedAtBreathId) {
                        const isModeChange = this.stagedSettings && this.stagedSettings.mode !== this.settings.mode;
                        const isVcTimingChange = this.settings.mode === 'volume_control' && this.stagedSettings && (
                            this.stagedSettings.flow !== this.settings.flow ||
                            this.stagedSettings.tidalVolume !== this.settings.tidalVolume ||
                            this.stagedSettings.flowPattern !== this.settings.flowPattern ||
                            this.stagedSettings.inspiratoryPause !== this.settings.inspiratoryPause
                        );
                        if (isModeChange || isVcTimingChange) {
                            this.applyStagedSettings();
                        }
                    }

                    // Increment breath ID - this marks a NEW breath starting (ON state)
                    this.currentBreathId++;

                    // Generate new variability factors for this breath (if enabled)
                    this.generateBreathVariability();

                    // Reset volume baseline if flagged from previous PEEP transition
                    // This normalizes the waveform to 0 after showing the transient EELV change
                    // MUST happen BEFORE PEEP finalization so the flag set below takes effect next breath
                    if (this.resetVolumeOffsetOnNextBreath) {
                        this.volumeFrcOffset = 0;
                        this.resetVolumeOffsetOnNextBreath = false;
                    }

                    // Finalize any active PEEP transition before starting new breath
                    // If transition didn't complete during expiration, finalize it now
                    // Note: peepTransitionVolumeForMeasurement is already set when transition started (in applyStagedSettings)
                    if (this.peepTransitionActive) {
                        this.volumeFrcOffset += this.peepTransitionTargetDelta;
                        this.peepTransitionActive = false;
                        this.previousPeepBeforeChange = null;
                        this.peepTransitionTargetDelta = 0;
                        this.peepTransitionCurrentOffset = 0;
                        this.peepTransitionFlowOffset = 0;
                        // Flag to reset baseline on NEXT breath (after this breath displays the EELV change)
                        this.resetVolumeOffsetOnNextBreath = true;
                    }

                    // Check if Pmus has finished before starting new breath
                    if (this.pmusStartTime > 0 && this.patient.spontaneousBreathingEnabled) {
                        const pmusTime = this.currentTime - this.pmusStartTime;
                        if (pmusTime > this.patient.pmusDuration) {
                            // Pmus has ended, safe to reset
                            this.pmusStartTime = 0;
                        }
                    }

                    // Capture pressure at the start of the breath so the inspiratory rise begins
                    // from the actual end-expiratory pressure (including any auto-PEEP from
                    // incomplete exhalation). Without this, time-triggered breaths visually snap
                    // down to set PEEP, mimicking a trigger deflection during passive ventilation.
                    // Patient-triggered breaths already set pressureAtTrigger when the trigger fired.
                    if (!triggeredBreath) {
                        this.pressureAtTrigger = currentMechanics.pressure;
                        this.flowAtTrigger = 0;
                    }

                    // Capture measurements from completed breath
                    // Always update these regardless of whether breath was triggered/stacked
                    // This ensures accurate measurements during breath stacking scenarios
                    this.measurements.pip = this.peakPressureThisBreath;
                    // Task 1: capture per-breath work integrals (cmH2O·mL → J via /10197).
                    this.wVentLastBreath    = this.wVentAccum / 10197;
                    this.wPatientLastBreath = this.wPatientAccum / 10197;
                    this.updateUnloadFactor();
                    this.measurements.plateau = this.plateauPressureThisBreath;
                    // Measured PEEP is the baseline pressure at end-expiration
                    // Don't capture trigger deflection - if pressure is below set PEEP by less than
                    // the trigger threshold, it's likely from triggering effort, not true auto-PEEP
                    const triggerThreshold = Math.abs(this.settings.pressureTrigger || 1);
                    const pressureAtBreathStart = this.currentMetrics.pressure;
                    if (pressureAtBreathStart >= this.settings.peep - triggerThreshold && pressureAtBreathStart < this.settings.peep) {
                        // Pressure is in the trigger deflection zone - use set PEEP
                        this.measurements.peep = this.settings.peep;
                    } else {
                        // Pressure is at or above set PEEP (possible auto-PEEP) or well below (unusual)
                        this.measurements.peep = pressureAtBreathStart;
                    }
                    // Exhaled tidal volume = volume change from peak to end of breath
                    // peakVolumeThisBreath tracks peak of integratedVolume (TRUE lung volume at peak)
                    // residualAtBreathEnd is integratedVolume at end (TRUE lung volume remaining)
                    // Exhaled = peakVolume - residualAtBreathEnd
                    // At equilibrium: exhaled = (residual + tidal) - residual = tidal volume
                    // During breath stacking: exhaled = peak - highResidual = small value (most volume retained)
                    const residualAtBreathEnd = this.integratedVolume;
                    const exhaledTidalVolume = Math.max(0, this.peakVolumeThisBreath - residualAtBreathEnd);
                    // Include PEEP transition volume to capture FRC changes during PEEP adjustments
                    this.measurements.tidalVolume = exhaledTidalVolume + this.peepTransitionVolumeForMeasurement;

                    // === RESPIRATORY RATE & MINUTE VENTILATION CALCULATION ===
                    // Use rolling window for accurate measurement regardless of breath stacking
                    const rateWindowSeconds = 8; // Use last 8 seconds of breath data (faster response)
                    const windowCutoff = this.currentTime - rateWindowSeconds;

                    // Minimum interval between recorded breaths to prevent rate spikes during transitions
                    // This prevents very short intervals (e.g., from timing glitches) from causing
                    // the rate calculation to spike to unreasonable values (like 90 bpm)
                    // Only apply to time-triggered breaths - patient-triggered breaths are always legitimate
                    const minIntervalSeconds = 0.8; // Corresponds to max ~75 breaths/min
                    const lastRecordedBreath = this.breathStartTimes.length > 0
                        ? this.breathStartTimes[this.breathStartTimes.length - 1]
                        : -Infinity;
                    const timeSinceLastRecorded = this.currentTime - lastRecordedBreath;

                    // Record breath if:
                    // 1. Patient triggered it (always count triggered breaths - includes breath stacking)
                    // 2. OR enough time has passed since last recorded breath (time-triggered breaths)
                    if (triggeredBreath || timeSinceLastRecorded >= minIntervalSeconds) {
                        this.breathStartTimes.push(this.currentTime);
                        this.breathVolumeHistory.push({
                            time: this.currentTime,
                            volume: exhaledTidalVolume // Use the exhaled volume calculated above
                        });
                    }

                    // Remove data older than the window
                    this.breathStartTimes = this.breathStartTimes.filter(t => t >= windowCutoff);
                    this.breathVolumeHistory = this.breathVolumeHistory.filter(b => b.time >= windowCutoff);

                    // Calculate rate from breath count in window
                    // Need at least 2 breaths to calculate a rate
                    if (this.breathStartTimes.length >= 2) {
                        const oldestBreathInWindow = this.breathStartTimes[0];
                        const newestBreathInWindow = this.breathStartTimes[this.breathStartTimes.length - 1];
                        const windowDuration = newestBreathInWindow - oldestBreathInWindow;

                        if (windowDuration > 0) {
                            // Rate = (number of intervals) / (window duration in minutes)
                            const breathIntervals = this.breathStartTimes.length - 1;
                            let calculatedRate = (breathIntervals / windowDuration) * 60;

                            // Apply sanity bounds to prevent physiologically unreasonable displayed rates
                            // Min ~4 bpm (severe bradypnea), Max ~60 bpm (extreme tachypnea)
                            // This prevents display artifacts during scenario transitions
                            calculatedRate = Math.max(4, Math.min(60, calculatedRate));

                            this.measurements.rate = calculatedRate;
                        }
                    } else if (this.breathStartTimes.length === 1 && this.lastBreathTime > 0) {
                        // Only one breath in window - estimate from last interval
                        const lastInterval = this.currentTime - this.lastBreathTime;
                        if (lastInterval > 0 && lastInterval < 10) {
                            let calculatedRate = 60 / lastInterval;
                            // Apply same sanity bounds
                            calculatedRate = Math.max(4, Math.min(60, calculatedRate));
                            this.measurements.rate = calculatedRate;
                        }
                    }

                    // Calculate minute ventilation from displayed VT and rate
                    // MV = VT (mL) × Rate (bpm) / 1000 → L/min
                    this.measurements.minuteVent = (this.measurements.tidalVolume * this.measurements.rate) / 1000;

                    // Reset PEEP transition measurement volume after breath completes
                    this.peepTransitionVolumeForMeasurement = 0;

                    this.lastBreathTime = this.currentTime;
                    this.breathCount++;

                    // Capture residual volume from ACTUAL integratedVolume at end of expiration
                    // This ensures consistency: whatever integratedVolume is at end of expiration
                    // becomes the residual for next breath, so displayedVolume (integratedVolume - residual)
                    // correctly reaches 0 at equilibrium.
                    //
                    // Previous approach used exponential formula, but this doesn't account for
                    // flow limitation and other modifications applied during frame-by-frame integration.
                    const trueLungVolume = this.integratedVolume;

                    if (trueLungVolume > 10) { // More than 10mL remaining = incomplete exhalation
                        this.residualVolume = trueLungVolume;

                        // Determine if this is breath-stacking vs air-trapping based on % exhaled
                        // Breath-stacking: < 50% of volume was exhaled (two breaths delivered in one effort)
                        // Air-trapping: >= 50% was exhaled (incomplete exhalation due to short expiratory time)
                        const percentExhaled = this.peakVolumeThisBreath > 0
                            ? (this.peakVolumeThisBreath - this.currentMetrics.volume) / this.peakVolumeThisBreath
                            : 1; // Default to air-trapping if no peak volume recorded
                        this.isBreathStacking = percentExhaled < 0.5;

                        // For air-trapping (not breath-stacking), reset smoothed display volume
                        // This prevents EWMA smoothing from causing a gradual transition from residual to 0
                        if (!this.isBreathStacking) {
                            this.smoothedDisplayVolume = 0;
                        }
                    } else {
                        // Complete exhalation occurred, reset residual
                        this.residualVolume = 0;
                        this.isBreathStacking = false;
                    }

                    // Update stress index based on PEEPtotal changes (applied PEEP + auto-PEEP)
                    this.updateStressIndexFromPeepTotal();

                    // PRVC Mode: Adjust working pressure based on exhaled volume
                    // Use exhaled tidal volume (VTE) for feedback, not peak inspiratory volume
                    // This is how real PRVC works - it measures what was actually exhaled
                    // With air trapping, peak inspiratory might hit target but VTE is lower
                    if (this.settings.mode === 'prvc') {
                        const deliveredVolume = exhaledTidalVolume;
                        const targetVolume = this.settings.prvcTargetVolume;
                        const tolerance = targetVolume * 0.03; // 3% tolerance band for tighter volume targeting

                        if (deliveredVolume < targetVolume - tolerance) {
                            // Volume too low - increase pressure
                            // Larger deficit = larger adjustment (up to 3 cmH2O)
                            const deficit = (targetVolume - deliveredVolume) / targetVolume;
                            const adjustment = Math.min(3, Math.max(1, deficit * 5));
                            this.prvcWorkingPressure = Math.min(
                                this.settings.prvcPmax,
                                this.prvcWorkingPressure + adjustment
                            );
                        } else if (deliveredVolume > targetVolume + tolerance) {
                            // Volume too high - decrease pressure
                            // Larger excess = larger adjustment (up to 3 cmH2O)
                            const excess = (deliveredVolume - targetVolume) / targetVolume;
                            const adjustment = Math.min(3, Math.max(1, excess * 5));
                            this.prvcWorkingPressure = Math.max(
                                3, // Minimum working pressure of 3 cmH2O
                                this.prvcWorkingPressure - adjustment
                            );
                        }
                        // If within tolerance band, no adjustment needed
                    }

                    // Reset peak tracking for new breath
                    this.peakPressureThisBreath = 0;
                    this.peakVolumeThisBreath = 0;
                    this.wVentAccum = 0;
                    this.wPatientAccum = 0;
                    this.lastVolumeForWork = this.integratedVolume;
                    this.plateauPressureThisBreath = 0;
                    this.pmusWasActiveThisBreath = false; // Reset recoil tracking
                    this.pmusWasActiveDuringInspiration = false; // Reset inspiration pmus tracking
                    // Note: breathWasTriggered was already set at trigger detection (line 3673)
                    // Only reset it for time-triggered (non-patient-triggered) breaths
                    if (!triggeredBreath) {
                        this.breathWasTriggered = false;
                    }
                    this.lastInspiratoryFlow = 0; // Reset for valve inertia tracking

                    // Note: P0.1 tracking is NOT reset here - it persists until calculated
                    // The trigger detection will overwrite values when a new trigger occurs

                    this.breathStartTime = this.currentTime;
                    this.breathPhase = 'inspiration';
                    this.peakInspiratoryFlow = 0; // Reset peak flow for PS mode
                    this.psEffortActive = false; // Reset PS ineffective effort tracking
                    this.psEffortVolume = 0;
                    this.psEffortExhaleStart = 0;
                    this.psEffortExhaleVolume = 0;
                    this.inspirationEndTime = null; // Reset PS cycle-off time
                    this.endInspiratoryVolume = 0; // Reset end-inspiratory volume
                    this.endInspiratoryPressure = 0; // Reset end-inspiratory pressure
                    this.skipBuiltInPauseTime = false; // Clear any pending pause time skip
                    this.pauseTimeToSkip = 0;
                    this.pavHoldReleaseTime = null; // Clear PAV+ hold release tracking
                    this.pavHoldReleasePressure = null;

                    // Lock inspiration and pause times at breath start for VC mode
                    // This prevents mid-breath settings changes (like flow) from altering phase transitions
                    if (this.settings.mode === 'volume_control') {
                        const flowRateMLPerS = this.settings.flow * 1000 / 60;
                        if (this.settings.flowPattern === 'decelerating') {
                            this.breathInspirationTime = (2 * this.settings.tidalVolume) / flowRateMLPerS;
                        } else {
                            this.breathInspirationTime = this.settings.tidalVolume / flowRateMLPerS;
                        }
                        this.breathPauseTime = this.settings.inspiratoryPause;
                    }

                    // pmusStartTime was already reset above if Pmus ended
                    isNewBreath = true;

                    // === ENTRAINMENT TRACKING ===
                    // Track mandatory breaths for reverse triggering entrainment
                    if (this.patient.entrainmentEnabled && isControlMode) {
                        const ventBreathPeriod = 60 / this.settings.rate;
                        const gracePeriodThreshold = ventBreathPeriod * 0.8; // 80% of expected cycle
                        const timeSinceLastMandatory = this.currentTime - this.lastMandatoryBreathTime;

                        // Check if this is a qualified mandatory breath (not a breath-stacked breath)
                        // First breath (lastMandatoryBreathTime === 0) always qualifies
                        const isQualifiedMandatory = (this.lastMandatoryBreathTime === 0) ||
                            (timeSinceLastMandatory >= gracePeriodThreshold);

                        if (isQualifiedMandatory) {
                            // This is a qualified mandatory breath
                            this.lastMandatoryBreathTime = this.currentTime;
                            this.mandatoryBreathsSinceEntrain++;

                            // Parse entrainment ratio (e.g., '1:2' means every 2nd breath)
                            const ratioNumber = parseInt(this.patient.entrainmentRatio.split(':')[1]) || 1;

                            // Check if this breath should trigger entrained patient effort
                            if (this.mandatoryBreathsSinceEntrain >= ratioNumber) {
                                // Time for entrained effort!
                                // pmusOffset is negative for reverse triggering (effort delayed from breath start)
                                // So effort starts at: breathStartTime + |pmusOffset|
                                this.lastEntrainedEffortTime = this.currentTime + Math.abs(this.patient.pmusOffset);
                                this.mandatoryBreathsSinceEntrain = 0; // Reset counter
                            }
                        }
                        // If not qualified (breath-stacked), don't count it and don't update lastMandatoryBreathTime
                    }

                    // Update next spontaneous breath time
                    if (this.patient.spontaneousBreathingEnabled) {
                        // Apply variability to spontaneous breathing interval when enabled
                        const intervalFactor = this.patient.naturalVariabilityEnabled
                            ? this.breathVariability.spontaneousIntervalFactor
                            : 1.0;
                        const spontaneousBreathPeriod = (60 / this.patient.spontaneousRate) * intervalFactor;

                        if (this.settings.mode === 'pressure_support') {
                            // PS mode: all breaths are patient-initiated, always advance
                            this.nextSpontaneousBreathTime = this.currentTime + spontaneousBreathPeriod;
                        }
                        // AC modes (PC/VC): patient rhythm is managed in trigger detection logic
                        // Don't update here to avoid double-advancing
                    }

                    // Update breath-based autoscaling metrics
                    this.updateBreathMetrics();

                    // Recalculate timeInBreath AFTER resetting breathStartTime
                    timeInBreath = (this.currentTime - this.breathStartTime);
                }

                // CPAP mode: update breath metrics and measurements periodically since there are no discrete breaths
                // Update when Pmus effort ends (transition from active to inactive)
                if (isCpapMode) {
                    const pmusCurrentlyActive = this.currentPmusTime >= 0 && this.currentPmusTime < this.patient.pmusDuration;
                    if (this.cpapPmusWasActive && !pmusCurrentlyActive) {
                        // Capture per-Pmus-cycle work integrals so Responsive Pmus feedback
                        // fires in CPAP. CPAP has no discrete breath-end event, so the
                        // standard breath-end capture at L4070 never runs.
                        this.wVentLastBreath    = this.wVentAccum / 10197;
                        this.wPatientLastBreath = this.wPatientAccum / 10197;
                        this.updateUnloadFactor();
                        this.wVentAccum = 0;
                        this.wPatientAccum = 0;
                        this.lastVolumeForWork = this.integratedVolume;

                        // Pmus just ended - update chart scaling metrics
                        this.updateBreathMetrics();

                        // Update tidal volume measurement (peak above inspiration start, so
                        // the residual carried over from incomplete previous expiration is
                        // not counted as inhaled volume).
                        const cpapInhaledVT = Math.max(0, this.cpapPeakVolume - (this.cpapInspStartVolume || 0));
                        this.measurements.tidalVolume = cpapInhaledVT;

                        // Update respiratory rate using rolling window
                        const rateWindowSeconds = 8;
                        const windowCutoff = this.currentTime - rateWindowSeconds;

                        // Record this breath
                        this.breathStartTimes.push(this.currentTime);
                        this.breathVolumeHistory.push({
                            time: this.currentTime,
                            volume: cpapInhaledVT
                        });

                        // Remove data older than the window
                        this.breathStartTimes = this.breathStartTimes.filter(t => t >= windowCutoff);
                        this.breathVolumeHistory = this.breathVolumeHistory.filter(b => b.time >= windowCutoff);

                        // Calculate rate from breath count in window
                        if (this.breathStartTimes.length >= 2) {
                            const oldestBreathInWindow = this.breathStartTimes[0];
                            const newestBreathInWindow = this.breathStartTimes[this.breathStartTimes.length - 1];
                            const windowDuration = newestBreathInWindow - oldestBreathInWindow;

                            if (windowDuration > 0) {
                                const breathIntervals = this.breathStartTimes.length - 1;
                                let calculatedRate = (breathIntervals / windowDuration) * 60;
                                calculatedRate = Math.max(4, Math.min(60, calculatedRate));
                                this.measurements.rate = calculatedRate;
                            }
                        }

                        // Calculate minute ventilation from displayed VT and rate
                        // MV = VT (mL) × Rate (bpm) / 1000 → L/min
                        this.measurements.minuteVent = (this.measurements.tidalVolume * this.measurements.rate) / 1000;

                        // Reset peak volume for next breath
                        this.cpapPeakVolume = 0;
                        this.cpapInspStartVolume = 0;
                    }
                    this.cpapPmusWasActive = pmusCurrentlyActive;
                }

                if (this.settings.mode === 'pressure_support' && this.breathPhase === 'inspiration' && !isCpapMode) {
                    // PS mode: cycle to expiration when flow drops to threshold
                    // Allow cycling even if inspiratory pause is active (pause will catch it at end)
                    // Check if we need to detect cycling
                    const flowThreshold = this.peakInspiratoryFlow * (this.settings.flowCyclePercent / 100);
                    const mechanics = this.calculateRespiratoryMechanics(timeInBreath, inspirationTime, 0, expirationTime);

                    if (mechanics.flow > 0 && mechanics.flow <= flowThreshold && timeInBreath > 0.2 && !this.inspiratoryPauseActive) {
                        this.breathPhase = 'expiration';
                        this.inspirationEndTime = timeInBreath; // Store actual inspiration end time
                        this.endInspiratoryVolume = mechanics.volume; // Capture volume at exact cycling moment
                        this.endInspiratoryPressure = this.lastCalculatedPressure; // Use last calculated pressure for continuity

                        // Apply staged settings at end of inspiration (start of expiration)
                        // Only for non-mode changes (PEEP, pressures, etc.) - mode changes wait until next breath
                        if (this.hasConfirmedChanges && this.currentBreathId > this.settingsConfirmedAtBreathId) {
                            const isModeChange = this.stagedSettings && this.stagedSettings.mode !== this.settings.mode;
                            if (!isModeChange) {
                                this.applyStagedSettings();
                            }
                        }
                        // Note: Don't reset pmusStartTime yet - let Pmus continue if duration extends past cycling

                        // Recalculate timeInBreath after phase change
                        timeInBreath = (this.currentTime - this.breathStartTime);
                    }
                } else if (this.settings.mode === 'pav_plus' && this.breathPhase === 'inspiration' && !this.inspiratoryPauseActive &&
                    this.activePauseType !== 'inspiratory') {
                    // PAV+ mode: cycle to expiration when Pmus decays to near-zero
                    // Skip if releasing from inspiratory hold (let the hold release handler handle that case)
                    // Use currentPmusTime (global scheduler) for consistency with flow calculation
                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                        const pmusTime = this.currentPmusTime;
                        const currentPmus = pmusTime <= this.patient.pmusDuration ? this.calculatePmus(pmusTime) : 0;
                        const pmusThreshold = 0.5; // Cycle when Pmus drops below 0.5 cmH2O
                        const normalizedPmusTime = pmusTime / this.patient.pmusDuration;

                        // Cycle when Pmus has decayed to near-zero (after the peak)
                        // Must be past peak (65%) to ensure we're in decay phase, not just starting
                        if (normalizedPmusTime > 0.65 && currentPmus < pmusThreshold && timeInBreath > 0.1) {
                            this.breathPhase = 'expiration';
                            this.inspirationEndTime = timeInBreath;
                            this.endInspiratoryVolume = this.currentMetrics.volume;
                            this.endInspiratoryPressure = this.lastCalculatedPressure;

                            // Apply staged settings at end of inspiration
                            if (this.hasConfirmedChanges && this.currentBreathId > this.settingsConfirmedAtBreathId) {
                                const isModeChange = this.stagedSettings && this.stagedSettings.mode !== this.settings.mode;
                                if (!isModeChange) {
                                    this.applyStagedSettings();
                                }
                            }

                            timeInBreath = (this.currentTime - this.breathStartTime);
                        }
                    }
                } else if (this.settings.mode === 'pav_plus' && this.breathPhase === 'inspiration' &&
                    this.activePauseType === 'inspiratory' && !this.inspiratoryPauseActive) {
                    // PAV+ mode: inspiratory hold was just released - transition to expiration immediately
                    this.breathPhase = 'expiration';
                    this.inspirationEndTime = timeInBreath;
                    this.endInspiratoryVolume = this.currentMetrics.volume;
                    this.endInspiratoryPressure = this.lastCalculatedPressure;
                    // Capture for smooth decay transition
                    this.pavHoldReleaseTime = this.currentTime;
                    this.pavHoldReleasePressure = this.currentMetrics.pressure;
                    // Clear activePauseType so subsequent breaths cycle normally
                    this.activePauseType = null;
                    timeInBreath = (this.currentTime - this.breathStartTime);
                } else if (this.settings.mode === 'pressure_support' && this.breathPhase === 'expiration') {
                    // Stay in expiration once cycled off
                    // (don't let other logic override this)
                } else if (this.settings.mode === 'pav_plus' && this.breathPhase === 'expiration') {
                    // PAV+ stay in expiration once cycled off
                    // New triggered breaths are handled by shouldStartNewBreath logic which explicitly sets breathPhase = 'inspiration'
                } else if (this.settings.mode === 'pressure_control' && this.breathPhase === 'expiration') {
                    // Stay in expiration once entered - don't re-trigger transition logic
                    // (prevents staged settings from being applied mid-expiration)
                } else if (this.settings.mode === 'volume_control' && this.breathPhase === 'expiration') {
                    // Stay in expiration once entered - don't allow going back to pause phase
                    // (important when releasing from manual inspiratory hold during built-in pause)
                } else if (this.settings.mode === 'prvc' && this.breathPhase === 'expiration') {
                    // Stay in expiration once entered - same as pressure_control
                } else if (this.settings.mode === 'volume_control' &&
                    !(this.activePauseType === 'inspiratory' && !this.inspiratoryPauseActive)) {
                    // VC mode phase transitions - use locked timing to handle mid-breath settings changes
                    // (e.g., flow changes shouldn't alter current breath's timing)
                    const lockedInspTime = this.breathInspirationTime || inspirationTime;
                    const lockedPauseTime = this.breathPauseTime ?? pauseTime;

                    if (lockedPauseTime > 0 && timeInBreath >= lockedInspTime && timeInBreath < (lockedInspTime + lockedPauseTime)) {
                        // Enter built-in pause phase
                        this.breathPhase = 'pause';
                    } else if (timeInBreath >= lockedInspTime + lockedPauseTime) {
                        // Transition to expiration (after pause if configured, or directly after inspiration)
                        this.endInspiratoryPressure = this.lastCalculatedPressure;
                        this.endInspiratoryVolume = this.currentMetrics.volume;
                        // Apply non-timing settings (like PEEP) at end of inspiration
                        // Mode changes and VC timing changes are applied at start of next breath
                        if (this.hasConfirmedChanges && this.currentBreathId > this.settingsConfirmedAtBreathId) {
                            const isModeChange = this.stagedSettings && this.stagedSettings.mode !== this.settings.mode;
                            const isVcTimingChange = this.stagedSettings && (
                                this.stagedSettings.flow !== this.settings.flow ||
                                this.stagedSettings.tidalVolume !== this.settings.tidalVolume ||
                                this.stagedSettings.flowPattern !== this.settings.flowPattern ||
                                this.stagedSettings.inspiratoryPause !== this.settings.inspiratoryPause
                            );
                            if (!isModeChange && !isVcTimingChange) {
                                this.applyStagedSettings();
                            }
                        }
                        this.breathPhase = 'expiration';
                    }
                    // Otherwise stay in current phase (inspiration or pause)
                } else if (timeInBreath >= inspirationTime ||
                    (this.activePauseType === 'inspiratory' && !this.inspiratoryPauseActive && timeInBreath >= inspirationTime - 0.05)) {
                    // Transition to expiration for non-VC modes (PC, PRVC, PS) or VC manual hold release
                    // 1. Normal case: timeInBreath >= inspirationTime (for PC, PRVC, PS)
                    // 2. Releasing from VC manual inspiratory hold (skip built-in pause to avoid pressure spike)
                    // 3. Releasing from manual hold with slight timing drift (within 50ms tolerance)
                    //    This prevents pressure spikes in PC mode caused by floating point precision

                    // Capture end-inspiratory values BEFORE applying new settings
                    // This ensures the expiration pressure decay starts from the actual end-inspiratory pressure
                    this.endInspiratoryPressure = this.lastCalculatedPressure;
                    this.endInspiratoryVolume = this.currentMetrics.volume;

                    // Apply staged settings at end of inspiration (start of expiration)
                    // Mode changes and VC timing changes wait until next breath
                    if (this.hasConfirmedChanges && this.currentBreathId > this.settingsConfirmedAtBreathId) {
                        const isModeChange = this.stagedSettings && this.stagedSettings.mode !== this.settings.mode;
                        const isVcTimingChange = this.settings.mode === 'volume_control' && this.stagedSettings && (
                            this.stagedSettings.flow !== this.settings.flow ||
                            this.stagedSettings.tidalVolume !== this.settings.tidalVolume ||
                            this.stagedSettings.flowPattern !== this.settings.flowPattern ||
                            this.stagedSettings.inspiratoryPause !== this.settings.inspiratoryPause
                        );
                        if (!isModeChange && !isVcTimingChange) {
                            this.applyStagedSettings();
                        }
                    }

                    this.breathPhase = 'expiration';
                } else {
                    // Normal inspiration phase
                    this.breathPhase = 'inspiration';
                }

                // Update measurements immediately on phase transitions (instead of waiting for breath end)
                // This gives faster feedback for PIP and plateau pressure
                if (previousBreathPhase === 'inspiration' && (this.breathPhase === 'pause' || this.breathPhase === 'expiration')) {
                    // PIP updates when inspiration ends (transition to pause or expiration)
                    this.measurements.pip = this.peakPressureThisBreath;
                }
                if (previousBreathPhase === 'pause' && this.breathPhase === 'expiration') {
                    // Plateau updates when pause ends (transition to expiration)
                    this.measurements.plateau = this.plateauPressureThisBreath;
                }

                // P0.1 calculation: pressure drop at 100ms after trigger (during occlusion)
                // - If Pmus active: theoretical occlusion pressure (Pmus at 100ms × amplification factor)
                // - If cardiac only: measured pressure drop from PEEP (actual small fluctuation)
                if (this.p01TriggerTime !== null && !this.p01Calculated) {
                    const timeSinceTrigger = this.currentTime - this.p01TriggerTime;

                    // During the 100ms window, track minimum pressure (for cardiac-only case)
                    if (timeSinceTrigger < 0.1) {
                        if (currentMechanics.pressure < this.p01MinPressure) {
                            this.p01MinPressure = currentMechanics.pressure;
                        }
                    } else {
                        // 100ms has passed - calculate P0.1
                        if (this.p01PmusActiveAtTrigger && this.patient.pmusAmplitude > 0 && this.p01PmusTimeAtTrigger !== null) {
                            // P0.1 = pressure DROP from trigger to 100ms after trigger (during occlusion)
                            // Uses asymmetric Pmus waveform (peaks at 65% of duration)
                            const pmusAtTrigger = this.calculatePmus(this.p01PmusTimeAtTrigger);
                            const pmusAt100msAfterTrigger = this.calculatePmus(this.p01PmusTimeAtTrigger + 0.1);

                            // Delta = change in Pmus from trigger to trigger+100ms
                            const pmusDelta = pmusAt100msAfterTrigger - pmusAtTrigger;

                            // Apply occlusion amplification factor (1/0.75)
                            // During occlusion, full Pmus is transmitted to airway pressure sensor
                            this.measurements.p01 = pmusDelta / 0.75;
                        } else {
                            // Cardiac oscillation trigger only - measure actual pressure drop
                            // This will be small (e.g., 0.3-0.5 cmH₂O) reflecting the cardiac oscillation
                            this.measurements.p01 = Math.max(0, this.settings.peep - this.p01MinPressure);
                        }

                        this.p01Calculated = true;
                    }
                }

                // Clamp timeInBreath to prevent numerical issues at phase boundaries
                // Note: Don't clamp for PS mode as it uses flow-cycled inspiration time
                let clampedTimeInBreath = timeInBreath;
                if (this.settings.mode !== 'pressure_support') {
                    if (this.breathPhase === 'inspiration' && timeInBreath > inspirationTime) {
                        // If we've detected expiration/pause phase but timeInBreath hasn't been updated yet,
                        // clamp to exactly inspirationTime to prevent overshoot artifacts
                        clampedTimeInBreath = inspirationTime;
                    } else if (this.breathPhase === 'pause' && timeInBreath < inspirationTime) {
                        clampedTimeInBreath = inspirationTime;
                    } else if (this.breathPhase === 'expiration' && timeInBreath < (inspirationTime + pauseTime)) {
                        // Edge case: prevent negative expiration time
                        clampedTimeInBreath = inspirationTime + pauseTime;
                    }
                }

                // Handle pause maneuvers - valve closure at end of phase
                let pauseActive = false;
                let pausePhase = null;
                let capturePauseValues = false;

                // Check which pause should activate based on button state and breath phase
                // IMPORTANT: Only the button that's pressed should activate its corresponding pause

                // Inspiratory pause: hold at end of inspiration (measures plateau pressure)
                // Activate either on NEW breath after button pressed, OR on CURRENT breath if pressed mid-inspiration
                if (this.inspiratoryPauseActive && !this.expiratoryPauseActive) {
                    const wasAlreadyPausedInspiratory = this.activePauseType === 'inspiratory';

                    // For PS mode, "end of inspiration" is when flow reaches cycle threshold (flow-based cycling)
                    // For PAV+ mode, "end of inspiration" is when active Pmus ends (~65% of duration), but only if pressure > 0
                    // For other modes, it's when timeInBreath >= inspirationTime (time-based)
                    let atEndOfInspiration;
                    if (this.settings.mode === 'pressure_support' && this.settings.pressureSupport > 0) {
                        // PS mode: check if flow has dropped to cycle threshold
                        const flowThreshold = this.peakInspiratoryFlow * (this.settings.flowCyclePercent / 100);
                        const mechanics = this.calculateRespiratoryMechanics(timeInBreath, inspirationTime, 0, expirationTime);
                        atEndOfInspiration = mechanics.flow > 0 && mechanics.flow <= flowThreshold && timeInBreath > 0.2;
                    } else if (this.settings.mode === 'pav_plus') {
                        // PAV+ mode: inspiratory hold activates at end of ACTIVE Pmus (when peak is reached)
                        // Active Pmus = rising phase (0% to 65% of duration), peak at 65%
                        // Use currentPmusTime for consistency with PAV+ mechanics
                        const normalizedPmusTime = this.currentPmusTime >= 0 ? this.currentPmusTime / this.patient.pmusDuration : 0;
                        atEndOfInspiration = normalizedPmusTime >= 0.65 && timeInBreath > 0.1;
                    } else {
                        atEndOfInspiration = timeInBreath >= inspirationTime;
                    }

                    // Activate when breath reaches end of inspiration (still in insp phase OR just transitioned)
                    const reachedEndOfInspiration = (this.breathPhase === 'inspiration' && atEndOfInspiration) ||
                        (this.breathPhase === 'expiration' && atEndOfInspiration && timeInBreath < (inspirationTime + 0.05)) ||
                        this.breathPhase === 'pause';

                    // Check if button was pressed during a PREVIOUS breath (wait for next breath)
                    const newBreathSinceRequest = this.breathIdWhenInspPauseRequested !== null &&
                        this.currentBreathId > this.breathIdWhenInspPauseRequested;

                    // Check if button was pressed during CURRENT breath (activate at end of this inspiration)
                    const sameBreathAsRequest = this.breathIdWhenInspPauseRequested !== null &&
                        this.currentBreathId === this.breathIdWhenInspPauseRequested;

                    // Activate if:
                    // 1. New breath started since request AND reached end of inspiration, OR
                    // 2. Same breath as request AND reached end of inspiration (pressed mid-inspiration), OR
                    // 3. Already paused and button still held
                    const shouldActivate = (this.inspiratoryPauseRequested && (newBreathSinceRequest || sameBreathAsRequest) && reachedEndOfInspiration && !wasAlreadyPausedInspiratory) ||
                        (wasAlreadyPausedInspiratory && this.inspiratoryPauseActive);

                    if (shouldActivate) {
                        pauseActive = true;
                        pausePhase = 'inspiratory';
                        this.activePauseType = 'inspiratory';

                        // Capture values on first activation
                        if (!wasAlreadyPausedInspiratory) {
                            capturePauseValues = true;
                            this.inspiratoryPauseRequested = false; // Clear flag after activation
                        }
                    }
                }

                // Expiratory pause: hold at end of expiration when flow reaches zero
                // Works the same across ALL modes - waits for expiratory flow to reach zero, then holds
                if (this.expiratoryPauseActive && !this.inspiratoryPauseActive) {
                    const wasAlreadyPausedExpiratory = this.activePauseType === 'expiratory';

                    // Activate when breath reaches expiration phase
                    const inExpirationPhase = this.breathPhase === 'expiration';

                    // For PS/PAV+: wait for PASSIVE flow to drop near zero (expiration complete)
                    // For AC modes: wait until very end of breath period (expiration ends by time/trigger)
                    let endOfExpirationReached = false;

                    {
                        const actualInspEnd = this.inspirationEndTime || inspirationTime;
                        const inExpPhase = timeInBreath > (actualInspEnd + 0.3);

                        // Activate the hold when expiratory flow reaches zero — the same moment a
                        // real ventilator closes its expiratory valve. For passive expiration this
                        // is the natural end of flow decay; with patient effort, the Pmus pull
                        // accelerates flow toward zero (figure ①→②). Use the corrected flow that
                        // includes the Pmus contribution so the criterion fires at the visible
                        // zero-crossing on the displayed flow trace.
                        const flowReachedZero = inExpPhase && (currentCorrectedFlow ?? -1) >= -0.5;

                        if (isCpapMode) {
                            // CPAP physics now carries cpapCumulativeVolume across breaths
                            // (residual from incomplete previous expiration), so flow rises
                            // smoothly from negative through zero as recoil decreases and Pmus
                            // grows — same shape as PS-mode's brake-induced rise. Engage at
                            // the displayed-flow zero crossing (negative→non-negative), the
                            // physiological end of expiration. Asymmetric so it ignores the
                            // positive→negative crossing during Pmus descent (recoil > pmus).
                            const prevFlow = this.currentMetrics.flow;
                            const currFlow = currentMechanics.flow;
                            endOfExpirationReached = prevFlow < 0 && currFlow >= 0;
                        } else if (this.settings.mode === 'pressure_support' || this.settings.mode === 'pav_plus') {
                            // Patient-driven modes: flow→0 engages hold, or 5×tau fallback (apnea/passive)
                            const holdTau = (this.patient.resistance * this.patient.compliance) / 1000;
                            const timeInExpiration = Math.max(0, timeInBreath - actualInspEnd);
                            const passiveFlowDone = timeInExpiration > (holdTau * 5);
                            endOfExpirationReached = flowReachedZero || passiveFlowDone;
                        } else {
                            // AC modes (PC/VC/PRVC): mandatory breath timing or flow→0 (whichever first)
                            // breathPeriod captures auto-PEEP from incomplete exhalation at the set rate
                            endOfExpirationReached = timeInBreath >= breathPeriod || flowReachedZero;
                        }
                    }

                    const safeToActivate = inExpirationPhase && endOfExpirationReached;

                    // Activate once flow reaches zero OR keep active if already paused
                    const canActivateNow = this.expiratoryPauseRequested && safeToActivate && !wasAlreadyPausedExpiratory;

                    if (canActivateNow || (wasAlreadyPausedExpiratory && this.expiratoryPauseActive)) {
                        pauseActive = true;
                        pausePhase = 'expiratory';
                        this.activePauseType = 'expiratory';
                        // Hold time at current point in breath
                        clampedTimeInBreath = timeInBreath;

                        // Capture volume on first frame (volume stays frozen)
                        // Pressure updates dynamically to show auto-PEEP or patient effort (POCC)
                        if (!wasAlreadyPausedExpiratory) {
                            capturePauseValues = true;
                            this.expiratoryPauseRequested = false; // Clear flag after activation
                            this._holdActivationTime = this.currentTime; // Track when hold actually activated
                        }
                    }
                }

                // Update pause duration counter and freeze breath timer
                if (pauseActive) {
                    // On first frame of pause, capture the pressure/volume/flow values
                    const isFirstFrameOfPause = this.pauseDuration === 0;

                    this.pauseDuration = this.currentTime - this.pauseStartTime;

                    // Freeze breath timer to hold at this exact point
                    // Advance breathStartTime by deltaTime to keep timeInBreath constant
                    this.breathStartTime += deltaTime;
                }

                // Calculate respiratory mechanics
                const mechanics = this.calculateRespiratoryMechanics(
                    clampedTimeInBreath,
                    inspirationTime,
                    pauseTime,
                    expirationTime,
                    triggerEffort,
                    pauseActive && pausePhase === 'inspiratory'
                );

                // Apply cardiac oscillations to flow and pressure for display
                // (Also applied to currentMechanics earlier for trigger detection)
                const cardiacOscDisplay = this.calculateCardiacOscillation();
                mechanics.flow += cardiacOscDisplay.flowOscillation;
                mechanics.pressure += cardiacOscDisplay.pressureOscillation;

                // === PMUS BRAKING ENVELOPE (every-frame update) ===
                // Track the patient's Pmus value through ALL phases — inspiration, pause/hold,
                // and expiration — so smoothedBrakingFlow always reflects current effort and
                // never holds a stale snapshot from before a pause/hold or from the trigger
                // moment of a stacked breath. Placed ABOVE the pauseActive branching so it
                // runs even during inspiratory holds (otherwise the envelope freezes during
                // the hold and bleeds into the post-release expiration as fake positive flow,
                // rounding off the valve-open spike).
                // Asymmetric envelope: instant attack (raw rises), 150 ms exponential release.
                {
                    const hasSB = this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0;
                    // Suppress Pmus braking flow only after the hold has actually engaged (valve closed),
                    // not while the button is merely held waiting for trigger criteria. Otherwise the
                    // displayed/corrected flow during the request window misses the Pmus inspiratory pull,
                    // and the trigger criteria can never fire.
                    const holdEngaged = this.activePauseType === 'expiratory';
                    const rawBrakingFlow = (hasSB && patientRespiratoryEffort > 0 && !holdEngaged)
                        ? (patientRespiratoryEffort / this.patient.resistance) * 60
                        : 0;
                    if (rawBrakingFlow >= this.smoothedBrakingFlow) {
                        this.smoothedBrakingFlow = rawBrakingFlow;
                    } else {
                        const releaseAlpha = 1 - Math.exp(-deltaTime / 0.15);
                        this.smoothedBrakingFlow += releaseAlpha * (rawBrakingFlow - this.smoothedBrakingFlow);
                    }
                    if (this.smoothedBrakingFlow < 0.05) this.smoothedBrakingFlow = 0;
                }

                // Apply pause maneuver effects
                if (pauseActive) {
                    if (pausePhase === 'inspiratory') {
                        // PAV+ handles its own pause mechanics with effort recoil
                        if (this.settings.mode === 'pav_plus') {
                            // Capture pre-hold pressure on first activation for smooth transition
                            // Use currentMetrics.pressure which has the PREVIOUS frame's pressure (before hold)
                            if (capturePauseValues) {
                                this.pausePreHoldPressure = this.currentMetrics.pressure;
                                this.pauseActivationTime = this.currentTime;
                            }

                            const timeSincePauseActivation = this.currentTime - this.pauseActivationTime;

                            // Calculate final plateau target (base plateau + full recoil)
                            const basePlateau = mechanics.pressure;
                            const effectivePmus = this.patient.pmusAmplitude || 10;
                            const maxRecoilPressure = effectivePmus * 0.5;
                            const finalPlateau = basePlateau + maxRecoilPressure;

                            // Single smooth transition from pre-hold pressure to final plateau
                            // Use a time constant that gives a visible smooth curve (~200ms)
                            const transitionTau = 0.18;
                            const transitionFactor = 1 - Math.exp(-timeSincePauseActivation / transitionTau);
                            let displayPressure = finalPlateau;

                            if (this.pausePreHoldPressure !== null && this.pausePreHoldPressure !== undefined) {
                                displayPressure = this.pausePreHoldPressure + (finalPlateau - this.pausePreHoldPressure) * transitionFactor;
                            }

                            // Apply cardiac oscillations
                            const cardiacOscInspHold = this.calculateCardiacOscillation();
                            this.currentMetrics.pressure = displayPressure + cardiacOscInspHold.pressureOscillation;
                            this.currentMetrics.flow = cardiacOscInspHold.flowOscillation;
                            this.currentMetrics.volume = mechanics.volume;
                            // Track for smooth transition to expiration
                            this.lastCalculatedPressure = finalPlateau;
                        } else {
                        // Inspiratory pause: flow decays to zero (valve inertia), volume held
                        // Capture volume and flow on first frame of actual pause activation
                        if (capturePauseValues) {
                            this.pauseFrozenVolume = mechanics.volume;
                            // Use integratedVolume for plateau pressure calculation
                            // integratedVolume tracks TRUE lung volume (residual + tidal from both
                            // ventilator and patient effort) via flow integration, so it:
                            // - Always includes Pmus-driven volume even after Pmus ends
                            // - Avoids cliff-edge where formula drops pmusVolume when pmus = 0
                            // - Correctly reflects auto-PEEP from trapped gas
                            this.pauseFrozenVolumeForPressure = this.integratedVolume;
                            // Use lastInspiratoryFlow (captured during inspiration) for valve inertia
                            // This is the flow at END of inspiration, before phase transition
                            this.pauseFrozenFlow = this.lastInspiratoryFlow;
                            this.pauseActivationTime = this.currentTime; // Track when pause actually started
                            // Capture pre-hold pressure for smooth transition to plateau
                            this.pausePreHoldPressure = mechanics.pressure;
                        }

                        // Calculate base alveolar pressure from frozen volume (plateau pressure)
                        // This is elastic recoil pressure (no resistive component since flow = 0)
                        const circuitCompliance = 3;
                        // Apply stress index to compliance for plateau pressure calculation
                        const effectiveCompliance = this.applyStressIndexCompliance(this.patient.compliance);
                        let plateauPressure;

                        // AOP only affects calculation when PEEP < AOP (airways still need pressure to open)
                        // When PEEP >= AOP, airways are stented open by PEEP, use normal calculation
                        // Use pauseFrozenVolumeForPressure which includes residualVolume for auto-PEEP
                        if (this.patient.airwayOpeningPressure > 0 && this.patient.airwayOpeningPressure > this.settings.peep) {
                            const openingVolume = circuitCompliance * (this.patient.airwayOpeningPressure - this.settings.peep);
                            const lungVolume = Math.max(0, this.pauseFrozenVolumeForPressure - openingVolume);

                            // Plateau = PEEP + Opening Pressure + Elastic (lung)
                            plateauPressure = this.settings.peep +
                                (this.patient.airwayOpeningPressure - this.settings.peep) +
                                (lungVolume / effectiveCompliance);
                        } else {
                            // Plateau = PEEP + totalLungVolume/C (includes auto-PEEP from trapped gas)
                            plateauPressure = this.settings.peep + (this.pauseFrozenVolumeForPressure / effectiveCompliance);
                        }

                        // If spontaneous breathing is active, Pmus affects measured pressure
                        // During inspiratory pause, patient effort can cause pressure drop (reverse triggering signature)
                        // Only the ACTIVE portion of Pmus (0-65% of duration, before peak) should affect pressure
                        // After peak, patient is relaxing - pressure smoothly returns to true plateau
                        if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                            const normalizedPmusTime = this.patient.pmusDuration > 0
                                ? this.currentPmusTime / this.patient.pmusDuration
                                : 0;

                            const peakPosition = 0.65;
                            const fadeEndPosition = 0.80; // Smooth transition zone from 65% to 80%

                            if (normalizedPmusTime <= fadeEndPosition) {
                                // Use the centrally-calculated Pmus time (handles both entrainment and independent breathing)
                                const currentPmus = this.calculatePmus(this.currentPmusTime);

                                // During inspiratory pause (closed system), Pmus creates negative deflection
                                // Transmission factor ~0.75 (same as POCC)
                                const transmissionFactor = 0.75;
                                let pressureEffect = currentPmus * transmissionFactor;

                                // Smooth fade-out after peak (65%-80%) - pressure gradually returns to plateau
                                if (normalizedPmusTime > peakPosition) {
                                    const fadeProgress = (normalizedPmusTime - peakPosition) / (fadeEndPosition - peakPosition);
                                    // Smootherstep for natural transition (matches chest wall recoil)
                                    const fadeFactor = 1 - (fadeProgress * fadeProgress * fadeProgress * (fadeProgress * (fadeProgress * 6 - 15) + 10));
                                    pressureEffect *= fadeFactor;
                                }

                                // Airway pressure = plateau pressure - Pmus deflection
                                plateauPressure = plateauPressure - pressureEffect;
                            }
                            // After 80%, pressure has returned to true plateau
                        }

                        // Add cardiac oscillations to pressure and flow display
                        const cardiacOscInspHold = this.calculateCardiacOscillation();

                        // Smooth pressure equilibration from pre-hold pressure to plateau
                        // Models brief circuit equilibration when valve closes (same as exp hold)
                        const timeSincePauseActivation = this.currentTime - this.pauseActivationTime;
                        const circuitTau = 0.06; // 60ms time constant for circuit equilibration
                        let displayPressure = plateauPressure;

                        if (this.pausePreHoldPressure !== null && this.pausePreHoldPressure !== undefined) {
                            const equilibrationFactor = 1 - Math.exp(-timeSincePauseActivation / circuitTau);
                            displayPressure = this.pausePreHoldPressure + (plateauPressure - this.pausePreHoldPressure) * equilibrationFactor;
                        }

                        // Total pressure with oscillations
                        this.currentMetrics.pressure = displayPressure + cardiacOscInspHold.pressureOscillation;
                        this.currentMetrics.flow = cardiacOscInspHold.flowOscillation; // Only cardiac oscillations, no base flow
                        // Use integratedVolume directly for display continuity with inspiration
                        // (integratedVolume doesn't change during hold since flow integration is skipped)
                        const holdDisplayResidual = this.isBreathStacking ? 0 : (this.residualVolume || 0);
                        this.currentMetrics.volume = Math.max(0, this.integratedVolume - holdDisplayResidual);

                        // Update lastCalculatedPressure with base plateau (without oscillation or resistive)
                        // so expiration starts from the true plateau pressure
                        this.lastCalculatedPressure = plateauPressure;
                        // Update endInspiratoryPressure to plateau during hold — the circuit has
                        // already equilibrated, so expiratory decay after hold release should start
                        // from plateau, not PIP. Without this, a frame-timing race (hold activating
                        // barely past inspirationTime) leaves timeInExpiration ≈ 0 on release,
                        // causing a brief pressure spike from PIP back above plateau.
                        this.endInspiratoryPressure = plateauPressure;
                        } // End of non-PAV+ inspiratory pause handling
                    } else if (pausePhase === 'expiratory') {
                        // Expiratory pause: flow stops, volume held
                        // For POCC (whole breath occlusion maneuver), pressure continues to update with Pmus
                        if (capturePauseValues) {
                            // Capture TRUE lung volume for pressure calculation (includes trapped gas)
                            // This is needed to correctly calculate auto-PEEP
                            this.pauseFrozenVolumeForPressure = mechanics.volume + (this.residualVolume || 0);
                            // Hold the displayed volume at the expiratory baseline (0 in
                            // non-stacking mode). With auto-PEEP, expiration doesn't fully decay
                            // before flow→0 engages the hold, so currentMetrics.volume can be
                            // slightly positive — anchoring the display at 0 keeps the waveform
                            // flat during the hold (matches VC behavior). In stacking mode,
                            // preserve the previously-displayed accumulated value.
                            this.pauseFrozenVolume = this.isBreathStacking ? this.currentMetrics.volume : 0;
                            // Alveolar baseline rise tracks how much the trapped-gas (auto-PEEP)
                            // pressure has equilibrated into the closed circuit. Starts at 0
                            // (sensor was at set PEEP when valve closed) and rises toward
                            // auto-PEEP only after the patient releases their effort.
                            this.holdAlveolarRise = 0;
                        }

                        // True alveolar plateau (set PEEP + auto-PEEP from trapped gas)
                        const alveolarPlateau = this.settings.peep + (this.pauseFrozenVolumeForPressure / this.patient.compliance);
                        const autoPeep = Math.max(0, alveolarPlateau - this.settings.peep);

                        // Patient's pleural pull (amplified for closed-system transmission)
                        let amplifiedPmus = 0;
                        let pmusActive = false;
                        if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                            const currentPmus = this.calculatePmus(this.currentPmusTime);
                            amplifiedPmus = currentPmus / 0.75;
                            pmusActive = currentPmus > 0.1;
                        }

                        // Equilibrate the alveolar baseline rise. While the patient is actively
                        // pulling, the trapped gas can't push the airway sensor up — the patient's
                        // pull dominates the trace and the baseline stays pinned near set PEEP.
                        // Once effort releases, the gas equilibrates upward to the auto-PEEP plateau.
                        if (!pmusActive) {
                            const baselineTau = 0.15; // 150ms equilibration once patient releases
                            const alpha = 1 - Math.exp(-deltaTime / baselineTau);
                            this.holdAlveolarRise += alpha * (autoPeep - this.holdAlveolarRise);
                        }

                        // Airway pressure = set PEEP + (alveolar rise so far) - patient's pleural pull
                        // - During effort (with auto-PEEP): ≈ set PEEP - amplifiedPmus (dips below PEEP) → ΔPocc
                        // - After release: ≈ alveolar plateau = set PEEP + auto-PEEP → ΔPocc 2 / Plateau pattern
                        const displayPressure = this.settings.peep + this.holdAlveolarRise - amplifiedPmus;

                        // Add cardiac oscillations to pressure and flow display
                        // Flow stops immediately during expiratory hold (valve closes instantly)
                        const cardiacOscExpHold = this.calculateCardiacOscillation();
                        this.currentMetrics.pressure = displayPressure + cardiacOscExpHold.pressureOscillation;
                        this.currentMetrics.flow = cardiacOscExpHold.flowOscillation; // Only cardiac oscillations, no base flow
                        this.currentMetrics.volume = this.pauseFrozenVolume; // Hold volume constant

                        // Update PEEP measurement to show PEEPtotal during expiratory pause
                        // After brief equilibration time (~0.3s), display the total airway pressure
                        // This shows set PEEP + auto-PEEP (if any trapped gas from incomplete exhalation)
                        if (this.pauseDuration > 0.3) {
                            this.measurements.peep = alveolarPlateau;
                        }
                    }
                } else {
                    // Normal breathing - use calculated mechanics
                    this.currentMetrics.pressure = mechanics.pressure;
                    this.currentMetrics.flow = mechanics.flow;
                    this.currentMetrics.volume = mechanics.volume;

                    // Exp Hold button held, valve not yet closed: the displayed Paw should show
                    // only the natural expiratory decay until the hold engages — the closed-circuit
                    // POCC dip should appear at activation (figure ②), not at start of effort.
                    // Patient effort still drives flow toward zero (used for both display and
                    // activation detection), but the Pmus dip is suppressed on the pressure trace
                    // by recomputing mechanics with triggerEffort=0. Trigger detection and work
                    // accounting (which use currentMechanics computed earlier) are unaffected.
                    if (this.expiratoryPauseActive && this.breathPhase === 'expiration' && this.activePauseType !== 'expiratory' && triggerEffort > 0) {
                        const mechanicsNoPmus = this.calculateRespiratoryMechanics(
                            clampedTimeInBreath, inspirationTime, pauseTime, expirationTime, 0, false
                        );
                        const cardiacOscWait = this.calculateCardiacOscillation();
                        this.currentMetrics.pressure = mechanicsNoPmus.pressure + cardiacOscWait.pressureOscillation;
                    }

                    // PAV+ hold release: apply smooth exponential decay from hold pressure to PEEP
                    if (this.settings.mode === 'pav_plus' && this.pavHoldReleaseTime !== null && this.pavHoldReleasePressure !== null) {
                        const timeSinceRelease = this.currentTime - this.pavHoldReleaseTime;
                        const decayTau = 0.08; // 80ms time constant for smooth visible curve
                        const decayDuration = 0.4; // Apply decay for 400ms then clear

                        if (timeSinceRelease < decayDuration) {
                            // Exponential decay from captured hold pressure to PEEP
                            const decayFactor = Math.exp(-timeSinceRelease / decayTau);
                            this.currentMetrics.pressure = this.settings.peep + (this.pavHoldReleasePressure - this.settings.peep) * decayFactor;
                        } else {
                            // Clear the hold release tracking
                            this.pavHoldReleaseTime = null;
                            this.pavHoldReleasePressure = null;
                        }
                    }

                    // Track last calculated pressure for capturing end-inspiratory pressure
                    // This is used when transitioning to expiration to ensure smooth pressure decay
                    this.lastCalculatedPressure = mechanics.pressure;

                    // === UNIVERSAL FLOW INTEGRATION ===
                    // Volume = ∫flow for the ENTIRE breath cycle (both inspiration and expiration).
                    // This ensures perfect continuity - no formula-vs-integration discontinuities.
                    // Any flow modification automatically affects volume.
                    //
                    // NOTE: Skip for CPAP mode - CPAP handles its own flow/volume via calculateCPAPMechanics
                    const isCpapMode = this.settings.mode === 'pressure_support' && this.settings.pressureSupport === 0;
                    if (!isCpapMode) {
                        const tau = (this.patient.resistance * this.patient.compliance) / 1000;

                        // Detect new breath using breath count (more reliable than phase transitions)
                        const isNewBreath = this.breathCount !== this.lastBreathCountForVolumeTracking;
                        if (isNewBreath) {
                            // Starting a new breath - ALWAYS start from residual for correct physics
                            // integratedVolume tracks TRUE lung volume (residual + tidal)
                            // isBreathStacking only controls DISPLAY, not physics
                            this.integratedVolume = this.residualVolume || 0;
                            this.lastBreathCountForVolumeTracking = this.breathCount;
                            // Set displayed volume based on stacking mode
                            if (this.isBreathStacking) {
                                // Breath stacking: show full volume (stacked visual)
                                this.currentMetrics.volume = Math.max(0, this.integratedVolume);
                            } else {
                                // Air-trapping or normal: show tidal only (volume restarts from 0 visually)
                                this.currentMetrics.volume = 0;
                            }
                        } else if (this.breathPhase === 'inspiration') {
                            // === INSPIRATION: Integrate mechanics.flow to accumulate volume ===

                            // Use mechanics.flow for inspiration (already accounts for mode-specific calculations)
                            // Flow is positive during inspiration (L/min), convert to mL per timestep
                            const flowMlPerSecond = (mechanics.flow || 0) * 1000 / 60;
                            if (!isNaN(flowMlPerSecond)) {
                                this.integratedVolume += flowMlPerSecond * deltaTime;
                            }

                            // Update displayed volume based on stacking mode
                            if (this.isBreathStacking) {
                                // Breath stacking: show full volume (stacked visual)
                                this.currentMetrics.volume = Math.max(0, this.integratedVolume);
                            } else {
                                // Air-trapping or normal: show tidal only (subtract residual)
                                this.currentMetrics.volume = Math.max(0, this.integratedVolume - (this.residualVolume || 0));
                            }

                        } else if (this.breathPhase === 'pause') {
                            // === PAUSE: Hold volume constant ===
                            // Volume doesn't change during inspiratory pause
                            // For VC mode: snap to target volume since VC guarantees volume delivery
                            // (integration may fall short by up to one frame due to timing)
                            // ALWAYS include residual for correct physics - integratedVolume tracks TRUE lung volume
                            if (this.settings.mode === 'volume_control') {
                                const targetVolume = this.settings.tidalVolume;
                                this.integratedVolume = targetVolume + (this.residualVolume || 0);
                            }
                            // Display shows tidal volume only (subtract residual for air-trapping mode)
                            const displayResidual = this.isBreathStacking ? 0 : (this.residualVolume || 0);
                            this.currentMetrics.volume = Math.max(0, this.integratedVolume - displayResidual);

                        } else if (this.breathPhase === 'expiration') {
                            // === EXPIRATION: Calculate flow from volume, apply modifications, integrate ===

                            // Snap to correct volume when transitioning directly from inspiration (no pause)
                            // This ensures volume starts at exactly the target, compensating for integration timing
                            // (When there's a pause phase, the snap happens there instead)
                            // ALWAYS include residual for correct physics - integratedVolume tracks TRUE lung volume
                            // The isBreathStacking flag only affects DISPLAY (stacked vs restart visual)
                            if (previousBreathPhase === 'inspiration') {
                                if (this.settings.mode === 'volume_control') {
                                    // VC: use set tidal volume - snap ensures smooth decay from exact target
                                    const targetVolume = this.settings.tidalVolume;
                                    this.integratedVolume = targetVolume + (this.residualVolume || 0);
                                } else if (this.settings.mode === 'prvc' || this.settings.mode === 'pressure_control') {
                                    // PRVC/PC: time-cycled, snap to peak for smooth decay
                                    // peakVolumeThisBreath already includes any baseline from air-trapping
                                    const peakVolume = this.peakVolumeThisBreath || mechanics.volume;
                                    const gap = peakVolume - this.integratedVolume;
                                    if (gap > 20) {
                                        this.integratedVolume = peakVolume;
                                    }
                                } else if (this.settings.mode === 'pav_plus') {
                                    // PAV+: snap to peak for immediate expiratory flow at transition
                                    // Without snap, flow gradually rises to peak (angled waveform)
                                    const peakVolume = this.peakVolumeThisBreath || mechanics.volume;
                                    this.integratedVolume = peakVolume;
                                }
                                // PS mode: no snap - let integratedVolume continue naturally
                                // Flow cycling determines the end point, integration should be continuous
                            }

                            // Snap smoothedBrakingFlow DOWN to the current Pmus value at the
                            // moment expiration begins, so the 150 ms release-lag accumulated
                            // during inspiration/pause tracking doesn't bleed into early
                            // expiration as fake positive flow. Without this, PS-mode breaths
                            // that cycle mid-Pmus-decay carry a lagged envelope value (higher
                            // than the actual current Pmus) and blunt the valve-open spike.
                            // Snap-DOWN only — never snap up — so a Pmus that happens to be
                            // rising right at cycling still produces correct braking. Fires on
                            // both inspiration→exp AND pause→exp (covers manual Insp Hold and
                            // configured inspiratory pause). Time-cycled modes where Pmus has
                            // fully decayed end up with both values at 0, no visible change.
                            if (previousBreathPhase === 'inspiration' || previousBreathPhase === 'pause') {
                                const hasSB = this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0;
                                // Match the global gating: suppress only after hold engages, not while
                                // the request is merely pending (so trigger criteria can fire normally).
                                const holdEngaged = this.activePauseType === 'expiratory';
                                const currentRaw = (hasSB && patientRespiratoryEffort > 0 && !holdEngaged)
                                    ? (patientRespiratoryEffort / this.patient.resistance) * 60
                                    : 0;
                                if (this.smoothedBrakingFlow > currentRaw) {
                                    this.smoothedBrakingFlow = currentRaw;
                                }
                            }

                            // Flow must be based on TRUE lung volume (integratedVolume) for correct physics
                            // The differential equation dV/dt = -V/tau gives proper exponential decay
                            // Using displayed volume (integratedVolume - residual) would cause wrong decay rate
                            // Result: integratedVolume decays from (VT + res) → res at equilibrium
                            // Displayed volume (integratedVolume - res) then decays from VT → 0 correctly
                            let correctedFlow = -(this.integratedVolume / tau) * 60 / 1000;

                            // Use actual inspiration end time if available (important for PS mode with flow cycling)
                            // For VC mode with inspiratory pause, also subtract pauseTime so compression develops from actual expiration start
                            const actualInspTime = this.inspirationEndTime || inspirationTime;
                            const timeInExpirationForFlowLimit = Math.max(0, (this.currentTime - this.breathStartTime) - actualInspTime - pauseTime);

                            // Pmus state used by chest-wall recoil block below.
                            // smoothedBrakingFlow itself is now updated globally before this block,
                            // so we just consume it here (see read/apply later in this branch).
                            const hasSpontaneousBreathing = this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0;

                            // Add chest wall recoil contribution to peak expiratory flow
                            if (hasSpontaneousBreathing && this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath) {
                                // Active Pmus recoil - uses Pmus amplitude for recoil pressure
                                const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                                const amplitudeEffect = Math.max(0, (this.patient.pmusAmplitude - 5) / 15);
                                const recoilPressure = this.patient.pmusAmplitude * amplitudeEffect * chestWallFraction;

                                const recoilTau = 0.06;
                                const recoilDecay = Math.exp(-timeInExpirationForFlowLimit / recoilTau);
                                const recoilFlow = -(recoilPressure / this.patient.resistance) * 60 * recoilDecay * 2.5;

                                correctedFlow += recoilFlow;
                            }
                            // Chest wall recoil only applies when patient had active Pmus during this breath
                            // Passive/mandatory breaths don't stretch the chest wall beyond resting position

                            // Apply flow limitation if enabled (obstructive physiology - COPD/Asthma)
                            correctedFlow = this.applyFlowLimit(correctedFlow, this.integratedVolume + this.residualVolume, timeInExpirationForFlowLimit);

                            // Apply Pmus braking — ADDITIVE, not multiplicative.
                            // Pmus opposes elastic recoil, reducing the driving pressure for expiration.
                            // Do NOT cap at 0 — allow flow to become positive when patient effort
                            // overcomes elastic recoil. Required for correct flow trigger behavior
                            // and accurate display of patient inspiratory effort during late expiration.
                            // Envelope is updated every frame (above the universal flow integration block).
                            if (this.smoothedBrakingFlow > 0.05) {
                                correctedFlow += this.smoothedBrakingFlow;
                            }

                            // Update flow display
                            this.currentMetrics.flow = correctedFlow;

                            // Re-apply cardiac oscillations (they were lost when flow was overwritten)
                            const cardiacOscPmusBraking = this.calculateCardiacOscillation();
                            this.currentMetrics.flow += cardiacOscPmusBraking.flowOscillation;

                            // Integrate the corrected flow to update volume
                            // Flow is negative during expiration, so this decreases integratedVolume
                            const flowMlPerSecond = correctedFlow * 1000 / 60; // Keep sign (negative)
                            this.integratedVolume += flowMlPerSecond * deltaTime;
                            this.integratedVolume = Math.max(0, this.integratedVolume);

                            // Update displayed volume
                            // For air-trapping (not breath stacking), subtract residual so display shows VT → 0
                            if (this.isBreathStacking) {
                                // Breath stacking: show stacked visual (full integratedVolume)
                                this.currentMetrics.volume = Math.max(0, this.integratedVolume);
                            } else {
                                // Air trapping: subtract residual for display
                                // integratedVolume goes from (VT + res) → res
                                // displayed = integratedVolume - res goes from VT → 0
                                this.currentMetrics.volume = Math.max(0, this.integratedVolume - (this.residualVolume || 0));
                            }
                        }
                    }
                    // Track phase for transition detection
                    this.lastBreathPhaseForVolumeTracking = this.breathPhase;

                    // === PEEP TRANSITION HANDLING ===
                    // When PEEP changes at start of expiration, the lung equilibrates to new FRC
                    // PEEP increase: less volume exhaled (higher FRC), flow reduced
                    // PEEP decrease: more volume exhaled (lower FRC), flow increased
                    // NOTE: ALL effects are display-only - don't modify currentMetrics as that would
                    // affect breath stacking detection, triggering, and cycling calculations
                    if (this.peepTransitionActive && this.breathPhase === 'expiration') {
                        const tau = (this.patient.resistance * this.patient.compliance) / 1000;

                        // Calculate how much equilibration has occurred
                        // Use exponential approach to target FRC offset
                        const timeInExpiration = (this.currentTime - this.breathStartTime) - inspirationTime;
                        const equilibrationProgress = 1 - Math.exp(-timeInExpiration / tau);

                        // Use peepTransitionTargetDelta which already includes recruited volume
                        // (set in applyStagedSettings)
                        const targetFrcChange = this.peepTransitionTargetDelta;

                        // Current progress toward new FRC (relative to where we started this transition)
                        // Store this for display purposes only - DO NOT modify currentMetrics
                        this.peepTransitionCurrentOffset = targetFrcChange * equilibrationProgress;

                        // Calculate the additional flow from PEEP transition (for display only)
                        // Flow = rate of FRC change = d(FRC)/dt
                        // For exponential approach: d(target × (1-e^(-t/tau)))/dt = (target/tau) × e^(-t/tau)
                        const transitionFlow = (targetFrcChange / tau) * Math.exp(-timeInExpiration / tau); // mL/s
                        // Convert to L/min and store for display only
                        this.peepTransitionFlowOffset = (transitionFlow / 1000) * 60;

                        // Check if transition is essentially complete (>99% equilibrated)
                        if (equilibrationProgress > 0.99) {
                            // Finalize the FRC offset for current breath display
                            // Set it to the target change (not cumulative) since we reset on next breath
                            this.volumeFrcOffset = targetFrcChange;
                            this.peepTransitionActive = false;
                            this.previousPeepBeforeChange = null;
                            this.peepTransitionTargetDelta = 0;
                            this.peepTransitionCurrentOffset = 0;
                            this.peepTransitionFlowOffset = 0;
                            // Flag to reset baseline to 0 on next breath
                            this.resetVolumeOffsetOnNextBreath = true;
                        }
                    } else {
                        // No active transition - clear flow offset
                        this.peepTransitionFlowOffset = 0;
                    }

                    // Reset frozen values when not paused
                    this.pauseFrozenPressure = 0;
                    this.pauseFrozenVolume = 0;
                    this.pausePreHoldPressure = null;
                    this.expPausePreHoldPressure = null;
                    this.expPauseActivationTime = 0;
                    this.holdAlveolarRise = 0;
                    // When releasing from manual inspiratory hold, capture plateau measurement
                    if (this.activePauseType === 'inspiratory') {
                        this.measurements.plateau = this.plateauPressureThisBreath;
                        this.manualHoldPlateauDisplayUntil = this.currentTime + 5; // Show for 5 seconds

                        // With built-in pause configured, skip the pause time on the NEXT frame
                        // This is deferred to avoid pressure discontinuities in the current frame's calculations.
                        if (pauseTime > 0 && this.breathPhase === 'expiration') {
                            this.skipBuiltInPauseTime = true;
                            this.pauseTimeToSkip = pauseTime;
                        }
                    }


                    this.activePauseType = null;
                }

                // Track peak values for this breath
                if (mechanics.pressure > this.peakPressureThisBreath) {
                    this.peakPressureThisBreath = mechanics.pressure;
                }
                // Track peak of integratedVolume (TRUE lung volume) for consistent VTE calculation
                // VTE formula uses integratedVolume for residualAtBreathEnd, so peak must use same basis
                if (this.integratedVolume > this.peakVolumeThisBreath) {
                    this.peakVolumeThisBreath = this.integratedVolume;
                }

                // Track plateau pressure during pause phase or manual inspiratory hold
                // Use currentMetrics.pressure (not mechanics.pressure) because during manual holds,
                // currentMetrics.pressure contains the true plateau (alveolar) pressure without
                // the resistive component, while mechanics.pressure still contains PIP
                // Subtract cardiac oscillation so measurement shows true plateau, not oscillating value
                if (this.breathPhase === 'pause' || this.activePauseType === 'inspiratory') {
                    const cardiacOscForMeasurement = this.calculateCardiacOscillation();
                    this.plateauPressureThisBreath = this.currentMetrics.pressure - cardiacOscForMeasurement.pressureOscillation;
                }

                // Calculate Pmus (patient effort) - shown as negative pleural pressure
                // Uses centrally-calculated currentPmusTime (handles both entrainment and independent breathing)
                let pmusValue = 0;
                if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                    // Patient is in their inspiratory effort phase - show the waveform
                    let rawPmus = this.calculatePmus(this.currentPmusTime);

                    // When expiratory hold button is pressed, show amplified "observed" effort
                    // During occlusion, the measured deflection is larger (Pmus / 0.75)
                    // vs normal breathing where chest wall absorbs some (Pmus * 0.75)
                    if (this.expiratoryPauseActive) {
                        rawPmus = rawPmus / 0.75;
                    }

                    // Display as positive or negative based on user preference
                    pmusValue = this.patient.positivePmus ? rawPmus : -rawPmus;
                }

                // Defensive: during expiratory hold, valves are closed — only cardiac oscillations
                if (this.activePauseType === 'expiratory') {
                    const cardiacOscHoldDefensive = this.calculateCardiacOscillation();
                    this.currentMetrics.flow = cardiacOscHoldDefensive.flowOscillation;
                    this.peepTransitionFlowOffset = 0;
                }

                // Update data arrays with {x, y} coordinate pairs
                // Use modulo wrapping - chart displays from 0 to timeWindow, data wraps around
                // Use currentMetrics values which include pause maneuver overrides
                const wrappedTime = this.currentTime % this.timeWindow;
                const arraySize = this.data.pressure.length;

                if (arraySize > 0) {
                    const index = Math.min(arraySize - 1, Math.floor((wrappedTime / this.timeWindow) * arraySize));

                    // Overwrite the y values at the calculated index in-place
                    if (this.data.pressure[index]) this.data.pressure[index].y = this.currentMetrics.pressure;
                    if (this.data.pmus[index]) this.data.pmus[index].y = pmusValue;
                    
                    const displayFlow = this.currentMetrics.flow + this.peepTransitionFlowOffset;
                    if (this.data.flow[index]) this.data.flow[index].y = displayFlow;
                    
                    const displayVolume = this.currentMetrics.volume + this.volumeFrcOffset + this.peepTransitionCurrentOffset;
                    if (this.data.volume[index]) this.data.volume[index].y = displayVolume;

                    // Clear a narrow window of points ahead of the current index (e.g. 15 points, representing 0.3s)
                    // by setting their y to null. Chart.js will not draw segments across null values.
                    const gapPoints = 15;
                    for (let i = 1; i <= gapPoints; i++) {
                        const clearIndex = (index + i) % arraySize;
                        if (this.data.pressure[clearIndex]) this.data.pressure[clearIndex].y = null;
                        if (this.data.pmus[clearIndex]) this.data.pmus[clearIndex].y = null;
                        if (this.data.flow[clearIndex]) this.data.flow[clearIndex].y = null;
                        if (this.data.volume[clearIndex]) this.data.volume[clearIndex].y = null;
                    }

                    // Clean up trigger markers in gap zone
                    const gapSize = 0.3; // 0.3 second gap
                    const gapStart = wrappedTime;
                    const gapEnd = (wrappedTime + gapSize) % this.timeWindow;

                    const filterMarkers = (markers) => {
                        return markers.filter(m => {
                            if (gapStart < gapEnd) {
                                return !(m.x >= gapStart && m.x <= gapEnd);
                            } else {
                                return !(m.x >= gapStart || m.x <= gapEnd);
                            }
                        });
                    };
                    this.data.pressureTriggerMarkers = filterMarkers(this.data.pressureTriggerMarkers);
                    this.data.flowTriggerMarkers = filterMarkers(this.data.flowTriggerMarkers);
                }

                this.lastWrappedTime = wrappedTime;

                // Update charts
                this.updateCharts();
            },

            calculateRespiratoryMechanics(timeInBreath, inspirationTime, pauseTime, expirationTime, triggerEffort = 0, inspiratoryPauseActive = false) {
                const tau = this.calculateTimeConstant();
                let pressure, flow, volume;

                if (this.settings.mode === 'pressure_control') {
                    const result = this.calculatePCMechanics(timeInBreath, inspirationTime, tau, inspiratoryPauseActive);
                    return this.applyTriggerEffort(result, triggerEffort);
                } else if (this.settings.mode === 'volume_control') {
                    const result = this.calculateVCMechanics(timeInBreath, inspirationTime, pauseTime, tau);
                    return this.applyTriggerEffort(result, triggerEffort);
                } else if (this.settings.mode === 'pressure_support') {
                    // CPAP mode (PS = 0): continuous pressure maintenance, no triggering
                    if (this.settings.pressureSupport === 0) {
                        return this.calculateCPAPMechanics(timeInBreath, tau);
                    }
                    // Pass triggerEffort (patientRespiratoryEffort) for smooth ineffective effort handling
                    const result = this.calculatePSMechanics(timeInBreath, tau, triggerEffort);
                    return this.applyTriggerEffort(result, triggerEffort);
                } else if (this.settings.mode === 'prvc') {
                    const result = this.calculatePRVCMechanics(timeInBreath, inspirationTime, tau, inspiratoryPauseActive);
                    return this.applyTriggerEffort(result, triggerEffort);
                } else if (this.settings.mode === 'pav_plus') {
                    const result = this.calculatePAVPlusMechanics(timeInBreath, tau, inspiratoryPauseActive);
                    return this.applyTriggerEffort(result, triggerEffort);
                }
            },

            applyTriggerEffort(mechanics, triggerEffort) {
                if (triggerEffort === 0 || this.breathPhase !== 'expiration') {
                    return mechanics;
                }

                // Intrinsic PEEP from elastic recoil at current lung volume
                const elastance = 1 / this.patient.compliance;
                const intrinsicPEEP = Math.max(0, mechanics.volume * elastance);

                // Volume-dependent transmission factor
                const volumeFraction = Math.max(0, Math.min(1, mechanics.volume / 600));
                const baseTransmission = 0.75;
                const volumeEffect = volumeFraction * 0.4;
                let transmissionFactor = baseTransmission - volumeEffect;

                // Auto-PEEP soft attenuation: the higher the elastic recoil relative to
                // effort, the more the effort is absorbed by decompressing trapped gas
                // rather than deflecting airway pressure. Squared ratio gives steep
                // attenuation at high volumes (lungs full → minimal dip) while still
                // producing visible dips at low volumes (ineffective efforts).
                let autoPEEPAttenuation = 1;
                if (intrinsicPEEP > 0) {
                    const ratio = triggerEffort / (triggerEffort + intrinsicPEEP);
                    autoPEEPAttenuation = ratio * ratio;
                }

                // During occlusion (POCC), the system is closed — full effort transmits
                // directly to airway pressure with no auto-PEEP attenuation. Gate on the
                // actual maneuver (valve closed) rather than on the button-held request, so
                // the amplified transmission only appears once the hold has engaged — this
                // is how POCC was validated: ΔPocc requires the closed-valve condition.
                if (this.activePauseType === 'expiratory') {
                    transmissionFactor = 1 / 0.75;
                    autoPEEPAttenuation = 1;
                }

                const pressureDrop = triggerEffort * autoPEEPAttenuation * transmissionFactor;

                // NOTE: Do NOT add flow here - the mode-specific expiratory flow calculation
                // already includes Pmus braking effect. Adding flow here would double-count
                // the patient effort and cause the flow trigger to fire prematurely.
                // The mode calculation allows flow to become positive when patient effort
                // overcomes elastic recoil, which is what the flow trigger should detect.

                return {
                    pressure: mechanics.pressure - pressureDrop,
                    flow: mechanics.flow,  // No flow addition - mode calculation handles it
                    volume: mechanics.volume
                };
            },

            // --- Work-share Responsive Pmus integrator (Task 1) ---
            // Accumulate vent and patient work over the inspiratory portion of the current breath.
            // Units: pressure cmH2O, volume mL → divide by 10.197 to convert cmH2O·L to J (1 cmH2O·L ≈ 0.098 J).
            // We keep raw cmH2O·mL internally to avoid a constant in the hot path; convert only when surfacing.
            //
            // Mode-agnostic: dV > 0 (lung volume rising) is the universal signal that
            // inspiration is happening — works for vent-driven breaths AND CPAP/PS-0
            // where the patient's effort is the only driver. dV <= 0 (expiration, hold,
            // or noise) skips integration but still updates the volume baseline so the
            // next dV is clean.
            accumulateWorkThisTick(pressureAw, pmusValue, lungVolumeMl) {
                const dV = lungVolumeMl - this.lastVolumeForWork;  // mL
                this.lastVolumeForWork = lungVolumeMl;
                if (dV <= 0) return;

                const peep = this.settings.peep || 0;
                // P_aw above PEEP — clamp to ≥0 so PEEP transients don't subtract work.
                const pAboveBaseline = Math.max(0, pressureAw - peep);
                this.wVentAccum    += pAboveBaseline * dV;       // cmH2O·mL
                this.wPatientAccum += Math.max(0, pmusValue) * dV; // cmH2O·mL
            },

            // Resolve effective rise/hold/decay times, optionally shortened by respiratory rate
            effectivePmusTimings() {
                let rise  = Math.max(0, this.patient.pmusRiseTime  ?? 0.30);
                let hold  = Math.max(0, this.patient.pmusHoldTime  ?? 0.20);
                let decay = Math.max(0, this.patient.pmusDecayTime ?? 0.40);

                // Task 5 (revised v2): Responsive scaling.
                //   amplitude × uf       (in getEffectivePmusAmplitude — already applied)
                //   rise UNCHANGED       — neural ramp-up time is roughly fixed; a smaller
                //                          peak at the same rise duration produces a lower
                //                          dP/dt, which is what makes P0.1 drop with support
                //                          and rise with air hunger
                //   hold × uf            — sustained-effort dwell shortens with comfort
                //   decay × uf           — comfortable patient lets go quickly; air-hungry
                //                          patient sustains the trail
                // Net: dP/dt scales linearly with uf, P0.1 follows. Total duration shortens
                // (via decay) when supported and lengthens when not. Composes
                // multiplicatively with rate coupling.
                if (this.patient.responsivePmus && (this.patient.baselinePmusAmplitude || 0) > 0) {
                    const uf = Math.max(0.1, this.unloadFactor || 1);
                    rise  = Math.max(0, this.patient.baselineRiseTime  ?? rise);
                    hold  = Math.max(0, this.patient.baselineHoldTime  ?? hold)  * uf;
                    decay = Math.max(0, this.patient.baselineDecayTime ?? decay) * uf;
                }

                if (this.patient.pmusRateCoupling) {
                    const threshold = Math.max(1, this.patient.pmusRateCouplingThreshold ?? 25);
                    const rate = this.patient.spontaneousRate || this.respiratoryRate || threshold;
                    if (rate > threshold) {
                        const scale = threshold / rate;
                        rise  *= scale;
                        hold  *= scale;
                        decay *= scale;
                    }
                }
                return { rise, hold, decay, total: rise + hold + decay };
            },

            // Normalized 0→1 Pmus shape template, piecewise: rise → hold at 1 → decay → 0
            normalizedPmusTemplate(t, timings) {
                if (t <= 0) return 0;
                const { rise, hold, decay, total } = timings;
                if (t >= total) return 0;

                if (t < rise) {
                    const u = rise > 0 ? t / rise : 1;
                    switch (this.patient.pmusRiseShape) {
                        case 'half-cosine': return Math.sin(u * Math.PI / 2);
                        case 'smoothstep': return u * u * (3 - 2 * u);
                        case 'linear':
                        default: return u;
                    }
                }
                if (t < rise + hold) return 1;

                const u = decay > 0 ? (t - rise - hold) / decay : 1;
                switch (this.patient.pmusDecayShape) {
                    case 'half-cosine':
                        // Quarter-cosine: smooth (zero slope) at peak, finite slope at baseline.
                        // Kept for backward-compat with legacy scenario migration.
                        return Math.cos(u * Math.PI / 2);
                    case 'exponential': {
                        // Exponential rebased so endpoints are exactly 1→0 and continuous.
                        const k = 3;
                        const raw = Math.exp(-k * u);
                        const end = Math.exp(-k);
                        return (raw - end) / (1 - end);
                    }
                    case 'smoothstep':
                    default:
                        // Smoothstep-down: 1 - u²(3-2u). Zero slope at both u=0 and u=1,
                        // so the curve lands smoothly on baseline with no angle.
                        return 1 - u * u * (3 - 2 * u);
                }
            },

            // Calculate physiological Pmus waveform (rise → hold → decay)
            calculatePmus(timeInBreath) {
                if (timeInBreath < 0) return 0;
                const amplitude = this.getEffectivePmusAmplitude();
                const variabilityFactor = this.patient.naturalVariabilityEnabled
                    ? this.breathVariability.pmusAmplitudeFactor
                    : 1.0;
                const effectiveAmplitude = amplitude * variabilityFactor;

                const timings = this.effectivePmusTimings();
                if (timings.total <= 0) return 0;

                const t = Math.min(timeInBreath, timings.total);
                return effectiveAmplitude * this.normalizedPmusTemplate(t, timings);
            },

            // Calculate Pmus effect on expiratory flow using first-order low-pass filter
            // Filters the Pmus value itself to ensure smooth sinusoidal response
            // This prevents abrupt changes when Pmus tracking has discontinuities
            calculateExpiratoryPmusBraking(pmus, tau, resistance) {
                // Calculate timestep (cap dt to prevent jumps after inspiration phase)
                const rawDt = this.lastBrakingUpdateTime > 0 ? this.currentTime - this.lastBrakingUpdateTime : 0.01;
                const dt = Math.min(rawDt, 0.02); // Cap at 20ms to prevent large jumps
                this.lastBrakingUpdateTime = this.currentTime;

                // Filter the PMUS value itself (not just the braking flow)
                // This ensures any discontinuity in Pmus tracking gets smoothed
                const filterTau = 0.15; // Smooth but responsive
                const alpha = Math.min(1.0, dt / filterTau);

                // Track filtered Pmus (reusing filteredBrakingFlow as filteredPmus for now)
                this.filteredBrakingFlow = this.filteredBrakingFlow + alpha * (pmus - this.filteredBrakingFlow);

                // Clamp very small values to 0 to avoid floating point drift
                if (Math.abs(this.filteredBrakingFlow) < 0.05) {
                    this.filteredBrakingFlow = 0;
                }

                // Calculate braking flow from filtered Pmus
                // Flow = Pressure / Resistance (converted to L/min)
                const brakingFlow = this.filteredBrakingFlow > 0 ? (this.filteredBrakingFlow / resistance) * 60 : 0;

                return brakingFlow;
            },

            // Compute corrected expiratory flow matching the display path (lines 4830-4891)
            // Used for trigger detection so the trigger fires based on displayed flow, not analytical flow
            computeCorrectedExpiratoryFlow(inspirationTime, pauseTime, patientRespiratoryEffort) {
                const tau = (this.patient.resistance * this.patient.compliance) / 1000;
                let flow = -(this.integratedVolume / tau) * 60 / 1000;

                const actualInspTime = this.inspirationEndTime || inspirationTime;
                const timeInExp = Math.max(0, (this.currentTime - this.breathStartTime) - actualInspTime - pauseTime);

                const hasSB = this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0;

                // Chest wall recoil (matches lines 4864-4875)
                if (hasSB && this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath) {
                    const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                    const amplitudeEffect = Math.max(0, (this.patient.pmusAmplitude - 5) / 15);
                    const recoilPressure = this.patient.pmusAmplitude * amplitudeEffect * chestWallFraction;
                    const recoilDecay = Math.exp(-timeInExp / 0.06);
                    flow += -(recoilPressure / this.patient.resistance) * 60 * recoilDecay * 2.5;
                }

                // Flow limitation (matches line 4881)
                flow = this.applyFlowLimit(flow, this.integratedVolume + this.residualVolume, timeInExp);

                // Pmus braking — use the same smoothedBrakingFlow the display path uses, so
                // the trigger fires when the *displayed* inspiratory bump crosses the threshold.
                // Using the raw (Pmus/R) value here instead makes the trigger under-fire by up to
                // ~1 L/min during the Pmus decay window, because the display's asymmetric
                // envelope (instant attack, 150 ms release) lingers above the instantaneous raw.
                if (hasSB && this.smoothedBrakingFlow > 0.05) {
                    flow += this.smoothedBrakingFlow;
                }

                // Cardiac oscillations (must match display path for trigger accuracy)
                const cardiacOsc = this.calculateCardiacOscillation();
                flow += cardiacOsc.flowOscillation;

                return flow;
            },

            // Calculate cardiac oscillation at current time
            // Uses a sharp pulse waveform (not sinusoidal) to match real cardiogenic oscillations:
            // - Narrow systolic spike (~30% of cardiac cycle) with steep rise/fall
            // - Slight negative rebound after systole
            // - Flat diastolic period between beats
            calculateCardiacOscillation() {
                if (!this.patient.cardiacOscillationsEnabled) {
                    return {flowOscillation: 0, pressureOscillation: 0};
                }

                // Only apply during expiration phase (OK during pause maneuvers)
                if (this.breathPhase !== 'expiration' && this.activePauseType !== 'inspiratory' && this.activePauseType !== 'expiratory') {
                    return {flowOscillation: 0, pressureOscillation: 0};
                }

                // Heart rate in Hz
                const heartRateHz = this.patient.heartRate / 60;
                // Phase within current cardiac cycle (0 to 1)
                const cyclePhase = (heartRateHz * this.currentTime) % 1;

                // Systolic ejection takes ~30% of the cardiac cycle
                const systolicFraction = 0.30;
                // Small negative rebound after systole (~15% of cycle)
                const reboundFraction = 0.15;

                let pressureWave = 0;
                let flowWave = 0;

                if (cyclePhase < systolicFraction) {
                    // Systolic phase: sharp peaked pulse using sin^3
                    // sin^3 creates a narrower, more peaked waveform than sin
                    const t = cyclePhase / systolicFraction; // 0 to 1 within systole
                    const pulse = Math.pow(Math.sin(Math.PI * t), 3);

                    pressureWave = pulse;
                    flowWave = pulse;

                } else if (cyclePhase < systolicFraction + reboundFraction) {
                    // Brief negative rebound after systole (elastic recoil)
                    const t = (cyclePhase - systolicFraction) / reboundFraction; // 0 to 1
                    const rebound = -0.25 * Math.pow(Math.sin(Math.PI * t), 2);

                    pressureWave = rebound;
                    flowWave = rebound;
                }
                // else: diastolic flat period, both stay at 0

                // Cardiogenic flow oscillation: 4 L/min peak amplitude
                const flowAmplitude = 4;
                const flowOscillation = flowAmplitude * flowWave;

                // Cardiogenic pressure oscillation: 0.25 cmH2O peak amplitude
                const pressureAmplitude = 0.25;
                const pressureOscillation = pressureAmplitude * pressureWave;

                return {flowOscillation, pressureOscillation};
            },

            calculatePCMechanics(timeInBreath, inspirationTime, tau, inspiratoryPauseActive = false) {
                let pressure, flow, volume;

                // Use inspiration calculation if in inspiration phase OR if inspiratory pause maneuver is active
                // The inspiratoryPauseActive parameter tells us the pause maneuver is actually happening (not just button pressed)
                if (this.breathPhase === 'inspiration' || inspiratoryPauseActive) {
                    // Use centrally-calculated Pmus time (handles both entrainment and independent breathing)
                    let pmus = 0;
                    let pmusTime = 0;

                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                        pmusTime = this.currentPmusTime;
                        pmus = this.calculatePmus(pmusTime);
                    }

                    // Pressure Control Mode: Ventilator maintains constant airway pressure at PIP
                    // Pmus creates additional transpulmonary pressure gradient → increases flow/volume
                    const targetPressure = this.settings.peep + this.settings.deltaPressure;

                    // Apply airway opening pressure adjustment
                    // Reduces effective compliance to simulate volume lost to airway closure
                    // Use getEffectiveCompliance() to include breath-to-breath variability
                    let effectiveCompliance = this.getEffectiveCompliance();

                    // Apply upper inflection point effect
                    // Reduces compliance when alveolar pressure exceeds UIP threshold
                    effectiveCompliance = this.applyUpperInflectionPoint(effectiveCompliance, targetPressure);

                    let circuitVolumeOffset = 0;
                    const circuitCompliance = 3; // mL/cmH2O

                    if (this.patient.airwayOpeningPressure > 0 && targetPressure > this.patient.airwayOpeningPressure) {
                        // Calculate effective compliance that accounts for airway closure
                        // Volume = Compliance × (Pressure above AOP)
                        // For same driving pressure, get less volume
                        const pressureAboveAOP = targetPressure - this.patient.airwayOpeningPressure;
                        const totalPressure = this.settings.deltaPressure;
                        // Effective compliance is reduced proportionally
                        effectiveCompliance = this.getEffectiveCompliance() * (pressureAboveAOP / totalPressure);
                        // Circuit volume offset
                        circuitVolumeOffset = circuitCompliance * (this.patient.airwayOpeningPressure - this.settings.peep);
                    }

                    const pressureDifference = targetPressure - this.settings.peep;

                    // Calculate normalized Pmus position in the waveform
                    const normalizedPmusTime = this.patient.pmusDuration > 0 ? pmusTime / this.patient.pmusDuration : 0;

                    // Recoil starts at the end of Pmus rise (i.e., once Pmus is at peak and
                    // beginning to relax). Using rise/duration keeps recoil onset aligned
                    // with the actual waveform shape — at this point declineFraction is 0,
                    // so recoilPressure ramps in smoothly from zero with no visible kink.
                    // Falls back to the legacy 0.753 only if pmusDuration is somehow 0.
                    const recoilStartPoint = this.patient.pmusDuration > 0
                        ? (this.patient.pmusRiseTime ?? 0) / this.patient.pmusDuration
                        : 0.753;

                    // For flow/volume calculations, use "active" Pmus that excludes passive recoil phase
                    // During passive recoil (last 30% of relaxation), only pressure is affected, not flow
                    let activePmus = pmus;
                    if (normalizedPmusTime > recoilStartPoint && normalizedPmusTime <= 1.0) {
                        // Cap Pmus at the value when recoil starts (70% of peak)
                        activePmus = this.patient.pmusAmplitude * 0.7;
                    } else if (pmus === 0 && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                        // After Pmus has ended, maintain the last active value (70% of peak)
                        // This prevents discontinuity in PC mode when breath continues after Pmus ends
                        activePmus = this.patient.pmusAmplitude * 0.7;
                    }

                    // Pmus adds to the driving pressure gradient ONLY if Pmus was actually active during this breath
                    // This handles both patient-triggered breaths and reverse triggering
                    // Note: breathWasTriggered alone is not sufficient because cardiac oscillations
                    // can trigger breaths without any patient effort
                    const shouldIncludePmus = this.pmusWasActiveThisBreath;
                    const effectivePressureGradient = pressureDifference + (shouldIncludePmus ? activePmus : 0);
                    const maxVolume = effectiveCompliance * effectivePressureGradient;

                    // Track if pmus is currently active in this breath (for recoil tracking)
                    if (pmus > 0 && normalizedPmusTime > 0 && normalizedPmusTime <= 1.0) {
                        this.pmusWasActiveThisBreath = true;
                        // Also track if pmus is active during the inspiratory phase (for volume calculation)
                        if (timeInBreath < inspirationTime) {
                            this.pmusWasActiveDuringInspiration = true;
                        }
                    }

                    // Calculate passive recoil effect during late cycling
                    // During relaxation phase when Pmus drops below 70% of peak (70% → 0%), elastic recoil develops
                    let recoilPressure = 0;

                    // Relaxation phase: after Pmus drops below 70% of peak
                    // Recoil continues until breath cycles off
                    // ONLY apply recoil if pmus was active at some point during THIS breath
                    const inRecoilPhase = normalizedPmusTime > recoilStartPoint;
                    const pmusEnded = pmus === 0 && this.pmusWasActiveThisBreath;

                    if (this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath && (inRecoilPhase || pmusEnded)) {
                        // During the late relaxation phase of Pmus (70%-0% of peak) and beyond
                        // As respiratory muscles relax, elastic recoil pressure is transmitted to airways
                        // This creates a POSITIVE pressure increase at the airway

                        // Recoil pressure proportional to chest wall elastance fraction
                        // EL/Ers determines how much is lung vs chest wall
                        // Lower EL/Ers = more chest wall contribution = more recoil
                        const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                        // Use effective Pmus amplitude (scales with vent support when responsive is ON)
                        const effectivePmus = this.getEffectivePmusAmplitude();
                        // Scale effect: normal Pmus (≤5) has no recoil, ramps up to full effect at 20
                        const amplitudeEffect = Math.max(0, (effectivePmus - 5) / 15);
                        const maxRecoilPressure = effectivePmus * amplitudeEffect * chestWallFraction;

                        // Scale recoil by actual Pmus decline — quadratic so recoil stays small while Pmus is still strong
                        const declineFraction = effectivePmus > 0 ? Math.max(0, 1 - (pmus / effectivePmus)) : 1;
                        recoilPressure = maxRecoilPressure * declineFraction * declineFraction;
                    }

                    // Volume and flow calculation showing patient effort
                    // Two components with correct physics (same approach as PS mode):
                    // 1. Ventilator PC contribution: exponential decay (from constant PC pressure)
                    // 2. Pmus contribution: follows sinusoidal Pmus waveform (shows patient effort)
                    // Total maxVolume = C × (PC + Pmus_peak) ensures correct equilibrium

                    const expTerm = timeInBreath < 0.01 ? 1 : Math.exp(-timeInBreath / tau);
                    const resistance = this.patient.resistance;

                    // Calculate pressure rise progress - flow should scale with actual pressure delivery
                    // This prevents flow spike when pressure hasn't risen yet
                    // Must match the pressure rise calculation used later in this function
                    // Rise time is fixed - ventilator aims for same rise time regardless of patient effort
                    const totalRiseTimeForFlow = this.settings.riseTime;

                    // Calculate how much of PC pressure is currently delivered (0 to 1)
                    // Uses cubic ease-out to match the pressure waveform
                    let pressureRiseProgress = 1.0;
                    if (timeInBreath < totalRiseTimeForFlow) {
                        const t = timeInBreath / totalRiseTimeForFlow;
                        pressureRiseProgress = 1 - Math.pow(1 - t, 3); // Cubic ease-out
                    }

                    // Calculate total driving pressure for correct equilibrium volume
                    const pmusPeak = shouldIncludePmus ? this.patient.pmusAmplitude : 0;
                    const totalMaxVolume = effectiveCompliance * (pressureDifference + pmusPeak);

                    // Ventilator PC contribution: exponential decay toward PC equilibrium
                    // Scale by pressureRiseProgress to match actual pressure delivery
                    const pcMaxVolume = effectiveCompliance * pressureDifference;
                    const pcVolume = timeInBreath < 0.01
                        ? (pcMaxVolume / tau) * timeInBreath * pressureRiseProgress
                        : pcMaxVolume * (1 - expTerm) * pressureRiseProgress;
                    const pcFlow = (pcMaxVolume / tau) * expTerm * 0.06 * pressureRiseProgress;

                    // Pmus contribution: follows Pmus waveform (sinusoidal shape)
                    // This creates the rounded "hump" showing patient effort
                    // Pmus flow is NOT scaled by pressureRiseProgress - patient effort generates flow
                    // even before ventilator has fully pressurized (creates flow demand)
                    // Flow follows full Pmus waveform - no fade during recoil phase
                    // Only pressure calculations use recoil phase logic
                    let pmusFlow = 0;
                    let pmusVolume = 0;
                    if (shouldIncludePmus && pmus > 0 && pmusPeak > 0) {
                        // Pmus flow follows instantaneous Pmus (direct from equation of motion)
                        // Scale by pmus/pmusPeak to normalize, then by contribution ratio
                        const pmusContribution = pmusPeak / (pressureDifference + pmusPeak);
                        pmusFlow = (pmus / resistance) * 60 * pmusContribution; // L/min, scaled

                        // Pmus volume: track as fraction of what Pmus contributes to total
                        // Use numerical integration for correct volume tracking
                        if (timeInBreath < 0.02) {
                            this.pcPmusVolumeIntegral = 0;
                        }
                        const dt = 0.016;
                        this.pcPmusVolumeIntegral = (this.pcPmusVolumeIntegral || 0) + (pmusFlow / 60) * dt * 1000;
                        // Cap Pmus volume contribution to its share of total
                        const pmusMaxVolumeShare = effectiveCompliance * pmusPeak;
                        pmusVolume = Math.min(this.pcPmusVolumeIntegral, pmusMaxVolumeShare);
                    }

                    // Total flow and volume
                    flow = pcFlow + pmusFlow;
                    volume = pcVolume + pmusVolume;

                    // Blend from trigger flow for patient-triggered breaths
                    // This creates smooth transition from pre-trigger flow to inspiratory flow
                    // Note: Check flowAtTrigger !== undefined (not truthy) since 0 is a valid flow value
                    if (this.breathWasTriggered && this.flowAtTrigger !== undefined && timeInBreath < totalRiseTimeForFlow) {
                        const blendProgress = timeInBreath / totalRiseTimeForFlow;
                        const blendFactor = 1 - Math.pow(1 - blendProgress, 3); // Cubic ease-out
                        flow = this.flowAtTrigger + (flow - this.flowAtTrigger) * blendFactor;
                    }

                    // Add circuit volume offset if airway closure is active
                    if (this.patient.airwayOpeningPressure > 0 && targetPressure > this.patient.airwayOpeningPressure) {
                        volume = volume + circuitVolumeOffset;
                    }

                    // Breath-stacking: add residual volume from incomplete exhalation
                    // Only add residual if this is true breath-stacking (< 50% exhaled)
                    // For air-trapping (>= 50% exhaled), restart volume from near zero
                    if (this.isBreathStacking) {
                        volume = volume + (this.residualVolume || 0);
                    }

                    // If pressure doesn't reach opening pressure, no lung flow
                    if (this.patient.airwayOpeningPressure > 0 && targetPressure <= this.patient.airwayOpeningPressure) {
                        flow = 0;
                    }

                    // Airway pressure calculation with Pmus effect
                    // Rise time multiplier shows ventilator struggling to keep up with patient demand
                    // No effect at Pmus ≤ 10, very aggressive at Pmus 20+

                    const startPressure = this.pressureAtTrigger || this.settings.peep;

                    // Rise time multiplier - only applies above Pmus 10
                    // Pmus 10: 1x, Pmus 15: 1.5x, Pmus 20: 3x, Pmus 25: 5.6x
                    const pmusRiseFactor = shouldIncludePmus && pmusPeak > 10
                        ? Math.pow((pmusPeak - 10) / 7, 2)
                        : 0;
                    // Multiplicative: stretches programmed rise time with high Pmus
                    // Floor (0.05 * factor): minimum rise time even at riseTime=0,
                    // because the vent physically can't satisfy extreme flow demand instantaneously
                    // Math.max ensures the floor only matters at low rise times — no impact on higher settings
                    const totalRiseTime = Math.max(this.settings.riseTime * (1 + pmusRiseFactor), 0.05 * pmusRiseFactor);

                    if (timeInBreath < totalRiseTime) {
                        const t = timeInBreath / totalRiseTime;
                        const easeOut = 1 - Math.pow(1 - t, 3);
                        pressure = startPressure + (targetPressure - startPressure) * easeOut;
                    } else {
                        pressure = targetPressure;
                    }

                    // Add recoil component
                    const overallProgress = totalRiseTime > 0 ? Math.min(timeInBreath / totalRiseTime, 1) : 1;
                    pressure += recoilPressure * overallProgress;

                    // Resistive pressure overshoot — continuous servo-based model
                    // The ventilator servo loop (~25ms cycle) can't perfectly track aggressive pressurization.
                    // Overshoot naturally diminishes as rise time increases relative to servo response time.
                    // No hard thresholds — the 1/(1 + riseTime/servoTau) curve handles all rise times smoothly.
                    if (timeInBreath >= totalRiseTime) {
                        const servoTau = 0.015;
                        const timeSinceRise = timeInBreath - totalRiseTime;
                        const overshootFactor = 1 / (1 + totalRiseTime / servoTau);
                        const resistanceFactor = resistance / 10;
                        const overshootPeak = pressureDifference * resistanceFactor * 0.15 * overshootFactor;
                        // Only apply if peak exceeds manometer precision (~0.5 cmH2O)
                        // Sub-clinical values create chart interpolation artifacts
                        if (overshootPeak >= 0.5) {
                            pressure += overshootPeak * Math.exp(-timeSinceRise / 0.04);
                        }
                    }

                    // Add pressure response to active Pmus during plateau phase
                    // Ventilator servo lag creates brief negative deflection when patient effort starts
                    // Then servo compensates by increasing flow, restoring pressure toward target
                    // ONLY apply for reverse triggering (breath NOT triggered by patient)
                    // For patient-triggered breaths, the ventilator is already responding to effort from the start
                    // so a mid-plateau notch would be unnatural
                    const isReverseTrigger = !this.breathWasTriggered && shouldIncludePmus;
                    if (isReverseTrigger && pmus > 0 && normalizedPmusTime > 0 && normalizedPmusTime < recoilStartPoint) {
                        const servoLagFactor = 0.15;

                        // Servo compensation: full lag effect early, fades as ventilator catches up
                        // 0-15% of Pmus: full effect (servo hasn't responded yet)
                        // 15-35% of Pmus: gradual recovery (servo increasing flow)
                        // 35%+: minimal effect (servo has caught up)
                        const servoResponseStart = 0.15;
                        const servoResponseEnd = 0.35;

                        let servoCompensation = 1.0; // Full lag effect by default
                        if (normalizedPmusTime > servoResponseStart) {
                            if (normalizedPmusTime < servoResponseEnd) {
                                // Gradual recovery phase
                                const recoveryProgress = (normalizedPmusTime - servoResponseStart) / (servoResponseEnd - servoResponseStart);
                                servoCompensation = 1.0 - (recoveryProgress * 0.85); // Recover to 15% of original dip
                            } else {
                                // Servo has mostly caught up
                                servoCompensation = 0.15;
                            }
                        }

                        pressure -= pmus * servoLagFactor * servoCompensation;
                    }

                } else {
                    // Expiration - check if Pmus is still active (only if spontaneous breathing is enabled)
                    const timeInExpiration = timeInBreath - inspirationTime;

                    const targetPressure = this.settings.peep + this.settings.deltaPressure;
                    const pressureDifference = targetPressure - this.settings.peep;

                    // Apply same airway opening pressure adjustment as inspiration
                    // Use getEffectiveCompliance() to include breath-to-breath variability
                    let expiratoryEffectiveCompliance = this.getEffectiveCompliance();

                    // Apply upper inflection point effect to expiratory compliance
                    expiratoryEffectiveCompliance = this.applyUpperInflectionPoint(expiratoryEffectiveCompliance, targetPressure);

                    const circuitCompliance = 3;
                    if (this.patient.airwayOpeningPressure > 0 && targetPressure > this.patient.airwayOpeningPressure) {
                        const pressureAboveAOP = targetPressure - this.patient.airwayOpeningPressure;
                        const totalPressure = this.settings.deltaPressure;
                        expiratoryEffectiveCompliance = this.getEffectiveCompliance() * (pressureAboveAOP / totalPressure);
                    }

                    // End-inspiratory volume includes patient effort ONLY if Pmus was actually active during inspiration
                    // Note: breathWasTriggered alone is not sufficient because cardiac oscillations
                    // can trigger breaths without any patient effort
                    const shouldIncludePmusInVolume = this.pmusWasActiveDuringInspiration;
                    const patientEffort = (shouldIncludePmusInVolume && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) ? this.patient.pmusAmplitude * 0.7 : 0;
                    const effectivePressureGradient = pressureDifference + patientEffort;
                    const maxVolume = expiratoryEffectiveCompliance * effectivePressureGradient;
                    const endInspiratoryVolume = maxVolume * (1 - Math.exp(-inspirationTime / tau));

                    // Breath-stacking: total volume to exhale includes residual from previous incomplete exhalation
                    const totalVolumeToExhale = endInspiratoryVolume + this.residualVolume;

                    // Calculate base expiratory flow
                    let baseExpiratoryFlow = -((totalVolumeToExhale / tau) * Math.exp(-timeInExpiration / tau)) * 0.06;

                    // Add chest wall recoil contribution to peak expiratory flow
                    // When inspiratory muscles relax, chest wall recoil adds to driving pressure
                    // Lower EL/Ers = more chest wall = more recoil-driven flow boost
                    if (this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath && this.patient.pmusAmplitude > 0) {
                        const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                        // Scale effect: normal Pmus (≤5) has no recoil, ramps up to full effect at 20
                        const amplitudeEffect = Math.max(0, (this.patient.pmusAmplitude - 5) / 15);
                        const recoilPressure = this.patient.pmusAmplitude * amplitudeEffect * chestWallFraction;

                        // Recoil-driven flow: sharp initial burst from chest wall recoil
                        // Time constant controls decay speed, multiplier controls peak amplitude
                        const recoilTau = 0.06;
                        const recoilDecay = Math.exp(-timeInExpiration / recoilTau);
                        const recoilFlow = -(recoilPressure / this.patient.resistance) * 60 * recoilDecay * 2.5;

                        baseExpiratoryFlow += recoilFlow;
                    }

                    // Capture patient-only flow before circuit recoil (for flowPressure calculation)
                    const patientExpiratoryFlow = baseExpiratoryFlow;

                    // Circuit recoil flow: compressed gas in circuit tubing decompresses on every breath
                    // Unlike chest wall recoil, this is unconditional — circuit always stores compressed gas
                    {
                        const circuitRecoilTau = 0.025; // 25ms — matches pressure decay constant
                        const circuitResistance = 3.0; // cmH2O per L/s
                        const actualEndInspPressure = this.endInspiratoryPressure || (this.settings.peep + this.settings.deltaPressure);
                        const drivingPressure = actualEndInspPressure - this.settings.peep;
                        const circuitRecoilDecay = Math.exp(-timeInExpiration / circuitRecoilTau);
                        const circuitRecoilFlow = -(drivingPressure / circuitResistance) * 60 * circuitRecoilDecay;
                        baseExpiratoryFlow += circuitRecoilFlow;
                    }

                    // Chest wall recoil only applies when patient had active Pmus during this breath
                    // Passive/mandatory breaths don't stretch the chest wall beyond resting position

                    // Apply flow limitation if enabled (obstructive physiology - COPD/Asthma)
                    // This caps expiratory flow based on dynamic airway compression
                    const currentVolume = endInspiratoryVolume * Math.exp(-timeInExpiration / tau);
                    baseExpiratoryFlow = this.applyFlowLimit(baseExpiratoryFlow, currentVolume + this.residualVolume, timeInExpiration);

                    // Ineffective effort: Flow follows Pmus directly (no filtering)
                    // This ensures flow follows the same rate of increase and decrease as Pmus
                    // without lag from the low-pass filter

                    // Check if we're in the Pmus window
                    const inPmusWindow = this.patient.spontaneousBreathingEnabled &&
                                         this.patient.pmusAmplitude > 0 &&
                                         this.currentPmusTime >= 0 &&
                                         this.currentPmusTime < this.patient.pmusDuration;

                    let effortFlow = 0;

                    if (inPmusWindow) {
                        // Get Pmus directly from waveform
                        const pmus = this.calculatePmus(this.currentPmusTime);

                        // effortPmus follows the full Pmus waveform (including recoil decay)
                        // The sin() waveform naturally decays from ~90% to 0% during recoil,
                        // providing smooth braking transition for both triggered and ineffective efforts
                        let effortPmus = pmus;

                        // Flow follows Pmus: Flow = effortPmus / R
                        effortFlow = (effortPmus / this.patient.resistance) * 60; // L/min
                    }

                    // Smooth tail from low-pass filtered braking (main loop)
                    if (!inPmusWindow && this.smoothedBrakingFlow > 0.05) {
                        effortFlow = this.smoothedBrakingFlow;
                    }

                    flow = baseExpiratoryFlow + effortFlow;

                    // Display volume shows just tidal volume (ventilator-style, always starts at 0)
                    // Flow calculation uses totalVolumeToExhale for correct physics
                    volume = endInspiratoryVolume * Math.exp(-timeInExpiration / tau);

                    // Expiratory pressure: circuit recoil drives initial steep decay
                    // Circuit compliance (3 mL/cmH2O) stores compressed gas that decompresses rapidly
                    const circuitRecoilTau = 0.025; // 25ms — circuit decompression time constant
                    const circuitResistance = 3.0; // cmH2O per L/s - expiratory circuit resistance
                    const flowPressure = circuitResistance * Math.abs(patientExpiratoryFlow) / 60;
                    // Use captured end-inspiratory pressure (captured before settings applied)
                    // This ensures smooth transition even when PEEP changes at start of expiration
                    const actualEndInspPressure = this.endInspiratoryPressure || (this.settings.peep + this.settings.deltaPressure);
                    const circuitRecoilPressure = (actualEndInspPressure - this.settings.peep - flowPressure) * Math.exp(-timeInExpiration / circuitRecoilTau);
                    pressure = this.settings.peep + flowPressure + circuitRecoilPressure;
                }

                // Volume display is ventilator-style: always starts at 0 each breath
                // (residual volume affects flow/pressure physics but not the displayed volume waveform)
                return {
                    pressure: Math.max(0, pressure),
                    flow: flow,
                    volume: Math.max(0, volume)
                };
            },

            // PRVC Mode: Pressure-controlled delivery using adaptive working pressure
            // Similar to PC mode but uses prvcWorkingPressure (adjusted breath-to-breath)
            // instead of deltaPressure to achieve target tidal volume
            calculatePRVCMechanics(timeInBreath, inspirationTime, tau, inspiratoryPauseActive = false) {
                let pressure, flow, volume;

                // Clamp working pressure to Pmax
                const workingPressure = Math.min(this.prvcWorkingPressure, this.settings.prvcPmax);

                if (this.breathPhase === 'inspiration' || inspiratoryPauseActive) {
                    let pmus = 0;
                    let pmusTime = 0;

                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                        pmusTime = this.currentPmusTime;
                        pmus = this.calculatePmus(pmusTime);
                    }

                    // Target pressure uses PRVC working pressure (adaptive) instead of deltaPressure
                    const targetPressure = this.settings.peep + workingPressure;

                    let effectiveCompliance = this.getEffectiveCompliance();

                    // Apply upper inflection point effect
                    effectiveCompliance = this.applyUpperInflectionPoint(effectiveCompliance, targetPressure);

                    if (this.patient.airwayOpeningPressure > 0 && targetPressure > this.patient.airwayOpeningPressure) {
                        const pressureAboveAOP = targetPressure - this.patient.airwayOpeningPressure;
                        const totalPressure = workingPressure;
                        effectiveCompliance = this.getEffectiveCompliance() * (pressureAboveAOP / totalPressure);
                    }

                    const pressureDifference = targetPressure - this.settings.peep;
                    const normalizedPmusTime = this.patient.pmusDuration > 0 ? pmusTime / this.patient.pmusDuration : 0;
                    // Recoil starts at end of Pmus rise — see PC mode for full rationale.
                    const recoilStartPoint = this.patient.pmusDuration > 0
                        ? (this.patient.pmusRiseTime ?? 0) / this.patient.pmusDuration
                        : 0.753;

                    let activePmus = pmus;
                    if (normalizedPmusTime > recoilStartPoint && normalizedPmusTime <= 1.0) {
                        activePmus = this.patient.pmusAmplitude * 0.7;
                    } else if (pmus === 0 && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                        activePmus = this.patient.pmusAmplitude * 0.7;
                    }

                    const shouldIncludePmus = this.pmusWasActiveThisBreath;
                    const effectivePressureGradient = pressureDifference + (shouldIncludePmus ? activePmus : 0);
                    const maxVolume = effectiveCompliance * effectivePressureGradient;

                    if (pmus > 0 && normalizedPmusTime > 0 && normalizedPmusTime <= 1.0) {
                        this.pmusWasActiveThisBreath = true;
                        if (timeInBreath < inspirationTime) {
                            this.pmusWasActiveDuringInspiration = true;
                        }
                    }

                    let recoilPressure = 0;
                    const inRecoilPhase = normalizedPmusTime > recoilStartPoint;
                    const pmusEnded = pmus === 0 && this.pmusWasActiveThisBreath;

                    if (this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath && (inRecoilPhase || pmusEnded)) {
                        const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                        // Use effective Pmus amplitude (scales with vent support when responsive is ON)
                        const effectivePmus = this.getEffectivePmusAmplitude();
                        // Scale effect: normal Pmus (≤5) has no recoil, ramps up to full effect at 20
                        const amplitudeEffect = Math.max(0, (effectivePmus - 5) / 15);
                        const maxRecoilPressure = effectivePmus * amplitudeEffect * chestWallFraction;

                        // Scale recoil by actual Pmus decline — quadratic so recoil stays small while Pmus is still strong
                        const declineFraction = effectivePmus > 0 ? Math.max(0, 1 - (pmus / effectivePmus)) : 1;
                        recoilPressure = maxRecoilPressure * declineFraction * declineFraction;
                    }

                    // Volume and flow calculation showing patient effort
                    // Two components with correct physics (same approach as PS mode):
                    // 1. Ventilator PRVC contribution: exponential decay (from adaptive pressure)
                    // 2. Pmus contribution: follows sinusoidal Pmus waveform (shows patient effort)

                    const expTerm = timeInBreath < 0.01 ? 1 : Math.exp(-timeInBreath / tau);
                    const resistance = this.patient.resistance;

                    // Calculate pressure rise progress - flow should scale with actual pressure delivery
                    // Rise time is fixed - ventilator aims for same rise time regardless of patient effort
                    const totalRiseTimeForFlow = this.settings.riseTime;

                    // Calculate how much of PRVC pressure is currently delivered (0 to 1)
                    // Use same cubic ease-out as PC/PS mode for consistency
                    let pressureRiseProgress = 1.0;
                    if (timeInBreath < totalRiseTimeForFlow) {
                        const t = timeInBreath / totalRiseTimeForFlow;
                        pressureRiseProgress = 1 - Math.pow(1 - t, 3); // Cubic ease-out
                    }

                    // Calculate total driving pressure for correct equilibrium volume
                    const pmusPeak = shouldIncludePmus ? this.patient.pmusAmplitude : 0;

                    // Ventilator PRVC contribution: exponential decay toward PRVC equilibrium
                    // Scale by pressureRiseProgress to match actual pressure delivery
                    const prvcMaxVolume = effectiveCompliance * pressureDifference;
                    const prvcVolume = timeInBreath < 0.01
                        ? (prvcMaxVolume / tau) * timeInBreath * pressureRiseProgress
                        : prvcMaxVolume * (1 - expTerm) * pressureRiseProgress;
                    const prvcFlow = (prvcMaxVolume / tau) * expTerm * 0.06 * pressureRiseProgress;

                    // Pmus contribution: follows Pmus waveform (sinusoidal shape)
                    // This creates the rounded "hump" showing patient effort
                    // Pmus flow is NOT scaled by pressureRiseProgress - patient effort generates flow
                    // even before ventilator has fully pressurized (creates flow demand)
                    // Flow follows full Pmus waveform - no fade during recoil phase
                    // Only pressure calculations use recoil phase logic
                    let pmusFlow = 0;
                    let pmusVolume = 0;
                    if (shouldIncludePmus && pmus > 0 && pmusPeak > 0) {
                        // Pmus flow follows instantaneous Pmus (direct from equation of motion)
                        // Scale by pmus/pmusPeak to normalize, then by contribution ratio
                        const pmusContribution = pmusPeak / (pressureDifference + pmusPeak);
                        pmusFlow = (pmus / resistance) * 60 * pmusContribution; // L/min, scaled

                        // Pmus volume: track as fraction of what Pmus contributes to total
                        // Use numerical integration for correct volume tracking
                        if (timeInBreath < 0.02) {
                            this.prvcPmusVolumeIntegral = 0;
                        }
                        const dt = 0.016;
                        this.prvcPmusVolumeIntegral = (this.prvcPmusVolumeIntegral || 0) + (pmusFlow / 60) * dt * 1000;
                        // Cap Pmus volume contribution to its share of total
                        const pmusMaxVolumeShare = effectiveCompliance * pmusPeak;
                        pmusVolume = Math.min(this.prvcPmusVolumeIntegral, pmusMaxVolumeShare);
                    }

                    // Total flow and volume
                    flow = prvcFlow + pmusFlow;
                    volume = prvcVolume + pmusVolume;

                    // Blend from trigger flow for patient-triggered breaths
                    // This creates smooth transition from pre-trigger flow to inspiratory flow
                    if (this.breathWasTriggered && this.flowAtTrigger !== undefined && timeInBreath < totalRiseTimeForFlow) {
                        const blendProgress = timeInBreath / totalRiseTimeForFlow;
                        const blendFactor = 1 - Math.pow(1 - blendProgress, 3); // Cubic ease-out
                        flow = this.flowAtTrigger + (flow - this.flowAtTrigger) * blendFactor;
                    }

                    // Breath-stacking: add residual volume from incomplete exhalation
                    // Only add residual if this is true breath-stacking (< 50% exhaled)
                    // For air-trapping (>= 50% exhaled), restart volume from near zero
                    if (this.isBreathStacking) {
                        volume = volume + (this.residualVolume || 0);
                    }

                    // Airway pressure calculation - same approach as PC/PS mode for consistency
                    const startPressure = this.pressureAtTrigger || this.settings.peep;

                    // Rise time multiplier - only applies above Pmus 10
                    const pmusRiseFactor = shouldIncludePmus && pmusPeak > 10
                        ? Math.pow((pmusPeak - 10) / 7, 2)
                        : 0;
                    // Multiplicative: stretches programmed rise time with high Pmus
                    // Floor (0.05 * factor): minimum rise time even at riseTime=0,
                    // because the vent physically can't satisfy extreme flow demand instantaneously
                    // Math.max ensures the floor only matters at low rise times — no impact on higher settings
                    const totalRiseTime = Math.max(this.settings.riseTime * (1 + pmusRiseFactor), 0.05 * pmusRiseFactor);

                    if (timeInBreath < totalRiseTime) {
                        const t = timeInBreath / totalRiseTime;
                        const easeOut = 1 - Math.pow(1 - t, 3);
                        pressure = startPressure + (targetPressure - startPressure) * easeOut;
                    } else {
                        pressure = targetPressure;
                    }

                    // Add recoil component
                    const overallProgress = totalRiseTime > 0 ? Math.min(timeInBreath / totalRiseTime, 1) : 1;
                    pressure += recoilPressure * overallProgress;

                    // Resistive pressure overshoot — continuous servo-based model
                    if (timeInBreath >= totalRiseTime) {
                        const servoTau = 0.015;
                        const timeSinceRise = timeInBreath - totalRiseTime;
                        const overshootFactor = 1 / (1 + totalRiseTime / servoTau);
                        const resistanceFactor = resistance / 10;
                        const overshootPeak = pressureDifference * resistanceFactor * 0.15 * overshootFactor;
                        if (overshootPeak >= 0.5) {
                            pressure += overshootPeak * Math.exp(-timeSinceRise / 0.04);
                        }
                    }

                } else {
                    // Expiration
                    const timeInExpiration = timeInBreath - inspirationTime;

                    const targetPressure = this.settings.peep + workingPressure;
                    const pressureDifference = targetPressure - this.settings.peep;

                    let expiratoryEffectiveCompliance = this.getEffectiveCompliance();

                    // Apply upper inflection point effect to expiratory compliance
                    expiratoryEffectiveCompliance = this.applyUpperInflectionPoint(expiratoryEffectiveCompliance, targetPressure);

                    if (this.patient.airwayOpeningPressure > 0 && targetPressure > this.patient.airwayOpeningPressure) {
                        const pressureAboveAOP = targetPressure - this.patient.airwayOpeningPressure;
                        expiratoryEffectiveCompliance = this.getEffectiveCompliance() * (pressureAboveAOP / workingPressure);
                    }

                    const shouldIncludePmusInVolume = this.pmusWasActiveDuringInspiration;
                    const patientEffort = (shouldIncludePmusInVolume && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) ? this.patient.pmusAmplitude * 0.7 : 0;
                    const effectivePressureGradient = pressureDifference + patientEffort;
                    const maxVolume = expiratoryEffectiveCompliance * effectivePressureGradient;
                    const endInspiratoryVolume = maxVolume * (1 - Math.exp(-inspirationTime / tau));

                    const totalVolumeToExhale = endInspiratoryVolume + this.residualVolume;

                    let baseExpiratoryFlow = -((totalVolumeToExhale / tau) * Math.exp(-timeInExpiration / tau)) * 0.06;

                    // Add chest wall recoil contribution to peak expiratory flow
                    if (this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath && this.patient.pmusAmplitude > 0) {
                        const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                        const amplitudeEffect = Math.max(0, (this.patient.pmusAmplitude - 5) / 15);
                        const recoilPressure = this.patient.pmusAmplitude * amplitudeEffect * chestWallFraction;
                        const recoilTau = 0.06;
                        const recoilDecay = Math.exp(-timeInExpiration / recoilTau);
                        const recoilFlow = -(recoilPressure / this.patient.resistance) * 60 * recoilDecay * 2.5;
                        baseExpiratoryFlow += recoilFlow;
                    }

                    // Capture patient-only flow before circuit recoil (for flowPressure calculation)
                    const patientExpiratoryFlow = baseExpiratoryFlow;

                    // Circuit recoil flow: unconditional circuit decompression
                    {
                        const circuitRecoilTau = 0.025;
                        const circuitResistance = 3.0;
                        const actualEndInspPressure = this.endInspiratoryPressure || (this.settings.peep + workingPressure);
                        const drivingPressure = actualEndInspPressure - this.settings.peep;
                        const circuitRecoilDecay = Math.exp(-timeInExpiration / circuitRecoilTau);
                        const circuitRecoilFlow = -(drivingPressure / circuitResistance) * 60 * circuitRecoilDecay;
                        baseExpiratoryFlow += circuitRecoilFlow;
                    }

                    const currentVolume = endInspiratoryVolume * Math.exp(-timeInExpiration / tau);
                    baseExpiratoryFlow = this.applyFlowLimit(baseExpiratoryFlow, currentVolume + this.residualVolume, timeInExpiration);

                    // Ineffective effort: Flow follows Pmus directly (no filtering)
                    // This ensures flow follows the same rate of increase and decrease as Pmus
                    // without lag from the low-pass filter

                    // Check if we're in the Pmus window
                    const inPmusWindow = this.patient.spontaneousBreathingEnabled &&
                                         this.patient.pmusAmplitude > 0 &&
                                         this.currentPmusTime >= 0 &&
                                         this.currentPmusTime < this.patient.pmusDuration;

                    let effortFlow = 0;

                    if (inPmusWindow) {
                        // Get Pmus directly from waveform
                        const pmus = this.calculatePmus(this.currentPmusTime);

                        // effortPmus follows the full Pmus waveform (including recoil decay)
                        // The sin() waveform naturally decays from ~90% to 0% during recoil,
                        // providing smooth braking transition for both triggered and ineffective efforts
                        let effortPmus = pmus;

                        // Flow follows Pmus: Flow = effortPmus / R
                        effortFlow = (effortPmus / this.patient.resistance) * 60; // L/min
                    }

                    // Smooth tail from low-pass filtered braking (main loop)
                    if (!inPmusWindow && this.smoothedBrakingFlow > 0.05) {
                        effortFlow = this.smoothedBrakingFlow;
                    }

                    flow = baseExpiratoryFlow + effortFlow;

                    volume = endInspiratoryVolume * Math.exp(-timeInExpiration / tau);

                    // Expiratory pressure: circuit recoil drives initial steep decay
                    // Circuit compliance (3 mL/cmH2O) stores compressed gas that decompresses rapidly
                    const circuitRecoilTau = 0.025; // 25ms — circuit decompression time constant
                    const circuitResistance = 3.0; // cmH2O per L/s
                    const flowPressure = circuitResistance * Math.abs(patientExpiratoryFlow) / 60;
                    const actualEndInspPressure = this.endInspiratoryPressure || (this.settings.peep + workingPressure);
                    const circuitRecoilPressure = (actualEndInspPressure - this.settings.peep - flowPressure) * Math.exp(-timeInExpiration / circuitRecoilTau);
                    pressure = this.settings.peep + flowPressure + circuitRecoilPressure;
                }

                return {
                    pressure: Math.max(0, pressure),
                    flow: flow,
                    volume: Math.max(0, volume)
                };
            },

            calculateVCMechanics(timeInBreath, inspirationTime, pauseTime, tau, triggerEffort = 0) {
                let pressure, flow, volume;

                if (this.breathPhase === 'inspiration') {
                    // Volume Control: Deliver set tidal volume at set flow rate
                    const targetVolume = this.settings.tidalVolume;

                    // Breath-stacking: add residual volume from incomplete exhalation
                    // Only add residual if this is true breath-stacking (< 50% exhaled)
                    // For air-trapping (>= 50% exhaled), restart volume from near zero
                    const residual = this.isBreathStacking ? (this.residualVolume || 0) : 0;

                    if (this.settings.flowPattern === 'constant') {
                        // Constant flow throughout inspiration
                        flow = this.settings.flow; // L/min

                        // Volume increases linearly: V = Flow × time
                        // Flow is in L/min, convert to mL/s: (L/min) * (1000 mL/L) / (60 s/min)
                        const flowRate = this.settings.flow * 1000 / 60; // mL/s
                        volume = Math.min(flowRate * timeInBreath, targetVolume) + residual; // mL

                    } else {
                        // Decelerating flow (linear descending ramp)
                        // Flow starts at peak (set flow) and decreases linearly to zero
                        // Flow(t) = peakFlow × (1 - t/Ti)
                        const peakFlow = this.settings.flow; // Set flow is the peak flow (L/min)
                        const normalizedTime = Math.min(timeInBreath / inspirationTime, 1); // Clamp to 0-1
                        flow = peakFlow * (1 - normalizedTime);

                        // Volume is integral of linear flow: V = peakFlow × (t - t²/(2×Ti))
                        // Convert peak flow to mL/s for volume calculation
                        const peakFlowMLPerS = peakFlow * 1000 / 60;
                        volume = peakFlowMLPerS * (timeInBreath - (timeInBreath * timeInBreath) / (2 * inspirationTime));
                        volume = Math.min(volume, targetVolume) + residual;
                    }

                    // Blend from trigger flow for patient-triggered breaths
                    // This creates smooth transition from pre-trigger flow to inspiratory flow
                    // Use a short transition time for VC mode (100ms)
                    const vcFlowTransitionTime = 0.1;
                    if (this.breathWasTriggered && this.flowAtTrigger !== undefined && timeInBreath < vcFlowTransitionTime) {
                        const blendProgress = timeInBreath / vcFlowTransitionTime;
                        const blendFactor = 1 - Math.pow(1 - blendProgress, 3); // Cubic ease-out
                        flow = this.flowAtTrigger + (flow - this.flowAtTrigger) * blendFactor;
                    }

                    // Use centrally-calculated Pmus time (handles both entrainment and independent breathing)
                    let currentPmus = 0;
                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                        currentPmus = this.calculatePmus(this.currentPmusTime);
                    }

                    // Pressure calculated from equation of motion: P = R×Flow + V/C + PEEP - Pmus
                    // Patient effort (Pmus) reduces the airway pressure needed to deliver the set flow/volume
                    // Convert flow from L/min to L/s for resistance calculation
                    const flowLS = flow / 60;

                    // Resistive pressure handling depends on flow rate
                    // At normal/high flows: instant resistive step (conditioning pressure) - important clinical feature
                    // At very slow flows (< 10 L/min): no resistive pressure - it's negligible and causes visual artifacts
                    const resistivePressure = this.settings.flow < 10 ? 0 : (this.patient.resistance * flowLS);

                    // Airway opening pressure effect
                    // Until volume reaches the "opening volume", pressure must overcome AOP
                    // Opening volume = volume that fills circuit and opens airways
                    // AOP only affects calculation when PEEP < AOP (airways still need pressure to open)
                    // When PEEP >= AOP, airways are stented open by PEEP, use normal calculation
                    const circuitCompliance = 3; // mL/cmH2O
                    let openingPressureComponent = 0;
                    let calculatedPressure;
                    if (this.patient.airwayOpeningPressure > 0 && this.patient.airwayOpeningPressure > this.settings.peep) {
                        const openingVolume = circuitCompliance * (this.patient.airwayOpeningPressure - this.settings.peep);
                        if (volume < openingVolume) {
                            // Below opening volume - pressure limited by circuit compliance
                            openingPressureComponent = volume / circuitCompliance;
                        } else {
                            // Above opening volume - add opening pressure to elastic load
                            // Conditioning pressure = pressure to open airways
                            openingPressureComponent = (this.patient.airwayOpeningPressure - this.settings.peep) +
                                ((volume - openingVolume) / this.patient.compliance);
                        }
                        calculatedPressure = this.settings.peep +
                            resistivePressure +
                            openingPressureComponent -
                            currentPmus;
                    } else {
                        // Apply stress index to elastic component for constant flow ventilation
                        // SI affects shape of pressure-time curve AND effective compliance
                        // SI = 1.0: Linear (normal)
                        // SI < 1: downward concavity (recruitment - compliance increasing during inspiration)
                        // SI > 1: upward concavity (overdistension - compliance decreasing during inspiration)

                        // Get stress-index-adjusted compliance for elastic pressure calculation
                        const effectiveCompliance = this.applyStressIndexCompliance(this.patient.compliance);
                        let elasticPressure = volume / effectiveCompliance;

                        if (this.settings.flowPattern === 'constant' && this.patient.stressIndexEnabled) {
                            const normalizedProgress = Math.min(volume / this.settings.tidalVolume, 1);
                            const maxElasticPressure = this.settings.tidalVolume / effectiveCompliance;

                            // Use current stress index directly from slider
                            // SI slider is updated by updateStressIndexFromPeepTotal() which handles
                            // BOTH applied PEEP changes and auto-PEEP from air trapping
                            // No additional PEEP effect calculation here - would double-count
                            let effectiveSI = this.patient.stressIndex;

                            // Use sine-based curve adjustment for visible "bow" shape throughout inspiration
                            // sin(π * progress) peaks at mid-inspiration, creating visible curve
                            const siDeviation = effectiveSI - 1.0; // Negative for recruitment, positive for overdistension
                            const curveMagnitude = Math.abs(siDeviation) * 2.5; // Strong multiplier for very visible curve

                            // Create bow effect (flipped sign for correct clinical appearance)
                            // For SI < 1 (recruitment): downward concavity - pressure rises fast then slows (bows away from baseline)
                            // For SI > 1 (overdistension): upward concavity - pressure rises slow then fast (bows toward baseline)
                            const curveAdjustment = Math.sin(Math.PI * normalizedProgress) * (-siDeviation) * curveMagnitude * maxElasticPressure;

                            // Base linear elastic pressure plus the curve adjustment
                            elasticPressure = (maxElasticPressure * normalizedProgress) + curveAdjustment;
                        }

                        calculatedPressure = this.settings.peep +
                            resistivePressure +
                            elasticPressure -
                            currentPmus; // Pmus reduces required airway pressure
                    }

                    // In Volume Control, pressure follows the equation of motion directly
                    // No smoothing needed - the ventilator delivers constant flow and pressure
                    // is the result (P = PEEP + R×Flow + V/C - Pmus)
                    // Unlike pressure modes, VC doesn't target a pressure - it controls flow
                    pressure = calculatedPressure;

                } else if (this.breathPhase === 'pause') {
                    // Inspiratory pause: volume held constant, flow = 0, pressure equilibrates
                    const targetVolume = this.settings.tidalVolume;
                    // Include residual volume for display during breath-stacking
                    const residual = this.isBreathStacking ? (this.residualVolume || 0) : 0;
                    volume = targetVolume + residual;
                    flow = 0;

                    // During pause, pressure drops VERY quickly to plateau pressure (V/C + PEEP)
                    // The resistive component (R×Flow) disappears almost instantly when flow stops
                    // Use a very short time constant for rapid equilibration (~0.05s)
                    const timeInPause = timeInBreath - inspirationTime;

                    // Use centrally-calculated Pmus time for POCC effect (handles both entrainment and independent breathing)
                    let currentPmus = 0;
                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                        currentPmus = this.calculatePmus(this.currentPmusTime);
                    }

                    // Calculate plateau pressure (elastic component only - no flow, no resistive component)
                    // IMPORTANT: Total lung volume = tidal volume + residual volume (even for mild air trapping)
                    // This ensures plateau reflects auto-PEEP from incomplete exhalation
                    const totalLungVolume = targetVolume + (this.residualVolume || 0);
                    const circuitCompliance = 3;
                    // Apply stress index to compliance for plateau pressure calculation
                    const effectiveCompliance = this.applyStressIndexCompliance(this.patient.compliance);
                    let plateauPressure;

                    // AOP only affects calculation when PEEP < AOP (airways still need pressure to open)
                    // When PEEP >= AOP, airways are stented open by PEEP, use normal calculation
                    if (this.patient.airwayOpeningPressure > 0 && this.patient.airwayOpeningPressure > this.settings.peep) {
                        const openingVolume = circuitCompliance * (this.patient.airwayOpeningPressure - this.settings.peep);
                        const lungVolume = Math.max(0, totalLungVolume - openingVolume);

                        // Plateau = PEEP + Opening Pressure + Elastic (lung) - no resistive component
                        plateauPressure = this.settings.peep +
                            (this.patient.airwayOpeningPressure - this.settings.peep) +
                            (lungVolume / effectiveCompliance);
                    } else {
                        // Plateau = PEEP + totalLungVolume/C (includes auto-PEEP effect)
                        plateauPressure = this.settings.peep + (totalLungVolume / effectiveCompliance);
                    }

                    // For decelerating flow: flow is already zero at end of inspiration,
                    // so pressure is already at plateau - no transition needed
                    // For constant flow: need rapid equilibration from peak (with resistive) to plateau
                    if (this.settings.flowPattern === 'decelerating') {
                        // No resistive component at end of inspiration, pressure is already at plateau
                        pressure = plateauPressure;
                    } else {
                        // Constant flow: calculate peak pressure with resistive component
                        const resistiveComponent = this.patient.resistance * (this.settings.flow / 60);
                        let peakPressure;

                        // AOP only affects calculation when PEEP < AOP
                        if (this.patient.airwayOpeningPressure > 0 && this.patient.airwayOpeningPressure > this.settings.peep) {
                            const openingVolume = circuitCompliance * (this.patient.airwayOpeningPressure - this.settings.peep);
                            const lungVolume = Math.max(0, targetVolume - openingVolume);
                            peakPressure = this.settings.peep +
                                resistiveComponent +
                                (this.patient.airwayOpeningPressure - this.settings.peep) +
                                (lungVolume / effectiveCompliance);
                        } else {
                            peakPressure = this.settings.peep +
                                resistiveComponent +
                                (targetVolume / effectiveCompliance);
                        }

                        // Very rapid drop from peak to plateau (much faster than respiratory tau)
                        const equilibrationTime = 0.05; // 50ms - very fast pressure equilibration
                        pressure = plateauPressure + (peakPressure - plateauPressure) * Math.exp(-timeInPause / equilibrationTime);
                    }

                    // If Pmus is active during pause, it creates negative deflection (reverse triggering signature)
                    // This is the classic way to identify reverse triggering in VC with inspiratory pause
                    if (currentPmus > 0) {
                        // Pmus effect transmitted to airway with amplification (POCC relationship)
                        const transmissionFactor = 0.75;
                        const pressureDeflection = currentPmus / transmissionFactor;
                        pressure = pressure - pressureDeflection;
                    }

                } else {
                    // Expiration phase - passive exhalation
                    const timeInExpiration = timeInBreath - inspirationTime - pauseTime;
                    const targetVolume = this.settings.tidalVolume;

                    // Breath-stacking: total volume to exhale includes residual from previous incomplete exhalation
                    const totalVolumeToExhale = targetVolume + this.residualVolume;

                    // Calculate TRUE lung volume (includes residual from previous breath)
                    const trueLungVolume = totalVolumeToExhale * Math.exp(-timeInExpiration / tau);

                    // Display volume shows ventilator-style (always 0 at end of complete exhalation)
                    volume = Math.max(0, trueLungVolume - this.residualVolume);

                    // Store true lung volume for residual capture at breath transition
                    this.trueLungVolumeAtEndExpiration = trueLungVolume;

                    // Base expiratory flow (uses total volume for correct physics)
                    let baseExpiratoryFlow = -((totalVolumeToExhale / tau) * Math.exp(-timeInExpiration / tau)) * 0.06;

                    // Add chest wall recoil contribution to peak expiratory flow
                    if (this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath && this.patient.pmusAmplitude > 0) {
                        const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                        const amplitudeEffect = Math.max(0, (this.patient.pmusAmplitude - 5) / 15);
                        const recoilPressure = this.patient.pmusAmplitude * amplitudeEffect * chestWallFraction;
                        const recoilTau = 0.06;
                        const recoilDecay = Math.exp(-timeInExpiration / recoilTau);
                        const recoilFlow = -(recoilPressure / this.patient.resistance) * 60 * recoilDecay * 2.5;
                        baseExpiratoryFlow += recoilFlow;
                    }

                    // Capture patient-only flow before circuit recoil (for flowPressure calculation)
                    const patientExpiratoryFlow = baseExpiratoryFlow;

                    // Circuit recoil flow: unconditional circuit decompression
                    {
                        const circuitRecoilTau = 0.025;
                        const circuitResistance = 3.0;
                        const actualEndInspPressure = this.endInspiratoryPressure || (this.settings.peep + (targetVolume / this.patient.compliance));
                        const drivingPressure = actualEndInspPressure - this.settings.peep;
                        const circuitRecoilDecay = Math.exp(-timeInExpiration / circuitRecoilTau);
                        const circuitRecoilFlow = -(drivingPressure / circuitResistance) * 60 * circuitRecoilDecay;
                        baseExpiratoryFlow += circuitRecoilFlow;
                    }

                    // Apply flow limitation if enabled
                    baseExpiratoryFlow = this.applyFlowLimit(baseExpiratoryFlow, volume + this.residualVolume, timeInExpiration);

                    // Ineffective effort: Flow follows Pmus directly (no filtering)
                    // This ensures flow follows the same rate of increase and decrease as Pmus
                    // without lag from the low-pass filter

                    // Check if we're in the Pmus window
                    const inPmusWindow = this.patient.spontaneousBreathingEnabled &&
                                         this.patient.pmusAmplitude > 0 &&
                                         this.currentPmusTime >= 0 &&
                                         this.currentPmusTime < this.patient.pmusDuration;

                    let effortFlow = 0;

                    if (inPmusWindow) {
                        // Get Pmus directly from waveform
                        const pmus = this.calculatePmus(this.currentPmusTime);

                        // effortPmus follows the full Pmus waveform (including recoil decay)
                        // The sin() waveform naturally decays from ~90% to 0% during recoil,
                        // providing smooth braking transition for both triggered and ineffective efforts
                        let effortPmus = pmus;

                        // Flow follows Pmus: Flow = effortPmus / R
                        effortFlow = (effortPmus / this.patient.resistance) * 60; // L/min
                    }

                    // Smooth tail from low-pass filtered braking (main loop)
                    if (!inPmusWindow && this.smoothedBrakingFlow > 0.05) {
                        effortFlow = this.smoothedBrakingFlow;
                    }

                    flow = baseExpiratoryFlow + effortFlow;

                    // Expiratory pressure: circuit recoil drives initial steep decay
                    // Circuit compliance (3 mL/cmH2O) stores compressed gas that decompresses rapidly
                    const circuitRecoilTau = 0.025; // 25ms — circuit decompression time constant
                    const circuitResistance = 3.0; // cmH2O per L/s
                    const flowPressure = circuitResistance * Math.abs(patientExpiratoryFlow) / 60;
                    // Use captured end-inspiratory pressure if available, else calculate from volume
                    const actualEndInspPressure = this.endInspiratoryPressure || (this.settings.peep + (targetVolume / this.patient.compliance));
                    const circuitRecoilPressure = (actualEndInspPressure - this.settings.peep - flowPressure) * Math.exp(-timeInExpiration / circuitRecoilTau);
                    pressure = this.settings.peep + flowPressure + circuitRecoilPressure;
                }

                // Volume display is ventilator-style: always starts at 0 each breath
                // (residual volume affects flow/pressure physics but not the displayed volume waveform)
                return {
                    pressure: Math.max(0, pressure),
                    flow: flow,
                    volume: Math.max(0, volume)
                };
            },

            calculatePSMechanics(timeInBreath, tau, patientEffort = 0) {
                let pressure, flow, volume;

                if (this.breathPhase === 'inspiration') {
                    // Use centrally-calculated Pmus time (handles both entrainment and independent breathing)
                    let pmusTime = 0;
                    let pmus = 0;

                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                        pmusTime = this.currentPmusTime;
                        pmus = this.calculatePmus(pmusTime);
                    }

                    // Pressure Support: Ventilator maintains constant airway pressure
                    // Pmus creates additional transpulmonary pressure gradient → increases flow
                    const targetPressure = this.settings.peep + this.settings.pressureSupport;
                    const pressureDifference = targetPressure - this.settings.peep;

                    // Calculate normalized Pmus position in the waveform
                    const normalizedPmusTime = this.patient.pmusDuration > 0 ? pmusTime / this.patient.pmusDuration : 0;

                    // Recoil starts at the end of Pmus rise (i.e., once Pmus is at peak and
                    // beginning to relax). Using rise/duration keeps recoil onset aligned
                    // with the actual waveform shape — at this point declineFraction is 0,
                    // so recoilPressure ramps in smoothly from zero with no visible kink.
                    // Falls back to the legacy 0.753 only if pmusDuration is somehow 0.
                    const recoilStartPoint = this.patient.pmusDuration > 0
                        ? (this.patient.pmusRiseTime ?? 0) / this.patient.pmusDuration
                        : 0.753;

                    // For flow/volume calculations, use "active" Pmus that excludes passive recoil phase
                    // During passive recoil (last 30% of relaxation), only pressure is affected, not flow
                    let activePmus = pmus;
                    if (normalizedPmusTime > recoilStartPoint && normalizedPmusTime <= 1.0) {
                        // Cap Pmus at the value when recoil starts (70% of peak)
                        activePmus = this.patient.pmusAmplitude * 0.7;
                    } else if (pmus === 0 && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                        // After Pmus has ended, maintain the last active value (70% of peak)
                        // This prevents discontinuity in PS mode when breath continues after Pmus ends
                        activePmus = this.patient.pmusAmplitude * 0.7;
                    }

                    // Pmus adds to the driving pressure gradient (increases TPP)
                    // Use activePmus for flow/volume, but full pmus affects pressure via recoil
                    // Note: Only include Pmus if it was actually active during this breath
                    // Cardiac oscillations can trigger breaths without any patient effort
                    const shouldIncludePmus = this.pmusWasActiveThisBreath;
                    const effectivePressureGradient = pressureDifference + (shouldIncludePmus ? activePmus : 0);

                    // Get effective compliance with breath-to-breath variability and UIP effect
                    let effectiveCompliance = this.getEffectiveCompliance();
                    effectiveCompliance = this.applyUpperInflectionPoint(effectiveCompliance, targetPressure);

                    const maxVolume = effectiveCompliance * effectivePressureGradient;

                    // Track if pmus is currently active in this breath (for recoil tracking)
                    if (pmus > 0 && normalizedPmusTime > 0 && normalizedPmusTime <= 1.0) {
                        this.pmusWasActiveThisBreath = true;
                        // In PS mode, Pmus is always active during inspiration (that's what triggers the breath)
                        // Track it for consistency with other modes
                        if (this.breathPhase === 'inspiration') {
                            this.pmusWasActiveDuringInspiration = true;
                        }
                    }

                    // Calculate passive recoil effect during late cycling
                    // During relaxation phase when Pmus drops below 70% of peak (70% → 0%), elastic recoil develops
                    let recoilPressure = 0;

                    // Relaxation phase: after Pmus drops below 70% of peak
                    // Recoil continues until breath cycles off
                    // ONLY apply recoil if pmus was active at some point during THIS breath
                    const inRecoilPhase = normalizedPmusTime > recoilStartPoint;
                    const pmusEnded = pmus === 0 && this.pmusWasActiveThisBreath;

                    if (this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath && (inRecoilPhase || pmusEnded)) {
                        // During the late relaxation phase of Pmus (70%-0% of peak) and beyond
                        // As respiratory muscles relax, elastic recoil pressure is transmitted to airways
                        // This creates a POSITIVE pressure increase at the airway

                        // Recoil pressure proportional to chest wall elastance fraction
                        // EL/Ers determines how much is lung vs chest wall
                        // Lower EL/Ers = more chest wall contribution = more recoil
                        const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                        // Use effective Pmus amplitude (scales with vent support when responsive is ON)
                        const effectivePmus = this.getEffectivePmusAmplitude();
                        // Scale effect: normal Pmus (≤5) has no recoil, ramps up to full effect at 20
                        const amplitudeEffect = Math.max(0, (effectivePmus - 5) / 15);
                        const maxRecoilPressure = effectivePmus * amplitudeEffect * chestWallFraction;

                        // Scale recoil by actual Pmus decline — quadratic so recoil stays small while Pmus is still strong
                        const declineFraction = effectivePmus > 0 ? Math.max(0, 1 - (pmus / effectivePmus)) : 1;
                        recoilPressure = maxRecoilPressure * declineFraction * declineFraction;
                    }

                    // Volume and flow calculation showing patient effort
                    // Two components with correct physics:
                    // 1. PS contribution: exponential decay (from constant PS pressure)
                    // 2. Pmus contribution: follows sinusoidal Pmus waveform (shows patient effort)
                    // Total maxVolume = C × (PS + Pmus_peak) ensures correct equilibrium

                    const expTerm = timeInBreath < 0.01 ? 1 : Math.exp(-timeInBreath / tau);
                    const resistance = this.patient.resistance;

                    // Calculate pressure rise progress - flow should scale with actual pressure delivery
                    // Rise time is fixed - ventilator aims for same rise time regardless of patient effort
                    const totalRiseTimeForFlow = this.settings.riseTime;

                    // Calculate how much of PS is currently delivered (0 to 1)
                    // Use same cubic ease-out as PC mode for consistency
                    let pressureRiseProgress = 1.0;
                    if (timeInBreath < totalRiseTimeForFlow) {
                        const t = timeInBreath / totalRiseTimeForFlow;
                        pressureRiseProgress = 1 - Math.pow(1 - t, 3); // Cubic ease-out
                    }

                    // Calculate total driving pressure for correct equilibrium volume
                    const pmusPeak = shouldIncludePmus ? this.patient.pmusAmplitude : 0;
                    const totalMaxVolume = effectiveCompliance * (pressureDifference + pmusPeak);

                    // PS contribution: exponential decay toward PS equilibrium
                    // Scale by pressureRiseProgress to match actual pressure delivery
                    const psMaxVolume = effectiveCompliance * pressureDifference;
                    const psVolume = timeInBreath < 0.01
                        ? (psMaxVolume / tau) * timeInBreath * pressureRiseProgress
                        : psMaxVolume * (1 - expTerm) * pressureRiseProgress;
                    const psFlow = (psMaxVolume / tau) * expTerm * 0.06 * pressureRiseProgress;

                    // Pmus contribution: follows Pmus waveform (sinusoidal shape)
                    // This creates the rounded "hump" showing patient effort
                    let pmusFlow = 0;
                    let pmusVolume = 0;
                    if (shouldIncludePmus && pmus > 0 && pmusPeak > 0) {
                        // Pmus flow follows instantaneous Pmus (direct from equation of motion)
                        // Scale by pmus/pmusPeak to normalize, then by contribution ratio
                        const pmusContribution = pmusPeak / (pressureDifference + pmusPeak);
                        pmusFlow = (pmus / resistance) * 60 * pmusContribution; // L/min, scaled

                        // Pmus volume: track as fraction of what Pmus contributes to total
                        // Use numerical integration for correct volume tracking
                        if (timeInBreath < 0.02) {
                            this.pmusVolumeIntegral = 0;
                        }
                        const dt = 0.016;
                        this.pmusVolumeIntegral = (this.pmusVolumeIntegral || 0) + (pmusFlow / 60) * dt * 1000;
                        // Cap Pmus volume contribution to its share of total
                        const pmusMaxVolumeShare = effectiveCompliance * pmusPeak;
                        pmusVolume = Math.min(this.pmusVolumeIntegral, pmusMaxVolumeShare);
                    }

                    // Total flow and volume
                    flow = psFlow + pmusFlow;
                    volume = psVolume + pmusVolume;

                    // Blend from trigger flow for patient-triggered breaths
                    // This creates smooth transition from pre-trigger flow to inspiratory flow
                    if (this.breathWasTriggered && this.flowAtTrigger !== undefined && timeInBreath < totalRiseTimeForFlow) {
                        const blendProgress = timeInBreath / totalRiseTimeForFlow;
                        const blendFactor = 1 - Math.pow(1 - blendProgress, 3); // Cubic ease-out
                        flow = this.flowAtTrigger + (flow - this.flowAtTrigger) * blendFactor;
                    }

                    // Breath-stacking: add residual volume from incomplete exhalation
                    // Only add residual if this is true breath-stacking (< 50% exhaled)
                    // For air-trapping (>= 50% exhaled), restart volume from near zero
                    if (this.isBreathStacking) {
                        volume = volume + (this.residualVolume || 0);
                    }

                    // Airway pressure calculation - same approach as PC mode for consistency
                    const startPressure = this.pressureAtTrigger || this.settings.peep;

                    // Rise time multiplier - only applies above Pmus 10
                    const pmusRiseFactor = shouldIncludePmus && pmusPeak > 10
                        ? Math.pow((pmusPeak - 10) / 7, 2)
                        : 0;
                    // Multiplicative: stretches programmed rise time with high Pmus
                    // Floor (0.05 * factor): minimum rise time even at riseTime=0,
                    // because the vent physically can't satisfy extreme flow demand instantaneously
                    // Math.max ensures the floor only matters at low rise times — no impact on higher settings
                    const totalRiseTime = Math.max(this.settings.riseTime * (1 + pmusRiseFactor), 0.05 * pmusRiseFactor);

                    if (timeInBreath < totalRiseTime) {
                        const t = timeInBreath / totalRiseTime;
                        const easeOut = 1 - Math.pow(1 - t, 3);
                        pressure = startPressure + (targetPressure - startPressure) * easeOut;
                    } else {
                        pressure = targetPressure;
                    }

                    // Add recoil component
                    const overallProgress = totalRiseTime > 0 ? Math.min(timeInBreath / totalRiseTime, 1) : 1;
                    pressure += recoilPressure * overallProgress;

                    // Resistive pressure overshoot — continuous servo-based model
                    if (timeInBreath >= totalRiseTime) {
                        const servoTau = 0.015;
                        const timeSinceRise = timeInBreath - totalRiseTime;
                        const overshootFactor = 1 / (1 + totalRiseTime / servoTau);
                        const resistanceFactor = resistance / 10;
                        const overshootPeak = pressureDifference * resistanceFactor * 0.15 * overshootFactor;
                        if (overshootPeak >= 0.5) {
                            pressure += overshootPeak * Math.exp(-timeSinceRise / 0.04);
                        }
                    }

                    // Track peak flow for cycle-off detection
                    if (flow > this.peakInspiratoryFlow) {
                        this.peakInspiratoryFlow = flow;
                    }

                } else {
                    // Expiration - check if Pmus is still active
                    // Use actual inspiration end time if available (flow-cycled)
                    const actualInspirationTime = this.inspirationEndTime || this.patient.pmusDuration;
                    const timeInExpiration = Math.max(0, timeInBreath - actualInspirationTime);

                    // Use the actual end-inspiratory values that were stored at cycling
                    const endInspiratoryVolume = this.endInspiratoryVolume;

                    // Breath-stacking: total volume to exhale includes residual from previous incomplete exhalation
                    const totalVolumeToExhale = endInspiratoryVolume + this.residualVolume;

                    // Display volume shows just tidal volume (ventilator-style, always starts at 0)
                    // Flow calculation uses totalVolumeToExhale for correct physics
                    volume = endInspiratoryVolume * Math.exp(-timeInExpiration / tau);

                    // Calculate base expiratory flow (passive decay)
                    let baseExpiratoryFlow = -((totalVolumeToExhale / tau) * Math.exp(-timeInExpiration / tau)) * 0.06;

                    // Add chest wall recoil contribution to peak expiratory flow
                    // When inspiratory muscles relax, chest wall recoil adds to driving pressure
                    // Lower EL/Ers = more chest wall = more recoil-driven flow boost
                    if (this.patient.elastanceRecoilEnabled && this.pmusWasActiveThisBreath && this.patient.pmusAmplitude > 0) {
                        const chestWallFraction = (this.patient.recoilStrength ?? 5) / 100;
                        // Scale effect: normal Pmus (≤5) has no recoil, ramps up to full effect at 20
                        const amplitudeEffect = Math.max(0, (this.patient.pmusAmplitude - 5) / 15);
                        const recoilPressure = this.patient.pmusAmplitude * amplitudeEffect * chestWallFraction;

                        // Recoil-driven flow: additional flow from chest wall recoil pressure
                        // Flow = Pressure / Resistance, converted to L/min
                        const recoilTau = 0.06; // Chest wall recoil time constant - controls decay speed
                        const recoilDecay = Math.exp(-timeInExpiration / recoilTau);
                        const recoilFlow = -(recoilPressure / this.patient.resistance) * 60 * recoilDecay * 2.5;

                        baseExpiratoryFlow += recoilFlow;
                    }

                    // Capture patient-only flow before circuit recoil (for flowPressure calculation)
                    const patientExpiratoryFlow = baseExpiratoryFlow;

                    // Circuit recoil flow: unconditional circuit decompression
                    {
                        const circuitRecoilTau = 0.025;
                        const circuitResistance = 3.0;
                        const endInspiratoryPressure = this.endInspiratoryPressure || this.lastCalculatedPressure || (this.settings.peep + this.settings.pressureSupport);
                        const drivingPressure = endInspiratoryPressure - this.settings.peep;
                        const circuitRecoilDecay = Math.exp(-timeInExpiration / circuitRecoilTau);
                        const circuitRecoilFlow = -(drivingPressure / circuitResistance) * 60 * circuitRecoilDecay;
                        baseExpiratoryFlow += circuitRecoilFlow;
                    }
                    // Chest wall recoil only applies when patient had active Pmus during this breath
                    // Passive/mandatory breaths don't stretch the chest wall beyond resting position

                    // Apply flow limitation if enabled (obstructive physiology - COPD/Asthma)
                    baseExpiratoryFlow = this.applyFlowLimit(baseExpiratoryFlow, volume + this.residualVolume, timeInExpiration);

                    // Ineffective effort: Flow follows Pmus directly (no volume tracking)
                    // This ensures flow follows the same rate of increase and decrease as Pmus
                    // without discontinuities from volume clamping

                    // Check if we're in the Pmus window
                    const inPmusWindow = this.patient.spontaneousBreathingEnabled &&
                                         this.patient.pmusAmplitude > 0 &&
                                         this.currentPmusTime >= 0 &&
                                         this.currentPmusTime < this.patient.pmusDuration;

                    let effortFlow = 0;

                    if (inPmusWindow) {
                        // Get Pmus directly from waveform
                        const pmus = this.calculatePmus(this.currentPmusTime);

                        // effortPmus follows the full Pmus waveform (including recoil decay)
                        // The sin() waveform naturally decays from ~90% to 0% during recoil,
                        // providing smooth braking transition for both triggered and ineffective efforts
                        let effortPmus = pmus;

                        // Flow follows Pmus: Flow = effortPmus / R
                        effortFlow = (effortPmus / this.patient.resistance) * 60; // L/min
                    }

                    // Smooth tail from low-pass filtered braking (main loop)
                    if (!inPmusWindow && this.smoothedBrakingFlow > 0.05) {
                        effortFlow = this.smoothedBrakingFlow;
                    }

                    flow = baseExpiratoryFlow + effortFlow;

                    // Expiratory pressure: circuit recoil drives initial steep decay
                    // Circuit compliance (3 mL/cmH2O) stores compressed gas that decompresses rapidly
                    const circuitRecoilTau = 0.025; // 25ms — circuit decompression time constant
                    const circuitResistance = 3.0; // cmH2O per L/s
                    const flowPressure = circuitResistance * Math.abs(patientExpiratoryFlow) / 60;

                    // Use stored end-inspiratory pressure, or fall back to last calculated pressure for smooth transition
                    const endInspiratoryPressure = this.endInspiratoryPressure || this.lastCalculatedPressure || (this.settings.peep + this.settings.pressureSupport);

                    const circuitRecoilPressure = (endInspiratoryPressure - this.settings.peep - flowPressure) * Math.exp(-timeInExpiration / circuitRecoilTau);
                    pressure = this.settings.peep + flowPressure + circuitRecoilPressure;
                }

                // Volume display is ventilator-style: always starts at 0 each breath
                // (residual volume affects flow/pressure physics but not the displayed volume waveform)
                return {
                    pressure: Math.max(0, pressure),
                    flow: flow,
                    volume: Math.max(0, volume)
                };
            },

            // CPAP mode: Continuous Positive Airway Pressure
            // Equation of motion with no Pvent: Pmus = V/C + Flow×R
            // Flow = (Pmus - V/C) / R
            // Pressure maintained at PEEP with servo lag effect
            calculateCPAPMechanics(timeInBreath, tau) {
                let pressure, flow, volume;

                // Ventilator maintains PEEP
                const targetPressure = this.settings.peep;
                const compliance = this.getEffectiveCompliance();
                const resistance = this.patient.resistance;

                // Get current Pmus value (returns 0 when not in effort)
                let pmus = 0;
                const inPmusWindow = this.patient.spontaneousBreathingEnabled &&
                    this.patient.pmusAmplitude > 0 &&
                    this.currentPmusTime >= 0 &&
                    this.currentPmusTime < this.patient.pmusDuration;

                if (inPmusWindow) {
                    pmus = this.calculatePmus(this.currentPmusTime);
                }

                // During Pmus window: calculate flow from equation of motion
                // After Pmus window: passive exhalation
                if (inPmusWindow) {
                    // Mark as in active breathing phase. Don't reset cumulative volume —
                    // it carries the residual from incomplete previous expiration so the
                    // equation of motion produces a continuous flow curve through the
                    // exhale→inspire transition (PS-style brake-induced rise to zero).
                    // Track inspiration-start volume separately for VT calculation.
                    if (!this.cpapInInspiration) {
                        this.cpapInInspiration = true;
                        this.cpapInspStartVolume = this.cpapCumulativeVolume;
                    }

                    // Current volume creates back-pressure (elastic recoil)
                    const elasticRecoil = this.cpapCumulativeVolume / compliance;

                    // Equation of motion: Flow = (Pmus - V/C) / R
                    // Flow can be positive (inspiratory) or negative (expiratory if recoil > Pmus)
                    const netDrivingPressure = pmus - elasticRecoil;
                    flow = (netDrivingPressure / resistance) * 60; // L/min

                    // Update volume based on flow (can increase or decrease)
                    const dt = 0.016; // ~60fps
                    const volumeChange = (flow / 60) * 1000 * dt; // mL
                    this.cpapCumulativeVolume = Math.max(0, this.cpapCumulativeVolume + volumeChange);
                    volume = this.cpapCumulativeVolume;

                    // Track peak volume for pure passive exhalation after Pmus ends
                    if (volume > this.cpapPeakVolume) {
                        this.cpapPeakVolume = volume;
                    }

                    // Servo lag effect: ventilator can't instantly match demand
                    // Creates slight pressure variation during patient effort
                    const servoLagFactor = 0.10; // 10% of flow-related pressure effect
                    const flowLps = Math.abs(flow) / 60; // L/s (absolute for pressure calc)
                    const demandPressureEffect = flowLps * resistance * servoLagFactor;

                    // Pressure varies slightly: dips during insp demand, rises slightly during exp
                    if (flow > 0) {
                        pressure = targetPressure - demandPressureEffect; // Slight dip during inspiration
                    } else {
                        pressure = targetPressure + demandPressureEffect * 0.5; // Slight rise during recoil
                    }
                } else {
                    // Patient Pmus effort has ended - pure passive exhalation

                    if (this.cpapInInspiration && this.cpapCumulativeVolume > 0) {
                        // Just transitioned to passive exhalation
                        this.cpapExpirationStartTime = this.currentTime;
                        this.cpapExpirationStartVolume = this.cpapCumulativeVolume;
                        this.cpapInInspiration = false;
                    }

                    if (this.cpapExpirationStartVolume > 0 && this.cpapExpirationStartTime > 0) {
                        // Passive exhalation - exponential volume decay
                        const timeInExpiration = this.currentTime - this.cpapExpirationStartTime;
                        const expDecay = Math.exp(-timeInExpiration / tau);
                        volume = this.cpapExpirationStartVolume * expDecay;
                        // Keep cumulative volume in sync with the decay so the next Pmus
                        // sees the correct residual and produces continuous flow.
                        this.cpapCumulativeVolume = volume;
                        flow = -(this.cpapExpirationStartVolume / tau) * expDecay * 0.06; // L/min

                        // Apply flow limitation if enabled
                        if (this.patient.flowLimitationEnabled) {
                            flow = this.applyFlowLimit(flow, volume + this.residualVolume, timeInExpiration);
                        }

                        // Reset when volume is negligible
                        if (volume < 1) {
                            this.cpapExpirationStartVolume = 0;
                            this.cpapPeakVolume = 0;
                            this.cpapCumulativeVolume = 0;
                            this.cpapInspStartVolume = 0;
                            volume = 0;
                            flow = 0;
                        }
                    } else {
                        // At rest
                        volume = 0;
                        flow = 0;
                    }

                    // Pressure at PEEP during passive/rest
                    pressure = targetPressure;
                }

                return {
                    pressure: Math.max(0, pressure),
                    flow: flow,
                    volume: Math.max(0, volume)
                };
            },

            // PAV+ (Proportional Assist Ventilation Plus) mode
            // Ventilator provides pressure proportional to patient effort (Pmus)
            // Formula: Pvent = (supportPercent / (100 - supportPercent)) × Pmus
            // At 50% support: Pvent = 1.0 × Pmus (ventilator matches patient)
            // At 80% support: Pvent = 4.0 × Pmus (ventilator does 4× patient effort)
            // Follows Pmus instantaneously (no rise time), cycles at end of active Pmus
            calculatePAVPlusMechanics(timeInBreath, tau, inspiratoryPauseActive = false) {
                let pressure, flow, volume;
                const compliance = this.getEffectiveCompliance() || 50;
                const resistance = this.patient.resistance || 10;

                // During inspiratory hold: maintain volume, zero flow, but show effort recoil in pressure
                if (inspiratoryPauseActive) {
                    volume = this.currentMetrics.volume || this.peakVolumeThisBreath || 0;
                    flow = 0;

                    // PAV+ uses timeInBreath for Pmus timing (not global scheduler like PC/PS modes)
                    // During hold, timeInBreath is frozen, so add pauseDuration to advance Pmus time
                    let pmus = 0;
                    let pmusTime = timeInBreath + (this.pauseDuration || 0);

                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0) {
                        if (pmusTime >= 0 && pmusTime <= this.patient.pmusDuration) {
                            pmus = this.calculatePmus(pmusTime);
                        }
                    }

                    // Base plateau pressure (elastic recoil + PEEP)
                    // Return just the base plateau - recoil rise is handled in pause handler
                    const basePlateau = (volume / compliance) + this.settings.peep;
                    pressure = basePlateau;
                    return { pressure: Math.max(0, pressure), flow: 0, volume: Math.max(0, volume) };
                }

                if (this.breathPhase === 'inspiration') {
                    // Use centrally-calculated Pmus time (handles both entrainment and independent breathing)
                    // This ensures continuity with expiratory flow calculation which also uses currentPmusTime
                    let pmus = 0;
                    let pmusTime = 0;

                    if (this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0 && this.currentPmusTime >= 0) {
                        pmusTime = this.currentPmusTime;
                        pmus = this.calculatePmus(pmusTime);
                    }

                    const normalizedPmusTime = this.patient.pmusDuration > 0 ? pmusTime / this.patient.pmusDuration : 0;

                    // Calculate PAV+ multiplier: supportPercent / (100 - supportPercent)
                    const supportPercent = this.settings.pavSupportPercent || 50;
                    const pavMultiplier = supportPercent / (100 - supportPercent);

                    // Calculate ventilator pressure proportional to Pmus
                    let pvent = pavMultiplier * pmus;

                    // Apply Pmax ceiling (pressure above PEEP limit)
                    const maxPventAbovePeep = this.settings.pavPmax - this.settings.peep;
                    pvent = Math.min(pvent, maxPventAbovePeep);

                    // Total driving pressure = Pmus + Pvent
                    const drivingPressure = pmus + pvent;

                    // Volume is tracked by universal flow integration
                    const currentVolume = this.currentMetrics.volume || 0;
                    volume = currentVolume;

                    // Flow proportional to driving pressure (PAV+ amplifies patient effort)
                    // Apply elastic recoil factor to account for V/C back-pressure
                    // Factor 0.83 calibrated to match equation of motion physics:
                    // V = Pdriving × C × (1 - e^(-t/τ)) ≈ 0.80 × equilibrium for t = 1.6τ
                    const elasticRecoilFactor = 0.83;
                    const fullPavFlow = (drivingPressure / resistance) * 60 * elasticRecoilFactor; // L/min

                    // For triggered breaths, blend from pre-trigger flow style to full PAV+ flow
                    // Pre-trigger flow matches expiration: (pmus / R) * 60 (no pvent)
                    const pavFlowTransitionTime = 0.1;
                    if (this.breathWasTriggered && timeInBreath < pavFlowTransitionTime) {
                        const blendProgress = timeInBreath / pavFlowTransitionTime;
                        const blendFactor = 1 - Math.pow(1 - blendProgress, 3); // Cubic ease-out

                        // Pre-trigger flow: use captured displayed flow for seamless transition
                        const preTriggerStyleFlow = this.flowAtTrigger;

                        // Blend from pre-trigger style to full PAV+ calculation
                        flow = preTriggerStyleFlow + (fullPavFlow - preTriggerStyleFlow) * blendFactor;
                    } else {
                        flow = fullPavFlow;
                    }

                    // Breath-stacking: add residual volume from incomplete exhalation
                    if (this.isBreathStacking) {
                        volume = volume + (this.residualVolume || 0);
                    }

                    // Airway pressure = PEEP + Pvent (follows Pmus instantaneously, no rise time)
                    const startPressure = this.pressureAtTrigger || this.settings.peep;
                    const targetPressure = this.settings.peep + pvent;

                    // Very short transition from trigger pressure to target (instantaneous follow)
                    const transitionTime = 0.05; // 50ms for smooth visual but essentially instant
                    if (timeInBreath < transitionTime) {
                        const t = timeInBreath / transitionTime;
                        const easeOut = 1 - Math.pow(1 - t, 2); // Quick quadratic ease
                        pressure = startPressure + (targetPressure - startPressure) * easeOut;
                    } else {
                        pressure = targetPressure;
                    }

                    // Track peak flow for measurements
                    if (flow > this.peakInspiratoryFlow) {
                        this.peakInspiratoryFlow = flow;
                    }

                    // Mark Pmus as active for this breath
                    if (pmus > 0) {
                        this.pmusWasActiveThisBreath = true;
                        this.pmusWasActiveDuringInspiration = true;
                    }

                } else {
                    // Expiration - similar to PS mode but without recoil effect
                    // Use stored inspiration end time, or fall back to Pmus duration
                    const actualInspirationTime = this.inspirationEndTime || this.patient.pmusDuration || 0.8;
                    const timeInExpiration = Math.max(0, timeInBreath - actualInspirationTime);

                    // Use stored end-inspiratory values with fallbacks
                    const endInspiratoryVolume = this.endInspiratoryVolume || this.peakVolumeThisBreath || this.currentMetrics.volume || 0;
                    const totalVolumeToExhale = endInspiratoryVolume + (this.residualVolume || 0);

                    // Volume decays exponentially
                    volume = endInspiratoryVolume * Math.exp(-timeInExpiration / tau);

                    // Base expiratory flow (passive decay)
                    let baseExpiratoryFlow = -((totalVolumeToExhale / tau) * Math.exp(-timeInExpiration / tau)) * 0.06;

                    // Apply flow limitation if enabled
                    baseExpiratoryFlow = this.applyFlowLimit(baseExpiratoryFlow, volume + this.residualVolume, timeInExpiration);

                    // Ineffective effort: Flow follows Pmus directly (no filtering)
                    // This ensures flow follows the same rate of increase and decrease as Pmus
                    // without lag from the low-pass filter

                    // Check if we're in the Pmus window
                    const inPmusWindow = this.patient.spontaneousBreathingEnabled &&
                                         this.patient.pmusAmplitude > 0 &&
                                         this.currentPmusTime >= 0 &&
                                         this.currentPmusTime < this.patient.pmusDuration;

                    let effortFlow = 0;

                    if (inPmusWindow) {
                        // Get Pmus directly from waveform
                        const pmus = this.calculatePmus(this.currentPmusTime);

                        // effortPmus follows the full Pmus waveform (including recoil decay)
                        // The sin() waveform naturally decays from ~90% to 0% during recoil,
                        // providing smooth braking transition for both triggered and ineffective efforts
                        let effortPmus = pmus;

                        // Flow follows Pmus: Flow = effortPmus / R
                        effortFlow = (effortPmus / resistance) * 60; // L/min
                    }

                    // Smooth tail from low-pass filtered braking (main loop)
                    if (!inPmusWindow && this.smoothedBrakingFlow > 0.05) {
                        effortFlow = this.smoothedBrakingFlow;
                    }

                    flow = baseExpiratoryFlow + effortFlow;

                    // Expiratory pressure: simple rapid decay to PEEP
                    // PAV+ pressure at cycling is already near PEEP (Pvent follows Pmus which is ~0),
                    // so no circuit resistance/flowPressure component is needed — it would create
                    // an upward bump since endInspiratoryPressure ≈ PEEP < PEEP + flowPressure
                    const pressureDropTime = 0.05;
                    const endInspiratoryPressure = this.endInspiratoryPressure || this.lastCalculatedPressure || this.settings.peep;
                    pressure = this.settings.peep + (endInspiratoryPressure - this.settings.peep) * Math.exp(-timeInExpiration / pressureDropTime);
                }

                return {
                    pressure: Math.max(0, pressure),
                    flow: flow,
                    volume: Math.max(0, volume)
                };
            },

            calculateTimeConstant() {
                // τ (tau) = Resistance × Compliance
                // Convert resistance to cmH2O/(mL/s) and compliance to mL/cmH2O
                // Result in seconds
                // Uses effective values which include breath-to-breath variability when enabled
                return (this.getEffectiveResistance() * this.getEffectiveCompliance()) / 1000;
            },

            // Calculate effective expiratory time constant accounting for flow limitation
            // With flow limitation, exhalation is much slower than predicted by simple R*C
            calculateEffectiveExpiratoryTau() {
                const baseTau = this.calculateTimeConstant();

                // If flow limitation is disabled, use base tau
                if (!this.patient.flowLimitationEnabled) {
                    return baseTau;
                }

                // Get flow limitation parameters (same as applyFlowLimit)
                const params = this.getFlowLimitParams();
                const appliedPeep = this.settings.peep;
                const compliance = this.patient.compliance;

                // Calculate auto-PEEP (intrinsic PEEP from trapped gas)
                const autoPeep = this.residualVolume > 0 ? this.residualVolume / compliance : 0;

                // Total PEEP for stenting effect = applied PEEP + auto-PEEP
                // Auto-PEEP stents airways open just like applied PEEP
                const totalPeep = appliedPeep + autoPeep;

                // Calculate how much total PEEP protects against airway collapse
                // Same calculation as in applyFlowLimit()
                const peepEffect = totalPeep * params.peepStentingFactor;
                const peepProtection = peepEffect / params.criticalClosingPressure;

                // If PEEP >= critical closing pressure, airways are fully stented open
                // No flow limitation effect on time constant
                if (peepProtection >= 1) {
                    return baseTau;
                }

                // Base severity factor from flow limitation parameters
                // Higher criticalClosingPressure and lower flowLimitK = more severe limitation
                // Severe: CCP=10, k=6 → factor ~3-4x
                // Moderate: CCP=7, k=10 → factor ~2x
                // Mild: CCP=4, k=14 → factor ~1.5x
                const baseSeverityFactor = 1 + (params.criticalClosingPressure / params.flowLimitK);

                // PEEP protection reduces the severity of flow limitation
                // peepProtection = 0 → full severity
                // peepProtection = 0.5 → half severity
                // peepProtection = 1 → no severity (handled above)
                const adjustedSeverity = 1 + (baseSeverityFactor - 1) * (1 - peepProtection);

                return baseTau * adjustedSeverity;
            },

            // Calculate Predicted Body Weight (PBW) based on sex and height
            // Formula from ARDSNet: Male: 50 + 0.91*(height - 152.4), Female: 45.5 + 0.91*(height - 152.4)
            calculatePBW(sex, height) {
                if (!sex || !height || height < 100) {
                    return null;
                }
                if (sex === 'M') {
                    return Math.round(50 + 0.91 * (height - 152.4));
                }
                if (sex === 'F') {
                    return Math.round(45.5 + 0.91 * (height - 152.4));
                }
                return null;
            },

            // Generate Gaussian (normal) distributed random number using Box-Muller transform
            gaussianRandom(mean = 1.0, stdDev = 0.1) {
                const u1 = Math.random();
                const u2 = Math.random();
                const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
                return mean + z * stdDev;
            },

            // Generate new variability factors for this breath
            generateBreathVariability() {
                if (!this.patient.naturalVariabilityEnabled) {
                    // Reset to defaults when disabled
                    this.breathVariability.complianceFactor = 1.0;
                    this.breathVariability.resistanceFactor = 1.0;
                    this.breathVariability.pmusAmplitudeFactor = 1.0;
                    this.breathVariability.spontaneousIntervalFactor = 1.0;
                    return;
                }

                const cv = this.patient.variabilityAmount; // Coefficient of variation (e.g., 0.10 for 10%)

                // Generate random factors with Gaussian distribution centered at 1.0
                // Clamp to reasonable bounds (0.7 to 1.3) to prevent extreme values
                this.breathVariability.complianceFactor = Math.max(0.7, Math.min(1.3, this.gaussianRandom(1.0, cv)));
                this.breathVariability.resistanceFactor = Math.max(0.7, Math.min(1.3, this.gaussianRandom(1.0, cv)));

                // Only update Pmus amplitude factor if Pmus is NOT currently active
                // Changing it mid-effort would cause a visible discontinuity in the waveform
                const pmusActive = this.currentPmusTime >= 0 && this.currentPmusTime < this.patient.pmusDuration;
                if (!pmusActive) {
                    this.breathVariability.pmusAmplitudeFactor = Math.max(0.7, Math.min(1.3, this.gaussianRandom(1.0, cv)));
                }

                this.breathVariability.spontaneousIntervalFactor = Math.max(0.7, Math.min(1.3, this.gaussianRandom(1.0, cv)));
            },

            // Get effective compliance with variability and volume-dependent reduction
            // As lung volume increases above normal FRC (air trapping), compliance decreases
            // This models the flatter upper portion of the P-V curve
            //
            // In VC mode with air trapping: hyperinflation progresses until compliance is
            // reduced enough that elastic recoil can drive complete exhalation (equilibrium).
            // This equilibrium comes at the cost of high alveolar pressure.
            getEffectiveCompliance(currentVolume = 0) {
                let compliance = this.patient.compliance * this.breathVariability.complianceFactor;

                // Volume-dependent compliance reduction for dynamic hyperinflation
                const totalLungVolume = (this.residualVolume || 0) + currentVolume;

                if (totalLungVolume > 0) {
                    // Capacity ceiling: ~3x tidal volume represents severe hyperinflation
                    // Beyond this, compliance is critically reduced
                    const capacityCeiling = Math.max(1500, this.settings.tidalVolume * 3);

                    const volumeFraction = totalLungVolume / capacityCeiling;

                    // Aggressive exponential decay for realistic hyperinflation dynamics
                    // At 50% capacity: compliance ~37% of baseline
                    // At 75% capacity: compliance ~22% of baseline
                    // At 100% capacity: compliance ~13% of baseline (floor at 10%)
                    const hyperinflationFactor = Math.max(0.10, Math.exp(-2 * volumeFraction));

                    compliance *= hyperinflationFactor;
                }

                return compliance;
            },

            // Apply upper inflection point (UIP) effect to compliance
            //
            // The Upper Inflection Point represents the pressure at which alveoli
            // become overdistended and compliance begins to decrease. This is the
            // "knee" of the upper P-V curve where further pressure increases yield
            // diminishing volume returns.
            //
            // Used in pressure modes (PC, PRVC, PS) to simulate overdistension.
            // In volume control, stress index serves a similar purpose.
            //
            // When alveolar pressure exceeds UIP, compliance decays linearly:
            //
            // Compliance reduction table (for UIP = 25 cmH2O example):
            //   Pressure <= 25   ->  100% compliance (no effect)
            //   Pressure = 27.5  ->  80% compliance
            //   Pressure = 30    ->  60% compliance
            //   Pressure = 32.5  ->  40% compliance
            //   Pressure = 35    ->  20% compliance (floor)
            //   Pressure > 37.5  ->  20% compliance (floor)
            //
            // Formula: decayFactor = max(0.2, 1 - (pressure - UIP) / 12.5)
            //
            // Clinical implication: As driving pressure pushes past UIP, the same
            // pressure delivers progressively less volume - classic overdistension.
            //
            applyUpperInflectionPoint(baseCompliance, alveolarPressure) {
                if (!this.patient.upperInflectionEnabled) {
                    return baseCompliance;
                }

                const uip = this.patient.upperInflectionPoint;
                if (alveolarPressure <= uip) {
                    return baseCompliance;
                }

                // Linear decay: compliance reduces as pressure exceeds UIP
                // At 12.5 cmH2O above UIP, compliance is reduced to 20% of baseline
                const pressureAboveUIP = alveolarPressure - uip;
                const decayFactor = Math.max(0.2, 1 - (pressureAboveUIP / 12.5));

                return baseCompliance * decayFactor;
            },

            // Apply stress index effect to compliance (for VC mode)
            //
            // Stress Index (SI) reflects how compliance changes during inspiration:
            //   SI = 1.0: Linear P-t curve (normal, optimal PEEP)
            //   SI < 1.0: Downward concavity (recruitment - compliance improving)
            //   SI > 1.0: Upward concavity (overdistension - compliance worsening)
            //
            // Reduces compliance when SI > 1.1 (overdistension), simulating alveoli
            // on the flat upper portion of the P-V curve.
            //
            // SI slider is updated by updateStressIndexFromPeepTotal() which handles
            // both applied PEEP and auto-PEEP effects - no additional calculation needed here.
            //
            // Compliance reduction:
            //   SI <= 1.1  ->  100% (no effect)
            //   SI = 1.5   ->  50%
            //   SI > 1.5   ->  30% (floor)
            //
            applyStressIndexCompliance(baseCompliance) {
                if (!this.patient.stressIndexEnabled || this.settings.mode !== 'volume_control') {
                    return baseCompliance;
                }

                // Use current stress index directly
                // SI slider is now updated by updateStressIndexFromPeepTotal() which handles
                // both applied PEEP changes and auto-PEEP from air trapping
                // No need to calculate effectiveSI here - would double-count auto-PEEP effect
                let effectiveSI = this.patient.stressIndex;

                // Only apply compliance reduction for overdistension (effective SI > 1.1)
                if (effectiveSI <= 1.1) {
                    return baseCompliance;
                }

                // Overdistension: compliance decreases linearly
                // At effective SI = 1.5, compliance is reduced to 50% of baseline
                const siAboveNormal = effectiveSI - 1.1;
                const complianceFactor = Math.max(0.3, 1 - (siAboveNormal / 0.8));

                return baseCompliance * complianceFactor;
            },

            // Get the effective stress index for display purposes
            // Now that SI slider updates from PEEPtotal, this just returns the current SI
            getEffectiveStressIndex() {
                return this.patient.stressIndex;
            },

            // Update stress index slider based on PEEPtotal changes (applied PEEP + auto-PEEP)
            // Called when residualVolume changes (at breath transitions)
            // This handles BOTH applied PEEP changes and auto-PEEP from air trapping
            updateStressIndexFromPeepTotal() {
                if (!this.patient.stressIndexEnabled) {
                    return;
                }

                // Calculate current auto-PEEP from residual volume
                const currentAutoPeep = (this.residualVolume || 0) > 0
                    ? (this.residualVolume / this.patient.compliance)
                    : 0;

                // Calculate current PEEPtotal = applied PEEP + auto-PEEP
                const currentPeepTotal = this.settings.peep + currentAutoPeep;

                // Initialize trackers on first call (before any user changes)
                // This ensures we capture the baseline state
                if (this.previousPeepTotal === null) {
                    this.previousPeepTotal = currentPeepTotal;
                }
                if (this.previousAppliedPeep === null) {
                    this.previousAppliedPeep = this.settings.peep;
                }

                // Get previous values from trackers
                const prevPeepTotal = this.previousPeepTotal;
                const prevAppliedPeep = this.previousAppliedPeep;

                // Calculate deltas
                const peepTotalDelta = currentPeepTotal - prevPeepTotal;
                const appliedPeepDelta = this.settings.peep - prevAppliedPeep;

                // Only update SI if there's a meaningful change (> 0.1 cmH₂O)
                if (Math.abs(peepTotalDelta) > 0.1) {
                    let sensitivity = 0.03; // Base sensitivity per cmH₂O

                    // When flow limitation is active and applied PEEP increased,
                    // reduce sensitivity for the therapeutic (stenting) portion
                    if (this.patient.flowLimitationEnabled && appliedPeepDelta > 0) {
                        const params = this.getFlowLimitParams();

                        // Calculate how much stenting benefit the applied PEEP provides
                        // Higher stenting = more therapeutic = less SI increase
                        const peepStenting = this.settings.peep * params.peepStentingFactor;
                        const stentingRatio = Math.min(1, peepStenting / params.criticalClosingPressure);

                        // Reduce sensitivity proportionally to stenting benefit
                        // At full stenting (ratio >= 1), sensitivity reduced by 70%
                        // This reflects that therapeutic PEEP shouldn't increase SI as much
                        const stentingSensitivityReduction = stentingRatio * 0.7;
                        sensitivity = sensitivity * (1 - stentingSensitivityReduction);
                    }

                    const siDelta = peepTotalDelta * sensitivity;

                    // Update stress index
                    let newSI = this.patient.stressIndex + siDelta;
                    newSI = Math.max(0.5, Math.min(1.5, newSI));

                    // Update patient and pending patient
                    this.patient.stressIndex = newSI;
                    this.pendingPatient.stressIndex = newSI;

                    // Sync to Livewire
                    this.$wire.set('stressIndex', newSI);
                }

                // Always update trackers for next comparison
                // This ensures we track applied PEEP changes even when PEEPtotal doesn't change much
                this.previousPeepTotal = currentPeepTotal;
                this.previousAppliedPeep = this.settings.peep;
            },

            // Get effective resistance with variability applied
            getEffectiveResistance() {
                return this.patient.resistance * this.breathVariability.resistanceFactor;
            },

            // Get flow limit parameters based on severity preset
            getFlowLimitParams() {
                const severity = this.patient.flowLimitSeverity;
                const presets = {
                    mild: {criticalClosingPressure: 4, flowLimitK: 14, peepStentingFactor: 0.9},
                    moderate: {criticalClosingPressure: 7, flowLimitK: 10, peepStentingFactor: 0.8},
                    severe: {criticalClosingPressure: 10, flowLimitK: 6, peepStentingFactor: 0.7},
                    custom: {
                        criticalClosingPressure: this.patient.criticalClosingPressure,
                        flowLimitK: this.patient.flowLimitK,
                        peepStentingFactor: this.patient.peepStentingFactor
                    }
                };
                return presets[severity] || presets.moderate;
            },

            // Apply preset values when severity dropdown changes
            applyFlowLimitPreset() {
                const severity = this.pendingPatient.flowLimitSeverity;
                if (severity !== 'custom') {
                    const presets = {
                        mild: {criticalClosingPressure: 4, flowLimitK: 14, peepStentingFactor: 0.9},
                        moderate: {criticalClosingPressure: 7, flowLimitK: 10, peepStentingFactor: 0.8},
                        severe: {criticalClosingPressure: 10, flowLimitK: 6, peepStentingFactor: 0.7},
                    };
                    const params = presets[severity] || presets.moderate;
                    this.pendingPatient.criticalClosingPressure = params.criticalClosingPressure;
                    this.pendingPatient.flowLimitK = params.flowLimitK;
                    this.pendingPatient.peepStentingFactor = params.peepStentingFactor;
                }
            },

            // Apply flow limitation to expiratory flow
            applyFlowLimit(baseFlow, volume, timeInExpiration = 0) {
                // Skip if flow limitation disabled or not expiring (flow >= 0)
                if (!this.patient.flowLimitationEnabled || baseFlow >= 0) {
                    return baseFlow;
                }

                // Guard against invalid inputs
                if (!isFinite(baseFlow) || !isFinite(volume) || !isFinite(timeInExpiration)) {
                    return baseFlow;
                }

                // Ensure non-negative values
                volume = Math.max(0, volume);
                timeInExpiration = Math.max(0, timeInExpiration);

                // Get flow limit parameters
                const params = this.getFlowLimitParams();
                const appliedPeep = this.settings.peep;
                const compliance = this.getEffectiveCompliance(volume);
                const compressionDevelopmentTime = this.patient.compressionDevelopmentTime || 0.15;

                // Calculate auto-PEEP (intrinsic PEEP from trapped gas)
                // Auto-PEEP = elastic recoil from residual volume
                const autoPeep = this.residualVolume > 0 ? this.residualVolume / compliance : 0;

                // Total PEEP for stenting effect = applied PEEP + auto-PEEP
                // Auto-PEEP stents airways open just like applied PEEP
                const totalPeep = appliedPeep + autoPeep;

                // Calculate how much total PEEP protects against airway collapse
                const peepEffect = totalPeep * params.peepStentingFactor;
                const peepProtection = peepEffect / params.criticalClosingPressure;

                // If PEEP >= critical closing pressure, airways are fully stented open
                if (peepProtection >= 1) {
                    return baseFlow;
                }

                // Calculate alveolar pressure from current volume
                // Note: volume already includes residualVolume, so elastic recoil reflects auto-PEEP
                const alveolarPressure = (volume / compliance) + appliedPeep;

                // Calculate transmural pressure
                const effectiveCriticalPressure = Math.max(0, params.criticalClosingPressure - peepEffect);
                const transmural = alveolarPressure - effectiveCriticalPressure;

                // Calculate maximum flow with smooth transition
                const smoothingOffset = 0.5;
                const effectiveTransmural = Math.max(0, transmural) + smoothingOffset;
                const maxFlowMagnitude = params.flowLimitK * Math.sqrt(effectiveTransmural);

                // Dynamic compression development
                const baseCompressionTime = compressionDevelopmentTime;
                const protectionMargin = Math.max(0.05, 1 - peepProtection);
                const effectiveCompressionTime = baseCompressionTime / protectionMargin;

                // Use exponential ramp for smooth compression development
                const timeConstant = effectiveCompressionTime / 3;
                const compressionFactor = timeConstant > 0 ? 1 - Math.exp(-timeInExpiration / timeConstant) : 1;

                // Blend between unlimited and limited flow
                const flowMagnitude = Math.abs(baseFlow);
                const fullyLimitedMagnitude = Math.min(flowMagnitude, maxFlowMagnitude);
                const limitedMagnitude = flowMagnitude - compressionFactor * (flowMagnitude - fullyLimitedMagnitude);

                const result = -limitedMagnitude;
                return isFinite(result) ? result : baseFlow;
            },

            updateCharts() {
                if (!chartInstances.pressure) return;

                try {
                    // Show/hide Pmus dataset based on user checkbox (only available when spontaneous breathing enabled)
                    const shouldShowPmus = this.showPmusTrace && this.patient.spontaneousBreathingEnabled;
                    chartInstances.pressure.data.datasets[1].hidden = !shouldShowPmus;

                    // Update legend label based on positive/negative Pmus setting
                    chartInstances.pressure.data.datasets[1].label = this.patient.positivePmus ? 'Pos. Pmus' : 'Neg. Pmus';

                    // Show/hide legend based on Pmus visibility (only show legend when Pmus trace is visible)
                    chartInstances.pressure.options.plugins.legend.display = shouldShowPmus;

                    // Adjust Y-axis to show Pmus values when Pmus trace is shown
                    if (shouldShowPmus && this.patient.pmusAmplitude > 0) {
                        // When hold is active, effort is amplified by 1/0.75
                        const effectiveAmplitude = this.expiratoryPauseActive
                            ? this.patient.pmusAmplitude / 0.75
                            : this.patient.pmusAmplitude;

                        if (this.patient.positivePmus) {
                            // Positive Pmus - ensure Y-axis goes high enough
                            delete chartInstances.pressure.options.scales.y.min;
                            chartInstances.pressure.options.scales.y.max = Math.max(40, effectiveAmplitude + 5);
                        } else {
                            // Negative Pmus - ensure Y-axis goes low enough
                            delete chartInstances.pressure.options.scales.y.max;
                            chartInstances.pressure.options.scales.y.min = -effectiveAmplitude - 5;
                        }
                    } else {
                        // No Pmus trace shown - leave scales to updateChartScales()
                        // (deleting them here would override the rounded values with Chart.js auto-scaling)
                    }

                    // CPAP mode: use fixed scales instead of auto-scaling
                    // This prevents the small variations from being exaggerated
                    const isCpapModeForScale = this.settings.mode === 'pressure_support' && this.settings.pressureSupport === 0;
                    if (isCpapModeForScale) {
                        // Pressure: fixed scale around PEEP (tighter range for CPAP)
                        // But extend to show Pmus trace if enabled
                        const peep = this.settings.peep;
                        const showingPmus = this.showPmusTrace && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0;

                        let actualMin = peep;
                        for (const p of this.data.pressure) {
                            if (p.y !== null && p.y !== undefined && p.y < actualMin) actualMin = p.y;
                        }
                        if (showingPmus) {
                            for (const p of this.data.pmus) {
                                if (p.y !== null && p.y !== undefined && p.y < actualMin) actualMin = p.y;
                            }
                        }
                        const dataDrivenMin = actualMin < 0 ? actualMin - 5 : 0;

                        chartInstances.pressure.options.scales.y.min = dataDrivenMin;
                        chartInstances.pressure.options.scales.y.max = peep + 5;

                        // Flow and Volume: use actual waveform data for scaling
                        // This gives accurate scales that match what's displayed
                        if (this.data.flow.length > 10) {
                            const flowValues = this.data.flow.map(f => f.y).filter(y => y !== null && y !== undefined);
                            if (flowValues.length > 0) {
                                const actualFlowMin = Math.min(...flowValues);
                                const actualFlowMax = Math.max(...flowValues);
                                const paddedFlowMin = actualFlowMin * (actualFlowMin < 0 ? 1.1 : 0.9);
                                const paddedFlowMax = actualFlowMax * (actualFlowMax > 0 ? 1.1 : 0.9);
                                chartInstances.flow.options.scales.y.min = this.roundToFive(paddedFlowMin, true);
                                chartInstances.flow.options.scales.y.max = this.roundToFive(paddedFlowMax, false);
                            }

                            const volumeValues = this.data.volume.map(v => v.y).filter(y => y !== null && y !== undefined);
                            if (volumeValues.length > 0) {
                                const actualVolumeMax = Math.max(...volumeValues);
                                chartInstances.volume.options.scales.y.min = 0;
                                chartInstances.volume.options.scales.y.max = this.roundToFive(actualVolumeMax * 1.1, false);
                            }
                        }
                    }

                    // Update pressure chart (airway pressure + Pmus)
                    chartInstances.pressure.data.datasets[0].data = this.data.pressure.slice();
                    chartInstances.pressure.data.datasets[1].data = this.data.pmus.slice();

                    // Update pressure trigger markers - position at bottom of visible scale
                    const pressureYMin = chartInstances.pressure.options.scales.y.min ?? 0;
                    const pressureTriggerData = this.data.pressureTriggerMarkers.map(m => ({
                        x: m.x,
                        y: pressureYMin + 1
                    }));
                    chartInstances.pressure.data.datasets[2].data = pressureTriggerData;
                    // Hide trigger markers from legend
                    chartInstances.pressure.data.datasets[2].hidden = false;

                    chartInstances.pressure.update('none');

                    // Update flow chart
                    chartInstances.flow.data.datasets[0].data = this.data.flow.slice();

                    // Update flow trigger markers - position at bottom of visible scale
                    const flowYMin = chartInstances.flow.options.scales.y.min ?? -60;
                    const flowTriggerData = this.data.flowTriggerMarkers.map(m => ({x: m.x, y: flowYMin + 2}));
                    chartInstances.flow.data.datasets[1].data = flowTriggerData;

                    chartInstances.flow.update('none');

                    // Update volume chart
                    chartInstances.volume.data.datasets[0].data = this.data.volume.slice();
                    chartInstances.volume.update('none');
                } catch (error) {
                    console.error('Error updating charts:', error);
                }
            },

            getComplianceStatus() {
                if (this.patient.compliance >= 70) return 'High (Emphysema-like)';
                if (this.patient.compliance >= 40) return 'Normal';
                if (this.patient.compliance >= 20) return 'Reduced (Fibrosis-like)';
                return 'Severely Reduced (ARDS-like)';
            },

            getResistanceStatus() {
                if (this.patient.resistance >= 15) return 'High (Obstructive disease)';
                if (this.patient.resistance >= 3) return 'Normal';
                return 'Low';
            },

            calculateIERatio() {
                const breathPeriod = 60 / this.settings.rate;
                const expirationTime = breathPeriod - this.settings.iTime;
                const ratio = expirationTime / this.settings.iTime;
                return ratio.toFixed(1);
            },

            calculateVCInspiratoryTime() {
                // In VC mode, inspiratory time is determined by tidal volume / flow
                // For constant flow: Ti = VT / Flow
                // For decelerating (descending ramp): Ti = 2 × VT / Peak Flow
                const flowRateMLPerS = this.settings.flow * 1000 / 60; // Convert L/min to mL/s
                let iTime;
                if (this.settings.flowPattern === 'decelerating') {
                    iTime = (2 * this.settings.tidalVolume) / flowRateMLPerS;
                } else {
                    iTime = this.settings.tidalVolume / flowRateMLPerS;
                }
                return iTime.toFixed(2);
            },

            calculateVCIERatio() {
                // In VC mode, inspiratory time is determined by tidal volume / flow
                // For constant flow: Ti = VT / Flow
                // For decelerating (descending ramp): Ti = 2 × VT / Peak Flow
                const flowRateMLPerS = this.settings.flow * 1000 / 60; // Convert L/min to mL/s
                let iTime;
                if (this.settings.flowPattern === 'decelerating') {
                    iTime = (2 * this.settings.tidalVolume) / flowRateMLPerS;
                } else {
                    iTime = this.settings.tidalVolume / flowRateMLPerS;
                }
                const breathPeriod = 60 / this.settings.rate;
                const expirationTime = breathPeriod - iTime - this.settings.inspiratoryPause;
                const ratio = expirationTime / iTime;
                return ratio.toFixed(1);
            },

            updateBreathMetrics() {
                // Calculate min/max from current data window
                if (this.data.pressure.length === 0) return;

                const pressureValues = this.data.pressure.map(p => p.y).filter(y => y !== null && y !== undefined);
                const flowValues = this.data.flow.map(f => f.y).filter(y => y !== null && y !== undefined);
                const volumeValues = this.data.volume.map(v => v.y).filter(y => y !== null && y !== undefined);

                if (pressureValues.length > 0 && flowValues.length > 0 && volumeValues.length > 0) {
                    // Add to breath metrics arrays
                    this.breathMetrics.pressureMin.push(Math.min(...pressureValues));
                    this.breathMetrics.pressureMax.push(Math.max(...pressureValues));
                    this.breathMetrics.flowMin.push(Math.min(...flowValues));
                    this.breathMetrics.flowMax.push(Math.max(...flowValues));
                    this.breathMetrics.volumeMin.push(Math.min(...volumeValues));
                    this.breathMetrics.volumeMax.push(Math.max(...volumeValues));

                    // Keep only last N breaths
                    const maxBreaths = this.breathMetrics.maxBreaths;
                    if (this.breathMetrics.pressureMin.length > maxBreaths) {
                        this.breathMetrics.pressureMin.shift();
                        this.breathMetrics.pressureMax.shift();
                        this.breathMetrics.flowMin.shift();
                        this.breathMetrics.flowMax.shift();
                        this.breathMetrics.volumeMin.shift();
                        this.breathMetrics.volumeMax.shift();
                    }
                }

                // Update chart scales with averaged values
                this.updateChartScales();
            },

            updateChartScales() {
                if (!chartInstances.pressure) return;

                // Don't update scales if we don't have breath data yet (e.g., just entered CPAP mode)
                if (this.breathMetrics.flowMin.length === 0) return;

                // Calculate average min/max with 10% padding
                // For pressure, also account for negative Pmus values (only if Pmus trace is shown)
                let pressureMin = Math.min(...this.breathMetrics.pressureMin);

                // Include Pmus in pressure scaling when trace is visible OR when hold is active
                const needsPmusScaling = (this.showPmusTrace && this.patient.spontaneousBreathingEnabled && this.patient.pmusAmplitude > 0)
                    || (this.expiratoryPauseActive && this.patient.pmusAmplitude > 0);

                if (needsPmusScaling) {
                    // When hold button is pressed, values are amplified by 1/0.75
                    const amplifiedPmus = this.expiratoryPauseActive
                        ? this.patient.pmusAmplitude / 0.75
                        : this.patient.pmusAmplitude;
                    pressureMin = Math.min(pressureMin, -amplifiedPmus);

                    // Also check actual pmus data for min value (in case it exceeds expected amplitude)
                    if (this.data.pmus && this.data.pmus.length > 0) {
                        const pmusValues = this.data.pmus.map(p => p.y).filter(y => y !== null && y !== undefined);
                        if (pmusValues.length > 0) {
                            const pmusDataMin = Math.min(...pmusValues);
                            pressureMin = Math.min(pressureMin, pmusDataMin);
                        }
                    }
                } else if (this.patient.effort > 0) {
                    pressureMin = Math.min(pressureMin, -this.patient.effort);
                }

                // When hold is active with patient effort, ensure scale accommodates amplified values
                if (this.expiratoryPauseActive && this.patient.pmusAmplitude > 0) {
                    const minForAmplifiedEffort = -(this.patient.pmusAmplitude / 0.75) * 1.2;
                    pressureMin = Math.min(pressureMin, minForAmplifiedEffort);
                }

                const paddedPressureMin = pressureMin * (pressureMin < 0 ? 1.1 : 0.9);
                const paddedPressureMax = Math.max(...this.breathMetrics.pressureMax) * 1.1;
                let avgPressureMin = this.roundToFive(paddedPressureMin, true);
                const avgPressureMax = this.roundToFive(paddedPressureMax, false);

                // Extra safety: ensure minimum scale when hold is active
                if (this.expiratoryPauseActive && this.patient.pmusAmplitude > 0) {
                    const safeMin = this.roundToFive(-(this.patient.pmusAmplitude / 0.75) * 1.3, true);
                    avgPressureMin = Math.min(avgPressureMin, safeMin);
                }

                // Use continuous scaling for flow (same as pressure/volume)
                const rawFlowMin = Math.min(...this.breathMetrics.flowMin);
                const rawFlowMax = Math.max(...this.breathMetrics.flowMax);

                // 10% padding then round to nearest 5
                const paddedFlowMin = rawFlowMin * (rawFlowMin < 0 ? 1.1 : 0.9);
                const paddedFlowMax = rawFlowMax * (rawFlowMax > 0 ? 1.1 : 0.9);
                const avgFlowMin = this.roundToFive(paddedFlowMin, true);
                const avgFlowMax = this.roundToFive(paddedFlowMax, false);

                const rawVolumeMin = Math.min(...this.breathMetrics.volumeMin);
                const paddedVolumeMin = rawVolumeMin * (rawVolumeMin < 0 ? 1.1 : 0.9);
                const paddedVolumeMax = Math.max(...this.breathMetrics.volumeMax) * 1.1;
                const avgVolumeMin = this.roundToFive(paddedVolumeMin, true);
                const avgVolumeMax = this.roundToFive(paddedVolumeMax, false);

                // Update chart options
                chartInstances.pressure.options.scales.y.min = avgPressureMin;
                chartInstances.pressure.options.scales.y.max = avgPressureMax;

                chartInstances.flow.options.scales.y.min = avgFlowMin;
                chartInstances.flow.options.scales.y.max = avgFlowMax;

                chartInstances.volume.options.scales.y.min = avgVolumeMin;
                chartInstances.volume.options.scales.y.max = avgVolumeMax;

                // Force immediate chart update when called from button handlers
                if (this.expiratoryPauseActive || this.inspiratoryPauseActive) {
                    chartInstances.pressure.update('none');
                    chartInstances.flow.update('none');
                    chartInstances.volume.update('none');
                }
            },

            // Task 2: capture current Pmus settings as the new baseline (what the patient wants
            // to do at *this* support level). Called when Responsive is toggled on, when the
            // user edits a baseline-Pmus slider, or on scenario load.
            captureResponsiveBaseline() {
                // Snapshot from pendingPatient so unconfirmed edits are honored,
                // but write to BOTH so the live patient sees them after Confirm.
                const src = this.pendingPatient;
                const snap = {
                    baselinePmusAmplitude: src.pmusAmplitude || 0,
                    baselineRiseTime:      src.pmusRiseTime  || 0,
                    baselineHoldTime:      src.pmusHoldTime  || 0,
                    baselineDecayTime:     src.pmusDecayTime || 0,
                };
                Object.assign(this.pendingPatient, snap);
                Object.assign(this.patient,        snap);
                // Force W_ref to be re-captured on the next breath end. Also reset
                // accumulators and arm the skip-first flag so the in-flight breath's
                // partial work isn't used as the anchor (would cause phantom unload).
                this.wRef = null;
                this.wRefArmed = false;
                this.wRefSamples = [];
                this.wVentAccum = 0;
                this.wPatientAccum = 0;
                this.lastVolumeForWork = this.integratedVolume;
            },

            // Task 3: per-breath feedback step. Called once per completed breath after
            // wVentLastBreath is captured.
            //   - If Responsive is OFF: ensure unloadFactor = 1 and clear wRef.
            //   - If Responsive is ON and wRef is null: capture wRef from the just-completed breath.
            //   - If Responsive is ON and wRef is set: compute unloadFactor from ΔW.
            updateUnloadFactor() {
                if (!this.patient.responsivePmus || (this.patient.baselinePmusAmplitude || 0) <= 0) {
                    this.unloadFactor = 1.0;
                    // Don't null wRef here unconditionally — only when the toggle flips off
                    // (handled in the watcher in Task 5). But if baseline is 0, there is
                    // nothing to scale so factor is moot.
                } else if (this.wRef === null) {
                    // Stability-gated anchoring. The post-load transient (lung
                    // volume settling to new PEEP/compliance/mode) can run
                    // longer than any fixed number of breaths, and locking
                    // inside it leaves wRef on the wrong side of true steady
                    // state — producing a persistent dW that beats the
                    // deadband and presents as Pmus drift at rest. Direction
                    // depends on which way the transient is decaying; a fixed
                    // window just trades upward drift for downward drift.
                    //
                    // Instead, wait until vent work has actually stopped
                    // moving before locking: the last STABILITY_WINDOW samples
                    // must all sit within ±STABILITY_TOLERANCE of their mean.
                    // MAX_SAMPLES caps the wait so we always lock eventually
                    // (e.g., with natural variability on, the system never
                    // perfectly stabilizes — fall back to the most recent
                    // window's mean).
                    //
                    // wRefArmed still skips the very first breath end after a
                    // mid-cycle toggle-on (which captures a partial breath
                    // with wVentAccum reset to 0).
                    const STABILITY_WINDOW = 3;
                    const STABILITY_TOLERANCE = 0.03;
                    const MAX_SAMPLES = 10;
                    if (!this.wRefArmed) {
                        this.wRefArmed = true;
                    } else {
                        this.wRefSamples.push(this.wVentLastBreath);
                        const n = this.wRefSamples.length;
                        if (n >= STABILITY_WINDOW) {
                            const window = this.wRefSamples.slice(-STABILITY_WINDOW);
                            const mean = window.reduce((a, b) => a + b, 0) / window.length;
                            const stable = mean > 0 &&
                                window.every(v => Math.abs(v - mean) / mean < STABILITY_TOLERANCE);
                            if (stable || n >= MAX_SAMPLES) {
                                this.wRef = mean;
                                this.wRefSamples = [];
                            }
                        }
                    }
                    this.unloadFactor = 1.0;
                } else {
                    // Normalization: empirically calibrated so that at 70% responsiveness,
                    // a typical ΔPS of ~10 cmH2O produces ~70% Pmus reduction (matching the
                    // legacy linear "sensitivity × ΔPS" intuition clinicians are used to).
                    // ΔPS of ~14 saturates the lower clamp; under-supporting drives uf > 1.
                    const wNorm = 1.0; // J

                    const responsiveness = (this.patient.responsivePmusSensitivity || 70) / 100; // 0..1
                    const rawDW = this.wVentLastBreath - this.wRef;

                    // Deadband: post-load and breath-to-breath physics noise produces small
                    // work fluctuations (a few % of wRef) that, without filtering, drive
                    // unloadFactor away from 1.0 and present as Pmus drifting at rest.
                    // A real settings change (even ΔPS 1 cmH2O) produces ~0.5 J — well over
                    // 30% of a typical wRef — so a 10% threshold filters drift with a wide
                    // safety margin without dulling the response to user-initiated changes.
                    const deadband = 0.10 * Math.abs(this.wRef);
                    const dW = Math.abs(rawDW) < deadband ? 0 : rawDW;

                    // Smooth across breaths to avoid 1-breath ringing. alpha=0.5 = average prior + new.
                    const rawFactor = 1 - responsiveness * (dW / wNorm);
                    const smoothed  = 0.5 * this.unloadFactor + 0.5 * rawFactor;

                    this.unloadFactor = Math.max(0.1, Math.min(2.0, smoothed));
                }

                // Sync patient.pmusDuration to the effective total. ~30 physics call sites
                // read this.patient.pmusDuration directly as the "active Pmus window" — for
                // spontaneous-rate scheduling, PS inspiration time, phase-boundary checks,
                // and normalized-time calculations. When responsive scaling stretches or
                // shortens the envelope, those sites must see the effective duration.
                // Also write to pendingPatient so hasPendingPatientChanges()'s JSON diff
                // doesn't see a phantom user edit and pop the Confirm/Cancel buttons.
                const t = this.effectivePmusTimings();
                const effective = +t.total.toFixed(3);
                this.patient.pmusDuration = effective;
                if (this.pendingPatient) this.pendingPatient.pmusDuration = effective;
            },

            // Task 4: work-share model. baseline × unloadFactor. Mode-agnostic — the unload
            // factor is computed from delivered vent work, which captures every mode and
            // every parameter that affects support (PS, deltaP, compliance, resistance,
            // PEEP, PRVC's dynamic pressure, PAV+'s gain, etc.).
            getEffectivePmusAmplitude() {
                if (!this.patient.responsivePmus) {
                    // Non-responsive: just return what the user set.
                    return this.patient.pmusAmplitude || 0;
                }
                const baseline = this.patient.baselinePmusAmplitude || 0;
                if (baseline <= 0) return this.patient.pmusAmplitude || 0;
                return baseline * (this.unloadFactor || 1);
            },

            roundToFive(value, isMin) {
                // Round to nearest multiple of 5
                // For min values: round down (floor) to ensure data fits
                // For max values: round up (ceil) to ensure data fits
                if (Math.abs(value) < 0.001) return 0;

                if (isMin) {
                    return Math.floor(value / 5) * 5;
                } else {
                    return Math.ceil(value / 5) * 5;
                }
            }
        }
    }
