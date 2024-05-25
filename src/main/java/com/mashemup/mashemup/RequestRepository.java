package com.mashemup.mashemup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RequestRepository {

    @Autowired
    private JdbcTemplate db;

    public void saveRequest(Request request) {
        String sql = "INSERT INTO request (name, email, amountSongs, additionalInfo) VALUES(?,?,?,?)";
        db.update(sql, request.getName(), request.getEmail(), request.getAmountSongs(), request.getAdditionalInfo());

        // Get the id of the request that was just inserted
        int requestId = db.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);

        // Save each SongInput to the song_input table
        for (SongInput songInput : request.getSongInputs()) {
            sql = "INSERT INTO song_input (song, artist, character, request_id) VALUES(?,?,?,?)";
            db.update(sql, songInput.getSong(), songInput.getArtist(), songInput.getCharacter(), requestId);
        }
    }

    public List<Request> getAllRequests() {
        String sql = "SELECT * FROM request";
        List<Request> allRequests = db.query(sql, new BeanPropertyRowMapper<>(Request.class));
        return allRequests;
    }

    public void deleteAllRequests() {
        String sql = "DELETE FROM request";
        db.update(sql);
    }
}