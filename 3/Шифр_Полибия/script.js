const  POLYBIUS = [ 
    [ 'A', 'B', 'C' , 'D', 'E'],
    [ 'F', 'G', 'H' , 'I', 'K'],
    [ 'L', 'M', 'N' , 'O', 'P'],
    [ 'Q', 'R', 'S' , 'T', 'U'],
    [ 'V', 'W', 'X' , 'Y', 'Z']];
const  HORIZON = [ 'A', 'B', 'C' , 'D', 'E', 'F', 'G', 'H' , 'I', 'K',
            'L', 'M', 'N' , 'O', 'P', 'Q', 'R', 'S' , 'T', 'U',
            'V', 'W', 'X' , 'Y', 'Z'];
const VERTICALLY = [ 'A', 'F', 'L', 'Q', 'V', 'B', 'G', 'M', 'R', 'W', 
            'C', 'H', 'N', 'S', 'X', 'D', 'I', 'O', 'T', 'Y', 'E', 'K',
            'P', 'U', 'Z'];
function polybius_code() {
    var text = document.getElementById("text").value,
        result = document.getElementById("result"),
        encryption = document.getElementById("encryption").checked,
        decryption = document.getElementById("decryption").checked,
		len = text.length,
        arr = new Array(len*2);
		text = text.toUpperCase();
    if (len === 0 || (encryption == false && decryption == false))
    {
        result.value = "Отсутствуют данные"
        return ;
    }
    if (encryption == true)
    {
        for (let i = 0; i < len; i++)
        {
            for (let j = 0; j < 26; j++)
            if (HORIZON[j] == text[i])
                arr[i] = j % 5;
        }
        for (let i = 0; i < len; i++)
        {
            for (let j = 0; j < 26; j++)
            if (VERTICALLY[j] == text[i])
                arr[i+len] = j % 5;
        }
        let index = [];
        let j = 0;
        for (let i = 0; i < (len * 2); i = i + 2)
        index[j++] = POLYBIUS[arr[i+1]][arr[i]];
        result.value = index.join("");
    }
    if (decryption == true)
    {
        for (let i = 0; i < len; i++)
        {
            for (let j = 0; j < 26; j++)
            if (HORIZON[j] == text[i])
                arr[i] = j % 5;
        }
        for (let i = 0; i < len; i++)
        {
            for (let j = 0; j < 26; j++)
            if (VERTICALLY[j] == text[i])
                arr[i+len] = j % 5;
        }
        let orid_array = [];
        let k = 0;
        let flag = 0;
        let flag2 = 1; 
        for (let i = 0; k < len * 2; i = i + len)
        {
            orid_array[k++] = arr[i];
            flag++;
            if (flag == 2)
            {
                i = flag2 - len;
                flag2++;
                flag = 0;
            }

        }
        let index = [];
        for (let i = 0; i < len; i++)
        {
            index[i] = POLYBIUS[orid_array[i+len]][orid_array[i]]
        }
        result.value = index.join("")
    }
}
