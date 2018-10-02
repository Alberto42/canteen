package com.albert.canteen.service;

import com.albert.canteen.State;
import com.albert.canteen.domain.Order;
import com.albert.canteen.repository.DishRepository;
import com.albert.canteen.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private DishRepository dishRepository;

    @Override
    public Iterable<Order> getOrdersFromTheLast24Hours() {
        return StreamSupport.stream(orderRepository.findAll().spliterator(), false)
                .filter(
                        order -> order.getTimeStamp().compareTo(LocalDateTime.now().minusHours(24)) == 1)
                .collect(Collectors.toList());

    }

    @Override
    public void addNewOrder(String dishId, Integer seat) {
        Order order = new Order(dishRepository.findById(dishId).get(), State.AWAITING, seat);
        orderRepository.save(order);
        Runnable make_served = new Runnable() {

            @Override
            public void run() {
                try {
                    Thread.sleep(new Double(
                            order.getDish().getEstimatedPreparationTime() * 60 * 1000)
                            .intValue());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                Order order2 = orderRepository.findById(order.getId()).get();
                order2.setState(State.SERVED);
                orderRepository.save(order2);
                //TODO: refresh page
            }
        };
        new Thread(make_served).start();
    }
}
