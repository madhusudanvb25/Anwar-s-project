import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize, Minimize, X } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const isSeekingRef = useRef(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!videoRef.current) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowRight':
          skipTime(10);
          showOverlay('+10s');
          break;
        case 'ArrowLeft':
          skipTime(-10);
          showOverlay('-10s');
          break;
        case 'ArrowUp':
          setVolume(prev => {
            const newVol = Math.min(1, prev + 0.1);
            videoRef.current!.volume = newVol;
            showOverlay(`Vol ${Math.round(newVol * 100)}%`);
            return newVol;
          });
          break;
        case 'ArrowDown':
          setVolume(prev => {
            const newVol = Math.max(0, prev - 0.1);
            videoRef.current!.volume = newVol;
            showOverlay(`Vol ${Math.round(newVol * 100)}%`);
            return newVol;
          });
          break;
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  const showOverlay = (text: string) => {
    if (!overlayRef.current) return;
    overlayRef.current.textContent = text;
    overlayRef.current.style.opacity = '1';
    setTimeout(() => {
      if (overlayRef.current) overlayRef.current.style.opacity = '0';
    }, 1000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const skipTime = (seconds: number) => {
    if (!videoRef.current || isSeekingRef.current) return;
    isSeekingRef.current = true;
    const newTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + seconds));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    const handler = () => {
      isSeekingRef.current = false;
      videoRef.current?.removeEventListener('seeked', handler);
    };
    videoRef.current.addEventListener('seeked', handler);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = parseFloat(e.target.value);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <div
        ref={containerRef}
        className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-6xl w-full mx-4'}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        <div ref={overlayRef} className="absolute top-1/2 left-1/2 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 z-20 pointer-events-none" />

        {!isFullscreen && (
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl font-bold z-10"
          >
            <X className="w-8 h-8" />
          </button>
        )}

        <div className="relative bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className={`w-full ${isFullscreen ? 'h-screen' : 'h-auto max-h-[80vh]'} cursor-pointer`}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-between text-white mb-2 text-sm">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full appearance-none h-2 bg-gray-700 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-emerald-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer mb-4"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => skipTime(-10)}
                  className="text-white hover:text-emerald-400 transition-colors"
                  title="Rewind 10 seconds"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={() => skipTime(10)}
                  className="text-white hover:text-emerald-400 transition-colors"
                  title="Forward 10 seconds"
                >
                  <SkipForward className="w-5 h-5" />
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-emerald-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => {
                    const vol = parseFloat(e.target.value);
                    if (videoRef.current) videoRef.current.volume = vol;
                    setVolume(vol);
                  }}
                  className="w-24"
                  title="Volume"
                />
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-emerald-400 transition-colors"
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </button>

                {isFullscreen && (
                  <button
                    onClick={onClose}
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {!isFullscreen && (
          <h3 className="text-white text-xl font-semibold mt-4 text-center">{title}</h3>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

// This component provides a responsive video player with controls for play/pause, mute/unmute, volume adjustment, and fullscreen toggle.
// It also includes a progress bar, time display, and keyboard shortcuts for enhanced user experience.