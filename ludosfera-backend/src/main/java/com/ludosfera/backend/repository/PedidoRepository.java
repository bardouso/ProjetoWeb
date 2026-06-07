package com.ludosfera.backend.repository;

import com.ludosfera.backend.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByEmailCliente(String emailCliente);
}