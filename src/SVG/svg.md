## 目录

零、简介

一、SVG属性

二、css属性

三、形状

四、文本

五、标签

六、滤镜

七、渐变

八、动画

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/2B39FA22FD4D4FDEAEBB9C8D60AE4E9D/4112)

[脑图地址](http://www.xmind.net/m/fkYR)

----

## 零、简介

#### 1.定义：

* SVG 意为可缩放矢量图形（Scalable Vector Graphics）。
* SVG 是使用 XML 来描述二维图形和绘图程序的语言。

#### 2.优势：

* SVG 可被非常多的工具读取和修改（比如记事本）
* SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
* SVG 是可伸缩的
* SVG 图像可在任何的分辨率下被高质量地打印
* SVG 可在图像质量不下降的情况下被放大
* SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
* SVG 可以与 Java 技术一起运行
* SVG 是开放的标准
* SVG 文件是纯粹的 XML

#### 3.与canvas区别：

##### Canvas

Canvas 通过 JavaScript 来绘制 2D 图形。

Canvas 是逐像素进行渲染的。

在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

##### Canvas 与 SVG 的比较
下表列出了 canvas 与 SVG 之间的一些不同之处。

##### Canvas
* 依赖分辨率
* 不支持事件处理器
* 弱的文本渲染能力
* 能够以 .png 或 .jpg 格式保存结果图像
* 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

##### SVG
* 不依赖分辨率
* 支持事件处理器
* 最适合带有大型渲染区域的应用程序（比如谷歌地图）
* 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
* 不适合游戏应用


Canvas | SVG
---|---
位图 | 矢量图
依赖分辨率 | 不依赖分辨率
逐像素进行渲染 | 逐元素（DOM元素）进行渲染
通过JavaScript 绘制图形 | 基于XML，用文本格式的描述性语言来描述图像内容
不支持事件处理器。Canvas输出的是一整幅画布，能够以 .png 或 .jpg 格式保存结果图像 | 支持事件处理器。SVG绘制出的每个图形元素都是独立的DOM节点，能够方便的绑定事件
不能够改变大小，只能缩放显示 | 能够很好的处理图形大小的改变
放大或缩小时图形质量会有所损失 | 放大或缩小时图形质量不会有所损失
适合像素处理，动态渲染和大数据量绘制，最适合图像密集型的游戏（频繁重绘对象） | 适合静态图片展示，高保真文档查看和打印的应用场景，不适合游戏应用
如果图形位置发生变化，整个场景需要重新绘制，包括任何或许已被图形覆盖的对象 | 如果对象属性发生变化，浏览器能自动重现图形。也就是说，SVG绘图很容易编辑，只需要增加或移除相应的元素即可

#### 4.SVG的渲染顺序
　　SVG是严格按照定义元素的顺序来渲染的，这个与HTML靠z-index值来控制分层不一样。在SVG中，写在前面的元素先被渲染，写在后面的元素后被渲染。后渲染的元素会覆盖前面的元素，虽然有时候受透明度影响，看起来不是被覆盖的，但是SVG确实是严格按照先后顺序来渲染的。 
　　
#### 5.使用方式：

* SVG 文件可通过以下标签嵌入 HTML 文档：<embed>、<object> 或者 <iframe>。

创建`circle.svg`文件

```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red" />
</svg>
```

在样例文件中引用
>注意：object、iframe标签需要有闭合标签，不能使用简写形式

```html
<div>
	<span>使用 embed 标签</span>
	<embed src="circle.svg" type="image/svg+xml" />
</div>

<div>
	<span>使用 object 标签</span>
	<object data="circle.svg" type="image/svg+xml"></object>
</div>

<div>
	<span>使用 iframe 标签</span>
	<iframe src="circle.svg"></iframe>
</div>
```

样例html样式：

```css
* {
	padding: 0;
	margin: 0;
}
body {
	display: flex;
	flex-wrap: wrap;
}
div {
	width: 30%;
	margin: 10px;
	display: inline-flex;
	flex-direction: column;
	background: lightgray;
}
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/C52C4A53BEA648A4821F14308486C703/3644)

* SVG的代码可以直接嵌入到HTML页面中

```html
<div>
	<span>直接在HTML嵌入SVG代码</span>
	<svg>
	   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
	</svg>
</div>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/C7F3AA97421444C4A40A2AD12F020D9C/3646)

* 可以直接链接到SVG文件。

```html
<div>
	<span>链接到SVG文件</span>
	<a href="circle.svg">View SVG file</a>
</div>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/559268868DDB486196E36D29A66F9C24/3647)
![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/B243CDD39BC841AAA10AA3D92A82B08C/3649)

---

##### 约定：

==接下来样例都是直接写在html文档中，同时svg背景设为灰色（默认为white）==

例如：
```html
<!DOCTYPE html>
<html>
    <head>
    	<title>svg demo</title>
    	<style type="text/css">
    		* {
    			padding: 0;
    			margin: 0;
    		}
    		body {
    			display: flex;
    			flex-wrap: wrap;
    		}
    		svg {
    			margin: 10px;
    			background: lightgray;
    		}
    	</style>
    </head>
    <body>
    	<svg>
    		<rect
    			width="120"
    			height="120"
    			style="stroke:pink; stroke-width:1;"
    		/>
    	</svg>
    </body>
