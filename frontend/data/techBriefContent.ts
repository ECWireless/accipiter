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
  heading: "Architectural Benefits",
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

export const emergingArchitectureSection = {
  heading: "The Emerging Compute Architecture",
  intro:
    "A hybrid architecture is increasingly common in advanced computing environments:",
  insideRackTitle: "Inside the rack or compute cluster",
  insideRackBody:
    "Long-reach PCIe fabrics connect compute nodes, accelerators, and memory into a unified fabric.",
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
  ],
};
