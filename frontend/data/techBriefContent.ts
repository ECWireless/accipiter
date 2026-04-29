export const investorIntro = {
  title: "Interested in Investing in Accipiter Systems?",
  lead:
    "Accipiter Systems is developing next-generation infrastructure technologies that enable deterministic, distributed compute architectures for AI, Real-Time, Simulation, Fintech and other high-performance systems.",
  companyStatus:
    "The company has operated profitably since its founding in 2002 and is successfully transitioning from government-funded R&D into commercial product markets.",
  invitation:
    "We are currently engaging qualified investors interested in participating in our continued growth.",
};

export const investorTypeOptions = [
  "Angel investor",
  "Family office",
  "Venture fund",
  "Strategic investor",
];

export const technicalBriefTitle =
  "Why Traditional LAN Architectures Are a Mismatch for Modern Real-Time Systems -- and Long-Reach PCIe Solves the Problem";

export const overviewSection = {
  heading: "Overview",
  richParagraphs: [
    [
      {
        text: "The architecture of modern computing systems is undergoing a fundamental transition. Historically, distributed computing environments were designed around ",
      },
      {
        bold: true,
        text: "node-centric architectures",
      },
      {
        text: ", where independent servers communicated through Ethernet networks. These architectures worked well for batch processing workloads where throughput mattered more than timing precision.",
      },
    ],
    [
      {
        text: "Today's emerging applications -- particularly ",
      },
      {
        bold: true,
        text: "AI inference at the edge, real-time simulation, robotics, autonomous systems, and distributed sensor processing -- have very different requirements",
      },
      {
        text: ". These systems require tightly synchronized compute resources that must exchange data with ",
      },
      {
        bold: true,
        text: "predictable latency, deterministic timing, and direct access to shared memory resources",
      },
      {
        text: ".",
      },
    ],
    [
      {
        text: "Traditional LAN-based architectures were never designed for these constraints.",
      },
    ],
    [
      {
        text: "A new approach is emerging: ",
      },
      {
        bold: true,
        text: "long-reach PCI Express (PCIe) fabrics",
      },
      {
        text: ", which extend the native interconnect used inside computers across multiple systems. This approach allows distributed compute resources to behave like a single coherent machine, enabling deterministic performance at scale.",
      },
    ],
  ],
  highlights: [
    "Predictable latency",
    "Deterministic timing",
    "Shared memory resources",
  ],
};

export const shiftSection = {
  heading: "The Shift in AI and Real-Time Workloads",
  richParagraphs: [
    [
      {
        text: "Modern compute workloads are evolving rapidly, particularly with the growth of Real-Time and autonomous systems. Historically, workloads were designed around large centralized systems performing batch processing tasks. Data was collected, processed asynchronously, and results were generated later.",
      },
    ],
    [
      {
        bold: true,
        text: "Today, many systems must make decisions in real time",
      },
      {
        text: ".",
      },
    ],
  ],
  evolution: [
    {
      from: "Batch processing",
      to: "Real-time, distributed decision-making",
    },
    {
      from: "Throughput-first processing",
      to: "Latency-, determinism-, and synchronization-sensitive execution",
    },
    {
      from: "Isolated server nodes",
      to: "Tightly coupled multi-accelerator systems",
    },
  ],
  examplesIntro:
    "These new workloads increasingly rely on combinations of CPUs, GPUs, FPGAs, and specialized accelerators that must exchange data continuously while operating in tight synchronization. Examples include:",
  examples: [
    "Real-time AI inference systems",
    "Autonomous vehicles and robotics",
    "Defense and aerospace sensor fusion",
    "High-performance simulation environments",
    "Financial trading platforms",
    "Distributed AI training clusters",
  ],
  closingSegments: [
    {
      bold: true,
      text: "In these environments, predictable timing matters as much as raw throughput.",
    },
  ],
};

