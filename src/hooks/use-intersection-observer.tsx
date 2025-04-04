
import { useState, useEffect, useRef } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  root?: Element | null;
}

export function useInView({
  threshold = 0,
  rootMargin = '0px',
  triggerOnce = false,
  root = null,
}: IntersectionObserverOptions = {}) {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // If we want to trigger only once and it has already triggered, return early
    if (triggerOnce && hasTriggeredRef.current) return;

    if (!window.IntersectionObserver) {
      // Fallback for browsers that don't support IntersectionObserver
      setInView(true);
      return;
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      
      setEntry(entry);
      setInView(entry.isIntersecting);
      
      if (triggerOnce && entry.isIntersecting) {
        hasTriggeredRef.current = true;
        
        // Cleanup observer if triggerOnce is true
        if (observerRef.current && ref.current) {
          observerRef.current.unobserve(ref.current);
        }
      }
    };

    // Cleanup previous observer
    if (observerRef.current && ref.current) {
      observerRef.current.unobserve(ref.current);
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
      root,
    });

    // Start observing
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, root]);

  return { ref, inView, entry };
}
