<p align="center">
  <a href="https://github.com/coxine/mooc-helper" rel="noopener" target="_blank"><img width="150" src="./docs/media/logo.svg" alt="mooc helper logo"></a>
</p>

<h1 align="center">MOOC Helper</h1>

> [!IMPORTANT]
>
> 感谢原项目作者 [whale4113](https://github.com/whale4113/)的无私奉献。
> 由于原项目已经停止维护，本项目将继续维护并更新。

查询**中国大学 MOOC(慕课)课程**的**单元测验**、**单元作业**、**期中/期末测试**的答案

## 网站地址

[mooc helper (https://mooc.cos.tg/)](https://mooc.cos.tg/)

建议国内用户尝试如下方式使用：

- 使用[桌面端应用程序](https://github.com/coxine/mooc-helper/releases)（目前仅支持 Windows）
- 手机端访问
- 本地启动该项目

## 使用步骤

1. 获取 `mob-token`，可以使用 [PCAPdroid](./docs/pcapdroid.md) 或 [Charles](./docs/charles.md) 。

2. 点击应用右上角**设置按钮**，将获取的 `mob-token` 粘贴到**MOB_TOKEN 输入框**中。然后关闭设置，等待片刻。

## 注意事项

- ❗❗❗ 请明确查询对象是否有时间限制。如果是，请查询后 **在时间截至前** 提交一次，保证一次有效成绩，因为查询操作会开启一次测验。[详情请看 issue13](https://github.com/xiaolu-lujunji/mooc-helper/issues/13)
- 题目排列顺序、答案排列顺序可能存在差异

## 免责声明

本项目（以下简称“项目”）仅供参考和学习使用。作者尽力确保项目的准确性和可靠性，但不提供任何明示或暗示的保证，包括但不限于对项目的适销性、特定用途的适用性或无侵权的保证。

作者不对因使用本项目而产生的任何直接、间接、偶然、特殊、惩罚性或结果性损害承担任何责任，包括但不限于因使用、误用、或依赖项目中的信息而导致的利润损失、业务中断或数据丢失。

本项目中的所有内容均基于作者的个人见解和经验，不代表任何组织或公司的观点。

使用者应自行承担使用本项目所产生的一切风险。在任何情况下，作者均不对使用本项目而导致的任何损失或损害承担责任。

## 构建桌面应用

```bash
# 安装依赖
pnpm install
# 生成 TAURI 私钥
pnpm tauri signer generate
# 自行将私钥添加到环境变量
# 并更改`src-tauri\tauri.conf.json`中的`"pubkey"`为生成的公钥
# 构建应用
pnpm tauri build
```
