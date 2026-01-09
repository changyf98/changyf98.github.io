# 📝 博客更新指南

本文档详细说明如何在你的个人主页中创建和管理博客文章。

## 📂 文件结构

所有博客文章都存放在 `_posts/` 目录下，使用 Markdown 格式编写。

```
changyf98.github.io/
├── _posts/
│   ├── 2024-05-19-blog-post-1.md
│   ├── 2024-07-16-blog-post-2.md
│   └── ...
└── BLOG_GUIDE.md (本文档)
```

## 📋 文件命名规范

文件名必须遵循以下格式：

```
YYYY-MM-DD-文章标题.md
```

**示例**：
- ✅ `2024-07-20-goldbach-conjecture.md`
- ✅ `2024-08-15-optimization-problem.md`
- ❌ `blog-post.md` (缺少日期)
- ❌ `2024-7-20-article.md` (月份应为两位数)

## ✍️ 创建新文章

### 第一步：创建文件

在 `_posts/` 目录下创建新的 `.md` 文件，文件名按照上述规范命名。

### 第二步：编写 Front Matter

每篇文章开头必须包含 Front Matter（用 `---` 包裹的 YAML 格式配置）：

```markdown
---
title: '文章标题'
date: YYYY-MM-DD
permalink: /posts/YYYY/MM/article-slug/
status: open          # 可选：open 或 solved
difficulty: medium    # 可选：easy, medium, 或 hard
answer: "答案内容"    # 可选：问题的答案（solved 状态时建议填写）
tags:
  - 标签1
  - 标签2
---

文章内容从这里开始...
```

### 第三步：编写内容

Front Matter 之后，使用 Markdown 语法编写文章内容。

## 🎯 字段说明

### 必需字段

| 字段 | 说明 | 示例 |
|------|------|------|
| `title` | 文章标题 | `'哥德巴赫猜想'` |
| `date` | 发布日期 | `2024-07-20` |
| `permalink` | 文章链接 | `/posts/2024/07/goldbach/` |

### 可选字段

| 字段 | 可用值 | 说明 | 示例 |
|------|--------|------|------|
| `status` | `open` 或 `solved` | 问题状态 | `status: open` |
| `difficulty` | `easy`, `medium`, `hard` | 难度等级 | `difficulty: hard` |
| `answer` | 文本 | 问题答案（solved 时显示在独立卡片中） | `answer: "5777"` |
| `tags` | 标签列表 | 文章标签 | 见下文示例 |
| `excerpt` | 文本 | 文章摘要（可选） | `excerpt: "这是摘要"` |

## 💡 答案显示 (Answer Display)

当文章状态为 `solved` 时，可以在 front matter 中添加 `answer` 字段，答案会显示在独立的绿色卡片中：

```markdown
---
status: solved
answer: "5777"
---
```

**显示效果**：
- **问题卡片**（蓝色）：显示问题描述
- **答案卡片**（绿色）：显示 "💡 Answer" 标题和答案内容
- 两个卡片独立显示，视觉层次清晰

## 🏷️ 状态徽章 (Status Badges)

### Open（未解决）
```markdown
status: open
```
显示效果：🔓 **Open**（红色渐变，带呼吸动画）

### Solved（已解决）
```markdown
status: solved
```
显示效果：✓ **Solved**（青绿色渐变）

**注意**：如果不设置 `status` 字段，系统会自动检测：
- 标题包含 `(open)` 或 `(Open)` → 显示 Open 徽章
- 内容包含 `Answer:` → 显示 Solved 徽章

## ⭐ 难度徽章 (Difficulty Badges)

### Easy（简单）
```markdown
difficulty: easy
```
显示效果：★ **Easy**（绿色渐变）

### Medium（中等）
```markdown
difficulty: medium
```
显示效果：★★ **Medium**（橙色渐变）

### Hard（困难）
```markdown
difficulty: hard
```
显示效果：★★★ **Hard**（红色渐变）

## 🏷️ 标签系统 (Tags)

标签以列表形式添加：

```markdown
tags:
  - math
  - optimization
  - programming
```

标签会显示为带 `#` 的徽章，例如：`#math` `#optimization`

## 📚 完整示例

### 示例 1：已解决的中等难度问题

```markdown
---
title: '哥德巴赫的另一个猜想'
date: 2024-05-19
permalink: /posts/2024/05/goldbach-other-conjecture/
status: solved
difficulty: medium
answer: "5777"
tags:
  - number theory
  - prime numbers
  - programming
---

克里斯蒂安·哥德巴赫曾经猜想，每个奇合数都可以写成一个素数和一个平方的两倍之和。

$$
\begin{aligned}
& 9=7+2 \times 1^2 \\
& 15=7+2 \times 2^2 \\
& 21=3+2 \times 3^2 \\
& 25=7+2 \times 3^2
\end{aligned}
$$

最终这个猜想被推翻了。

**问题**：不能写成一个素数和一个平方的两倍之和的最小奇合数是多少？
```

**说明**：
- 问题描述会显示在蓝色卡片中
- 答案 "5777" 会显示在独立的绿色卡片中，标题为 "💡 Answer"

### 示例 2：未解决的困难问题

