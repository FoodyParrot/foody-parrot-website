// API client for fetching site content
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

interface SiteContent {
  [section: string]: {
    [key: string]: any;
  };
}

// Cache for content (in-memory for SSR)
let contentCache: SiteContent | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 60 * 1000; // 1 minute cache

// Fetch all site content
export async function fetchAllContent(): Promise<SiteContent> {
  // Check cache
  if (contentCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return contentCache;
  }

  try {
    const response = await fetch(`${API_URL}/site-content`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }

    const data = await response.json();
    contentCache = data.content;
    cacheTimestamp = Date.now();
    return data.content;
  } catch (error) {
    console.error('Error fetching site content:', error);
    // Return empty object on error - pages will use fallback content
    return {};
  }
}

// Fetch content for a specific section
export async function fetchSectionContent(section: string): Promise<Record<string, any>> {
  try {
    const response = await fetch(`${API_URL}/site-content/section/${section}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch section content');
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error(`Error fetching ${section} content:`, error);
    return {};
  }
}

// Helper to get content with fallback
export function getContent<T>(content: Record<string, any>, key: string, fallback: T): T {
  const value = content[key];
  return value !== undefined ? value : fallback;
}
