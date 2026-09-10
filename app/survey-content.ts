// Content follows active inputs in the September 2026 manuscript's main.tex.
// Benchmark counts follow the final September 2026 manuscript table.
export const surveyTitle =
  "Survey on Multimodal Embodied Agents: A Unified Capability-centric Perspective from Computer-Use to Robot-Use";
export const surveyDescription =
  "PAPAV: a unified capability-centric perspective from computer-use to robot-use through Perceive, Anticipate, Plan, Act, and Verify.";
export const authors = [
  "Yanzhe Chen",
  "Ziyi Yang",
  "Jifeng Zhu",
  "Qiming Huang",
  "Ruihe An",
  "Peiyao Xu",
  "Hesen Yang",
  "Runda Liu",
  "Chang Gong",
  "Zhijun Cao",
  "Zechen Bai",
  "Wenzheng Zeng",
  "Yiqi Lin",
  "Guoqiang Liang",
  "Kevin Yuchen Ma",
  "Kevin Qinghong Lin",
  "Mike Zheng Shou",
];
// Author homepage links follow the repository README.
export const authorHomepages: Record<string, string> = {
  "Yanzhe Chen": "https://chenanno.github.io/",
  "Ziyi Yang": "https://ziyi510.github.io/",
  "Jifeng Zhu": "https://github.com/ZEN-Weiss1984",
  "Qiming Huang": "https://github.com/ceilingFan456/",
  "Ruihe An": "https://anruihe.github.io/",
  "Peiyao Xu": "https://github.com/xupeiyao-dev",
  "Hesen Yang": "https://academic.hesenyang-ethan.com/",
  "Runda Liu": "https://github.com/Jackupjcup",
  "Chang Gong": "https://github.com/seizethe-day",
  "Zhijun Cao": "https://caozhijun.top/",
  "Zechen Bai": "https://www.baizechen.site/",
  "Wenzheng Zeng": "https://wenzhengzeng.github.io/",
  "Yiqi Lin": "https://linyq17.github.io/",
  "Guoqiang Liang": "https://ethanliang99.github.io/",
  "Kevin Yuchen Ma": "https://kevinskwk.github.io/",
  "Kevin Qinghong Lin": "https://qhlin.me/",
  "Mike Zheng Shou": "https://sites.google.com/view/showlab/home",
};
export const capabilities = [
  {
    name: "Perceive",
    color: "#F57C6E",
    question: "What is true now?",
    role: "Build a task belief from multimodal evidence and past interactions.",
    shared: "Multimodal evidence grounding",
    digital: "Digital evidence inquiry → physical evidence inquiry",
    robotics: "Supplied sensing goals → task-formed inquiry",
  },
  {
    name: "Anticipate",
    color: "#F2B56F",
    question: "What may happen next?",
    role: "Predict the effects of candidate actions before making a commitment.",
    shared: "State-transition forecasting",
    digital: "Rule-bounded forecasts → qualified physical forecasts",
    robotics: "Control-scoped counterfactuals → task-selected counterfactuals",
  },
  {
    name: "Plan",
    color: "#84C3B7",
    question: "What should be done?",
    role: "Plan feasible actions under task goals and physical constraints.",
    shared: "Constraint-aware planning",
    digital: "Snapshot-backed planning → changed-state planning",
    robotics: "Skill-level recovery → task-level recovery",
  },
  {
    name: "Act",
    color: "#71B7ED",
    question: "How is it executed?",
    role: "Execute selected actions and report progress to the ongoing task loop.",
    shared: "Semantic action grounding",
    digital: "Interface-level actions → body-grounded actions",
    robotics: "Controller-local execution → task-visible execution",
  },
  {
    name: "Verify",
    color: "#B8AEEB",
    question: "Did the intended change occur?",
    role: "Judge action outcomes to guide the next task decision from feedback.",
    shared: "Evidence-grounded verification",
    digital:
      "Structured digital checks → evidence-grounded physical verification",
    robotics: "Skill-local outcome detection → task-consumed verification",
  },
];
export const challenges = [
  [
    "Persistent physical belief",
    "What should an embodied agent retain, revise, or forget as the world changes?",
  ],
  [
    "Decision-relevant prediction",
    "What future information must an embodied agent predict to make a good decision?",
  ],
  [
    "Adaptive commitment",
    "How long should an agent continue executing before observing and replanning?",
  ],
  [
    "Uncertainty-conditioned control",
    "When uncertain, should an agent act, gather more information, or ask for help?",
  ],
  [
    "Learning from verification",
    "How can verification guide reliable improvement across the PAPAV loop?",
  ],
];