</html>
```
---

## 一、SVG属性

>SVG 代码都放在顶层标签`<svg>`之中

![https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/6B075A90FB5B41CEB8ED709D912E843D/3573](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/6B075A90FB5B41CEB8ED709D912E843D/3573)

```html
<svg
    width="100%"
    height="100%"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    class="svg1"
>
    <rect
        width="120"
        height="120"
        style="fill:rgb(0,255,0); stroke:rgb(0,0,0); stroke-width:1"
    />
</svg>
```
* xmlns : 定义 SVG 命名空间
* version : 定义所使用的 SVG 版本
* width \ height : 指定了 SVG 图像在 HTML 元素中所占据的宽度和高度。除了相对单位，也可以采用绝对单位（单位：像素）。如果不指定这两个属性，**SVG 图像默认大小是300像素（宽） x 150像素（高）**。


* 创建一个矩形，宽高都为120（默认单位px）
* style 属性用来定义 CSS 属性(SVG 的 CSS 属性与网页元素有所不同)
---

## 二、css属性

>SVG 的 CSS 属性与网页元素有所不同

>SVG 的 CSS 属性可以拆开使用，也可以放在style属性中

拆开使用：

```html
<svg>
	<rect
		width=120
		height=120
		fill=rgb(0,255,0)
		stroke-width=1
		stroke=rgb(0,0,0)
	/>
</svg>
```

说明：

* CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
(默认颜色black，上例中设为绿色)

现在将填充色改为蓝色（为了对照明显，边框改为粉色）：

```html
	<svg>
		<rect
			width="120"
			height="120"
			style="fill:blue; stroke:pink; stroke-width:1;"
		/>
	</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/54100C8BDCC9446AB207541D1EB6CB2D/3624)

如果没有设置填充颜色，则默认为black
```html
<svg>
	<rect
		width="120"
		height="120"
		style="stroke:pink; stroke-width:1;"
	/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/C7F9B979EF9E41948393FA2448DC4916/3623)

如果fill设置为none,则矩形内部就什么也不填充了(相当于透明)，下面例子是在大矩形下面有一个绿色小矩形，但是fill设置为none,就露出了小矩形。
```html
<svg>
	<rect
		width="20"
		height="20"
		fill=green
	/>
	<rect
		width="120"
		height="120"
		style="fill:none; stroke:pink; stroke-width:1;"
	/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/918809523F3B4F10A23C765C73EC8068/3626)

* CSS 的 stroke （ [strəʊk]  ）属性定义边框的颜色(未设置则默认为fill颜色，本例中设为黑色)：

```html
<svg>
	<rect x=1 y=1 width=50 height=100 fill="white" stroke="red" />
	<rect x=101 y=1 width=50 height=100 fill="white" stroke="blue" />
	<rect x=201 y=1 width=50 height=100 fill="white" stroke="black" />
</svg>
```

* CSS 的 stroke-width 属性定义边框的宽度（默认单位px）

```html
<svg>
	<rect x=1 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="2"/>
	<rect x=101 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="4"/>
	<rect x=201 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="6"/>
</svg>
```

![https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/84CCF2FDB54C435383AE194A18B26D05/3574](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/84CCF2FDB54C435383AE194A18B26D05/3574)

扩展说明1：边框其余属性
* CSS 的 stroke-linecap 属性定义不同类型的开放路径的终结

```html
<svg>
	<rect x=1 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="6" stroke-linetap="butt" />
	<rect x=101 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="6" stroke-linetap="round"/>
	<rect x=201 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="6" stroke-linetap="square"/>
</svg>
```

* CSS 的 stroke-dasharray 属性用于创建虚线

```html
<svg>
	<rect x=1 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="2" stroke-dasharray="5,5"/>
	<rect x=101 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="4" stroke-dasharray="10,10" />
	<rect x=201 y=1 width=50 height=100 fill="white" stroke="black" stroke-width="6" stroke-dasharray="20,10,5,5,5,10" />
</svg>
```

扩展说明2：透明度属性

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/169815EF97FD47E79151CE10BA4920A2/3693)
```html
<svg>
	<rect width=120 height=120 fill=green />
	<rect
		x="50"
		y="20"
		style="width: 120px; height: 120px;fill:blue; stroke:pink; stroke-width:5; opacity:0.5"
	/>
</svg>
```

* CSS 的 fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
* CSS 的 stroke-opacity 属性定义轮廓颜色的透明度（合法的范围是：0 - 1）
 
![https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/BF311534E99D4965B4A857984360259A/3572](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/BF311534E99D4965B4A857984360259A/3572)

