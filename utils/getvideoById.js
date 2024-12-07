import videos from '/data/videos.json';

export const getvideoById = (id) => {
  return videos.find((photo) => photo.videoId === id);
};