export const limitationsSection = {
  heading: "Why Traditional LAN Architectures Fall Short",
  introSegments: [
    {
      text: "Most distributed systems today rely on Ethernet networks and the TCP/IP protocol stack for communication between compute nodes. While Ethernet is ubiquitous and well understood, it was designed as a ",
    },
    {
      bold: true,
      text: "best-effort packet delivery system",
    },
    {
      text: ", not as a deterministic compute fabric. This design introduces several limitations for real-time and tightly coupled applications.",
    },
  ],
  items: [
    {
      title: "Best-Effort Networking",
      summary:
        "Ethernet networks are optimized for maximizing throughput across many independent users. However, real-time systems require:",
      bullets: [
        "Deterministic latency",
        "Guaranteed delivery timing",
        "Predictable system behavior under load",
      ],
      closingSegments: [
        {
          text: "Traditional networks cannot guarantee these properties.",
        },
      ],
    },
    {
      title: "Packetization Overhead",
      summary:
        "Ethernet communication requires data to be broken into packets, transmitted, routed through switches, and reassembled at the destination. This introduces:",
      bullets: [
        "Latency",
        "Jitter (timing variation)",
        "Buffering delays",
        "Software processing overhead",
      ],
      closingSegments: [
        {
          text: "Even high-speed networks such as ",
        },
        {
          bold: true,
          text: "100G or 400G Ethernet",
        },
        {
          text: " cannot eliminate these architectural inefficiencies.",
        },
      ],
    },
    {
      title: "No Shared Memory Model",
      summary:
        "Traditional network architectures treat each node as an independent system. This means:",
      bullets: [
        "No shared memory space",
        "No direct device-to-device communication",
        "All communication must be explicitly packaged and transmitted through network stacks",
      ],
      closingSegments: [
        {
          text: "This dramatically increases complexity and limits system performance.",
        },
      ],
    },
    {
      title: "Performance Degrades Under Load",
      summary:
        "As systems scale, network congestion and switching delays introduce unpredictable behavior. This results in:",
      bullets: [
        "Increased latency",
        "Greater jitter",
        "Reduced synchronization across compute nodes",
      ],
      closingSegments: [
        {
          text: "For real-time systems, these effects can make architectures ",
        },
        {
          bold: true,
          text: "unusable at scale",
        },
        {
          text: ".",
        },
      ],
    },
  ],
};

export const bandwidthSection = {
  heading: "Scaling Network Bandwidth Does Not Solve the Problem",
  intro:
    "A common approach to improving performance is simply increasing network bandwidth. Over the past decade, Ethernet speeds have progressed rapidly:",
  speeds: ["25G", "100G", "200G", "400G", "800G"],
  followupSegments: [
    {
      text: "While higher bandwidth improves throughput, it does ",
    },
    {
      bold: true,
      text: "not address the fundamental architectural limitations",
    },
    {
      text: " of packet-based networking.",
    },
  ],
  issuesHeading: "Key issues remain:",
  issues: [
    "Latency remains relatively high",
    "Packet overhead remains unavoidable",
    "Synchronization challenges remain",
    "Deterministic performance is still not guaranteed",
  ],
  closingSegments: [
    {
      bold: true,
      text: "As a result, increasing network speed often leads to higher cost, greater power consumption, and increased system complexity without solving the underlying architectural mismatch.",
    },
  ],
};

export const pcieSection = {
  heading: "PCI Express: The Native Interconnect of Modern Compute",
  introSegments: [
    {
      text: "Inside every modern computer system, high-performance devices communicate through ",
    },
    {
      bold: true,
      text: "PCI Express (PCIe)",
    },
    {
      text: ".",
    },
  ],
  devicesIntro: "PCIe is the industry-standard interconnect used to connect:",
  devices: [
    "CPUs",
    "GPUs",
    "FPGAs",
    "AI accelerators",
    "High-speed storage",
    "Network interfaces",
    "Specialized hardware devices",
  ],
  characteristicsIntroSegments: [
    {
      text: "Unlike Ethernet, PCIe was designed specifically for ",
    },
    {
      bold: true,
      text: "direct device-to-device communication with deterministic performance",
    },
    {
      text: ". Key characteristics include:",
    },
  ],
  characteristics: [
    "Extremely low latency",
    "Direct memory access (DMA)",
    "Peer-to-peer communication",
    "High bandwidth density",
    "Deterministic performance behavior",
    "Minimal attack surface due to absence of routable protocols and reduced software stack",
  ],
  closing:
    "PCIe is governed by the PCI-SIG industry consortium, ensuring interoperability across thousands of vendors and products.",
};

