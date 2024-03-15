Midjourney使用命令


## /ask 获取 Mj 答案
> 🗒 获取 Mj 内的问题答案

## /blend 图像混合
> 🗒 输入/blend命令后，可将 2-5 张图像混合在一起
/blend 的默认长宽比为 1:1，但可以选择 dimensions 选择长宽比的出图尺寸比例：Square[1:1]、Portrait[2:3]、Landscape[3:2]
> ❗ /blend与任何其他 Prompt 一样，自定义后缀 会添加到 Prompt 的末尾/imagine。作为命令一部分指定的长宽比/blend会覆盖自定义后缀中的长宽比。

## /daily_theme 每日主题
> 🗒 获取 #daily_theme 频道更新的通知提醒

## /docs 文档
> 🗒 在官方 Midjourney Discord 服务器中使用可快速生成本用户指南中涵盖的主题的链接！

## /describe 图生文 将图像转换为文字描述
> 🗒 该/describe命令允许上传图像并根据该图像生成四种可能的提示。使用/describe命令探索新词汇和美学运动。
（注意：目前只支持 .jpg/.png 格式）

/describe生成具有 启发性 和 暗示性 的提示，它不能用于准确地重新创建上传的图像。
/describe返回上传图像的长宽比。

## /faq 常见问题
> 🗒 在官方 Midjourney Discord 服务器中使用可快速生成流行提示工艺频道常见问题解答的链接。

## /fast 快速出图 、/relax 宽松出图 和 /turbo 会员加速、三种模式出图效率切换
> 🗒 Midjourney 使用强大的图形处理单元 (GPU) 来解释和处理每个提示。当购买 Midjourney 订阅时，就购买了这些 GPU 上的时间。
不同的订阅计划具有不同的每月 GPU 时间量。
每月订阅的 GPU 时间是 快速模式 时间。快速模式尝试让你立即访问 GPU。它是默认处理层，并使用你订阅的每月 GPU 时间。
/fast 即可开启 快速出图模式（该模式有时长限制）
/relax 是切换 宽松出图模式（GPU时长用完后，默认由该模式出图）
/turbo 是切换 会员加速模式（该模式模式仅适用于 Mj 模型 v5、5.1 和 5.2，且是实验性功能，可用性和价格可能随时发生变化。）


快速模式、放松模式和加速模式
Standard、Pro 和 Mega 计划的订阅者每月可以在放松模式下创建无限数量的图像。放松模式不会消耗任何 GPU 时间，但作业将根据你使用系统的情况放入队列中。

| /fast 快速模式    |  /relax 宽松模式   | /turbo 会员加速模式    |
| --- | --- | --- |
| fast：任何时候都能很快生成图片    |relax：服务器空闲的时候出图快，人多的时候慢，所以并不是任何时候都是 Fast 快于 Relax 模式     | Turbo 模式仅适用于 Mj 模型 v5、5.1 和 5.2。    |
| fast：无论服务器是否拥挤出图都很快   |relax：若服务器拥挤则出图速度变慢    |如果选择 /turbo 模式，但 GPU 不可用，或者与所选型号版本不兼容，所作业的 Prompt 将默认以 /fast 模式运行。     |
| fast：虽然快，但有套餐时间限制    |relax：订阅没过期就能无限出图     |/turbo 模式是一项实验性功能，可用性和价格可能随时发生变化。|
| 只有用的人多的时候，Fast 类似于「插队」所以更快    |     |     |


Turbo 模式仅适用于 Mj 模型 v5、5.1 和 5.2。
如果选择 /turbo 模式，但 GPU 不可用，或者与所选型号版本不兼容，所作业的 Prompt 将默认以 /fast 模式运行。
/turbo 模式是一项实验性功能，可用性和价格可能随时发生变化。

