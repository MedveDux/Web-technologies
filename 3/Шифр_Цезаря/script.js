function caesar_code() {
    var text = document.getElementById("text").value,
        result = document.getElementById("result"),
        number = parseInt(document.getElementById("number").value),
        lenguageRU = document.getElementById("ru").checked,
        lenguageENG = document.getElementById("eng").checked,
        encryption = document.getElementById("encryption").checked,
        decryption = document.getElementById("decryption").checked,
        ru = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя ",
        eng = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ",
        str = []

        if (text == 0 || number == 0 || (lenguageRU == false && lenguageENG == false)
        || (encryption == false && decryption == false))
        {
            result.value = "Отсутствуют данные"
            return ;
        }

        if (lenguageRU == true && encryption  == true)
        {
            for(var i = 0; i < text.length; i++) {
                for(var j = 0; j < ru.length; j++)
                   if (text[i] === ru[j])
                    str[i] = ru[(j + number) % ru.length];
            }
            result.value = str.join("");
        }

        if (lenguageRU == true && decryption  == true)
        {
            for(var i = 0; i < text.length; i++) {
                for(var j = 0; j < ru.length; j++)
                   if (text[i] === ru[j])
                    str[i] = ru[(j + ru.length - number) % ru.length]; //Избавляемся от модуля путем прибовления длины ru
            }
            result.value = str.join("");
        }

        if (lenguageENG == true && encryption  == true)
        {
            for(var i = 0; i < text.length; i++) {
                for(var j = 0; j < eng.length; j++)
                   if (text[i] === eng[j])
                    str[i] = eng[(j + number) % eng.length];
            }
            result.value = str.join("");
        }

        if (lenguageENG == true && decryption  == true)
        {
            for(var i = 0; i < text.length; i++) {
                for(var j = 0; j < eng.length; j++)
                   if (text[i] === eng[j])
                    str[i] = eng[(j + eng.length - number) % eng.length]; //Избавляемся от модуля путем прибовления длины eng
            }
            result.value = str.join("");
        }
};

