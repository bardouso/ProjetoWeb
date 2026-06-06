package com.ludosfera.backend.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.*;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @Column(length = 1000)
    private String descricao;
    private BigDecimal preco;
    private String sku;
    private String categoria;
    @Column(length = 1000)
    private String keywords;
    private Integer minJogadores;
    private Integer maxJogadores;
    @Column(length = 3000)
    private String detalhesLongos;
    private String idade, tempo, idioma, lancamento, editora, designer, mecanicas, perfil;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> fotos = new ArrayList<>();
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> componentes = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Integer getMinJogadores() {
        return minJogadores;
    }

    public void setMinJogadores(Integer minJogadores) {
        this.minJogadores = minJogadores;
    }

    public Integer getMaxJogadores() {
        return maxJogadores;
    }

    public void setMaxJogadores(Integer maxJogadores) {
        this.maxJogadores = maxJogadores;
    }

    public String getDetalhesLongos() {
        return detalhesLongos;
    }

    public void setDetalhesLongos(String detalhesLongos) {
        this.detalhesLongos = detalhesLongos;
    }

    public String getIdade() {
        return idade;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getTempo() {
        return tempo;
    }

    public void setTempo(String tempo) {
        this.tempo = tempo;
    }

    public String getIdioma() {
        return idioma;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }

    public String getLancamento() {
        return lancamento;
    }

    public void setLancamento(String lancamento) {
        this.lancamento = lancamento;
    }

    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getDesigner() {
        return designer;
    }

    public void setDesigner(String designer) {
        this.designer = designer;
    }

    public String getMecanicas() {
        return mecanicas;
    }

    public void setMecanicas(String mecanicas) {
        this.mecanicas = mecanicas;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }

    public List<String> getFotos() {
        return fotos;
    }

    public void setFotos(List<String> fotos) {
        this.fotos = fotos;
    }

    public List<String> getComponentes() {
        return componentes;
    }

    public void setComponentes(List<String> componentes) {
        this.componentes = componentes;
    }
}
