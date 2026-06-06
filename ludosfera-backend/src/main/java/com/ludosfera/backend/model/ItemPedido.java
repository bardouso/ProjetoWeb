package com.ludosfera.backend.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class ItemPedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long produtoId;
    private String nomeProduto;
    private Integer quantidade;
    private BigDecimal precoUnitario, subtotal;
    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    public void setProdutoId(Long produtoId) {
        this.produtoId = produtoId;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public void setPrecoUnitario(BigDecimal precoUnitario) {
        this.precoUnitario = precoUnitario;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public Long getId() {
        return id;
    }

    public Long getProdutoId() {
        return produtoId;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public BigDecimal getPrecoUnitario() {
        return precoUnitario;
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }
}
