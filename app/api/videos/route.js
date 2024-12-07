import { NextResponse } from 'next/server';
import { getVideos } from '@/utils/getVideoData';
import videos from '/data/videos.json';

export async function GET() {
  const data = await getVideos();
  console.log(data);
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const video = await request.json();

    // Validate required fields (excluding publishTime)
    if (
      !video.title ||
      !video.description ||
      !video.thumbnail ||
      !video.channelTitle
    ) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          headers: { 'Content-Type': 'application/json' },
          status: 400,
        }
      );
    }

    // Create a new video object with the current timestamp
    const newVideo = {
      videoId: videos.length + 1,
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnail,
      channelTitle: video.channelTitle,
      publishTime: new Date().toISOString(),
    };

    videos.push(newVideo);

    // Return the response
    return new Response(JSON.stringify(newVideo), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  } catch (error) {
    console.error('Error parsing request body:', error);

    // Handle invalid JSON or other errors
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
}
