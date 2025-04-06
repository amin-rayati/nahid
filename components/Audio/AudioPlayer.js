"use client";
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

const AudioPlayer = () => {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleLoadedData = () => {
      setDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("loadeddata", handleLoadedData);

      if (audio.readyState >= 2) {
        setDuration(audio.duration);
      }
    }

    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (!duration && audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleProgressChange = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 5;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 5;
  };

  const skipTwoForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipTwoBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handlePlaybackRateChange = () => {
    const rates = [1, 1.5, 2, 0.5];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    setPlaybackRate(nextRate);
    audioRef.current.playbackRate = nextRate;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-[#FEFCED] border-[1px] border-[#EBDFBE] rounded-[16px] p-5 my-5 w-[100%] md:w-[65%] m-auto">
      <div className="flex gap-3 items-center justify-center">
        <button
          onClick={skipTwoForward}
          className="flex items-center justify-center bg-[#FAF1D7] border-[#EBDFBE] border-[1px] w-6 h-6 sm:w-12 sm:h-12 rounded-full"
        >
          <TbPlayerTrackNextFilled
            color="#1E1E1ECC"
            className="size-3 sm:size-5"
          />
        </button>
        <button
          onClick={skipForward}
          className="flex items-center justify-center bg-[#FAF1D7] border-[#EBDFBE] border-[1px] w-6 h-6 sm:w-12 sm:h-12 rounded-full"
        >
          <MdSkipNext color="#1E1E1ECC" className="size-4 sm:size-6" />
        </button>

        <button
          onClick={togglePlay}
          className="flex items-center justify-center bg-[#FAF1D7] border-[#EBDFBE] border-[1px] w-8 h-8 sm:w-16 sm:h-16 rounded-full"
        >
          {isPlaying ? <FaPause color="#354259" /> : <FaPlay color="#354259" />}
        </button>

        <button
          onClick={skipBackward}
          className="flex items-center justify-center bg-[#FAF1D7] border-[#EBDFBE] border-[1px] w-6 h-6 sm:w-12 sm:h-12 rounded-full"
        >
          <MdSkipPrevious color="#1E1E1ECC" className="size-4 sm:size-6" />
        </button>

        <button
          onClick={skipTwoBackward}
          className="flex items-center justify-center bg-[#FAF1D7] border-[#EBDFBE] border-[1px] w-6 h-6 sm:w-12 sm:h-12 rounded-full"
        >
          <TbPlayerTrackPrevFilled
            color="#1E1E1ECC"
            className="size-3 sm:size-5"
          />
        </button>
      </div>

      <audio
        ref={audioRef}
        src="/audio/sound.mp3"
        onTimeUpdate={handleTimeUpdate}
        preload="metadata"
      />

      <div className="flex items-center m-auto gap-2 w-32 sm:w-48 my-5">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full cursor-pointer appearance-none h-1"
          style={{
            background: `linear-gradient(to right, #A0C498 ${volume}%, #EBDFBE ${volume}%)`,
          }}
          dir="ltr"
        />
        <button onClick={() => setVolume(volume === 0 ? 50 : 0)}>
          {volume > 0 ? (
            <Volume2 color="#354259" size={24} />
          ) : (
            <VolumeX color="#354259" size={24} />
          )}
        </button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-[#000000] text-[14px] font-regular">
            {formatTime(duration)}
          </p>
          <div className="h-6 border-l-2 border-[#EBDFBE] mx-2"></div>
          <button
            onClick={handlePlaybackRateChange}
            className="flex items-center gap-1 border-[2px] border-[#354259] rounded-[8px] px-4"
          >
            <p className="text-[#354259] text-[16px] font-bold">x</p>
            <p className="text-[#354259] text-[16px] font-bold">
              {playbackRate}
            </p>
          </button>
        </div>
        <p className="text-[#000000] text-[14px] font-regular">
          {" "}
          {formatTime(currentTime)}
        </p>
      </div>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleProgressChange}
        className="w-full cursor-pointer appearance-none h-1 my-5"
        style={{
          background: `linear-gradient(to right, #A0C498 ${
            (currentTime / duration) * 100
          }%, #EBDFBE ${(currentTime / duration) * 100}%)`,
        }}
        dir="ltr"
      />
    </div>
  );
};

export default AudioPlayer;
