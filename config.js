global.owner = ['6283165995953', '12364167796'] // wajib di isi tidak boleh kosong
global.mods  = ['6283165995953', '12364167796'] // wajib di isi tidak boleh kosong
global.prems = ['6283165995953', '12364167796'] // wajib di isi tidak boleh kosong
global.nameowner = 'alreyy' // wajib di isi tidak boleh kosong
global.numberowner = '6283165995953' // wajib di isi tidak boleh kosong
global.mail = 'xxiissmm@kakao.com' // wajib di isi tidak boleh kosong
global.gc = 'https://instagram.com/mail.php' // wajib di isi tidak boleh kosong
global.instagram = 'https://instagram.com/mail.php' // wajib di isi tidak boleh kosong
global.wm = '© JISOO' // isi nama bot atau nama kalian
global.wait = '_*Tunggu sedang di proses...*_' // ini pesan simulasi loading
global.eror = '_*Server Error*_' // ini pesan saat terjadi kesalahan
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*' // ini pesan simulasi saat loading pembuatan sticker
global.packname = 'Made With' // watermark stikcker packname
global.author = 'Jisoo' // watermark stikcker author
global.maxwarn = '5' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false // Set true/false untuk anti spam (default: false)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'QuIkX6Ue'
// Daftar terlebih dahulu https://api.botcahx.eu.org
    
// AKSESKEY INI DI ISI JIKA DIPERLUKAN (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = 'YOUR_AKSESKEY_HERE'
// Daftar terlebih dahulu https://api.botcahx.eu.org


// Tidak boleh diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Tidak boleh diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
