There are plenty of Discord music bots out there that play from Youtube and various other sites,
but I wanted one that plays from any site supported by [yt-dlp](https://github.com/yt-dlp/yt-dlp) (formerly youtube-dl).
Theoretically any site that has a video can be played through discord with a command.

This bot downloads the video in the play command, converts it to audio, then pipes it through discord.

### Bot Features

- queue up audio from a wide variety of sites
- start audio track from specific timestamp (see Commands)
- support for timestamp in Youtube URL
- skip/pause/resume tracks
- set volume
