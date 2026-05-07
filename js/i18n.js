/**
 * Bilingual copy and structured content for the personal site.
 * English and Chinese strings are maintained in parallel.
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var SUPPORTED = ["en", "zh"];

  var DATA = {
    en: {
      metaTitle: "Xin Huang — Software Engineer & Researcher",
      metaDescription:
        "Ph.D. in Computer Science. Full-stack and AI engineering: RAG, agents, distributed GNNs, and production systems.",
      nav: {
        about: "About",
        projects: "Projects",
        publications: "Publications",
        contact: "Contact",
      },
      hero: {
        name: "Xin Huang",
        photoAlt: "Portrait of Xin Huang",
        skillsLabel: "Skills:",
        educationLabel: "Education:",
      },
      sections: {
        about: "About",
        projects: "Selected Projects",
        publications: "Publications",
        contact: "Contact",
      },
      about: {
        text:
          "Ph.D. in Computer Science; Software engineer building full-stack and AI applications/systems—agents, RAG, distributed graph ML—and shipping them with an eye on reliability and clear architecture.",
      },
      contact: {
        intro: "Collaborations welcome",
      },
      footer: {
        navAria: "Contact and profiles",
        socialEmail: "Email",
        socialGithub: "GitHub",
        socialLinkedIn: "LinkedIn",
        socialScholar: "Google Scholar",
      },
      ui: {
        themeLight: "Light theme",
        themeDark: "Dark theme",
        langEnglish: "English",
        langChinese: "中文",
        langGroup: "Language",
        themeGroup: "Theme",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        menuButton: "Menu",
        scholarLink: "View All Publications",
      },
      projects: [
        {
          title: "Coming soon",
          url: "",
          summary: "More featured projects will be listed here.",
          comingSoon: true,
        },
      ],
      publications: [
        {
          title:
            "Demystifying Distributed Training of Graph Neural Networks for Link Prediction",
          venue:
            "IEEE International Conference on Distributed Computing Systems (ICDCS), 2025 [Acceptance rate: 19.66%]",
          pdfUrl:
            "https://drive.google.com/file/d/1QHFDLsuGjWUWqoyT6XS20Tv6ODN85rkX/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/11183758",
          note:
            "Develop a communication-efficient distributed GNN training framework for link prediction, which reduces the communication overhead by up to 80% while mostly preserving prediction accuracy.",
        },
        {
          title:
            "SDT-GNN: Streaming-based Distributed Training Framework for Graph Neural Networks",
          venue:
            "IEEE International Conference on Big Data, 2025 [Acceptance rate: 18.7%]",
          pdfUrl:
            "https://drive.google.com/file/d/1gMvwFL6r0IS8wmcO9igIS8_1bDOS49oW/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/11401821",
          note:
            "Develop a memory-efficient distributed GNN training framework, which shows up to 95% less memory footprint than the mainstream GNN frameworks without sacrificing training speed and prediction accuracy.",
        },
        {
          title: "eIM: Efficient GPU-Accelerated Influence Maximization Algorithm",
          venue:
            "ACM/IEEE SC Workshop on Irregular Applications: Architectures and Algorithms (IA³), 2025",
          pdfUrl:
            "https://drive.google.com/file/d/1Hf3ZTnG8wR_pkXAGp2FaSMQ0Os180X-z/view?usp=sharing",
          venueUrl: "https://dl.acm.org/doi/10.1145/3731599.3767442",
          note:
            "Develop an efficient and scalable GPU-accelerated IMM algorithm, which achieves up to 24× -- 9471× speed-up while reducing the memory footprint by up to 54% compared to the state-of-the-art (SOTA) methods.",
        },
        {
          title:
            "I/O-signature-based feature analysis and classification of high-performance computing applications",
          venue: "Cluster Computing, 2024",
          pdfUrl:
            "https://drive.google.com/file/d/1O0IUtbBpH5ISslZAo7a6xxPfseQHnPut/view?usp=sharing",
          venueUrl: "https://link.springer.com/article/10.1007/s10586-023-04139-y",
          note:
            "Analyze application-specific I/O patterns and classify HPC applications via various ML methods.",
        },
        {
          title: "Analyzing and Predicting Job Failures from HPC System Log",
          venue: "The Journal of Supercomputing, 2024",
          pdfUrl:
            "https://drive.google.com/file/d/1jxzIo62gfO8uHxTER2kk913Pq3PLAyp8/view?usp=sharing",
          venueUrl: "https://link.springer.com/article/10.1007/s11227-023-05482-y",
          note:
            "Identify the key features of the HPC scheduler log and predict job failures via various ML methods.",
        },
        {
          title: "Controlling Epidemic Spread Under Immunization Delay Constraints",
          venue:
            "IFIP International Conference on Networking, 2023 [Acceptance rate: 27.89%]",
          pdfUrl:
            "https://drive.google.com/file/d/1AaFczfN5q9ZAewVGDLOaRVTqc4oNSC8L/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/abstract/document/10186397",
          note:
            "Propose a greedy algorithm to minimize epidemic spread under immunization delay constraints.",
        },
        {
          title:
            "Characterizing the Efficiency of Graph Neural Network Frameworks with a Magnifying Glass",
          venue:
            "IEEE International Symposium on Workload Characterization (IISWC), 2022",
          pdfUrl:
            "https://drive.google.com/file/d/1Skzfbl5LZ3DvVxmsJw6gMi316cX_Xp90/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/9975402",
          note: "Benchmark the performance of different GNN models and frameworks.",
        },
        {
          title:
            "An Efficient and Scalable Algorithm for Estimating Kemeny's Constant of a Markov Chain on Large Graphs",
          venue:
            "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2021 [Acceptance rate: 15.44%]",
          pdfUrl:
            "https://drive.google.com/file/d/1Jg3s1nC444Gz3-RXCdQ6dlNhQo6-Hbmm/view?usp=sharing",
          venueUrl: "https://dl.acm.org/doi/10.1145/3447548.3467431",
          note:
            "Develop a GPU algorithm to estimate Kemeny's constant, showing up to 500× speed-up over SOTA methods.",
        },
        {
          title: "Estimating Distributions of Large Graphs from Incomplete Sampled Data",
          venue:
            "IFIP International Conference on Networking, 2021 [Acceptance rate: 25.9%]",
          pdfUrl:
            "https://drive.google.com/file/d/1XnLpKtVE3uVTj5biZwjF2FdpScAMIDDj/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/9472848",
          note:
            "Propose a simple estimator to estimate the latent in-degree distribution of directed graphs from random samples, achieving up to 650× speed-up and 90% accuracy improvement compared to SOTA methods.",
        },
        {
          title:
            "CrowdQuake: A Networked System of Low-Cost Sensors for Earthquake Detection via Deep Learning",
          venue:
            "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2020 [Acceptance rate: 16%]",
          pdfUrl:
            "https://drive.google.com/file/d/1lmQwWIn5wOxoweOYrpENpWVYMo26FQzH/view?usp=sharing",
          venueUrl: "https://dl.acm.org/doi/10.1145/3394486.3403378",
          note:
            "Develop a sensor system with a deep learning model to detect earthquakes accurately (over 99% accuracy).",
        },
      ],
      skills: [
        {
          name: "Software development",
          items: [
            "Python, C/C++, CUDA, JavaScript; MySQL/PostgreSQL",
            "PyTorch, TensorFlow, Scikit-learn, DGL; Data processing, Modeling, Tuning, Distributed Training",
            "Docker, Serverless Deployment, VPS Deployment, Nginx/SSL",
            "SEO, GEO, GCP, Google Ads, GA4",
          ],
        },
        {
          name: "AI application development",
          items: [
            "LangChain/LlamaIndex, Prompt, MCP, Skills, RAG, Multi-agent Workflows",
            "Vibe Coding, SDD, Harness Engineering; Cursor, Google Antigravity, Claude Code",
          ],
        },
      ],
      education: [
        {
          degree: "Ph.D., Computer Science",
          school: "Texas State University, San Marcos, TX",
          period: "Aug. 2021 — May 2025",
          advisor: {
            label: "Advisor:",
            name: "Dr.Chul-Ho Lee",
            url: "https://sites.google.com/site/chulholeesite/",
          },
        },
        {
          degree: "M.S., Electrical Engineering",
          school: "Florida Tech, Melbourne, FL",
          period: "May 2016 — Dec. 2017",
        },
        {
          degree: "B.E., Electronic Science and Technology",
          school: "South China University of Technology",
          period: "Sept. 2011 — June 2015",
        },
      ],
    },
    zh: {
      metaTitle: "黄鑫 — 软件工程师 / 研究者",
      metaDescription:
        "计算机科学博士。全栈与 AI 工程：RAG、智能体、分布式图神经网络与生产级系统。",
      nav: {
        about: "关于",
        projects: "项目",
        publications: "论文",
        contact: "联系",
      },
      hero: {
        name: "黄鑫",
        photoAlt: "黄鑫肖像",
        skillsLabel: "技能：",
        educationLabel: "教育：",
      },
      sections: {
        about: "关于",
        projects: "精选项目",
        publications: "论文",
        contact: "联系",
      },
      about: {
        text:
          "计算机科学博士；软件工程师，做全栈与 AI 应用/系统（智能体、RAG、分布式图学习等），注重可靠交付与清晰架构。",
      },
      contact: {
        intro: "欢迎合作",
      },
      footer: {
        navAria: "联系与主页",
        socialEmail: "电子邮件",
        socialGithub: "GitHub",
        socialLinkedIn: "LinkedIn",
        socialScholar: "Google Scholar",
      },
      ui: {
        themeLight: "浅色主题",
        themeDark: "深色主题",
        langEnglish: "English",
        langChinese: "中文",
        langGroup: "语言",
        themeGroup: "主题",
        menuOpen: "打开菜单",
        menuClose: "关闭菜单",
        menuButton: "菜单",
        scholarLink: "查看全部论文",
      },
      projects: [
        {
          title: "敬请期待",
          url: "",
          summary: "更多精选项目将在此展示。",
          comingSoon: true,
        },
      ],
      publications: [
        {
          title:
            "Demystifying Distributed Training of Graph Neural Networks for Link Prediction",
          venue:
            "IEEE International Conference on Distributed Computing Systems (ICDCS), 2025 [Acceptance rate: 19.66%]",
          pdfUrl:
            "https://drive.google.com/file/d/1QHFDLsuGjWUWqoyT6XS20Tv6ODN85rkX/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/11183758",
          note:
            "面向链路预测的通信高效分布式 GNN 训练框架，通信开销最高可降低约 80%，同时基本保持预测精度。",
        },
        {
          title:
            "SDT-GNN: Streaming-based Distributed Training Framework for Graph Neural Networks",
          venue:
            "IEEE International Conference on Big Data, 2025 [Acceptance rate: 18.7%]",
          pdfUrl:
            "https://drive.google.com/file/d/1gMvwFL6r0IS8wmcO9igIS8_1bDOS49oW/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/11401821",
          note:
            "内存高效的分布式 GNN 训练框架，相较主流框架内存占用最高可降约 95%，且不牺牲训练速度与预测精度。",
        },
        {
          title: "eIM: Efficient GPU-Accelerated Influence Maximization Algorithm",
          venue:
            "ACM/IEEE SC Workshop on Irregular Applications: Architectures and Algorithms (IA³), 2025",
          pdfUrl:
            "https://drive.google.com/file/d/1Hf3ZTnG8wR_pkXAGp2FaSMQ0Os180X-z/view?usp=sharing",
          venueUrl: "https://dl.acm.org/doi/10.1145/3731599.3767442",
          note:
            "可扩展的 GPU 加速 IMM 算法，相较 SOTA 最高可达约 24×—9471× 加速，内存占用最高可降低约 54%。",
        },
        {
          title:
            "I/O-signature-based feature analysis and classification of high-performance computing applications",
          venue: "Cluster Computing, 2024",
          pdfUrl:
            "https://drive.google.com/file/d/1O0IUtbBpH5ISslZAo7a6xxPfseQHnPut/view?usp=sharing",
          venueUrl: "https://link.springer.com/article/10.1007/s10586-023-04139-y",
          note:
            "分析应用相关的 I/O 模式，并用多种机器学习方法对 HPC 应用进行分类。",
        },
        {
          title: "Analyzing and Predicting Job Failures from HPC System Log",
          venue: "The Journal of Supercomputing, 2024",
          pdfUrl:
            "https://drive.google.com/file/d/1jxzIo62gfO8uHxTER2kk913Pq3PLAyp8/view?usp=sharing",
          venueUrl: "https://link.springer.com/article/10.1007/s11227-023-05482-y",
          note:
            "从 HPC 调度器日志中提取关键特征，并用多种机器学习方法预测作业失败。",
        },
        {
          title: "Controlling Epidemic Spread Under Immunization Delay Constraints",
          venue:
            "IFIP International Conference on Networking, 2023 [Acceptance rate: 27.89%]",
          pdfUrl:
            "https://drive.google.com/file/d/1AaFczfN5q9ZAewVGDLOaRVTqc4oNSC8L/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/abstract/document/10186397",
          note:
            "在免疫延迟约束下提出贪心算法，以最小化疫情传播。",
        },
        {
          title:
            "Characterizing the Efficiency of Graph Neural Network Frameworks with a Magnifying Glass",
          venue:
            "IEEE International Symposium on Workload Characterization (IISWC), 2022",
          pdfUrl:
            "https://drive.google.com/file/d/1Skzfbl5LZ3DvVxmsJw6gMi316cX_Xp90/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/9975402",
          note: "对不同 GNN 模型与框架的性能进行基准测试与刻画。",
        },
        {
          title:
            "An Efficient and Scalable Algorithm for Estimating Kemeny's Constant of a Markov Chain on Large Graphs",
          venue:
            "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2021 [Acceptance rate: 15.44%]",
          pdfUrl:
            "https://drive.google.com/file/d/1Jg3s1nC444Gz3-RXCdQ6dlNhQo6-Hbmm/view?usp=sharing",
          venueUrl: "https://dl.acm.org/doi/10.1145/3447548.3467431",
          note:
            "GPU 算法估计 Kemeny 常数，相较 SOTA 最高可达约 500× 加速。",
        },
        {
          title: "Estimating Distributions of Large Graphs from Incomplete Sampled Data",
          venue:
            "IFIP International Conference on Networking, 2021 [Acceptance rate: 25.9%]",
          pdfUrl:
            "https://drive.google.com/file/d/1XnLpKtVE3uVTj5biZwjF2FdpScAMIDDj/view?usp=sharing",
          venueUrl: "https://ieeexplore.ieee.org/document/9472848",
          note:
            "从随机样本估计有向图潜在入度分布的简单估计器，相较 SOTA 最高约 650× 加速且精度提升约 90%。",
        },
        {
          title:
            "CrowdQuake: A Networked System of Low-Cost Sensors for Earthquake Detection via Deep Learning",
          venue:
            "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2020 [Acceptance rate: 16%]",
          pdfUrl:
            "https://drive.google.com/file/d/1lmQwWIn5wOxoweOYrpENpWVYMo26FQzH/view?usp=sharing",
          venueUrl: "https://dl.acm.org/doi/10.1145/3394486.3403378",
          note:
            "基于深度学习的低成本传感器网络系统，用于地震检测（准确率超过 99%）。",
        },
      ],
      skills: [
        {
          name: "软件开发",
          items: [
            "Python、C/C++、CUDA、JavaScript；MySQL/PostgreSQL",
            "PyTorch、TensorFlow、Scikit-learn、DGL；数据处理、建模、调优、分布式训练",
            "Docker、Serverless 部署、VPS 部署、Nginx/SSL",
            "SEO、GEO、GCP、Google Ads、GA4",
          ],
        },
        {
          name: "AI 应用开发",
          items: [
            "LangChain/LlamaIndex、提示词、MCP、Skills、RAG、多智能体流程",
            "Vibe Coding、SDD、Harness Engineering；Cursor、Google Antigravity、Claude Code",
          ],
        },
      ],
      education: [
        {
          degree: "博士，计算机科学",
          school: "德克萨斯州立大学，圣马科斯，德克萨斯州",
          period: "2021年8月 — 2025年5月",
          advisor: {
            label: "导师：",
            name: "Dr. Chul-Ho Lee",
            url: "https://sites.google.com/site/chulholeesite/",
          },
        },
        {
          degree: "硕士，电气工程",
          school: "佛罗里达理工学院，墨尔本，佛罗里达州",
          period: "2016年5月 — 2017年12月",
        },
        {
          degree: "学士，电子科学与技术",
          school: "华南理工大学",
          period: "2011年9月 — 2015年6月",
        },
      ],
    },
  };

  function getByPath(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function resolveLocale(stored) {
    if (stored === "en" || stored === "zh") return stored;
    if (global.navigator && navigator.language) {
      if (navigator.language.toLowerCase().indexOf("zh") === 0) return "zh";
    }
    return "en";
  }

  function getLocale() {
    try {
      return resolveLocale(global.localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return "en";
    }
  }

  function setLocale(lang) {
    if (lang !== "en" && lang !== "zh") return;
    try {
      global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function t(locale, path) {
    return getByPath(DATA[locale], path);
  }

  function applyStatic(locale) {
    var nodes = global.document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (!key) continue;
      var val = t(locale, key);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    }
    var htmlNodes = global.document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var hel = htmlNodes[j];
      var hkey = hel.getAttribute("data-i18n-html");
      if (!hkey) continue;
      var hval = t(locale, hkey);
      if (hval !== undefined && hval !== null) {
        hel.textContent = hval;
      }
    }
    var attrNodes = global.document.querySelectorAll("[data-i18n-attr]");
    for (var ai = 0; ai < attrNodes.length; ai++) {
      var ael = attrNodes[ai];
      var aspec = ael.getAttribute("data-i18n-attr");
      if (!aspec) continue;
      var colonIdx = aspec.indexOf(":");
      if (colonIdx <= 0) continue;
      var attrName = aspec.slice(0, colonIdx).trim();
      var akey = aspec.slice(colonIdx + 1).trim();
      var aval = t(locale, akey);
      if (aval !== undefined && aval !== null && aval !== "") {
        ael.setAttribute(attrName, aval);
      }
    }
    var titleEl = global.document.querySelector("title");
    if (titleEl) {
      var mt = t(locale, "metaTitle");
      if (mt) titleEl.textContent = mt;
    }
    var md = global.document.querySelector('meta[name="description"]');
    if (md) {
      var desc = t(locale, "metaDescription");
      if (desc) md.setAttribute("content", desc);
    }
    var ogTitle = global.document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      var ogt = t(locale, "metaTitle");
      if (ogt) ogTitle.setAttribute("content", ogt);
    }
    var ogDesc = global.document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      var ogd = t(locale, "metaDescription");
      if (ogd) ogDesc.setAttribute("content", ogd);
    }
    global.document.documentElement.setAttribute(
      "lang",
      locale === "zh" ? "zh-CN" : "en"
    );

    var themeLightBtns = global.document.querySelectorAll('[data-theme-mode="light"]');
    var ti;
    for (ti = 0; ti < themeLightBtns.length; ti++) {
      themeLightBtns[ti].setAttribute("aria-label", t(locale, "ui.themeLight"));
    }
    var themeDarkBtns = global.document.querySelectorAll('[data-theme-mode="dark"]');
    var td;
    for (td = 0; td < themeDarkBtns.length; td++) {
      themeDarkBtns[td].setAttribute("aria-label", t(locale, "ui.themeDark"));
    }
    var navToggle = global.document.getElementById("nav-toggle");
    if (navToggle) {
      if (navToggle.getAttribute("aria-expanded") === "true") {
        navToggle.setAttribute("aria-label", t(locale, "ui.menuClose"));
      } else {
        navToggle.setAttribute("aria-label", t(locale, "ui.menuOpen"));
      }
    }

    var langGroups = global.document.querySelectorAll(
      '.segmented--lang[role="group"]'
    );
    var lg;
    for (lg = 0; lg < langGroups.length; lg++) {
      langGroups[lg].setAttribute("aria-label", t(locale, "ui.langGroup"));
    }
    var themeGroups = global.document.querySelectorAll(
      '.segmented--theme[role="group"]'
    );
    var tg;
    for (tg = 0; tg < themeGroups.length; tg++) {
      themeGroups[tg].setAttribute("aria-label", t(locale, "ui.themeGroup"));
    }
  }

  function getContent(locale) {
    return DATA[locale] || DATA.en;
  }

  global.SiteI18n = {
    STORAGE_KEY: STORAGE_KEY,
    SUPPORTED: SUPPORTED,
    getLocale: getLocale,
    setLocale: setLocale,
    t: t,
    applyStatic: applyStatic,
    getContent: getContent,
  };
})(window);
