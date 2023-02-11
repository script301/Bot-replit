/*
              LEIA ISSO:
               ┎━━━━━━━━━━━━━━━━━━━━━━━━━━━━
               ┃bom, sei que vcs não vão deixar os creditos
               ┃mas fds, os creditos está abaixo desse card
               ┃esse aqui provavelmente vai ser meu ultimo bot
               ┃então, podem fzer oq quiser, sla, só é proibido
               ┃vender, fora isso se divirta-se 
               ┃os codigos eu tentei deixar bem simples
               ┃sei que nao tem muita coisa aos olhos de quem sabe fazer de vdd
               ┃mas eu tentei, o bot foi feito para vcs aprenderem; eu nao sou monetizado, não sou pago parar fazer isso
               ┃em vez de agradecimentos; eu estou apenas recebendo xingamentos,discursos de odio e afins
               ┃a unica coisa que eu peço é que deixem os creditos...
               ┃   obrigado  todo
               ┖━━━━━━━━━━━━━━━━━━━━━━━━━━━━

creditos pelo bot ao zalts
creditos a api ao brizas
creditos de suporte e comandos por Carlos & Dark
creditos ao antilink o connor 
creditos de ajuda ao spectrum 
algums comandos por luix

Dark Carlos: +55 79 9939-8421
Dark +55 17 99669-0040
Connor +55 81 8863-5885
Spectrum +55 82 9417-4972
Luix +55 16 99722-7231

*/




require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
// CARREGANDO DATABESES
global.db = JSON.parse(fs.readFileSync('./banco de dados/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
              ///SISTEMA DE PREMIUM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
//⚠️modo de usar: apague os 5555555555 e 
//coloca o numero da pessoa que nem o meu
//numero abaixo
let prem2 = [
`556699717091@s.whatsapp.net`, 
`558198643728@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`,
 `5555555555@s.whatsapp.net`,
 `5555555555@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`,
 `5555555555@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`, 
`5555555555@s.whatsapp.net`]// O NÚMERO DA PESSOA DEVE FICAR TODO JUNTO ANTES DO "@s.whatsapp.net"
var Puxada = true


module.exports = doctor = async (doctor, m, chatUpdate, store) => {
	



        try {
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                  ///Budy/Body\\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                    ///PREFIXO\\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                  ///COMANDO\\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                    ///Contedor\\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
        const args = body.trim().split(/ +/).slice(1)
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                  ///PUSHNAME\\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
        const pushname = m.pushName || "No Name"
        
        
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                    ///MENSAGENS DE BOM DIA\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
      var ase = new Date();
      //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
      var tempo = ase.getHours();
      //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
      switch(tempo){
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 0: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 1: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 2: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 3: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 4: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 5: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 6: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 7: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 8: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 9: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 10: tempo = `Bom Dia ${pushname}✨`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 11: tempo = `Boa tarde ${pushname}🔥`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 12: tempo = `Boa tarde ${pushname}🔥`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 13: tempo = `Boa tarde ${pushname}🔥`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 14: tempo = `Boa tarde ${pushname}🔥`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 15: tempo = `Boa tarde ${pushname}🌹`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 16: tempo = `Boa tarde ${pushname}🌹`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 17: tempo = `Boa tarde ${pushname}🌹`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 18: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 19: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 20: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 21: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 22: tempo = `Boa noite ${pushname}🌛`; break;
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     case 23: tempo = `Boa noite ${pushname}🌛`; break;}
     //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
     
          ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///CONSTS DE NOME E NUMERO\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
        const ownerNumber = await doctor.decodeJid(global.owner)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const api = await doctor.decodeJid(global.api)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const namebot = await doctor.decodeJid(global.bot)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const nameWoner = await doctor.decodeJid(global.name)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const nami = await doctor.decodeJid(global.nami)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const V = await doctor.decodeJid(global.V)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const botNumber = await doctor.decodeJid(doctor.user.id)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const itsMe = m.sender == botNumber ? true : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const text = q = args.join(" ")
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const quoted = m.quoted ? m.quoted : m
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
            
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        ///CONSTS DE PREMIUM\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
	    const isPremium2 = prem2.includes(m.sender)
	   //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	    const premm2 = isPremium2 ? 'É PREMIUM' : 'NÃO É PREMIUM' 
	    //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const mime = (quoted.msg || quoted).mimetype || ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	    const isMedia = /image|video|sticker|audio/.test(mime)    
	   //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	  //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
	    ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                          ///CONSTS DE ANTILINK\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\       
      const antilink = JSON.parse(fs.readFileSync('./banco de dados/antis/antilink.json'))
    //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
    const antiracismo = JSON.parse(fs.readFileSync('./banco de dados/antis/antiracismo.json'))
   //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆ 
           ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                          ///CONSTS DE GRUPO\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
        const groupMetadata = m.isGroup ? await doctor.groupMetadata(m.chat).catch(e => {}) : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const groupName = m.isGroup ? groupMetadata.subject : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const participants = m.isGroup ? await groupMetadata.participants : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
    	const doctordmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const isAntilink = m.sender.includes(antilink)
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const isAntiRacismo = m.isGroup ? antiracismo.includes(m.chat) : false
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        const isAntiracismo = m.sender.includes(antiracismo)
       
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
        //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆ 
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                      ///MENUS\\\
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
        const { help } = require('./banco de dados/menus/help.js')
        const { menuclaro } = require('./banco de dados/menus/menuclaro.js')
        const { menuescuro } = require('./banco de dados/menus/menuescuro.js')
        const generator =  require('./banco de dados/nickname generator');
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                      ///DESTRAVAS\\\
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
        const { destrava } = require('./banco de dados/destravas/destrava.js')
        const { destrava2 } = require('./banco de dados/destravas/destrava2.js')
        const { destrava3 } = require('./banco de dados/destravas/destrava3.js')
        const { destrava4 } = require('./banco de dados/destravas/destrava4.js')
        const { destrava5 } = require('./banco de dados/destravas/destrava5.js')
        const { destrava6 } = require('./banco de dados/destravas/destrava6.js')
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                             ///VERIFICADOS\\\
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\            
        //selo com bom dia, boa tarde e boa noite\\
        
        const selo = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "doctor", "caption": `${tempo}`}}}
        const selo2 = { key: {participant: `0@s.whatsapp.net`, mentionedJid: `${doctor}`, ...(m.from ?{ remoteJid: `${m.from}` } : {}) },message: { "extendedTextMessage": {"text":`aqui está ${pushname} \n🌹D O C T O R🌹` }} }             
        const dfrply = fs.readFileSync('./banco de dados/fotos/logo.png')
        const Doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `𝐂𝐎𝐍𝐓𝐀 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐀 𝐏𝐄𝐋𝐎 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏`, jpegThumbnail: dfrply}}}
     ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                             ///LOGOS EM LINK\\\
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\            
     var foda =['https://telegra.ph/file/1c682cc61026feedec1d6.jpg','https://telegra.ph/file/b2411c956cbbd1c7e4fe4.jpg','https://telegra.ph/file/b8a9942814a31dca7e466.jpg']
	 var zatin = foda[Math.floor(Math.random() * foda.length)]
	 const loguin = zatin
         //◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        // SELO TOCAVEL\\
      ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
    
        if (!doctor.public) {
            if (!m.key.fromMe) return
        }
        
const reply = (texto) => {
mimi = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
 doctor.sendMessage(m.chat, {
document: fs.readFileSync('./lib/arquivo.xlsx'),
mimetype: mimi,
jpegThumbnail: null,
mentions: null,
fileName: `ZALTZIN`,
fileLength: 9999999999999999999999999999,
caption: texto,
footer: `Usuario:${pushname}`, 
contextInfo:{"externalAdReply": {"title": `NÃO ME TOQUE🖐`,"body": `Nome: ${pushname} `, "previewType": "PHOTO","thumbnailUrl": `${loguin}`,"thumbnail":  Buffer,"sourceUrl": "https://youtube.com/@zalts"}}}, { quoted: selo})}

const replay = (texto) => {
mimi = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
 doctor.sendMessage(m.chat, {
document: fs.readFileSync('./lib/arquivo.xlsx'),
mimetype: mimi,
jpegThumbnail: null,
mentions: null,
fileName: `ZALTZIN`,
fileLength: 9999999999999999999999999999,
caption: texto,
footer: `Usuario:${pushname}`, 
contextInfo:{"externalAdReply": {"title": `NÃO ME TOQUE🖐`,"body": `Nome: ${pushname} `, "previewType": "PHOTO","thumbnailUrl": `${loguin}`,"thumbnail":  Buffer,"sourceUrl": "https://youtube.com/@zalts"}}}, { quoted: selo})}

     

        
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        // MENSAGENS ALEATORIAS\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
//____random de espera
 var zeltas =['aguarde😐','aguarde🔄','tô com preguiça, mas calma','aguarde seu cmd❗️','enquanto isso vai um café?☕️','aguarde um pouco...','já tô mandando desgraça','quem espera sempre consegue, entt espera ai','calma ai otario','o tempo é relativo amigo','rlx que em menos de 3 minutos eu te envio😮‍💨','calma ai🖖','já estou enviando coroi','já estou enviando kerelo','já estou enviando poula','já estou enviando boy','já já te mando lek🤙','em breve te envio']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
const calmi = zalts
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de adm
var wix =['como eu vou fazer isso sem adm?','me da adm kerelo','passa o adm primeiro','vou esperar meu adm, enquanto isso vai um café?☕️','dps do adm','meu adm?','isso não é comando de adm? entt pq eu não sou um?','calma ai otario, meu adm né?','okok, e meu adm?']
var tenw = wix[Math.floor(Math.random() * wix.length)]
const notmoder = tenw
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de só em grupos
var wiar =['vai ter como eu fazer isso não, só nesse grupo que posso fazer:       https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60','entra aqui e tentar usar isso de novo       https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60','se vc entrar aqui, te juro que faço esse cmd       https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60','não vou mandar pra vc aqui não, entra no grupo         https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60','se tu quiser entra aqui no grupo primeiro       https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60','só em grupos boy        https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60','calma ai otario, meu grupo primeiro né?        https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60','okok entra no grupo      https://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60']
var nort = wiar[Math.floor(Math.random() * wiar.length)]
const ot = nort
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de dono
var wir =['esse comando é apenas pro meu dono seu pola','Você não pods usar esse cmd, vc não é digno','vc não manda em mim otario','vou te mandar no dia de são nunca','não vou fazer não','nan, nem pense, pq tu não é meu dono','não vou mandar pq só meu zaltizinho pode usar esse cmd']
var nuit = wir[Math.floor(Math.random() * wir.length)]
const fort = nuit
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random de premio
var wirar =['esse comando é apenas pros meus usuarios premios','Você não pode usar esse cmd, vc não é digno','vc não pode usar esse comando, pq não é um usuário premium','contrate meu plano premio primeiro e depous use esse cmd','não posso fazer isso para pessoar que não são premio','vc não é premium','não vou mandar pq só meus usuarios premium pode usar esse cmd']
var nut = wirar[Math.floor(Math.random() * wirar.length)]
const fut = nut
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____random emoji
var ji =['⏤͟͟͞͞🌻','๖ۣۜۜ͜͡ீ͜💙 ','✧͢⃟ᤢ🌸-','   ⃟⌭','❦ ⃟ ᭄',' 🐺 ⃟々']
var mo = ji[Math.floor(Math.random() * ji.length)]
const emoji = mo
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆      
//____msg do bot   
		mess = {
			wait: 'Por favor, aguarde um pouco.',
			success: 'Sucesso!',
			wrongFormat: 'Formato incorreto!! Por favor, leia o menu!',
			error: {
				stick: 'Isso não é uma figurinha',
				url: 'Erro no url',
			},
			only: {
				group: 'Somente em grupos!',
				owner: 'Somente para o meu dono!',
				gcadmin: 'Somente para Adms!',
                botadm: 'Eu preciso ter adm pra executar esse comando.',
			}
		}

        msg = {
            espera: 'Aguarde um pouco pfv',
            gp: 'Eu so posso executar esse comando em grupos.',
            dono: 'Somente meu dono pode usar esse comando.',
            adm: 'Esse comando é so para adms',
            botadm: 'Eu preciso ter adm pra executar esse comando :)'
        }

        // PÚBLICO E PRIVADO
        if (!doctor.public) {
            if (!m.key.fromMe) return
        }

        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///DESING DO TERMUX, NÃO MECHA SE NÃO SOUBER\\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
        if (m.message) {
        	await doctor.readMessages([mek.key])
            console.log(chalk.black(chalk.bgWhite('[ D O C T O R]')) + '\n' + chalk.red('┃mensagem'), chalk.cyan(budy || m.mtype) + '\n'  + chalk.red('┃o usuario usou o comando em:'), chalk.cyan(m.isGroup ? pushname : 'chat privado' + '\n' + chalk.red('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')))
        }
	// ESCREVER NA DATABASE A CADA 1         setInterval(() => {
            fs.writeFileSync('./banco de dados/database.json', JSON.stringify(global.db, null, 2))
           

    // RESPOSTA DO COMANDO COM MÍDIA 
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: doctor.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, doctor.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        doctor.ev.emit('messages.upsert', msg)
}


