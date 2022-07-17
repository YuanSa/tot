import classNames from "classnames";
import { FC } from "react";
import { CareerExperience } from "./components/CareerExperience";
import styles from "./styles.module.scss";

export const Resume: FC = () => {
  return (
    <main className={styles.resume}>
      <div className={styles.page}>
        <section
          className={classNames(styles.section, styles["personal-info"])}
        >
          <div className={styles.name}>杨子涵</div>
          <address className={styles.contacts}>
            <a className={styles["contact-item"]} href="tel:+8618428096715">
              &#40;+86&#41;184-2809-6715
            </a>
            <a
              className={styles["contact-item"]}
              href="mailto:yuansasi@outlook.com"
            >
              YuanSaSi@outlook.com
            </a>
            <span className={styles["contact-item"]}>
              中国上海市闵行区漕宝路1467弄11号502室 &#40;201100&#41;
            </span>
          </address>
        </section>
        <section className={styles.section}>
          <h1 className={styles["section-title"]}>工作经历</h1>
          <CareerExperience
            className={styles["section-item"]}
            summary="字节跳动"
            description="音乐业务前端开发工程师"
            startDate="2020-10-01"
            location="中国 上海"
            details={[
              "炙热星河（抖音音乐人）前端开发",
              "SoundOn（TikTok 音乐发行服务）前端开发",
              "团队前端公用组件库开发者",
            ]}
          />
        </section>
        <section className={styles.section}>
          <h1 className={styles["section-title"]}>项目经历</h1>
          <CareerExperience
            className={styles["section-item"]}
            summary="SoundOn"
            startDate="2020-02"
            details={[
              "项目立项，MVP 版本前端开发与后续功能迭代。使用 SWR 管理前端状态，所有数据均由 hooks 维护；包含统一的错误监控、埋点上报、第三方数据上报管控等功能。",
              "自研并落地了图片在线裁剪工具，解决了用户难以上传符合“正方形尺寸”格式要求的专辑封面图的问题。",
              "自研并落地了第三方代码管理功能，解决了接入第三方 Tracking Pixel 时引入代码不受控的问题，使所有第三方代码的加载执行都需要经过用户授权，满足了英国地区的数据隐私合规要求。",
              "协调合作自研音频在线剪辑功能，实现了“不解码剪辑”，使剪辑耗时由浏览器 AudioContext API 的 10 秒级降低至 1 秒级。",
              "自研并落地了地区限定、富文本国际化文案开发与协作的解决方案，使产品运营团队及本地同学通过“类 Markdown”语法配置国际化文案。",
              "自研并落地了分类 FAQ 的后台管理系统，使产品运营团队同学通过 Markdown 语法管理分类 FAQ 内容。",
              "在 Semi 基础上开发了业务通用组件库，封装埋点监控等业务逻辑简化业务代码，并通过单元测试和 E2E 测试实现了对“平滑迁移组件库”的支持。",
            ]}
          />
          <CareerExperience
            className={styles["section-item"]}
            summary="炙热星河"
            startDate="2020-10"
            endDate="2021-02"
            details={[
              "建立并落地统一的埋点上报规范",
              "迁移前端组件库 Antd 至 Semi",
              "设计并实现了基于 UUID 的“替换已上传文件”功能",
              "开发了官网首页",
            ]}
          />
          <CareerExperience
            className={styles["section-item"]}
            summary="轮班提醒工具 Alter"
            startDate="2020-10"
            details={["业余时间个人兴趣开发飞书机器人 Alter，实现了值班人定期流转、定期发送消息卡片等功能。在团队 8 个场景下得到应用。"]}
          />
        </section>
        <section className={styles.section}>
          <h1 className={styles["section-title"]}>教育经历</h1>
          <CareerExperience
            className={styles["section-item"]}
            summary="哥伦比亚大学"
            description="电气工程 硕士（Master of Science in Electrical Engineering）GPA: 3.5/4.0"
            location="美国 纽约"
            startDate="2019-09"
            endDate="2020-07"
            details={[
              "修习课程：算法、物联网、人工智能、大数据、区块链、5G、量子计算。",
              "自学前端相关内容，完成了大数据相关课程设计“英雄联盟角色 BP 推荐系统”的整体实现、物联网相关课程设计的库存监控系统前端监控页面。",
            ]}
          />
          <CareerExperience
            className={styles["section-item"]}
            summary="电子科技大学"
            description="光电信息科学与工程 工学 学士 GPA: 3.8/4.0"
            location="中国 成都"
            startDate="2015-09"
            endDate="2019-07"
            details={[
              "获“人民一等奖学金”、“人民二等奖学金”等多次奖学金。",
              "自学前端相关内容，建立了校内公开评教网站解决选课难问题，为毕业设计的物联网系统开发了前端控制页面。",
            ]}
          />
        </section>
        <section className={styles.section}>
          <h1 className={styles["section-title"]}>课外活动</h1>
          <CareerExperience
            className={styles["section-item"]}
            summary="Bilibili 视频网 UP 主"
            startDate="2015-10"
            details={[
              "自学前端、PS、PR、排版等技能，制作视频教程，发布于哔哩哔哩视频网和 YouTube 等视频网站，各平台获得 2 万订阅、百万次播放，截至 2020 年 7 月 20 日盈利人民币 2000 余元。",
            ]}
          />
          <CareerExperience
            className={styles["section-item"]}
            summary="电子科技大学光电信息学院新闻中心部长"
            startDate="2016-09"
            endDate="2017-09"
            details={[
              "运营学院微信公众号，负责视频制作和视觉设计。",
              "改革内容生产模式，带领团队取得了校十佳新媒体大赛第二名，获得学院分团委“优秀部长”称号。",
            ]}
          />
          <CareerExperience
            className={styles["section-item"]}
            summary="新加坡国立大学创新管理项目"
            description="通过暑期项目学习“创新管理”课程"
            location="新加坡"
            startDate="2017-07"
            endDate="2017-07"
            details={[
              "调查环球影城商业模式并提出改进建议，所在团队表现优异，获得了最佳小队称号，并获得新国大工程学院执行董事 Hang Chang Chieh 推荐信",
            ]}
          />
        </section>
      </div>
    </main>
  );
};
