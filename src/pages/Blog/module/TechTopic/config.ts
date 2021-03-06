import { ElegantArticleCardProps } from "../../components/ElegantArticleCard";

export interface BlogModuleIntroTutorialConfig {
  sectionTitle: string;
  articleList: ElegantArticleCardProps[];
}
export const BlogModuleIntroTutorialConfig: BlogModuleIntroTutorialConfig[] = [
  {
    sectionTitle: "卷首语",
    articleList: [
      {
        title: "什么是前端",
        description:
          "了解什么是前端、哪里用得到前端，以及为什么敢叫“创造艺术”？",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "前端学习路径",
        description:
          "学习要从“基础”开始，但不是从“理论”开始。在“实践”中渐进地学习是最好的学习方法。",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
  {
    sectionTitle: "把你的简历做成网页",
    articleList: [
      {
        title: "HTML 与 CSS 基础",
        description:
          "像写 Word 文档一样——把你简历的内容按 HTML 语法写到网页上，再按 CSS 语法设置一些格式。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "更优雅地写 CSS",
        description:
          "上一节中，HTML 代码和 CSS 样式代码大量混在一起，很乱！好在 CSS 还有更优雅的写法。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "CSS 常识",
        description:
          "CSS 规则太多啦！我们挑一些常用的学习一下。学习一下现代布局技术。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "做出设计师规定的效果",
        description:
          "设计师实在看不过去我们的丑网站了……于是他用 Figma 软件做了一张漂亮的设计稿！让我们一起实现这个炫酷的设计！",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "发布网站",
        description:
          "我们做的网页真漂亮！但怎么才能让别人看到呢？哎，放到网上吧——别人打开浏览器输入地址或者扫码就能看到啦！",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
  {
    sectionTitle: "拓展网站受众面",
    articleList: [
      {
        title: "多介质适配",
        description:
          "电脑已经过时了，我们要做手机网页！我们要扫码登录！对了，下午的面试还要打印两份简历，还要适配一下打印机。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "无障碍化",
        description:
          "每个人都有获取信息的权力，但不是每个人都幸运地拥有健全地身体。我们的网站一定要考虑到少数群体，确保前进时不落下每一个人。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "国际化（多语言）",
        description:
          "国际友人不懂中文怎么办？不能让语言阻碍了我们跨国求职！让我们学习用 JavaScript 实现国际化",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
  {
    sectionTitle: "团队协作 —— Git",
    articleList: [
      {
        title: "让团队“并行开发”",
        description:
          "一个项目会有很多人同时维护。怎么才能把大家对代码的修改合并到一起呢？",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "Git 安装",
        description: "安装最流行的代码管理工具：Git",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "常用工作流",
        description: "切出分支、修改代码、提交代码、代码审查、合并分支",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "Git 原理与 git rebase",
        description:
          "有的团队要求用 fast forward merge 来保证分支 commit 的整洁。为此我们要学习 rebase 操作。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "初识 repo 与 monorepo",
        description:
          "我们的 APP 还是太简单，让我们先参考其他项目学习一下 git 工作流，并了解一下火热的 monorepo 代码管理方式。",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
  {
    sectionTitle: "深入交互网站开发 —— JavaScript",
    articleList: [
      {
        title: "做好心理准备",
        description:
          "只能展示内容的静态网站毕竟能力有限，要想实现复杂功能，还是要学会编程。勇敢的少年，准备好继续创造奇迹了吗？",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "认识 JavaScript",
        description: "前端最常用编程语言是 JavaScript，简称 JS。JS 很特殊，了解它的前世今生对开发会有很大帮助。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "JavaScript 基础",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
  {
    sectionTitle: "现代 Web 开发 —— React SPA 技术栈",
    articleList: [
      {
        title: "文件整合",
        description:
          "学习 Webpack 和 Vite 的工作原理，让我们用井井有条的代码开发单页应用 (SPA)。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "React Create APP",
        description: "站在 Facebook 的肩上，我们能开发得更快。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "“类组件”与“函数组件”",
        description:
          "现在已经是函数组件的天下了。但类组件在一个场景下仍然不可替代。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "路由配置",
        description: "“单页应用”只是技术实现，用户交互也要有导航功能。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "...",
        description: "......",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "善假于物",
        description: "没有枪、没有炮，开源社区给我们造。",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
  {
    sectionTitle: "E2E 测试 —— Cypress",
    articleList: [
      {
        title: "了解 E2E 测试",
        description:
          "E2E 测试即“端到端测试”，可以让我们模拟真实用户的操作路径对 APP 进行功能测试，拿到最直观的测试结果。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "Cypress 基础使用",
        description: "学习最流行的测试工具 Cypress。开启你的自动化之旅。",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
  {
    sectionTitle: "自动化",
    articleList: [
      {
        title: "流水线设计",
        description: "出发前先明确前进的方向。",
        disabled: true,
        badge: "未上架",
      },
      {
        title: "Webhook 与轮询",
        description: "使用 Webhook 和轮询机制串联起流水线的各个步骤。",
        disabled: true,
        badge: "未上架",
      },
    ],
  },
];
