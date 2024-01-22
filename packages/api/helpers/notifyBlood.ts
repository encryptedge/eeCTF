import axios from "axios";

export const notifyForBlood = async (
    {
        teamName,
        challengeName,
    }: {
        teamName: string;
        challengeName: string;
    }
) => {
  try {
    const res = await axios.post(process.env.DISCORD_BLOOD_HOOK, {
        content: "@here",
        tts: false,
        embeds: [
          {
            id: Date.now().toString(),
            description: "",
            fields: [],
            title: `🎉 ${teamName} owned first blood 🩸 for ${challengeName}`,
            color: 7_782_594,
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
        username: "eeCTF Blood Notify"
      }
    );
    return res.data;
  } catch (error) {
    if(error instanceof Error) {
        throw new TypeError(error.message);
    }
}
};
