export async function GetAccessToken(api_key?: string, secret?: string) {
  console.log("Fetching achievements...");
  const authResponse = await fetch("https://oauth.battle.net/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${api_key}&client_secret=${secret}`,
  });

  const { access_token } = await authResponse.json();

  console.log("access_token:", access_token);
  return access_token;
}

export async function AchievementIndexFetch(access_token: string) {
  const response = await fetch(
    "https://eu.api.blizzard.com/data/wow/achievement/index?namespace=static-eu&locale=en_US",
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  const data = await response.json();
  return data;
}

export async function CharacterDataFetch(access_token: string) {
  const response = await fetch(
    "https://eu.api.blizzard.com/profile/wow/character/dentarg/marg/achievements?namespace=profile-eu&locale=en_US",
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  const data = await response.json();
  return data;
}
