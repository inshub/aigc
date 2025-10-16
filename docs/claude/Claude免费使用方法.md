# Claude免费使用方法
分享使用Claude Code的方法

### Claude Code Nexus [免费]
[claude-code-nexus](https://github.com/KroMiose/claude-code-nexus)

> 一个 Claude API 代理服务平台 - 让 Claude Code CLI 无缝兼容任何 OpenAI API 服务。

下面介绍配置Google的gemini-2.5-pro的API 代理Claude Code。

#### 🚀 快速开始 (3步)

1. 登录 & 获取 API Key

访问 **[https://claude.nekro.ai/](https://claude.nekro.ai/)**，使用你的 GitHub 账户登录。系统会自动为你生成一个专属的 API Key。

2. 配置你的后端服务

在控制台中，配置你的 OpenAI 兼容 API 服务。你需要提供：

- **Base URL**: 你的 API 服务地址 (例如: `https://api.oneapi.com`)
- **API Key**: 你的 API 服务密钥

使用Google的gemini-2.5-pro的[Gemini API Key](https://aistudio.google.com/apikey)

![google-ai-studio](https://inshub.oss-cn-beijing.aliyuncs.com/aigc/google-ai-studio.jpg)

3. 在 Claude Code 中使用 

在你的终端中设置以下环境变量：

```bash
# 1. 设置你的专属 API Key
export ANTHROPIC_API_KEY="ak-your-nexus-key"

# 2. 设置代理服务地址
export ANTHROPIC_BASE_URL="https://claude.nekro.ai"

# 3. 正常使用 Claude Code！
claude "用 Rust 写一个 hello world"
```

 **完成！** 现在你的 Claude Code CLI 已经通过 Claude Code Nexus 代理，使用你自己的后端服务了。



### Kiro+Claude Code [免费]


[kiro2cc](https://github.com/bestK/kiro2cc/)


### y-router [按量]

[y-router](https://github.com/luohy15/y-router)