
package com.ludosfera.backend.controller;

import com.ludosfera.backend.dto.LoginRequest;
import com.ludosfera.backend.dto.RecuperarSenhaRequest;
import com.ludosfera.backend.dto.RedefinirSenhaRequest;
import com.ludosfera.backend.model.Cliente;
import com.ludosfera.backend.repository.ClienteRepository;
import com.ludosfera.backend.service.EmailService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Objects;
import java.util.Random;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    private final ClienteRepository repo;
    private final EmailService emailService;

    public ClienteController(ClienteRepository repo, EmailService emailService) {
        this.repo = repo;
        this.emailService = emailService;
    }

    @PostMapping("/cadastro")
    public Cliente cadastrar(@RequestBody Cliente c) {
        return repo.save(c);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest r) {
        Cliente c = repo.findByEmail(r.email)
                .orElseThrow(() -> new RuntimeException("Login inválido"));

        if (!Objects.equals(c.getSenha(), r.senha)) {
            throw new RuntimeException("Login inválido");
        }

        return Map.of(
                "mensagem", "Login realizado",
                "cliente", c
        );
    }

    @PostMapping("/recuperar-senha")
    public Map<String, String> recuperar(@RequestBody RecuperarSenhaRequest r) {
        Cliente c = repo.findByEmail(r.email)
                .orElseThrow(() -> new RuntimeException("E-mail não encontrado"));

        String codigo = String.valueOf(new Random().nextInt(900000) + 100000);

        c.setCodigoRecuperacao(codigo);
        repo.save(c);

        emailService.enviarCodigoRecuperacao(c.getEmail(), codigo);

        return Map.of(
                "mensagem", "Código enviado para o e-mail cadastrado."
        );
    }

    @PostMapping("/redefinir-senha")
    public Map<String, String> redefinir(@RequestBody RedefinirSenhaRequest r) {
        Cliente c = repo.findByEmail(r.email)
                .orElseThrow(() -> new RuntimeException("E-mail não encontrado"));

        if (c.getCodigoRecuperacao() == null ||
                !c.getCodigoRecuperacao().equals(r.codigo)) {
            throw new RuntimeException("Código inválido");
        }

        c.setSenha(r.novaSenha);
        c.setCodigoRecuperacao(null);
        repo.save(c);

        return Map.of(
                "mensagem", "Senha alterada com sucesso"
        );
    }

    
}
