import{_ as d,c as h,b as s,e as l,f as e,a as o,r as c,o as u,d as a}from"./app-DMWp9eL9.js";const m={},b={class:"table-of-contents"};function v(g,n){const i=c("router-link"),r=c("CodeTabs");return u(),h("div",null,[n[10]||(n[10]=s("blockquote",null,[s("p",null,"MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的"),s("p",null,"这里介绍一个更强大的终端神器")],-1)),n[11]||(n[11]=s("h2",{id:"目录",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#目录"},[s("span",null,"目录")])],-1)),s("nav",b,[s("ul",null,[s("li",null,[l(i,{to:"#目录"},{default:e(()=>n[0]||(n[0]=[a("目录")])),_:1})]),s("li",null,[l(i,{to:"#背景介绍"},{default:e(()=>n[1]||(n[1]=[a("背景介绍")])),_:1})]),s("li",null,[l(i,{to:"#安装-oh-my-zsh"},{default:e(()=>n[2]||(n[2]=[a("安装 oh my zsh")])),_:1}),s("ul",null,[s("li",null,[l(i,{to:"#配置"},{default:e(()=>n[3]||(n[3]=[a("配置")])),_:1})])])]),s("li",null,[l(i,{to:"#效果图"},{default:e(()=>n[4]||(n[4]=[a("效果图")])),_:1}),s("ul",null,[s("li",null,[l(i,{to:"#卸载-oh-my-zsh"},{default:e(()=>n[5]||(n[5]=[a("卸载 oh my zsh")])),_:1})])])])])]),n[12]||(n[12]=o(`<h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><p>在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算.</p><p>shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)</p><p>然后 shell 解析这种命令再反馈给内核去执行一系列操作.</p><p>zsh 和 shell 有什么关系呢?</p><p>其实 zsh 也是一种 shell ,但是并不是我们系统默认的 shell ,unix 衍生系统的默认 shell 都是 bash。</p><p>查看已安装 shell<br> 查看 Mac 上已有的 shell,一共有 6 种</p><hr><p><code>cat /etc/shells</code></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">/bin/bash</span>
<span class="line">/bin/csh</span>
<span class="line">/bin/ksh</span>
<span class="line">/bin/sh</span>
<span class="line">/bin/tcsh</span>
<span class="line">/bin/zsh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#安装-oh-my-zsh"><span>安装 <strong>oh my zsh</strong></span></a></h2>`,11)),l(r,{id:"43",data:[{id:"crul"},{id:"wget"}]},{title0:e(({value:t,isActive:p})=>n[6]||(n[6]=[a("crul")])),title1:e(({value:t,isActive:p})=>n[7]||(n[7]=[a("wget")])),tab0:e(({value:t,isActive:p})=>n[8]||(n[8]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"sh"),a(),s("span",{class:"token parameter variable"},"-c"),a(),s("span",{class:"token string"},[a('"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"curl"),a(),s("span",{class:"token parameter variable"},"-fsSL"),a(" https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),s("span",{class:"token variable"},")")]),a('"')])]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),tab1:e(({value:t,isActive:p})=>n[9]||(n[9]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"sh"),a(),s("span",{class:"token parameter variable"},"-c"),a(),s("span",{class:"token string"},[a('"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"wget"),a(" https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh "),s("span",{class:"token parameter variable"},"-O"),a(" -"),s("span",{class:"token variable"},")")]),a('"')])]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1}),n[13]||(n[13]=o(`<p>安装成功：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Cloning Oh My Zsh<span class="token punctuation">..</span>.</span>
<span class="line">Cloning into <span class="token string">&#39;/root/.oh-my-zsh&#39;</span><span class="token punctuation">..</span>.</span>
<span class="line">remote: Counting objects: <span class="token number">712</span>, done.</span>
<span class="line">remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">584</span>/584<span class="token punctuation">)</span>, done.</span>
<span class="line">remote: Total <span class="token number">712</span> <span class="token punctuation">(</span>delta <span class="token number">15</span><span class="token punctuation">)</span>, reused <span class="token number">522</span> <span class="token punctuation">(</span>delta <span class="token number">4</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span></span>
<span class="line">Receiving objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">712</span>/712<span class="token punctuation">)</span>, <span class="token number">443.58</span> KiB <span class="token operator">|</span> <span class="token number">27.00</span> KiB/s, done.</span>
<span class="line">Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.</span>
<span class="line">Checking connectivity<span class="token punctuation">..</span>. done.</span>
<span class="line">Looking <span class="token keyword">for</span> an existing <span class="token function">zsh</span> config<span class="token punctuation">..</span>.</span>
<span class="line">Using the Oh My Zsh template <span class="token function">file</span> and adding it to ~/.zshrc</span>
<span class="line">Copying your current <span class="token environment constant">PATH</span> and adding it to the end of ~/.zshrc <span class="token keyword">for</span> you.</span>
<span class="line">Time to change your default shell to zsh<span class="token operator">!</span></span>
<span class="line">        __                                     __</span>
<span class="line"> ____  / /_     ____ ___  __  __   ____  _____/ /_</span>
<span class="line">/ __ <span class="token punctuation">\\</span>/ __ <span class="token punctuation">\\</span>   / __ \`__ <span class="token punctuation">\\</span>/ / / /  /_  / / ___/ __ <span class="token punctuation">\\</span></span>
<span class="line">/ /_/ / / / /  / / / / / / /_/ /    / /_<span class="token punctuation">(</span>__  <span class="token punctuation">)</span> / / /</span>
<span class="line"><span class="token punctuation">\\</span>____/_/ /_/  /_/ /_/ /_/<span class="token punctuation">\\</span>__, /    /___/____/_/ /_/</span>
<span class="line">                       /____/                       <span class="token punctuation">..</span><span class="token punctuation">..</span>is now installed<span class="token operator">!</span></span>
<span class="line"></span>
<span class="line">Please <span class="token function">look</span> over the ~/.zshrc <span class="token function">file</span> to <span class="token keyword">select</span> plugins, themes, and options.</span>
<span class="line">p.s. Follow us at https://twitter.com/ohmyzsh.</span>
<span class="line">p.p.s. Get stickers and t-shirts at http://shop.planetargon.com.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成以后，默认<code>Shell</code>的<code>~/.bashrc</code>文件默认不再加载了，替代的是<code>~/.zlogin</code>和<code>~/.zshrc</code>。所以如果你在<code>~/.bashrc</code>里配置了某些设置，需要把她们复制到<code>~/.zshrc</code>中。</p><p>在<code>~/.zshrc</code> 中添加以下行</p><p><code>source ~/.bash_profile</code></p><h4 id="切换终端为-zsh" tabindex="-1"><a class="header-anchor" href="#切换终端为-zsh"><span>切换终端为 zsh</span></a></h4><p><code>chsh -s /bin/zsh</code></p><h4 id="oh-my-zsh-目录结构" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh-目录结构"><span>oh my zsh 目录结构</span></a></h4><p>进入<code>~/.oh-my-zsh</code>目录后，看看该目录的结构</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">~ <span class="token function">ls</span> ~/.oh-my-zsh</span>
<span class="line">CONTRIBUTING.md cache           log             templates</span>
<span class="line">LICENSE.txt     custom          oh-my-zsh.sh    themes</span>
<span class="line">README.md       lib             plugins         tools</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>lib 提供了核心功能的脚本库</li><li>tools 提供安装、升级等功能的快捷工具</li><li>plugins 自带插件的存在放位置</li><li>templates 自带模板的存在放位置</li><li>themes 自带主题文件的存在放位置</li><li>custom 个性化配置目录，自安装的插件和主题可放这里</li></ul><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p><code>zsh</code> 的配置主要集中在<code>~/.zshrc</code>里，用 <code>vim</code> 或你喜欢的其他编辑器打开<code>.zshrc</code>。</p><p>可以在此处定义自己的环境变量和别名，当然，<code>oh my zsh</code> 在安装时已经自动读取当前的环境变量并进行了设置，你可以继续追加其他环境变量。</p><h4 id="别名设置" tabindex="-1"><a class="header-anchor" href="#别名设置"><span>别名设置：</span></a></h4><p><code>zsh</code>不仅可以设置通用别名，还能针对文件类型设置对应的打开程序，比如：</p><ul><li><code>alias -s html=vi</code>，意思就是你在命令行输入 <code>hello.html</code>，<code>zsh</code>会为你自动打开<code>vim</code>并读取<code>hello.html</code>；</li><li><code>alias -s gz=&#39;tar -xzvf&#39;</code>，表示自动解压后缀为<code>gz</code>的压缩包。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">cls</span><span class="token operator">=</span><span class="token string">&#39;clear&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">la</span><span class="token operator">=</span><span class="token string">&#39;ls -a&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">vi</span><span class="token operator">=</span><span class="token string">&#39;vim&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">javac</span><span class="token operator">=</span><span class="token string">&quot;javac -J-Dfile.encoding=utf8&quot;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">grep</span><span class="token operator">=</span><span class="token string">&quot;grep --color=auto&quot;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">html</span><span class="token operator">=</span>vi   <span class="token comment"># 在命令行直接输入后缀为 html 的文件名，会在 vim 中打开</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">rb</span><span class="token operator">=</span>vi     <span class="token comment"># 在命令行直接输入 ruby 文件，会在 vim 中打开</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">py</span><span class="token operator">=</span>vi       <span class="token comment"># 在命令行直接输入 python 文件，会用 vim 中打开，以下类似</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">js</span><span class="token operator">=</span>vi</span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">c</span><span class="token operator">=</span>vi</span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">java</span><span class="token operator">=</span>vi</span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">txt</span><span class="token operator">=</span>vi</span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">gz</span><span class="token operator">=</span><span class="token string">&#39;tar -xzvf&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">tgz</span><span class="token operator">=</span><span class="token string">&#39;tar -xzvf&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">zip</span><span class="token operator">=</span><span class="token string">&#39;unzip&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">bz2</span><span class="token operator">=</span><span class="token string">&#39;tar -xjvf&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【其他】</p><ul><li><a href="https://github.com/robbyrussell/oh-my-zsh/wiki/themes" target="_blank" rel="noopener noreferrer">github zsh 主题参考</a></li><li><a href="http://blog.sina.com.cn/s/blog_71539d240101fh8s.html" target="_blank" rel="noopener noreferrer">自定义 zsh 提示符</a></li></ul><h4 id="主题设置" tabindex="-1"><a class="header-anchor" href="#主题设置"><span>主题设置：</span></a></h4><p><code>oh my zsh</code> 提供了数十种主题，相关文件在<code>~/.oh-my-zsh/themes</code>目录下，你可以自己选择，也可以自己编写主题。</p><p>在<code>.zshrc</code>里找到<code>ZSH_THEME</code>，就可以设置主题了，默认主题是：<code>ZSH_THEME=”robbyrussell”</code></p><p><code>ZSH_THEME=&quot;random&quot;</code>，主题设置为随机，这样我们每打开一个窗口，都会随机在默认主题中选择一个。</p><h4 id="插件设置" tabindex="-1"><a class="header-anchor" href="#插件设置"><span>插件设置：</span></a></h4><p><code>oh my zsh</code>项目提供了完善的插件体系，相关的文件在<code>~/.oh-my-zsh/plugins</code>目录下，默认提供了 100 多种，大家可以根据自己的实际学习和工作环境采用，想了解每个插件的功能，只要打开相关目录下的 <code>zsh</code> 文件看一下就知道了。插件也是在<code>.zshrc</code>里配置，找到<code>plugins</code>关键字，你就可以加载自己的插件了，系统默认加载<code>git</code>，你可以在后面追加内容，如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git zsh-autosuggestions autojump zsh-syntax-highlighting<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="安装-zsh-autosuggestions" tabindex="-1"><a class="header-anchor" href="#安装-zsh-autosuggestions"><span>安装 <code>zsh-autosuggestions</code></span></a></h5><p>autosuggestions 它是 Oh-myszh 的一个插件，作用基本上是根据历史输入指令的记录即时的提示，能够很大的提高效率</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone git://github.com/zsh-users/zsh-autosuggestions <span class="token variable">$ZSH_CUSTOM</span>/plugins/zsh-autosuggestions</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加至 <code>plugins</code></p><h5 id="安装-zsh-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#安装-zsh-syntax-highlighting"><span>安装 <code>zsh-syntax-highlighting</code></span></a></h5><p>代码高亮插件可以让终端颜色更加绚丽</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加至 <code>plugins</code></p><p><code>plugins=(zsh-autosuggestions git zsh-syntax-highlighting)</code></p><h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图"><span>效果图</span></a></h2><figure><a href="https://imgchr.com/i/MarNhq" target="_blank" rel="noopener noreferrer"><img src="https://s2.ax1x.com/2019/11/15/MarNhq.md.png" alt="MarNhq.md.png" tabindex="0" loading="lazy"></a><figcaption>MarNhq.md.png</figcaption></figure><h3 id="卸载-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#卸载-oh-my-zsh"><span>卸载 oh my zsh</span></a></h3><p>直接在终端中，运行<code>uninstall_oh_my_zsh</code>既可以卸载。</p>`,40))])}const z=d(m,[["render",v],["__file","zsh.html.vue"]]),_=JSON.parse('{"path":"/posts/Linux/zsh.html","title":"更优雅强大的终端ZSH","lang":"zh-CN","frontmatter":{"title":"更优雅强大的终端ZSH","icon":"hk-zsh","subtitle":"Linux","date":"2019-07-24T00:00:00.000Z","star":true,"category":["Linux"],"tag":["terminal","Linux"],"description":"MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的 这里介绍一个更强大的终端神器 目录 背景介绍 在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算. shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)...","head":[["meta",{"property":"og:url","content":"https://www.cnmd.icu/posts/Linux/zsh.html"}],["meta",{"property":"og:site_name","content":"氚花盏-三个三"}],["meta",{"property":"og:title","content":"更优雅强大的终端ZSH"}],["meta",{"property":"og:description","content":"MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的 这里介绍一个更强大的终端神器 目录 背景介绍 在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算. shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s2.ax1x.com/2019/11/15/MarNhq.md.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:22:57.000Z"}],["meta",{"property":"article:tag","content":"terminal"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2019-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:22:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更优雅强大的终端ZSH\\",\\"image\\":[\\"https://s2.ax1x.com/2019/11/15/MarNhq.md.png\\"],\\"datePublished\\":\\"2019-07-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:22:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三个三\\",\\"url\\":\\"https://www.cnmd.icu\\",\\"email\\":\\"mailto:2029364173@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"安装 oh my zsh","slug":"安装-oh-my-zsh","link":"#安装-oh-my-zsh","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]}]},{"level":2,"title":"效果图","slug":"效果图","link":"#效果图","children":[{"level":3,"title":"卸载 oh my zsh","slug":"卸载-oh-my-zsh","link":"#卸载-oh-my-zsh","children":[]}]}],"git":{"createdTime":1712467377000,"updatedTime":1712467377000,"contributors":[{"name":"三个三","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":4.54,"words":1361},"filePathRelative":"posts/Linux/zsh.md","localizedDate":"2019年7月24日","excerpt":"<blockquote>\\n<p>MacOS 自带的 bash 作为几乎所有 Linux 发行版的默认终端，正常使用时没什么问题的</p>\\n<p>这里介绍一个更强大的终端神器</p>\\n</blockquote>\\n<h2>目录</h2>\\n\\n<h2>背景介绍</h2>\\n<p>在 unix 内核的操作系统中,当然现在衍生出好多分支,linux ,OS X 都算.</p>\\n<p>shell 就算和上面这些系统内核指令打交道的一座桥梁,我们通过键盘输入一种自己容易记忆识别的符号标识(shell 命令)</p>\\n<p>然后 shell 解析这种命令再反馈给内核去执行一系列操作.</p>\\n<p>zsh 和 shell 有什么关系呢?</p>","autoDesc":true}');export{z as comp,_ as data};