//=================================\\
      
        switch(command) { //o seu burro do krl, quando for adicionar algum comando é em baixo desse switch 
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                   ///AREA DOS MENUS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'help': {
let buttons = [
{buttonId: `${prefix}menu2`, buttonText: {displayText: '⏅ 𝐌 𝐄 𝐍 𝐔 𝟐⏅'}, type: 1}, 
{buttonId: `${prefix}menu`, buttonText: {displayText: '⏅ 𝐌 𝐄 𝐍 𝐔 ⏅'}, type: 1}]
let thumbInfo = `${help(prefix, tempo, pushname)}`;
blabla = fs.readFileSync('./banco de dados/fotos/logo.png');
buttonMessage = {image: blabla, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts_
não apague nada desse comando
pode modificar tudo menos o comando de help`, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage, {quoted: Doc})
}
break

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'menu': {
let reactionMessage = {react: {text: "✅️",key: m.key}}
data = fs.readFileSync('./banco de dados/apis/fotos/foto.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}dono`, buttonText: {displayText: '⏅𝐃 𝐎 𝐍 𝐎⏅'}, type: 1}, 
{buttonId: `${prefix}ping`, buttonText: {displayText: '⏅ 𝐏 𝐈 𝐍 𝐆 ⏅'}, type: 1}]
let thumbInfo = `
┏━━━━━━━━━━━━━━┓
┃[][■■■■■DOCTOR■■■■■■][]┃
┃┗━━━━━━━━━━━━━┛
┠┓
┃├━━━━━━━━━━━━━
┃┃       き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き 
┃┃
┃┃• *Prefix: funciona com todos*
┃┃• *Bot: ${namebot}*
┃┃• *Dono: ${nameWoner}*
┃┃• *Versão: ${V}*
┃┃• *Nome: ${pushname}*
┃┃• *Criador: ${ownerNumber}*
┃├━━━━━━━━━━━━━
┣┛
┗━━━━━━━━━━━━━┓`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `┏━━━━━━━━━━━━━┛
┃❰彡̶𝐈𝐍𝐅𝐎𝐑 𝐃𝐎 𝐁𝐎𝐓 🌹፝⃟❱
┗┓
1  ┃${emoji}${prefix}ping
2  ┃${emoji}${prefix}nomebot
3  ┃${emoji} ${prefix}numerodobot
4  ┃${emoji}${prefix}numerododono
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐓𝐎𝐃𝐎𝐒 𝐎𝐒 𝐌𝐄𝐍𝐔𝐒🌹፝⃟❱
┗┓
5  ┃${emoji}${prefix}help
6  ┃${emoji}${prefix}menu
7  ┃${emoji} ${prefix}menu2
8  ┃${emoji}${prefix}menulist
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎🌹፝⃟❱
┗┓
9  ┃${emoji}${prefix}Marcar 
10┃${emoji}${prefix}Ban 
11┃${emoji}${prefix}Add 
12┃${emoji}${prefix}promove
13┃${emoji}${prefix}despromove
14┃${emoji}${prefix}setdesc
15┃${emoji}${prefix}setimgp
16┃${emoji}${prefix}limpar
17┃${emoji}${prefix}clear
18┃${emoji}${prefix}hidetag
19┃${emoji}${prefix}resetarlink
20┃${emoji}${prefix}antilink3
21┃${emoji}${prefix}antiracismo3
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒🌹፝⃟❱
┗┓
22┃${emoji}${prefix}clima
23┃${emoji}${prefix}tempo
24┃${emoji}${prefix}gerarnick
25┃${emoji}${prefix}calc
26┃${emoji}${prefix}calcular
27┃${emoji}${prefix}calculadora
28┃${emoji}${prefix}simi
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐃𝐎 𝐃𝐎𝐍𝐎🌹፝⃟❱
┗┓
29┃${emoji}${prefix}join
30┃${emoji}${prefix}block
31┃${emoji}${prefix}desblock
32┃${emoji}${prefix}delete
33┃${emoji}${prefix}getid
34┃${emoji}${prefix}getcase
35┃${emoji}${prefix}setbotpp
36┃${emoji}${prefix}sair
37┃${emoji}${prefix}reiniciar
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌🌹፝⃟❱
┗┓
38┃${emoji}${prefix}hentai
39┃${emoji}${prefix}neko
40┃${emoji}${prefix}loli
41┃${emoji}${prefix}hentaigay
42┃${emoji}${prefix}yuri
43┃${emoji}${prefix}creampie
44┃${emoji}${prefix}thighs
45┃${emoji}${prefix}tentacles
46┃${emoji}${prefix}neko2
47┃${emoji}${prefix}pussy
48┃${emoji}${prefix}orgy
49┃${emoji}${prefix}jahy
50┃${emoji}${prefix}glasses
51┃${emoji}${prefix}femdom
52┃${emoji}${prefix}ero
53┃${emoji}${prefix}cuckold
54┃${emoji}${prefix}blowjob
55┃${emoji}${prefix}bdsm
56┃${emoji}${prefix}ass
57┃${emoji}${prefix}ahegao
58┃${emoji}${prefix}uniform
59┃${emoji}${prefix}pantsu
60┃${emoji}${prefix}erokemonomimi
61┃${emoji}${prefix}feet
62┃${emoji}${prefix}nsfwholoero
63┃${emoji}${prefix}nsfwholo
64┃${emoji}${prefix}kitsune
65┃${emoji}${prefix}pussywankgif
66┃${emoji}${prefix}anal
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐈𝐌𝐆 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐀🌹፝⃟❱
┗┓
67┃${emoji}${prefix}wallpaperdark
68┃${emoji}${prefix}wallpapercinza
69┃${emoji}${prefix}wallpaperazulclaro
70┃${emoji}${prefix}wallpaperpreto
71┃${emoji}${prefix}wallpapermarrom
72┃${emoji}${prefix}wallpaperlaranja
73┃${emoji}${prefix}wallpaperanimes
74┃${emoji}${prefix}wallpapers4k
75┃${emoji}${prefix}wallpapersbranco
76┃${emoji}${prefix}wallpapervermelho
77┃${emoji}${prefix}wallpaperverde
78┃${emoji}${prefix}wallpaperazul
79┃${emoji}${prefix}wallpaperoxo
80┃${emoji}${prefix}wallpaperamarelo
81┃${emoji}${prefix}wallpaperosa
82┃${emoji}${prefix}wallpaperciano
83┃${emoji}${prefix}wallpapersmulti
84┃${emoji}${prefix}metadinhanaruto
85┃${emoji}${prefix}metadinhatokyoghoul
86┃${emoji}${prefix}metadinhadragonball
87┃${emoji}${prefix}metadinhakimetsu
88┃${emoji}${prefix}fotodeperfil
89┃${emoji}${prefix}fotodeperfil2
90┃${emoji}${prefix}fotodeperfil3
91┃${emoji}${prefix}fotodeperfil4
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐒𝐇𝐈𝐓𝐏𝐎𝐒𝐓🌹፝⃟❱
┗┓
92┃${emoji}${prefix}shitpost
93┃${emoji}${prefix}shitpost2
94┃${emoji}${prefix}outroshiTpost
95┃${emoji}${prefix}memedasam
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑🌹፝⃟❱
┗┓
96┃${emoji}${prefix}sgif
97┃${emoji}${prefix}f
98┃${emoji}${prefix}s
99┃${emoji}${prefix}sticker
90┃${emoji}${prefix}figu
     ╰╮
100 ┃${emoji}${prefix}figurinha
101 ┃${emoji}${prefix}fig
┏━┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎🌹፝⃟❱
┗━┓
102 ┃${emoji}${prefix}frase
103 ┃${emoji}${prefix}recadoprowhatsapp
104 ┃${emoji}${prefix}frasebonita
105 ┃${emoji}${prefix}frasecriativas
106 ┃${emoji}${prefix}frasefofa
107 ┃${emoji}${prefix}conselhosdemãe
108 ┃${emoji}${prefix}conselhosdepai
109 ┃${emoji}${prefix}conselhos
110 ┃${emoji}${prefix}conselhos2
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐃𝐄 𝐉𝐎𝐆𝐎𝐒🌹፝⃟❱
┗━┓
111 ┃${emoji}${prefix}roleta
112 ┃${emoji}${prefix}caracoroa
113 ┃${emoji}${prefix}roleta2
114 ┃${emoji}${prefix}roleta3
115 ┃${emoji}${prefix}roleta4
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐏𝐎𝐑𝐂𝐄𝐍𝐓𝐀𝐆𝐄𝐌🌹፝⃟❱
┗━┓
116 ┃${emoji}${prefix}magro @
117 ┃${emoji}${prefix}magra @
118 ┃${emoji}${prefix}gordo @
119 ┃${emoji}${prefix}gorda @
120 ┃${emoji}${prefix}velha @
121 ┃${emoji}${prefix}velho @
122 ┃${emoji}${prefix}nãobinario @
123 ┃${emoji}${prefix}hetero @
124 ┃${emoji}${prefix}trans @
125 ┃${emoji}${prefix}lesbica @
126 ┃${emoji}${prefix}pan @
127 ┃${emoji}${prefix}gay @
128 ┃${emoji}${prefix}bi @
129 ┃${emoji}${prefix}lgbt+ @
130 ┃${emoji}${prefix}animal @
131 ┃${emoji}${prefix}cachorro @
132 ┃${emoji}${prefix}cadela @
133 ┃${emoji}${prefix}prostituta @
134 ┃${emoji}${prefix}prostituto @
135 ┃${emoji}${prefix}mendiga @
136 ┃${emoji}${prefix}mendigo @
137 ┃${emoji}${prefix}branca @
138 ┃${emoji}${prefix}branco @
139 ┃${emoji}${prefix}branco 2 @
140 ┃${emoji}${prefix}chata @
141 ┃${emoji}${prefix}chato @
142 ┃${emoji}${prefix}rica @
143 ┃${emoji}${prefix}rico @
144 ┃${emoji}${prefix}macaco @
145 ┃${emoji}${prefix}macaca @
146 ┃${emoji}${prefix}mamaca @
147 ┃${emoji}${prefix}mamaco @
148 ┃${emoji}${prefix}anarquico @
149 ┃${emoji}${prefix}comunista @
150 ┃${emoji}${prefix}nazista @
151 ┃${emoji}${prefix}amarela @
152 ┃${emoji}${prefix}amarelo @
153 ┃${emoji}${prefix}puto @
154 ┃${emoji}${prefix}puta @
155 ┃${emoji}${prefix}feio @
156 ┃${emoji}${prefix}feia @
157 ┃${emoji}${prefix}fofa @
158 ┃${emoji}${prefix}fofo @
159 ┃${emoji}${prefix}fofinha @
160 ┃${emoji}${prefix}fofinho @
161 ┃${emoji}${prefix}%loli @
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐃𝐎𝐑🌹፝⃟❱
┗━┓
162 ┃${emoji}${prefix}toimg
163 ┃${emoji}${prefix}toimage
164 ┃${emoji}${prefix}tourl
165 ┃${emoji}${prefix}togif
166 ┃${emoji}${prefix}toaudio
167 ┃${emoji}${prefix}toaud
168 ┃${emoji}${prefix}toimg
169 ┃${emoji}${prefix}tomp3
170 ┃${emoji}${prefix}tosom
171 ┃${emoji}${prefix}topng
172 ┃${emoji}${prefix}tofoto
173 ┃${emoji}${prefix}toimage
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐀𝐋𝐄𝐓🌹፝⃟❱
┗━┓
174 ┃${emoji}${prefix}packstickeramor
175 ┃${emoji}${prefix}packstickeranime
176 ┃${emoji}${prefix}packstickeranimais
177 ┃${emoji}${prefix}packstickebbs
178 ┃${emoji}${prefix}packstickedesenho
179 ┃${emoji}${prefix}packstickeremoji
180 ┃${emoji}${prefix}packstickegarotas
181 ┃${emoji}${prefix}packstickermemes
182 ┃${emoji}${prefix}packstickergta
183 ┃${emoji}${prefix}packsticker
184 ┃${emoji}${prefix}figupack
185 ┃${emoji}${prefix}wallpaperpack
186 ┃${emoji}${prefix}dado
187 ┃${emoji}${prefix}dado2
188 ┃${emoji}${prefix}emojimix
189 ┃${emoji}${prefix}stickeralet
190 ┃${emoji}${prefix}stickeralet2
191 ┃${emoji}${prefix}stickeralet3
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔 𝐃𝐄 𝐕𝐈𝐃𝐄𝐎𝐒🌹፝⃟❱
┗━┓
192 ┃${emoji}${prefix}video1
193 ┃${emoji}${prefix}video2
194 ┃${emoji}${prefix}video3
195 ┃${emoji}${prefix}video4
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐃𝐄𝐒𝐓𝐑𝐀𝐕𝐀𝐒🌹፝⃟❱
┗━┓
196 ┃${emoji}${prefix}destrava
197 ┃${emoji}${prefix}destrava2
198 ┃${emoji}${prefix}destrava3
199 ┃${emoji}${prefix}destrava4
200 ┃${emoji}${prefix}destrava5
201 ┃${emoji}${prefix}destrava6
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒🌹፝⃟❱
┗━┓
202 ┃${emoji}${prefix}plaquinha
203 ┃${emoji}${prefix}plaquinha2
204 ┃${emoji}${prefix}plaquinha3
205 ┃${emoji}${prefix}plaquinha4
206 ┃${emoji}${prefix}plaquinha5
207 ┃${emoji}${prefix}plaquinha6
208 ┃${emoji}${prefix}plaquinha7
209 ┃${emoji}${prefix}plaquinha8
210 ┃${emoji}${prefix}plaquinha9
211 ┃${emoji}${prefix}plaquinha10
212 ┃${emoji}${prefix}plaquinha11
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔𝐒 𝐋𝐈𝐒𝐓🌹፝⃟❱
┗━┓
213 ┃${emoji}${prefix}destravaslist
214 ┃${emoji}${prefix}jogoslist
215 ┃${emoji}${prefix}videolist
216 ┃${emoji}${prefix}fraseslist
217 ┃${emoji}${prefix}gruplist
218 ┃${emoji}${prefix}premiumlist
┏━┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰彡̶𝐌𝐄𝐍𝐔𝐒 𝐏𝐔𝐗𝐀𝐃𝐀 𝐃𝐀 𝐂𝐎𝐕𝐈𝐃🌹፝⃟❱
┗━┓
219 ┃${emoji}${prefix}covidnobrasil
220 ┃${emoji}${prefix}covidnomundo
221 ┃${emoji}${prefix}covidstatus
┏━┛
┗━━━━━━━━━━━━━━`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, reactionMessage, buttonMessage,{quoted: selo})
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'menu2': { // case criada pelo srbruxo , porfavor nao tire os creditos é bota (( by cu )) caso ao contrário tomara strick.
if (!isCreator) return
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": 
{ "orderId": "449756950375071",
"itemCount": 100000000000, //items do carrinho
"status": "INQUIRY", //status
"surface": "CATALOG", //tipo de base
"message": ` 
┏━━━━━━━━━━━━━━┓
┃[][■■■■■DOCTOR■■■■■■][]┃
┃┗━━━━━━━━━━━━━┛
┃OLA ${tempo}
┗┓
┏┨BEM VINDO(A) AO MEU MENU
┃├━━━━━━━━━━━━━
┃├━━━━━━━━━━━━━
┃┃       き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き 
┃┃
┃┃Prefix: funciona com todos
┃┃Bot: ${namebot}
┃┃Dono: ${nameWoner}
┃┃Versão: ${V} 
┃┃Nome: ${pushname}
┃┃CRIADOR: ${ownerNumber}
┃┃
┣┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝INFOR DO BOT 🐺❱
┗┓
1  ┃${emoji}${prefix}ping
2  ┃${emoji}${prefix}nomebot
3  ┃${emoji} ${prefix}numerodobot
4  ┃${emoji}${prefix}numerododono
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝TODOS OS MENUS❱
┗┓
5  ┃${emoji}${prefix}help
6  ┃${emoji}${prefix}menu
7  ┃${emoji} ${prefix}menu2
8  ┃${emoji}${prefix}menulist
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU DE GRUPO 👥️️❱
┗┓
9  ┃${emoji}${prefix}Marcar 
10┃${emoji}${prefix}Ban 
11┃${emoji}${prefix}Add 
12┃${emoji}${prefix}promove
13┃${emoji}${prefix}despromove
14┃${emoji}${prefix}setdesc
15┃${emoji}${prefix}setimgp
16┃${emoji}${prefix}limpar
17┃${emoji}${prefix}clear
18┃${emoji}${prefix}hidetag
19┃${emoji}${prefix}resetarlink
20┃${emoji}${prefix}antilink3
21┃${emoji}${prefix}antiracismo3
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU DIVERSOS😃❱
┗┓
22┃${emoji}${prefix}clima
23┃${emoji}${prefix}tempo
24┃${emoji}${prefix}gerarnick
25┃${emoji}${prefix}calc
26┃${emoji}${prefix}calcular
27┃${emoji}${prefix}calculadora
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU DO DONO🕴 ❱
┗┓
28┃${emoji}${prefix}join
29┃${emoji}${prefix}block
30┃${emoji}${prefix}desblock
31┃${emoji}${prefix}delete
32┃${emoji}${prefix}getid
33┃${emoji}${prefix}getcase
34┃${emoji}${prefix}setbotpp
35┃${emoji}${prefix}sair
36┃${emoji}${prefix}reiniciar
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU PREMIUM 💎❱
┗┓
37┃${emoji}${prefix}hentai
38┃${emoji}${prefix}neko
39┃${emoji}${prefix}loli
40┃${emoji}${prefix}hentaigay
41┃${emoji}${prefix}yuri
42┃${emoji}${prefix}creampie
43┃${emoji}${prefix}thighs
44┃${emoji}${prefix}tentacles
45┃${emoji}${prefix}neko2
46┃${emoji}${prefix}pussy
47┃${emoji}${prefix}orgy
48┃${emoji}${prefix}jahy
49┃${emoji}${prefix}glasses
50┃${emoji}${prefix}femdom
51┃${emoji}${prefix}ero
52┃${emoji}${prefix}cuckold
53┃${emoji}${prefix}blowjob
54┃${emoji}${prefix}bdsm
55┃${emoji}${prefix}ass
56┃${emoji}${prefix}ahegao
57┃${emoji}${prefix}uniform
58┃${emoji}${prefix}pantsu
59┃${emoji}${prefix}erokemonomimi
60┃${emoji}${prefix}feet
61┃${emoji}${prefix}nsfwholoero
62┃${emoji}${prefix}nsfwholo
63┃${emoji}${prefix}kitsune
64┃${emoji}${prefix}pussywankgif
65┃${emoji}${prefix}anal
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU IMG ALEATORIA 😶‍🌫️❱
┗┓
66┃${emoji}${prefix}wallpaperdark
67┃${emoji}${prefix}wallpapercinza
68┃${emoji}${prefix}wallpaperazulclaro
69┃${emoji}${prefix}wallpaperpreto
70┃${emoji}${prefix}wallpapermarrom
71┃${emoji}${prefix}wallpaperlaranja
72┃${emoji}${prefix}wallpaperanimes
73┃${emoji}${prefix}wallpapers4k
75┃${emoji}${prefix}wallpapersbranco
76┃${emoji}${prefix}wallpapervermelho
77┃${emoji}${prefix}wallpaperverde
78┃${emoji}${prefix}wallpaperazul
79┃${emoji}${prefix}wallpaperoxo
80┃${emoji}${prefix}wallpaperamarelo
81┃${emoji}${prefix}wallpaperosa
82┃${emoji}${prefix}wallpaperciano
83┃${emoji}${prefix}wallpapersmulti
84┃${emoji}${prefix}metadinhanaruto
85┃${emoji}${prefix}metadinhatokyoghoul
86┃${emoji}${prefix}metadinhadragonball
87┃${emoji}${prefix}metadinhakimetsu
88┃${emoji}${prefix}fotodeperfil
89┃${emoji}${prefix}fotodeperfil2
90┃${emoji}${prefix}fotodeperfil3
91┃${emoji}${prefix}fotodeperfil4
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU SHITPOST😅 ❱
┗┓
92┃${emoji}${prefix}shitpost
93┃${emoji}${prefix}shitpost2
94┃${emoji}${prefix}outroshiTpost
95┃${emoji}${prefix}memedasam
┏┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU STICKER🖼 ❱
┗┓
96┃${emoji}${prefix}sgif
97┃${emoji}${prefix}f
98┃${emoji}${prefix}s
99┃${emoji}${prefix}sticker
90┃${emoji}${prefix}figu
   ┗┓
100 ┃${emoji}${prefix}figurinha
101 ┃${emoji}${prefix}fig
┏‐‐┛
┗━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━┛
┃❰📝MENU ALEATORIO🐺❱
┗‐‐┓
102┃${emoji}${prefix}frase
103┃${emoji}${prefix}recadoprowhatsapp
104┃${emoji}${prefix}frasebonita
105┃${emoji}${prefix}frasecriativas
106┃${emoji}${prefix}frasefofa
107┃${emoji}${prefix}conselhosdemãe
108┃${emoji}${prefix}conselhosdepai
109┃${emoji}${prefix}conselhos
110┃${emoji}${prefix}conselhos2
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU DE JOGOS 🎯❱
┗‐‐┓
111┃${emoji}${prefix}roleta
112┃${emoji}${prefix}caracoroa
113┃${emoji}${prefix}roleta2
114┃${emoji}${prefix}roleta3
115┃${emoji}${prefix}roleta4
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU PORCENTAGEM %❱
┗‐‐┓
116┃${emoji}${prefix}magro @
117┃${emoji}${prefix}magra @
118┃${emoji}${prefix}gordo @
119┃${emoji}${prefix}gorda @
120┃${emoji}${prefix}velha @
121┃${emoji}${prefix}velho @
122┃${emoji}${prefix}nãobinario @
123┃${emoji}${prefix}hetero @
124┃${emoji}${prefix}trans @
125┃${emoji}${prefix}lesbica @
126┃${emoji}${prefix}pan @
127┃${emoji}${prefix}gay @
128┃${emoji}${prefix}bi @
129┃${emoji}${prefix}lgbt+ @
130┃${emoji}${prefix}animal @
131┃${emoji}${prefix}cachorro @
132┃${emoji}${prefix}cadela @
133┃${emoji}${prefix}prostituta @
134┃${emoji}${prefix}prostituto @
135┃${emoji}${prefix}mendiga @
136┃${emoji}${prefix}mendigo @
137┃${emoji}${prefix}branca @
138┃${emoji}${prefix}branco @
139┃${emoji}${prefix}branco 2 @
140┃${emoji}${prefix}chata @
141┃${emoji}${prefix}chato @
142┃${emoji}${prefix}rica @
143┃${emoji}${prefix}rico @
144┃${emoji}${prefix}macaco @
145┃${emoji}${prefix}macaca @
146┃${emoji}${prefix}mamaca @
147┃${emoji}${prefix}mamaco @
148┃${emoji}${prefix}anarquico @
149┃${emoji}${prefix}comunista @
150┃${emoji}${prefix}nazista @
151┃${emoji}${prefix}amarela @
152┃${emoji}${prefix}amarelo @
153┃${emoji}${prefix}puto @
154┃${emoji}${prefix}puta @
155┃${emoji}${prefix}feio @
156┃${emoji}${prefix}feia @
157┃${emoji}${prefix}fofa @
158┃${emoji}${prefix}fofo @
159┃${emoji}${prefix}fofinha @
160┃${emoji}${prefix}fofinho @
161┃${emoji}${prefix}%loli @
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU CONVERTEDOR ♻️❱
┗‐‐┓
162┃${emoji}${prefix}toimg
163┃${emoji}${prefix}toimage
164┃${emoji}${prefix}tourl
165┃${emoji}${prefix}togif
166┃${emoji}${prefix}toaudio
167┃${emoji}${prefix}toaud
168┃${emoji}${prefix}toimg
169┃${emoji}${prefix}tomp3
170┃${emoji}${prefix}tosom
171┃${emoji}${prefix}topng
172┃${emoji}${prefix}tofoto
173┃${emoji}${prefix}toimage
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU STICKER ALET♻️❱
┗‐‐┓
174┃${emoji}${prefix}packstickeramor
175┃${emoji}${prefix}packstickeranime
176┃${emoji}${prefix}packstickeranimais
177┃${emoji}${prefix}packstickebbs
178┃${emoji}${prefix}packstickedesenho
179┃${emoji}${prefix}packstickeremoji
180┃${emoji}${prefix}packstickegarotas
181┃${emoji}${prefix}packstickermemes
182┃${emoji}${prefix}packstickergta
183┃${emoji}${prefix}packsticker
184┃${emoji}${prefix}figupack
185┃${emoji}${prefix}wallpaperpack
186┃${emoji}${prefix}dado
187┃${emoji}${prefix}dado2
188┃${emoji}${prefix}emojimix
189┃${emoji}${prefix}stickeralet
190┃${emoji}${prefix}stickeralet2
191┃${emoji}${prefix}stickeralet3
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENU DE VIDEOS🎥❱
┗‐‐┓
192┃${emoji}${prefix}video1
193┃${emoji}${prefix}video2
194┃${emoji}${prefix}video3
195┃${emoji}${prefix}video4
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝DESTRAVAS💻❱
┗‐‐┓
196┃${emoji}${prefix}destrava
197┃${emoji}${prefix}destrava2
198┃${emoji}${prefix}destrava3
199┃${emoji}${prefix}destrava4
200┃${emoji}${prefix}destrava5
201┃${emoji}${prefix}destrava6
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝PLAQUINHAS🔞❱
┗‐‐┓
202┃${emoji}${prefix}plaquinha
203┃${emoji}${prefix}plaquinha2
204┃${emoji}${prefix}plaquinha3
205┃${emoji}${prefix}plaquinha4
206┃${emoji}${prefix}plaquinha5
207┃${emoji}${prefix}plaquinha6
208┃${emoji}${prefix}plaquinha7
209┃${emoji}${prefix}plaquinha8
210┃${emoji}${prefix}plaquinha9
211┃${emoji}${prefix}plaquinha10
212┃${emoji}${prefix}plaquinha11
┏‐‐┛
┗━━━━━━━━━━━━━━┓
┏━━━━━━━━━━━━━━┛
┃❰📝MENUS LIST❱
┗‐‐┓
213┃${emoji}${prefix}destravaslist
214┃${emoji}${prefix}jogoslist
215┃${emoji}${prefix}videolist
216┃${emoji}${prefix}fraseslist
217┃${emoji}${prefix}gruplist
218┃${emoji}${prefix}premiumlist
┏‐‐┛
┗━━━━━━━━━━━━━━
 `, //texto da trava
"thumbnail": fs.readFileSync(`./banco de dados/fotos/foto3.zip`), //foto dela
"orderTitle": ` TRiCK `,  // outro txt kkk
"sellerJid": "6285723156229@s.whatsapp.net", //jids
"token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",	
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: doctor.user.id, quoted: selo })
doctor.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
               ///AREA DOS LIST\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case'figupack': {
