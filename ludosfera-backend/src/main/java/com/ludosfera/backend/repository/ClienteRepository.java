package com.ludosfera.backend.repository;

import com.ludosfera.backend.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    Optional<Cliente> findByEmail(String email);
}
