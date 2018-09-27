package com.albert.canteen.domain;

import com.albert.canteen.State;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

@Data
public class Order {
    @Id
    private String id;

    // TODO: user

    @DBRef
    private Dish dish;

    private State state;

    private Integer seat;

    private LocalDateTime timeStamp;

    public Order(Dish dish, State state, Integer seat) {
        this.dish = dish;
        this.state = state;
        this.seat = seat;
        this.timeStamp = LocalDateTime.now();
    }


}
