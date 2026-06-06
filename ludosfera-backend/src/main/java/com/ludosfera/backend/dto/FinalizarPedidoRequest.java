package com.ludosfera.backend.dto;

import java.math.BigDecimal;
import java.util.*;

public class FinalizarPedidoRequest {
    public String nomeCliente, emailCliente, enderecoEntrega, formaPagamento;
    public List<Item> itens;

    public static class Item {
        public Long produtoId;
        public String nomeProduto;
        public Integer quantidade;
        public BigDecimal precoUnitario;
    }
}
