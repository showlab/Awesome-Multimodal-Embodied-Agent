export type Coverage = 'direct' | 'partial' | 'none';
export type BenchmarkCategory = 'MMEA' | 'MMA' | 'RS';
export type Benchmark = { name: string; venue: string; year: number; task: string; category: BenchmarkCategory; subcategory: string; coverage: Coverage[] };

export const benchmarks: Benchmark[] = [
  {
    "name": "TEACh",
    "venue": "AAAI'22",
    "year": 2022,
    "task": "Dialogue-guided tasks",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "RoCoBench",
    "venue": "ICRA'24",
    "year": 2024,
    "task": "Collaborative coordination",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "none",
      "partial",
      "direct",
      "direct",
      "partial"
    ]
  },
  {
    "name": "PARTNR",
    "venue": "ICLR'25",
    "year": 2025,
    "task": "Collaborative planning",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "direct",
      "direct",
      "partial"
    ]
  },
  {
    "name": "EMBODIEDBENCH",
    "venue": "ICML'25",
    "year": 2025,
    "task": "Embodied tasks",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "direct",
      "direct",
      "partial"
    ]
  },
  {
    "name": "RoboCerebra",
    "venue": "NeurIPS'25",
    "year": 2025,
    "task": "Long-horizon planning",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "direct",
      "direct",
      "direct"
    ]
  },
  {
    "name": "Habitat-MAS",
    "venue": "ICLR'25",
    "year": 2025,
    "task": "Multi-robot allocation",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "direct",
      "direct",
      "partial"
    ]
  },
  {
    "name": "IS-Bench",
    "venue": "AAAI'26",
    "year": 2026,
    "task": "Hazard mitigation",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "ESI-Bench",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Spatial intelligence",
    "category": "MMEA",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "direct",
      "direct",
      "none"
    ]
  },
  {
    "name": "AgenticLab",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Verified replanning",
    "category": "MMEA",
    "subcategory": "Real",
    "coverage": [
      "direct",
      "partial",
      "direct",
      "direct",
      "direct"
    ]
  },
  {
    "name": "CaP-Bench",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Robot code refinement",
    "category": "MMEA",
    "subcategory": "Hybrid",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "MMMU-Pro",
    "venue": "ACL'25",
    "year": 2025,
    "task": "Multimodal QA",
    "category": "MMA",
    "subcategory": "Understanding",
    "coverage": [
      "direct",
      "none",
      "none",
      "none",
      "none"
    ]
  },
  {
    "name": "VSI-Bench",
    "venue": "CVPR'25",
    "year": 2025,
    "task": "Spatial reasoning",
    "category": "MMA",
    "subcategory": "Understanding",
    "coverage": [
      "direct",
      "none",
      "none",
      "none",
      "none"
    ]
  },
  {
    "name": "Video-MME-v2",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Video QA",
    "category": "MMA",
    "subcategory": "Understanding",
    "coverage": [
      "direct",
      "none",
      "none",
      "none",
      "none"
    ]
  },
  {
    "name": "WebArena",
    "venue": "ICLR'24",
    "year": 2024,
    "task": "Web workflows",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "none",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "GAIA",
    "venue": "ICLR'24",
    "year": 2024,
    "task": "General AI Tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "partial",
      "none",
      "partial",
      "partial",
      "none"
    ]
  },
  {
    "name": "VisualWebArena",
    "venue": "ACL'24",
    "year": 2024,
    "task": "Visual web tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "WebVoyager",
    "venue": "ACL'24",
    "year": 2024,
    "task": "Live web tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "AndroidWorld",
    "venue": "ICLR'25",
    "year": 2025,
    "task": "Android tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "AgentStudio",
    "venue": "ICLR'25",
    "year": 2025,
    "task": "Virtual-agent tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "direct"
    ]
  },
  {
    "name": "MMInA",
    "venue": "ACL-F'25",
    "year": 2025,
    "task": "Multimodal web tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "CRAB",
    "venue": "ACL-F'25",
    "year": 2025,
    "task": "Cross-device workflows",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "iVISPAR",
    "venue": "EMNLP'25",
    "year": 2025,
    "task": "Sliding-tile puzzles",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "direct",
      "partial",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "AgentVista",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Visual agent tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "direct",
      "none",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "GameWorld",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Browser-game tasks",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "MMSearch-Plus",
    "venue": "ICLR'26",
    "year": 2026,
    "task": "Multimodal retrieval",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "direct",
      "none",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "OmniGAIA",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Omni-modal QA",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "direct",
      "none",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "OSWorld2.0",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Computer-use Task",
    "category": "MMA",
    "subcategory": "Interaction",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "SWE-bench",
    "venue": "ICLR'24",
    "year": 2024,
    "task": "Repository repair",
    "category": "MMA",
    "subcategory": "Generation",
    "coverage": [
      "partial",
      "none",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "WebGen-Bench",
    "venue": "NeurIPS-DB'25",
    "year": 2025,
    "task": "Interactive website generation",
    "category": "MMA",
    "subcategory": "Generation",
    "coverage": [
      "partial",
      "none",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "PBench",
    "venue": "NVIDIA'25",
    "year": 2025,
    "task": "Physical future prediction",
    "category": "MMA",
    "subcategory": "Generation",
    "coverage": [
      "partial",
      "direct",
      "none",
      "none",
      "none"
    ]
  },
  {
    "name": "GameCraft-Bench",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Playable game generation",
    "category": "MMA",
    "subcategory": "Generation",
    "coverage": [
      "partial",
      "none",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "WorldModelBench",
    "venue": "NeurIPS-DB'25",
    "year": 2025,
    "task": "Future video generation",
    "category": "MMA",
    "subcategory": "Generation",
    "coverage": [
      "partial",
      "direct",
      "none",
      "none",
      "none"
    ]
  },
  {
    "name": "HarnessEval-W",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Interactive world prediction",
    "category": "MMA",
    "subcategory": "Generation",
    "coverage": [
      "partial",
      "direct",
      "none",
      "none",
      "none"
    ]
  },
  {
    "name": "Room-to-Room (R2R)",
    "venue": "CVPR'18",
    "year": 2018,
    "task": "Instruction navigation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "none",
      "direct",
      "partial"
    ]
  },
  {
    "name": "ALFRED",
    "venue": "CVPR'20",
    "year": 2020,
    "task": "Household tasks",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "RLBench",
    "venue": "RA-L'20",
    "year": 2020,
    "task": "Manipulation learning",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "CALVIN",
    "venue": "RA-L'22",
    "year": 2022,
    "task": "Instruction sequences",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "BEHAVIOR-1K",
    "venue": "CoRL'22",
    "year": 2022,
    "task": "Household activities",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "ManiSkill2",
    "venue": "ICLR'23",
    "year": 2023,
    "task": "Generalizable manipulation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "LIBERO",
    "venue": "NeurIPS-DB'23",
    "year": 2023,
    "task": "Lifelong manipulation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "Safety-Gymnasium",
    "venue": "NeurIPS'23",
    "year": 2023,
    "task": "Safe control",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "GOAT-Bench",
    "venue": "CVPR'24",
    "year": 2024,
    "task": "Multimodal navigation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "none",
      "direct",
      "partial"
    ]
  },
  {
    "name": "RoboSuite",
    "venue": "arXiv'25",
    "year": 2025,
    "task": "Policy training",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "VLABench",
    "venue": "ICCV'25",
    "year": 2025,
    "task": "Long-horizon manipulation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "Meta-World +",
    "venue": "NeurIPS-DB'25",
    "year": 2025,
    "task": "Multi-skill learning",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "none",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "LIBERO-PRO",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Robust manipulation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "LIBERO-Plus",
    "venue": "CVPR'26",
    "year": 2026,
    "task": "VLA robustness",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "SafeManip",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Safe manipulation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "Dream.exe",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Future video execution",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "direct",
      "none",
      "partial",
      "none"
    ]
  },
  {
    "name": "RoboCasa365",
    "venue": "ICLR'26",
    "year": 2026,
    "task": "Kitchen activities",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "RoboLab",
    "venue": "RSS'26",
    "year": 2026,
    "task": "Robust manipulation",
    "category": "RS",
    "subcategory": "Simulation",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "FurnitureBench",
    "venue": "RSS'23",
    "year": 2023,
    "task": "Furniture assembly",
    "category": "RS",
    "subcategory": "Real",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "FMB",
    "venue": "IJRR'24",
    "year": 2024,
    "task": "Skill composition",
    "category": "RS",
    "subcategory": "Real",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "none"
    ]
  },
  {
    "name": "RoboArena",
    "venue": "CoRL'25",
    "year": 2025,
    "task": "Policy comparison",
    "category": "RS",
    "subcategory": "Real",
    "coverage": [
      "partial",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "BEHAVIOR Robot Suite",
    "venue": "CoRL'25",
    "year": 2025,
    "task": "Household manipulation",
    "category": "RS",
    "subcategory": "Real",
    "coverage": [
      "partial",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "RoboChallenge",
    "venue": "Tech. Rep.'25",
    "year": 2025,
    "task": "Policy evaluation",
    "category": "RS",
    "subcategory": "Real",
    "coverage": [
      "partial",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "VLA-REPLICA",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Reproducible manipulation",
    "category": "RS",
    "subcategory": "Real",
    "coverage": [
      "partial",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "HomeRobot",
    "venue": "CoRL'23",
    "year": 2023,
    "task": "Mobile manipulation",
    "category": "RS",
    "subcategory": "Hybrid",
    "coverage": [
      "direct",
      "partial",
      "partial",
      "direct",
      "partial"
    ]
  },
  {
    "name": "RoboTwin",
    "venue": "CVPR'25",
    "year": 2025,
    "task": "Bimanual transfer",
    "category": "RS",
    "subcategory": "Hybrid",
    "coverage": [
      "partial",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "RobotArena∞",
    "venue": "ICLR'26",
    "year": 2026,
    "task": "Reconstructed evaluation",
    "category": "RS",
    "subcategory": "Hybrid",
    "coverage": [
      "direct",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "RoboTwin 2.0",
    "venue": "ICML'26",
    "year": 2026,
    "task": "Bimanual policy generation",
    "category": "RS",
    "subcategory": "Hybrid",
    "coverage": [
      "partial",
      "none",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "RoboWM-Bench",
    "venue": "CVPRW'26",
    "year": 2026,
    "task": "Future manipulation",
    "category": "RS",
    "subcategory": "Hybrid",
    "coverage": [
      "partial",
      "direct",
      "none",
      "partial",
      "none"
    ]
  },
  {
    "name": "NIABench",
    "venue": "IROS'26",
    "year": 2026,
    "task": "Non-intrusive assistance",
    "category": "RS",
    "subcategory": "Hybrid",
    "coverage": [
      "none",
      "partial",
      "none",
      "direct",
      "none"
    ]
  },
  {
    "name": "RoboDojo",
    "venue": "arXiv'26",
    "year": 2026,
    "task": "Sim-to-real evaluation",
    "category": "RS",
    "subcategory": "Hybrid",
    "coverage": [
      "partial",
      "none",
      "none",
      "direct",
      "none"
    ]
  }
];
