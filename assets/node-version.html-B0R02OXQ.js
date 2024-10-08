import{_ as e,c as s,a,o as t}from"./app-DMWp9eL9.js";const l={};function i(d,n){return t(),s("div",null,n[0]||(n[0]=[a(`<blockquote><p>鉴于使用 ReactNative 时，会需要不同的 node 版本，提供一种版本切换方式</p></blockquote><h2 id="使用-n-command-来进行-node-版本管理" tabindex="-1"><a class="header-anchor" href="#使用-n-command-来进行-node-版本管理"><span>使用 n command 来进行 node 版本管理</span></a></h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>n Node version manager 提供了一个更简单的 CLI，用于在 Node 版本之间进行安装和切换。它仅在 Linux 或 Mac 操作系统上受到支持。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>如果你已经安装某个版本的 Node 和 npm ，则可以用 npm install -g n 来安装 n，就像安装其他 NPM 包一样。</p><p>如果你还没有安装 Node 或 npm，可以用 GitHub 中的 bash 脚本安装 n。这是它的样子：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://git.io/n-install <span class="token operator">|</span> <span class="token function">bash</span></span>
<span class="line"><span class="token operator">==</span><span class="token operator">=</span> n successfully installed.</span>
<span class="line">  The active Node.js version is: v10.16.0</span>
<span class="line"></span>
<span class="line">  Run <span class="token variable"><span class="token variable">\`</span>n <span class="token parameter variable">-h</span><span class="token variable">\`</span></span> <span class="token keyword">for</span> help.</span>
<span class="line">  To update n later, run <span class="token variable"><span class="token variable">\`</span>n-update<span class="token variable">\`</span></span><span class="token builtin class-name">.</span></span>
<span class="line">  To uninstall, run <span class="token variable"><span class="token variable">\`</span>n-uninstall<span class="token variable">\`</span></span><span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line">  IMPORTANT: OPEN A NEW TERMINAL TAB/WINDOW or run <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span> /home/brian/.bashrc<span class="token variable">\`</span></span></span>
<span class="line">             before using n and Node.js.</span>
<span class="line"><span class="token operator">==</span><span class="token operator">=</span></span>
<span class="line">~$ <span class="token builtin class-name">.</span> /home/brian/.bashrc</span>
<span class="line">~$ n</span>
<span class="line">node/10.16.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过从 GitHub 下载并运行 n-install 脚本来安装 n。n 默认安装了一个版本的 Node。</p><h3 id="安装版本-10-17-0" tabindex="-1"><a class="header-anchor" href="#安装版本-10-17-0"><span>安装版本 10.17.0</span></a></h3><p>如果需要指定版本号，可以这样安装</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> n <span class="token number">10.17</span>.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="安装最新版本" tabindex="-1"><a class="header-anchor" href="#安装最新版本"><span>安装最新版本</span></a></h3><p>安装最新版本使用如下命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> n latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="切换版本" tabindex="-1"><a class="header-anchor" href="#切换版本"><span>切换版本</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>显示如下</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Last login: Fri Apr  <span class="token number">3</span> <span class="token number">16</span>:56:05 on ttys004</span>
<span class="line"></span>
<span class="line"><span class="token comment"># huangkun @ huagnkundeMacBook-Pro in ~ [16:58:24]</span></span>
<span class="line">$ n</span>
<span class="line">  ο node/10.17.0</span>
<span class="line">    node/13.12.0</span>
<span class="line"></span>
<span class="line">Use up/down arrow keys to <span class="token keyword">select</span> a version, <span class="token builtin class-name">return</span> key to install, d to delete, q to quit</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用上下方向键来选择版本，并回车。如果不想选择可以按<code>q</code>退出</p><h2 id="直接使用-node-二进制文件" tabindex="-1"><a class="header-anchor" href="#直接使用-node-二进制文件"><span>直接使用 Node 二进制文件</span></a></h2><p>n 提供了直接调用特定 Node 二进制文件的功能，而无需显式切换到该版本的 Node。 NVM 则没有类似的功能。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># huangkun @ huagnkundeMacBook-Pro in ~ [17:01:32]</span></span>
<span class="line">$ <span class="token function">node</span> <span class="token parameter variable">-v</span></span>
<span class="line">v10.17.0</span>
<span class="line"><span class="token comment"># huangkun @ huagnkundeMacBook-Pro in ~ [17:01:39]</span></span>
<span class="line">$ n use <span class="token number">13.12</span>.0 index.js</span>
<span class="line">Node version: v13.12.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，n use 命令所请求的 Node 版本需要由 n 安装。</p><p>在某些情况下，这个功能非常有用。例如，有一个构建服务器，用于构建需要不同 Node 版本的程序。可以用 n use 命令触发每个构建，并能够指定该程序所需的 Node 版本。</p><h2 id="差异化" tabindex="-1"><a class="header-anchor" href="#差异化"><span>差异化</span></a></h2><p>NVM for Windows 和 n 有许多常见功能，也有一些独特的功能，这些功能会影响你使用每个工具的方式和位置。以下是一些主要差异的摘要：</p><table><thead><tr><th style="text-align:center;"><strong>能力</strong></th><th style="text-align:center;"><strong>NVM for Windows</strong></th><th style="text-align:center;"><strong>n</strong></th></tr></thead><tbody><tr><td style="text-align:center;">安装</td><td style="text-align:center;">Windows 安装程序或独立安装</td><td style="text-align:center;">Bash 脚本或 npm 包</td></tr><tr><td style="text-align:center;">操作系统支持</td><td style="text-align:center;">Windows（适用于 Linux/Mac 的不同实现）</td><td style="text-align:center;">仅限 Linux/Mac</td></tr><tr><td style="text-align:center;">列出要安装的 Node 的可用版本？</td><td style="text-align:center;">Yes</td><td style="text-align:center;">No</td></tr><tr><td style="text-align:center;">列出已安装的 Node 版本？</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td></tr><tr><td style="text-align:center;">在不同的 Node 版本之间安装和切换？</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td></tr><tr><td style="text-align:center;">直接访问 Node 二进制文件？</td><td style="text-align:center;">No</td><td style="text-align:center;">Yes</td></tr><tr><td style="text-align:center;">选择要安装的架构（x86，x64）？</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td></tr></tbody></table><p>如果你使用 Linux/Mac 那么我很推荐你使用 n，因为它安装方便，并且 API 简单。我还是用过 homebrew 安装两个办版本，使用<code>brew link --overwrite --force node</code>命令来更改版本，很不方便，并且容错率很低</p><p>或者你可以在 Windows 上选择 NVM for Windows，同时在 Linux 构建服务器上选择 n</p><p>无论怎样，这两种工具都能很好地满足能够动态切换 Node 版本的需求。</p><blockquote><p>就是这么简单了</p></blockquote>`,32)]))}const o=e(l,[["render",i],["__file","node-version.html.vue"]]),p=JSON.parse('{"path":"/posts/Web/node/node-version.html","title":"使用n命令管理node版本","lang":"zh-CN","frontmatter":{"title":"使用n命令管理node版本","icon":"shell","date":"2020-04-03T00:00:00.000Z","star":true,"category":["Linux"],"tag":["Node"],"description":"鉴于使用 ReactNative 时，会需要不同的 node 版本，提供一种版本切换方式 使用 n command 来进行 node 版本管理 概念 n Node version manager 提供了一个更简单的 CLI，用于在 Node 版本之间进行安装和切换。它仅在 Linux 或 Mac 操作系统上受到支持。 安装 如果你已经安装某个版本的 N...","head":[["meta",{"property":"og:url","content":"https://www.cnmd.icu/posts/Web/node/node-version.html"}],["meta",{"property":"og:site_name","content":"氚花盏-三个三"}],["meta",{"property":"og:title","content":"使用n命令管理node版本"}],["meta",{"property":"og:description","content":"鉴于使用 ReactNative 时，会需要不同的 node 版本，提供一种版本切换方式 使用 n command 来进行 node 版本管理 概念 n Node version manager 提供了一个更简单的 CLI，用于在 Node 版本之间进行安装和切换。它仅在 Linux 或 Mac 操作系统上受到支持。 安装 如果你已经安装某个版本的 N..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:22:57.000Z"}],["meta",{"property":"article:tag","content":"Node"}],["meta",{"property":"article:published_time","content":"2020-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:22:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用n命令管理node版本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:22:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三个三\\",\\"url\\":\\"https://www.cnmd.icu\\",\\"email\\":\\"mailto:2029364173@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"使用 n command 来进行 node 版本管理","slug":"使用-n-command-来进行-node-版本管理","link":"#使用-n-command-来进行-node-版本管理","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"安装版本 10.17.0","slug":"安装版本-10-17-0","link":"#安装版本-10-17-0","children":[]},{"level":3,"title":"安装最新版本","slug":"安装最新版本","link":"#安装最新版本","children":[]},{"level":3,"title":"切换版本","slug":"切换版本","link":"#切换版本","children":[]}]},{"level":2,"title":"直接使用 Node 二进制文件","slug":"直接使用-node-二进制文件","link":"#直接使用-node-二进制文件","children":[]},{"level":2,"title":"差异化","slug":"差异化","link":"#差异化","children":[]}],"git":{"createdTime":1712467377000,"updatedTime":1712467377000,"contributors":[{"name":"三个三","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":2.79,"words":836},"filePathRelative":"posts/Web/node/node-version.md","localizedDate":"2020年4月3日","excerpt":"<blockquote>\\n<p>鉴于使用 ReactNative 时，会需要不同的 node 版本，提供一种版本切换方式</p>\\n</blockquote>\\n<h2>使用 n command 来进行 node 版本管理</h2>\\n<h3>概念</h3>\\n<p>n Node version manager 提供了一个更简单的 CLI，用于在 Node 版本之间进行安装和切换。它仅在 Linux 或 Mac 操作系统上受到支持。</p>\\n<h3>安装</h3>\\n<p>如果你已经安装某个版本的 Node 和 npm ，则可以用 npm install -g n 来安装 n，就像安装其他 NPM 包一样。</p>","autoDesc":true}');export{o as comp,p as data};
