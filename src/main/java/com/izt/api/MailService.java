package com.izt.api;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import java.util.Locale;
import java.util.Properties;

public class MailService {
    protected void sendMail(String to, String subject, String content, int type, String lang) {

//        log.info("sendMail call!");
        if(lang.equals("JP")) lang = "JA";


        String FROM = "ixvdr@inzent.com";
        String FROMNAME = "iXVDR Admin";

//        if(type == 7) to = "kiyh@inzent.com";

//        String HOST = pm.getString("component.smtp.hostName");
//        String SMTP_USERNAME = pm.getString("component.smtp.username");
//        String SMTP_PASSWORD = pm.getString("component.smtp.password");

        String HOST = "email-smtp.ap-southeast-2.amazonaws.com";
        String SMTP_USERNAME = "AKIA4NLH6Q46FXJNWW74";
        String SMTP_PASSWORD = "BHYmDikIopo5pshZujGCSpesJrb0TAr7vgIsAmb1MJ6q";

        //25 or 587
        int PORT = 587;
        //int PORT = 25;

        // Create a Properties object to contain connection configuration information.
        Properties props = System.getProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.port", PORT);

        //props.put("mail.smtp.ssl.enable", "true"); //the default value is false if not set
        props.put("mail.smtp.auth", "true");
        //props.put("mail.smtp.auth.login.disable", "true");  //the default authorization order is "LOGIN PLAIN DIGEST-MD5 NTLM". 'LOGIN' must be disabled since Email Delivery authorizes as 'PLAIN'
        props.put("mail.smtp.starttls.enable", "true");   //TLSv1.2 is required
        props.put("mail.smtp.starttls.required", "true");  //Oracle Cloud Infrastructure required


        //props.put("mail.smtp.auth", "true");
        //props.put("mail.smtp.socketFactory.port", "465");
        //props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
        //props.put("mail.smtp.debug", "true");

        // Create a Session object to represent a mail session with the specified properties.
        Session session = Session.getDefaultInstance(props);
        session.setDebug(true);

        // Create a message with the specified information.
        MimeMessage msg = new MimeMessage(session);
        Transport transport = null;
        try {
//            log.info("Email Sending...");

            msg.setFrom(new InternetAddress(FROM,FROMNAME));
            msg.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
            //msg.setHeader("X-SES-CONFIGURATION-SET", CONFIGSET);
            transport = session.getTransport();

            String mailSubject = "MailSubject";
            String fileName="FileName";
            String mailContext="MailContext";

//            if(1 == type) mailSubject = mm.getMessage("VDR_MAIL_SUBJECT_000" + type, new Locale(lang));
//            else mailSubject = mm.getMessage("VDR_MAIL_SUBJECT_000" + type, subject, new Locale(lang));
            msg.setSubject(mailSubject, "EUC-KR");

            //type
            //1.媛  엯珥덈
            //2.鍮꾨 踰덊샇  옱 꽕 젙  씤利앸쾲 샇
            //3.猷몄뿉  떊洹  臾몄꽌  벑濡
            //4.蹂몄씤 옉 꽦 臾몄꽌 뿉 肄붾찘 듃 異붽
            //5.蹂몄씤 옉 꽦 臾몄꽌 쓽 踰꾩쟾 뾽
            //6. 쉶 썝媛  엯  씤利  硫붿씪
            //7.FAQ 愿 由ъ옄 硫붿씪 諛쒖넚
            //99.怨꾩빟踰덊샇
//            switch (type) {
//                case 1:
//                case 2:
//                case 6:
//                case 7:
//                case 99:
//                    fileName = "config/templates/mail_layout.html";
//                    break;
//                case 3:
//                    fileName = "config/templates/mail_Template_NoBtn.html";;
//                    break;
//                case 4:
//                    fileName = "config/templates/mail_Template_NoBtn.html";
//                    break;
//                case 5:
//                    fileName = "config/templates/mail_Template_NoBtn.html";
//                    break;
//                default:
//                    fileName = "config/templates/mail_Template_NoBtn.html";
//                    break;
//            }
//
//            mailContext = readFile(fileName);
//
//            mailContext = mailContext.replace("SERVER_ADDR", pm.getString("component.url.server"));
//
//            mailContext = mailContext.replace("COMMON_SUB_FOOTER", (type != 7)? mm.getMessage("COMMON_SUB_FOOTER", new Locale(lang)) :"");
//            mailContext = mailContext.replace("COMMON_SUB_HEADER", (type != 7)? mm.getMessage("COMMON_SUB_HEADER", new Locale(lang)) :"");
//            mailContext = mailContext.replace("COMMON_FOOTER", mm.getMessage("COMMON_FOOTER", new Locale(lang)));
//
//            if(1 == type || 2 == type || 6 == type || 7 == type || 99 == type) {
//                mailContext = mailContext.replace("MAIL_HEADER", mm.getMessage("MAIL_HEADER000" + type, new Locale(lang)));
//                mailContext = mailContext.replace("MAIL_CONTENT", mm.getMessage("MAIL_CONTENT000" + type, subject, new Locale(lang)));
//                mailContext = mailContext.replace("MAIL_BTN", mm.getMessage("MAIL_BTN000" + type, content, new Locale(lang)));
//            }

            // 硫붿씪 諛쒖넚
            msg.setContent(mailContext,"text/html; charset=EUC-KR");
            transport.connect(HOST, SMTP_USERNAME, SMTP_PASSWORD);
            // Send the email.
            transport.sendMessage(msg, msg.getAllRecipients());

//            log.info("Email is sented");
        } catch (Exception e) {
            System.out.println("The email was not sent.");
            System.out.println("Error message: " + e.toString());
        } finally
        {
            // Close and terminate the connection.
            try {
                transport.close();
            } catch (MessagingException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }
}
