#include <stdio.h>

int validarNumero(float *numero, const char *mensagem)
{
    while (1)
    {
        printf("%s", mensagem);
        if (scanf("%f", numero) == 1)
        {
            break;
        }
        else
        {
            system("cls");
            printf("Valor invalido. Por favor, insira um numero valido.\n");
            while (getchar() != '\n')
                ;
        }
    }
    return 0;
}

int main()
{

    int horas = 0;

    printf("Que horas são?\n");
    scanf("%i, &horas");

    if (horas < 12) {
        printf("Bom dia");
    }
    else if (horas >= 12 && horas < 18) {
        printf("Boa tarde");
    }
    else {
        (horas >= 18);
    printf("Boa noite");
    }

    return 0;
}
