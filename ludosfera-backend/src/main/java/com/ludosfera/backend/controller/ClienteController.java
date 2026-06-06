package com.ludosfera.backend.controller;

import com.ludosfera.backend.dto.*;
import com.ludosfera.backend.model.Cliente;
import com.ludosfera.backend.repository.ClienteRepository;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
    private final ClienteRepository repo;

    public ClienteController(ClienteRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/cadastro")
    public Cliente cadastrar(@RequestBody Cliente c) {
        return repo.save(c);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest r) {
        Cliente c = repo.findByEmail(r.email).orElseThrow(() -> new RuntimeException("Login inválido"));
        if (!Objects.equals(c.getSenha(), r.senha))
            throw new RuntimeException("Login inválido");
        return Map.of("mensagem", "Login realizado", "cliente", c);
    }

    @PostMapping("/recuperar-senha")
    public Map<String, String> recuperar(@RequestBody RecuperarSenhaRequest r) {
        Cliente c = repo.findByEmail(r.email).orElseThrow(() -> new RuntimeException("E-mail não encontrado"));
        String codigo = String.valueOf(new Random().nextInt(900000) + 100000);
        c.setCodigoRecuperacao(codigo);
        repo.save(c);
        System.out.println("CÓDIGO DE RECUPERAÇÃO LUDOSFERA para " + c.getEmail() + ": " + codigo);
        return Map.of("mensagem", "Código gerado. Veja no terminal do backend: " + codigo);
    }

    @PostMapping("/redefinir-senha")
    public Map<String, String> redefinir(@RequestBody RedefinirSenhaRequest r) {
        Cliente c = repo.findByEmail(r.email).orElseThrow(() -> new RuntimeException("E-mail não encontrado"));
        if (c.getCodigoRecuperacao() == null || !c.getCodigoRecuperacao().equals(r.codigo))
            throw new RuntimeException("Código inválido");
        c.setSenha(r.novaSenha);
        c.setCodigoRecuperacao(null);
        repo.save(c);
        return Map.of("mensagem", "Senha alterada com sucesso");
    }
}
