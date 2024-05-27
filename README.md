# Mash'em up

## Instructions
### Adding the music video file
1. Download the file for the music video [here](https://drive.google.com/file/d/1Jj-9WKGNk47B75hzEhVNGTHpdiAgUJIr/view?usp=sharing). 
2. Add the file for the music video in the static folder. You can find the static folder in src/main/resources.

### Docker
1. Download and set up Docker desktop.
2. Navigate to the mashemup folder in the terminal.
3. Run the docker compose up --build command you might have to use sudo. 
4. In docker desktop navigate to the Volumes tab.
5. Find the volume named mashemup_db_data and press on the import button (a circle with and downward pointing arrow in the middle).
6. Download the file with the data [here](https://drive.google.com/file/d/1s6Rcivhqvtn9YP5gCKgNUNquQx_hutCN/view?usp=sharing).
7. Choose local file and then press the select file button. 
8. Find the correct the data file and select it.
9. Finally press import. 
10. Navigate to the containers tab
11. Find the container called mashemup and press start if not started.
12. You can now go to localhost:8010 to access the website. 

