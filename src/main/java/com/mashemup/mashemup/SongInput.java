package com.mashemup.mashemup;

public class SongInput {
    private String song;
    private String artist;
    private String characterName;

    // getters and setters for all fields
    public String getSong() { return song; }
    public void setSong(String song) { this.song = song; } // Corrected method name

    public String getArtist() { return artist; }
    public void setArtist(String artist) { this.artist = artist; }

    public String getCharacterName() { return characterName; }
    public void setCharacterName(String characterName) { this.characterName = characterName; }
}