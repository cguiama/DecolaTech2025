package dio.primeirospassos;

import dio.primeirospassos.App.SistemaDeMensagem;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PrimeirosPassosApplication {

    public static void main(String[] args) {
        SpringApplication.run(PrimeirosPassosApplication.class, args);
    }
    @Bean
        public CommandLineRunner run(SistemaDeMensagem sistema) throws Exception {
            return args -> {
                sistema.enviarConfirmacaoDeCadastro();
                sistema.enviarMensagemBoasVindas();
                sistema.enviarConfirmacaoDeCadastro();
                sistema.enviarConfirmacaoDeCadastro();
            };
    }
    }
