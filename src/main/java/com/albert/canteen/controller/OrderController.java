package com.albert.canteen.controller;

import com.albert.canteen.domain.Order;
import com.albert.canteen.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @GetMapping(value = {"","/"})
    public Iterable<Order> getRecentOrders() {
        return orderService.getOrdersFromTheLast24Hours();
    }

    @PostMapping
    public void order(@RequestParam(value = "dishId") String dishId,
                      @RequestParam(value = "seat") Integer seat) {
        orderService.addNewOrder(dishId,seat);
    }
}
