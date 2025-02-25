package dio.primeirospassos.App;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SistemaDeMensagem {
    @Autowired
    private Remetente noReply;
    @Autowired
    private Remetente techTeam;

    public void enviarConfirmacaoDeCadastro() {
        System.out.println(noReply);
        System.out.println("Seu cadastro foi aprovado");
    }

    public void enviarMensagemBoasVindas() {
        techTeam.setEmail("techteam@guicastro.dev");
        System.out.println(techTeam);
        System.out.println("Bem-vindo ao time Elite");
    }
}