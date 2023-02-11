const fs = require('fs')
const chalk = require('chalk')

//*╔═══❖•ೋ° °ೋ•❖═══╗*
//    DEFINIÇÕES  DS NUMEROS E NOMES
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.V = ['4.0']//<--versão do bot
//-------------------------------------
global.bot = ['DARKNESS']//<--nome do bot
//-------------------------------------
global.name = ['SCRIPT-NZA']//<--nome do dono
//-------------------------------------
global.nami = ['SCRIPTIZINHO']//<--nome fofo do dono
//-------------------------------------
global.prefa = ['','!','.','×','/','?']//<--prefix
//-------------------------------------
global.owner = ['557799659126']//<--numedo do dono
//-------------------------------------
global.sessionName = 'Qrcode'//<--nome da sessão
global.api = 'key-do-zalts_doctor-md-1'
//-------------------------------------
//-------------------------------------
//-------------------------------------
//*╔═══❖•ೋ° °ೋ•❖═══╗*
//           NOME DAS FIG
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.author = '@scriptnza'
//-------------------------------------
global.packname = `DARKNESS FIGUS`
//-------------------------------------
//-------------------------------------
//-------------------------------------

global.sp = '⭔'
//*╔═══❖•ೋ° °ೋ•❖═══╗*
//            PALAVRAS E FALAS
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.mess = {
    success: '✓ Foi',
    admin: 'n',
    botAdmin: 'n',
    owner: 'n',
    group: 'n',
    private: 'n',
    bot: 'n',
    wait: 'Aguarde...',
}
global.thumb = fs.readFileSync('./lib/darkness.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file) 
	console.log(chalk.yellowBright(`┌────────────────────────────────────────────────❮●
└atualizou'${__filename}' com sucesso`))
	delete require.cache[file]
	require(file)
})