## 如何切换模式
> 🗒 使用/fast /turbo或/relax命令
Standard、Pro 和 Mega 计划订户可以使用/fast或/relax命令在模式之间切换。
> 使用设置命令 
使用该/settings命令并从菜单中选择或。🐢 Relax 🐇 Fast⚡ Turbo
> 使用--fast --turbo或--relax参数
Standard、Pro 和 Mega 计划订阅者可以使用提示末尾的--relax、--fast或参数，以使用 Relax、Fast 或 Turbo 模式运行单个作业，而不用更改其首选设置。--turbo

## Upscalers 图像放大
> 🗒 当前的Midjourney 和 Niji 模型版本可生成 1024 x 1024 像素图像的网格。使用U1 U2 U3 U4每个图像网格下方的按钮来分隔所选图像。然后，可以使用Upscale (2x)或Upscale (4x)工具继续增加图像的大小。

Upscale工具使用你订阅的GPU分钟数。
  - 在图像上使用 Upscale 2x 所需的时间大约是生成初始图像网格的两倍。
  - 在图像上使用 Upscale 4x 所需的时间大约是生成初始图像网格的六倍。
Upscale工具目前只能在快速模式下使用。
Upscale工具与平移工具或 --tile 参数不兼容。

## /help 获取基本信息和提示
> 🗒 获取 Mj 内的问题答案

## /imagine 快速开始
> 🗒 如何使用/imagine
- 在消息字段中输入 “/imagine prompt：”。还可以/imagine从键入 “/” 时弹出的可用斜杠命令列表中选择命令
- 在字段中输入要创建的图像的描述prompt
- 所发送的消息。机器人将解释文本 prompt 并开始生成图像

## /info 查看个人账户信息
> 🗒 使用该/info命令查看有关当前排队和正在运行的作业、订阅类型、续订日期等信息。

- Subscription：订阅部分显示你订阅了哪个计划以及你的下一个续订日期。
- Job Mode：显示你当前是处于Fast 还是 Relaxed Mode。Relax Mode 仅适用于 Standard 和 Pro Plan 订阅者。
- Visibility Mode：显示你当前是处于公开模式还是隐身模式。隐身模式仅适用于 Pro Plan 订阅者。
- Fast Time Remaining：显示当月剩余的Fast GPU 时间。快速 GPU 时间每月重置一次，不会结转。
- Lifetime Usage：显示你一生的 Midjourney 统计数据。图片包括所有类型的生成（初始图片网格、放大、变体、混合等）。
- Relaxed Usage：显示你当月放松模式的使用情况。重度放松模式用户的排队时间会稍微慢一些。宽松的使用量每月重置。
- Queued Jobs：列出所有排队等待运行的Job 。最多可以同时排队七个作业。
- Running Jobs：列出当前正在运行的所有Job 。最多可以同时运行三个作业。


## /stealth 私密模式 和 /public 公共模式（隐私模式）
> 🗒 /stealth 对于 Pro 专业订阅的用户：开启私密模式
/public 对于 Pro 专业订阅的用户：切换回公共模式 [默认是公共模式]
（在开启 私密模式 后，对所生成的图片是仅自己可见，不会出现在公共社区里）

## /subscribe 生成个人链接
> 🗒 使用该/subscribe命令生成订阅页面的个人链接。
或者，访问 Midjourney.com/account
或者，登录 Midjourney 网站时从侧边栏进行选择。

## /settings 打开设置面板与预设
> 🗒 选中哪个模型后，会在 /imagine prompt 后面自动添加上该模型的后缀，
默认是使用 最新模型
- 使用设置命令 
键入/settings并从菜单中选择喜欢的版本
- 使用版本或测试参数 
将--v 4 --v 5 --v 5.1 --v 5.1 --style raw --v 5.2 --v 5.2 --style raw --niji 5 --niji 5 --style cute --niji 5 --style expressive --niji 5 --style original或添加--niji 5 --style scenic到提示的末尾。

## Upscalers 图像放大
> 🗒 获取 Mj 内的问题答案