import 'server-only';

const videoSources = {
  default: () => import('../data/videos.json').then((module) => module.default),
};

export const getVideos = async (source = 'default') => {
  if (!videoSources[source]) {
    throw new Error(`No video source found for key: ${source}`);
  }
  return videoSources[source]();
};
