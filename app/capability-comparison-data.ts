// Diagram content and artwork adapted from the supplied PAPAV-main reference.
export type Flow = {
  code: string;
  input: [string, string];
  output: [string, string];
  caption: string;
};

export const comparisons: Array<{
  letter: string;
  name: string;
  color: string;
  leftNote?: string;
  rightNote?: string;
  left: [Flow, Flow];
  shared: { image: string; title: string; detail: string };
  right: [Flow, Flow];
}> = [
  {
    letter: 'P', name: 'Perceive', color: '#E85F52',
    leftNote: 'Digital evidence → physical evidence',
    rightNote: 'Supplied sensing → task-formed inquiry',
    left: [
      { code: 'MMA', input: ['capability-icons/image6.webp', 'Inspect or Query'], output: ['capability-icons/image7.webp', 'Digital Evidence'], caption: 'Digital Evidence Inquiry' },
      { code: 'MMEA', input: ['capability-icons/image8.webp', 'Inspect or Query'], output: ['capability-icons/image9.webp', 'Physical Evidence'], caption: 'Physical Evidence Inquiry' },
    ],
    shared: { image: 'capability-icons/image51.webp', title: 'Multimodal Evidence Grounding', detail: 'All three traditions integrate heterogeneous observations into an actionable state.' },
    right: [
      { code: 'MMEA', input: ['capability-icons/image15.webp', 'Evidence\nGap'], output: ['capability-icons/image16.webp', 'Sensor Selection'], caption: 'Task-Formed Inquiry' },
      { code: 'RS', input: ['capability-icons/image17.webp', 'Sensing Target'], output: ['capability-icons/image18.webp', 'Targeted Measurement'], caption: 'Supplied Sensing Goal' },
    ],
  },
  {
    letter: 'A', name: 'Anticipate', color: '#D88A2D',
    leftNote: 'Rule-bounded → risk-qualified futures',
    rightNote: 'Control-scoped → task-selected counterfactuals',
    left: [
      { code: 'MMA', input: ['capability-icons/image11.webp', 'Software Intervention'], output: ['capability-icons/image12.webp', 'Rule-Bounded Future'], caption: 'Rule-Bounded Forecasts' },
      { code: 'MMEA', input: ['capability-icons/image13.webp', 'Physical Intervention'], output: ['capability-icons/image14.webp', 'Risk-Qualified Future'], caption: 'Qualified Physical Forecasts' },
    ],
    shared: { image: 'capability-icons/image50.webp', title: 'State-Transition Forecasting', detail: 'Each system models how a candidate intervention may change the environment.' },
    right: [
      { code: 'MMEA', input: ['capability-icons/image19.webp', 'Forecast Requirement'], output: ['capability-icons/image20.webp', 'Task-Relevant Futures'], caption: 'Task-Selected Counterfactuals' },
      { code: 'RS', input: ['capability-icons/image21.webp', 'Control Objective'], output: ['capability-icons/image22.webp', 'Predicted Trajectories'], caption: 'Control-Scoped Counterfactuals' },
    ],
  },
  {
    letter: 'P', name: 'Plan', color: '#3A9A87',
    left: [
      { code: 'MMA', input: ['capability-icons/image24.webp', 'Digital Checkpoint'], output: ['capability-icons/image23.webp', 'Reversible Plan'], caption: 'Snapshot-Backed Planning' },
      { code: 'MMEA', input: ['capability-icons/image25.webp', 'Altered Physical State'], output: ['capability-icons/image26.webp', 'Contingency Plan'], caption: 'Changed-State Planning' },
    ],
    shared: { image: 'capability-icons/image52.webp', title: 'Constraint-Aware Planning', detail: 'All three propose and select a course under goals, affordances, and constraints.' },
    right: [
      { code: 'MMEA', input: ['capability-icons/image27.webp', 'Task Failure Context'], output: ['capability-icons/image28.webp', 'Revised Task Course'], caption: 'Task-Level Recovery' },
      { code: 'RS', input: ['capability-icons/image29.webp', 'Local Skill Failure'], output: ['capability-icons/image30.webp', 'Revised Skill Course'], caption: 'Skill-Level Recovery' },
    ],
  },
  {
    // ACT intentionally uses the same icon-card renderer as every other capability.
    letter: 'A', name: 'Act', color: '#347FB8',
    left: [
      { code: 'MMA', input: ['capability-icons/image31.webp', 'Semantic Intent'], output: ['capability-icons/image32.webp', 'Interface Event'], caption: 'Interface-Level Actions' },
      { code: 'MMEA', input: ['capability-icons/image33.webp', 'Semantic Intent'], output: ['capability-icons/image34.webp', 'Physical Execution'], caption: 'Body-Grounded Actions' },
    ],
    shared: { image: 'capability-icons/image53.webp', title: 'Semantic Action Grounding', detail: 'Each system maps a semantic intervention into an environment-valid action.' },
    right: [
      { code: 'MMEA', input: ['capability-icons/image35.webp', 'Task Command'], output: ['capability-icons/image36.webp', 'Execution\nState'], caption: 'Task-Visible Execution' },
      { code: 'RS', input: ['capability-icons/image37.webp', 'Control\nTarget'], output: ['capability-icons/image38.webp', 'Local Execution State'], caption: 'Controller-Local Execution' },
    ],
  },
  {
    letter: 'V', name: 'Verify', color: '#7564BC',
    left: [
      { code: 'MMA', input: ['capability-icons/image43.webp', 'Structured State'], output: ['capability-icons/image44.webp', 'Function Assessment'], caption: 'Structured Digital Verdicts' },
      { code: 'MMEA', input: ['capability-icons/image39.webp', 'Physical Evidence'], output: ['capability-icons/image45.webp', 'Calibrated Result'], caption: 'Calibrated Physical Verdicts' },
    ],
    shared: { image: 'capability-icons/image54.webp', title: 'Evidence-Grounded Verification', detail: 'Each system compares observed and expected outcomes to form corrective feedback.' },
    right: [
      { code: 'MMEA', input: ['capability-icons/image46.webp', 'Physical Result'], output: ['capability-icons/image47.webp', 'State\nUpdate'], caption: 'Task-Consumed Verdicts' },
      { code: 'RS', input: ['capability-icons/image48.webp', 'Monitor Result'], output: ['capability-icons/image49.webp', 'Skill State Update'], caption: 'Skill-Local Verdicts' },
    ],
  },
];

