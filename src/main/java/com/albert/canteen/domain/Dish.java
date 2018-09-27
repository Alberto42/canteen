package com.albert.canteen.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.annotation.Generated;


@Data
public class Dish {

    @Id
    public String id;

    private String name;

    private String description;

    private Double price;
    private Double estimatedPreparationTime; //TODO: Double -> Duration

    public Dish(String name, String description, Double price, Double estimatedPreparationTime) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.estimatedPreparationTime = estimatedPreparationTime;
    }
}