export const pcieWhyNowSection = {
  heading: "Why PCIe Matters Now",
  intro:
    "Several major trends are driving increased adoption of PCIe-based architectures.",
  performanceDemandedToday: {
    title: "Performance demanded today",
    columns: [
      {
        generation: "Gen 1",
        released: "2003",
        bandwidth: "4.0 GB/s",
      },
      {
        generation: "Gen 2",
        released: "2007",
        bandwidth: "8.0 GB/s",
      },
      {
        generation: "Gen 3",
        released: "2010",
        bandwidth: "16.0 GB/s",
        highlighted: true,
      },
      {
        generation: "Gen 4",
        released: "2017",
        bandwidth: "32.0 GB/s",
        highlighted: true,
      },
      {
        generation: "Gen 5",
        released: "2019",
        bandwidth: "64.0 GB/s",
        highlighted: true,
      },
      {
        generation: "Gen 6",
        released: "2022",
        bandwidth: "128.0 GB/s",
      },
      {
        generation: "Gen 7",
        released: "2025",
        bandwidth: "256.0 GB/s",
      },
      {
        generation: "Gen 8",
        released: "2028",
        bandwidth: "512.0 GB/s",
      },
    ],
  },
  items: [
    {
      title: "Predictable Performance Scaling",
      bodySegments: [
        {
          text: "PCIe has one of the most predictable performance roadmaps in the industry. Each generation roughly doubles bandwidth while maintaining backward compatibility.",
        },
      ],
      detail:
        "Example: PCIe Gen 4 → Gen 5 → Gen 6 → Gen 7. This ensures long-term infrastructure investment protection.",
    },
    {
      title: "Accelerator-Driven Computing",
      bodySegments: [
        {
          text: "AI systems increasingly rely on multiple specialized accelerators. These devices must exchange large volumes of data quickly and deterministically. PCIe provides the ",
        },
        {
          bold: true,
          text: "native interface used by these accelerators",
        },
        {
          text: ", making it the natural backbone for next-generation architectures.",
        },
      ],
    },
    {
      title: "Increasing System Density",
      bodySegments: [
        {
          text: "Modern compute systems are packing more GPUs and accelerators into smaller spaces. As density increases, traditional networking architectures become inefficient. PCIe fabrics enable ",
        },
        {
          bold: true,
          text: "high-density compute clusters with minimal communication overhead.",
        },
      ],
    },
  ],
};

export const longReachSection = {
  heading: "Introducing Long-Reach PCIe Fabrics",
  richParagraphs: [
    [
      {
        text: "Traditionally, PCIe has been limited to connections within a single server motherboard.",
      },
    ],
    [
      {
        text: "Recent advances in switching, signaling, and system architecture now allow PCIe to be extended beyond a single system. This approach is known as ",
      },
      {
        bold: true,
        text: "long-reach PCIe",
      },
      {
        text: ".",
      },
    ],
    [
      {
        text: "Long-reach PCIe fabrics extend the native PCIe interconnect across multiple systems while preserving PCIe's core characteristics. This enables distributed compute resources to function as a ",
      },
      {
        bold: true,
        text: "single coherent compute environment",
      },
      {
        text: ". Key capabilities include:",
      },
    ],
  ],
  capabilities: [
    "Extending PCIe beyond the server chassis",
    "Maintaining native PCIe semantics across distance",
    "Enabling direct device-to-device communication",
    "Allowing shared memory access across systems",
  ],
  closingSegments: [
    {
      text: "The result is a distributed infrastructure that behaves much like ",
    },
    {
      bold: true,
      text: "a single large computer rather than a collection of loosely connected servers.",
    },
  ],
};

