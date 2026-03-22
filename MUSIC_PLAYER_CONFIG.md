# 音乐播放器配置说明

## 🎵 如何启用自动播放音乐

你的网站现在支持自动播放音乐！有两种方式可以配置：

### 方式1: 使用Spotify（推荐）

1. 在 `.env.local` 文件中添加：
```bash
NEXT_PUBLIC_SPOTIFY_TRACK_ID=你的Spotify歌曲ID
NEXT_PUBLIC_AUTO_PLAY_MUSIC=true
NEXT_PUBLIC_MUSIC_VOLUME=0.5
```

2. 如何获取Spotify歌曲ID：
   - 在Spotify中找到你想播放的歌曲
   - 点击"分享" → "复制歌曲链接"
   - 链接格式类似：`https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT`
   - 提取 `track/` 后面的ID（例如：`4cOdK2wGLETKBW3PvgPWqT`）

### 方式2: 使用音频文件URL

1. 在 `.env.local` 文件中添加：
```bash
NEXT_PUBLIC_AUDIO_URL=https://你的音频文件URL.mp3
NEXT_PUBLIC_AUTO_PLAY_MUSIC=true
NEXT_PUBLIC_MUSIC_VOLUME=0.5
```

2. 音频文件要求：
   - 必须是公开可访问的URL
   - 支持格式：MP3, OGG, WAV等
   - 建议使用CDN或云存储服务

## ⚙️ 配置选项

- `NEXT_PUBLIC_SPOTIFY_TRACK_ID`: Spotify歌曲ID（可选）
- `NEXT_PUBLIC_AUDIO_URL`: 音频文件URL（可选）
- `NEXT_PUBLIC_AUTO_PLAY_MUSIC`: 是否自动播放（true/false，默认true）
- `NEXT_PUBLIC_MUSIC_VOLUME`: 音量（0.0-1.0，默认0.5）

**注意**: 如果同时设置了Spotify和音频URL，优先使用Spotify。

## 🎨 播放器位置

音乐播放器会显示在网站右下角，是一个固定位置的浮动播放器。

## ⚠️ 浏览器自动播放限制

由于浏览器的安全策略，大多数浏览器会阻止自动播放音频。因此：
- 用户首次访问时，需要点击页面任意位置才会开始播放
- 之后在同一会话中会自动播放
- Spotify嵌入播放器通常可以自动播放

## 📝 示例配置

```bash
# .env.local
NEXT_PUBLIC_SPOTIFY_TRACK_ID=4cOdK2wGLETKBW3PvgPWqT
NEXT_PUBLIC_AUTO_PLAY_MUSIC=true
NEXT_PUBLIC_MUSIC_VOLUME=0.3
```

## 🚀 部署到Vercel

在Vercel项目设置中添加相同的环境变量即可。
