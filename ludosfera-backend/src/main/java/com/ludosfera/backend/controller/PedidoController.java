package com.ludosfera.backend.controller;

import com.ludosfera.backend.dto.FinalizarPedidoRequest;
import com.ludosfera.backend.model.*;
import com.ludosfera.backend.repository.PedidoRepository;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.*;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {
    private final PedidoRepository repo;

    public PedidoController(PedidoRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/finalizar")
    public Map<String, Object> finalizar(@RequestBody FinalizarPedidoRequest r) {
        Pedido p = new Pedido();
        p.setNomeCliente(r.nomeCliente);
        p.setEmailCliente(r.emailCliente);
        p.setEnderecoEntrega(r.enderecoEntrega);
        p.setFormaPagamento(r.formaPagamento);
        BigDecimal total = BigDecimal.ZERO;
        for (var it : r.itens) {
            ItemPedido item = new ItemPedido();
            BigDecimal sub = it.precoUnitario.multiply(BigDecimal.valueOf(it.quantidade));
            item.setProdutoId(it.produtoId);
            item.setNomeProduto(it.nomeProduto);
            item.setQuantidade(it.quantidade);
            item.setPrecoUnitario(it.precoUnitario);
            item.setSubtotal(sub);
            item.setPedido(p);
            p.getItens().add(item);
            total = total.add(sub);
        }
        p.setTotal(total);
        Pedido salvo = repo.save(p);
        return Map.of("mensagem", "Pedido finalizado", "pedidoId", salvo.getId(), "total", salvo.getTotal());
    }
}
