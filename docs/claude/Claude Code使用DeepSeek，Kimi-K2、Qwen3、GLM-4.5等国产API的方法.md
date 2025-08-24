# Claude Code使用DeepSeek，Kimi-K2、Qwen3、GLM-4.5等国产模型

国产模型的API支持Anthropic的API，Claude Code使用国产模型的方法汇总如下：

### 安装 Claude Code
`npm install -g @anthropic-ai/claude-code`

### DeepSeek
将 DeepSeek 模型接入 Claude Code

-  获取 API Key
[Deepseek API Key](https://platform.deepseek.com/api_keys)

- 配置环境变量
```
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=${DEEPSEEK_API_KEY}
export ANTHROPIC_MODEL=deepseek-chat
export ANTHROPIC_SMALL_FAST_MODEL=deepseek-chat
```


*参考地址*: [anthropic_api](https://api-docs.deepseek.com/zh-cn/guides/anthropic_api)

### Kimi-K2
[在-claude-code-中使用-kimi-k2-模型](https://platform.moonshot.cn/docs/guide/agent-support#在-claude-code-中使用-kimi-k2-模型)

- 获取API Key
[kimi-k2 API Key](https://platform.moonshot.cn/console/api-keys)

- 配置环境变量
```
# Linux/macOS 启动高速版 kimi-k2-turbo-preview 模型
export ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic
export ANTHROPIC_AUTH_TOKEN=${YOUR_MOONSHOT_API_KEY}
export ANTHROPIC_MODEL=kimi-k2-turbo-preview
export ANTHROPIC_SMALL_FAST_MODEL=kimi-k2-turbo-preview
claude
```

### Qwen3

在 Claude Code 中使用百炼提供的 qwen3-coder-plus 模型

- 获取API Key
[百炼API Key](https://bailian.console.alibabacloud.com/?tab=api#/api/?type=model&url=2712195)

- 配置环境变量
```
# 用您的百炼API KEY代替YOUR_DASHSCOPE_API_KEY
echo 'export ANTHROPIC_BASE_URL="https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="YOUR_DASHSCOPE_API_KEY"' >> ~/.zshrc
```

*参考地址*: [qwen3](https://help.aliyun.com/zh/model-studio/claude-code)



### GLM-4.5



- 获取API Key
[GLM-4.5 API Key](https://bigmodel.cn/usercenter/proj-mgmt/apikeys)

- 配置环境变量
```
export ANTHROPIC_BASE_URL=https://open.bigmodel.cn/api/anthropic

export ANTHROPIC_AUTH_TOKEN=YOUR_API_KEY
export ANTHROPIC_MODEL=glm-4.5
export ANTHROPIC_SMALL_FAST_MODEL=glm-4.5-air
```

*参考地址*: [GLM-4.5](https://docs.bigmodel.cn/cn/guide/develop/claude#claude-code)