import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Play, Volume2, VolumeX, Pause, Maximize } from "lucide-react";

export interface VimeoChapter {
  time: number;
  title: string;
}

interface VimeoPlayerProps {
  videoId: string;
  title?: string;
  poster?: string;
  /** Aspect ratio class, e.g. "aspect-video" (16:9) or "aspect-[4/3]". Defaults to aspect-video. */
  aspectClassName?: string;
  /** Optional client-side chapters. Times in seconds, sorted ascending. */
  chapters?: VimeoChapter[];
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VimeoPlayer({
  videoId,
  title = "Video",
  poster,
  aspectClassName = "aspect-video",
  chapters,
}: VimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isScrubbingRef = useRef(false);
  const [, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bufferedPct, setBufferedPct] = useState(0);

  const posterSrc = poster ?? `https://vumbnail.com/${videoId}.jpg`;

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      id: Number(videoId),
      controls: false,
      loop: true,
      muted: true,
      autoplay: false,
      autopause: false,
      dnt: true,
      playsinline: true,
      responsive: true,
      title: false,
      byline: false,
      portrait: false,
    });

    playerRef.current = player;

    player
      .ready()
      .then(() => {
        setIsReady(true);
        player.getDuration().then((d) => setDuration(d)).catch(() => {});
      })
      .catch(() => {});
    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));
    player.on("timeupdate", ({ seconds }) => {
      if (!isScrubbingRef.current) setCurrentTime(seconds);
    });
    player.on("progress", ({ percent }) => setBufferedPct(percent * 100));
    player.on("loaded", () => {
      player.getDuration().then((d) => setDuration(d)).catch(() => {});
    });
    player.on("volumechange", ({ volume }) => {
      player.getMuted().then((m) => setIsMuted(m || volume === 0)).catch(() => {});
    });

    return () => {
      player.destroy().catch(() => {});
      playerRef.current = null;
    };
  }, [videoId]);

  const handlePlay = () => {
    const player = playerRef.current;
    if (!player) return;
    setHasStarted(true);
    player
      .play()
      .then(() => player.setMuted(false))
      .then(() => setIsMuted(false))
      .catch((err) => {
        console.warn("Vimeo play failed:", err);
        setHasStarted(false);
      });
  };

  const toggleMute = async () => {
    const player = playerRef.current;
    if (!player) return;
    const next = !isMuted;
    await player.setMuted(next);
    setIsMuted(next);
  };

  const togglePlay = async () => {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      await player.pause();
    } else {
      await player.play();
    }
  };

  const enterFullscreen = () => {
    const el = containerRef.current?.querySelector("iframe");
    if (el && el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    }
  };

  const seekToClientX = (clientX: number) => {
    const track = trackRef.current;
    const player = playerRef.current;
    if (!track || !player || !duration) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const t = ratio * duration;
    setCurrentTime(t);
    player.setCurrentTime(t).catch(() => {});
  };

  const onTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isScrubbingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    seekToClientX(e.clientX);
  };

  const onTrackPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbingRef.current) return;
    seekToClientX(e.clientX);
  };

  const onTrackPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbingRef.current) return;
    isScrubbingRef.current = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  const onTrackKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const player = playerRef.current;
    if (!player || !duration) return;
    let delta = 0;
    if (e.key === "ArrowRight") delta = 5;
    else if (e.key === "ArrowLeft") delta = -5;
    else return;
    e.preventDefault();
    const t = Math.min(duration, Math.max(0, currentTime + delta));
    setCurrentTime(t);
    player.setCurrentTime(t).catch(() => {});
  };

  const playedPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  const sortedChapters = chapters && chapters.length > 0
    ? [...chapters].sort((a, b) => a.time - b.time)
    : [];
  const activeChapterIndex = sortedChapters.reduce(
    (acc, c, i) => (c.time <= currentTime + 0.25 ? i : acc),
    -1,
  );

  const jumpToChapter = (time: number) => {
    const player = playerRef.current;
    if (!player) return;
    setHasStarted(true);
    setCurrentTime(time);
    player
      .setCurrentTime(time)
      .then(() => player.play())
      .then(() => player.setMuted(false))
      .then(() => setIsMuted(false))
      .catch(() => {});
  };

  return (
    <div className="space-y-3">
      <div
        className={`group relative ${aspectClassName} rounded-xl border border-border bg-black shadow-lg overflow-hidden`}
      >
        {/* Vimeo iframe mounts here */}
        <div ref={containerRef} className="absolute inset-0 w-full h-full" aria-label={title} />

        {/* Poster + Play overlay (pre-start) */}
        {!hasStarted && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 w-full h-full flex items-center justify-center group/play bg-black"
            aria-label="Play video"
          >
            <img
              src={posterSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover/play:opacity-100 transition-opacity"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <span className="relative z-10 flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform group-hover/play:scale-110">
              <Play className="h-8 w-8 ml-1" fill="currentColor" />
            </span>
          </button>
        )}

        {/* Custom controls (post-start) */}
        {hasStarted && (
          <div className="absolute bottom-0 left-0 right-0 z-10 px-3 pt-6 pb-3 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity bg-gradient-to-t from-black/70 via-black/40 to-transparent">
            {/* Timeline */}
            <div
              ref={trackRef}
              role="slider"
              tabIndex={0}
              aria-label="Seek"
              aria-valuemin={0}
              aria-valuemax={Math.max(1, Math.round(duration))}
              aria-valuenow={Math.round(currentTime)}
              onPointerDown={onTrackPointerDown}
              onPointerMove={onTrackPointerMove}
              onPointerUp={onTrackPointerUp}
              onPointerCancel={onTrackPointerUp}
              onKeyDown={onTrackKeyDown}
              className="group/track relative h-3 flex items-center cursor-pointer select-none focus:outline-none"
            >
              <div className="absolute left-0 right-0 h-1 rounded-full bg-white/20 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-white/30"
                  style={{ width: `${bufferedPct}%` }}
                />
                <div
                  className="absolute inset-y-0 left-0 bg-primary"
                  style={{ width: `${playedPct}%` }}
                />
              </div>
              {/* Chapter ticks */}
              {duration > 0 &&
                sortedChapters.map((c, i) => {
                  if (c.time <= 0 || c.time >= duration) return null;
                  const left = (c.time / duration) * 100;
                  const isActive = i === activeChapterIndex;
                  return (
                    <div
                      key={`${c.time}-${i}`}
                      title={`${formatTime(c.time)} · ${c.title}`}
                      className={`pointer-events-none absolute h-2 w-0.5 -translate-x-1/2 rounded-sm ${
                        isActive ? "bg-primary-foreground" : "bg-white/70"
                      }`}
                      style={{ left: `${left}%` }}
                    />
                  );
                })}
              <div
                className="absolute h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow opacity-0 group-hover/track:opacity-100 focus:opacity-100 transition-opacity"
                style={{ left: `${playedPct}%` }}
              />
            </div>

            {/* Controls row */}
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" fill="currentColor" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <span className="text-xs text-white/90 tabular-nums ml-1">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <div className="flex-1" />
              <button
                type="button"
                onClick={enterFullscreen}
                className="h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Chapter list */}
      {sortedChapters.length > 0 && (
        <nav aria-label="Video chapters" className="flex flex-wrap gap-2 justify-center">
          {sortedChapters.map((c, i) => {
            const isActive = i === activeChapterIndex;
            return (
              <button
                key={`${c.time}-${i}`}
                type="button"
                onClick={() => jumpToChapter(c.time)}
                className={`text-xs px-2.5 py-1.5 rounded-full border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:bg-muted"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="tabular-nums opacity-70 mr-1.5">{formatTime(c.time)}</span>
                <span>{c.title}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

