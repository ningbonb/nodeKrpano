# krpano
Krpano 可以方便快速的构建出全景图或全景视频([demo][demo])

## 目录

* [Krpano Droplet](#krpano-droplet)
	* [MAKE PANO (NORMAL)](#make-pano-normal)
	* [MAKE PANO (MULTIRES)](#make-pano-multires)
	* [MAKE PANO (SINGLESWF)](#make-pano-singleswf)
	* [MAKE PANO (FLAT)](#make-pano-flat)
	* [MAKE VTOUR (NORMAL)](#make-vtour-normal)
	* [MAKE VTOUR (MULTIRES)](#make-vtour-multires)
	* [MAKE OBJECT](#make-object)
	* [Convert SPHERE to CUBE](#convert-sphere-to-cube)
	* [Convert CUBE to SPHERE](#convert-cube-to-sphere)
	* [Encrypt XML](#encrypt-xml)
* [vtour 文件夹说明](#vtour-文件夹说明)
	* [vtour 文件夹结构](#vtour-文件夹结构)
	* [vtour 运作机制](#vtour-运作机制)
* [krpano XML结构](#krpano-xml结构)
	* [Krpano 内置元素说明](#krpano-内置元素说明)
* [常用设置](#常用设置)
	* [小行星开场](#小行星开场)
	* [加载动画](#加载动画)
	* [修改右键菜单](#修改右键菜单)

----------

原文链接：  
[https://krpano.milly.me/][link1]
[http://www.krpano360.com/][link2]

GitHub: [nodeKrpano][github]


## Krpano Droplet

### MAKE PANO (NORMAL)
**用法说明**

- 生成普通 (=单分辨率) 全景
- 制作典型的 360 度全景
- 全部全景图将会一次性载入. 默认下方块最大变长为 2048 像素(可以在配置文件中修改)
- 包括默认的导航皮肤
- 支持 ``Flash`` 和 ``HTML5``

**Droplet 说明**

- 配置文件: ``normal.config``
- 默认模版/皮肤配置文件: ``defaultbuttons.skin``


----------


### MAKE PANO (MULTIRES)
**用法说明**

- 生成多分辨率全景
- 制作所有类型的全景
- 只有特定的切片在需要时载入 没有尺寸/分辨率限制
- 包含默认的导航皮肤
- 支持 ``Flash`` 和 ``HTML5``

**Droplet 说明**

配置文件: ``multiresconfig``
默认模版/皮肤配置文件: ``defaultbuttonsskin``


----------


### MAKE PANO (SINGLESWF)
**用法说明**

- 生成普通 (=单分辨率) 全景同时将所有文件嵌在一个SWF文件中只输出一个SWF文件和一个HTML文件
- 制作典型的360度全景
- 全部全景图将会一次性载入 默认下方块最大变长为2048像素(可以在配置文件中修改)
- 包含默认的导航皮肤
- 仅支持 ``Flash``

**Droplet 说明**

配置文件: ``singleswfconfig``
默认模版/皮肤配置文件: ``defaultbuttonsskin``


----------


### MAKE PANO (FLAT)
**用法说明**

- 生成平面切片多分辨率图像
- 制作平面图像 输出时既定为平面图像
- 只有特定的切片在需要时载入 没有尺寸/分辨率限制
- 包含有默认导航按钮的皮肤，针对特定的视角
- 支持 ``Flash`` 与 ``HTML5``

**Droplet 说明**

- 配置文件: ``flatconfig``
- 默认模版/皮肤配置文件: ``flatxml / flatskinxml``


----------


### MAKE VTOUR (NORMAL)
**用法说明**

- 生成普通 (=单分辨率) 全景并将它们整合到一个虚拟漫游中
- 制作典型的 360 度全景
- 全部全景图将会一次性载入 默认下方块最大变长为 2048 像素(可以在配置文件中修改)
- 包含一个包括导航按钮、可滚动缩略图以及可选择必应地图以及重力感应插件的默认皮肤
- 支持 ``Flash`` 和 ``HTML5``

**Droplet 说明**

- 配置文件: ``vtour-normalconfig``
- 默认模版/皮肤配置文件: ``vtourskin-thumbnails-bingmaps-gyroskin``


----------


### MAKE VTOUR (MULTIRES)
**用法说明**

- 生成多分辨率全景并将它们整合到一个虚拟漫游中
- 制作所有类型全景图像
- 只有特定的切片在需要时载入 没有尺寸/分辨率限制
- 包含一个包括导航按钮、可滚动缩略图以及可选择必应地图以及重力感应插件的默认皮肤
- 支持 ``Flash`` 和 ``HTML5``

**Droplet 说明**

- 配置文件: ``vtour-multiresconfig``
- 默认模版/皮肤配置文件: ``vtourskin-thumbnails-bingmaps-gyroskin``


----------


### MAKE OBJECT
**用法说明**

- 生成若干个平面多分辨率图像并将它们整合到一个可缩放旋转的 360 物体影像中
- 制作平面图像物体 所有物体图片的尺寸必须一致
- 只有特定的切片在需要时载入 没有尺寸/分辨率限制
- 包含一个特定的控制物体的皮肤
- 仅支持 ``Flash``

**Droplet 说明**

- 配置文件: ``objectconfig``
- 默认模版/皮肤配置文件: ``objectxml / objectskinxml``
 

----------


### Convert SPHERE to CUBE
**用法说明**

- 将球面图像转换至立方体图
- 输出的立方体格式、尺寸以及图像尺寸可以在配置文件中修改

**Droplet 说明**

- 配置文件: ``convertdropletsconfig``


----------


### Convert CUBE to SPHERE
**用法说明**

- 将六张立方体图像转换成一张球面全景图
- 输出的图像尺寸和格式可以在配置文件中修改

**Droplet 说明**

- 配置文件: ``convertdropletsconfig``


----------


### Encrypt XML
**用法说明**

- 将 ``xml`` 文件拖放进 ``droplet`` 进行加密
- 加密过程中 ``xml`` 文件会自动被压缩


----------


### 自定义 droplet

如果内置 ``droplet`` 不能满足需求或者需要对一些参数进行自定义。只要复制并重命名一个配置文件与皮肤配置文件，然后复制并重命名一个 ``droplet ``，修改里面的配置路径即可。


----------


## vtour 文件夹说明

### vtour 文件夹结构

```
vtour/
| -- panos/             #存放全景切片图片的文件夹
| -- skin/              #存放皮肤相关文件
| -- plugins/           #用来存放插件
| -- tour.swf           #krpano flash viewer
| -- tour.js            #krpano HTML5 viewer
| -- tour.xml           #生成全景的相关配置
| -- tour.html          #用来浏览全景的页面，需要本地服务环境
| -- tour_editor.html   #添加热点（hotspot）与初始化视角的设置
```

### vtour 运作机制

```html
<div id="pano"></div>
<script src="tour.js"></script>
<script>
embedpano({
    swf: "tour.swf", //有则表示加载flash引擎，如果设置html5:only则不需要该值
    xml: "tour.xml", //启动时的配置文件
    target: "pano", //要渲染到的目标容器ID
    html5: "only", //如果有需要用到flash，可设置为auto
    //id: "krpanoSWFObject", //默认的krpano对象，每一个viewer对应唯一id，与JS交互时要用到
    mobilescale: 1.0, //移动设备缩放，1表示不缩放，默认0.5
    passQueryParameters: false //是否接受URL传参，例如：tour.html?html5=only&startscene=scene2
});
</script>
```

## krpano XML结构

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

### Krpano 内置元素说明

**01.krpano**

``krpano`` 元素是 ``krpano xml`` 文件的根元素。任何一个 ``krpano xml`` 文件内的其它元素都要被 ``krpano`` 元素所嵌套。

**02.include**

``include`` 元素可引入其它 ``xml`` 文件的内容，例如我们常要用到的 ``vtourskin.xml`` 就是使用 ``include`` 嵌入到主 ``xml`` 中。

**03.preview**

预览图设置，也就是全景图完全载入之前的模糊图像，但因为体积较小，因此载入速度较快，会在全景图之前先载入，避免黑屏。

**04.image**

image 元素控制全景图设置，包括全景图类型，渐进分辨率切片显示等。

**05.view**

view 元素控制全景的视野，例如起始视角、视角限制与缩放等等。当要设置限制视角或设定特定的初始视角时，需要自行设定或使用插件获取代码。

**06.area**

area 元素控制全景图在浏览器窗口中显示区域大小。

**07.display**

控制全景图的显示品质。

**08.control**

设置鼠标、键盘以及触摸设备对全景浏览的控制方式。

**09.cursors**

设置鼠标光标样式。

**10.autorotate**

控制自动旋转。

**11.plugin**

用来调用插件、插入图片或生成容器。

**12.layer**

与 ``plugin`` 作用相同，只是名称不同。

**13.hotspot**

热点，可在 3D 空间中插入图片，使之随着 3D 空间一同运动，可制作很多特效。

**14.style**

可以保存其它元素的属性子集。

**15.events**

可调用各类型事件，例如全景载入的不同阶段以及鼠标触发的不同行为等。

**16.action**

自定义动态代码。

**17.contextmenu**

定义右键菜单的内容。

**18.network**

控制图像的下载、缓存与解码。

**19.menory**

控制全景图在设备中的存储。

**20.security**

``Flashplayer`` 和 ``HTML5`` 相关的安全/跨域设置。

**21.lensflareset**

镜头眩光的设置（目前只能在 ``flash`` 下使用）。

**22.lensflare**

生成镜头眩光（目前只能在 ``flash`` 下使用）。

**23.data**

可放置任意的数据。

**24.scene**

可放置任意 ``krpano`` 元素。每个 ``scene`` 元素只有在被 ``loadscene`` 时才会被载入到浏览器进行解析。

## 常用设置
### 小行星开场
开启小行星，先找到 ``tour.xml`` ，然后搜索 ``littleplanetintro`` 将其值设置为 ``true`` 即可。

```xml
<skin_settings
    ...
    littleplanetintro="true"
    ...
/>
```

### 加载动画
在官方的案例文件夹中找到 ``loading-progress`` 这个文件夹，将需要的文件内容复制到项目中的 ``skin`` 文件夹，然后在 ``tour.xml`` 文件中引入该文件即可，这样重新打开就可以看到有动态的进度条了。

```xml
<include url="skin/loadingbar.xml" />
```

### 修改右键菜单
找到引入的皮肤文件，默认在 ``vtourskin.xml`` ，然后修改下面这些地方即可自定义右键菜单，但像版权、全屏菜单即使删除也会存在。

```xml
<contextmenu>
    <item name="fv" caption="鱼眼视图" onclick="skin_view_fisheye();" showif="view.vlookatrange == 180" devices="flash|webgl" separator="true" />
</contextmenu>
```
  
  


**contextmenu元素**

- ``caption`` 右键菜单显示的文字
- ``onclick`` 控制点击后执行的动作，动作由 ``action`` 定义
- ``showif`` 显示条目的条件
- ``devices`` 控制在 ``flash/webgl`` 哪个模式中出现
- ``separator`` 显示分隔符来分隔菜单


[link1]:https://krpano.milly.me/
[link2]:http://www.krpano360.com/
[github]:https://github.com/NalvyBoo/nodeKrpano/
[demo]:http://go.163.com/2015/public/team/ningbo/krpano/normal02/