```html
<svg>
	<rect
		x="50"
		y="20"
		width="120"
		height="120"
		style="fill:blue; stroke:pink; stroke-width:5; fill-opacity:0.1; stroke-opacity:0.9"
	/>
</svg>
<svg>
	<rect
		x="50"
		y="20"
		style="width: 120px; height: 120px;fill:blue; stroke:pink; stroke-width:5; opacity:0.5"
	/>
</svg>
```

* CSS opacity 属性用于定义了元素整体（包括fill和stroke）的透明值 (范围: 0 到 1)。

>当fill-opacity 值与 stroke-opacity值相同时，可以使用opacity替换两个属性

---

## 三、形状
#### 说明：
* 除了路径path, 其余形状属性名大小写不敏感

#### 预定义形状元素：

* 矩形 <rect>
* 圆形 <circle>
* 椭圆 <ellipse>
* 线 <line>
* 折线 <polyline>
* 多边形 <polygon>
* 路径 <path>

### 1.矩形 <rect>

* rect 元素的 width 和 height 属性可定义矩形的高度和宽度

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/7D8D30881CFF426A8DD8408A4EF3095C/3586)

```html
<svg>
	<rect
		width="120" height="120"
		style="fill:blue; stroke:pink; stroke-width:1;"
	/>
</svg>
```

* x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到SVG窗口左侧的距离是 0px）
* y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到SVG窗口顶端的距离是 0px）

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/85E30DDF3128489C9321E0BD10C7D4D8/3587)

```html
<svg>
	<rect
		x="50" y="20" 
		width="120" height="120"
		style="fill:blue; stroke:pink; stroke-width:5;"
	/>
</svg>
```

* rx 和 ry 属性可使矩形产生圆角。

>如果只设置了rx 没有设置ry ry的缺省值就是rx，这可以作为一种简便的写法

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/37982F915ACA4304A6F3AE0CD3D187C9/3597)

```html
<svg>
	<rect
		x="50"	y="20"
		rx="140" ry="20"
		width="120" height="120"
		style="fill:blue; stroke:pink; stroke-width:5;"
	/>
</svg>
<svg>
	<rect
		x="50" y="20"
		rx="20" ry="140"
		width="120" height="120"
		style="fill:blue; stroke:pink; stroke-width:5;"
	/>
</svg>
<svg>
	<rect
		x="50" y="20"
		ry="20"
		width="120" height="120"
		style="fill:blue; stroke:pink; stroke-width:5;"
	/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/28834673D7BB4C47A00D28A56FAF8CA3/4068)

>所谓圆角，简单理解就是对四个边角使用椭圆来进行替代，每个角为椭圆的四分之一部分。

>rx对应椭圆x轴半径，ry代表椭圆y轴半径

>当半径小于1/2 对应矩形的边长时，矩形部分边框依然为直线（如下图1，3，4）

>当半径大于1/2 对应矩形的边长时，会默认保持半径即为1/2矩形半径的形状（如下如2）

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/1AF1C823BBEF462AAE4CE5E500F42DAA/4069)

* transform属性进行变换图形

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/42DE670A48CB4140BD4A77F8E4012D6A/3937)

```html
<svg>
    <rect
	    x="30" y="30"
	    width="120" height="90"
	    rx="10" ry="10"
	    fill="#a0b3d6"
	    transform="rotate(45, 90 75)"
    />
</svg>
```

----

### 2.圆形 <circle> [ˈsɜ:kl] 


![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/685F6F4E0D0F43BDAF4F2AC093DA3037/3713)

```html
<svg>
    <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>
```

* cx和cy属性定义圆点的x和y坐标。如果省略cx和cy，圆的中心会被设置为(0, 0)
* r属性定义圆的半径

---

### 3.椭圆 <ellipse>  [ɪˈlɪps] 

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/7D55D43F8E0E4A5AAAE71E994FEB4A48/3717)

```html
<svg>
  <ellipse cx="300" cy="80" rx="100" ry="50"
  style="fill:yellow;stroke:purple;stroke-width:2"/>
</svg>
```

* cx属性定义的椭圆中心的x坐标
* cy属性定义的椭圆中心的y坐标
* rx属性定义的水平半径
* ry属性定义的垂直半径

多个椭圆构成图案demo1:

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/B56BBC8617154C75ACEB99688B732ECD/3715)

```html
<svg>
	<ellipse cx="150" cy="100" rx="140" ry="30" style="fill:purple" />
	<ellipse cx="150" cy="70" rx="130" ry="20" style="fill:lime" />
	<ellipse cx="150" cy="45" rx="120" ry="15" style="fill:yellow" />
</svg>
```

多个椭圆构成图案demo2:

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/2314840D1262416C8CE96721D2D6E058/3719)

```html
<svg>
	<ellipse cx="150" cy="50" rx="140" ry="30" style="fill:yellow" />
	<ellipse cx="150" cy="50" rx="90" ry="20" style="fill:lightgray" />
