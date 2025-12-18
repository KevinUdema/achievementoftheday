import FetchAchievementButton from "@/components/FetchAchievementButton";
import { GetAccessToken, CharacterDataFetch } from "@/api/DataFetch";
export default async function Home() {
  const token = await GetAccessToken(process.env.api_key, process.env.secret);

  const achievements = await CharacterDataFetch(token);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black xs:items-start">
        <h1 className="mb-5 text-4xl items-center font-bold md:text-4xl lg:text-5xl">
          Marg&apos;s achievement of the day
          {achievements.achievements[105] && (
            <span className="block mt-4 text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
              {achievements.achievements[105].achievement.name}
            </span>
          )}
        </h1>
        <FetchAchievementButton />
      </main>
    </div>
  );
}
