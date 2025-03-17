package com.ecommerce.Dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.Data;
import com.ecommerce.model.OrderItem;
import com.ecommerce.model.OrderStatus;
import com.ecommerce.Dto.OrderItemDTO;


@Data 
public class OrderDTO {

    private Long orderId ; 
    private Long userId ; 
    private Double totalPrice ;
    private OrderStatus status;
    private LocalDateTime orderDate;
    private List<OrderItemDTO> orderItems = new ArrayList<>();
    private Long paymentId;

    public OrderDTO(Long orderId, Double totalPrice, OrderStatus status, LocalDateTime orderDate, List<OrderItemDTO> orderItems , Long userId  , Long paymentId) {
        this.orderId = orderId;
        this.totalPrice = totalPrice;
        this.status = status;
        this.orderDate = orderDate;
        this.orderItems = orderItems;
        this.paymentId = paymentId;
        this.userId = userId ;
    }

    // Getters 
    public Long getOrderId() {
        return this.orderId ;
    }

    public Long getUserId() {
        return this.userId;
    }

    public Double getTotalPrice() {
        return this.totalPrice;
    }

    public OrderStatus getOrderStatus() {
        return this.status;
    }

    public LocalDateTime getOrderDate() {
        return this.orderDate;
    }

    public List<OrderItemDTO> getOrderItems() {
        return this.orderItems;
    }

    public Long getPaymentId() {
        return this.paymentId;
    }

    // Setters 
    public void setOrderId(Long orderId) {
        this.orderId = orderId ;
    }

    public void setUserId(Long userId) {
        this.userId = userId ;
    } 

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice ;
    }

    public void setStatus(OrderStatus status) {
        this.status = status ;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate ;
    }

    public void setOrderItems(List<OrderItemDTO> orderItems) {
        this.orderItems = orderItems;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }
    
}

