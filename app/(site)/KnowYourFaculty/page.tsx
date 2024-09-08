"use client"
import React, { useState, useEffect } from 'react';
import FacultyVideoSection from '@/components/VideoPlayer';
import SectionHeader from '@/components/Common/SectionHeader';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25';

async function fetchPlaylistVideos() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    
    if (!apiKey) {
      console.log("WHY THE FUCK IS THE API KEY MISSING?")
      throw new Error('YouTube API key is missing. Please set the YOUTUBE_API_KEY environment variable.');
    }

    const response = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}&playlistId=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3&key=${apiKey}`
    );

    if (!response.ok) {
      const errorMessage = `Failed to fetch playlist videos. HTTP status: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("No videos found or the response format is incorrect.");
    }

    const playlistVideos = data.items.map((item) => {
      if (!item.snippet || !item.snippet.resourceId) {
        return null;
      }

      const { title, description, resourceId } = item.snippet;
      const [name] = title.split(" - ");

      return {
        title: name || "Unknown Faculty",
        
        description: description || "No description available",
        videoUrl: `https://www.youtube.com/watch?v=${resourceId.videoId}`,
        homepage: `https://www.example.com/faculty/${name.replace(/\s+/g, "-").toLowerCase()}`,
      };
    }).filter(video => video !== null);

    return playlistVideos;
  } catch (error) {
    console.error("Error fetching YouTube playlist:", error.message);
    return [];
  }
}

export default function KnowYourFacultyPage() {
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPlaylistVideos() {
      try {
        const videos = await fetchPlaylistVideos();
        setPlaylistVideos(videos);
      } catch (error) {
        setError("Error fetching video data.");
      } finally {
        setLoading(false);
      }
    }

    loadPlaylistVideos();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="pb-20 pt-40">
      <SectionHeader
        headerInfo={{
          title: '',
          subtitle: 'Meet Your Faculties: Learn, Engage, and Inspire',
          description: `"Teaching is not the filling of a pail, but the lighting of a fire." — William Butler Yeats`,
        }}
      />
      {loading ? (
        <p>Loading videos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : playlistVideos.length === 0 ? (
        <p>No videos available. Please check back later.</p>
      ) : (
        <FacultyVideoSection faculties={playlistVideos} />
      )}
    </div>
  );
}
