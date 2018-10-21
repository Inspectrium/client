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
