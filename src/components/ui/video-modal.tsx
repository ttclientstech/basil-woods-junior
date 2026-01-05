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
const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title = "Watch Video"
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
      <DialogContent className="max-w-4xl w-[90vw] p-0 bg-transparent border-none shadow-none sm:max-w-5xl">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative"
            >
              {/* Close Button - Playful Style */}
              <DialogClose asChild>
                <button
                  onClick={onClose}
                  className="absolute -top-6 -right-6 z-50 w-12 h-12 rounded-full bg-red-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-transform hover:scale-110 hover:rotate-90 active:scale-95 active:shadow-none active:translate-x-1 active:translate-y-1"
                  aria-label="Close video"
                >
                  <X className="w-8 h-8 text-white stroke-[3]" />
                </button>
              </DialogClose>

              {/* Main Container */}
              <div className="bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">

                {/* Video Container - 16:9 Aspect Ratio */}
                <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                  {isYouTube(videoUrl) ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={embedUrl}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    />
                  ) : (
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
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
                  <div className="p-4 bg-white border-t-4 border-black flex items-center justify-center">
                    <h3 className="text-xl md:text-2xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting text-center">
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