export const benefitsSection = {
  heading: "Long-Reach PCIe Architectural Benefits",
  intro:
    "Long-reach PCIe architectures offer several important advantages over traditional LAN-based systems.",
  items: [
    {
      title: "Deterministic Performance",
      body:
        "Communication occurs through direct memory access rather than packet routing, eliminating jitter and unpredictable network delays.",
    },
    {
      title: "Ultra-Low Latency",
      body:
        "PCIe communication occurs at nanosecond-scale latency, significantly faster than Ethernet-based communication.",
    },
    {
      title: "Simplified System Architecture",
      body:
        "By removing networking layers, PCIe fabrics reduce system complexity and improve operational efficiency.",
    },
    {
      title: "Higher Accelerator Utilization",
      body:
        "Direct communication between GPUs, FPGAs, and other accelerators allows workloads to be distributed more efficiently across available hardware.",
    },
    {
      title: "Lower Power and Hardware Overhead",
      body:
        "Reducing reliance on NICs, switches, and networking infrastructure can significantly lower system power consumption and infrastructure cost.",
    },
  ],
};

export const securitySection = {
  heading:
    "Security Implications: Long-Reach PCIe Reduces Exposure to Zero-Day Attacks",
  richParagraphs: [
    [
      {
        text: "Traditional LAN-based architectures introduce a broad and dynamic attack surface due to their reliance on standardized networking protocols, routable packet flows, and software-defined control planes. These characteristics make them inherently vulnerable to both known exploits and zero-day attacks.",
      },
    ],
    [
      {
        text: "In contrast, long-reach PCIe fabrics fundamentally reduce attack exposure by eliminating many of the mechanisms that attackers rely on.",
      },
    ],
  ],
  items: [
    {
      title: "Reduced Attack Surface",
      paragraphs: [
        [
          {
            text: "Ethernet-based systems depend on multiple layers of software and protocol processing, including:",
          },
        ],
      ],
      bullets: [
        "TCP/IP stacks",
        "Network interface firmware",
        "Switch operating systems",
        "Routing and control-plane logic",
      ],
      closingParagraphs: [
        [
          {
            text: "Each layer represents a potential vulnerability, particularly for zero-day exploits.",
          },
        ],
        [
          {
            text: "Long-reach PCIe eliminates these layers, replacing them with a hardware-centric, memory-mapped communication model. Fewer abstraction layers directly translate to fewer exploitable entry points.",
          },
        ],
      ],
    },
    {
      title: "Elimination of Routable Interfaces",
      paragraphs: [
        [
          {
            text: "Traditional LAN-connected systems expose IP addresses and open ports, making them discoverable and targetable across networks.",
          },
        ],
        [
          {
            text: "PCIe fabrics:",
          },
        ],
      ],
      bullets: [
        "Do not use IP addressing",
        "Do not expose services via open ports",
        "Are not routable using standard networking tools",
      ],
      secondaryIntro:
        "This effectively removes entire classes of remote attack vectors, including:",
      secondaryBullets: [
        "Network scanning",
        "Port-based exploitation",
        "Remote service attacks",
      ],
    },
    {
      title: "No Packet Injection or Man-in-the-Middle Opportunities",
      paragraphs: [
        [
          {
            text: "Ethernet architectures rely on packetized communication, which enables:",
          },
        ],
      ],
      bullets: [
        "Packet interception",
        "Injection attacks",
        "Replay attacks",
        "Protocol manipulation",
      ],
      secondaryIntro:
        "PCIe operates as a point-to-point, transaction-based fabric with no concept of packets traversing shared networks. As a result:",
      secondaryBullets: [
        "There is no opportunity for packet interception or injection",
        "Man-in-the-middle attacks are structurally eliminated",
      ],
    },
    {
      title: "Deterministic Behavior Enables Anomaly Detection",
      paragraphs: [
        [
          {
            text: "LAN-based systems exhibit variable latency and jitter, making it difficult to distinguish between normal behavior and malicious interference.",
          },
        ],
        [
          {
            text: "PCIe fabrics provide deterministic, predictable timing. This enables:",
          },
        ],
      ],
      bullets: [
        "Easier detection of anomalous behavior",
        "Faster identification of compromised components",
        "Reduced dwell time for zero-day exploits",
      ],
    },
    {
      title: "Hardware-Centric Trust Model",
      paragraphs: [
        [
          {
            text: "Because PCIe communication is tightly coupled to hardware and memory access:",
          },
        ],
      ],
      bullets: [
        "Access paths are explicit and controlled",
        "Devices must be enumerated and authorized",
        "Communication is not dynamically exposed like network services",
      ],
      closingParagraphs: [
        [
          {
            text: "This aligns well with zero-trust architectures by enforcing strict boundaries at the hardware level.",
          },
        ],
      ],
    },
  ],
  comparisonTitle: "Security Comparison: Traditional LAN vs Long-Reach PCIe",
  comparisonRows: [
    {
      capability: "Routable (IP-based)",
      traditionalLan: "Yes",
      longReachPcie: "No",
    },
    {
      capability: "Exposed ports/services",
      traditionalLan: "Yes",
      longReachPcie: "No",
    },
    {
      capability: "Packet injection risk",
      traditionalLan: "Yes",
      longReachPcie: "No",
    },
    {
      capability: "Protocol attack surface",
      traditionalLan: "High",
      longReachPcie: "Minimal",
    },
    {
      capability: "Software stack dependency",
      traditionalLan: "High",
      longReachPcie: "Low",
    },
    {
      capability: "Deterministic behavior",
      traditionalLan: "No",
      longReachPcie: "Yes",
    },
    {
      capability: "Zero-day exposure",
      traditionalLan: "Broad",
      longReachPcie: "Constrained",
    },
  ],
  implications: {
    title: "Implications for Defense and Mission-Critical Systems",
    paragraphs: [
      [
        {
          text: "For environments where adversaries actively develop zero-day capabilities, reducing attack surface is often more effective than attempting to detect every possible exploit.",
        },
      ],
      [
        {
          text: "Long-reach PCIe enables:",
        },
      ],
    ],
    bullets: [
      "Physically constrained communication paths",
      "Elimination of network-based intrusion vectors",
      "Greater system survivability under active cyber attack",
    ],
    closingSegments: [
      {
        text: "As ",
      },
      {
        bold: true,
        text: "Long-Reach PCIe is structurally more secure by design",
      },
      {
        text: ", it is better suited for",
      },
    ],
    closingBullets: [
      "Zero-day resilience",
      "Electronic Warfare (EW) and congested environments",
      "Air-gapped or hardened systems",
    ],
  },
};

