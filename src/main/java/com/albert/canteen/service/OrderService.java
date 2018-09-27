package com.albert.canteen.service;

import com.albert.canteen.domain.Order;

public interface OrderService {
    public Iterable<Order> getOrdersFromTheLast24Hours();
    public void addNewOrder(String dishId, Integer seat);
}
