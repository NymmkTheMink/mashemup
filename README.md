# Mash'em up

## Instructions
### Adding the music video file
Download the file for the music video [here](https://drive.google.com/file/d/1Jj-9WKGNk47B75hzEhVNGTHpdiAgUJIr/view?usp=sharing). 
Add the file for the music video in the static folder.
You can find the static folder in src/main/resources.

### Docker
Download and set up Docker desktop.
Navigate to the mashemup folder in the terminal.
Run the docker compose up --build command you might have to use sudo. 
In docker desktop navigate to the Volumes tab.
Find the volume named mashemup_db_data and press on the import button (a circle with and downward pointing arrow in the middle).
Download the file with the data here.
Choose local file and then press the select file button. 
Find the correct the data file and select it.
Finally press import. 
Navigate to the containers tab
Find the container called mashemup and press start if not started.
You can now go to localhost:8010 to access the website. 