```markdown
---
title: '三体问题的周期解'
date: 2024-08-01
permalink: /posts/2024/08/three-body-problem/
status: open
difficulty: hard
tags:
  - physics
  - differential equations
  - unsolved
---

三体问题是指三个质点在相互之间万有引力作用下的运动规律问题。

**问题描述**：

给定三个质点的初始位置和速度，求解它们在引力作用下的运动轨迹。特别地，我们寻找周期性解。

## 背景

经典的三体问题至今没有解析解，但存在许多特殊的周期解（如图8字形轨道）。

## 开放问题

是否存在一个通用的方法来寻找所有可能的周期解？

**小红书征解**：本题在小红书（ID: 600167839）有奖征解中，欢迎提交你的思路！

## 已知结果

- Lagrange 点解（1772）
- 图8字形轨道（2000年发现）
- 13种新周期轨道（2013年发现）

## 数学描述

运动方程为：

$$
m_i \frac{d^2 \mathbf{r}_i}{dt^2} = \sum_{j \neq i} G \frac{m_i m_j}{|\mathbf{r}_j - \mathbf{r}_i|^3} (\mathbf{r}_j - \mathbf{r}_i)
$$

其中 $i = 1, 2, 3$。
```

### 示例 3：简单的编程问题（已解决）

```markdown
---
title: '斐波那契数列的第 N 项'
date: 2024-08-10
permalink: /posts/2024/08/fibonacci-nth/
status: solved
difficulty: easy
tags:
  - programming
  - recursion
  - dynamic programming
---

斐波那契数列定义如下：

$$
F(n) = \begin{cases}
0 & n = 0 \\
1 & n = 1 \\
F(n-1) + F(n-2) & n \geq 2
\end{cases}
$$

**问题**：求斐波那契数列的第 1000 项。

## 解答

使用动态规划方法：

```python
def fibonacci(n):
    if n <= 1:
        return n

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b

    return b

result = fibonacci(1000)
print(f"Answer: {result}")
```

Answer: 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875
```

## 📝 Markdown 语法速查

### 数学公式

使用 LaTeX 语法，用 `$$` 包裹：

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 代码块

使用三个反引号：

````markdown
```python
def hello():
    print("Hello, World!")
```
````

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 列表

```markdown
无序列表：
- 项目 1
- 项目 2
- 项目 3

有序列表：
1. 第一步
2. 第二步
3. 第三步
```

### 链接和图片

```markdown
[链接文字](https://example.com)

![图片描述](/images/example.jpg)
```

## 🚀 发布流程

### 1. 本地编辑

在 `_posts/` 目录下创建或编辑 `.md` 文件。

### 2. 本地预览（可选）

如果安装了 Jekyll，可以本地预览：

```bash
bundle exec jekyll serve
```

然后访问 `http://localhost:4000`

### 3. 提交到 Git

```bash
cd "/Users/cyf/My file/homepage/changyf98.github.io"

# 添加新文章或修改
git add _posts/2024-08-15-new-article.md

# 提交
git commit -m "Add new blog post: Article Title"

# 推送到 GitHub
git push origin master
```

### 4. 等待部署

GitHub Pages 会自动构建网站，通常需要 1-3 分钟。完成后访问：
- 博客列表页：https://changyf98.github.io/blog/
- 具体文章：根据 `permalink` 设置的路径

## 🎨 样式预览

你的博客现在包含以下科技感样式：

- ✨ **深色背景**：暗色背景配青色霓虹灯效果
- 🎴 **卡片式布局**：每篇文章以卡片形式展示
- 🏷️ **状态徽章**：Open（红色呼吸动画）/ Solved（青绿色）
- ⭐ **难度徽章**：Easy（绿）/ Medium（橙）/ Hard（红）
- 🏷️ **标签系统**：显示为 `#tag` 格式的青色徽章
- 🎯 **悬停效果**：卡片悬停时有抬升和发光效果
- 📅 **年份分组**：按年份自动分组显示

## 💡 最佳实践

### 1. 文件命名
- 使用英文和连字符，避免空格和中文
- 日期格式严格为 `YYYY-MM-DD`

### 2. Permalink 设置
- 保持简短、有意义
- 使用小写字母和连字符
- 示例：`/posts/2024/08/article-name/`

### 3. 标签使用
- 使用简短、通用的标签
- 保持标签一致性（例如统一使用 `math` 而不是混用 `math`、`mathematics`）
- 每篇文章 2-5 个标签为宜

### 4. 状态管理
- Open 问题：清晰说明问题要求，可以提及小红书征解活动
- Solved 问题：包含详细解答和代码实现

### 5. 难度分级
- Easy：初学者可以解决，主要考察基本概念
- Medium：需要一定思考和技巧，涉及算法或数学推导
- Hard：需要深入研究，可能涉及高级数学或复杂算法

## ❓ 常见问题

### Q: 文章没有显示？
A: 检查以下几点：
1. 文件名格式是否正确（`YYYY-MM-DD-title.md`）
2. Front Matter 格式是否正确（用 `---` 包裹）
3. 是否已经 push 到 GitHub
4. 等待 3-5 分钟让 GitHub Pages 重新构建

### Q: 数学公式不显示？
A: 确保使用 `$$` 包裹公式，并且语法正确。

### Q: 徽章没有显示？
A: 检查 `status` 和 `difficulty` 的值是否正确（区分大小写）。

### Q: 如何删除文章？
A: 从 `_posts/` 目录删除对应的 `.md` 文件，然后提交到 Git。

### Q: 可以用中文标题吗？
A: 可以，但建议文件名使用英文，只在 `title` 字段使用中文。

## 📞 需要帮助？

如果遇到问题，可以：
1. 参考 Jekyll 官方文档：https://jekyllrb.com/docs/
2. 查看现有文章作为示例：`_posts/` 目录
3. 检查 GitHub Pages 构建日志

---

**最后更新**：2024-01-08
**维护者**：常芸凡