</svg>

<svg>
	<ellipse cx="150" cy="50" rx="140" ry="30" style="fill:yellow" />
	<ellipse cx="120" cy="50" rx="90" ry="20" style="fill:lightgray" />
</svg>
```

---

### 4.直线 - <line>

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/AB96FD8312924E5486D4C6872D9F9FF5/3734)

```html
<svg>
    <line x1="0" y1="0" x2="200" y2="200"
        style="fill:green; stroke:red; stroke-width:2"/>
</svg>
```
* x1 属性在 x 轴定义线条的开始
* y1 属性在 y 轴定义线条的开始
* x2 属性在 x 轴定义线条的结束
* y2 属性在 y 轴定义线条的结束

>直线由边框构成，故设置fill填充没有效果

---

### 5.折线 - <polyline> [ˈpɒli] 

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/60C163439D92483DB9432B77CD12E161/3763)

```html
<svg>
	<polyline
		points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
		style="fill:none; stroke:red; stroke-width:4;"
	/>
</svg>

<svg>
	<polyline
		points="0 40 40 40 40 80 80 80 80 120 120 120 120"
		style="fill:none; stroke:red; stroke-width:4;"
	/>
</svg>
```

* points 属性定义多边形每个角的 x 和 y 坐标
>通过上面两个demo可以看出，point点坐标的x、y轴坐标之间可以使用`,`分隔，也可以直接使用空格，最后如果不成对的话，最后一个点会被忽略，建议同一个点的坐标之间添加`,`

另外一个折线demo:

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/EA8DC8A483394868B2981098DD0202F9/3764)

```html
<svg>
	<polyline
		points="20,20 40,25 60,40 80,120 120,140 140,140"
		style="stroke:green; stroke-width:3;"
	/>
</svg>
<svg>
	<polyline
		points="20,20 40,25 60,40 80,120 120,140 140,140"
		style="fill:none; stroke:green; stroke-width:3;"
	/>
</svg>
<svg>
	<polyline
		points="20,20 40,25 60,40 80,120 120,140 140,140"
		style="fill:white; stroke:green; stroke-width:3;"
	/>
</svg>
```

>这里针对fill值列出三个列子，可以看出来fill定义的空间为始末两点间连线与其他点线之间构成的封闭空间

---

### 6.多边形 - <polygon> [ˈpɒlɪgən] 

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/F3BDCBB62720427B98F6C5C49A54911D/3787)

```html
<svg>
	<polygon
		points="20,20 40,25 60,40 80,120 120,140 140,120 30,60"
		style="fill:white; stroke:green; stroke-width:3;"
	/>
</svg>
<svg>
	<polygon
		points="0 40 40 40 40 80 80 80 80 120 120 120 120"
		style="fill:white; stroke:red; stroke-width:4;"
	/>
</svg>
```

>直观的感受就是多边形就是将折线始末两点进行连接所形成的封闭图形

多边形设置fill取值demo:
1. 默认黑色
2. none透明
3. 特定颜色

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/1AEA2756BBAA466A9DA256D33A1A26F7/3786)

```html
<svg>
	<polygon
		points="200,10 250,140 160,145"
		style="stroke:purple; stroke-width:1;"
	/>
</svg>

<svg>
	<polygon
		points="200,10 250,140 160,145"
		style="fill:none; stroke:purple; stroke-width:1;"
	/>
</svg>

<svg>
	<polygon
		points="200,10 250,140 160,145"
		style="fill:lime; stroke:purple; stroke-width:1;"
	/>
</svg>
```

在上面多边形基础上多添加一个点后效果：

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/4C9BBD11830E421BBA4C3D135EDE1E8D/3790)

```html
<svg>
	<polygon
		points="200,10 250,140 160,145 100,20"
		style="fill:lime; stroke:purple; stroke-width:1;"
	/>
</svg>
```

绘制一些更复杂的多边形：

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/0FFBC81AAFFD4BD7A7202E5B33B590F7/3791)

```html
<svg>
	<polygon
		points="100,10 40,180 190,60 10,60 160,180"
		style="fill:lime; stroke:purple; stroke-width:5; fill-rule:nonzero;"
	/>
</svg>
<svg>
  	<polygon
  		points="100,10 40,180 190,60 10,60 160,180"
  		style="fill:lime; stroke:purple; stroke-width:5; fill-rule:evenodd;"
  	/>
