import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/2e8338d1327f0dc89e36c.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `
*⌞*  ${taguser} *┋ ☀️⌝* _*مرحبا*_
*🚀✨ المستوى:*${level}
*💡💼 الخبرة:*${exp}
*📊🔝 رانك:*${role}
*☀️🌟ستارك دولار:*${money}
*🔱🎟️بطاقات:${joincount}*
*❇️👨🏻‍🎓بريميوم:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}

━━━━━━━━━━━━━━━━━━
*🌐 اوامـر البـوت ↯°*

*⚔️✨ حط قبل كل امر : ⌊ . ⌉*
*⚔️🌐 الـبـوت لـجــروبـات بـس*
*⚔️🚫 لاتــسـب الـبـــوت 📜*

┏━━━━━━━━━━━━━━━━━━━┓
┣ *‌‌‏أهلاً بك في قائمة الأوامر* :
┗━━━━━━━━━━━━━━━━━━━┛
┏━━━━⦅ *𝐌𝐈𝐊𝐄𝐘⊰🕸️⊱𝐁𝐎𝐓* ⦆━━━━┓
┃ *اوامر التحميل*
┃ 🎵 *.يوت* - تحميل ملفات الصوت
┃ 🐦 *.تويتر* - تحميل ملفات من تويتر
┃ 🎥 *.تيك* - تحميل مقاطع TikTok
┃ 📘 *.فيس* - تحميل ملفات فيسبوك
┃ 📂 *.درايف* - تحميل من Google Drive
┃ 🎬 *.ميديا* - تحميل ملفات متنوعة
┃ 📷 *.جيثب* - تحميل صور Giphy
┃━━━━━━━━━
┃ *اوامر المجموعة*
┃ ⚙️ *.تفعيل* - تفعيل البوت
┃ ⛔ *.تعطيل* - تعطيل البوت
┃ 🔗 *.منشن* - منشن الأعضاء
┃ 🕵️‍♂️ *.مخفي* - إخفاء البوت
┃ 🔄 *.جلب/ذاتية* - جلب معلومات ذاتية
┃ 💑 *.زوجني* - البحث عن شريك
┃ 🌐 *.الرابط* - عرض رابط القروب
┃ 📤 *.رفع* - رفع عضو
┃ 📥 *.تنزيل* - تنزيل عضو
┃ 📝 *.وصف* - عرض وتعديل وصف القروب
┃ 📛 *.اسم* - عرض وتعديل اسم القروب
┃ 🖼️ *.خلفية* - عرض وتعديل صورة الخلفية
┃ 🚫 *.طرد* - طرد عضو
┃ 🔃 *.استبدال* - استبدال نص بآخر
┃━━━━━━━━━
┃ *اوامر خدمية*
┃ 🧾 *.فحص* - فحص رابط القروب
┃ 📖 *.سورة* - عرض آيات من القرآن
┃ 🕋 *.الله* - تلاوة أسماء الله الحسنى
┃ 📜 *.حديث* - عرض حديث نبوي
┃ 🤲 *.دعاء* - عرض دعاء
┃ 🛐 *.ديني* - عرض معلومات دينية
┃ 🕰️ *.المدة* - عرض مدة التشغيل
┃ 🚀 *.السرعة* - عرض سرعة الإنترنت
┃ 🌐 *.ترجم* - ترجمة النص
┃ 🎨 *.زخرفة* - زخرفة النص
┃ 🤵 *.زوجني* - البحث عن زوج
┃ 🌄 *.لصورة* - عرض معلومات الصورة
┃ 🎙️ *.لتسجيل* - تسجيل الصوت
┃ 🤖 *.المطور* - عرض معلومات المطور
┃ 🖼️ *.ملصق* - إنشاء ملصق
┃ ©️ *.حقوق* - عرض حقوق البوت
┃ 👤 *.سماح* - إدارة التفاعل
┃ ⛓️ *.تقييد* - تقييد عضو
┃ 🚶‍♂️ *.ارفعني* - طلب الارتقاء
┃ 🚪 *.غادر* - مغادرة القروب
┃ 📝 *.نبذته* - عرض نبذة عن عضو
┃ 🔄 *.حول* - عرض معلومات البوت
┃ 📜 *.اسكربت* - تشغيل سكربت
┃ 🌟 *.المميزين* - عرض قائمة المميزين
┃ 👑 *.مميز* - ترقية عضو إلى مميز
┃ 👤 *.عضو* - تنزيل عضو من المميزين
┃ 🤖 *.للبوت/حط* - تعيين صلاحيات البوت
┃ 🎭 *.افتارات* - عرض صور الافتار
┃ 👦‍👦 *.اولاد* - عرض قائمة الأولاد
┃ 📸 *.تيك2* - تحميل مقاطع TikTok بجودة عالية
┃ 📷 *.انستا2* - تحميل صور من Instagram بجودة عالية
┃ 🔄 *.المزيد* - عرض المزيد من الأوامر
┃ 📢 *.انطق* - تحويل النص إلى صوت
┃━━━━━━━━━
┃ *اوامر ترفيهية*
┃ 📚 *.كت* - عرض نصوص عشوائية
┃ 🤔 *.خيروك* - لعبة خيارين
┃ 📊 *.لو* - لعبة "لو"
┃ 📝 *.بايو* - عرض نبذة عن العضو
┃ 🧑‍🎨 *.شخصية* - تحليل شخصية عشوائية
┃ 💖 *.الحب* - احسب نسبة الحب
┃ 🧠 *.ذكاء* - قياس مستوى الذكاء
┃ 🤪 *.غباء* - قياس مستوى الغباء
┃ 🌟 *.الشخصيه* - اكتشاف الشخصية
┃━━━━━━━━━
┃ *اوامر الألعاب*
┃ 🤖 *.اكس* - لعبة X-O
┃ ❓ *.سؤال* - العب لعبة الأسئلة
┃ 🌍 *.علم* - لعبة تخمين العلم
┃ ➕ *.جمع* - لعبة جمع الأعداد
┃ 🔍 *.فكك* - لعبة فكك الكلمة
┗━━━━⦅ *𝐌𝐈𝐊𝐄𝐘⊰🕸️⊱𝐁𝐎𝐓* ⦆━━━━
┣ ඬ⃟ ♥️    𝙕𝙊𝙍𝙊
┣ ඬ⃟ ♥ sᴏᴄɪᴀʟ : https://www.instagram.com/tweets._.zahir?igsh=cDRqcWQ5cTc1dDJz
╰────────────⦁`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
