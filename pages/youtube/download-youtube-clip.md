
# How can you download a clip from a youtube video or live stream


## Prerequisites

First you will need [ffmpeg](https://www.ffmpeg.org) and [yt-dlp](https://github.com/yt-dlp/yt-dlp) installed, if you don't have them you can install them here: [ffmpeg](https://www.ffmpeg.org/download.html), [yt-dlp](https://github.com/yt-dlp/yt-dlp/wiki/Installation)


## How to download a clip from a youtube video/stream


- If you don't have yt-dlp and ffmpeg in your PATH, you can add their paths to the PATH environment variable or use the full path to the executables in the next commands. (ex: D:/tools/ffmpeg.exe instead of ffmpeg)

For powershell here is the command to download the clip, if you are using linux or something else, you should replace the ` character with a pipe |, as it acts as a newline separator. or you can delete it completely (and turn it into a one-liner) and it should still work.

```sh
yt-dlp --output output_file_name `
--external-downloader ffmpeg `
--external-downloader-args "ffmpeg_i:-ss 00:00:00.00 -to 00:00:30.00" `
"https://www.youtube.com/watch?v=dQw4w9WgXcQ"

```

<br>

If you want to download the entire video without any timestamps you can remove the timestamps and it should work.

```sh
yt-dlp --output output_file_name `
--external-downloader ffmpeg `
"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```


## Cutting a local video file into a clip

The code above should work, but in some cases when you download a clip, it will startup laggy or not showing, because some frames are missing at the start.
The solution will be to download some extra seconds at the start of the clip and after it is downloaded, use ffmpeg to cut the clip as you need it to be.

```sh
ffmpeg -ss 00:00:10 -to 00:00:30 -i output_file_name -c copy output.mp4
```

<br>
If the input format is different from mp4 (webm or mkv) you can run into a problem of missing audio when you cut the video.

you can fix that problem by first converting the file from webm/mkv to mp4 using ffmpeg as demonstrated below, then you try to cut the file.

```sh
# Convert the file
ffmpeg -i output_file_name.webm converted-output.mp4

# Cut it
ffmpeg -ss 00:00:10 -to 00:00:30 -i converted-output.mp4 -c copy output.mp4

```


## Summary
Here are the commands to download the file with some extra seconds at the start then cutting the resulting output to the desired size.

```sh

yt-dlp --output output_file_name `
--external-downloader ffmpeg `
--external-downloader-args "ffmpeg_i:-ss 00:00:00.00 -to 00:00:30.00" `
"https://www.youtube.com/watch?v=dQw4w9WgXcQ"

ffmpeg -i output_file_name.webm converted-output.mp4

ffmpeg -ss 00:00:10 -to 00:00:30 -i converted-output.mp4 -c copy output.mp4


```

<br>

Thanks for reading, hope it was useful.

