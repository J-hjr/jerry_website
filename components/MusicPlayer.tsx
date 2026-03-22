import { FaPause } from '@react-icons/all-files/fa/FaPause'
import { FaPlay } from '@react-icons/all-files/fa/FaPlay'
import * as React from 'react'

import styles from './MusicPlayer.module.css'

interface MusicPlayerProps {
  // Spotify track ID or direct audio URL
  spotifyTrackId?: string
  audioUrl?: string
  autoPlay?: boolean
  volume?: number
}

export function MusicPlayer({
  spotifyTrackId,
  audioUrl,
  autoPlay = true,
  volume = 0.5
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)
  const [hasUserInteracted, setHasUserInteracted] = React.useState(false)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const spotifyRef = React.useRef<HTMLIFrameElement | null>(null)

  React.useEffect(() => {
    setIsMounted(true)
    
    // 监听用户交互以启用自动播放
    const handleUserInteraction = () => {
      setHasUserInteracted(true)
      if (autoPlay && !isPlaying && audioRef.current) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false))
        }
      }
    }

    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [autoPlay, isPlaying])

  React.useEffect(() => {
    if (!isMounted || !audioUrl || !audioRef.current) return

    audioRef.current.volume = volume
    
    // 只有在用户交互后才尝试自动播放
    if (hasUserInteracted && autoPlay && !isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    }
  }, [isMounted, hasUserInteracted, autoPlay, audioUrl, volume, isPlaying])

  const togglePlay = React.useCallback(() => {
    if (spotifyTrackId && spotifyRef.current) {
      // Spotify iframe控制
      const spotifyFrame = spotifyRef.current
      if (isPlaying) {
        spotifyFrame.contentWindow?.postMessage(
          JSON.stringify({ command: 'pause' }),
          'https://open.spotify.com'
        )
      } else {
        spotifyFrame.contentWindow?.postMessage(
          JSON.stringify({ command: 'play' }),
          'https://open.spotify.com'
        )
      }
    } else if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying, spotifyTrackId])

  // 如果使用Spotify，渲染Spotify嵌入
  if (spotifyTrackId && isMounted) {
    return (
      <div className={styles.musicPlayer}>
        <iframe
          ref={spotifyRef}
          src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&autoplay=${autoPlay ? '1' : '0'}`}
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className={styles.spotifyPlayer}
        />
      </div>
    )
  }

  // 如果使用音频URL，渲染HTML5播放器
  if (audioUrl && isMounted) {
    return (
      <div className={styles.musicPlayer}>
        <audio
          ref={audioRef}
          src={audioUrl}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        <button
          className={styles.playButton}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    )
  }

  return null
}
