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
    sectionTitle: "不废话，直接干 —— 把你的简历做成网页",
    articleList: [
      {
        title: "HTML 与 CSS 基础",
        description:
          "像写 Word 文档一样——把你简历的内容按 HTML 语法写到网页上，再按 CSS 语法设置一些格式。",
      },
      {
        title: "更优雅地写 CSS",
        description:
          "上一节中，HTML 代码和 CSS 样式代码大量混在一起，很乱！好在 CSS 还有更优雅的写法。",
      },
      {
        title: "CSS 常识",
        description:
          "CSS 规则太多啦！我们挑一些常用的学习一下。学习一下现代布局技术。",
      },
      {
        title: "做出设计师规定的效果",
        description:
          "设计师实在看不过去我们的丑网站了……于是他用 Figma 软件做了一张漂亮的设计稿！让我们一起实现这个炫酷的设计！",
      },
      {
        title: "发布网站",
        description:
          "我们做的网页真漂亮！但怎么才能让别人看到呢？哎，放到网上吧——别人打开浏览器输入地址或者扫码就能看到啦！",
      },
    ],
  },
  {
    sectionTitle: "拓展一下网站受众面",
    articleList: [
      {
        title: "多介质适配",
        description:
          "电脑已经过时了，我们要做手机网页！我们要扫码登录！对了，下午的面试还要打印两份简历，还要适配一下打印机。",
      },
      {
        title: "无障碍化",
        description:
          "每个人都有获取信息的权力，但不是每个人都幸运地拥有健全地身体。我们的网站一定要考虑到少数群体，确保前进时不落下每一个人。",
      },
      {
        title: "国际化（多语言）",
        description:
          "国际友人不懂中文怎么办？不能让语言阻碍了我们跨国求职！让我们学习用 JavaScript 实现国际化",
      },
    ],
  },
  {
    sectionTitle: "太简单了 —— 我要复杂、炫酷的效果！",
    articleList: [
      {
        title: "JavaScript 基础",
        description:
          "只能展示内容的静态网站毕竟能力有限，要想实现复杂功能，还是要学会编程。对于前端，编程语言就是 JavaScript，简称 JS。",
      },
    ],
  },
];