</svg>
```

* fill-rule 属性用于指定使用哪一种算法去判断画布上的某区域是否属于该图形“内部” （内部区域将被填充）。对一个简单的无交叉的路径，哪块区域是“内部” 是很直观清除的。但是，对一个复杂的路径，比如自相交或者一个子路径包围另一个子路径，“内部”的理解就不那么明确了。
fill-rule 属性提供两种选项用于指定如何判断图形的“内部”:

>nonzero

字面意思是“非零”。按该规则，要判断一个点是否在图形内，从该点作任意方向的一条射线，然后检测射线与图形路径的交点情况。从0开始计数，路径从左向右穿过射线则计数加1，从右向左穿过射线则计数减1。得出计数结果后，如果结果是0，则认为点在图形外部，否则认为在内部。

>evenodd

字面意思是“奇偶”。按该规则，要判断一个点是否在图形内，从该点作任意方向的一条射线，然后检测射线与图形路径的交点的数量。如果结果是奇数则认为点在内部，是偶数则认为点在外部。

----

### 7.路径 - <path>  [pɑ:θ] 

* M = moveto    移动
* L = lineto    线
* H = horizontal lineto 水平的
* V = vertical lineto   垂直的
* C = curveto   曲线
* S = smooth curveto    平滑
* Q = quadratic Bézier curve  二次方贝塞尔曲线
* T = smooth quadratic Bézier curveto
* A = elliptical Arc 椭圆
* Z = closepath 关闭路径

>绘制指令分为绝对坐标指令和相对坐标指令两种，这两种指令使用的字母是一样的，就是大小写不一样，绝对指令使用大写字母，坐标也是绝对坐标；相对指令使用对应的小写字母，点的坐标表示的都是偏移量。

##### 绝对坐标绘制指令
>这组指令的参数代表的是绝对坐标。假设当前画笔所在的位置为(x0,y0)，则下面的绝对坐标指令代表的含义如下所示：

指令 | 参数 | 说明
---|---|--
M | x y | 将画笔移动到点(x,y)
L | x y | 画笔从当前的点绘制线段到点(x,y)
H | x  | 画笔从当前的点绘制水平线段到点(x,y0)
V | y  | 画笔从当前的点绘制竖直线段到点(x0,y)
A | rx ry x-axis-rotation large-arc-flag sweep-flag x y | 画笔从当前的点绘制一段圆弧到点(x,y)
C | x1 y1, x2 y2, x y | 画笔从当前的点绘制一段三次贝塞尔曲线到点(x,y)
S | x2 y2, x y | 特殊版本的三次贝塞尔曲线(省略第一个控制点)
Q | x1 y1, x y  | 绘制二次贝塞尔曲线到点(x,y)
T | x y | 特殊版本的二次贝塞尔曲线(省略控制点)
Z | 无参数 | 绘制闭合图形，如果d属性不指定Z命令，则绘制线段，而不是封闭图形。


* d：一系列绘制指令和绘制参数(点)组合成。
* M路径起始点
* L路径经过点（大写为绝对定位）（小写为相对定位）
* Z结束路径

```html
<svg>
	<path d="M150, 0 L75, 200 L225, 200 Z" style="fill:none; stroke:greenyellow; stroke-width:2" />
</svg>

<svg>
	<path d="M150, 0 l-75, 200 l150, 0 Z" style="fill:none; stroke:greenyellow; stroke-width:2" />
</svg>
```

>为了直观，标红了经过的各个点坐标

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/600804C2A6574C3E9121B9B9C50C2455/3842)

如果Z设置会将始末两点相连; 如果没有设置Z结束，将不会连接，其效果如下

```html
<svg>
	<path d="M150, 0 L75, 200 L225, 200 " style="fill:none; stroke:greenyellow; stroke-width:2" />
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/2B684E15D9CA49C58133A669D635616D/3841)

* A设置椭圆路径

```html
<svg>
	<path d="M75,120 A1,1 0 0,0 100,0" style="fill:none; stroke:lightblue; stroke-width:2" />
	<path d="M75,20 a1,1 0 0,0 100,0" style="fill:none; stroke:greenyellow; stroke-width:2" />
</svg>
```
![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/056C8B65579C4C669A4182B53AEA8565/3883)

* C设置曲线路径

```html
<svg>
	<path
		d="M153 334
			C153 334 151 334 151 334
			C151 339 153 344 156 344
			C164 344 171 339 171 334
			C171 322 164 314 156 314
			C142 314 131 322 131 334
			C131 350 142 364 156 364
			C175 364 191 350 191 334
			C191 311 175 294 156 294
			C131 294 111 311 111 334
			C111 361 131 384 156 384
			C186 384 211 361 211 334
			C211 300 186 274 156 274"
		style="fill:none;stroke:greenyellow;stroke-width:2"
	/>
</svg>

<svg>
	<path
		d="M153 334
			C153 334 151 334 151 334
			C151 339 153 344 156 344
			C164 344 171 339 171 334
			C171 322 164 314 156 314
			C142 314 131 322 131 334
			C131 350 142 364 156 364
			C175 364 191 350 191 334
			C191 311 175 294 156 294
			C131 294 111 311 111 334
			C111 361 131 384 156 384
			C186 384 211 361 211 334
			C211 300 186 274 156 274"
		style="fill:white;stroke:greenyellow;stroke-width:2"
	/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/D0D4EF25517F4169A1D6123344A82F59/3867)

* Q设置二次方贝塞尔曲线路径

```html
<svg>
	<path
		d="M 100 350 q 150 -300 300 0"
		style="fill:none; stroke:lightblue; stroke-width:5;"
	/>
	<path
		d="M 100 150 Q 150 -300 300 0"
		style="fill:none; stroke:lightgreen; stroke-width:5;"
	/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/27EC699B57764427B786D4EC2B83F1BF/3886)

