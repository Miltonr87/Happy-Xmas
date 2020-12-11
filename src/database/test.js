const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // inserindo dados na tabela
    await saveOrphanage(db, {
        lat: "-9.6402969",
        lng: "-35.7066433",
        name: "Lar São Domingos",
        about: "Fundado em 3 de agosto de 1919, como uma sociedade filantrópica voltada ao acolhimento de menores carentes em regime de internato, a instituição atende atualmente cerca de 250 famílias e 500 jovens, com idade de 6 a 17 anos, que recebem reforço escolar – no contra turno da escola formal – e duas refeições básicas. Eles são amplamente estimulados com atividades culturais, artísticas, esportivas e de psicomotricidade.",
        whatsapp: "9382838",
        images: [
            
            "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9S", 

            "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Sinta-se à vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 7h às 17h",
        open_on_weekends: "1"
    })
      
    // consultando dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"') 
    console.log(orphanage)

    // deletar dado de tabela
    // await db.run("DELETE FROM orphanages WHERE id='4'")
})