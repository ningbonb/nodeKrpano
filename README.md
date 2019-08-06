## 前言
Krpano 可以方便快速的构建全景场景或全景视频，[官网地址](https://krpano.com) 。

### 预览地址
[http://go.163.com/2015/public/team/ningbo/krpano/comn01/][demo]

### 版本说明
本篇文章使用的版本为：`krpano 1.19-pr16 (build 2018-04-04)` ，操作系统为 ` Windows` 。

## 目录

* [Krpano 功能简介](#krpano-功能简介)
* [vtour 文件夹简介](#vtour-文件夹简介)
* [krpano XML 结构与简介](#krpano-xml-结构与简介)
* [常用设置](#常用设置)

## Krpano 功能简介
官方软件安装之后，解压后的文件夹里主要有六种全景的模式，其中 `MAKE　PANO` 为单全景模式， `MAKE VTOUR` 为多个全景合集的 **虚拟漫游** 。

### Krpano 功能简介目录
* [MAKE PANO (NORMAL)](#make-pano-normal)
* [MAKE PANO (MULTIRES)](#make-pano-multires)
* [MAKE PANO (SINGLESWF)](#make-pano-singleswf)
* [MAKE VTOUR (NORMAL)](#make-vtour-normal)
* [MAKE VTOUR (MULTIRES)](#make-vtour-multires)
* [Convert SPHERE to CUBE](#convert-sphere-to-cube)
* [Convert CUBE to SPHERE](#convert-cube-to-sphere)
* [Encrypt XML](#encrypt-xml)
	
### MAKE PANO (NORMAL)

#### 简介

1. 该模式为基础 360 单全景模式；
2. 该模式生成的全景为 **单分辨率** 全景；

#### 配置路径

- 默认模版/皮肤配置文件: `skin/defaultskin.xml`

----------

### MAKE PANO (MULTIRES)

#### 简介

1. 该模式为 360 单全景模式；
2. 多分辨率，可快速动态加载。

#### 配置路径

默认模版/皮肤配置文件: `skin/defaultskin.xml`

----------

### MAKE PANO (FLAT)

#### 简介

1. 该模式为平铺模式；
2. 仅支持 `Flash` 。

#### 配置路径

- 默认模版/皮肤配置文件: `skin/defaultskin.xml`

----------

### MAKE VTOUR (NORMAL)

#### 简介

1. 生成普通（单分辨率）全景并将它们整合到一个虚拟漫游中；
2. 全部全景图将会一次性载入，默认方块最大边长为 2048 像素（可以在配置文件中修改）；
3. 包含一个包括导航按钮、可滚动缩略图的默认皮肤。

#### 配置路径

- 默认模版/皮肤配置文件: `skin/vtourskin.xml`

----------

### MAKE VTOUR (MULTIRES)

#### 简介

1. 生成多分辨率全景并将它们整合到一个虚拟漫游中；
2. 动态载入，没有尺寸/分辨率限制；
3. 包含一个包括导航按钮、可滚动缩略图的默认皮肤。

#### 配置路径

- 默认模版/皮肤配置文件: `skin/vtourskin.xml`

----------

### Convert SPHERE to CUBE

#### 简介

1. 将球面图像转换为立方体图。

----------


### Convert CUBE to SPHERE

#### 简介

1. 将六张立方体图像转换成一张球面全景图。

----------

### Encrypt XML

#### 简介

1. 将 `xml` 文件拖放进 `droplet` 进行加密；
2. 加密过程中 `xml` 文件会自动被压缩；

----------


### 自定义 droplet

如果内置 `droplet` 不能满足需求或者需要对一些参数进行自定义。只要复制并重命名一个配置文件与皮肤配置文件，然后复制并重命名一个 `droplet `，修改里面的配置路径即可。

----------


## vtour 文件夹简介

###  vtour 文件夹说明目录
* [vtour 文件夹结构](#vtour-文件夹结构)
* [vtour 运作机制](#vtour-运作机制)

### vtour 文件夹结构

```
vtour/
| -- panos/             # 存放全景切片图片的文件夹
| -- skin/              # 存放皮肤相关文件
| -- plugins/           # 用来存放插件
| -- tour.swf           # krpano flash viewer
| -- tour.js            # krpano HTML5 viewer
| -- tour.xml           # 生成全景的相关配置
| -- tour.html          # 用来浏览全景的页面，需要本地服务环境
| -- tour_editor.html   # 添加热点（hotspot）与初始化视角的设置
```

### vtour 运作机制

```html
<div id="pano"></div>
<script src="tour.js"></script>
<script>
embedpano({
    swf: "tour.swf", // 有则表示加载 flash 引擎，如果设置 html5:only 则不需要该值
    xml: "tour.xml", // 启动时的配置文件
    target: "pano", // 要渲染到的目标容器 ID
    html5: "only", // 如果有需要用到 flash ，可设置为 auto
    //id: "krpanoSWFObject", // 默认的 krpano 对象，每一个 viewer 对应唯一 id ，与 JS 交互时要用到
    mobilescale: 1.0, //移动设备缩放，1 表示不缩放，默认 0.5
    passQueryParameters: false //是否接受 URL 传参，例如：tour.html?html5=only&startscene=scene2
});
</script>
```

## krpano XML 结构与简介

```xml
<krpano>
    <include>
    <preview>
    <image>
    <view>
    <area>
    <display>
    <control>
    <cursors>
    <autorotate>
    <plugin>
    <layer>
    <hotspot>
    <style>
    <events>
    <action>
    <contextmenu>
    <network>
    <memory>
    <security>
    <textstyle>
    <lensflareset>
    <lensflare>
    <data>
    <scene>
</krpano>
```

### krpano XML结构目录

* [Krpano 内置元素说明](#krpano-内置元素说明)

### Krpano 内置元素说明

#### 01.krpano

`krpano` 元素是 `krpano xml` 文件的根元素。任何一个 `krpano xml` 文件内的其它元素都要被 `krpano` 元素所嵌套。

#### 02.include

`include` 元素用来引入其它 `xml` 文件的内容。例如我们常要用到的 `vtourskin.xml` 就是使用 `include` 嵌入到主 `xml` 中。

#### 03.preview

预览图设置，也就是全景图完全载入之前的模糊图像。因为体积较小，因此载入速度较快，会在全景图之前先载入，避免黑屏。

#### 04.image

`image` 元素用来设置全景图，包括全景图类型，渐进分辨率切片显示等。

#### 05.view

`view` 元素控制全景的视野，例如起始视角、视角限制与缩放等等。当要设置限制视角或设定特定的初始视角时，需要自行设定或使用插件获取代码。

#### 06.area

`area` 元素控制全景图在浏览器窗口中显示区域大小。

#### 07.display

控制全景图的显示品质。

#### 08.control

设置鼠标、键盘以及触摸设备对全景浏览的控制方式。

#### 09.cursors

设置鼠标光标样式。

#### 10.autorotate

控制自动旋转。

#### 11.plugin

用来调用插件、插入图片或生成容器。

#### 12.layer

与 `plugin` 作用相同，只是名称不同。

#### 13.hotspot

热点，可在 3D 空间中插入图片，使之随着 3D 空间一同运动，可制作很多特效。

#### 14.style

可以保存其它元素的属性子集。

#### 15.events

可调用各类型事件，例如全景载入的不同阶段以及鼠标触发的不同行为等。

#### 16.action

自定义动态代码。

#### 17.contextmenu

定义右键菜单的内容。

#### 18.network

控制图像的下载、缓存与解码。

#### 19.menory

控制全景图在设备中的存储。

#### 20.security

`Flashplayer` 和 `HTML5` 相关的安全/跨域设置。

#### 21.lensflareset

镜头眩光的设置（目前只能在 `flash` 下使用）。

#### 22.lensflare

生成镜头眩光（目前只能在 `flash` 下使用）。

#### 23.data

可放置任意的数据。

#### 24.scene

可放置任意 `krpano` 元素。每个 `scene` 元素只有在被 `loadscene` 时才会被载入到浏览器进行解析。

## 常用设置

### 常用设置目录

* [小行星开场](#小行星开场)
* [加载动画](#加载动画)
* [修改右键菜单](#修改右键菜单)
* [自定义热点](#自定义热点)
* [隐藏皮肤](#隐藏皮肤)
* [添加动态热点](#动态热点)
* [动态热点添加始终显示的文字](#动态热点添加始终显示的文字)
* [热点和或图层在鼠标点击或鼠标悬停时进入动态模式](#热点和或图层在鼠标点击或鼠标悬停时进入动态模式)
* [拖拽热点](#拖拽热点)
* [添加简单的全景视频](#添加简单的全景视频)
* [添加雨雪特效](#添加雨雪特效)
* [自动旋转](#自动旋转)
* [无按钮控制的自动旋转](#无按钮控制的自动旋转)
* [按钮控制的自动旋转](#按钮控制的自动旋转)
* [添加陀螺仪](#添加陀螺仪)
* [场景过渡效果](#场景过渡效果)
* [隐藏显示热点](#隐藏显示热点)
* [获取全景视频进度](#获取全景视频进度)
* [用 js 控制全景](#用-js-控制场景跳转)

### 小行星开场
开启小行星，先找到 `tour.xml` ，然后搜索 `littleplanetintro` 将其值设置为 `true` 即可。

```xml
<skin_settings
    ...
    littleplanetintro="true"
    ...
/>
```

### 加载动画
在官方的案例文件夹中找到 `loading-progress` 这个文件夹，将需要的文件内容复制到项目中的 `skin` 文件夹，然后在 `tour.xml` 文件中引入该文件即可，这样重新打开就可以看到有动态的进度条了。

```xml
<include url="skin/loadingbar.xml" />
```

### 修改右键菜单
找到引入的皮肤文件，默认在 `vtourskin.xml` ，然后修改下面这些地方即可自定义右键菜单，但像版权、全屏菜单即使删除也会存在。

```xml
<contextmenu>
    <item name="fv" caption="鱼眼视图" onclick="skin_view_fisheye();" showif="view.vlookatrange == 180" devices="flash|webgl" separator="true" />
</contextmenu>
```
  
#### contextmenu 元素

- `caption` 右键菜单显示的文字；
- `onclick` 控制点击后执行的动作，动作由 `action` 定义；
- `showif` 显示条目的条件；
- `devices` 控制在 `flash/webgl` 哪个模式中出现；
- `separator` 显示分隔符来分隔菜单；

### 自定义热点

配置 `<hotspot>` 中 `style` 的属性对应的元素（`skin`对应的文件夹）。

```xml
<hotspot name="spot1" style="skin_hotspotstyle" ath="93.531" atv="-1.109" linkedscene="scene_shuilifang" />
```

```xml
<!-- skin_hotspotstyle - style for the hotspots -->
	<style name="skin_hotspotstyle" url="vtourskin_hotspot.png" scale="0.5" edge="top" distorted="true"
	       tooltip=""
	       linkedscene=""
	       linkedscene_lookat=""
	       onclick="skin_hotspotstyle_click();"
	       onover="tween(scale,0.55);"
	       onout="tween(scale,0.5);"
	       onloaded="if(linkedscene AND skin_settings.tooltips_hotspots, copy(tooltip,scene[get(linkedscene)].title); loadstyle(skin_tooltips); );"
	       />
```

### 隐藏皮肤

```xml
<action name="startup" autorun="onstart">
	<!--添加代码 隐藏皮肤 -->
	set(events[skin_events].name, null);
  	for(set(i,0), i LT layer.count, inc(i), 
	copy(layername, layer[get(i)].name);
	subtxt(namestart, get(layername), 0, 5);
	if(namestart == 'skin_', removelayer(get(layername)); dec(i); );
  );
</action>
```

### 动态热点

在 `tour.xml` 空白处的 scene 标签的外面，添加动作代码

```xml
<action name="do_crop_animation">
	<!-- 为热点注册属性 -->
	registerattribute(xframes, calc((imagewidth / %1) BOR 0));
	registerattribute(yframes, calc((imageheight / %2) BOR 0));
	registerattribute(frames, calc(xframes * yframes));
	registerattribute(frame, 0);
 
	set(crop, '0|0|%1|%2');
 
	setinterval(calc('crop_anim_' + name), calc(1.0 / %3),
		if(loaded,
			inc(frame);
			if(frame GE frames, if(onlastframe !== null, onlastframe() ); set(frame,0); );
			mod(xpos, frame, xframes);
			div(ypos, frame, xframes);
			Math.floor(ypos);
			mul(xpos, %1);
			mul(ypos, %2);
			calc(crop, xpos + '|' + ypos + '|%1|%2');
		  ,
			clearinterval(calc('crop_anim_' + name));
		  );
	  );
</action>
```

在 `hotspot` 或 `layer` 的代码添加代码， `do_crop_animation(每帧宽,每帧高,fps)`

```xml
url="explosion.png"  onloaded="do_crop_animation(100,100, 60)"
```

### 动态热点添加始终显示的文字

显示 `<scene> title` 中的文字

```xml
<hotspot name="spot1" url="animatedhotspot_white.png" onloaded="do_crop_animation(64,64, 60);"   ath="-15" atv="-12" onclick="loadscene(get(linkedscene))" linkedscene="scene_01"/>
```

或者在 `<hotpsot> text` 中添加显示自定义的文字

```xml
<hotspot name="spot1" url="animatedhotspot_white.png" onloaded="do_crop_animation(64,64, 60);"   ath="-15" atv="-12" onclick="loadscene(get(linkedscene))" text="自定义文字"/>
```

在热点的 `onload` 事件中加上 `add_all_the_time_tooltip()`

```xml
onloaded="do_crop_animation(64,64, 60);add_all_the_time_tooltip()"
```

空白处加上 `action`

```xml
<action name="add_all_the_time_tooltip">
	    txtadd(tooltipname, 'tooltip_', get(name));
	    addplugin(get(tooltipname));
	    txtadd(plugin[get(tooltipname)].parent, 'hotspot[', get(name), ']');
	    set(plugin[get(tooltipname)].url,'%SWFPATH%/plugins/textfield.swf');
	    set(plugin[get(tooltipname)].align,top);
	    set(plugin[get(tooltipname)].edge,bottom);
	    set(plugin[get(tooltipname)].x,0);
	    set(plugin[get(tooltipname)].y,0);
	    set(plugin[get(tooltipname)].autowidth,true);
	    set(plugin[get(tooltipname)].autoheight,true);
	    set(plugin[get(tooltipname)].vcenter,true);
	    set(plugin[get(tooltipname)].background,true);
	    set(plugin[get(tooltipname)].backgroundcolor,0x000000);
	    set(plugin[get(tooltipname)].roundedge,5);
	    set(plugin[get(tooltipname)].backgroundalpha,0.65);
	    set(plugin[get(tooltipname)].padding,5);
	    set(plugin[get(tooltipname)].border,false);
	    set(plugin[get(tooltipname)].glow,0);
	    set(plugin[get(tooltipname)].glowcolor,0xFFFFFF);
	    set(plugin[get(tooltipname)].css,'text-align:center; color:#FFFFFF; font-family:MicrosoftYahei;  font-size:24px;');
	    if(device.mobile,set(plugin[get(tooltipname)].css,'text-align:center; color:#FFFFFF; font-family:MicrosoftYahei; font-weight:bold; font-size:24px;');
	    	);
	    set(plugin[get(tooltipname)].textshadow,0);
	    set(plugin[get(tooltipname)].textshadowrange,6.0);
	    set(plugin[get(tooltipname)].textshadowangle,90);
	    if(text == '' OR text === null,
	    copy(plugin[get(tooltipname)].html,scene[get(linkedscene)].title),
	    copy(plugin[get(tooltipname)].html,text)
	    );    
	    set(plugin[get(tooltipname)].enabled,false);	
</action>
```
### 热点和或图层在鼠标点击或鼠标悬停时进入动态模式

```xml
<action name="do_crop_animation_onclick">	
		if(hotspot[get(name)].animated === null OR hotspot[get(name)].animated == false,
		    set(hotspot[get(name)].animated,true);
			setinterval(calc('crop_anim_' + name), calc(1.0 / %3),			
					inc(frame);
					if(frame GE frames, if(onlastframe !== null, onlastframe() ); set(frame,0); );
					mod(xpos, frame, xframes);
					div(ypos, frame, xframes);
					Math.floor(ypos);
					mul(xpos, %1);
					mul(ypos, %2);
					calc(crop, xpos + '|' + ypos + '|%1|%2');			  				
			  );
			  ,
            set(hotspot[get(name)].animated,false);  
			clearinterval(calc('crop_anim_' + name));
			set(crop, '0|0|%1|%2');	
		  );
</action>
 
<action name="do_crop_animation_register">
		registerattribute(xframes, calc((imagewidth / %1) BOR 0));
		registerattribute(yframes, calc((imageheight / %2) BOR 0));
		registerattribute(frames, calc(xframes * yframes));
		registerattribute(frame, 0);
		set(crop, '0|0|%1|%2');	
</action>
 
 
 
<!-- example hotspots -->
<hotspot name="spot1" url="animatedhotspot_white.png" 
		onover="do_crop_animation_onclick(64,64,60)" onout="do_crop_animation_onclick(64,64,60)"   ath="-15" atv="-12" onloaded="do_crop_animation_register(64,64)" />
 
<hotspot name="spot1" url="animatedhotspot_white.png" 
		onclick="do_crop_animation_onclick(64,64,60)"  ath="-15" atv="-12" onloaded="do_crop_animation_register(64,64)" />
```

以上代码执行了一次动态循环后，序列图停留在第一帧，如果只是需要执行一次动态循环，并且序列图停留在最后一帧的话，那么 `do_crop_animation_onclick` 需更改（区别就是 `frame` 这个变量没有重置为 0 ，并且没有重新设置 `crop` ）；

```xml
<action name="do_crop_animation_onclick"> 
    if(hotspot[get(name)].animated === null OR hotspot[get(name)].animated == false,
        set(hotspot[get(name)].animated,true);
      setinterval(calc('crop_anim_' + name), calc(1.0 / %3),  
 
          inc(frame);
          if(frame GE frames, if(onlastframe !== null, onlastframe() ); add(frame,frames,-1); );
          mod(xpos, frame, xframes);
          div(ypos, frame, xframes);
          Math.floor(ypos);
          mul(xpos, %1);
          mul(ypos, %2);
          calc(crop, xpos + '|' + ypos + '|%1|%2');               
        );
        ,
        set(hotspot[get(name)].animated,false);  
      clearinterval(calc('crop_anim_' + name));
     
      );
</action>
```

### 拖拽热点

在 `<hotspot/>` 中添加代码

```xml
	ondown="draghotspot();"
```

添加 action 代码

```xml
	<action name="draghotspot">
		spheretoscreen(ath, atv, hotspotcenterx, hotspotcentery, 'l');
		sub(drag_adjustx, mouse.stagex, hotspotcenterx);
		sub(drag_adjusty, mouse.stagey, hotspotcentery);
		asyncloop(pressed,
			sub(dx, mouse.stagex, drag_adjustx);
			sub(dy, mouse.stagey, drag_adjusty);
			screentosphere(dx, dy, ath, atv);
		  );
	</action>
```

### 添加简单的全景视频

从 `viewer/examples/videopano` 中复制 `vtourskin.xml`，在主 xml 添加代码

```xml
	<scene name="videopano" title="户外全景视频">
		<!-- include the videoplayer interface / skin (with VR support) -->
		<include url="skin/videointerface.xml" />

		<!-- include the videoplayer plugin -->
		<plugin name="video"
		        url.html5="%SWFPATH%/plugins/videoplayer.js"
		        url.flash="%SWFPATH%/plugins/videoplayer.swf"
		        pausedonstart="true"
		        loop="true"
		        volume="1.0"
		        onloaded="add_video_sources();"
		        />

		<!-- use the videoplayer plugin as panoramic image source -->
		<image>
			<sphere url="plugin:video" />
		</image>

		<!-- set the default view -->
		<view hlookat="0" vlookat="0" fovtype="DFOV" fov="130" fovmin="75" fovmax="150" distortion="0.0" />

		<!-- add the video sources and play the video -->
		<action name="add_video_sources">
			videointerface_addsource('1024x512', '%CURRENTXML%/video/video-1024x512.mp4|%CURRENTXML%/video/video-1024x512.webm|%CURRENTXML%/video/iphone-audio.m4a', '%CURRENTXML%/video/video-1024x512-poster.jpg');
			videointerface_addsource('1920x960', '%CURRENTXML%/video/video-1920x960.mp4|%CURRENTXML%/video/video-1920x960.webm|%CURRENTXML%/video/iphone-audio.m4a', '%CURRENTXML%/video/video-1920x960-poster.jpg');
			
			if(device.ios,
				<!-- iOS Safari has a very slow 'video-to-webgl-texture' transfer, therefore use a low-res video by default -->
				videointerface_play('1024x512');
			  ,
				videointerface_play('1920x960');
			  );
		</action>
	</scene>
```
 
### 添加雨雪特效

1. 添加文件 [https://pan.baidu.com/s/12Dkr2jeAWVmzbzE5RrU0RA][snow] 密码：gyrc 
  
2. 在 `viewer\plugins` 拷贝 `snow.swf` 和 `snow.js`  

3. 添加  `<scene onstart="snowballs();">`  
	
	目前可选的特效
	- 默认雪 `onstart='defaultsnow();'`
	- 雪球 `onstart='snowball();'`
	- 雪花 `onstart='snowflakes();'`
	- 银色星星 `onstart='silverstars();'`
	- 金色星星 `onstart='goldenstars();'`
	- 心形 `onstart='hearts();'`
	- 笑脸 `onstart='smileys();'`
	- 钱 `onstart='money();'`
	- 雨 `onstart='rain();'`
	- 大雨 `onstart='heavyrain();'`

4. 在 `<scene>` 添加代码

```xml
<include url="snow.xml" />
``` 

### 自动旋转

添加代码

```xml
<autorotate enabled="true"
waittime="5.0"
speed="-3.0"
horizon="0.0"
tofov="120.0"
/>
```
- `waittime` 代表在最近一次用户交互行为之后要开始自动旋转之前的等待时间。以秒为单位；
- `speed` 为旋转速度。当该数值为正值时向右旋转，为负值时向左旋转；
- `horizon` 为场景在自动旋转时将达到的水平位置；
- `tofov` 为旋转中要达到的视场角。


### 无按钮控制的自动旋转
自动旋转场景，场景旋转一圈后自动进入下一个场景，最后一个场景浏览结束后，进入第一个场景。需添加如下代码：

```xml
<autorotate enabled="true"
waittime="5.0"
speed="-3.0"
horizon="0.0"
tofov="120.0"
/>
```

修改 `<action name="startup/>` 中的代码

```xml
<action name="startup">
if(startscene === null, copy(startscene,scene[0].name));
loadscene(get(startscene), null, MERGE);
if(autorotate.enabled,bombtimer(0));
</action>
```

在 `xml` 文件中加入下面的代码

```xml
<events onmousedown="set(bt,0);" />
<action name="bombtimer">
set(autorotate.enabled,true);
set(bt,%1);
add(bt,1);
delayedcall(1, bombtimer(get(bt)));
copy(bt_1,autorotate.speed);
Math.abs(bt_1);
div(bt_2,360,bt_1);
add(bt_2,autorotate.waittime);
if(bt GE bt_2, set(bt,0); nextscene(););
</action>
<action name="nextscene">
set(ns, get(scene[get(xml.scene)].index));
set(maxs, get(scene.count));
add(ns,1);
if(ns == maxs, set(ns,0));
loadscene(get(scene[get(ns)].name), null, MERGE, BLEND(1.5));
</action>
```

### 按钮控制的自动旋转
添加代码

```xml
<autorotate enabled="true"
waittime="5.0"
speed="-3.0"
horizon="0.0"
tofov="120.0"
/>
```

在对应的按钮，通常为 `<layer>` 标签中找到 `onclick` 属性替换，如果没有则直接添加

```xml
<layer ... onclick="switch(autorotate.enabled);" ... />
```

### 添加陀螺仪

加载插件（此方法与上述隐藏皮肤的方法冲突）

```xml
<plugin name="gyro" devices="html5"
	        url="%SWFPATH%/plugins/gyro2.js"
	        enabled="false"
                onavailable="gyro_available_info();"
	        />
 
<action name="gyro_available_info">
		set(layer[gyrobutton].visible, true);
</action>
```

控制按钮

```xml
<layer name="gyrobutton" url="gyroicon.png" scale="0.5" align="right" x="10" visible="false" 
		       onclick="switch(plugin[gyro].enabled);"
		       />
```

默认皮肤开启陀螺仪功能（在 `tour.xml` 的 `skin_settings`中设置）

```
gyro="true"
```

在 `tour.xml` 的 `include` 的下一行添加

```xml
<plugin name="skin_gyro" 
		enabled="true"
		camroll="false"
   		onenable="set(view.limitview, range);"
		/>
```

### 场景过渡效果

修改全部过渡效果，只需修改 `<skin_settings />` 中以下代码。

```xml
loadscene_blend="OPENBLEND(0.5, 0.0, 0.75, 0.05, linear)"
loadscene_blend_prev="SLIDEBLEND(0.5, 180, 0.75, linear)"
loadscene_blend_next="SLIDEBLEND(0.5,   0, 0.75, linear)"
```
如果想为某个特殊的 `loadscene` 动作加上不一样的过渡效果，在主 `xml` 的 `scene` 外加入以下代码

```xml
<blendmodes name="no blending"       description="无过渡效果"  blend="NOBLEND" />
<blendmodes name="simple crossblending" description="简单淡入淡出" blend="BLEND(1.0, easeInCubic)" />
<blendmodes name="zoom blend"        description="缩放过渡"  blend="ZOOMBLEND(2.0, 2.0, easeInOutSine)" />
<blendmodes name="black-out"         description="黑场过渡"  blend="COLORBLEND(2.0, 0x000000, easeOutSine)" />
<blendmodes name="white-flash"       description="白场过渡"  blend="LIGHTBLEND(1.0, 0xFFFFFF, 2.0, linear)" />
<blendmodes name="right-to-left"     description="从右至左"  blend="SLIDEBLEND(1.0, 0.0, 0.2, linear)" />
<blendmodes name="top-to-bottom"     description="从上至下"   blend="SLIDEBLEND(1.0, 90.0, 0.01, linear)" />
<blendmodes name="diagonal"          description="对角线"     blend="SLIDEBLEND(1.0, 135.0, 0.4, linear)" />
<blendmodes name="circle open"       description="圆形展开"      blend="OPENBLEND(1.0, 0.0, 0.2, 0.0, linear)" />
<blendmodes name="vertical open"     description="垂直展开"     blend="OPENBLEND(0.7, 1.0, 0.1, 0.0, linear)" />
<blendmodes name="horizontal open"   description="水平展开"    blend="OPENBLEND(1.0, -1.0, 0.3, 0.0, linear)" />
<blendmodes name="elliptic + zoom"   description="椭圆缩放"      blend="OPENBLEND(1.0, -0.5, 0.3, 0.8, linear)" />
```

修改 `loadscene(scenename, null, MERGE, get(blendmodes[black-out].blend));`

```xml
<hotspot onclick="loadscene(scene_shuilifang, null, MERGE, get(blendmodes[vertical open].blend));" />
```

### 隐藏显示热点
添加 `<action>`

```xml
<action name="hideBox">
  tween(%1.alpha,0,0.5);
  wait(1);
  set(%1.visible,false);
</action>

<action name="showBox">
  set(%1.alpha,0);
  set(%1.visible,true);
  tween(%1.alpha,1,0.5);
  tween(%1.scale,1,0.5,easeOutBack);
</action>
```

使用
```xml
<hotspot name="spot1" style="skin_hotspotstyle" ath="46.131" atv="24.389" visible="true" onclick="spot1Click" />
<action name="spot1Click">
	hideBox(hotspot[spot1]);
</action>
```

### 获取全景视频进度

```xml
<!-- 获取视频进度 -->
<action name="get_video_time">
  setinterval(skin_video_seek_updates0, 0.1, skin_video_updatetime0())
</action>

<action name="skin_video_updatetime0">
  setStop(4,video_pause_events(););
</action >
		
<action name="setStop">
  copy(t1, plugin[video].time);
  if(t1 GT %1,%2);
</action>
 
<!-- 视频暂停回调 -->
<action name="video_pause_events">
  plugin[video].pause();
  clearinterval(skin_video_seek_updates0);
</action>
```

### 用 js 控制场景跳转


```javascript
// 场景跳转 index:0,1,2
function krpanoTo(index){
	var krpano = document.getElementById("krpanoSWFObject");
	// 跳转到场景1
	if(index == 0){ krpano.call("to0"); }
	// 跳转到场景2
	if(index == 1){ krpano.call("to1"); }
	// 跳转到场景3
	if(index == 2){ krpano.call("to2"); }
}
```

```xml
<action name="to0">
	loadscene("scene_index1", null, MERGE);
</action>

<action name="to1">
	loadscene("scene_index2", null, MERGE);
</action>

<action name="to2">
	loadscene("scene_index3", null, MERGE);
</action>
```

## 总结
以上为自己在学习与开发过程中记录的笔记，欢迎多多交流。

### 参考链接
- 参考链接 1： https://krpano.milly.me/
- 参考链接 2： http://www.krpano360.com/

[link1]:https://krpano.milly.me/
[link2]:http://www.krpano360.com/
[github]:https://github.com/NalvyBoo/nodeKrpano/
[snow]:https://pan.baidu.com/s/12Dkr2jeAWVmzbzE5RrU0RA
[demo]:http://go.163.com/2015/public/team/ningbo/krpano/comn01/
