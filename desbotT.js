var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  var sender = message.author;
  var mentionedUsers = message.mentions.users;
  var msg = message.content.toUpperCase();
  var prefix = '>'
  var today = new Date()
  let Day = today.toString().split(" ")[0].concat("day");
  let Month = today.toString().split(" ")[1]
  let Year = today.toString().split(" ")[3]
  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toUpperCase();
  const rando_imgs = [
    'https://i.imgur.com/eNgkrv1.jpg',
    'https://i.imgur.com/nCH23RH.jpg',
    'https://cdn.discordapp.com/attachments/450000661241659422/451515425977794560/479d91d.png',
    'https://thebarchive.com/data/b/thumb/1527/72/1527720122643s.jpg',
    'https://thebarchive.com/data/b/thumb/1527/71/1527715642392s.jpg',
    'https://thebarchive.com/data/b/thumb/1522/94/1522940563461s.jpg',
    'https://thebarchive.com/data/b/thumb/1527/49/1527490144473s.jpg',
    'https://thebarchive.com/data/b/thumb/1527/67/1527677972072s.jpg',
    'https://thebarchive.com/data/b/thumb/1465/23/1465232048317s.jpg',
    'https://thebarchive.com/data/b/thumb/1519/84/1519843747601s.jpg',
    'https://thebarchive.com/data/b/thumb/1527/66/1527668155040s.jpg',
    'https://thebarchive.com/data/b/thumb/1468/53/1468532876918s.jpg',
    'https://thebarchive.com/data/b/thumb/1527/65/1527658589377s.jpg',
    'https://thebarchive.com/data/b/thumb/1527/64/1527641269270s.jpg',
    'https://thebarchive.com/data/b/thumb/1527/62/1527627634526s.jpg',
    'https://thebarchive.com/data/b/image/1465/33/1465330093951.jpg',
    'https://thebarchive.com/data/b/image/1494/71/1494712703659.jpg',
    'https://thebarchive.com/data/b/image/1527/49/1527496995304.jpg',
    'https://thebarchive.com/data/b/image/1520/06/1520066949132.jpg',
    'https://thebarchive.com/data/b/image/1505/11/1505110859545.jpg',
    'https://thebarchive.com/data/b/image/1527/56/1527561687641.jpg',
    'https://thebarchive.com/data/b/image/1527/55/1527554765771.jpg',
    'https://thebarchive.com/data/b/image/1526/94/1526943636616.jpg',
    'https://thebarchive.com/data/b/image/1527/52/1527527650964.jpg',
    'https://thebarchive.com/data/b/image/1483/01/1483012306078.jpg',
    'https://thebarchive.com/data/b/image/1527/49/1527496555498.jpg',
    'https://thebarchive.com/data/b/image/1527/49/1527490810851.jpg',
    'https://thebarchive.com/data/b/image/1527/40/1527401293321.jpg',
    'https://thebarchive.com/data/b/image/1527/42/1527426748834.jpg',
    'https://thebarchive.com/data/b/image/1527/45/1527458257213.jpg',
    'https://thebarchive.com/data/b/image/1517/75/1517753857667.jpg',
    'https://thebarchive.com/data/b/image/1524/94/1524945338546.jpg',
    'https://thebarchive.com/data/b/image/1527/43/1527439669521.jpg',
    'https://thebarchive.com/data/b/image/1527/43/1527433863927.jpg',
    'https://thebarchive.com/data/b/image/1525/49/1525492654577.jpg',
    'https://thebarchive.com/data/b/image/1450/64/1450641058922.jpg',
    'https://thebarchive.com/data/b/image/1527/37/1527379774651.jpg',
    'https://thebarchive.com/data/b/image/1527/37/1527371210052.png',
    'https://thebarchive.com/data/b/image/1527/36/1527368552670.jpg',
    'https://thebarchive.com/data/b/image/1527/36/1527367377012.jpg',
    'https://thebarchive.com/data/b/image/1527/34/1527343418719.jpg',
    'https://thebarchive.com/data/b/image/1514/31/1514313643915.jpg',
    'https://thebarchive.com/data/b/image/1504/53/1504530248962.jpg',
    'https://thebarchive.com/data/b/image/1527/31/1527314786794.jpg',
    'https://thebarchive.com/data/b/image/1526/68/1526689641922.jpg',
    'https://thebarchive.com/data/b/image/1510/86/1510864613188.jpg',
    'https://thebarchive.com/data/b/image/1516/92/1516923948969.png',
    'https://thebarchive.com/data/b/image/1527/26/1527268572250.jpg',
    'https://thebarchive.com/data/b/image/1527/26/1527269207011.jpg',
    'https://thebarchive.com/data/b/image/1511/81/1511812682723.jpg',
    'https://thebarchive.com/data/b/image/1508/41/1508416013702.jpg',
    'https://cdn.discordapp.com/attachments/355308930429353986/455666887804846080/Screen_Shot_2018-06-11_at_5.40.00_AM.png'
  ]


  if (msg === prefix + 'ABOUT') {
    message.channel.send({embed:{
      title:"About dilly-bot",
      color:0xF1C40F,
      fields:[{
        name:'>about',
        value:'Tells you about the bot, its what you\'re reading right now!',
        inline:false
      },
      {
        name:'>time',
        value:'Tells you the current time here (in EST), don\'t know why you would need that though.',
        inline:false
      },
      {
        name:'>say [insert text]',
        value:'The bot says whatever you type, doesn\'t matter how obscene.',
        inline:false
      },
      {
        name:'>meme',
        value:'Gives you a random meme.',
        inline:false
      },
      {
        name:'>userinfo [mention user]',
        value:'Tells you some info on another user, or yourself if you don\'t mention anyone.',
        inline:false
      }]
    }})
  }

  if (msg === prefix + 'TIME') {
    message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
  }

  if (command === "SAY") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
  
  if (message.content === message.content) {
    message.channel.send(message.content)
  }

  if (command === 'USERINFO') {
    let user;
    if (message.guild.member(message.mentions.users.first())) {
      user = (message.mentions.users.first());
    } else {
      user = message.author;
    }
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(user.avatarURL)
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({embed});
  }

  if (command === 'DM') {
    let user;
    if (message.guild.member(message.mentions.users.first())) {
      user = (message.mentions.users.first());
    } else {
          user = message.guild.me
    }
    user.send('Did someone one say "please spam the lyrics to despacito?"')
  }

  if (command === 'CAMO') {
    let user;
    if (message.guild.member(message.mentions.users.first())) {
      user = (message.mentions.users.first());
    } else {
      user = message.author;
    }
    const member = message.guild.member(user);
    let nickname
    nickname = `${member.nickname !== null ? `${member.nickname}` : `${user.username}` }`
    message.guild.me.setNickname(nickname)
//    let username;
//    username = `${user.username}
//    bot.user.setUsername(username)
    bot.user.setAvatar(user.avatarURL)
  }

  if (command === 'GAME') {
    const newGame = args.join(" ");
    bot.user.setStatus('online', newGame)
  }

  if (msg === prefix + 'MEME') {
    message.channel.send({file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]});
  }

  if (msg.includes('DESPACITO')) {
    message.channel.send('des')
    message.channel.send('pa')
    message.channel.send('cito')
  }

  if (msg.includes("DESPACITO" && "SPAM")) {
    message.channel.send('Did someone one say "please spam the lyrics to despacito?"')
  }

  if (msg.includes("DESPACITO" && "LYRIC")) {
    message.channel.send('Ay')
    message.channel.send('Fonsi')
    message.channel.send('DY')
    message.channel.send('Oh')
    message.channel.send('Oh no, oh no')
    message.channel.send('Oh yeah')
    message.channel.send('Diridiri, dirididi Daddy')
    message.channel.send('Go')
    message.channel.send('Sí, sabes que ya llevo un rato mirándote')
    message.channel.send('Tengo que bailar contigo hoy (DY)')
    message.channel.send('Vi que tu mirada ya estaba llamándome')
    message.channel.send('Muéstrame el camino que yo voy (Oh)')
    message.channel.send('Tú, tú eres el imán y yo soy el metal')
    message.channel.send('Me voy acercando y voy armando el plan')
    message.channel.send('Solo con pensarlo se acelera el pulso (Oh yeah)')
    message.channel.send('Ya, ya me está gustando más de lo normal')
    message.channel.send('Todos mis sentidos van pidiendo más')
    message.channel.send('Esto hay que tomarlo sin ningún apuro')
    message.channel.send('Despacito')
    message.channel.send('Quiero respirar tu cuello despacito')
    message.channel.send('Deja que te diga cosas al oído')
    message.channel.send('Para que te acuerdes si no estás conmigo')
    message.channel.send('Despacito')
    message.channel.send('Quiero desnudarte a besos despacito')
    message.channel.send('Firmo en las paredes de tu laberinto')
    message.channel.send('Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube)')
    message.channel.send('(Sube, sube)')
    message.channel.send('Quiero ver bailar tu pelo')
    message.channel.send('Quiero ser tu ritmo')
    message.channel.send('Que le enseñes a mi boca')
    message.channel.send('Tus lugares favoritos (favoritos, favoritos baby)')
    message.channel.send('Déjame sobrepasar tus zonas de peligro')
    message.channel.send('Hasta provocar tus gritos')
    message.channel.send('Y que olvides tu apellido (Diridiri, dirididi Daddy)')
    message.channel.send('Si te pido un beso ven dámelo')
    message.channel.send('Yo sé que estás pensándolo')
    message.channel.send('Llevo tiempo intentándolo')
    message.channel.send('Mami, esto es dando y dándolo')
    message.channel.send('Sabes que tu corazón conmigo te hace bom, bom')
    message.channel.send('Sabes que esa beba está buscando de mi bom, bom')
    message.channel.send('Ven prueba de mi boca para ver cómo te sabe')
    message.channel.send('Quiero, quiero, quiero ver cuánto amor a ti te cabe')
    message.channel.send('Yo no tengo prisa, yo me quiero dar el viaje')
    message.channel.send('Empecemos lento, después salvaje')
    message.channel.send('Pasito a pasito, suave suavecito')
    message.channel.send('Nos vamos pegando poquito a poquito')
    message.channel.send('Cuando tú me besas con esa destreza')
    message.channel.send('Veo que eres malicia con delicadeza')
    message.channel.send('Pasito a pasito, suave suavecito')
    message.channel.send('Nos vamos pegando, poquito a poquito')
    message.channel.send('Y es que esa belleza es un rompecabezas')
    message.channel.send('Pero pa montarlo aquí tengo la pieza')
    message.channel.send('Despacito')
    message.channel.send('Quiero respirar tu cuello despacito')
    message.channel.send('Deja que te diga cosas al oído')
    message.channel.send('Para que te acuerdes si no estás conmigo')
    message.channel.send('Despacito')
    message.channel.send('Quiero desnudarte a besos despacito')
    message.channel.send('Firmo en las paredes de tu laberinto')
    message.channel.send('Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube)')
    message.channel.send('(Sube, sube)')
    message.channel.send('Quiero ver bailar tu pelo')
    message.channel.send('Quiero ser tu ritmo')
    message.channel.send('Que le enseñes a mi boca')
    message.channel.send('Tus lugares favoritos (favoritos, favoritos baby)')
    message.channel.send('Déjame sobrepasar tus zonas de peligro')
    message.channel.send('Hasta provocar tus gritos')
    message.channel.send('Y que olvides tu apellido')
    message.channel.send('Despacito')
    message.channel.send('Vamos a hacerlo en una playa en Puerto Rico')
    message.channel.send('Hasta que las olas griten "¡ay, bendito!"')
    message.channel.send('Para que mi sello se quede contigo')
    message.channel.send('Pasito a pasito, suave suavecito')
    message.channel.send('Nos vamos pegando, poquito a poquito')
    message.channel.send('Que le enseñes a mi boca ')
    message.channel.send('Tus lugares favoritos (favoritos, favoritos baby)')
    message.channel.send('Pasito a pasito, suave suavecito')
    message.channel.send('Nos vamos pegando, poquito a poquito')
    message.channel.send('Hasta provocar tus gritos ')
    message.channel.send('Y que olvides tu apellido (DY)')
    message.channel.send('Despacito')
  }

});

bot.on('ready', () => {
  console.log('DESPACITO')
  bot.user.setStatus('online')
  bot.user.setActivity('Fallout 4')
})

bot.login(process.env.BOT_TOKEN)
