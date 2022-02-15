
const btn = document.querySelector('#btn');

btn.addEventListener('click' , () => {
    let inputWord = document.querySelector('#phraseForMap').value;
    drawmap(inputWord);
});

// функция отрисовки битовой маски
let drawmap = function (word) {
    const bitMap = 
    `....................................................................
     **************   *  *** **  *      ******************************
     ********************* ** ** *  * ****************************** *
     **      *****************       ******************************
        *************          **  * **** ** ************** *
            *********            *******   **************** * *
            ********           ***************************  *
     *        * **** ***         *************** ******  ** *
                ****  *         ***************   *** ***  *
                ******         *************    **   **  *
                ********        *************    *  ** ***
                    ********         ********          * *** ****
                    *********         ******  *        **** ** * **
                    *********         ****** * *           *** *   *
                    ******          ***** **             *****   *
                    *****            **** *            ********
                    *****             ****              *********
                    ****              **                 *******   *
                    ***                                       *    *
                    **     *                    *
....................................................................`;
    let array = bitMap.split("");
    let wordNum = 0;

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == '*' ) {
            array[i] = word[wordNum];
            if (wordNum == word.length) {
                wordNum = 0;
            } else {
                wordNum++;
            }
        }
        
    }
    let newBitmap = array.join('');
    let pre = document.createElement('pre');
    pre.innerHTML = newBitmap;
    document.querySelector('body').append(pre);
    return true;
}