---

## 四、文本 <text>

><text> 元素用于定义文本。

* x属性和y属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用class或style属性指定。

```html
<svg>
	<text x="0" y="15" fill="red">I love SVG</text>
</svg>
<svg>
	<text x="0" y="15" fill="red" stroke="black">I love SVG</text>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/087FA6A3270F47458B7A5B0DED327858/3903)

* font-size 定义字体大小
* font-family定义字体

```html
<svg>
    <text fill="#ffffff" font-size="45" font-family="Verdana" x="65" y="75">SVG</text>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/134DFDFA3EDB483A9893336534CA17FC/3998)


* transform属性定义变换

```html
<svg>
	<text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/05EEBA87D6C6493A8A4E784302857B90/3904)

* tspan标签

```html
<svg>
	<text x="10" y="20" style="fill:red;">
		Several lines:
		<tspan x="10" y="45">First line</tspan>
		<tspan x="10" y="70">Second line</tspan>
	</text>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/40CCA985215046C8851D6E0FFA5C44A3/3917)

* 可以将文字包在超链接中

```html
<svg>
	<a href="http://www.baidu.com/" target="_blank">
		<text x="0" y="15" fill="red">go to baidu.com</text>
	</a>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/9EEAC05260C44956BA10B4C7CF985FCD/3919)

* textPath标签指定文字路径

```html
<svg>
	<defs>
		<path id="path1" d="M75,20 a1,1 0 0,0 100,0" />
	</defs>
	<text x="10" y="100" style="fill:red;">
		<textPath href="#path1">I love SVG I love SVG</textPath>
	</text>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/2DA0350F7E714916A6D98D857AF5F4F1/3922)

---

## 五、标签

##### <defs>

>用于自定义形状，它内部的代码不会显示，仅供引用。

使用指定href方式进行绑定，可以指定命名空间

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<path id="path1" d="M75,20 a1,1 0 0,0 100,0" />
	</defs>
	<text x="10" y="100" style="fill:red;">
		<textPath xlink:href="#path1">I love SVG I love SVG</textPath>
	</text>
</svg>
```

##### <use>

>用于复制一个形状

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/490F677361BC46668DBC33CA8C14A6F3/3940)

```html
<svg>
  <circle id="myCircle" cx="5" cy="5" r="4"/>

  <use href="#myCircle" x="10" y="0" fill="blue" />
  <use href="#myCircle" x="20" y="0" fill="white" stroke="blue" />
</svg>
```
`<use>`的`href`属性指定所要复制的节点，x属性和y属性是`<use>`左上角的坐标。另外，还可以指定width和height坐标。

如果引用的图形没有设置某些属性，则引用中存在的值会赋予给被引用的图形（相当于继承），

如果被引用的图形中已经存在某些属性，则无法被替换（相当于当前元素权值最高）

##### <g>
>用于将多个形状组成一个组（group），方便复用。

```html
<svg>
	<g id="myCircle1" fill="blue" >
		<text x="25" y="20">圆形</text>
		<circle cx="50" cy="50" r="20" fill="red"/>
		<circle cx="50" cy="75" r="20" />
		<circle cx="50" cy="100" r="20" fill="yellow"/>
	</g>

	<use href="#myCircle1" x="100" y="0" />
	<use href="#myCircle1" x="200" y="0" fill="white" stroke="blue" />
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/884C1A7EA3D34461BAFD2DE6D52F444C/3941)

属性赋值优先级如上

使用三种标签的demo:

```html
<svg>
	<defs>
		<g id="myCircle2">
			<text x="25" y="20">圆形</text>
			<circle cx="50" cy="50" r="20"/>
		</g>
	</defs>

	<use href="#myCircle2" x="0" y="0" />
	<use href="#myCircle2" x="100" y="0" fill="blue" />
	<use href="#myCircle2" x="200" y="0" fill="white" stroke="blue" />
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/1723116B135A40BD8F40FF4E6437CC30/3963)


##### <pattern>  （ [ˈpætn] 模式;图案;花样 ）

>用于自定义一个形状，该形状可以被引用来平铺一个区域。

```html
<svg>
	<defs>
		<pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
			<circle fill="#bee9e8" cx="25" cy="25" r="20" />
		</pattern>
	</defs>
	<rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/5C3C8DF5A1304E349CF4DD3775C23EB1/3962)

上面代码中，<pattern>标签将一个圆形定义为dots模式。patternUnits="userSpaceOnUse"表示<pattern>的宽度和长度是实际的像素值。然后，指定这个模式去填充下面的矩形。


##### <image>

>用于插入图片文件。

