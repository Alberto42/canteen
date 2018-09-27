package com.albert.canteen;

import com.albert.canteen.domain.Dish;
import com.albert.canteen.domain.Order;
import com.albert.canteen.repository.DishRepository;
import com.albert.canteen.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class AddDemoDataIntoDatabase implements ApplicationRunner {

    @Autowired
    DishRepository dishRepository;

    @Autowired
    OrderRepository orderRepository;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        dishRepository.deleteAll();
        Dish texas_onion = new Dish("Texas Onion",
                "Huge onion rings fried golden brown, served with creamy horseradish sauce",
                19., 15.);
        dishRepository.save(texas_onion);
        Dish nachos_muchachos = new Dish("Nachos Muchachos",
                "Tortilla chips fried with cheese, beans, bacon - all topped with Mexican salsa sauce",
                21., 10.);
        dishRepository.save(nachos_muchachos);
        Dish stuffed_potato_skins = new Dish("Stuffed Potato skins", "Potato skins filled with cheese bacon, chives and sour cream - that's all there is and all you need", 25., 20.
        );
        dishRepository.save(stuffed_potato_skins);

        orderRepository.deleteAll();
        orderRepository.save(new Order(texas_onion,State.SERVED,5));
    }
}
