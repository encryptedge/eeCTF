import axios from "axios";

export const notifyForNews = async (
    {
        notifText,
    }: {
      notifText: string;
    }
) => {
  try {
    const res = await axios.post(process.env.DISCORD_NEWS_HOOK, {
        content: "@here",
        tts: false,
        embeds: [
          {
            id: Date.now().toString(),
            description: notifText,
            fields: [],
            title: `📢 Announcement by CTF Team`,
            color: 12_728_376,
            footer: {
                icon_url: "https://rcs.encryptedge.in/logo.png",
                text: "eeCTF"
            },
            author: {
                name: "RCS CTF 2024"
            }
          }
        ],
        components: [],
        actions: {},
        username: "eeCTF CTF Notification"
      }
    );
    return res.data;
  } catch (error) {
    if(error instanceof Error) {
        throw new TypeError(error.message);
    }
}
};
