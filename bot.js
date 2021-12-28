var bot = require("./Modules/telegram")
var Users = require("./Modules/users")
var Cards = require("./Modules/Ncards");
const users = require("./Modules/users");


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const msgText = msg.text
    //console.log(chatId)
    const Datemessage = new Date(msg.date * 1000)
    const Datanow = Date.now();
    const between = (Datanow - Datemessage) / 1000

    if (between > 30) {
        bot.sendMessage(chatId, "You message is too old");
        return 0;
    }

    
        const msgType = msgText.slice(0, 2)


        switch (msgType) {
            case "06":
                bot.sendMessage(chatId, "Mobilis")
                break;
            case "07":
                bot.sendMessage(chatId, "djezzy")
                break;
            case "05":
                bot.sendMessage(chatId, "ooredoo")
                break;
            case "CR":
                Cards.cardPrecess(chatId);
                break;
            case "**":
                Users.signUp(chatId, msgText.slice(2, msgText.length))
                //bot.sendMessage(chatId,"انت الان تسجل شخصا جديدا")
                break;
            default:
                bot.sendMessage(chatId, "لا يمكنني القيام بهذه العملية , تاكد من صحة المدخلات")
                break;
        }

    

});


//const msgText = "**97212442"
