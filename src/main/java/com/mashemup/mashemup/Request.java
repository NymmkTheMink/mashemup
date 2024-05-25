package com.mashemup.mashemup;

import java.util.List;

public class Request {
    private String name;
    private String email;
    private int amountSongs;
    private List<SongInput> songInputs;
    private String additionalInfo;

    // getters and setters for all fields
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public int getAmountSongs() { return amountSongs; }
    public void setAmountSongs(int amountSongs) { this.amountSongs = amountSongs; }

    public List<SongInput> getSongInputs() { return songInputs; }
    public void setSongInputs(List<SongInput> songCharacterPairs) { this.songInputs = songCharacterPairs; }

    public String getAdditionalInfo() { return additionalInfo; }
    public void setAdditionalInfo(String additionalInfo) { this.additionalInfo = additionalInfo; }
}

