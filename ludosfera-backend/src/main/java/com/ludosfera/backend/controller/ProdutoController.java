package com.ludosfera.backend.controller;

import com.ludosfera.backend.model.Produto;
import com.ludosfera.backend.repository.ProdutoRepository;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    private final ProdutoRepository repo;

    public ProdutoController(ProdutoRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Produto> listar() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Produto porId(@PathVariable Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }

    @GetMapping("/buscar")
    public List<Produto> buscar(@RequestParam String termo) {
        return repo.findByNomeContainingIgnoreCaseOrCategoriaContainingIgnoreCaseOrKeywordsContainingIgnoreCase(termo,
                termo, termo);
    }
}