export const deepMemorySection = {
  heading: "Deep Memory Recording: High-Speed, Multi-Source Data Capture at Scale",
  intro:
    "Modern real-time systems increasingly require the ability to capture, store, and analyze massive volumes of data across distributed sensors and compute elements. Examples include:",
  examples: [
    "Defense sensor fusion and electronic warfare",
    "High-speed RF signal capture",
    "Autonomous system telemetry",
    "AI training data collection in live environments",
  ],
  demandSegments: [
    {
      text: "These applications demand ",
    },
    {
      bold: true,
      text: "deep memory recording",
    },
    {
      text: "--the ability to ingest and store large amounts of data continuously, at high speed, and from multiple sources simultaneously.",
    },
  ],
  limitations: {
    title: "Limitations of Traditional LAN-Based Recording",
    intro:
      "In Ethernet-based architectures, writing data to centralized storage requires:",
    bullets: [
      "Packetization of data streams",
      "Traversal through network switches",
      "Processing through TCP/IP or RDMA stacks",
      "Coordination across independent nodes",
    ],
    constraintsIntro:
      "Even with technologies such as RDMA, these systems face key constraints:",
    constraints: [
      "Contention for shared network bandwidth",
      "Unpredictable latency under load",
      "Limited scalability for simultaneous writers",
      "Complex software coordination for synchronization",
    ],
    closing:
      "As the number of data sources increases, performance degrades and data loss risk increases.",
  },
  pcieBased: {
    title: "PCIe-Based Deep Memory Recording",
    paragraphs: [
      "Long-reach PCIe enables a fundamentally different approach by extending the native memory and I/O fabric across systems.",
      "Multiple devices--including CPUs, GPUs, FPGAs, and high-speed digitizers--can:",
    ],
    bullets: [
      [
        {
          text: "Write directly into shared memory or storage resources",
        },
      ],
      [
        {
          text: "Perform ",
        },
        {
          bold: true,
          text: "simultaneous, high-bandwidth writes",
        },
      ],
      [
        {
          text: "Bypass network stacks entirely",
        },
      ],
      [
        {
          text: "Operate with deterministic timing",
        },
      ],
    ],
    closing:
      "This model is conceptually similar to emerging memory-centric architectures such as CXL, but leverages the maturity, ecosystem, and deterministic behavior of PCIe today.",
  },
  advantagesHeading: "Key Advantages",
  advantages: [
    {
      title: "True Multi-Writer Architecture",
      body:
        "Multiple devices can write concurrently into the same memory space without packet arbitration or network contention.",
    },
    {
      title: "Line-Rate Data Ingestion",
      body:
        "Devices can sustain full interface bandwidth without being limited by network bottlenecks.",
    },
    {
      title: "Deterministic Recording",
      body:
        "Consistent latency ensures time-aligned data capture across all sources--critical for sensor fusion and post-event analysis.",
    },
    {
      title: "Reduced Data Loss Risk",
      body:
        "Elimination of packet drops, congestion, and retransmissions improves reliability under peak load.",
    },
    {
      title: "Simplified Software Stack",
      body:
        "Direct memory access reduces the need for complex buffering, queuing, and synchronization logic.",
    },
  ],
  imageTitle: "Deep Memory Recording: Ethernet vs. PCIe Fabric",
};