let sections = []   
const list = {title: `AQUI ESTA TODOS OS PACK`,
rows: [
{title: "PACK STICKER DE AMOR", rowId: `${prefix}packstickeramor`},
{title: "PACK STICKER DE ANIME", rowId: `${prefix}packstickeranime`},
{title: "PACK STICKER DE DESENHOS", rowId: `${prefix}packstickedesenho`},
{title: "PACK STICKER DE ANIMAIS", rowId: `${prefix}packstickeranimais`},
{title: "PACK STICKER DE BBS", rowId: `${prefix}packstickebbs`},
{title: "PACK STICKER DE GTA", rowId: `${prefix}packstickergta`},
{title: "PACK STICKER DE GAROTAS", rowId: `${prefix}packstickegarotas`},
{title: "PACK STICKER DE EMOJI", rowId: `${prefix}packstickeremoji`},
{title: "PACK STICKER DE MEMES", rowId: `${prefix}packstickermemes`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTA OS PACK DE STICKER`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case'wallpaperpack': {
let sections = []   
const list = {title: `AQUI ESTA TODOS OS PACK`,
rows: [
{title: "WALLPAPER MULTI COR", rowId: `${prefix}wallpapersmulti`},
{title: "WALLPAPER CIANO", rowId: `${prefix}wallpaperciano`},
{title: "WALLPAPER ROSA", rowId: `${prefix}wallpaperosa`},
{title: "WALLPAPER AMARELO", rowId: `${prefix}wallpaperamarelo`},
{title: "WALLPAPER ROXO ", rowId: `${prefix}wallpaperoxo`},
{title: "WALLPAPER AZUL ", rowId: `${prefix}wallpaperazul`},
{title: "WALLPAPER PRETO ", rowId: `${prefix}wallpaperpreto`},
{title: "WALLPAPER CINZA ", rowId: `${prefix}wallpapercinza`},
{title: "WALLPAPER MARROM ", rowId: `${prefix}wallpapermarrom`},
{title: "WALLPAPER LARANJA", rowId: `${prefix}wallpaperlaranja`},
{title: "WALLPAPER AZUL CLARO ", rowId: `${prefix}wallpaperazulclaro`},
{title: "WALLPAPER VERDR ", rowId: `${prefix}wallpaperverde`},
{title: "WALLPAPER VERMELHO ", rowId: `${prefix}wallpapervermelho`},
{title: "WALLPAPER BRANCO ", rowId: `${prefix}wallpapersbranco`},
{title: "WALLPAPER ANIMES ", rowId: `${prefix}wallpaperanimes`},
{title: "WALLPAPER DARK ", rowId: `${prefix}wallpaperdark`},
{title: "WALLPAPER 4K", rowId: `${prefix}wallpapers4k`},
{title: "FOTO DE PERFIL", rowId: `${prefix}fotodeperfil`},
{title: "FOTO DE PERFIL2", rowId: `${prefix}fotodeperfil2`},
{title: "FOTO DE PERFIL3", rowId: `${prefix}fotodeperfil3`},
{title: "FOTO DE PERFIL4", rowId: `${prefix}fotodeperfil4`},
{title: "SHITPOST", rowId: `${prefix}shitpost`},
{title: "SHITPOST2", rowId: `${prefix}shitpost2`},
{title: "SHITPOST3", rowId: `${prefix}outroshiTpost`},
{title: "MEMES DA SAM", rowId: `${prefix}memedasam`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTA OS PACK DE WALLPAPERS`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case'gruplist': {
let sections = []   
const list = {title: `MENU DE GRUPOS
PARA ADMS`,
rows: [
{title: "ANTILINK", rowId: `${prefix}antilink3`},
{title: "RESETA LINK", rowId: `${prefix}resetarlink`},
{title: "CLEAR", rowId: `${prefix}clear`},
{title: "LIMPAR", rowId: `${prefix}limpar`},
{title: "MARCAR", rowId: `${prefix}Marcar`},
{title: "ANTI RACISMO", rowId: `${prefix}antiracismo3`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTÃO TODOS OS COMANDOS
LEMBRANDO QUE TEM QUE SER ADM PARA USALOS`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case'premiumlist': {
let sections = []   
const list = {title: `MENU PREMIUM`,
rows: [
{title: "HENTAI GAY", rowId: `${prefix}hentaigay`},
{title: "LOLIS", rowId: `${prefix}loli`},
{title: "NEKO", rowId: `${prefix}neko`},
{title: "HENTAI", rowId: `${prefix}hentai`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTÃO TODOS OS COMANDOS DE PREMIUM`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case'fraseslist': {
let sections = []   
const list = {title: `MENU ALEATORIO`,
rows: [
{title: "CONSELHOS", rowId: `${prefix}conselhos`},
{title: "FRASES", rowId: `${prefix}frase`},
{title: "RECADOS", rowId: `${prefix}recadoprowhatsapp`},
{title: "FRASES BONITAS", rowId: `${prefix}frasebonita`},
{title: "FRASES CRIATIVAS", rowId: `${prefix}frasecriativas`},
{title: "CONSELHOS DE MÃE", rowId: `${prefix}conselhosdemãe`},
{title: "FRASES FOFAS", rowId: `${prefix}frasefofa`},
{title: "CONSELHOS DE PAI", rowId: `${prefix}conselhosdepai`},
{title: "CONSELHOS 2", rowId: `${prefix}conselhos2`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTÃO TODOS OS COMANDOS DE FRASES`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case'jogoslist': {
let sections = []   
const list = {title: `MENU DE JOGOS `,
rows: [
{title: "CARA OU COROA", rowId: `${prefix}caracoroa`},
{title: "ROLETA 1", rowId: `${prefix}roleta`},
{title: "ROLETA 2", rowId: `${prefix}roleta2`},
{title: "ROLETA 3", rowId: `${prefix}roleta3`},
{title: "ROLETA 4", rowId: `${prefix}roleta4`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTÃO TODOS OS COMANDOS DE JOGOS`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case'videolist': {
let sections = []   
const list = {title: `MENU DE VIDEOS`,
rows: [
{title: "VIDEO 1", rowId: `${prefix}video1`},
{title: "VIDEO 2", rowId: `${prefix}video2`},
{title: "VIDEO 3", rowId: `${prefix}video3`},
{title: "VIDEO 4", rowId: `${prefix}video4`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTÃO TODOS OS COMANDOS DE VIDEO`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case'destravaslist': {
let sections = []   
const list = {title: `MENU DE DESTRAVAS `,
rows: [
{title: "DESTRAVA 1", rowId: `${prefix}destrava`},
{title: "DESTRAVA 2", rowId: `${prefix}destrava2`},
{title: "DESTRAVA 3", rowId: `${prefix}destrava3`},
{title: "DESTRAVA 4", rowId: `${prefix}destrava4`},
{title: "DESTRAVA 5", rowId: `${prefix}destrava5`},
{title: "DESTRAVA 6", rowId: `${prefix}destrava6`},
]
}
sections.push(list)   
const sendm = doctor.sendMessage(m.chat, 
{
text: `AQUI ESTÃO TODOS OS COMANDOS DE DESTRAVA`,
footer:'🌹፝⃟𝑫𝑶𝑪𝑻𝑶𝑹፝⃟🌹',
title: `🌹`,
buttonText: "TOQUE AQUI",
sections
}, { quoted : selo})
}
break

///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
               ///AREA DOS STICKER\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'fig': case 'figurinha': case 'figu': case 'sticker': case 's': case 'f': case 'sgif': {
    if (!quoted) throw `Marque um video ou imagem com o comando ${prefix + command}`
    reply(`${calmi}`)
            if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await doctor.sendImageAsSticker(m.chat, media, selo, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('Marque um video de até 10 segundos!')
        let media = await quoted.download()
        let encmedia = await doctor.sendVideoAsSticker(m.chat, media, selo, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else {
        throw `Hmmm possivel erro, marque um video ou foto com o comando ${prefix + command}\nO video tem que durar 9 segundos`
        }
    }
    break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case 'attp':
if (args.length < 1) return reply(mess.blank);
const bkl = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${q}`);
doctor.sendMessage(m.chat, {sticker: bkl}, {quoted: selo});
break

///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case 'gerarnick':
let nickname = generator.randomNickname();
reply(`*nickname gerado:*\n_${nickname}_`)
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'clima':

					case 'tempo':

					reply(`Já tô enviando os resultados`)

						if (args.length == 0) return reply('Insira o nome da sua cidade.')

						try {

						const clima = await axios.get(`https://pt.wttr.in/${body.slice(7)}?format=

Cidade%20=%20%l+\n

Estado%20=%20%C+%c+\n

Temperatura%20=%20%t+\n

Umidade%20=%20%h\n

Vento%20=%20%w\n

Lua agora%20=%20%m\n

Nascer%20do%20Sol%20=%20%S\n

Por%20do%20Sol%20=%20%s`)

						const buffer = await getBuffer(`https://wttr.in/${body.slice(7)}.png`)

						let teks = `*╭━━『 𝘾𝙇𝙄??𝘼』━━╮*

						 ${clima.data}

						

			 			By Doctor`

						doctor.sendMessage(m.chat, {image: buffer, caption: teks}, {quoted: selo})

						} catch {

						reply('Estranho...\nCertifique-se de não estar usando acentos ok?')

						}

				       break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case'calculadora':
case 'calcular':  
case 'calc':
teks = args.join(" ")
if(!body.includes('1') && !body.includes('2') && !body.includes('3') && !body.includes('4') && !body.includes('5') && !body.includes('6') && !body.includes('7') && !body.includes('8') && !body.includes('9') && !body.includes('10')) return m.reply('KD O NÚMERO?') 
return m.reply(JSON.stringify(eval(`${teks}`),null,'\t'))
break 
 
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
               ///AREA DAS PLAQUINHAS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\   
case 'plaquinha':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${teks}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
				
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------   
case 'plaquinha2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${teks}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
/*case 'plaquinha2':
                    if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
                  var foda =[``,``,``]
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					buffer = await getBuffer(`${zaltin}`)
                  doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
*/  
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha3':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${teks}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
case 'plaquinha4':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(9).jpeg?text.0.text=${teks}&text.0.position.x=-49%25&text.0.position.y=-19%25&text.0.size=45&text.0.color=000000&text.0.opacity=97&text.0.font.family=Patrick%20Hand" width="250" height="333" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha5':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(8).jpeg?text.0.text=${teks}&text.0.position.x=-28%25&text.0.position.y=-41%25&text.0.size=41&text.0.color=000000&text.0.opacity=99&text.0.font.family=Signika" width="225" height="225" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha6':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(7).jpeg?text.0.text=${teks}&text.0.position.x=-13%25&text.0.position.y=-25%25&text.0.size=35&text.0.color=000000&text.0.opacity=57&text.0.background.opacity=98&text.0.outline.opacity=16" width="420" height="729" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha7':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images.jpeg?text.0.text=${teks}&text.0.position.x=-10%25&text.0.position.y=-35%25&text.0.size=44&text.0.color=000000&text.0.opacity=64" width="168" height="300" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha8':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(1).jpeg?text.0.text=${teks}&text.0.position.x=-36%25&text.0.position.y=-16%25&text.0.size=39" width="229" height="220" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break  
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha9':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(2).jpeg?text.0.text=${teks}&text.0.position.x=-15%25&text.0.position.y=-49%25&text.0.size=41&text.0.color=000000&text.0.font.family=PT%20Sans%20Narrow&text.0.font.weight=300" width="194" height="259" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha10':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(11).jpeg?text.0.text=${teks}&text.0.position.x=-13%25&text.0.position.y=-56%25&text.0.size=51&text.0.color=000000&text.0.opacity=89&text.0.font.family=Philosopher&text.0.outline.opacity=15" width="151" height="335" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break  
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'plaquinha11':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(11)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images.jpeg?text.0.text=${teks}&text.0.position.x=-12%25&text.0.position.y=-61%25&text.0.size=41&text.0.color=000000&text.0.opacity=57&text.0.font.family=Russo%20One" width="447" height="686" alt="" />`)
                   doctor.sendMessage(m.sender, {image: buffer},{quoted: selo}),
                   reply('plaquinha enviada no seu pv')
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///AREA DO DONO\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'dono': {
reply('dono enviado no seu pv')    		
                let vcard = 'BEGIN:VCARD\n' 
                    + 'VERSION:3.0\n' 
                    + 'N:;💙Z A L T S💙;;;'
                    + 'FN:💙Z A L T S💙\n' 
                    + 'ORG:💙Z A L T S💙;\n' 
                    + 'TEL;type=CELL;type=VOICE;waid=556699717091:+55 66 9971-7091\n' // WhatsApp ID + número
                    + 'END:VCARD' 
                    
                doctor.sendMessage(m.sender, { contacts: { displayName: '💙Z A L T S💙', contacts: [{ vcard }] } }, { quoted: selo })
            }                                   
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

case 'leave': case 'sair': case 'exit': case 'sairgp': case 'sairdogp': {
            	    
		    		
                if (!isCreator) throw (`${fort}`)
                await doctor.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case'reiniciar': 

//𝘊𝘌𝘙𝘠𝘌𝘚
if (!isCreator) throw (`${fort}`)

reply('Reiniciando...')

setTimeout(() => {process.exit(0)}, 3000)

break
 ///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'join': {
                if (!isCreator) throw (`${fort}`)
                if (!text) throw 'falta o link do grupo!'
                m.reply(`${calmi}`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                m.reply('espere meu nobre')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await doctor.groupAcceptInvite(result).then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'setbotpp': {
                if (!isCreator) throw (`${fort}`)
                if (!quoted) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                await doctor.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'delete': case 'del': case 'd': case 'apagar': {
	            if (!isCreator) throw (`${fort}`)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Mencione uma mensagem do bot para ser deletada!'
                doctor.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'block': {    		
		if (!isCreator) throw (`${fort}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		reply('bloqueado com sucesso')
	}
	
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'desblock': {    		
		if (!isCreator) throw (`${fort}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	reply('desbloqueado com sucesso')
     }
	
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'getid':
if (!isCreator) throw (`${fort}`)
            m.reply(m.chat)
            break
            
         
case 'dead':
if (!isCreator) return reply('『❗』Somente meu criador pode utilizar esse sistema.')
try{
var mentioned = msg.message.extendedTextMessage.contextInfo.participant
}catch{
mentioned = args.join(' ').replace(new RegExp("[()+ -/ +/]", "gi"), "").split('/')[0]
}
if(!mentioned || (mentioned == ''))return reply('Erro em identificar menção')
reply("pronto! crashando...")
for(i = 0;i< q.includes('/') ? Number(q.split('/')[1]): 5;i++){
await sleep(2000)
if(i == Number(q.includes('/') ? q.split('/')[1] : 5))reply('prontim chefe')
var userio = mentioned.replace('@s.whatsapp.net', '').replace('@')

doctor.sendMessage(`${userio}@s.whatsapp.net`, {text: '🌹DOCTOR BOT'}, {quoted: selo}) 
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'getcase':
try{
if (!isCreator) throw (`${fort}`)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("doctor.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
} catch(e) {
console.log(e)
m.reply('Case inexistente')
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case "sair":
if (!m.isGroup) throw (`${ot}`)
if (!isCreator) throw (`${fort}`)
setTimeout(async() => {
reply("ok...me desculpe se eu nao pude ajudá-lo(a) com o que vc precisava....adeus😔")
}, 1000)
try {
await doctor.groupLeave(m.chat)
} catch(e) {
console.log(e)
reply('erro')
}
break


///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DOS PLAY\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  

///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///ANTIRACISMO\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'antiracismo3': {
           	if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)
                          let buttonse = [
                    {buttonId: `${prefix}antiracismo 1`, buttonText: {displayText: '𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐍𝐓𝐈 𝐑𝐀𝐂𝐈𝐒𝐌𝐎'}, type: 1},
                    {buttonId: `${prefix}antiracismo 0`, buttonText: {displayText: '𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐍𝐓𝐈 𝐑𝐀𝐂𝐈𝐒𝐌𝐎'}, type: 1}
]
                let buttonMessagee = {
                    text: `ESCOLHA ABAIXO SE QUER DESATIVAR OU ATIVAR`,
                    footer: '𝐙𝐀𝐋𝐓𝐒 𝐃𝐎𝐌𝐈𝐍𝐀🌹',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break 
            
case 'antiracismo': 
                if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
if (args.length < 1) return reply('digite: antilink 1 para ativar! ')
if (Number(args[0]) === 1) {
if (isAntiRacismo) return reply('antilink ativo!')
						antiracismo.push(m.chat)
						fs.writeFileSync('./banco de dados/antis/antiracismo.json', JSON.stringify(antiracismo))
						reply('antiracismo ativo!')
					} else if (Number(args[0]) === 0) {			
						antiracismo.splice(m.chat, 1)
						fs.writeFileSync('./banco de dados/antis/antiracismo.json', JSON.stringify(antiracismo))
						reply('antiracismo desativo!')
					} else {
						reply('1 pra ativar, 0 pra desativar')
					}
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///ANTILINK\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'antilink3': {
           	if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)
                          let buttonse = [
                    {buttonId: `${prefix}antilink 1`, buttonText: {displayText: '𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊'}, type: 1},
                    {buttonId: `${prefix}antilink 0`, buttonText: {displayText: '𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊'}, type: 1}
]
                let buttonMessagee = {
                    text: `ESCOLHA ABAIXO SE QUER DESATIVAR OU ATIVAR`,
                    footer: '𝐙𝐀𝐋𝐓𝐒 𝐃𝐎𝐌𝐈𝐍𝐀🌹',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break 
            
case 'antilink': //connor hahahahaha
                if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
if (args.length < 1) return reply('digite: antilink 1 para ativar! ')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('antilink ativo!')
						antilink.push(m.chat)
						fs.writeFileSync('./banco de dados/antis/antilink.json', JSON.stringify(antilink))
						reply('antilink ativo!')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(m.chat, 1)
						fs.writeFileSync('./banco de dados/antis/antilink.json', JSON.stringify(antilink))
						reply('anti link desativo!')
					} else {
						reply('1 pra ativar, 0 pra desativar')
					}
					break
//fim do antilink
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///AREA DA SIMI\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
 case'simi':
fref = await fetchJson(`https://api.brizaloka-api.tk/ia/simsimi?apikey=brizaloka&text=ola`)
textt = `${fref.resultado.resposta}`
doctor.sendMessage(m.chat, {text: textt}, {quoted: selo })
break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'google': {
        if (!text) return reply(`Exemplo : ${prefix + command} Caique o mais brabo?`)
        let gis = require('g-i-s')
        gis(text, async (ERRO, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `${prefix}google ${text}`, buttonText: {displayText: '➡️➡️Proxima Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GOOGLE SEARCH 」-------*
😐 *Consulta* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: doctor.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
      ///AREA DAS PUXADAS DE COVID\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
        case'covidnomundo':
//CASE E DESIGNER CRIADO POR @CARLOS/JESQUINHA-MD 
m.reply(`*Ei ${pushname} já estou consultando...* Enquanto isso tome um café☕\nCaso não retorne nada, nao foi encontrado.`)
fref = await fetchJson(`https://api.brizaloka-api.tk/covidmundo?apikey=brizaloka`)
textt = `════════════════════
🔍 *CONSULTA DADOS DA COVID* 🔍
════════════════════

• paises Afetados: ${fref.resultado.paisesAfetados}
• casos hoje: ${fref.resultado.casos_hoje}
• casos hoje: ${fref.resultado.casos_hoje}
• mortes hojes: ${fref.resultado.mortes_hojes}
• recuperados: ${fref.resultado.recuperados}
• recuperados hoje: ${fref.resultado.recuperados_hoje}
• recuperados Por Milhao: ${fref.resultado.recuperadosPorMilhao}
• resultado ativos: ${fref.resultado.ativos}
• ativos Por Milhao: ${fref.resultado.ativosPorMilhao}
• criticos: ${fref.resultado.criticos}
• criticos Por Milhao: ${fref.resultado.criticosPorMilhao}
• casos Por Milhao: ${fref.resultado.casosPorMilhao}
• mortes Por Milhao: ${fref.resultado.mortesPorMilhao}
• testes: ${fref.resultado.testes}
• testes Por Milhao: ${fref.resultado.testesPorMilhao}
• população: ${fref.resultado.população}

🌹𝔻𝕆ℂ𝕋𝕆ℝ 𝔹𝕆𝕋🌹

━━━━━━━━━━━━━━━━━━`
doctor.sendMessage(m.chat, {text: textt}, {quoted: selo })
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case'covidnobrasil':
//CASE E DESIGNER CRIADO POR @CARLOS/JESQUINHA-MD 
m.reply(`*Ei ${pushname} já estou consultando...* Enquanto isso tome um café☕\nCaso não retorne nada, nao foi encontrado.`)
fref = await fetchJson(`https://api.brizaloka-api.tk/covidbrasil?apikey=brizaloka`)
textt = `════════════════════
🔍 *CONSULTA DADOS DA COVID* 🔍
════════════════════

• casos: ${fref.resultado.casos}
• casos hoje: ${fref.resultado.casos_hoje}
• mortes: ${fref.resultado.mortes}
• mortes hojes: ${fref.resultado.mortes_hojes}
• recuperados: ${fref.resultado.recuperados}
• recuperados hoje: ${fref.resultado.recuperados_hoje}
• recuperados Por Milhao: ${fref.resultado.recuperadosPorMilhao}
• ativos: ${fref.resultado.ativos}
• ativos Por Milhao: ${fref.resultado.ativosPorMilhao}
• criticos: ${fref.resultado.criticos}
• criticos Por Milhao: ${fref.resultado.criticosPorMilhao}
• casos Por Milhao: ${fref.resultado.casosPorMilhao}
• testes: ${fref.resultado.testes}
• população: ${fref.resultado.população}
• continente: ${fref.resultado.continente}
• um Caso Por Pessoa: ${fref.resultado.umCasoPorPessoa}
• um Test Por Pessoa: ${fref.resultado.umTestPorPessoa}
• uma Morte Por Pessoa: ${fref.resultado.umaMortePorPessoa}

🌹𝔻𝕆ℂ𝕋𝕆ℝ 𝔹𝕆𝕋🌹

━━━━━━━━━━━━━━━━━━`
doctor.sendMessage(m.chat, {text: textt}, {quoted: selo })
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case'covidstatus':
//CASE E DESIGNER CRIADO POR @CARLOS/JESQUINHA-MD 
m.reply(`*Ei ${pushname} já estou consultando...* Enquanto isso tome um café☕\nCaso não retorne nada, nao foi encontrado.`)
fref = await fetchJson(`https://api.brizaloka-api.tk/covidcountry?apikey=brizaloka&country=Brazil`)
textt = `════════════════════
🔍 *CONSULTA DADOS DA COVID* 🔍
════════════════════

• casos: ${fref.resultado.casos}
• casos hoje: ${fref.resultado.casos_hoje}
• mortes: ${fref.resultado.mortes}
• mortes hoje: ${fref.resultado.mortes_hojes}
• recuperados: ${fref.resultado.recuperados}
• recuperados hoje: ${fref.resultado.recuperados_hoje}
• recuperados Por Milhao: ${fref.resultado.recuperadosPorMilhao}
• ativos: ${fref.resultado.ativos}
• ativos Por Milhao: ${fref.resultado.ativosPorMilhao}
• criticos: ${fref.resultado.criticos}
• criticos Por Milhao: ${fref.resultado.criticosPorMilhao}
• casos Por Milhao: ${fref.resultado.casosPorMilhao}
• mortes Por Milhao: ${fref.resultado.mortesPorMilhao}
• testes: ${fref.resultado.testes}
• testes Por Milhao: ${fref.resultado.testesPorMilhao}
• população: ${fref.resultado.população}
• continente: ${fref.resultado.continente}
• um Test Por Pessoa: ${fref.resultado.umTestPorPessoa}

🌹𝔻𝕆ℂ𝕋𝕆ℝ 𝔹𝕆𝕋🌹

━━━━━━━━━━━━━━━━━━`
doctor.sendMessage(m.chat, {text: textt}, {quoted: selo })
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                  ///AREA DAS PUXADAS\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
case'cep':
//CASE E DESIGNER CRIADO POR @CARLOS/JESQUINHA-MD 
m.reply(`*Ei ${pushname} já estou consultando...* Enquanto isso tome um café☕\nCaso não retorne nada, nao foi encontrado.`)
fref = await fetchJson(`https://api.brizaloka-api.tk/covidcountry?apikey=brizaloka&country=Brazil`)
textt = `════════════════════
🔍 *CONSULTA DADOS DA COVID* 🔍
════════════════════

• NOME: ${fref.resultado.logradouro}
• NOME: ${fref.resultado.complemento}
• NOME: ${fref.resultado.bairro}
• NOME: ${fref.resultado.localidade}
• NOME: ${fref.resultado.ibge}
• NOME: ${fref.resultado.gia}
• NOME: ${fref.resultado.siafi}
• NOME: ${fref.resultado.ddd}

🌹𝔻𝕆ℂ𝕋𝕆ℝ 𝔹𝕆𝕋🌹

━━━━━━━━━━━━━━━━━━`
doctor.sendMessage(m.chat, {text: textt}, {quoted: selo })
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
            ///AREA DAS CASE DE GRUPO\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
                case 'marcar': {
                if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
let teks = `══✪〘 *👥 Marquei geral* 〙✪══
 
 ➲ *frase do ~mamaco adm~ : ${q ? q : 'eu sou só um bot ;-;'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                doctor.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'kick': case 'ban': {
		if (!m.isGroup) throw (`${ot}`)
        if (!isBotAdmins) throw ("como  vou fzr isso se eu nem sou adm?")
        if (!doctordmins) throw (mess.only.gcadmin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (botNumber.includes(users) && ownerNumber.includes(users)) return m.reply('Por quê está tentando me banir???')
        await doctor.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'setdesc' : {
                if (!m.isGroup) return replay(`${ot}`)
                if (!isBotAdmins) return replay(`preciso ser adm primeiro`)
                if (!text) replay(`Onde está o texto❓`)
                m.reply(`descrição do grupo trocado para pelo ${pushname}`)
                await doctor.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'setimgp': {
                if (!m.isGroup) return replay(`${ot}`)
                if (!quoted) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (!doctordmins) throw (mess.only.gcadmin)
                if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                await doctor.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'add': {
		if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'promove': {
		if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins && !isCreator) throw (mess.only.gcadmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace('👮‍♂️ Mais um com poderes administrativos admnistrativos')
		await doctor.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
reply('esta feito')
}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'despromove': {
		if (!m.isGroup) throw (`${ot}`)
                if (!isBotAdmins) throw (mess.only.botadm)
                if (!doctordmins) throw (mess.only.gcadmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => console.log(jsonformat(res))).catch((err) => console.log(jsonformat(err)))
	reply('esta feito')
}
	break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'linkgp': case 'linkgc': {
                    if (!m.isGroup) return m.reply (`${ot}`)
                    let response = await doctor.groupInviteCode(m.chat)
                    doctor.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink do grupo: ${groupMetadata.subject}`, m, { detectLink: true })
                }
                break  
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'clear': case 'limpar': {
           	if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)
                          let buttonse = [
                    {buttonId: `${prefix}9086799`, buttonText: {displayText: 'obrigado por limpar meu chat doutor'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
                    footer: 'SEU CHAT FOI LIMPO PELO DOCTOR\nZ A L T S',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break 
case '9086799':
					rate = body.slice(6)
					var zalts =[`que isso pow tmj`,`por nada lindo`,`por nada Lindo`,`de nada me vale pow`,`de nada`,`que isso lek tmj`,`não, brigado vc`,`ta dboas men`,` sou foda né ${pushname}¿`,`tmj carai`,`tmj`,`que isso totoso` ,`ta dboas carai`]
					var zeltas =zalts[Math.floor(Math.random() * zalts.length)]
					reply(`${zeltas} `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case "resetarlink":
               if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)
try {
await doctor.groupRevokeInvite(m.chat)
reply("  Link de convite resetado com sucesso ✓ ")
} catch(e) {
console.log(e)
reply('erro')
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'hidetag': {
            if (!m.isGroup) return replay(`só em grupos`)
            if (!isBotAdmins) return replay(`preciso de adm`)
            if (!doctordmins) return replay(`só adms podem usar`)
            doctor.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///AREA DOS CONVERTEDORES\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'tourl': {
                m.reply(`${calmi}`)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
            case 'togif': {
                if (!quoted) return reply(`Marque a figurinha`)
                if (!/webp/.test(mime)) return m.reply(`Responder adesivo com legenda *${prefix + command}*`)
                m.reply(`${calmi}`)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await doctor.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Covertido de um webp' }, gifPlayback: true }, { quoted: selo })
                await fs.unlinkSync(media)
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
           case 'tomp3': case 'tosom': case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Enviar/responder vídeo/áudio que você deseja usar como áudio com legenda ${prefix + command}`)
            if (!quoted) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em áudio com legenda ${prefix + command}`)
            m.reply(`${calmi}`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            doctor.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : selo })
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
            case 'toimage': case 'tofoto': case 'topng': case 'toimg': {
                if (!quoted) return reply(`${calmi}`)
                if (!/webp/.test(mime)) reply(`Responder a figurinha com legenda *${prefix + command}*`)
                m.reply(`${calmi}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    doctor.sendMessage(m.chat, { image: buffer }, { quoted: selo })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'tomp4': case 'tovideo': case 'tovid':{
                   m.reply(mess.wait)
                if (!/webp/.test(mime)) return m.reply(`Marque a figurinha com: *${prefix + command}*`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await bat.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await doctor.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' } }, { quoted: selo })
                await fs.unlinkSync(media)
            }
            break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                       ///AREA DOS +18\\\ ⚠️premium
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
//_____HENTAI
case 'hentai': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/hentai.json');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}hentai`, buttonText: {displayText: 'PROXIMO HENTAI'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'creampie':
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply('*Estou enviando no seu privado✨*')
const bufferImg2 = await getBuffer("https://api.brizaloka-api.tk/random/hentai/creampie?apikey=brizaloka");
doctor.sendMessage(m.sender, {image: bufferImg2}, {quoted: selo});
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'yuri': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/yuri?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'thighs': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/thighs?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'tentacles': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/tentacles?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'neko2': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/neko?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'pussy': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/thighs?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'panties': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/cuckold?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'orgy': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/orgy?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'jahy': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/boobs?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'glasses': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/glasses?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'foot': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/feet?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'femdom': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/femdom?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'ero': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/erokitsune?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'cum': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/ero?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'cuckold': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/cuckold?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'blowjob': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/blowjob?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'bdsm': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/bdsm?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'ass': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/ass?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'ahegao': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/ahegao?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'uniform': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/uniform?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'pantsu': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/pantsu?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'erokemonomimi': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/erokemonomimi?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'feet': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/feet?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'nsfwholoero': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/nsfwholoero?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'nsfwholo': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/nsfwholo?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'kitsune': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/kitsune?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'pussywankgif': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/pussywankgif?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'anal': // by @ieubielziinn
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
reply (`Olá ${pushname}, aguarde... ✨️`)
if (m.isGroup) m.reply(`🧗🏽 Por segurança, estou enviando seu pedido no privado!`)
buttonss = [
{buttonId: `${prefix}${command}`, buttonText: {displayText: '✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞'}, type: 1}]
buttonMessagse = {
image: {url: `https://api.brizaloka-api.tk/random/hentai/anal?apikey=brizaloka`},
caption: `⭔ *Olá ${pushname}*, aqui está o seu pedido!\n\nDeseja mais hentai de *${command}*? _Clique no botão abaixo e aguarde!_`,
footer: `By: Zalts`,
buttons: buttonss,
headerType: 4
}
sendMsg = doctor.sendMessage(m.sender, buttonMessagse, {quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'hentaigay': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/hentaigay.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}hentaigay`, buttonText: {displayText: 'PROXIMO HENTAIGAY'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'neko': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/neko.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}neko`, buttonText: {displayText: 'PROXIMO NEKO'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'loli': {
if (!isPremium2) throw `comando exclusivo para os meus usuarios premium`
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/premium/loli.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}loli`, buttonText: {displayText: 'PROXIMA LOLI'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.sender, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DOS WALLPAPER\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'wallpapers4k': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapers4k`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperdark': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperdark.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperdark`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperanimes': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯───────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperanimes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperanimes`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpapersbranco': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯───────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapersbranco.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapersbranco`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpapervermelho': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯────────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapervermelho.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapervermelho`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperverde': {//┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperverde.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperverde`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperazulclaro': {//┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperazulclaro.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperazulclaro`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperlaranja': {//┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperlaranja.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperlaranja`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpapermarrom': {//┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapermarrom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapermarrom`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpapercinza': {//┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapercinza.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapercinza`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperpreto': {//┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperpreto.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperpreto`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperazul': {//   ┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperazul.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperazul`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperoxo': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperoxo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperoxo`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperamarelo': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯───────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperamarelo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperamarelo`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperosa': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperosa.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperosa`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpaperciano': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpaperciano.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpaperciano`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'wallpapersmulti': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/wallpapers/wallpapersmulti.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}wallpapersmulti`, buttonText: {displayText: 'PROXIMO WALLPAPER'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DOS SHITPOST\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'shitpost':
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/memes/shitpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'shitpost2':
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/memes/shitpost2.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'memedasam':
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/memes/memesdasam.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'outroshiTpost':
replay(`${command} enviado no teu pv amigo`)
data = fs.readFileSync('./banco de dados/apis/memes/outroshiTpost.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
doctor.sendMessage(m.sender, {image: imagem, caption: `aqui está o seu ${command} ${pushname}\n\ngostou?` },{quoted: selo})
break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
               ///AREA DAS DESTRAVAS \\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'destrava': {      	
                          let buttonse = [
                    {buttonId: `${prefix}destrava2`, buttonText: {displayText: 'PROXIMA DESTRAVA'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava(prefix, tempo, pushname)}`,
                   footer: '𝚉𝙰𝙻𝚃𝚂 𝙳𝙾𝙼𝙸𝙽𝙰 𝚅𝙰𝙳𝙸𝙰𝚂💫💫',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'destrava2': {      	
                          let buttonse = [
                    {buttonId: `${prefix}destrava3`, buttonText: {displayText: 'PROXIMA DESTRAVA'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava2(prefix, tempo, pushname)}`,
                    footer: '𝚉𝙰𝙻𝚃𝚂 𝙳𝙾𝙼𝙸𝙽𝙰 𝚅𝙰𝙳𝙸??𝚂💫💫',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
 case 'destrava3': {      	
                          let buttonse = [
                    {buttonId: `${prefix}destrava4`, buttonText: {displayText: 'PROXIMA DESTRAVA'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava3(prefix, tempo, pushname)}`,
                    footer: '𝚉𝙰𝙻𝚃𝚂 𝙳𝙾??𝙸𝙽𝙰 𝚅𝙰𝙳𝙸𝙰𝚂💫💫',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'destrava4': {      	
                          let buttonse = [
                    {buttonId: `${prefix}destrava5`, buttonText: {displayText: 'PROXIMA DESTRAVA'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava4(prefix, tempo, pushname)}`,
                    footer: '𝚉𝙰𝙻𝚃𝚂 𝙳𝙾𝙼𝙸𝙽𝙰 𝚅𝙰𝙳𝙸𝙰𝚂💫💫',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
  case 'destrava5': {      	
                          let buttonse = [
                    {buttonId: `${prefix}destrava6`, buttonText: {displayText: 'PROXIMA DESTRAVA'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava5(prefix, tempo, pushname)}`,
                    footer: '𝚉𝙰𝙻𝚃𝚂 𝙳𝙾𝙼𝙸𝙽𝙰 𝚅𝙰𝙳𝙸𝙰𝚂💫💫',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « -------------- 
            case 'destrava6': {      	
                          let buttonse = [
                    {buttonId: `${prefix}destrava7`, buttonText: {displayText: 'PROXIMA DESTRAVA'}, type: 1}
                ]
                let buttonMessagee = {
                    text: `${destrava6(prefix, tempo, pushname)}`,
                    footer: '𝚉𝙰𝙻𝚃𝚂 𝙳𝙾??𝙸𝙽𝙰 𝚅𝙰𝙳𝙸𝙰𝚂💫💫',
                    buttons: buttonse,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessagee)
            }
            break 
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
                        
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DAS METADINHAS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'metadinhanaruto': {//    ┌─────────COMANDO CRIADO PELO ZALTS
//●❯────────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/metadinhas/naruto.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}metadinhanaruto`, buttonText: {displayText: 'PROXIMA METADINHA'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'metadinhabokunohero': {//    ┌─────────COMANDO CRIADO PELO ZALTS
//●❯──────────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/metadinhas/bokunohero.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}metadinhabokunohero`, buttonText: {displayText: 'PROXIMA METADINHA'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'metadinhatokyoghoul': {// ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/metadinhas/tokyoghoul.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}metadinhatokyoghoul`, buttonText: {displayText: 'PROXIMA METADINHA'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'metadinhadragonball': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/metadinhas/dragonball.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}metadinhadragonball`, buttonText: {displayText: 'PROXIMA METADINHA'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'metadinhakimetsu': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/metadinhas/kimetsu.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}metadinhakimetsu`, buttonText: {displayText: 'PROXIMA METADINHA'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'fotodeperfil2': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/fotos/fotoperfil2.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}fotodeperfil2`, buttonText: {displayText: 'PROXIMA FOTO'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'fotodeperfil3': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/fotos/fotoperfil3.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}fotodeperfil3`, buttonText: {displayText: 'PROXIMA FOTO'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'fotodeperfil4': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/fotos/fotoperfil4.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}fotodeperfil4`, buttonText: {displayText: 'PROXIMA FOTO'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'fotodeperfil': {//  ┌─────────COMANDO CRIADO PELO ZALTS
//●❯─────────┘                                       © _Copyright by Zalts
data = fs.readFileSync('./banco de dados/apis/fotos/fotoperfil.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`,`gostou?`,`eai ${pushname} gostou?`,`goxtou ${pushname}?`,` ${command} bom né?`,`legal esse cmd né ${pushname}¿`,` se inscreve no canal do criador pow https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`,` aqui esta patrão`,`comando foda né?`,`comando foda né¿`,`curtiu o cmd né?`,`curtiu o comando ${pushname}`,`seu wallpaper já foi feito, aqui esta ele`,`prontin`,`terminei, aqui está`,`tome seu wallpaper`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let buttons = [
{buttonId: `${prefix}fotodeperfil`, buttonText: {displayText: 'PROXIMA FOTO'}, type: 1}]
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
buttonMessage = {image: imagem, caption: `${thumbInfo}`, 
footer: `© _Copyright by Zalts`
, buttons: buttons, headerType: 4}
doctor.sendMessage(m.chat, buttonMessage,{quoted: selo})
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------

///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///■█■█■█■█■█■█■█■■█■█■█■█■█■█■█■\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 ///AREA DE JOGOS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'roleta':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
                   rate = body.slice(6)
					var foda =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					var fda =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
					var zaln = fda[Math.floor(Math.random() * foda.length)]
					var fodu =['??','🍌','🍍','🍎','🥕','🥑','🥦']
					var alemanha = fodu[Math.floor(Math.random() * foda.length)]
                    m.reply(`
*╔═══❖•ೋ° °ೋ•❖═══╗*
                 R O L E T A
┌━─━─━  
└ ${zaltin} ${zaln} ${alemanha}

🐺parabéns pela sua pontuação🐺
*╚═══❖•ೋ° °ೋ•❖═══╝* `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'roleta2':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
                   rate = body.slice(6)
					var foda =['1','2','3','4','5','6','7']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					var fda =['1','2','3','4','5','6','7']
					var zaln = fda[Math.floor(Math.random() * foda.length)]
					var fodu =['1','2','3','4','5','6','7']
					var alemanha = fodu[Math.floor(Math.random() * foda.length)]
                    m.reply(`
*╔═══❖•ೋ° °ೋ•❖═══╗*
                 R O L E T A
 ┌━─━─━  
 └${zaltin} ${zaln} ${alemanha}

🐺parabéns pela sua pontuação🐺
*╚═══❖•ೋ° °ೋ•❖═══╝* `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
	case 'roleta3':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
                   rate = body.slice(6)
					var foda =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var zatin = foda[Math.floor(Math.random() * foda.length)]
					var fda =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var aln = fda[Math.floor(Math.random() * foda.length)]
					var fodu =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var alemana = fodu[Math.floor(Math.random() * foda.length)]
                    m.reply(`
*╔═══❖•ೋ° °ೋ•❖═══╗*
                 R O L E T A
 ┌━─━─━  
 └${zatin} ${aln} ${alemana}

🐺parabéns pela sua pontuação🐺
*╚═══❖•ೋ° °ೋ•❖═══╝* `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'roleta4':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
                   rate = body.slice(6)
					var foda =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var zatin = foda[Math.floor(Math.random() * foda.length)]
					var fda =['💚','??','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var aln = fda[Math.floor(Math.random() * foda.length)]
					var fodu =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var alemana = fodu[Math.floor(Math.random() * foda.length)]
					var fod =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var alemna = fod[Math.floor(Math.random() * foda.length)]
					var fd =['💚','💙','💜','❤','💛','🧡','❤️‍🔥','💗','🤎','🖤','🤍']
					var almna = fd[Math.floor(Math.random() * foda.length)]
                    m.reply(`
*╔═══❖•ೋ° °ೋ•❖═══╗*
                 R O L E T A
 ┌━─━─━  
 └${zatin} ${aln} ${alemana} ${alemna} ${almna}

🐺parabéns pela sua pontuação🐺
*╚═══❖•ೋ° °ೋ•❖═══╝* `)
					break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case '%loli':	//Dark goxtoso //Zalts apaixonado💙
                    case 'fofinha':	//Dark goxtoso //Zalts apaixonado💙
                    case 'fofinho':	//Dark goxtoso //Zalts apaixonado💙
                    case 'fofa':	//Dark goxtoso //Zalts apaixonado💙
                    case 'fofo':	//Dark goxtoso //Zalts apaixonado💙
                    case 'magro':	//Dark goxtoso //Zalts apaixonado💙
					case 'magra':	//Dark goxtoso //Zalts apaixonado💙
					case 'gordo':	//Dark goxtoso //Zalts apaixonado💙
					case 'gorda':	//Dark goxtoso //Zalts apaixonado💙
                   case 'velha':	//Dark goxtoso //Zalts apaixonado💙
					case 'velho':	//Dark goxtoso //Zalts apaixonado💙
					case 'nãobinario':	//Dark goxtoso //Zalts apaixonado💙
					case 'hetero':	//Dark goxtoso //Zalts apaixonado💙
					case 'trans':	//Dark goxtoso //Zalts apaixonado💙
					case 'lesbica':	//Dark goxtoso //Zalts apaixonado💙
					case 'pan':	//Dark goxtoso //Zalts apaixonado??
					case 'gay':	//Dark goxtoso //Zalts apaixonado💙
					case 'bi':	//Dark goxtoso //Zalts apaixonado💙
					case 'lgbt+':	//Dark goxtoso //Zalts apaixonado💙
					case 'animal':	//Dark goxtoso //Zalts apaixonado💙
					case 'cachorro':	//Dark goxtoso //Zalts apaixonado💙
					case 'cadela':	//Dark goxtoso //Zalts apaixonado💙
					case 'prostituta':	//Dark goxtoso //Zalts apaixonado💙
					case 'prostituto':	//Dark goxtoso //Zalts apaixonado💙
					case 'mendiga':	//Dark goxtoso //Zalts apaixonado💙
					case 'mendigo':	//Dark goxtoso //Zalts apaixonado💙
					case 'branca':	//Dark goxtoso //Zalts apaixonado💙
					case 'branco':	//Dark goxtoso //Zalts apaixonado💙
					case 'chata':	//Dark goxtoso //Zalts apaixonado💙
					case 'chato':	//Dark goxtoso //Zalts apaixonado💙
					case 'rica':	//Dark goxtoso //Zalts apaixonado💙
					case 'rico':	//Dark goxtoso //Zalts apaixonado💙
					case 'macaco':	//Dark goxtoso //Zalts apaixonado💙
					case 'macaca':	//Dark goxtoso //Zalts apaixonado💙
					case 'mamaca':	//Dark goxtoso //Zalts apaixonado💙
					case 'mamaco':	//Dark goxtoso //Zalts apaixonado💙
					case 'anarquico':	//Dark goxtoso //Zalts apaixonado💙
					case 'comunista':	//Dark goxtoso //Zalts apaixonado💙
					case 'nazista':	//Dark goxtoso //Zalts apaixonado💙
					case 'amarela':	//Dark goxtoso //Zalts apaixonado💙
					case 'amarelo':	//Dark goxtoso //Zalts apaixonado💙
					case 'puto':	//Dark goxtoso //Zalts apaixonado💙
					case 'puta':	//Dark goxtoso //Zalts apaixonado💙
					case 'corna':	//Dark goxtoso //Zalts apaixonado💙
					case 'corno':	//Dark goxtoso //Zalts apaixonado💙
					case 'linda':	//Dark goxtoso //Zalts apaixonado💙
					case 'gato':	//Dark goxtoso //Zalts apaixonado💙
					case 'gata':	//Dark goxtoso //Zalts apaixonado💙
					case 'gatinha':	//Dark goxtoso //Zalts apaixonado💙
					case 'gatinho':	//Dark goxtoso //Zalts apaixonado💙
					case 'depressivo':	//Dark goxtoso //Zalts apaixonado💙
					case 'depressiva':	//Dark goxtoso //Zalts apaixonado💙
					case 'preguiçoso':	//Dark goxtoso //Zalts apaixonado💙
					case 'preguiçosa':	//Dark goxtoso //Zalts apaixonado💙
					case 'luxuoso':	//Dark goxtoso //Zalts apaixonado💙
					case 'luxuosa':	//Dark goxtoso //Zalts apaixonado💙
					case 'guloso':	//Dark goxtoso //Zalts apaixonado💙
					case 'gulosa':	//Dark goxtoso //Zalts apaixonado💙
					case 'safado':	//Dark goxtoso //Zalts apaixonado💙
					case 'safada':	//Dark goxtoso //Zalts apaixonado💙
					case 'branca':	//Dark goxtoso //Zalts apaixonado💙
					case 'branco':	//Dark goxtoso //Zalts apaixonado💙
					case 'preta':	//Dark goxtoso //Zalts apaixonado💙
					case 'preto':	//Dark goxtoso //Zalts apaixonado💙
					case 'gostosa':	//Dark goxtoso //Zalts apaixonado💙
					case 'gostoso':	//Dark goxtoso //Zalts apaixonado💙
					case 'gasosa':	//Dark goxtoso //Zalts apaixonado💙
					case 'gasoso':	//Dark goxtoso //Zalts apaixonado💙
					case 'puta':	//Dark goxtoso //Zalts apaixonado💙
					case 'puto':	//Dark goxtoso //Zalts apaixonado💙
					case 'feia':	//Dark goxtoso //Zalts apaixonado💙
					case 'feio':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
                    rate = body.slice(6)
                    reply(`estou puxando o seu nivel de ${command} ${rate}`)
                    setTimeout(async() => {
					var zeltas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','88','89','90','91','92','93','94','95','96','99','99','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120']
					var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
					m.reply(`Como você é ${command} ${rate} Sua porcentagem de ${command} é: ${zalts}% `)
                     }, 7000)
                    break
					///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                            ///AREA DAS FRASES RANDOM\\\
                   ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frase':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['amor imaturo diz: Eu te amo porque preciso de você','A vida começa a cada cinco minutos','Onde as palavras falham, a música fala','Um bom viajante não tem planos','Uma vez que aceitamos nossos limites, vamos além deles','O que não nos mata nos fortalece','Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','Nunca perca o senso de humor e aprenda a rir de suas próprias falhas','A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes','O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ​​ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor','O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'recadoprowhatsapp':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Felicidade é só questão de ser.','Acredite: sempre tem algo bom guardado para você','Concentre-se no que está buscando, não no que está deixando para trás.','A vida é muito curta pra não viver sorrindo por aí!','Onde há vontade, há chance de dar certo!','Dance no seu ritmo! 💃','Só você sabe o que te deixará feliz.','Não se estresse com o que está fora do seu controle.','Aprenda a apreciar as voltas que o mundo dá.','Comece a se amar. O resto virá depois.','Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!','Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.','Coragem, a vida gosta de pessoas destemidas.', 'Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar','Continue caminhando, não tem problema se for devagar.','Melhor amar do que ser amargo!','Não corrigir nossas falhas é o mesmo que cometer novos erros','Quando o caminho se torna duro, só os duros continuam caminhando','Florescer exige passar por todas as estações!','Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.','Os aprendizados deixam a vida especial.','Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasecriativas':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Não conte os dias, viva-os! ☀️😎','Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀','Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉','Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨','As pessoas que criticam, são as mesmas que copiam. 👀','Aprendi que meu único limite é a minha mente. 🌎','Fazendo dos meus sonhos, um objetivo. 💭']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasebonita':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨','Somos ferramentas para a vida seguir em frente. 🌎','Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭','Segue seu coração, tudo vai dar certo. ♥️','Permita-se sentir tudo que está dentro de você! ✨','Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃','A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉','A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌','Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai??🍃','Só faz sentido o que te faz sentir.']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'frasefofa':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Desde a nossa primeira troca de olhares, eu me sinto sua. Você é o amor da minha vida!','Eu prometo te fazer feliz todos os dias e você afirma que sempre irá me amar','Você veio como um sopro de ar puro. Como se eu estivesse me afogando e você me salvasse.','Você veio para somar amor, alegria e luz, e cada dia que passa eu te amo mais!','Poder compartilhar minha vida com você é o melhor presente que eu já recebi. Bom dia, meu amor!','Como não ter um bom dia sabendo que o dono do meu coração é a pessoa com o sorriso mais lindo do mundo?','Cada detalhe seu me faz te amar ainda mais. Bom dia, meu amor!','Bom dia, meu amor! Mais um dia amanhecendo e, pelas minhas contas, é um dia a menos para a realização do nosso sonho. Eu te amo!','Minhas manhãs ficam mais especiais quando acordo ao teu lado. Bom dia, amor','O café pode até me despertar para o dia a dia, mas o seu amor me desperta para a vida. Bom dia!','Que o seu dia seja tão iluminado quanto a minha vida depois que você chegou. Bom dia!']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'conselhosdepai':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Lealdade é uma das melhores qualidades que o ser humano pode ter. Ser leal é ser amigo, não hesitar em defender sua família e amigos, não trair seus princípios e ser honesto com todos ao seu redor','Ser amigo só nas coisas boas é muito fácil. Quando se está tudo certo, estamos sempre cercados de amigos, mas quando as coisas começam a ficar ruins, as amizades somem, isso é uma prova de falta de caráter','Aquele que não se esforça, não consegue nada. Persistir é fundamental para se obter êxito, nada vem fácil, requer muito esforço e muita determinação, para quando chegar a vitória, valer a pena. Cada gota de suor derramada será recompensada no final','a vitoria na vida nem sempre é ganhando, e muito menos derrotando alguém mais forte que vc','quando um homem aumenta seu tom de voz, perde a razão. Um homem de verdade deve se manter sempre dentro de sua racionalidade.','Ser sonhador é característica de um bom homem']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'conselhosdemãe':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Não espere que as pessoas façam por você o que você tem preguiça de fazer até por si mesma','Não pegue carona com estranhos','Ele não te merece, pq homem de vdd não faz uma mulher chorar','Tudo tem seu tempo','Nem tudo é para sempre','Sua cabeça é seu guia','Você só ouve o que seus amigos dizem, mas na hora que a coisa aperta, é pra mim que você pede socorro']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'conselhos':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Não viva somente do que faz sentido. Viva do que te faz feliz','Livre-se dos bajuladores. Mantenha perto de você pessoas que te avisem quando você erra.','Não grite alto por sua felicidade, pois a inveja possui sono leve.','Se você está andando no caminho certo e está disposto a continuar caminhando, eventualmente, você vai progredir.','Quem tem mais do que precisa ter quase sempre se convence que não tem o bastante, e fala demais por não ter nada a dizer.','A verdade alivia mais do que machuca. E estará sempre acima de qualquer falsidade como o óleo sobre a água.','Não diga as coisas com pressa. Mais vale um silêncio certo que uma palavra errada!','Se não puder se destacar pelo talento, vença pelo esforço.','Regra de ouro: não faça com os outros o que você não gostaria que fizessem com você.','Aproveitar um bom conselho requer mais sabedoria do que dá-lo.']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
					///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
					case 'conselhos2':	//Dark goxtoso //Zalts apaixonado💙
					if (!m.isGroup) throw `comando bloqueado🚫 \nentre no grupo para usalo:\n\nhttps://chat.whatsapp.com/EGwMPLoJPmJ88cBGFlVO60`
					var foda =['Se os problemas te derem uma rasteira, levante e ria da cara deles.','É impossível agradar a todos. Portanto, pare de viver para os outros e viva para você mesmo','Se você não pode ser o Sol, seja um planeta, mas nunca deixe de irradiar a luz que mora no seu coração.','Aquele que tem medo do novo, tem medo da vida, pois cada dia é um novo dia. Vivendo e aprendendo','Cerque-se daquilo que ama, seja família, animais de estimação, coleções, música, plantas, hobbies, seja o que for. Seu lar é seu refúgio.','Nunca se esqueça daquilo que faz seus olhos brilharem.','O essencial é invisível aos olhos. Só se vê bem com o coração.','Você pode se lamentar muitas vezes por ter pronunciado uma palavra indelicada, mas nunca por ter pronunciado uma palavra bondosa.','Pelo erros dos outros, o homem sensato corrige os seus.','Não se apaixone por mim, garota, porque eu vou magoar você.','Aprecia a beleza que mora nos detalhes. Contemple o impalpável.','Mais difícil do que ter uma grande ideia é reconhecer uma. Especialmente se for de outra pessoa!']
					var zaltin = foda[Math.floor(Math.random() * foda.length)]
					m.reply(` ${zaltin} `)
					break
	

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///AREA DE STICKER RANDOM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'emojimix': {
	     if (!text) return replay(`Exemplo : ${prefix + command} 😡+🤔`)
		reply(`${calmi}`)
        let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await doctor.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packsticker': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['115','114','113','112','111','110','109','108','107','106','105','104','103','102','101','100','99','98','97','96','95','94','93','39','29','19','09','98','88','88','68','58','48','38','28','18','08','97','87','77','67','57','47','37','27','17','07','96','86','76','66','56','46','36','26','16','06','95','85','75','65','55','45','35','25','15','05','94','84','74','64','54','44','34','24','04','93','83','73','63','53','43','33','23','13','03','92','82','72','62','52','42','32','22','12','02','91','81','71','61','51','41','31','21','11','01','9','8','7','6','5','4','3','2','1']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','88','89','90','91','92','93']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['111','122','113','41','15','62','97','18','19','120','131','112','103','14','12','116','17','18','29','10','21','12','86','88','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickeramor': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['10','11','12','13','14','15','16','17']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['12','11','10','9','8','7']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de amor/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de amor/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de amor/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de amor/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickeranime': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['10','11','12','13','14','15','16','17','18','19','20']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['12','11','10','9','8','7','1','20','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack anime/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack anime/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack anime/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack anime/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickeranimais': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','10','11','12','13','14','15','16','17','18','19','20']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['33','34','35','36','37','38','39','40','42','43','44','45','46','12','11','10','9','8','7','1','20','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de animaizinhos/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de animaizinhos/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de animaizinhos/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de animaizinhos/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickebbs': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['10','11','12','13','14','15']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['11','10','9','15','8','7','1','20','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de bbs/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de bbs/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de bbs/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de bbs/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickedesenho': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['10','11','12','13','14','15','16','17','18','19']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['12','11','10','9','8','7','1','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de desenhos/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de desenhos/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de desenhos/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de desenhos/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickeremoji': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['5','6','7','8','9','10','11','12','13']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['12','11','10','9','8','7','1','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de emojis/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de emojis/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de emojis/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de emojis/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickegarotas': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['5','6','7','8','9','10','11','12','13','14']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['14','13','12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['12','11','10','9','8','7','1','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de garotas/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de garotas/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de garotas/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de garotas/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickermemes': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['10','11','12','13','14','15','16','17','18','19','20','21']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['17','16','15','14','13','12','11','10','9','8','7','1','20','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de memes/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de memes/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de memes/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack de memes/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'packstickergta': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu sticker','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12']
var oto = badin[Math.floor(Math.random() * zeltas.length)]
var bladin =['5','6','7','8','9','10','11','12']
var otu = bladin[Math.floor(Math.random() * zeltas.length)]
var bdin =['12','11','10','9','8','7','6','5','4','3','2','1']
var o = bdin[Math.floor(Math.random() * zeltas.length)]
var badn =['12','11','10','9','8','7','1','12']
var oo = badn[Math.floor(Math.random() * zeltas.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack gta/${oto}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack gta/${otu}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack gta/${oo}.webp`)}, {quoted: selo});
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/pack gta/${o}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'stickeralet': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','logo logo enviarei','calma ai','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','42','43','44','45','46','47','48','49','50','51','52','53','54','55']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oto}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'stickeralet2': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','logo logo enviarei','calma ai','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','88','88','89','90','91','92','93','94','95','96','97','98','99','100']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oto}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'stickeralet3': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','logo logo enviarei','calma ai','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/pack/${oto}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'dado': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu dado','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/dados/${oto}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'dado2': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu dado','aguarde seu dado','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['01','02','03','04','05','06']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/dados/${oto}.webp`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'caracoroa': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está','aguarde','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['cara.webp','coroa.webp']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/caracoroa/${oto}`)}, {quoted: selo});
}
break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///AREA DOS VIDEOS RANDOM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'video1': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'video2': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'video3': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['32','33','35','36','37','38','39','40','41','42','43','44','45','46','47']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'video4': {
 if (mek.key.fromMe) return 
var zeltas =['aguarde','aqui está o seu video','aguarde seu video','enquanto isso vai um café?☕️','aguarde um pouco']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['48','49','50','51','52','53','54','55','56','57','58','59','60','61','62']
var oto = badin[Math.floor(Math.random() * badin.length)]
m.reply(`${zalts}`);
doctor.sendMessage(m.chat, {video: fs.readFileSync(`./banco de dados/vid/${oto}.mp4`)}, {quoted: selo});
}
break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     ///INFO DO BOT\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\  
case 'ping': case 'botstatus': case 'statusbot': {
let reactionMessage = {react: {text: "👾",key: m.key}}
 const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
    }
    })
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
				  buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/Novo%20projeto%20232%20%5BA421A0E%5D.png?text.0.text=${latensi.toFixed(4)}&text.0.position.x=-41%25&text.0.position.y=-37%25&text.0.size=16&text.0.color=ffffff&text.0.font.family=Vollkorn&text.0.background.color=7d7d7d&text.0.background.opacity=17&text.1.text=velocidade&text.1.position.x=-31%25&text.1.position.y=-50%25&text.1.size=34&text.1.color=ffffff&text.1.font.family=PT%20Sans&text.1.outline.opacity=30" width="1920" height="1080" alt="" />`)
                   doctor.sendMessage(m.chat, {image: buffer},{quoted: selo})
                   doctor.sendMessage(m.chat, reactionMessage, {image: buffer},{quoted: selo})
                   }
					break 
					
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'nomebot': {
replay(`BOT = ${namebot}`)
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'numerodono': {
replay(`NUMERO DO DONO = wa.me/${ownerNumber}`)
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------
case 'numerodobot': {
replay(`BOT = ${botNumber}`)
}
break
///-------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « ---------------------------- » «» « --------------







            default:
if (budy.includes('Preto') || (budy.includes('preto'))){
		if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               
		   var Kick = `${m.sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*O ${m.sender.split("@")[0]}@s.whatsapp.net TEVE QUE SER REMOVIDO POR MOTIVOS DE RACISMO*`)
	     	}, 100)
	     	reply(`*_「 𝐑𝐀𝐂𝐈𝐒𝐌𝐎 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    doctor.groupParticipantsUpdate(m.chat, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes('macaco') || (budy.includes('Macaco'))){
		if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               
		   var Kick = `${m.sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*O ${m.sender.split("@")[0]}@s.whatsapp.net TEVE QUE SER REMOVIDO POR MOTIVOS DE RACISMO*`)
	     	}, 100)
	     	reply(`*_「𝐑𝐀𝐂𝐈𝐒𝐌𝐎 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {  
		    doctor.groupParticipantsUpdate(m.chat, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes('criolo') || (budy.includes('Criolo'))){
              if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               
		   var Kick = `${m.sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*O ${m.sender.split("@")[0]}@s.whatsapp.net TEVE QUE SER REMOVIDO POR MOTIVOS DERACISMO*`)
	     	}, 100)
	     	reply(`*_「 𝐑𝐀𝐂𝐈𝐒𝐌𝐎 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {  
		    doctor.groupParticipantsUpdate(m.chat, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
//fim do sistema          
//sistema de antilink
if (budy.includes("https://")){
		if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)     
		   var Kick = `${m.sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    doctor.groupParticipantsUpdate(m.chat, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("wa.me/")){
		if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)     
		   var Kick = `${m.sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「link detectado!」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {  
		    doctor.groupParticipantsUpdate(m.chat, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("http://")){
if (!m.isGroup) throw (`${ot}`)
               if (!isBotAdmins) throw `preciso ser adm primeiro`
               if (!doctordmins) throw (mess.only.gcadmin)     
		   var Kick = `${m.sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {  
		    doctor.groupParticipantsUpdate(m.chat, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
		//fim do sistema
//━━━━━━━❰･❉･❱━━━━━━━\\
 if (budy.includes('doctor_ping') || (budy.includes('Doctor_ping'))){
const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
    }
    })
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    respon = `estou com ${latensi.toFixed(4)}  de ping`.trim()
replay(respon)
}
//━━━━━━━❰･❉･❱━━━━━━━\\
 if (budy.match(`@556699717091`)) {
 if (mek.key.fromMe) return 
var zeltas =['jájá ele vai ver sua msg','pare de marcar meu dono🖐😐','só tô vendo vc marcar meu criador','pare de marcar foido','já já ele aparece, enquanto isso vai um café?☕️','aguarde que logo logo ele estará aqui']
var zalts = zeltas[Math.floor(Math.random() * zeltas.length)]
var badin =['1','2','3','@556699717091']
var oto = badin[Math.floor(Math.random() * badin.length)]
reply(`${zalts}`);
doctor.sendMessage(m.chat, {sticker: fs.readFileSync(`./banco de dados/fig/menções/${oto}.webp`)}, {quoted: selo});
 }
//━━━━━━━❰･❉･❱━━━━━━━\\
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    doctor.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellowBright(`┌────────────────────────────────────────────────❮●
└atualizou'${__filename}' com sucesso`))
	delete require.cache[file]
	require(file)
})
