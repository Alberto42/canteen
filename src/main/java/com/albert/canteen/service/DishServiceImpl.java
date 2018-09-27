package com.albert.canteen.service;

import com.albert.canteen.domain.Dish;
import com.albert.canteen.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DishServiceImpl implements DishService {

    @Autowired
    private DishRepository dishRepository;

    @Override
    public Iterable<Dish> getDishes() {
        return dishRepository.findAll();
    }
}
