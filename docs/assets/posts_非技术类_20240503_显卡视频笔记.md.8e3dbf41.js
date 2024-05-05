import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1eb6b028.js";const m=JSON.parse('{"title":"【硬核科普】从零开始认识显卡笔记","description":"摘抄","frontmatter":{"title":"【硬核科普】从零开始认识显卡笔记","description":"摘抄","date":"2024-05-03T00:00:00.000Z","tags":["笔记"]},"headers":[],"relativePath":"posts/非技术类/20240503_显卡视频笔记.md","filePath":"posts/非技术类/20240503_显卡视频笔记.md"}'),p={name:"posts/非技术类/20240503_显卡视频笔记.md"},l=e(`<p>【硬核科普】从零开始认识显卡 <a href="https://www.bilibili.com/video/BV1xE421j7Uv" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1xE421j7Uv</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">画面</span></span>
<span class="line"><span style="color:#e1e4e8;">	三角面+贴图+光照+着色</span></span>
<span class="line"><span style="color:#e1e4e8;">	纹理	光照	材质	着色</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">显卡结构	</span></span>
<span class="line"><span style="color:#e1e4e8;">	接口</span></span>
<span class="line"><span style="color:#e1e4e8;">		供电接口</span></span>
<span class="line"><span style="color:#e1e4e8;">			8pin	225w</span></span>
<span class="line"><span style="color:#e1e4e8;">			12v-2x6接口	600w</span></span>
<span class="line"><span style="color:#e1e4e8;">			背插接口（主板供电）</span></span>
<span class="line"><span style="color:#e1e4e8;">		数据接口pcie</span></span>
<span class="line"><span style="color:#e1e4e8;">			pcie4.0*16 2GB*16=32GB</span></span>
<span class="line"><span style="color:#e1e4e8;">		视频接口</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	供电（降压到1.1V~1.35V）</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心PWM</span></span>
<span class="line"><span style="color:#e1e4e8;">		显存PWM</span></span>
<span class="line"><span style="color:#e1e4e8;">		电容</span></span>
<span class="line"><span style="color:#e1e4e8;">		供电相</span></span>
<span class="line"><span style="color:#e1e4e8;">			MOS管</span></span>
<span class="line"><span style="color:#e1e4e8;">			电感</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	显存</span></span>
<span class="line"><span style="color:#e1e4e8;">		GDDR6X 1600MHZ	(2GB,32bit位宽)*8</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	GPU</span></span>
<span class="line"><span style="color:#e1e4e8;">		厂商</span></span>
<span class="line"><span style="color:#e1e4e8;">			NVIDIA</span></span>
<span class="line"><span style="color:#e1e4e8;">				例子ADA103-301</span></span>
<span class="line"><span style="color:#e1e4e8;">					ADA-loverace架构</span></span>
<span class="line"><span style="color:#e1e4e8;">					459亿晶体管/379mm^2</span></span>
<span class="line"><span style="color:#e1e4e8;">					5nm</span></span>
<span class="line"><span style="color:#e1e4e8;">			AMD</span></span>
<span class="line"><span style="color:#e1e4e8;">			INTEL</span></span>
<span class="line"><span style="color:#e1e4e8;">		结构</span></span>
<span class="line"><span style="color:#e1e4e8;">			streaming multiprocessor</span></span>
<span class="line"><span style="color:#e1e4e8;">				*cuda核心越多，频率越高，性能越强</span></span>
<span class="line"><span style="color:#e1e4e8;">				4th TENSEO CORE</span></span>
<span class="line"><span style="color:#e1e4e8;">					*780AI TOPS</span></span>
<span class="line"><span style="color:#e1e4e8;">					DLSS</span></span>
<span class="line"><span style="color:#e1e4e8;">						*深度学习超级采样技术</span></span>
<span class="line"><span style="color:#e1e4e8;">						低分辨率渲染+TENSOR CORE采样+高分辨率输出</span></span>
<span class="line"><span style="color:#e1e4e8;">					3rd RT CORE</span></span>
<span class="line"><span style="color:#e1e4e8;">						*光追核心</span></span>
<span class="line"><span style="color:#e1e4e8;">					</span></span>
<span class="line"><span style="color:#e1e4e8;">			l2 cache</span></span>
<span class="line"><span style="color:#e1e4e8;">			nvemc</span></span>
<span class="line"><span style="color:#e1e4e8;">				*编码器</span></span>
<span class="line"><span style="color:#e1e4e8;">			nvdec</span></span>
<span class="line"><span style="color:#e1e4e8;">				*解码器</span></span>
<span class="line"><span style="color:#e1e4e8;">			memmory controller</span></span>
<span class="line"><span style="color:#e1e4e8;">			pcie host interface</span></span>
<span class="line"><span style="color:#e1e4e8;">		性能</span></span>
<span class="line"><span style="color:#e1e4e8;">			*图像点坐标精确到小数点后7位，使用fp32表达</span></span>
<span class="line"><span style="color:#e1e4e8;">			单精度浮点数算力</span></span>
<span class="line"><span style="color:#e1e4e8;">				2800MHZ*9728CUDA核心*2单周期计算次数=54TFLOPS</span></span>
<span class="line"><span style="color:#e1e4e8;">				i9cpu fp32=2.5TFLOPS</span></span>
<span class="line"><span style="color:#e1e4e8;">			架构</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">	散热模组</span></span>
<span class="line"><span style="color:#e1e4e8;">		风扇</span></span>
<span class="line"><span style="color:#e1e4e8;">		鳍片</span></span>
<span class="line"><span style="color:#e1e4e8;">		热管</span></span>
<span class="line"><span style="color:#e1e4e8;">			高纯水</span></span>
<span class="line"><span style="color:#e1e4e8;">			气液循环</span></span>
<span class="line"><span style="color:#e1e4e8;">		均热板</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">选型指导</span></span>
<span class="line"><span style="color:#e1e4e8;">	性能需求</span></span>
<span class="line"><span style="color:#e1e4e8;">		TimeSpy天梯图</span></span>
<span class="line"><span style="color:#e1e4e8;">	显卡型号</span></span>
<span class="line"><span style="color:#e1e4e8;">		评测</span></span>
<span class="line"><span style="color:#e1e4e8;">		淘宝三方店铺少溢价</span></span>
<span class="line"><span style="color:#e1e4e8;">	AIC品牌</span></span>
<span class="line"><span style="color:#e1e4e8;">		华硕</span></span>
<span class="line"><span style="color:#e1e4e8;">			*入门中高旗舰</span></span>
<span class="line"><span style="color:#e1e4e8;">			RUDL/PH</span></span>
<span class="line"><span style="color:#e1e4e8;">			ATS GAMING 巨齿鲨/TX GAMING 天选</span></span>
<span class="line"><span style="color:#e1e4e8;">			TUF GAMING 电竞特工</span></span>
<span class="line"><span style="color:#e1e4e8;">			ROG STRIX 猛禽	（旗舰）</span></span>
<span class="line"><span style="color:#e1e4e8;">			ROG MATRIX 骇客</span></span>
<span class="line"><span style="color:#e1e4e8;">	实际产品</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">画面</span></span>
<span class="line"><span style="color:#24292e;">	三角面+贴图+光照+着色</span></span>
<span class="line"><span style="color:#24292e;">	纹理	光照	材质	着色</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">显卡结构	</span></span>
<span class="line"><span style="color:#24292e;">	接口</span></span>
<span class="line"><span style="color:#24292e;">		供电接口</span></span>
<span class="line"><span style="color:#24292e;">			8pin	225w</span></span>
<span class="line"><span style="color:#24292e;">			12v-2x6接口	600w</span></span>
<span class="line"><span style="color:#24292e;">			背插接口（主板供电）</span></span>
<span class="line"><span style="color:#24292e;">		数据接口pcie</span></span>
<span class="line"><span style="color:#24292e;">			pcie4.0*16 2GB*16=32GB</span></span>
<span class="line"><span style="color:#24292e;">		视频接口</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	供电（降压到1.1V~1.35V）</span></span>
<span class="line"><span style="color:#24292e;">		核心PWM</span></span>
<span class="line"><span style="color:#24292e;">		显存PWM</span></span>
<span class="line"><span style="color:#24292e;">		电容</span></span>
<span class="line"><span style="color:#24292e;">		供电相</span></span>
<span class="line"><span style="color:#24292e;">			MOS管</span></span>
<span class="line"><span style="color:#24292e;">			电感</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	显存</span></span>
<span class="line"><span style="color:#24292e;">		GDDR6X 1600MHZ	(2GB,32bit位宽)*8</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	GPU</span></span>
<span class="line"><span style="color:#24292e;">		厂商</span></span>
<span class="line"><span style="color:#24292e;">			NVIDIA</span></span>
<span class="line"><span style="color:#24292e;">				例子ADA103-301</span></span>
<span class="line"><span style="color:#24292e;">					ADA-loverace架构</span></span>
<span class="line"><span style="color:#24292e;">					459亿晶体管/379mm^2</span></span>
<span class="line"><span style="color:#24292e;">					5nm</span></span>
<span class="line"><span style="color:#24292e;">			AMD</span></span>
<span class="line"><span style="color:#24292e;">			INTEL</span></span>
<span class="line"><span style="color:#24292e;">		结构</span></span>
<span class="line"><span style="color:#24292e;">			streaming multiprocessor</span></span>
<span class="line"><span style="color:#24292e;">				*cuda核心越多，频率越高，性能越强</span></span>
<span class="line"><span style="color:#24292e;">				4th TENSEO CORE</span></span>
<span class="line"><span style="color:#24292e;">					*780AI TOPS</span></span>
<span class="line"><span style="color:#24292e;">					DLSS</span></span>
<span class="line"><span style="color:#24292e;">						*深度学习超级采样技术</span></span>
<span class="line"><span style="color:#24292e;">						低分辨率渲染+TENSOR CORE采样+高分辨率输出</span></span>
<span class="line"><span style="color:#24292e;">					3rd RT CORE</span></span>
<span class="line"><span style="color:#24292e;">						*光追核心</span></span>
<span class="line"><span style="color:#24292e;">					</span></span>
<span class="line"><span style="color:#24292e;">			l2 cache</span></span>
<span class="line"><span style="color:#24292e;">			nvemc</span></span>
<span class="line"><span style="color:#24292e;">				*编码器</span></span>
<span class="line"><span style="color:#24292e;">			nvdec</span></span>
<span class="line"><span style="color:#24292e;">				*解码器</span></span>
<span class="line"><span style="color:#24292e;">			memmory controller</span></span>
<span class="line"><span style="color:#24292e;">			pcie host interface</span></span>
<span class="line"><span style="color:#24292e;">		性能</span></span>
<span class="line"><span style="color:#24292e;">			*图像点坐标精确到小数点后7位，使用fp32表达</span></span>
<span class="line"><span style="color:#24292e;">			单精度浮点数算力</span></span>
<span class="line"><span style="color:#24292e;">				2800MHZ*9728CUDA核心*2单周期计算次数=54TFLOPS</span></span>
<span class="line"><span style="color:#24292e;">				i9cpu fp32=2.5TFLOPS</span></span>
<span class="line"><span style="color:#24292e;">			架构</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">	散热模组</span></span>
<span class="line"><span style="color:#24292e;">		风扇</span></span>
<span class="line"><span style="color:#24292e;">		鳍片</span></span>
<span class="line"><span style="color:#24292e;">		热管</span></span>
<span class="line"><span style="color:#24292e;">			高纯水</span></span>
<span class="line"><span style="color:#24292e;">			气液循环</span></span>
<span class="line"><span style="color:#24292e;">		均热板</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">选型指导</span></span>
<span class="line"><span style="color:#24292e;">	性能需求</span></span>
<span class="line"><span style="color:#24292e;">		TimeSpy天梯图</span></span>
<span class="line"><span style="color:#24292e;">	显卡型号</span></span>
<span class="line"><span style="color:#24292e;">		评测</span></span>
<span class="line"><span style="color:#24292e;">		淘宝三方店铺少溢价</span></span>
<span class="line"><span style="color:#24292e;">	AIC品牌</span></span>
<span class="line"><span style="color:#24292e;">		华硕</span></span>
<span class="line"><span style="color:#24292e;">			*入门中高旗舰</span></span>
<span class="line"><span style="color:#24292e;">			RUDL/PH</span></span>
<span class="line"><span style="color:#24292e;">			ATS GAMING 巨齿鲨/TX GAMING 天选</span></span>
<span class="line"><span style="color:#24292e;">			TUF GAMING 电竞特工</span></span>
<span class="line"><span style="color:#24292e;">			ROG STRIX 猛禽	（旗舰）</span></span>
<span class="line"><span style="color:#24292e;">			ROG MATRIX 骇客</span></span>
<span class="line"><span style="color:#24292e;">	实际产品</span></span></code></pre></div>`,2),t=[l];function c(o,i,r,y,_,d){return n(),a("div",null,t)}const A=s(p,[["render",c]]);export{m as __pageData,A as default};
