"use client";

import { useState, useEffect } from "react";
import {
  Share2,
  Check,
  Mail,
  MessageCircle,
  Linkedin,
  Facebook,
  Twitter,
  X,
} from "lucide-react";

interface ShareMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareMenu({ isOpen, onClose }: ShareMenuProps) {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const shareWebsite = (platform: string) => {
    const url = encodeURIComponent(window.location.origin);
    const text = encodeURIComponent("Check out this portfolio!");

    const shareUrls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      email: `mailto:?subject=Check out this portfolio&body=${text} ${url}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1500);
      return;
    }

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
    onClose();
  };

  if (!isOpen) return null;

  // Mobile Bottom Sheet
  if (isMobile) {
    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-in fade-in duration-200"
          onClick={onClose}
        />

        {/* Bottom Sheet */}
        <div className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-2xl border-t border-border/50 z-50 animate-in slide-in-from-bottom duration-300 max-h-[80vh] overflow-y-auto">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 bg-border rounded-full" />
          </div>

          <div className="px-6 pb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Share Portfolio
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Share my work with others
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Share Options */}
            <div className="space-y-2">
              <button
                onClick={() => shareWebsite("linkedin")}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-accent transition-colors text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">
                    LinkedIn
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Share on LinkedIn
                  </p>
                </div>
              </button>

              <button
                onClick={() => shareWebsite("whatsapp")}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-accent transition-colors text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  <MessageCircle className="w-6 h-6 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">
                    WhatsApp
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Share via WhatsApp
                  </p>
                </div>
              </button>

              <button
                onClick={() => shareWebsite("facebook")}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-accent transition-colors text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  <Facebook className="w-6 h-6 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Facebook
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Share on Facebook
                  </p>
                </div>
              </button>

              <button
                onClick={() => shareWebsite("twitter")}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-accent transition-colors text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Twitter
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Share on Twitter
                  </p>
                </div>
              </button>

              <button
                onClick={() => shareWebsite("email")}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-accent transition-colors text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Email
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Share via Email
                  </p>
                </div>
              </button>

              <div className="border-t border-border/50 my-3" />

              <button
                onClick={() => shareWebsite("copy")}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-accent transition-colors text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  {copied ? (
                    <Check className="w-6 h-6 text-primary-500" />
                  ) : (
                    <Share2 className="w-6 h-6 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                  )}
                </div>
                <div>
                  <span
                    className={`text-sm font-medium ${
                      copied ? "text-primary-500" : "text-foreground"
                    }`}
                  >
                    {copied ? "Link Copied!" : "Copy Link"}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {copied ? "Link copied to clipboard" : "Copy to clipboard"}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Desktop Popup
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Share Menu */}
      <div className="absolute bottom-full mb-2 left-0 bg-background rounded-xl shadow-lg border border-border/50 p-2 min-w-[200px] z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
        <div className="text-[10px] font-semibold text-muted-foreground mb-2 px-2 uppercase tracking-wider">
          Share Portfolio
        </div>

        <div className="space-y-0.5">
          <button
            onClick={() => shareWebsite("linkedin")}
            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
          >
            <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-colors" />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              LinkedIn
            </span>
          </button>

          <button
            onClick={() => shareWebsite("whatsapp")}
            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
          >
            <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-colors" />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              WhatsApp
            </span>
          </button>

          <button
            onClick={() => shareWebsite("facebook")}
            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
          >
            <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-colors" />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              Facebook
            </span>
          </button>

          <button
            onClick={() => shareWebsite("twitter")}
            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
          >
            <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-colors" />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              Twitter
            </span>
          </button>

          <button
            onClick={() => shareWebsite("email")}
            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
          >
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-colors" />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              Email
            </span>
          </button>

          <div className="border-t border-border/50 my-1" />

          <button
            onClick={() => shareWebsite("copy")}
            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent transition-colors text-left group"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-primary-500" />
                <span className="text-xs text-primary-500 font-medium">
                  Copied!
                </span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  Copy Link
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
