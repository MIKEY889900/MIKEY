//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*ارحب*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^زورو$/i.test(m.text)) { 
     responses = [ 
'*عمك و مطوري😸*'
     ]; 
 }else if (/^شحالك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير دامك بخير*'
     ]; 
   }else if (/^هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*ما احب ذي العلاقات الغير الشرعية*'
   ]; 
   }else if (/^تحبني $/i.test(m.text)) { 
     responses = [ 
'*عيون مايكي الك*',
'*ورع*',
'*عيب حرام تقول هيك🌚*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي*',
'*لا بس لا تتعب نفسك لحبك*',
'*ااي اكرهك*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*نورت🔥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*انا اكثر❤‍🩹*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك🫀*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'طبعا انت كل حياتي ❤️',  

     ];
     }else if (/^وينه لبوت$/i.test(m.text)) { 
     responses = [ 
       'هون🗿؟', 

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*نورت بنور عمك زورو🐦*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى .*',  
     
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
