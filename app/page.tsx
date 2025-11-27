export default async function Home() {
  const authResponse = await fetch("https://oauth.battle.net/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${process.env.api_key}&client_secret=${process.env.secret}`,
  });

  const { access_token } = await authResponse.json();

  const response = await fetch(
    "https://eu.api.blizzard.com/profile/wow/character/dentarg/marg/achievements?namespace=profile-eu&locale=en_US",
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  const data = await response.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black xs:items-start">
        <h1 className="mb-5 text-4xl items-center font-bold md:text-4xl lg:text-5xl">
          Marg&apos;s achievement of the day
          {data.achievements[5] && (
            <span className="block mt-4 text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
              {data.achievements[5].achievement.name}
            </span>
          )}
        </h1>
      </main>
    </div>
  );
}
