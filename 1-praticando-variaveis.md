// 1. Declare uma variável

//2. Que tipo de dado é a variável acima?


/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: string
        * age: Number (integer)
        * weight: Number (float)
        * isAdmin: Boolean
        * isAMan: Boolean

*/

/*
    4. A variável human abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
    O humano <name> tem o peso <weight> kg.

    */
        let human = {}
        console.log(human)

    /* 
        5. Declare uma variável do Array, de nome humans e atribua a ela nenhum valor. ou seja, somente o Array vazio.


        */

        let humans = []


        /*
            6.Reatribua valor a variável acima, colocando dentro dela o objeto human da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado inserir ele no Array)



        */

        humans = [
            human
        ]
        console.log(humans)

        /*
        7. Coloque no console o valor da posição zero do Array acima
        */

        console.log(human[0])

    /*
        8. Crie um novo objeto student e coloque na posição 1 do Array Students

        */
        const = newHuman {
            name: "Luan Monteiro",
            age: 30,
            weight: 90.1,
            isAdmin: true,
            isAMan: true
        }

        humans = [
            human,
            newHuman
        ]
        //ou
        humans[1] = newHuman

        /*
        9. Sem rodar o código responda o resultado da saída abaixo:


        a)
        console.log(a)
        var a = 1
        // resposta?? 1

        b)
        let a
        console.log(a)
        {
            let a = 2
            console.log(a)
        }
        console.log(a)
        //Resposta?? 2 2 2


        c)
        console.log(b)
        {
            let b = 3
            console.log(b)
        }
        console.log(b)
        //Resposta??

        d)
        const c = 10
        {
            console.log(c)
            const c = 20
            console.log(c)
        }
        //Resposta??