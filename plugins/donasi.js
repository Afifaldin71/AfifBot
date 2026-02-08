let handler = async (m) => {
  let gambar = 'https://ar-hosting.pages.dev/1762182905979.jpg'
  let qris = global.qris
  let numberowner = global.nomorown
  let anu = `مرحباً 👋
يمكنك شراء باقة مميزة من خلال:
┌〔 Premium • Emoney 〕
├ TG: https://t.me/JJZZ7
└────
قائمة المميزات:
١٠ آلاف = ١٥ يومًا مميزًا
١٥ ألف = ٣٠ يومًا مميزًا
٢٥ ألف = ٦٠ يومًا مميزًا
٥٠ ألف = ١٨٠ يومًا مميزًا

شكرًا لك :D

للتواصل مع المالك:
wa.me/${numberowner} (المطور)`

  let response = await fetch(gambar)
  let qris_img = Buffer.from(await response.arrayBuffer())
  await conn.sendMessage(m.chat, { 
    image: qris_img, 
    caption: anu 
  }, { quoted: m })
}

handler.help = ['مميز']
handler.tags = ['main']
handler.command = /^(مميز)$/i

export default handler