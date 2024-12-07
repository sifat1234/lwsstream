import { NextResponse } from 'next/server';
import { getvideoById } from '@/utils/getvideoById';
import videos from '/data/videos.json';

export async function GET(_request, { params }) {
  const videoId = params?.id;

  try {
    const data = await getvideoById(videoId);

    if (!data) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching video data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    // Extract videoId from the params and the body of the request
    const videoId = params?.id;
    const video = await request.json();

    // Check if the request body contains the necessary data
    if (!video || !video.title || !video.description) {
      return new NextResponse('Invalid request data', { status: 400 });
    }

    const videoIndex = videos.findIndex((v) => v.videoId === videoId);

    // Handle case where the video does not exist
    if (videoIndex === -1) {
      return new NextResponse('Video not found', { status: 404 });
    }

    videos[videoIndex].title = video.title;
    videos[videoIndex].description = video.description;

    return NextResponse.json(videos[videoIndex]);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const videoId = params?.id;

  const videoIndex = videos.findIndex((video) => video.videoId === videoId);

  if (videoIndex === -1) {
    // Handle the case where the video is not found
    return new NextResponse('Video not found', { status: 404 });
  }

  const videoToDelete = videos[videoIndex];
  videos.splice(videoIndex, 1);

  try {
    // Ensure videoToDelete is serializable
    return NextResponse.json(videoToDelete);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
