import 'server-only'; // Optional if you're working in a server-specific environment like Next.js

// Define a dynamic import map for videos
const videoSources = {
  default: () => import('../data/videos.json').then((module) => module.default),
};

// Function to dynamically load all videos
export const getVideos = async (source = 'default') => {
  if (!videoSources[source]) {
    throw new Error(`No video source found for key: ${source}`);
  }
  return videoSources[source]();
};
