require('./config')
const { default: doctorConnect, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const moment = require("moment-timezone")
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')



const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const getVersionWaweb = () => {
    let version
    try {
        let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
        version = [a.currentVersion.replace(/[.]/g, ', ')]
    } catch {
        version = [2, 2204, 13]
    }
    return version
}


   async function startdoctor() {
   
    const doctor = doctorConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['DOCTOR_V4','Chrome','1.0.0'],
        auth: state,
        version: getVersionWaweb() || [2, 2204, 13]
        
    })

    store.bind(doctor.ev)

    doctor.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await doctor.sendContact(callerId, global.owner)
    doctor.sendMessage(callerId, { text: `Puts, para sua infelicidade eu tenho sitema antiblock KKKKKKKKK\n\nnão chore, chame meu dono e se resolva com ele!`}, { quoted : pa7rick })
    await sleep(8000)
    await doctor.updateBlockStatus(callerId, "block")
    }
    })

    doctor.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!doctor.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(doctor, mek, store)
        require("./doctor")(doctor, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    doctor.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await doctor.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await doctor.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await doctor.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                if (anu.action == 'add') {
                m.reply(`${pushname} no ${metadata.subject}`)
		    //doctor.sendMessage(anu.id, caption: `Welcome To ${metadata.subject} @${num.split("@")[0]}` })
                } else if (anu.action == 'remove') {
                    //doctor.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
	
	
	doctor.ev.on('group-participants.update', async (anu) => {

console.log(anu)
        try {
            let metadata = await doctor.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await doctor.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                //Get Profile Picture Group\\
                try {
                    ppgroup = await doctor.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

//welcome\\
        let nama = await doctor.getName(num)
memb = metadata.participants.length

Kon = await getBuffer(`https://ayu-team.herokuapp.com/api/canvas/welcome?nome=${encodeURIComponent(nama)}&nomegp=BEM%20VINDO%20A%20${metadata.subject}&titulo=BEM%20VINDO&membros=${encodeURIComponent(memb)}&cor=ffea00&tcor=ffea00&lcor=ffea00&perfil=${encodeURIComponent(ppuser)}&fundo=https://telegra.ph/file/14c9a6ce9c4e3e43a8ee1.jpg&numero=${time}&apikey=HXSruiSimH`)

Tol = await getBuffer(`https://ayu-team.herokuapp.com/api/canvas/goodbye?nome=${encodeURIComponent(nama)}&nomegp=SAIU%20DE%20${metadata.subject}&titulo=ADEUS&membros=${encodeURIComponent(memb)}&cor=ffea00&tcor=ffea00&lcor=ffea00&perfil=${encodeURIComponent(ppuser)}&fundo=https://telegra.ph/file/14c9a6ce9c4e3e43a8ee1.jpg&numero=${time}&apikey=HXSruiSimH`)
//  ❱❱ ENTROU NO GRUPO  ❰❰ 
if (anu.action == 'add') {
                    doctor.sendMessage(anu.id, { image: Kon, contextInfo: { mentionedJid: [num] }, caption: `
╭───────────────⪨
│Salveee @${num.split("@")[0]} 
│Lindo(a)
│Bem vindo(a) ao
│Grupo: ${metadata.subject}
╰───────────────⪨
Descrição:
 ${metadata.desc}

Espero que goste do grupo`} )
                } else if (anu.action == 'remove') {
                    doctor.sendMessage(anu.id, { image: Tol, contextInfo: { mentionedJid: [num] }, caption: `
╭───────────────⪨
│ Vish, @${num.split("@")[0]} 
Foi de comes e bebis, mas espero que volte ao 
│Grupo ${metadata.subject} Sempre
╰───────────────⪨ ` })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
	
	
	
	
	
	
	
    // Setting
    doctor.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    doctor.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = doctor.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    doctor.getName = (jid, withoutContact  = false) => {
        id = doctor.decodeJid(jid)
        withoutContact = doctor.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = doctor.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === doctor.decodeJid(doctor.user.id) ?
            doctor.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    doctor.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await doctor.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await doctor.getName(i + '@s.whatsapp.net')}\nFN:${await doctor.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Meu dono\nitem2.EMAIL;type=INTERNET:markos.wythor@gmail.com\nitem2.X-ABLabel:Gmail\nitem3.URL:https://instagram.com/markoswythor\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Brasil;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	doctor.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
	
    doctor.public = true

    doctor.serializeM = (m) => smsg(doctor, m, store)

    doctor.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startdoctor() : console.log('Tentando me Conectar...')
        }
        console.log('eu sou o unico senhor do tempo. geronimo!', update)
    })

    doctor.ev.on('creds.update', saveState)

    
    doctor.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: doctor.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            doctor.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    
    doctor.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        doctor.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    
    doctor.sendText = (jid, text, quoted = '', options) => doctor.sendMessage(jid, { text: text, ...options }, { quoted })


    doctor.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await doctor.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    
    doctor.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await doctor.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    
    doctor.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await doctor.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    
    doctor.sendTextWithMentions = async (jid, text, quoted, options = {}) => doctor.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    
    doctor.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await doctor.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    

    doctor.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await doctor.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    
    doctor.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename

        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    doctor.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    
    doctor.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await doctor.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await doctor.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    
    doctor.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await doctor.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    doctor.cMod = (jid, copy, text = '', sender = doctor.user.id, options = {}) => {
   
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === doctor.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    doctor.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../banco de dados/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return doctor
}

startdoctor()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