export const opticalProcessingSection = {
  heading:
    "Optical Processing and PCIe: Electrifying Next Generation Sensor and Compute Architecture",
  introSegments: [
    {
      text: "The increasing importance of high-bandwidth sensing--particularly in RF, photonics, and optical domains--is driving a shift ",
    },
    {
      bold: true,
      text: "toward optical processing architectures",
    },
    {
      text: ". These systems generate and process vast amounts of data at speeds that challenge traditional electrical and network-based interconnects.",
    },
  ],
  examplesIntro: "Examples include:",
  examples: [
    "Photonic signal processing systems",
    "Optical RF front ends",
    "LIDAR and imaging pipelines",
    "Free-space optical communications",
    "Advanced electronic warfare platforms",
  ],
  challenges: {
    title: "Challenges with LAN-Based Architectures",
    intro:
      "Traditional Ethernet-based systems introduce several inefficiencies when interfacing with optical processing pipelines:",
    bullets: [
      "Data must be converted, packetized, and transmitted through network stacks",
      "Latency and jitter disrupt tightly coupled optical processing loops",
      "Synchronization across devices becomes difficult",
      "Bandwidth scaling requires increasingly complex networking infrastructure",
    ],
    closingSegments: [
      {
        text: "These constraints limit the effectiveness of optical systems that depend on ",
      },
      {
        bold: true,
        text: "continuous, high-speed, and tightly synchronized data flows.",
      },
    ],
  },
  pcieBackbone: {
    title: "PCIe as the Electrical Backbone for Optical Systems",
    paragraphs: [
      "PCIe provides a direct, high-speed electrical interface between optical processing elements and compute resources.",
      "With long-reach PCIe:",
    ],
    bullets: [
      "Optical front ends can connect directly into the PCIe fabric",
      "Data flows as memory transactions rather than packets",
      "Processing elements can access optical data streams in real time",
      "Systems maintain deterministic timing across the entire pipeline",
    ],
    closing:
      "This effectively \"electrifies\" optical processing systems--allowing them to behave as tightly integrated extensions of the compute fabric.",
  },
  advantagesHeading: "Key Advantages",
  advantages: [
    {
      title: "Elimination of Packetization Overhead",
      body:
        "Optical data streams are ingested directly into memory without conversion into network packets.",
    },
    {
      title: "Deterministic Processing Pipelines",
      body:
        "Consistent latency enables precise timing alignment across optical and electronic domains.",
    },
    {
      title: "Higher Effective Bandwidth Utilization",
      body: "Bandwidth is used for payload data rather than protocol overhead.",
    },
    {
      title: "Direct Accelerator Integration",
      body:
        "GPUs, FPGAs, and AI accelerators can directly consume optical data streams via PCIe.",
    },
    {
      title: "Improved System Synchronization",
      body: "All components operate within a unified timing and memory model.",
    },
    {
      title: "Reduced System Complexity",
      body:
        "Fewer intermediate components (NICs, switches, protocol stacks) simplify system design.",
    },
  ],
  imageTitle: "Optical Processing Pipeline: LAN vs. PCIe Fabric",
  closingSegments: [
    {
      text: "As optical and photonic technologies continue to advance",
    },
    {
      bold: true,
      text: ", PCIe-based fabrics provide a scalable and deterministic foundation",
    },
    {
      text: " for integrating these systems into next-generation compute architectures ",
    },
    {
      bold: true,
      text: "without the limitations of traditional networking",
    },
    {
      text: ".",
    },
  ],
};

