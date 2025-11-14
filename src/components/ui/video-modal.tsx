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

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none overflow-hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Close Button */}
              <DialogClose asChild>
                <button
                  onClick={onClose}
                  className="absolute -top-10 right-0 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
                </button>
              </DialogClose>

              {/* Video Container - 16:9 Aspect Ratio */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={embedUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              </div>

              {/* Optional Title Bar */}
              {title && (
                <div className="bg-gradient-to-t from-black/80 to-transparent p-4 absolute bottom-0 left-0 right-0">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {title}
                  </p>
                </div>
              )}
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
