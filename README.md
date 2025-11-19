# fyWebsite
个人网站！

## Galaxy 组件

一个使用 OGL (WebGL) 实现的美丽星空/银河效果组件。

### 安装依赖

```bash
pnpm install
```

### 运行项目

```bash
pnpm dev
```

### 使用方法

#### 基础用法

```jsx
import Galaxy from './components/Galaxy';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Galaxy />
</div>
```

#### 自定义属性

```jsx
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1.5}
    glowIntensity={0.5}
    saturation={0.8}
    hueShift={240}
  />
</div>
```

### 可用属性

- `focal` - 焦点位置 [0.5, 0.5]
- `rotation` - 旋转向量 [1.0, 0.0]
- `starSpeed` - 星星速度 0.5
- `density` - 密度 1
- `hueShift` - 色相偏移 140
- `disableAnimation` - 禁用动画 false
- `speed` - 整体速度 1.0
- `mouseInteraction` - 鼠标交互 true
- `glowIntensity` - 发光强度 0.3
- `saturation` - 饱和度 0.0
- `mouseRepulsion` - 鼠标排斥 true
- `repulsionStrength` - 排斥强度 2
- `twinkleIntensity` - 闪烁强度 0.3
- `rotationSpeed` - 旋转速度 0.1
- `autoCenterRepulsion` - 自动中心排斥 0
- `transparent` - 透明背景 true
