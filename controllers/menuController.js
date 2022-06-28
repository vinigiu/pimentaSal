const menuController = {
    details: (req,res) => {
        const pratos = [
            {
                id: 1,
                nome: "Carpaccio fresco", 
                description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                price: "US$ 65.50",
                image: '/images/carpaccio-de-salmao.jpg'
            },
            {
                id:2,
                nome: "Risotto de berinjela",
                description: "Prato típico",
                price: "US$ 47.00",
                image: '/images/risotto-berinjela-queijo-cabra.jpg'
            },
            {
                id:3,
                nome: "Mousse de arroz",
                description: "Prato típico",
                price: "US$ 27.50",
                image: '/images/mousse-de-arroz-con-leite.jpg'
            },
            {
                id:4,
                nome: "Aspargos brancos",
                description: "Prato típico",
                price: "US$ 37.50",
                image: '/images/aspargos.png'
            }
        ];

        let pratoId = req.params.id;
        const prato = pratos.find(element => element.id == pratoId)

        res.render('detalheMenu.ejs', {
            prato: prato,
        } )
    }
}

module.exports = menuController;