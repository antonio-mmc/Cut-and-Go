export function VideoBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
            {/* Fallback/Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />

            {/* Simulated "Tech" Video Background using CSS/SVG */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg className="w-full h-full animate-slow-spin-reverse opacity-20 transform scale-[2]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-blue-500/50" />
                    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-indigo-500/30" />
                    <path d="M50 5 L50 0" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
                    <path d="M50 95 L50 100" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
                    <path d="M5 50 L0 50" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
                    <path d="M95 50 L100 50" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />

                    {/* Added diagonal lines for more 'fill' */}
                    <path d="M15 15 L25 25" stroke="currentColor" strokeWidth="0.2" className="text-indigo-400" />
                    <path d="M85 15 L75 25" stroke="currentColor" strokeWidth="0.2" className="text-indigo-400" />
                    <path d="M15 85 L25 75" stroke="currentColor" strokeWidth="0.2" className="text-indigo-400" />
                    <path d="M85 85 L75 75" stroke="currentColor" strokeWidth="0.2" className="text-indigo-400" />
                </svg>

                {/* Scanning lines */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_40%,rgba(59,130,246,0.1)_40%)] bg-[length:100%_8px] opacity-10" />
                <div className="absolute inset-0 animate-scan bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-[30%] w-full" style={{ animationDuration: '4s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }} />
            </div>

            {/* Since we can't easily auto-play real video without file, we use a sophisticated animated CSS pattern 
          that looks like a "machine idle" state. 
          If you have a video file, uncomment the video tag below and put the file in public/
      */}
            {/* 
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      */}
        </div>
    );
}