export const emergingArchitectureSection = {
  heading: "The Emerging Compute Architecture",
  intro:
    "A hybrid architecture is increasingly common in advanced computing environments:",
  insideRackTitle: "Inside the rack or compute cluster.",
  insideRackBody:
    "Long-reach PCIe fabrics connect compute nodes, accelerators, and memory into a unified fabric outside the rack.",
  outsideRackTitle: "Outside the rack",
  outsideRackIntro: "Ethernet remains useful for:",
  outsideRackItems: [
    "Data center networking where batch processing offers acceptable performance",
    "Remote management",
    "External connectivity",
    "Communication between independent clusters",
  ],
  closing:
    "This hybrid approach combines the strengths of both technologies.",
};

export const conclusionSection = {
  heading: "Conclusion",
  richParagraphs: [
    [
      {
        text: "The evolution of AI, real-time analytics, and accelerator-driven computing is exposing the limitations of traditional LAN-based architectures.",
      },
    ],
    [
      {
        text: "Packet-based networking introduces latency, jitter, and complexity that limit performance in tightly coupled distributed systems.",
      },
    ],
    [
      {
        text: "PCI Express, the native interconnect of modern compute platforms, provides a fundamentally different approach -- one based on ",
      },
      {
        bold: true,
        text: "deterministic, memory-centric communication between devices.",
      },
    ],
    [
      {
        text: "By extending PCIe beyond the server through long-reach fabrics, distributed computing systems can operate with the efficiency and predictability of a single coherent machine.",
      },
    ],
    [
      {
        text: "As AI systems continue to scale in complexity and performance requirements, ",
      },
      {
        bold: true,
        text: "long-reach PCIe architectures are emerging as a critical infrastructure technology for next-generation computing systems.",
      },
    ],
    [
      {
        text: "Beyond performance, ",
      },
      {
        bold: true,
        text: "long-reach PCIe significantly reduces system attack surface, offering inherent resilience against zero-day exploits that target traditional network-based infrastructures",
      },
      {
        text: ".",
      },
    ],
  ],
};
