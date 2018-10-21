
from flask import Flask
from flask import request
from pytube import YouTube


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/youtube', methods=['GET', 'POST'])
def youtube_dl():
    if request.method == 'POST':
        print("This is a post")
        yt = YouTube('https://www.youtube.com/watch?v=9bZkp7q19f0', on_progress_callback=progress_function, on_complete_callback=print("Done"))
        # In a perfect would this would come from the post request
        stream = yt.streams.filter(file_extension='mp4', fps='30', res="480p").first()
        stream.download('/tmp')
    else:
        print("This is a get")
        yt = YouTube('https://www.youtube.com/watch?v=9bZkp7q19f0')
        title = yt.title
        print("Now downloading,  " + str(title))
        # In a perfect would this would come from the post request
        stream = yt.streams.filter(file_extension='mp4', res="480p").first()
        print('FileSize : ' + str(round(stream.filesize/(1024*1024))) + 'MB')

        if stream:
            print("Printing")
            stream.download()
        return "OOP OOP OOP OOP OOPA GANGNAM"

def progress_function(self,stream, chunk,file_handle, bytes_remaining):

    total = stream.filesize
    p = 0
    while p <= 100:
        progress = p
        print(str(p)+'%')

