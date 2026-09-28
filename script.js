const profile = {
  projects: [
    {
      number: '01',
      status: 'U1 PRO · DELIVERY',
      title: 'Agentic 生图文字修复',
      description: '围绕 SenseNova U1 Pro 的长程图文交错与持续编辑能力，把错字检测、最小编辑区域确认、局部重绘和结果校验串成可交付管线。Hard Mask、梯度边界引导与二值回贴用于保护非目标区域。',
      tags: ['SenseNova U1 Pro', 'Agentic loop', 'Hard Mask'],
      link: 'https://www.sensenova.cn/u1-pro',
      linkText: 'U1 Pro project ↗'
    },
    {
      number: '02',
      status: 'RESEARCH',
      title: 'Pro4EduRec',
      description: '可解释教育推荐系统：将学习日志转化为学习状态、兴趣、行为与社交四维画像，再以真实交互资源的 NDCG@10 作为奖励优化画像生成器。',
      tags: ['Qwen3-4B', 'on-policy DPO', 'NDCG@10'],
      link: '#writing',
      linkText: 'read results ↗'
    },
    {
      number: '03',
      status: 'IJCAI-26',
      title: 'KLU4EduRec',
      description: '面向图教育推荐的 LLM 增强知识与学习路径理解系统。通过学习模式漂移切分路径，分层抽取语义状态，再与 GNN 协同信号对齐融合。',
      tags: ['LLM', 'GNN', 'InfoNCE'],
      link: 'https://github.com/DaSESmartEdu/KLU4EduRec',
      linkText: 'view repo ↗'
    },
    {
      number: '04',
      status: 'MULTIMODAL',
      title: 'SenseNova-U1.5',
      description: '8B-MoT 原生统一多模态模型：在无视觉编码器、无 VAE 的架构中统一理解、推理、生成与编辑，并以空间耦合解码提升高分辨率视觉连续性。',
      tags: ['8B-MoT', 'native multimodal', '4K'],
      link: 'https://github.com/OpenSenseNova/SenseNova-U1',
      linkText: 'view code ↗'
    }
  ],
  timeline: [
    { date: '2025.06 — 2026.06', title: '大模型研究员', org: 'SenseTime · 基础研究院', body: '围绕 Agentic 生图文字修复、LLM Alignment、多模态数据构造、安全对齐与评测体系开展研究和工程落地。' },
    { date: '2024.09 — now', title: '大数据技术与工程 · 硕士', org: '华东师范大学', body: '关注教育智能、多模态模型与可验证的推荐和生成系统。' },
    { date: '2020.09 — 2024.06', title: '智能科学与技术 · 本科', org: '杭州电子科技大学', body: 'GPA 4.41 / 5.0（专业 5 / 121），获浙江省政府奖学金与校一等奖学金 4 次。' }
  ],
  papers: [
    { year: '2026', type: 'IJCAI · co-author', title: 'LLM-Enhanced Knowledge and Learning Path Understanding for Graph-based Educational Recommendation', description: '提出 KLU4EduRec，使用 LLM 理解资源知识与学习路径，并与图推荐表示对齐融合。', link: 'https://github.com/DaSESmartEdu/KLU4EduRec', label: 'code ↗' },
    { year: '2026', type: 'WISA · first author', title: 'Generating Student Profiles for Explainable Educational Recommendation', description: '设计 Pro4EduRec，以真实未来交互奖励优化四维学生画像生成。', link: '#contact', label: 'details ↗' },
    { year: '2026', type: 'product / technical context', title: 'SenseNova U1 Pro', description: '面向长程任务的交付级原生多模态智能体基座，支持图文交错思维、持续编辑与 Agentic Generation Loop。', link: 'https://www.sensenova.cn/u1-pro', label: 'official ↗' }
  ],
  skills: [
    { name: 'programming & training', items: ['Python', 'PyTorch', 'LoRA', 'SFT / Post-SFT', 'on-policy DPO', 'RL rollout'] },
    { name: 'multimodal & data', items: ['OCR', 'VLM', 'data synthesis', 'filtering & ablation', 'evaluation', 'GNN', 'InfoNCE'] },
    { name: 'models & tools', items: ['Qwen2-VL', 'Qwen3', 'Qwen3-Embedding', 'Gemini', 'SenseNova-U1.5'] }
  ],
  contacts: [
    { label: 'Email', value: 'shuyanzheng2001@gmail.com', href: 'mailto:shuyanzheng2001@gmail.com' },
    { label: 'GitHub', value: '待补充个人主页地址', href: '#', placeholder: true },
    { label: 'LinkedIn', value: '待补充', href: '#', placeholder: true }
  ]
};

const projectTemplate = (project) => `
  <article class="project-card">
    <div class="project-top"><span class="project-number">${project.number}</span><span class="project-status">${project.status}</span></div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-footer"><div class="tech-tags">${project.tags.map((tag) => `<span class="tech-tag">#${tag}</span>`).join('')}</div><a class="project-link" href="${project.link}" ${project.link.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${project.linkText}</a></div>
  </article>`;

const timelineTemplate = (item) => `
  <article class="timeline-item"><div class="timeline-date">${item.date}</div><div class="timeline-content"><h3>${item.title}</h3><p class="timeline-org">${item.org}</p><p>${item.body}</p></div></article>`;
const paperTemplate = (paper) => `
  <article class="paper-item"><div class="paper-year">${paper.year}</div><div><span class="paper-type">${paper.type}</span><h3>${paper.title}</h3><p>${paper.description}</p></div><a href="${paper.link}" ${paper.link.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${paper.label}</a></article>`;
const skillTemplate = (group) => `<div class="skill-group"><h3>${group.name}</h3><div class="skill-list">${group.items.map((item) => `<span>${item}</span>`).join('')}</div></div>`;
const contactTemplate = (contact) => `<a class="contact-link ${contact.placeholder ? 'is-placeholder' : ''}" href="${contact.href}" ${contact.placeholder ? `aria-label="${contact.label}，待补充"` : ''}><span>${contact.label}</span><strong>${contact.value}</strong></a>`;

document.querySelector('[data-projects]').innerHTML = profile.projects.map(projectTemplate).join('');
document.querySelector('[data-timeline]').innerHTML = profile.timeline.map(timelineTemplate).join('');
document.querySelector('[data-papers]').innerHTML = profile.papers.map(paperTemplate).join('');
document.querySelector('[data-skills]').innerHTML = profile.skills.map(skillTemplate).join('');
document.querySelector('[data-contacts]').innerHTML = profile.contacts.map(contactTemplate).join('');
document.querySelector('[data-year]').textContent = new Date().getFullYear();

document.querySelector('[data-contribution-grid]').innerHTML = Array.from({ length: 130 }, (_, index) => `<i aria-hidden="true" style="opacity:${0.45 + ((index * 17) % 55) / 100}"></i>`).join('');

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-18% 0px -68% 0px', threshold: [0, .2, .5] });
sections.forEach((section) => observer.observe(section));
