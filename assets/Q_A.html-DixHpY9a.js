import{_ as p,c as r,b as t,g as o,a,o as n}from"./app-DMWp9eL9.js";const l={};function s(i,e){return n(),r("div",null,[e[0]||(e[0]=t("h1",{id:"前端-q-a",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前端-q-a"},[t("span",null,"前端-Q&A")])],-1)),e[1]||(e[1]=t("h2",{id:"浏览器是如何渲染页面的",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#浏览器是如何渲染页面的"},[t("span",null,"浏览器是如何渲染页面的？")])],-1)),e[2]||(e[2]=t("p",null,"当浏览器的网络线程收到 HTML 文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列。",-1)),e[3]||(e[3]=t("p",null,"在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。",-1)),o(" more "),e[4]||(e[4]=a('<hr><p>整个渲染流程分为多个阶段，分别是： HTML 解析、样式计算、布局、分层、绘制、分块、光栅化、画</p><p>每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。</p><p>这样，整个渲染流程就形成了一套组织严密的生产流水线。</p><hr><p>渲染的第一步是<strong>解析 HTML</strong>。</p><p>解析过程中遇到 CSS 解析 CSS，遇到 JS 执行 JS。为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载 HTML 中的外部 CSS 文件和 外部的 JS 文件。</p><p>如果主线程解析到<code>link</code>位置，此时外部的 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的 HTML。这是因为下载和解析 CSS 的工作是在预解析线程中进行的。这就是 CSS 不会阻塞 HTML 解析的根本原因。</p><p>如果主线程解析到<code>script</code>位置，会停止解析 HTML，转而等待 JS 文件下载好，并将全局代码解析执行完成后，才能继续解析 HTML。这是因为 JS 代码的执行过程可能会修改当前的 DOM 树，所以 DOM 树的生成必须暂停。这就是 JS 会阻塞 HTML 解析的根本原因。</p><p>第一步完成后，会得到 DOM 树和 CSSOM 树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在 CSSOM 树中。</p><hr><p>渲染的下一步是<strong>样式计算</strong>。</p><p>主线程会遍历得到的 DOM 树，依次为树中的每个节点计算出它最终的样式，称之为 Computed Style。</p><p>在这一过程中，很多预设值会变成绝对值，比如<code>red</code>会变成<code>rgb(255,0,0)</code>；相对单位会变成绝对单位，比如<code>em</code>会变成<code>px</code></p><p>这一步完成后，会得到一棵带有样式的 DOM 树。</p><hr><p>接下来是<strong>布局</strong>，布局完成后会得到布局树。</p><p>布局阶段会依次遍历 DOM 树的每一个节点，计算每个节点的几何信息。例如节点的宽高、相对包含块的位置。</p><p>大部分时候，DOM 树和布局树并非一一对应。</p><p>比如<code>display:none</code>的节点没有几何信息，因此不会生成到布局树；又比如使用了伪元素选择器，虽然 DOM 树中不存在这些伪元素节点，但它们拥有几何信息，所以会生成到布局树中。还有匿名行盒、匿名块盒等等都会导致 DOM 树和布局树无法一一对应。</p><hr><p>下一步是<strong>分层</strong></p><p>主线程会使用一套复杂的策略对整个布局树中进行分层。</p><p>分层的好处在于，将来某一个层改变后，仅会对该层进行后续处理，从而提升效率。</p><p>滚动条、堆叠上下文、transform、opacity 等样式都会或多或少的影响分层结果，也可以通过<code>will-change</code>属性更大程度的影响分层结果。</p><hr><p>再下一步是<strong>绘制</strong></p><p>主线程会为每个层单独产生绘制指令集，用于描述这一层的内容该如何画出来。</p><hr><p>完成绘制后，主线程将每个图层的绘制信息提交给合成线程，剩余工作将由合成线程完成。</p><p>合成线程首先对每个图层进行分块，将其划分为更多的小区域。</p><p>它会从线程池中拿取多个线程来完成分块工作。</p><hr><p>分块完成后，进入<strong>光栅化</strong>阶段。</p><p>合成线程会将块信息交给 GPU 进程，以极高的速度完成光栅化。</p><p>GPU 进程会开启多个线程来完成光栅化，并且优先处理靠近视口区域的块。</p><p>光栅化的结果，就是一块一块的位图</p><hr><p>最后一个阶段就是<strong>画</strong>了</p><p>合成线程拿到每个层、每个块的位图后，生成一个个「指引（quad）」信息。</p><p>指引会标识出每个位图应该画到屏幕的哪个位置，以及会考虑到旋转、缩放等变形。</p><p>变形发生在合成线程，与渲染主线程无关，这就是<code>transform</code>效率高的本质原因。</p><p>合成线程会把 quad 提交给 GPU 进程，由 GPU 进程产生系统调用，提交给 GPU 硬件，完成最终的屏幕成像。</p><h2 id="什么是-reflow" tabindex="-1"><a class="header-anchor" href="#什么是-reflow"><span>什么是 reflow？</span></a></h2><p>reflow 的本质就是重新计算 layout 树。</p><p>当进行了会影响布局树的操作后，需要重新计算布局树，会引发 layout。</p><p>为了避免连续的多次操作导致布局树反复计算，浏览器会合并这些操作，当 JS 代码全部完成后再进行统一计算。所以，改动属性造成的 reflow 是异步完成的。</p><p>也同样因为如此，当 JS 获取布局属性时，就可能造成无法获取到最新的布局信息。</p><p>浏览器在反复权衡下，最终决定获取属性立即 reflow。</p><h2 id="什么是-repaint" tabindex="-1"><a class="header-anchor" href="#什么是-repaint"><span>什么是 repaint？</span></a></h2><p>repaint 的本质就是重新根据分层信息计算了绘制指令。</p><p>当改动了可见样式后，就需要重新计算，会引发 repaint。</p><p>由于元素的布局信息也属于可见样式，所以 reflow 一定会引起 repaint。</p><h2 id="为什么-transform-的效率高" tabindex="-1"><a class="header-anchor" href="#为什么-transform-的效率高"><span>为什么 transform 的效率高？</span></a></h2><p>因为 transform 既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个「draw」阶段</p><p>由于 draw 阶段在合成线程中，所以 transform 的变化几乎不会影响渲染主线程。反之，渲染主线程无论如何忙碌，也不会影响 transform 的变化。</p><h2 id="阐述一下-js-的事件循环" tabindex="-1"><a class="header-anchor" href="#阐述一下-js-的事件循环"><span>阐述一下 JS 的事件循环</span></a></h2><p>事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。</p><p>在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。</p><p>过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。</p><p>根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，<mark>微队列的任务一定具有最高的优先级，必须优先调度执行</mark>。</p><h2 id="js-中的计时器能做到精确计时吗-为什么" tabindex="-1"><a class="header-anchor" href="#js-中的计时器能做到精确计时吗-为什么"><span>JS 中的计时器能做到精确计时吗？为什么？</span></a></h2><p>不行，因为：</p><ol><li>计算机硬件没有原子钟，无法做到精确计时</li><li>操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差</li><li>按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时又带来了偏差</li><li>受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差</li></ol>',64))])}const c=p(l,[["render",s],["__file","Q_A.html.vue"]]),m=JSON.parse('{"path":"/posts/Web/Q_A.html","title":"前端-Q&A","lang":"zh-CN","frontmatter":{"date":"2023-04-06T00:00:00.000Z","icon":"question","category":["浏览器"],"tag":["前端开发"],"dir":{"order":6},"description":"浏览器是如何渲染页面的？ 当浏览器的网络线程收到 HTML 文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列。 在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。","head":[["meta",{"property":"og:url","content":"https://www.cnmd.icu/posts/Web/Q_A.html"}],["meta",{"property":"og:site_name","content":"氚花盏-三个三"}],["meta",{"property":"og:title","content":"前端-Q&A"}],["meta",{"property":"og:description","content":"浏览器是如何渲染页面的？ 当浏览器的网络线程收到 HTML 文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列。 在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:22:57.000Z"}],["meta",{"property":"article:tag","content":"前端开发"}],["meta",{"property":"article:published_time","content":"2023-04-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:22:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端-Q&A\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:22:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三个三\\",\\"url\\":\\"https://www.cnmd.icu\\",\\"email\\":\\"mailto:2029364173@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"浏览器是如何渲染页面的？","slug":"浏览器是如何渲染页面的","link":"#浏览器是如何渲染页面的","children":[]},{"level":2,"title":"什么是 reflow？","slug":"什么是-reflow","link":"#什么是-reflow","children":[]},{"level":2,"title":"什么是 repaint？","slug":"什么是-repaint","link":"#什么是-repaint","children":[]},{"level":2,"title":"为什么 transform 的效率高？","slug":"为什么-transform-的效率高","link":"#为什么-transform-的效率高","children":[]},{"level":2,"title":"阐述一下 JS 的事件循环","slug":"阐述一下-js-的事件循环","link":"#阐述一下-js-的事件循环","children":[]},{"level":2,"title":"JS 中的计时器能做到精确计时吗？为什么？","slug":"js-中的计时器能做到精确计时吗-为什么","link":"#js-中的计时器能做到精确计时吗-为什么","children":[]}],"git":{"createdTime":1712467377000,"updatedTime":1712467377000,"contributors":[{"name":"三个三","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":6.68,"words":2003},"filePathRelative":"posts/Web/Q&A.md","localizedDate":"2023年4月6日","excerpt":"\\n<h2>浏览器是如何渲染页面的？</h2>\\n<p>当浏览器的网络线程收到 HTML 文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列。</p>\\n<p>在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。</p>\\n","autoDesc":true}');export{c as comp,m as data};
