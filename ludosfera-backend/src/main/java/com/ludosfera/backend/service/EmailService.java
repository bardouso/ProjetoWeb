package com.ludosfera.backend.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void enviarCodigoRecuperacao(String destino, String codigo) {
        SimpleMailMessage mensagem = new SimpleMailMessage();

        mensagem.setTo(destino);
        mensagem.setSubject("Código de recuperação - LudosFera");

        mensagem.setText(
                "Olá!\n\n" +
                "Seu código de recuperação de senha da LudosFera é:\n\n" +
                codigo + "\n\n" +
                "Digite esse código na tela de recuperação para criar uma nova senha.\n\n" +
                "Se você não solicitou essa recuperação, ignore este e-mail.\n\n" +
                "Equipe LudosFera"
        );

        mailSender.send(mensagem);
    }
}