package com.mashemup.mashemup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/submitRequest")
public class RequestController {

    private final RequestRepository requestRepository;

    @Autowired
    public RequestController(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    @PostMapping("/submit")
    public ResponseEntity<String> submitRequest(@ModelAttribute Request request) {
        requestRepository.saveRequest(request);
        return new ResponseEntity<>("Request submitted successfully", HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public List<Request> getAllRequests() {
        return requestRepository.getAllRequests();
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<String> deleteAllRequests() {
        requestRepository.deleteAllRequests();
        return new ResponseEntity<>("All requests deleted successfully", HttpStatus.OK);
    }
}