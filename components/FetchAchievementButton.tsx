"use client";
import { GetAccessToken, CharacterDataFetch } from "../api/DataFetch";

export default function FetchAchievementButton() {
  async function handleClick() {
    // const token = await GetAccessToken(process.env.api_key, process.env.secret);
    // const achievements = await CharacterDataFetch(token);
  }

  return (
    <button
      onClick={handleClick}
      className="mt-10 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
    >
      Fetch all Achievement
    </button>
  );
}
