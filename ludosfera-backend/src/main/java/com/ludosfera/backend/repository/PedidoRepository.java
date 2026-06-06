package com.ludosfera.backend.repository;

import com.ludosfera.backend.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
