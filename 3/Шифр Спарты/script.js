function sparta_code() {
    var text = document.getElementById("text").value, //присваиваем переменной значение из строки
        result = document.getElementById("result"), //выводим текст после всех операций
        encryption = document.getElementById("encryption").checked,
        decryption = document.getElementById("decryption").checked,
        l = text.length, //определяем длину сообшения
        res = [], //переменная отвечающая за начальную позицию элемента в массиве
        key = parseInt(document.getElementById("key").value), // «ключ» - количество строк матрицы Скитала
        n = 0, // количество столбцов
        array = [];

    if (l === 0 || (encryption == false && decryption == false))
    {
        result.value = "Отсутствуют данные"
        return ;
    }

    if (decryption == true)
    {
        for (let i = 0; i < l; i++){
           array[i] = text[i]
        }

        n = Math.abs(parseInt((l-1) / key)) + 1; //определяем количество столбцов
        let index = [];

        for (let t = 0; t < l; t++){
            index[t] = Math.abs(key * (t % n)) + parseInt(Math.abs(t / n)); // определяем новое положение букв сообщения 
        }

        for (let t = 0; t < l; t++){
            for (let j = 0; j < l; j++){
            if (index[t] == j)
            {
                index[t] = array[j];
            }
        }
     }
        result.value = index.join(""); //вывод
    }

    if (encryption == true)
    {
        for (let i = 0; i < l; i++){
           array[i] = text[i]
        }

        n = Math.abs(parseInt((l-1) / key)) + 1; //определяем количество столбцов
        let index = new Array(key);
        for(let i = 0; i < index.length; i++){
            index[i] = new Array(n);
        }
        let count = 0;
        for(let i = 0; i < key; i++){
            for(let j = 0; j < n; j++){
                index[i][j] = text[count];
                count++;
            }
        }

        for(let i = 0; i < n; i++){
            for(let j = 0; j < key; j++){
                res.push(index[j][i]);
            }
        }
        
        console.log(index);
        result.value = res.join(""); //вывод
    }
};