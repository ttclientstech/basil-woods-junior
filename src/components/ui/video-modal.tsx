import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface VideoModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** YouTube video ID or full URL */
  videoUrl: string;
  /** Optional title for the video */
  title?: string;
}

/**
 * Video Modal Component
 * Displays YouTube videos in a responsive modal with smooth animations
 */
const VideoModal: React.FC<VideoModalProps & { isVertical?: boolean }> = ({
  isOpen,
  onClose,
  videoUrl,
  title = "Watch Video",
  isVertical = false
}) => {
  // Extract video ID from URL if full URL is provided
  const getYouTubeEmbedUrl = (url: string): string => {
    // If it's already just an ID
    if (!url.includes('http') && !url.includes('www')) {
      return `https://www.youtube.com/embed/${url}?autoplay=1&rel=0`;
    }

    // Extract ID from various YouTube URL formats
    let videoId = '';

    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  const isYouTube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');
  const embedUrl = isYouTube(videoUrl) ? getYouTubeEmbedUrl(videoUrl) : videoUrl;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`
        ${isVertical ? 'w-auto max-h-[98vh]' : 'max-w-4xl w-[90vw]'} 
        p-0 bg-transparent border-none shadow-none 
        flex flex-col items-center justify-center
        outline-none
      `}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className={`relative ${isVertical ? 'max-h-[92vh] w-auto aspect-[9/16]' : 'w-full'}`}
            >
              {/* Close Button - Playful Style */}
              <DialogClose asChild>
                <button
                  onClick={onClose}
                  className="absolute -top-4 -right-4 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-transform hover:scale-110 hover:rotate-90 active:scale-95 active:shadow-none active:translate-x-1 active:translate-y-1"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[3]" />
                </button>
              </DialogClose>

              {/* Main Container */}
              <div className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative flex flex-col h-full w-full">

                {/* Video Container */}
                <div className={`relative bg-black w-full ${isVertical ? 'flex-1 min-h-0' : 'aspect-video'}`}>
                  {isYouTube(videoUrl) ? (
                    <iframe
                      className="w-full h-full"
                      src={embedUrl}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    />
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      src={embedUrl}
                      title={title}
                      controls
                      autoPlay
                      playsInline
                    />
                  )}
                </div>

                {/* Title Bar */}
                {title && (
                  <div className="p-3 md:p-4 bg-white border-t-4 border-black flex items-center justify-center shrink-0">
                    <h3 className="text-lg md:text-2xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting text-center line-clamp-1">
                      {title}
                    </h3>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;

/**
 * Usage Example:
 *
 * const [isVideoOpen, setIsVideoOpen] = useState(false);
 *
 * <button onClick={() => setIsVideoOpen(true)}>
 *   Watch Video
 * </button>
 *
 * <VideoModal
 *   isOpen={isVideoOpen}
 *   onClose={() => setIsVideoOpen(false)}
 *   videoUrl="https://www.youtube.com/watch?v=w4WyoDOi460"
 *   title="Basil Woods Juniors Story"
 * />
 */