```
<svg>
	<image href="../IMG/jpg1.jpg" width="100%" height="100%"/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/86BB00B07C7A4FAFA9E497D2157B99F2/3969)

上面代码中，<image>的href属性表示图像的来源。

----

## 六、滤镜
>SVG滤镜用来增加对SVG图形的特殊效果。

SVG可用的滤镜是：

* feBlend - 与图像相结合的滤镜
* feColorMatrix - 用于彩色滤光片转换
* feComponentTransfer
* feComposite
* feConvolveMatrix
* feDiffuseLighting
* feDisplacementMap
* feFlood
* feGaussianBlur
* feImage
* feMerge
* feMorphology
* feOffset - 过滤阴影
* feSpecularLighting
* feTile
* feTurbulence
* feDistantLight - 用于照明过滤
* fePointLight - 用于照明过滤
* feSpotLight - 用于照明过滤

备注 除此之外，可以在每个 SVG 元素上使用多个滤镜


##### <filter> [ˈfɪltə(r)]

>`<filter>`标签用来定义SVG滤镜。`<filter>`标签使用必需的id属性来定义向图形应用哪个滤镜

##### <feGaussianBlur>['gaʊsɪən] [blɜ:(r)]
>用于创建高斯模糊效果

```html
<svg>
	<defs>
		<filter id="f1" x="0" y="0">
			<feGaussianBlur in="SourceGraphic" stdDeviation="8" />
		</filter>
	</defs>
	<rect
		x=25 y=25 width="90" height="90"
		stroke="lightgreen" stroke-width="3" fill="lightyellow"
	/>
	<rect
		x=125 y=25 width="90" height="90"
		stroke="lightgreen" stroke-width="3" fill="lightyellow" filter="url(#f1)"
	/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/F28B2A8EB5294920A946DA8B7B35ECEB/3987)

* <filter> 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
* filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符
* 滤镜效果是通过 <feGaussianBlur> 标签进行定义的。fe 后缀可用于所有的滤镜
* in="SourceGraphic" ( [sɔ:s] [ˈgræfɪk] ) 这个部分定义了由整个图像创建效果


* <feGaussianBlur> 标签的 stdDeviation  ( [ˌdi:viˈeɪʃn] 偏离 )属性可定义模糊的程度

```html
<svg>
	<defs>
		<filter id="f2" x="0" y="0"> <feGaussianBlur in="SourceGraphic" stdDeviation="0" /> </filter> 
		<filter id="f3" x="0" y="0"> <feGaussianBlur in="SourceGraphic" stdDeviation="1" /> </filter>
		<filter id="f4" x="0" y="0"> <feGaussianBlur in="SourceGraphic" stdDeviation="2" /> </filter>
		<filter id="f5" x="0" y="0"> <feGaussianBlur in="SourceGraphic" stdDeviation="4" /> </filter>
		<filter id="f6" x="0" y="0"> <feGaussianBlur in="SourceGraphic" stdDeviation="8" /> </filter>
		<filter id="f7" x="0" y="0"> <feGaussianBlur in="SourceGraphic" stdDeviation="16" /> </filter>
	</defs>
	<rect x=5 y=25 width="30" height="90" stroke="lightgreen" stroke-width="3" fill="lightyellow" />
	<rect x=45 y=25 width="30" height="90" stroke="lightgreen" stroke-width="3" fill="lightyellow" filter="url(#f2)"/>
	<rect x=85 y=25 width="30" height="90" stroke="lightgreen" stroke-width="3" fill="lightyellow" filter="url(#f3)"/>
	<rect x=125 y=25 width="30" height="90" stroke="lightgreen" stroke-width="3" fill="lightyellow" filter="url(#f4)"/>
	<rect x=165 y=25 width="30" height="90" stroke="lightgreen" stroke-width="3" fill="lightyellow" filter="url(#f5)"/>
	<rect x=205 y=25 width="30" height="90" stroke="lightgreen" stroke-width="3" fill="lightyellow" filter="url(#f6)"/>
	<rect x=245 y=25 width="30" height="90" stroke="lightgreen" stroke-width="3" fill="lightyellow" filter="url(#f7)"/>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/DE611CDBF03D4E19BA07489F83E09DAB/3988)


```html
<svg>
	<defs>
		<filter id="f12" x="0" y="0" width="200%" height="200%">
			<feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
			<feBlend in="SourceGraphic" in2="offOut" mode="normal" />
		</filter>
	</defs>
	<rect
		width="90" height="90"
		stroke="green" stroke-width="3" fill="yellow" filter="url(#f12)"
	/>
</svg>
```

---

## 七、渐变
>渐变是一种从一种颜色到另一种颜色的平滑过渡。另外，可以把多个颜色的过渡应用到同一个元素上。

SVG渐变主要有两种类型：

* Linear （ [ˈlɪniə(r)] ）
* Radial （ [ˈreɪdiəl] ）
 
##### <linearGradient>  [ˈgreɪdiənt] 
>线性渐变

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/048A82265512428DAACCF7A75A75D295/4006)

```html
<svg>
	<defs>
		<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
			<stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
		</linearGradient>
	</defs>
	<rect x="10" y="10" width="200" height="100" fill="url(#grad1)" />
