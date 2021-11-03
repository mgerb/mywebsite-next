I like recording my gameplay with the ability to save the last minute of video when I play games.
I currently use [OBS](https://obsproject.com/) to do this, but I was interested in making a much more
simplified tool for the job. OBS is open source and I spent quite a lot of time studying the code
to figure out how this is possible.

I got basic window capture working, but it ended up being too slow. I discovered that I needed to
use shaders to convert images if I wanted to optimize the framerate of recording. This is currently where
the project sits. I may revisit this at some point in the future. I was a fun learning experience.

The project name comes from a play on words with NVidia's [Shadowplay](https://www.nvidia.com/en-us/geforce/geforce-experience/shadowplay/), which is similar game recording software.
