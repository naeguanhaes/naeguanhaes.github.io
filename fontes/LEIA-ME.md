# Fontes: o texto dos dois PPCs

Aqui está o texto puro dos Projetos Pedagógicos dos dois cursos, extraído
dos PDFs oficiais com `pdftotext -layout -enc UTF-8`.

| Arquivo | Origem |
| --- | --- |
| `ppc-direito.txt` | PPC do curso de Direito, aprovado pela Resolução COEPE/UEMG nº 458, de 06/03/2024, publicada em 08/03/2024 |
| `ppc-eng.txt` | PPC do curso de Engenharia Civil, Unidade Guanhães, 2024 |

## Para que servem

Não são páginas do site e nenhum estudante passa por aqui. Eles existem
para que a ferramenta `ferramentas/checar-ementas.js` possa provar, a cada
publicação, que as 190 ementas e as mais de 1.300 referências de
`assets/dados-ementas.js` continuam idênticas ao documento oficial.

A prova é simples e forte: tirando tudo o que não é letra nem número, a
sequência de caracteres do site tem de aparecer, inteira, dentro do PPC.
Se alguém editar uma ementa à mão e mudar uma palavra, a inspeção acusa e
a publicação é barrada.

## Quando trocar

Quando a Universidade aprovar um PPC novo:

1. Baixe o PDF oficial.
2. Extraia com `pdftotext -layout -enc UTF-8 arquivo.pdf ppc-xxx.txt`.
3. Substitua o arquivo aqui e atualize a resolução na tabela acima.
4. Refaça a transcrição das ementas e rode `node ferramentas/checar-ementas.js`.

Enquanto o PPC for o mesmo, estes arquivos não mudam.