</svg>
```

```html
<svg>
	<defs>
		<linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
			<stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
		</linearGradient>
	</defs>
	<rect x="10" y="10" width="200" height="100" fill="url(#grad2)" />
</svg>
```

```html
<svg>
	<defs>
		<linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
			<stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
		</linearGradient>
	</defs>
	<rect x="10" y="10" width="200" height="100" fill="url(#grad3)" />
</svg>
```

线性渐变可以定义为水平，垂直或角渐变：

* 当y1和y2相等，而x1和x2不同时，可创建水平渐变
* 当x1和x2相等，而y1和y2不同时，可创建垂直渐变
* 当x1和x2不同，且y1和y2不同时，可创建角形渐变

>x, y 值的取值范围也可以为[0~1]，对应百分比

##### <radialGradient>
>径向渐变

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/CBB074D3C07F40A7A363185D558344FF/4007)

```html
<svg>
	<defs>
		<radialGradient id="grad11" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
			<stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
			<stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
		</radialGradient>
	</defs>
	<ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad11)" />
</svg>

<svg>
	<defs>
		<radialGradient id="grad12" cx="20%" cy="40%" r="50%" fx="50%" fy="50%">
			<stop offset="0%" style="stop-color:rgb(200,200,200); stop-opacity:0"/>
			<stop offset="100%" style="stop-color:rgb(0,0,255); stop-opacity:1"/>
		</radialGradient>
	</defs>
	<ellipse cx="200" cy="70" rx="85" ry="55" fill=url(#grad12) />
</svg>
```
* `<radialGradient>`标签的 id 属性可为渐变定义一个唯一的名称


* <stop> 标签定义了梯度停点（渐变点） 渐变颜色范围可以由两个或两个以上的颜色组成。每种颜色用一个<stop>标签指定。


* offset 表示梯度值，用来定义渐变色开始和结束, 0%是最上层（最内侧），100%是最下层（最外层）


* （cx，cy）为最下层（最外层圆）
* （fx，fy）为最上层（最内层圆）渐变中心点
* r 为最内层和最外层（最上层和最下层）渐变半径


* 填充属性把ellipse元素链接到此渐变

---

## 八、动画

##### <animate>标签
>用于产生动画效果。

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/1687FB46209A4415AB65AC6B56531FB4/4035)

```html
<svg>
    <circle cx="30" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
        <animate attributeName="cx" from="30" to="100" dur="5s" repeatCount="indefinite" />
    </circle>
</svg>

<svg>
	<rect x="10" y="10" width="50" height="50" fill="orange">
		<animate attributeName="x" from="0" to="200" dur="2s" repeatCount="indefinite" />
	</rect>
</svg>

<svg>
	<rect x="10" y="10" width="50" height="50" fill="orange">
		<animate attributeName="width" to="200" dur="2s" repeatCount="indefinite" />
	</rect>
</svg>
```

attributeName：发生动画效果的属性名。
from：单次动画的初始值。
to：单次动画的结束值。
dur：单次动画的持续时间。
repeatCount：动画的循环模式。

可以在多个属性上面定义动画。

```html
<svg>
	<rect x="10" y="10" width="250" height="50" fill="orange">
		<animate attributeName="x" from="0" to="200" dur="2s" repeatCount="indefinite" />
		<animate attributeName="width" to="50" dur="2s" repeatCount="indefinite" />
	</rect>
</svg>
```

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/D9E1F2C6663B44F5ABACCC6963F06DCD/4037)

（这个矩形的宽度在减少，并且在x轴方向移动）

##### <animateTransform>标签

><animate>标签对 CSS 的transform属性不起作用，如果需要变形，就要使用<animateTransform>标签。

![image](https://note.youdao.com/yws/public/resource/755b427f508ed4a9880c0c2f35cf03fe/xmlnote/D5C807601E7A4D0AAF6F2DD4E65793E9/4048)

```html
<svg>
    <rect
    	x="20" y="50" width="15" height="15"
    	fill="#4bc0c8" stroke=none stroke-width="1"
    	transform="rotation"
    >
        <animateTransform
        	attributeType="XML"
        	attributeName="transform" type="rotate"
        	begin="0s" dur="5s"
        	from="20 60 60" to="360 100 60"
        	repeatCount="indefinite"
        />
    </rect>
    <!-- <circle cx=60 cy=60 r=3 /> -->
	<!-- <circle cx=100 cy=60 r=3 /> -->
</svg>
```
上面代码中，<animateTransform>的效果为旋转（rotate），

这时from和to属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转中心的坐标。

from="0 200 200"表示开始时，角度为0，围绕(200, 200)开始旋转；

to="360 400 400"表示结束时，角度为360，围绕(400, 400)旋转。

---
