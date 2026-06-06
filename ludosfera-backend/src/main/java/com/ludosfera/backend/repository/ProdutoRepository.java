package com.ludosfera.backend.repository;

import com.ludosfera.backend.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByNomeContainingIgnoreCaseOrCategoriaContainingIgnoreCaseOrKeywordsContainingIgnoreCase(String n,
            String c, String k);
}
