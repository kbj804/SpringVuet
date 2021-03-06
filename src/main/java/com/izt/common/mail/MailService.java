/*
 * ------------------------------------------------------
 * PROJECT : AI기반 솔루션 지식자산화 
 * NAME : KAKNM01Service.java
 * ------------------------------------------------------
 */

package com.izt.common.mail;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    @Value("${gmail.userid}")
    private String userid;
    @Value("${gmail.password}")
    private String password;
    
    public void sendmail(EmailMessage emailmessage) throws AddressException, MessagingException, IOException {
//        Properties props = new Properties();
//        props.put("mail.smtp.auth", "true");
//        props.put("mail.smtp.starttls.enable", "true");
//        props.put("mail.smtp.host", "smtp.gmail.com");
//        props.put("mail.smtp.port", "587");
//
//        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
//            protected PasswordAuthentication getPasswordAuthentication() {
//                return new PasswordAuthentication(userid, password);
//            }
//        });
        String FROM = "ixvdr@inzent.com";
        String FROMNAME = "iXVDR Admin";
        String HOST = "email-smtp.ap-southeast-2.amazonaws.com";
        String SMTP_USERNAME = "AKIA4NLH6Q46FXJNWW74";
        String SMTP_PASSWORD = "BHYmDikIopo5pshZujGCSpesJrb0TAr7vgIsAmb1MJ6q";

        Properties props = System.getProperties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.host", HOST);
        props.put("mail.smtp.port", "587");

        Session session = Session.getDefaultInstance(props);

        Message msg = new MimeMessage(session);
//        msg.setFrom(new InternetAddress(userid, false));
        Transport transport = null;

        msg.setFrom(new InternetAddress(FROM,FROMNAME));

        transport = session.getTransport();

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailmessage.getTo_address()));
        msg.setSubject(emailmessage.getSubject());
        msg.setContent(emailmessage.getBody(),"text/html; charset=UTF-8");
        msg.setSentDate(new Date());
        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent(emailmessage.getBody(), "text/html; charset=utf-8");

        transport.connect(HOST, SMTP_USERNAME, SMTP_PASSWORD);
        transport.sendMessage(msg, msg.getAllRecipients());
//        Transport.send(msg);
    }

}