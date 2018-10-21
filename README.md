# Inspectrium Client

Inspecrtrium is a web app that will check if a video is safe to view for people that may encounter seizures on certain videos. This is the client, initially it will be a basic website that will take in a link and then return if it is safe or not.

(If we have time this will be a chrome extension.)

## Technical Implentation Details

This website will send a `POST` request that will just be JSON containing a youtube link. If it is invalid the server will return a 400 invalid.

```json
{
    link : "YOUTUBE VIDEO LINK"
}
```

The client will then wait for a response from the server with video metadata and a `isWarning` value. The backend will store the result for caching and the front end will display a warning if there is one. The next screen will also embed the video incase if the user wishes to view the video.

### FUUUUUUUTUREEEEE (Chrome Extension)

The client will instead send an array of links/link to the server and then recieve a number of objects- then on YouTube will manipulate the dom to show a `isWarning` flag on the video.


# Note

Backend will be in this repo until we separate it when Andres comes online

Backend algo
Input: Link from youtube

1. Download the video from youtube
2. Open up a video capture thread on the backend loading all the frames
3. On each loaded frame determine the brightness of all frames, cluster all the similiar brightness and contracts together in "scenes" 
4. If there are three scene changes in one second, label the video with a warning.
5. Return 200 once completed 

Output: Boolean `isWarning`