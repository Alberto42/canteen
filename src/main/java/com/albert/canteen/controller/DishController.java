package com.albert.canteen.controller;

import com.albert.canteen.domain.Dish;
import com.albert.canteen.repository.DishRepository;
import com.albert.canteen.service.DishService;
import com.albert.canteen.service.DishServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dishes")
public class DishController {

    @Autowired
    private DishService dishService;

    @Autowired
    private DishRepository dishRepository;

    @GetMapping(value = {"", "/"} )
    public Iterable<Dish> getDishes() {
        return dishService.getDishes();
    }

    @GetMapping(value = {"/{dishId}"})
    public Dish getDish(@PathVariable String dishId) {
        return dishRepository.findById(dishId).get();
    }
}
