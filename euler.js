var start  = +new Date();
var bigint = require('./BigInteger');

function euler1() {
    var sum = 0;
    for(var i=0; i<1000; i++) {
        if((i%3 == 0) || (i%5 == 0)) {
            sum += i;    
        }
    }
    return sum;
}

function euler2() {
    var sum = 0,
        i = 2,
        prev = 1;

    while(i<4e6) {
        var current = i;
        if(i%2 == 0) {
            sum += i;
        }
        i = i+prev;
        prev = current;
    }
    return sum;
}

function euler3(n) {
    if(!n) {
        var n = 600851475143;
    }
    var max = Math.round(Math.sqrt(n));

    for(var i=max; i>1; i--) {
        if(n%i == 0 && !euler3(i)) {
            return i;
        }
    }
    return false;
}

function euler4() {
    var min = 100,
        max = 999,
        largest = 0;

    for(var i=max; i>=min; i--) {
        for(var j=max; j>=min; j--) {
            var x = i * j,
                y = Number(x.toString().split("").reverse().join(""));
            if(x > largest && x == y) {
                largest = x;
            }
        }
    }
    return largest;
}

function euler5() {
    var min = 1,
        max = 20,
        sum = 1;

    function divisible(n) {
        for(var i=max; i>=min; i--) {
            if(n%i != 0) {
                return false;
            }
        }
        return true;
    }

    while(!divisible(sum)) {
        sum++;
    }
    return sum;
}

function euler6() {
    var min = 1,
        max = 100,
        sum = 0;

    for(var i=min; i<=max; i++) {
        sum += Math.pow(i, 2);
    }
    sum = Math.pow((min + max)*(max/2), 2) - sum;

    return sum;
}

function euler7() {
    var end = 10001,
        index = 0,
        num = 0,
        prime = 0;

    function isPrime(n) {
        if(n<2) {
            return false;
        }

        for (var i=2; i<n; i++) {
            if(n%i == 0) {
                return false;
            }
        }
        return true;
    }

    while(index != end) {
        if(isPrime(num)) {
            index++;
            prime = num;
        }
        num++;
    }
    return prime;
}

function euler8() {
    var num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450",
        nums = num.toString().split(""),
        cons = 5,
        length = num.length,
        highest = 0;

    for(var i=cons; i<=length; i++) {
        var sum = 1;
        for(var j=1; j<=cons; j++) {
            sum *= parseInt(nums[i-j]);
        }
        if(sum > highest) {
            highest = sum;
        }
    }
    return highest;
}

function euler9() {
    var sum = 1000,
        product = 0;

    for(var a=1; a<sum; a++) {
        for(var b=a+1; b<sum; b++) {
            var ab = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)),
                c = sum - a - b;
            if(c == ab) {
                product = a*b*c;
            }
        }
    }
    return product;
}

function euler10() {
    var max = 2e6,
        sum = 0;

    function isPrime(n) {
        var sqrt = Math.sqrt(n);

        for (var i=2; i<=sqrt; i++) {
            if(n%i == 0) {
                return false;
            }
        }
        return true;
    }

    for(i=2; i<max; i++) {
        if(isPrime(i)) {
            sum += i;
        }
    }

    return sum;

}

function euler11() {
    var string = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48",
        string = string.split(" "),
        length = Math.sqrt(string.length),
        grid = [],
        cons = 4,
        highest = 0,
        sum = 0;

    while(string[0]) {
        grid.push(string.splice(0,length));
    }

    for(var c=0; c<length; c++) {
        for(var r=0; r<length; r++) {

            //horisontal
            if(c <= length-cons) {
                sum = parseInt(grid[r][c]);
                for(var j=1; j<cons; j++) {
                    sum *= parseInt(grid[r][c+j]);
                }
                highest = Math.max(highest, sum);
            }

            //vertical
            if(r <= length-cons) {
                sum = parseInt(grid[r][c]);
                for(var j=1; j<cons; j++) {
                    sum *= parseInt(grid[r+j][c]);
                }
                highest = Math.max(highest, sum);

                //diagonal down ltr
                if(c <= length-cons) {
                    sum = parseInt(grid[r][c]);
                    for(var j=1; j<cons; j++) {
                        sum *= parseInt(grid[r+j][c+j]);
                    }
                    highest = Math.max(highest, sum);
                }

                //diagonal up ltr
                if(c >= cons-1) {
                    sum = parseInt(grid[r][c]);
                    for(var j=1; j<cons; j++) {
                        sum *= parseInt(grid[r+j][c-j]);
                    }
                    highest = Math.max(highest, sum);
                }
            }
        }
    }

    return highest;
}

function euler12() {
    var max = 500,
        i = 1;

    function triangleNum(n) {
        var sum = 0;

        for(var i=0; i<=n; i++) {
            sum += i;
        }

        return sum;
    }

    function divisors(n) {
        var list = [],
            i = 1,
            max = n; // ?

        if(n == 1) {
            return 1;
        }

        while(i <= max) {
            if(n%i == 0) {
                list.push(i);

                if(i != n/i) {
                    list.push(n/i);
                }
                max = n/i;
            }
            i++;
        }

        return list.length;
    }

    while(divisors(triangleNum(i)) < max) {
        i++;
    }

    return triangleNum(i);
}

function euler13() {
    var input = "37107287533902102798797998220837590246510135740250463769376774900097126481248969700780504170182605387432498619952474105947423330951305812372661730962991942213363574161572522430563301811072406154908250230675882075393461711719803104210475137780632466768926167069662363382013637841838368417873436172675728112879812849979408065481931592621691275889832738442742289174325203219235894228767964876702721893184745144573600130643909116721685684458871160315327670386486105843025439939619828917593665686757934951621764571418565606295021572231965867550793241933316490635246274190492910143244581382266334794475817892575867718337217661963751590579239728245598838407582035653253593990084026335689488301894586282278288018119938482628201427819413994056758715117009439035398664372827112653829987240784473053190104293586865155060062958648615320752733719591914205172558297169388870771546649911559348760353292171497005693854370070576826684624621495650076471787294438377604532826541087568284431911906346940378552177792951453612327252500029607107508256381565671088525835072145876576172410976447339110607218265236877223636045174237069058518606604482076212098132878607339694128114266041808683061932846081119106155694051268969251934325451728388641918047049293215058642563049483624672216484350762017279180399446930047329563406911573244438690812579451408905770622942919710792820955037687525678773091862540744969844508330393682126183363848253301546861961243487676812975343759465158038628759287849020152168555482871720121925776695478182833757993103614740356856449095527097864797581167263201004368978425535399209318374414978068609844840309812907779179908821879532736447567559084803087086987551392711854517078544161852424320693150332599594068957565367821070749269665376763262354472106979395067965269474259770973916669376304263398708541052684708299085211399427365734116182760315001271653786073615010808570091499395125570281987460043753582903531743471732693212357815498262974255273730794953759765105305946966067683156574377167401875275889028025717332296191766687138199318110487701902712526768027607800301367868099252546340106163286652636270218540497705585629946580636237993140746255962240744869082311749777923654662572469233228109171419143028819710328859780666976089293863828502533340334413065578016127815921815005561868836468420090470230530811728164304876237919698424872550366387845831148769693215490281042402013833512446218144177347063783299490636259666498587618221225225512486764533677201869716985443124195724099139590089523100588229554825530026352078153229679624948164195386821877476085327132285723110424803456124867697064507995236377742425354112916842768655389262050249103265729672370191327572567528565324825826546309220705859652229798860272258331913126375147341994889534765745501184957014548792889848568277260777137214037988797153829820378303147352772158034814451349137322665138134829543829199918180278916522431027392251122869539409579530664052326325380441000596549391598795936352974615218550237130764225512118369380358038858490341698116222072977186158236678424689157993532961922624679571944012690438771072750481023908955235974572318970677254791506150550495392297953090112996751986188088225875314529584099251203829009407770775672113067397083047244838165338735023408456470580773088295917476714036319800818712901187549131054712658197623331044818386269515456334926366572897563400500428462801835170705278318394258821455212272512503275512160354698120058176216521282765275169129689778932238195734329339946437501907836945765883352399886755061649651847751807381688378610915273579297013376217784275219262340194239963916804498399317331273132924185707147349566916674687634660915035914677504995186714302352196288948901024233251169136196266227326746080059154747183079839286853520694694454072476841822524674417161514036427982273348055556214818971426179103425986472045168939894221798260880768528778364618279934631376775430780936333301898264209010848802521674670883215120185883543223812876952786713296124747824645386369930090493103636197638780396218407357239979422340623539380833965132740801111666627891981488087797941876876144230030984490851411606618262936828367647447792391803351109890697907148578694408955299065364044742557608365997664579509666024396409905389607120198219976047599490197230297649139826800329731560371200413779037855660850892521673093931987275027546890690370753941304265231501194809377245048795150954100921645863754710598436791786391670211874924319957006419179697775990283006991536871371193661495281130587638027841075444973307840789923115535562561142322423255033685442488917353448899115014406480203690680639606723221932041495354150312888033953605329934036800697771065056663195481234880673210146739058568557934581403627822703280826165707739483275922328459417065250945123252306082291880205877731971983945018088807242966198081119777158542502016545090413245809786882778948721859617721078384350691861554356628840622574736922845095162084960398013400172393067166682355524525280460972253503534226472524250874054075591789781264330331690",
        sum = 0;

    var arr = Array.prototype.slice.call(input);
    while(arr.length) {
        sum += parseInt(arr.splice(0,50).join(""));
    }

    sum = sum.toString().slice(0,10)*10e8;
    return sum;
}

function euler14() {
    var max = 1e6,
        num = 0,
        streak = 0,
        longest = 0;

    for(var i=1; i<max; i++) {
        streak = 0;
        var n = i;
        while(n > 1) {
            if(n%2 == 0) {
                n = n/2;
            } else {
                n = 3*n+1;
            }
            streak++;
        }
        if(streak > longest) {
            longest = streak;
            num = i;
        }
    }

    return num;
}

function euler15() {
    var size = 20,
        grid = [];

    for(var i=0; i<size; i++) {
        grid[i,size] = 1;
        grid[size,i] = 1;
    }
    for(var i=1; i<=size; i++) {
        for(var j=1; j<=size; j++) {
            grid[i,j] = grid[i-1,j] + grid[i,j-1];
        }
    }

    return grid[size,size];
}

function euler16() {
    var exponent = 1000,
        list = [1],
        sum = 0;

    for(var i=0; i<exponent; i++) {
        var overflow = 0,
            count = list.length + 1;

        for(var j=0; j<count; j++) {
            var digit = list[j] || 0;

            digit = 2 * digit + overflow;

            if(digit > 9) {
                digit -= 10;
                overflow = 1;
            } else {
                overflow = 0;
            }
            list[j] = digit;
        }
    }

    for(var i=0; i<exponent; i++) {
        sum += list[i];
    }

    return sum;
}

function euler17() {
    var list = {1:3, 2:3, 3:5, 4:4, 5:4, 6:3, 7:5, 8:5, 9:4, 10:3, 11:6, 12:6, 13:8, 14:8, 15:7, 16:7, 17:9, 18:8, 19:8, 20:6, 30:6, 40:5, 50:5, 60:5, 70:7, 80:6, 90:6, 100:7, 1000:8},
        max = 1000,
        sum = 0;

    for(var i=1; i<=max; i++) {
        var str = i.toString();

        if(i < 10) {
            sum += list[i];
        }
        if(i >= 10 && i < 100) {
            var n1 = str.substring(0,1),
                n2 = str.substring(1,2);

            if(i < 20) {
                sum += list[i];
            } else {
                if(str.substring(1,2) == "0") {
                    sum += list[i];
                } else {
                    sum += list[n1 + "0"] + list[n2];
                }
            }
        }
        if(i >= 100 && i < 1000) {
            var n1 = str.substring(0,1),
                n2 = str.substring(1,2),
                n3 = str.substring(2,3),
                and = 3;

            if(i == 100) {
                sum += list[1] + list[100];
            } else if(n2 == "0" && n3 == "0") {
                sum += list[n1] + list[100];
            } else if(n3 == "0") {
                sum += and + list[n1]  + list[n2 + "0"] + list[100];
            } else if(n2 == "0") {
                sum += and + list[n1] + list[n3] + list[100];
            } else if(n2 == "1" && n3 != "0") {
                sum += and + list[n1] + list[n2 + n3] + list[100];
            } else {
                sum += and + list[n1] + list[n2 + "0"] + list[n3] + list[100];
            }
        }
        if(i == 1000) {
            sum += list[1] + list[1000];
        }
    }

    return sum;
}

function euler18() {
    var input = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23",
        input = input.split(" "),
        grid = [];

    var arr = Array.prototype.slice.call(input),
        i = 1;
    while(arr.length) {
        grid.push(arr.splice(0,i));
        i++;
    }

    var length = grid.length;
    for(var i=length-2; i>=0; i--) {
        for(var j=0; j<=i; j++) {
            grid[i][j] = parseInt(grid[i][j]) + Math.max(grid[i+1][j], grid[i+1][j+1]);
        }
    }

    return grid[0][0];
}

function euler19() {
    var month = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31},
        sundays = 0,
        days = 2; // Since 1901 starts on a Tuesday

    for(var y=1901; y<2001; y++) {

        // is it a leap year?
        if(y%400 == 0) {
            month[2] = 29;
        } else if(y%100 == 0) {
            month[2] = 28;
        } else if(y%4 == 0) {
            month[2] = 29;
        } else {
            month[2] = 28;
        }

        for(var m=1; m<13; m++) {
            days += month[m];
            if(days%7 == 0) {
                sundays++;
            }
        }
    }

    /*
    // Shorter and more dynamic, but 100x slower.
    for(var y=1901; y<2001; y++){
        for(var m=1; m<13; m++) {
            var d = new Date(y,m,1);
            if(d.getDay() == 0) {
                sundays++;
            }
        }
    }
    */

    return sundays;
}

function euler20() {
    var factorial = 100,
        list = [1],
        sum = 0;

    // add each digit of the factorial to a list
    for(var i=1; i<=factorial; i++) {
        var overflow = 0,
            count = list.length+1;

        for(var j=0; j<=count; j++) {
            var num = list[j] || 0;

            num = i * num + overflow;

            // if number is over 9, store the overflow and remove it from the number.
            // example: num = 346; then -> overflow = 34 and num = 6;
            if(num > 9) {
                overflow = parseInt(num.toString().slice(0,-1));
                num = parseInt(num.toString().slice(-1));
            } else {
                overflow = 0;
            }
            list[j] = num;
        }
    }

    // sum all the numbers in the list together.
    for(var i=0; i<list.length; i++) {
        sum += list[i];
    }

    return sum;
}

function euler21() {
    var lim = 10000,
        amicableNums = [],
        b;

    function proper_divisors(n) {
        var list = [],
            max = n;

        for (var i = 0; i <= max; i++) {
            // we do not want to add same nuber multiple times
            if (list.indexOf(i) !== -1) continue;

            // check if number is an divisor
            if(n % i == 0 && i != n) {
                // add divisor to our list
                list.push(i);

                // These 4 following lines of code reduced my completion time from 25s to 3s
                if(i != n / i && n != n / i) {
                    // add divisor to our list
                    list.push(n/i);
                }
                // reduce numbers we have to iterate over
                max = n/i;
            }
        }

        // return list with divisors
        return list;
    }

    function d(n) {
        // if number is 1, it will only have 1 as an divisor
        if(n === 1) return 1;

        // get divisors
        var divs = proper_divisors(n);

        // add together our list of divisors and return the result
        return divs.reduce(function(a, b) {
            return a + b;
        });
    }

    for (var a = 1; a < lim; a++) {
        // if number already exists in our list, do not try it again
        if (amicableNums.indexOf(a) !== -1) continue;

        // set b
        b = d(a);

        // check if numbers are an amicable pair
        if (a == d(b) && b == d(a) && a != b) {
            // add amicable numbers to our list
            amicableNums.push(a, b);
        }

    }

    // add together all our amicable numbers and return the result
    return amicableNums.reduce(function(a, b) {
        return a + b;
    });
}

function euler22() {
    var file = "22_names.txt";

    (function readFile(file){
        var raw;
        var xhr = new XMLHttpRequest;

        xhr.onload = function() {
            stringToArray(this.response);
        };

        xhr.open("GET", file);
        xhr.send();
    })(file);

    function stringToArray(raw) {
        var array = JSON.parse("[" + raw + "]");
        toAlphValues(array);
    }

    function mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }

        var middle = Math.floor(array.length / 2);
        var left   = array.slice(0, middle);
        var right  = array.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        var result = [];
     
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
     
        while (left.length) {
            result.push(left.shift());
        }
     
        while (right.length) {
            result.push(right.shift());
        }
     
        return result;
    }

    function toAlphValues(array) {
        var sorted = mergeSort(array);
        var val = [];
        var total;
        var result = 0;

        for (var i = 0; i < sorted.length; i++) {
            val = [];
            total = 0;

            for (var j = 0; j < sorted[i].length; j++) {
                val.push(sorted[i].charCodeAt(j) - 64);
            }

            for (var j = 0; j < val.length; j++) {
                total += val[j];
            }

            result += total * (i + 1);
        }

        console.log("Result:", result);
    }

    return "Look below, time not correct for this one";
}

// Alternative sorter solution for problem 22
function euler22_alt() {
    // Copypasted content from name.txt
    var file = ["MARY","PATRICIA","LINDA","BARBARA","ELIZABETH","JENNIFER","MARIA","SUSAN","MARGARET","DOROTHY","LISA","NANCY","KAREN","BETTY","HELEN","SANDRA","DONNA","CAROL","RUTH","SHARON","MICHELLE","LAURA","SARAH","KIMBERLY","DEBORAH","JESSICA","SHIRLEY","CYNTHIA","ANGELA","MELISSA","BRENDA","AMY","ANNA","REBECCA","VIRGINIA","KATHLEEN","PAMELA","MARTHA","DEBRA","AMANDA","STEPHANIE","CAROLYN","CHRISTINE","MARIE","JANET","CATHERINE","FRANCES","ANN","JOYCE","DIANE","ALICE","JULIE","HEATHER","TERESA","DORIS","GLORIA","EVELYN","JEAN","CHERYL","MILDRED","KATHERINE","JOAN","ASHLEY","JUDITH","ROSE","JANICE","KELLY","NICOLE","JUDY","CHRISTINA","KATHY","THERESA","BEVERLY","DENISE","TAMMY","IRENE","JANE","LORI","RACHEL","MARILYN","ANDREA","KATHRYN","LOUISE","SARA","ANNE","JACQUELINE","WANDA","BONNIE","JULIA","RUBY","LOIS","TINA","PHYLLIS","NORMA","PAULA","DIANA","ANNIE","LILLIAN","EMILY","ROBIN","PEGGY","CRYSTAL","GLADYS","RITA","DAWN","CONNIE","FLORENCE","TRACY","EDNA","TIFFANY","CARMEN","ROSA","CINDY","GRACE","WENDY","VICTORIA","EDITH","KIM","SHERRY","SYLVIA","JOSEPHINE","THELMA","SHANNON","SHEILA","ETHEL","ELLEN","ELAINE","MARJORIE","CARRIE","CHARLOTTE","MONICA","ESTHER","PAULINE","EMMA","JUANITA","ANITA","RHONDA","HAZEL","AMBER","EVA","DEBBIE","APRIL","LESLIE","CLARA","LUCILLE","JAMIE","JOANNE","ELEANOR","VALERIE","DANIELLE","MEGAN","ALICIA","SUZANNE","MICHELE","GAIL","BERTHA","DARLENE","VERONICA","JILL","ERIN","GERALDINE","LAUREN","CATHY","JOANN","LORRAINE","LYNN","SALLY","REGINA","ERICA","BEATRICE","DOLORES","BERNICE","AUDREY","YVONNE","ANNETTE","JUNE","SAMANTHA","MARION","DANA","STACY","ANA","RENEE","IDA","VIVIAN","ROBERTA","HOLLY","BRITTANY","MELANIE","LORETTA","YOLANDA","JEANETTE","LAURIE","KATIE","KRISTEN","VANESSA","ALMA","SUE","ELSIE","BETH","JEANNE","VICKI","CARLA","TARA","ROSEMARY","EILEEN","TERRI","GERTRUDE","LUCY","TONYA","ELLA","STACEY","WILMA","GINA","KRISTIN","JESSIE","NATALIE","AGNES","VERA","WILLIE","CHARLENE","BESSIE","DELORES","MELINDA","PEARL","ARLENE","MAUREEN","COLLEEN","ALLISON","TAMARA","JOY","GEORGIA","CONSTANCE","LILLIE","CLAUDIA","JACKIE","MARCIA","TANYA","NELLIE","MINNIE","MARLENE","HEIDI","GLENDA","LYDIA","VIOLA","COURTNEY","MARIAN","STELLA","CAROLINE","DORA","JO","VICKIE","MATTIE","TERRY","MAXINE","IRMA","MABEL","MARSHA","MYRTLE","LENA","CHRISTY","DEANNA","PATSY","HILDA","GWENDOLYN","JENNIE","NORA","MARGIE","NINA","CASSANDRA","LEAH","PENNY","KAY","PRISCILLA","NAOMI","CAROLE","BRANDY","OLGA","BILLIE","DIANNE","TRACEY","LEONA","JENNY","FELICIA","SONIA","MIRIAM","VELMA","BECKY","BOBBIE","VIOLET","KRISTINA","TONI","MISTY","MAE","SHELLY","DAISY","RAMONA","SHERRI","ERIKA","KATRINA","CLAIRE","LINDSEY","LINDSAY","GENEVA","GUADALUPE","BELINDA","MARGARITA","SHERYL","CORA","FAYE","ADA","NATASHA","SABRINA","ISABEL","MARGUERITE","HATTIE","HARRIET","MOLLY","CECILIA","KRISTI","BRANDI","BLANCHE","SANDY","ROSIE","JOANNA","IRIS","EUNICE","ANGIE","INEZ","LYNDA","MADELINE","AMELIA","ALBERTA","GENEVIEVE","MONIQUE","JODI","JANIE","MAGGIE","KAYLA","SONYA","JAN","LEE","KRISTINE","CANDACE","FANNIE","MARYANN","OPAL","ALISON","YVETTE","MELODY","LUZ","SUSIE","OLIVIA","FLORA","SHELLEY","KRISTY","MAMIE","LULA","LOLA","VERNA","BEULAH","ANTOINETTE","CANDICE","JUANA","JEANNETTE","PAM","KELLI","HANNAH","WHITNEY","BRIDGET","KARLA","CELIA","LATOYA","PATTY","SHELIA","GAYLE","DELLA","VICKY","LYNNE","SHERI","MARIANNE","KARA","JACQUELYN","ERMA","BLANCA","MYRA","LETICIA","PAT","KRISTA","ROXANNE","ANGELICA","JOHNNIE","ROBYN","FRANCIS","ADRIENNE","ROSALIE","ALEXANDRA","BROOKE","BETHANY","SADIE","BERNADETTE","TRACI","JODY","KENDRA","JASMINE","NICHOLE","RACHAEL","CHELSEA","MABLE","ERNESTINE","MURIEL","MARCELLA","ELENA","KRYSTAL","ANGELINA","NADINE","KARI","ESTELLE","DIANNA","PAULETTE","LORA","MONA","DOREEN","ROSEMARIE","ANGEL","DESIREE","ANTONIA","HOPE","GINGER","JANIS","BETSY","CHRISTIE","FREDA","MERCEDES","MEREDITH","LYNETTE","TERI","CRISTINA","EULA","LEIGH","MEGHAN","SOPHIA","ELOISE","ROCHELLE","GRETCHEN","CECELIA","RAQUEL","HENRIETTA","ALYSSA","JANA","KELLEY","GWEN","KERRY","JENNA","TRICIA","LAVERNE","OLIVE","ALEXIS","TASHA","SILVIA","ELVIRA","CASEY","DELIA","SOPHIE","KATE","PATTI","LORENA","KELLIE","SONJA","LILA","LANA","DARLA","MAY","MINDY","ESSIE","MANDY","LORENE","ELSA","JOSEFINA","JEANNIE","MIRANDA","DIXIE","LUCIA","MARTA","FAITH","LELA","JOHANNA","SHARI","CAMILLE","TAMI","SHAWNA","ELISA","EBONY","MELBA","ORA","NETTIE","TABITHA","OLLIE","JAIME","WINIFRED","KRISTIE","MARINA","ALISHA","AIMEE","RENA","MYRNA","MARLA","TAMMIE","LATASHA","BONITA","PATRICE","RONDA","SHERRIE","ADDIE","FRANCINE","DELORIS","STACIE","ADRIANA","CHERI","SHELBY","ABIGAIL","CELESTE","JEWEL","CARA","ADELE","REBEKAH","LUCINDA","DORTHY","CHRIS","EFFIE","TRINA","REBA","SHAWN","SALLIE","AURORA","LENORA","ETTA","LOTTIE","KERRI","TRISHA","NIKKI","ESTELLA","FRANCISCA","JOSIE","TRACIE","MARISSA","KARIN","BRITTNEY","JANELLE","LOURDES","LAUREL","HELENE","FERN","ELVA","CORINNE","KELSEY","INA","BETTIE","ELISABETH","AIDA","CAITLIN","INGRID","IVA","EUGENIA","CHRISTA","GOLDIE","CASSIE","MAUDE","JENIFER","THERESE","FRANKIE","DENA","LORNA","JANETTE","LATONYA","CANDY","MORGAN","CONSUELO","TAMIKA","ROSETTA","DEBORA","CHERIE","POLLY","DINA","JEWELL","FAY","JILLIAN","DOROTHEA","NELL","TRUDY","ESPERANZA","PATRICA","KIMBERLEY","SHANNA","HELENA","CAROLINA","CLEO","STEFANIE","ROSARIO","OLA","JANINE","MOLLIE","LUPE","ALISA","LOU","MARIBEL","SUSANNE","BETTE","SUSANA","ELISE","CECILE","ISABELLE","LESLEY","JOCELYN","PAIGE","JONI","RACHELLE","LEOLA","DAPHNE","ALTA","ESTER","PETRA","GRACIELA","IMOGENE","JOLENE","KEISHA","LACEY","GLENNA","GABRIELA","KERI","URSULA","LIZZIE","KIRSTEN","SHANA","ADELINE","MAYRA","JAYNE","JACLYN","GRACIE","SONDRA","CARMELA","MARISA","ROSALIND","CHARITY","TONIA","BEATRIZ","MARISOL","CLARICE","JEANINE","SHEENA","ANGELINE","FRIEDA","LILY","ROBBIE","SHAUNA","MILLIE","CLAUDETTE","CATHLEEN","ANGELIA","GABRIELLE","AUTUMN","KATHARINE","SUMMER","JODIE","STACI","LEA","CHRISTI","JIMMIE","JUSTINE","ELMA","LUELLA","MARGRET","DOMINIQUE","SOCORRO","RENE","MARTINA","MARGO","MAVIS","CALLIE","BOBBI","MARITZA","LUCILE","LEANNE","JEANNINE","DEANA","AILEEN","LORIE","LADONNA","WILLA","MANUELA","GALE","SELMA","DOLLY","SYBIL","ABBY","LARA","DALE","IVY","DEE","WINNIE","MARCY","LUISA","JERI","MAGDALENA","OFELIA","MEAGAN","AUDRA","MATILDA","LEILA","CORNELIA","BIANCA","SIMONE","BETTYE","RANDI","VIRGIE","LATISHA","BARBRA","GEORGINA","ELIZA","LEANN","BRIDGETTE","RHODA","HALEY","ADELA","NOLA","BERNADINE","FLOSSIE","ILA","GRETA","RUTHIE","NELDA","MINERVA","LILLY","TERRIE","LETHA","HILARY","ESTELA","VALARIE","BRIANNA","ROSALYN","EARLINE","CATALINA","AVA","MIA","CLARISSA","LIDIA","CORRINE","ALEXANDRIA","CONCEPCION","TIA","SHARRON","RAE","DONA","ERICKA","JAMI","ELNORA","CHANDRA","LENORE","NEVA","MARYLOU","MELISA","TABATHA","SERENA","AVIS","ALLIE","SOFIA","JEANIE","ODESSA","NANNIE","HARRIETT","LORAINE","PENELOPE","MILAGROS","EMILIA","BENITA","ALLYSON","ASHLEE","TANIA","TOMMIE","ESMERALDA","KARINA","EVE","PEARLIE","ZELMA","MALINDA","NOREEN","TAMEKA","SAUNDRA","HILLARY","AMIE","ALTHEA","ROSALINDA","JORDAN","LILIA","ALANA","GAY","CLARE","ALEJANDRA","ELINOR","MICHAEL","LORRIE","JERRI","DARCY","EARNESTINE","CARMELLA","TAYLOR","NOEMI","MARCIE","LIZA","ANNABELLE","LOUISA","EARLENE","MALLORY","CARLENE","NITA","SELENA","TANISHA","KATY","JULIANNE","JOHN","LAKISHA","EDWINA","MARICELA","MARGERY","KENYA","DOLLIE","ROXIE","ROSLYN","KATHRINE","NANETTE","CHARMAINE","LAVONNE","ILENE","KRIS","TAMMI","SUZETTE","CORINE","KAYE","JERRY","MERLE","CHRYSTAL","LINA","DEANNE","LILIAN","JULIANA","ALINE","LUANN","KASEY","MARYANNE","EVANGELINE","COLETTE","MELVA","LAWANDA","YESENIA","NADIA","MADGE","KATHIE","EDDIE","OPHELIA","VALERIA","NONA","MITZI","MARI","GEORGETTE","CLAUDINE","FRAN","ALISSA","ROSEANN","LAKEISHA","SUSANNA","REVA","DEIDRE","CHASITY","SHEREE","CARLY","JAMES","ELVIA","ALYCE","DEIRDRE","GENA","BRIANA","ARACELI","KATELYN","ROSANNE","WENDI","TESSA","BERTA","MARVA","IMELDA","MARIETTA","MARCI","LEONOR","ARLINE","SASHA","MADELYN","JANNA","JULIETTE","DEENA","AURELIA","JOSEFA","AUGUSTA","LILIANA","YOUNG","CHRISTIAN","LESSIE","AMALIA","SAVANNAH","ANASTASIA","VILMA","NATALIA","ROSELLA","LYNNETTE","CORINA","ALFREDA","LEANNA","CAREY","AMPARO","COLEEN","TAMRA","AISHA","WILDA","KARYN","CHERRY","QUEEN","MAURA","MAI","EVANGELINA","ROSANNA","HALLIE","ERNA","ENID","MARIANA","LACY","JULIET","JACKLYN","FREIDA","MADELEINE","MARA","HESTER","CATHRYN","LELIA","CASANDRA","BRIDGETT","ANGELITA","JANNIE","DIONNE","ANNMARIE","KATINA","BERYL","PHOEBE","MILLICENT","KATHERYN","DIANN","CARISSA","MARYELLEN","LIZ","LAURI","HELGA","GILDA","ADRIAN","RHEA","MARQUITA","HOLLIE","TISHA","TAMERA","ANGELIQUE","FRANCESCA","BRITNEY","KAITLIN","LOLITA","FLORINE","ROWENA","REYNA","TWILA","FANNY","JANELL","INES","CONCETTA","BERTIE","ALBA","BRIGITTE","ALYSON","VONDA","PANSY","ELBA","NOELLE","LETITIA","KITTY","DEANN","BRANDIE","LOUELLA","LETA","FELECIA","SHARLENE","LESA","BEVERLEY","ROBERT","ISABELLA","HERMINIA","TERRA","CELINA","TORI","OCTAVIA","JADE","DENICE","GERMAINE","SIERRA","MICHELL","CORTNEY","NELLY","DORETHA","SYDNEY","DEIDRA","MONIKA","LASHONDA","JUDI","CHELSEY","ANTIONETTE","MARGOT","BOBBY","ADELAIDE","NAN","LEEANN","ELISHA","DESSIE","LIBBY","KATHI","GAYLA","LATANYA","MINA","MELLISA","KIMBERLEE","JASMIN","RENAE","ZELDA","ELDA","MA","JUSTINA","GUSSIE","EMILIE","CAMILLA","ABBIE","ROCIO","KAITLYN","JESSE","EDYTHE","ASHLEIGH","SELINA","LAKESHA","GERI","ALLENE","PAMALA","MICHAELA","DAYNA","CARYN","ROSALIA","SUN","JACQULINE","REBECA","MARYBETH","KRYSTLE","IOLA","DOTTIE","BENNIE","BELLE","AUBREY","GRISELDA","ERNESTINA","ELIDA","ADRIANNE","DEMETRIA","DELMA","CHONG","JAQUELINE","DESTINY","ARLEEN","VIRGINA","RETHA","FATIMA","TILLIE","ELEANORE","CARI","TREVA","BIRDIE","WILHELMINA","ROSALEE","MAURINE","LATRICE","YONG","JENA","TARYN","ELIA","DEBBY","MAUDIE","JEANNA","DELILAH","CATRINA","SHONDA","HORTENCIA","THEODORA","TERESITA","ROBBIN","DANETTE","MARYJANE","FREDDIE","DELPHINE","BRIANNE","NILDA","DANNA","CINDI","BESS","IONA","HANNA","ARIEL","WINONA","VIDA","ROSITA","MARIANNA","WILLIAM","RACHEAL","GUILLERMINA","ELOISA","CELESTINE","CAREN","MALISSA","LONA","CHANTEL","SHELLIE","MARISELA","LEORA","AGATHA","SOLEDAD","MIGDALIA","IVETTE","CHRISTEN","ATHENA","JANEL","CHLOE","VEDA","PATTIE","TESSIE","TERA","MARILYNN","LUCRETIA","KARRIE","DINAH","DANIELA","ALECIA","ADELINA","VERNICE","SHIELA","PORTIA","MERRY","LASHAWN","DEVON","DARA","TAWANA","OMA","VERDA","CHRISTIN","ALENE","ZELLA","SANDI","RAFAELA","MAYA","KIRA","CANDIDA","ALVINA","SUZAN","SHAYLA","LYN","LETTIE","ALVA","SAMATHA","ORALIA","MATILDE","MADONNA","LARISSA","VESTA","RENITA","INDIA","DELOIS","SHANDA","PHILLIS","LORRI","ERLINDA","CRUZ","CATHRINE","BARB","ZOE","ISABELL","IONE","GISELA","CHARLIE","VALENCIA","ROXANNA","MAYME","KISHA","ELLIE","MELLISSA","DORRIS","DALIA","BELLA","ANNETTA","ZOILA","RETA","REINA","LAURETTA","KYLIE","CHRISTAL","PILAR","CHARLA","ELISSA","TIFFANI","TANA","PAULINA","LEOTA","BREANNA","JAYME","CARMEL","VERNELL","TOMASA","MANDI","DOMINGA","SANTA","MELODIE","LURA","ALEXA","TAMELA","RYAN","MIRNA","KERRIE","VENUS","NOEL","FELICITA","CRISTY","CARMELITA","BERNIECE","ANNEMARIE","TIARA","ROSEANNE","MISSY","CORI","ROXANA","PRICILLA","KRISTAL","JUNG","ELYSE","HAYDEE","ALETHA","BETTINA","MARGE","GILLIAN","FILOMENA","CHARLES","ZENAIDA","HARRIETTE","CARIDAD","VADA","UNA","ARETHA","PEARLINE","MARJORY","MARCELA","FLOR","EVETTE","ELOUISE","ALINA","TRINIDAD","DAVID","DAMARIS","CATHARINE","CARROLL","BELVA","NAKIA","MARLENA","LUANNE","LORINE","KARON","DORENE","DANITA","BRENNA","TATIANA","SAMMIE","LOUANN","LOREN","JULIANNA","ANDRIA","PHILOMENA","LUCILA","LEONORA","DOVIE","ROMONA","MIMI","JACQUELIN","GAYE","TONJA","MISTI","JOE","GENE","CHASTITY","STACIA","ROXANN","MICAELA","NIKITA","MEI","VELDA","MARLYS","JOHNNA","AURA","LAVERN","IVONNE","HAYLEY","NICKI","MAJORIE","HERLINDA","GEORGE","ALPHA","YADIRA","PERLA","GREGORIA","DANIEL","ANTONETTE","SHELLI","MOZELLE","MARIAH","JOELLE","CORDELIA","JOSETTE","CHIQUITA","TRISTA","LOUIS","LAQUITA","GEORGIANA","CANDI","SHANON","LONNIE","HILDEGARD","CECIL","VALENTINA","STEPHANY","MAGDA","KAROL","GERRY","GABRIELLA","TIANA","ROMA","RICHELLE","RAY","PRINCESS","OLETA","JACQUE","IDELLA","ALAINA","SUZANNA","JOVITA","BLAIR","TOSHA","RAVEN","NEREIDA","MARLYN","KYLA","JOSEPH","DELFINA","TENA","STEPHENIE","SABINA","NATHALIE","MARCELLE","GERTIE","DARLEEN","THEA","SHARONDA","SHANTEL","BELEN","VENESSA","ROSALINA","ONA","GENOVEVA","COREY","CLEMENTINE","ROSALBA","RENATE","RENATA","MI","IVORY","GEORGIANNA","FLOY","DORCAS","ARIANA","TYRA","THEDA","MARIAM","JULI","JESICA","DONNIE","VIKKI","VERLA","ROSELYN","MELVINA","JANNETTE","GINNY","DEBRAH","CORRIE","ASIA","VIOLETA","MYRTIS","LATRICIA","COLLETTE","CHARLEEN","ANISSA","VIVIANA","TWYLA","PRECIOUS","NEDRA","LATONIA","LAN","HELLEN","FABIOLA","ANNAMARIE","ADELL","SHARYN","CHANTAL","NIKI","MAUD","LIZETTE","LINDY","KIA","KESHA","JEANA","DANELLE","CHARLINE","CHANEL","CARROL","VALORIE","LIA","DORTHA","CRISTAL","SUNNY","LEONE","LEILANI","GERRI","DEBI","ANDRA","KESHIA","IMA","EULALIA","EASTER","DULCE","NATIVIDAD","LINNIE","KAMI","GEORGIE","CATINA","BROOK","ALDA","WINNIFRED","SHARLA","RUTHANN","MEAGHAN","MAGDALENE","LISSETTE","ADELAIDA","VENITA","TRENA","SHIRLENE","SHAMEKA","ELIZEBETH","DIAN","SHANTA","MICKEY","LATOSHA","CARLOTTA","WINDY","SOON","ROSINA","MARIANN","LEISA","JONNIE","DAWNA","CATHIE","BILLY","ASTRID","SIDNEY","LAUREEN","JANEEN","HOLLI","FAWN","VICKEY","TERESSA","SHANTE","RUBYE","MARCELINA","CHANDA","CARY","TERESE","SCARLETT","MARTY","MARNIE","LULU","LISETTE","JENIFFER","ELENOR","DORINDA","DONITA","CARMAN","BERNITA","ALTAGRACIA","ALETA","ADRIANNA","ZORAIDA","RONNIE","NICOLA","LYNDSEY","KENDALL","JANINA","CHRISSY","AMI","STARLA","PHYLIS","PHUONG","KYRA","CHARISSE","BLANCH","SANJUANITA","RONA","NANCI","MARILEE","MARANDA","CORY","BRIGETTE","SANJUANA","MARITA","KASSANDRA","JOYCELYN","IRA","FELIPA","CHELSIE","BONNY","MIREYA","LORENZA","KYONG","ILEANA","CANDELARIA","TONY","TOBY","SHERIE","OK","MARK","LUCIE","LEATRICE","LAKESHIA","GERDA","EDIE","BAMBI","MARYLIN","LAVON","HORTENSE","GARNET","EVIE","TRESSA","SHAYNA","LAVINA","KYUNG","JEANETTA","SHERRILL","SHARA","PHYLISS","MITTIE","ANABEL","ALESIA","THUY","TAWANDA","RICHARD","JOANIE","TIFFANIE","LASHANDA","KARISSA","ENRIQUETA","DARIA","DANIELLA","CORINNA","ALANNA","ABBEY","ROXANE","ROSEANNA","MAGNOLIA","LIDA","KYLE","JOELLEN","ERA","CORAL","CARLEEN","TRESA","PEGGIE","NOVELLA","NILA","MAYBELLE","JENELLE","CARINA","NOVA","MELINA","MARQUERITE","MARGARETTE","JOSEPHINA","EVONNE","DEVIN","CINTHIA","ALBINA","TOYA","TAWNYA","SHERITA","SANTOS","MYRIAM","LIZABETH","LISE","KEELY","JENNI","GISELLE","CHERYLE","ARDITH","ARDIS","ALESHA","ADRIANE","SHAINA","LINNEA","KAROLYN","HONG","FLORIDA","FELISHA","DORI","DARCI","ARTIE","ARMIDA","ZOLA","XIOMARA","VERGIE","SHAMIKA","NENA","NANNETTE","MAXIE","LOVIE","JEANE","JAIMIE","INGE","FARRAH","ELAINA","CAITLYN","STARR","FELICITAS","CHERLY","CARYL","YOLONDA","YASMIN","TEENA","PRUDENCE","PENNIE","NYDIA","MACKENZIE","ORPHA","MARVEL","LIZBETH","LAURETTE","JERRIE","HERMELINDA","CAROLEE","TIERRA","MIRIAN","META","MELONY","KORI","JENNETTE","JAMILA","ENA","ANH","YOSHIKO","SUSANNAH","SALINA","RHIANNON","JOLEEN","CRISTINE","ASHTON","ARACELY","TOMEKA","SHALONDA","MARTI","LACIE","KALA","JADA","ILSE","HAILEY","BRITTANI","ZONA","SYBLE","SHERRYL","RANDY","NIDIA","MARLO","KANDICE","KANDI","DEB","DEAN","AMERICA","ALYCIA","TOMMY","RONNA","NORENE","MERCY","JOSE","INGEBORG","GIOVANNA","GEMMA","CHRISTEL","AUDRY","ZORA","VITA","VAN","TRISH","STEPHAINE","SHIRLEE","SHANIKA","MELONIE","MAZIE","JAZMIN","INGA","HOA","HETTIE","GERALYN","FONDA","ESTRELLA","ADELLA","SU","SARITA","RINA","MILISSA","MARIBETH","GOLDA","EVON","ETHELYN","ENEDINA","CHERISE","CHANA","VELVA","TAWANNA","SADE","MIRTA","LI","KARIE","JACINTA","ELNA","DAVINA","CIERRA","ASHLIE","ALBERTHA","TANESHA","STEPHANI","NELLE","MINDI","LU","LORINDA","LARUE","FLORENE","DEMETRA","DEDRA","CIARA","CHANTELLE","ASHLY","SUZY","ROSALVA","NOELIA","LYDA","LEATHA","KRYSTYNA","KRISTAN","KARRI","DARLINE","DARCIE","CINDA","CHEYENNE","CHERRIE","AWILDA","ALMEDA","ROLANDA","LANETTE","JERILYN","GISELE","EVALYN","CYNDI","CLETA","CARIN","ZINA","ZENA","VELIA","TANIKA","PAUL","CHARISSA","THOMAS","TALIA","MARGARETE","LAVONDA","KAYLEE","KATHLENE","JONNA","IRENA","ILONA","IDALIA","CANDIS","CANDANCE","BRANDEE","ANITRA","ALIDA","SIGRID","NICOLETTE","MARYJO","LINETTE","HEDWIG","CHRISTIANA","CASSIDY","ALEXIA","TRESSIE","MODESTA","LUPITA","LITA","GLADIS","EVELIA","DAVIDA","CHERRI","CECILY","ASHELY","ANNABEL","AGUSTINA","WANITA","SHIRLY","ROSAURA","HULDA","EUN","BAILEY","YETTA","VERONA","THOMASINA","SIBYL","SHANNAN","MECHELLE","LUE","LEANDRA","LANI","KYLEE","KANDY","JOLYNN","FERNE","EBONI","CORENE","ALYSIA","ZULA","NADA","MOIRA","LYNDSAY","LORRETTA","JUAN","JAMMIE","HORTENSIA","GAYNELL","CAMERON","ADRIA","VINA","VICENTA","TANGELA","STEPHINE","NORINE","NELLA","LIANA","LESLEE","KIMBERELY","ILIANA","GLORY","FELICA","EMOGENE","ELFRIEDE","EDEN","EARTHA","CARMA","BEA","OCIE","MARRY","LENNIE","KIARA","JACALYN","CARLOTA","ARIELLE","YU","STAR","OTILIA","KIRSTIN","KACEY","JOHNETTA","JOEY","JOETTA","JERALDINE","JAUNITA","ELANA","DORTHEA","CAMI","AMADA","ADELIA","VERNITA","TAMAR","SIOBHAN","RENEA","RASHIDA","OUIDA","ODELL","NILSA","MERYL","KRISTYN","JULIETA","DANICA","BREANNE","AUREA","ANGLEA","SHERRON","ODETTE","MALIA","LORELEI","LIN","LEESA","KENNA","KATHLYN","FIONA","CHARLETTE","SUZIE","SHANTELL","SABRA","RACQUEL","MYONG","MIRA","MARTINE","LUCIENNE","LAVADA","JULIANN","JOHNIE","ELVERA","DELPHIA","CLAIR","CHRISTIANE","CHAROLETTE","CARRI","AUGUSTINE","ASHA","ANGELLA","PAOLA","NINFA","LEDA","LAI","EDA","SUNSHINE","STEFANI","SHANELL","PALMA","MACHELLE","LISSA","KECIA","KATHRYNE","KARLENE","JULISSA","JETTIE","JENNIFFER","HUI","CORRINA","CHRISTOPHER","CAROLANN","ALENA","TESS","ROSARIA","MYRTICE","MARYLEE","LIANE","KENYATTA","JUDIE","JANEY","IN","ELMIRA","ELDORA","DENNA","CRISTI","CATHI","ZAIDA","VONNIE","VIVA","VERNIE","ROSALINE","MARIELA","LUCIANA","LESLI","KARAN","FELICE","DENEEN","ADINA","WYNONA","TARSHA","SHERON","SHASTA","SHANITA","SHANI","SHANDRA","RANDA","PINKIE","PARIS","NELIDA","MARILOU","LYLA","LAURENE","LACI","JOI","JANENE","DOROTHA","DANIELE","DANI","CAROLYNN","CARLYN","BERENICE","AYESHA","ANNELIESE","ALETHEA","THERSA","TAMIKO","RUFINA","OLIVA","MOZELL","MARYLYN","MADISON","KRISTIAN","KATHYRN","KASANDRA","KANDACE","JANAE","GABRIEL","DOMENICA","DEBBRA","DANNIELLE","CHUN","BUFFY","BARBIE","ARCELIA","AJA","ZENOBIA","SHAREN","SHAREE","PATRICK","PAGE","MY","LAVINIA","KUM","KACIE","JACKELINE","HUONG","FELISA","EMELIA","ELEANORA","CYTHIA","CRISTIN","CLYDE","CLARIBEL","CARON","ANASTACIA","ZULMA","ZANDRA","YOKO","TENISHA","SUSANN","SHERILYN","SHAY","SHAWANDA","SABINE","ROMANA","MATHILDA","LINSEY","KEIKO","JOANA","ISELA","GRETTA","GEORGETTA","EUGENIE","DUSTY","DESIRAE","DELORA","CORAZON","ANTONINA","ANIKA","WILLENE","TRACEE","TAMATHA","REGAN","NICHELLE","MICKIE","MAEGAN","LUANA","LANITA","KELSIE","EDELMIRA","BREE","AFTON","TEODORA","TAMIE","SHENA","MEG","LINH","KELI","KACI","DANYELLE","BRITT","ARLETTE","ALBERTINE","ADELLE","TIFFINY","STORMY","SIMONA","NUMBERS","NICOLASA","NICHOL","NIA","NAKISHA","MEE","MAIRA","LOREEN","KIZZY","JOHNNY","JAY","FALLON","CHRISTENE","BOBBYE","ANTHONY","YING","VINCENZA","TANJA","RUBIE","RONI","QUEENIE","MARGARETT","KIMBERLI","IRMGARD","IDELL","HILMA","EVELINA","ESTA","EMILEE","DENNISE","DANIA","CARL","CARIE","ANTONIO","WAI","SANG","RISA","RIKKI","PARTICIA","MUI","MASAKO","MARIO","LUVENIA","LOREE","LONI","LIEN","KEVIN","GIGI","FLORENCIA","DORIAN","DENITA","DALLAS","CHI","BILLYE","ALEXANDER","TOMIKA","SHARITA","RANA","NIKOLE","NEOMA","MARGARITE","MADALYN","LUCINA","LAILA","KALI","JENETTE","GABRIELE","EVELYNE","ELENORA","CLEMENTINA","ALEJANDRINA","ZULEMA","VIOLETTE","VANNESSA","THRESA","RETTA","PIA","PATIENCE","NOELLA","NICKIE","JONELL","DELTA","CHUNG","CHAYA","CAMELIA","BETHEL","ANYA","ANDREW","THANH","SUZANN","SPRING","SHU","MILA","LILLA","LAVERNA","KEESHA","KATTIE","GIA","GEORGENE","EVELINE","ESTELL","ELIZBETH","VIVIENNE","VALLIE","TRUDIE","STEPHANE","MICHEL","MAGALY","MADIE","KENYETTA","KARREN","JANETTA","HERMINE","HARMONY","DRUCILLA","DEBBI","CELESTINA","CANDIE","BRITNI","BECKIE","AMINA","ZITA","YUN","YOLANDE","VIVIEN","VERNETTA","TRUDI","SOMMER","PEARLE","PATRINA","OSSIE","NICOLLE","LOYCE","LETTY","LARISA","KATHARINA","JOSELYN","JONELLE","JENELL","IESHA","HEIDE","FLORINDA","FLORENTINA","FLO","ELODIA","DORINE","BRUNILDA","BRIGID","ASHLI","ARDELLA","TWANA","THU","TARAH","SUNG","SHEA","SHAVON","SHANE","SERINA","RAYNA","RAMONITA","NGA","MARGURITE","LUCRECIA","KOURTNEY","KATI","JESUS","JESENIA","DIAMOND","CRISTA","AYANA","ALICA","ALIA","VINNIE","SUELLEN","ROMELIA","RACHELL","PIPER","OLYMPIA","MICHIKO","KATHALEEN","JOLIE","JESSI","JANESSA","HANA","HA","ELEASE","CARLETTA","BRITANY","SHONA","SALOME","ROSAMOND","REGENA","RAINA","NGOC","NELIA","LOUVENIA","LESIA","LATRINA","LATICIA","LARHONDA","JINA","JACKI","HOLLIS","HOLLEY","EMMY","DEEANN","CORETTA","ARNETTA","VELVET","THALIA","SHANICE","NETA","MIKKI","MICKI","LONNA","LEANA","LASHUNDA","KILEY","JOYE","JACQULYN","IGNACIA","HYUN","HIROKO","HENRY","HENRIETTE","ELAYNE","DELINDA","DARNELL","DAHLIA","COREEN","CONSUELA","CONCHITA","CELINE","BABETTE","AYANNA","ANETTE","ALBERTINA","SKYE","SHAWNEE","SHANEKA","QUIANA","PAMELIA","MIN","MERRI","MERLENE","MARGIT","KIESHA","KIERA","KAYLENE","JODEE","JENISE","ERLENE","EMMIE","ELSE","DARYL","DALILA","DAISEY","CODY","CASIE","BELIA","BABARA","VERSIE","VANESA","SHELBA","SHAWNDA","SAM","NORMAN","NIKIA","NAOMA","MARNA","MARGERET","MADALINE","LAWANA","KINDRA","JUTTA","JAZMINE","JANETT","HANNELORE","GLENDORA","GERTRUD","GARNETT","FREEDA","FREDERICA","FLORANCE","FLAVIA","DENNIS","CARLINE","BEVERLEE","ANJANETTE","VALDA","TRINITY","TAMALA","STEVIE","SHONNA","SHA","SARINA","ONEIDA","MICAH","MERILYN","MARLEEN","LURLINE","LENNA","KATHERIN","JIN","JENI","HAE","GRACIA","GLADY","FARAH","ERIC","ENOLA","EMA","DOMINQUE","DEVONA","DELANA","CECILA","CAPRICE","ALYSHA","ALI","ALETHIA","VENA","THERESIA","TAWNY","SONG","SHAKIRA","SAMARA","SACHIKO","RACHELE","PAMELLA","NICKY","MARNI","MARIEL","MAREN","MALISA","LIGIA","LERA","LATORIA","LARAE","KIMBER","KATHERN","KAREY","JENNEFER","JANETH","HALINA","FREDIA","DELISA","DEBROAH","CIERA","CHIN","ANGELIKA","ANDREE","ALTHA","YEN","VIVAN","TERRESA","TANNA","SUK","SUDIE","SOO","SIGNE","SALENA","RONNI","REBBECCA","MYRTIE","MCKENZIE","MALIKA","MAIDA","LOAN","LEONARDA","KAYLEIGH","FRANCE","ETHYL","ELLYN","DAYLE","CAMMIE","BRITTNI","BIRGIT","AVELINA","ASUNCION","ARIANNA","AKIKO","VENICE","TYESHA","TONIE","TIESHA","TAKISHA","STEFFANIE","SINDY","SANTANA","MEGHANN","MANDA","MACIE","LADY","KELLYE","KELLEE","JOSLYN","JASON","INGER","INDIRA","GLINDA","GLENNIS","FERNANDA","FAUSTINA","ENEIDA","ELICIA","DOT","DIGNA","DELL","ARLETTA","ANDRE","WILLIA","TAMMARA","TABETHA","SHERRELL","SARI","REFUGIO","REBBECA","PAULETTA","NIEVES","NATOSHA","NAKITA","MAMMIE","KENISHA","KAZUKO","KASSIE","GARY","EARLEAN","DAPHINE","CORLISS","CLOTILDE","CAROLYNE","BERNETTA","AUGUSTINA","AUDREA","ANNIS","ANNABELL","YAN","TENNILLE","TAMICA","SELENE","SEAN","ROSANA","REGENIA","QIANA","MARKITA","MACY","LEEANNE","LAURINE","KYM","JESSENIA","JANITA","GEORGINE","GENIE","EMIKO","ELVIE","DEANDRA","DAGMAR","CORIE","COLLEN","CHERISH","ROMAINE","PORSHA","PEARLENE","MICHELINE","MERNA","MARGORIE","MARGARETTA","LORE","KENNETH","JENINE","HERMINA","FREDERICKA","ELKE","DRUSILLA","DORATHY","DIONE","DESIRE","CELENA","BRIGIDA","ANGELES","ALLEGRA","THEO","TAMEKIA","SYNTHIA","STEPHEN","SOOK","SLYVIA","ROSANN","REATHA","RAYE","MARQUETTA","MARGART","LING","LAYLA","KYMBERLY","KIANA","KAYLEEN","KATLYN","KARMEN","JOELLA","IRINA","EMELDA","ELENI","DETRA","CLEMMIE","CHERYLL","CHANTELL","CATHEY","ARNITA","ARLA","ANGLE","ANGELIC","ALYSE","ZOFIA","THOMASINE","TENNIE","SON","SHERLY","SHERLEY","SHARYL","REMEDIOS","PETRINA","NICKOLE","MYUNG","MYRLE","MOZELLA","LOUANNE","LISHA","LATIA","LANE","KRYSTA","JULIENNE","JOEL","JEANENE","JACQUALINE","ISAURA","GWENDA","EARLEEN","DONALD","CLEOPATRA","CARLIE","AUDIE","ANTONIETTA","ALISE","ALEX","VERDELL","VAL","TYLER","TOMOKO","THAO","TALISHA","STEVEN","SO","SHEMIKA","SHAUN","SCARLET","SAVANNA","SANTINA","ROSIA","RAEANN","ODILIA","NANA","MINNA","MAGAN","LYNELLE","LE","KARMA","JOEANN","IVANA","INELL","ILANA","HYE","HONEY","HEE","GUDRUN","FRANK","DREAMA","CRISSY","CHANTE","CARMELINA","ARVILLA","ARTHUR","ANNAMAE","ALVERA","ALEIDA","AARON","YEE","YANIRA","VANDA","TIANNA","TAM","STEFANIA","SHIRA","PERRY","NICOL","NANCIE","MONSERRATE","MINH","MELYNDA","MELANY","MATTHEW","LOVELLA","LAURE","KIRBY","KACY","JACQUELYNN","HYON","GERTHA","FRANCISCO","ELIANA","CHRISTENA","CHRISTEEN","CHARISE","CATERINA","CARLEY","CANDYCE","ARLENA","AMMIE","YANG","WILLETTE","VANITA","TUYET","TINY","SYREETA","SILVA","SCOTT","RONALD","PENNEY","NYLA","MICHAL","MAURICE","MARYAM","MARYA","MAGEN","LUDIE","LOMA","LIVIA","LANELL","KIMBERLIE","JULEE","DONETTA","DIEDRA","DENISHA","DEANE","DAWNE","CLARINE","CHERRYL","BRONWYN","BRANDON","ALLA","VALERY","TONDA","SUEANN","SORAYA","SHOSHANA","SHELA","SHARLEEN","SHANELLE","NERISSA","MICHEAL","MERIDITH","MELLIE","MAYE","MAPLE","MAGARET","LUIS","LILI","LEONILA","LEONIE","LEEANNA","LAVONIA","LAVERA","KRISTEL","KATHEY","KATHE","JUSTIN","JULIAN","JIMMY","JANN","ILDA","HILDRED","HILDEGARDE","GENIA","FUMIKO","EVELIN","ERMELINDA","ELLY","DUNG","DOLORIS","DIONNA","DANAE","BERNEICE","ANNICE","ALIX","VERENA","VERDIE","TRISTAN","SHAWNNA","SHAWANA","SHAUNNA","ROZELLA","RANDEE","RANAE","MILAGRO","LYNELL","LUISE","LOUIE","LOIDA","LISBETH","KARLEEN","JUNITA","JONA","ISIS","HYACINTH","HEDY","GWENN","ETHELENE","ERLINE","EDWARD","DONYA","DOMONIQUE","DELICIA","DANNETTE","CICELY","BRANDA","BLYTHE","BETHANN","ASHLYN","ANNALEE","ALLINE","YUKO","VELLA","TRANG","TOWANDA","TESHA","SHERLYN","NARCISA","MIGUELINA","MERI","MAYBELL","MARLANA","MARGUERITA","MADLYN","LUNA","LORY","LORIANN","LIBERTY","LEONORE","LEIGHANN","LAURICE","LATESHA","LARONDA","KATRICE","KASIE","KARL","KALEY","JADWIGA","GLENNIE","GEARLDINE","FRANCINA","EPIFANIA","DYAN","DORIE","DIEDRE","DENESE","DEMETRICE","DELENA","DARBY","CRISTIE","CLEORA","CATARINA","CARISA","BERNIE","BARBERA","ALMETA","TRULA","TEREASA","SOLANGE","SHEILAH","SHAVONNE","SANORA","ROCHELL","MATHILDE","MARGARETA","MAIA","LYNSEY","LAWANNA","LAUNA","KENA","KEENA","KATIA","JAMEY","GLYNDA","GAYLENE","ELVINA","ELANOR","DANUTA","DANIKA","CRISTEN","CORDIE","COLETTA","CLARITA","CARMON","BRYNN","AZUCENA","AUNDREA","ANGELE","YI","WALTER","VERLIE","VERLENE","TAMESHA","SILVANA","SEBRINA","SAMIRA","REDA","RAYLENE","PENNI","PANDORA","NORAH","NOMA","MIREILLE","MELISSIA","MARYALICE","LARAINE","KIMBERY","KARYL","KARINE","KAM","JOLANDA","JOHANA","JESUSA","JALEESA","JAE","JACQUELYNE","IRISH","ILUMINADA","HILARIA","HANH","GENNIE","FRANCIE","FLORETTA","EXIE","EDDA","DREMA","DELPHA","BEV","BARBAR","ASSUNTA","ARDELL","ANNALISA","ALISIA","YUKIKO","YOLANDO","WONDA","WEI","WALTRAUD","VETA","TEQUILA","TEMEKA","TAMEIKA","SHIRLEEN","SHENITA","PIEDAD","OZELLA","MIRTHA","MARILU","KIMIKO","JULIANE","JENICE","JEN","JANAY","JACQUILINE","HILDE","FE","FAE","EVAN","EUGENE","ELOIS","ECHO","DEVORAH","CHAU","BRINDA","BETSEY","ARMINDA","ARACELIS","APRYL","ANNETT","ALISHIA","VEOLA","USHA","TOSHIKO","THEOLA","TASHIA","TALITHA","SHERY","RUDY","RENETTA","REIKO","RASHEEDA","OMEGA","OBDULIA","MIKA","MELAINE","MEGGAN","MARTIN","MARLEN","MARGET","MARCELINE","MANA","MAGDALEN","LIBRADA","LEZLIE","LEXIE","LATASHIA","LASANDRA","KELLE","ISIDRA","ISA","INOCENCIA","GWYN","FRANCOISE","ERMINIA","ERINN","DIMPLE","DEVORA","CRISELDA","ARMANDA","ARIE","ARIANE","ANGELO","ANGELENA","ALLEN","ALIZA","ADRIENE","ADALINE","XOCHITL","TWANNA","TRAN","TOMIKO","TAMISHA","TAISHA","SUSY","SIU","RUTHA","ROXY","RHONA","RAYMOND","OTHA","NORIKO","NATASHIA","MERRIE","MELVIN","MARINDA","MARIKO","MARGERT","LORIS","LIZZETTE","LEISHA","KAILA","KA","JOANNIE","JERRICA","JENE","JANNET","JANEE","JACINDA","HERTA","ELENORE","DORETTA","DELAINE","DANIELL","CLAUDIE","CHINA","BRITTA","APOLONIA","AMBERLY","ALEASE","YURI","YUK","WEN","WANETA","UTE","TOMI","SHARRI","SANDIE","ROSELLE","REYNALDA","RAGUEL","PHYLICIA","PATRIA","OLIMPIA","ODELIA","MITZIE","MITCHELL","MISS","MINDA","MIGNON","MICA","MENDY","MARIVEL","MAILE","LYNETTA","LAVETTE","LAURYN","LATRISHA","LAKIESHA","KIERSTEN","KARY","JOSPHINE","JOLYN","JETTA","JANISE","JACQUIE","IVELISSE","GLYNIS","GIANNA","GAYNELLE","EMERALD","DEMETRIUS","DANYELL","DANILLE","DACIA","CORALEE","CHER","CEOLA","BRETT","BELL","ARIANNE","ALESHIA","YUNG","WILLIEMAE","TROY","TRINH","THORA","TAI","SVETLANA","SHERIKA","SHEMEKA","SHAUNDA","ROSELINE","RICKI","MELDA","MALLIE","LAVONNA","LATINA","LARRY","LAQUANDA","LALA","LACHELLE","KLARA","KANDIS","JOHNA","JEANMARIE","JAYE","HANG","GRAYCE","GERTUDE","EMERITA","EBONIE","CLORINDA","CHING","CHERY","CAROLA","BREANN","BLOSSOM","BERNARDINE","BECKI","ARLETHA","ARGELIA","ARA","ALITA","YULANDA","YON","YESSENIA","TOBI","TASIA","SYLVIE","SHIRL","SHIRELY","SHERIDAN","SHELLA","SHANTELLE","SACHA","ROYCE","REBECKA","REAGAN","PROVIDENCIA","PAULENE","MISHA","MIKI","MARLINE","MARICA","LORITA","LATOYIA","LASONYA","KERSTIN","KENDA","KEITHA","KATHRIN","JAYMIE","JACK","GRICELDA","GINETTE","ERYN","ELINA","ELFRIEDA","DANYEL","CHEREE","CHANELLE","BARRIE","AVERY","AURORE","ANNAMARIA","ALLEEN","AILENE","AIDE","YASMINE","VASHTI","VALENTINE","TREASA","TORY","TIFFANEY","SHERYLL","SHARIE","SHANAE","SAU","RAISA","PA","NEDA","MITSUKO","MIRELLA","MILDA","MARYANNA","MARAGRET","MABELLE","LUETTA","LORINA","LETISHA","LATARSHA","LANELLE","LAJUANA","KRISSY","KARLY","KARENA","JON","JESSIKA","JERICA","JEANELLE","JANUARY","JALISA","JACELYN","IZOLA","IVEY","GREGORY","EUNA","ETHA","DREW","DOMITILA","DOMINICA","DAINA","CREOLA","CARLI","CAMIE","BUNNY","BRITTNY","ASHANTI","ANISHA","ALEEN","ADAH","YASUKO","WINTER","VIKI","VALRIE","TONA","TINISHA","THI","TERISA","TATUM","TANEKA","SIMONNE","SHALANDA","SERITA","RESSIE","REFUGIA","PAZ","OLENE","NA","MERRILL","MARGHERITA","MANDIE","MAN","MAIRE","LYNDIA","LUCI","LORRIANE","LORETA","LEONIA","LAVONA","LASHAWNDA","LAKIA","KYOKO","KRYSTINA","KRYSTEN","KENIA","KELSI","JUDE","JEANICE","ISOBEL","GEORGIANN","GENNY","FELICIDAD","EILENE","DEON","DELOISE","DEEDEE","DANNIE","CONCEPTION","CLORA","CHERILYN","CHANG","CALANDRA","BERRY","ARMANDINA","ANISA","ULA","TIMOTHY","TIERA","THERESSA","STEPHANIA","SIMA","SHYLA","SHONTA","SHERA","SHAQUITA","SHALA","SAMMY","ROSSANA","NOHEMI","NERY","MORIAH","MELITA","MELIDA","MELANI","MARYLYNN","MARISHA","MARIETTE","MALORIE","MADELENE","LUDIVINA","LORIA","LORETTE","LORALEE","LIANNE","LEON","LAVENIA","LAURINDA","LASHON","KIT","KIMI","KEILA","KATELYNN","KAI","JONE","JOANE","JI","JAYNA","JANELLA","JA","HUE","HERTHA","FRANCENE","ELINORE","DESPINA","DELSIE","DEEDRA","CLEMENCIA","CARRY","CAROLIN","CARLOS","BULAH","BRITTANIE","BOK","BLONDELL","BIBI","BEAULAH","BEATA","ANNITA","AGRIPINA","VIRGEN","VALENE","UN","TWANDA","TOMMYE","TOI","TARRA","TARI","TAMMERA","SHAKIA","SADYE","RUTHANNE","ROCHEL","RIVKA","PURA","NENITA","NATISHA","MING","MERRILEE","MELODEE","MARVIS","LUCILLA","LEENA","LAVETA","LARITA","LANIE","KEREN","ILEEN","GEORGEANN","GENNA","GENESIS","FRIDA","EWA","EUFEMIA","EMELY","ELA","EDYTH","DEONNA","DEADRA","DARLENA","CHANELL","CHAN","CATHERN","CASSONDRA","CASSAUNDRA","BERNARDA","BERNA","ARLINDA","ANAMARIA","ALBERT","WESLEY","VERTIE","VALERI","TORRI","TATYANA","STASIA","SHERISE","SHERILL","SEASON","SCOTTIE","SANDA","RUTHE","ROSY","ROBERTO","ROBBI","RANEE","QUYEN","PEARLY","PALMIRA","ONITA","NISHA","NIESHA","NIDA","NEVADA","NAM","MERLYN","MAYOLA","MARYLOUISE","MARYLAND","MARX","MARTH","MARGENE","MADELAINE","LONDA","LEONTINE","LEOMA","LEIA","LAWRENCE","LAURALEE","LANORA","LAKITA","KIYOKO","KETURAH","KATELIN","KAREEN","JONIE","JOHNETTE","JENEE","JEANETT","IZETTA","HIEDI","HEIKE","HASSIE","HAROLD","GIUSEPPINA","GEORGANN","FIDELA","FERNANDE","ELWANDA","ELLAMAE","ELIZ","DUSTI","DOTTY","CYNDY","CORALIE","CELESTA","ARGENTINA","ALVERTA","XENIA","WAVA","VANETTA","TORRIE","TASHINA","TANDY","TAMBRA","TAMA","STEPANIE","SHILA","SHAUNTA","SHARAN","SHANIQUA","SHAE","SETSUKO","SERAFINA","SANDEE","ROSAMARIA","PRISCILA","OLINDA","NADENE","MUOI","MICHELINA","MERCEDEZ","MARYROSE","MARIN","MARCENE","MAO","MAGALI","MAFALDA","LOGAN","LINN","LANNIE","KAYCE","KAROLINE","KAMILAH","KAMALA","JUSTA","JOLINE","JENNINE","JACQUETTA","IRAIDA","GERALD","GEORGEANNA","FRANCHESCA","FAIRY","EMELINE","ELANE","EHTEL","EARLIE","DULCIE","DALENE","CRIS","CLASSIE","CHERE","CHARIS","CAROYLN","CARMINA","CARITA","BRIAN","BETHANIE","AYAKO","ARICA","AN","ALYSA","ALESSANDRA","AKILAH","ADRIEN","ZETTA","YOULANDA","YELENA","YAHAIRA","XUAN","WENDOLYN","VICTOR","TIJUANA","TERRELL","TERINA","TERESIA","SUZI","SUNDAY","SHERELL","SHAVONDA","SHAUNTE","SHARDA","SHAKITA","SENA","RYANN","RUBI","RIVA","REGINIA","REA","RACHAL","PARTHENIA","PAMULA","MONNIE","MONET","MICHAELE","MELIA","MARINE","MALKA","MAISHA","LISANDRA","LEO","LEKISHA","LEAN","LAURENCE","LAKENDRA","KRYSTIN","KORTNEY","KIZZIE","KITTIE","KERA","KENDAL","KEMBERLY","KANISHA","JULENE","JULE","JOSHUA","JOHANNE","JEFFREY","JAMEE","HAN","HALLEY","GIDGET","GALINA","FREDRICKA","FLETA","FATIMAH","EUSEBIA","ELZA","ELEONORE","DORTHEY","DORIA","DONELLA","DINORAH","DELORSE","CLARETHA","CHRISTINIA","CHARLYN","BONG","BELKIS","AZZIE","ANDERA","AIKO","ADENA","YER","YAJAIRA","WAN","VANIA","ULRIKE","TOSHIA","TIFANY","STEFANY","SHIZUE","SHENIKA","SHAWANNA","SHAROLYN","SHARILYN","SHAQUANA","SHANTAY","SEE","ROZANNE","ROSELEE","RICKIE","REMONA","REANNA","RAELENE","QUINN","PHUNG","PETRONILA","NATACHA","NANCEY","MYRL","MIYOKO","MIESHA","MERIDETH","MARVELLA","MARQUITTA","MARHTA","MARCHELLE","LIZETH","LIBBIE","LAHOMA","LADAWN","KINA","KATHELEEN","KATHARYN","KARISA","KALEIGH","JUNIE","JULIEANN","JOHNSIE","JANEAN","JAIMEE","JACKQUELINE","HISAKO","HERMA","HELAINE","GWYNETH","GLENN","GITA","EUSTOLIA","EMELINA","ELIN","EDRIS","DONNETTE","DONNETTA","DIERDRE","DENAE","DARCEL","CLAUDE","CLARISA","CINDERELLA","CHIA","CHARLESETTA","CHARITA","CELSA","CASSY","CASSI","CARLEE","BRUNA","BRITTANEY","BRANDE","BILLI","BAO","ANTONETTA","ANGLA","ANGELYN","ANALISA","ALANE","WENONA","WENDIE","VERONIQUE","VANNESA","TOBIE","TEMPIE","SUMIKO","SULEMA","SPARKLE","SOMER","SHEBA","SHAYNE","SHARICE","SHANEL","SHALON","SAGE","ROY","ROSIO","ROSELIA","RENAY","REMA","REENA","PORSCHE","PING","PEG","OZIE","ORETHA","ORALEE","ODA","NU","NGAN","NAKESHA","MILLY","MARYBELLE","MARLIN","MARIS","MARGRETT","MARAGARET","MANIE","LURLENE","LILLIA","LIESELOTTE","LAVELLE","LASHAUNDA","LAKEESHA","KEITH","KAYCEE","KALYN","JOYA","JOETTE","JENAE","JANIECE","ILLA","GRISEL","GLAYDS","GENEVIE","GALA","FREDDA","FRED","ELMER","ELEONOR","DEBERA","DEANDREA","DAN","CORRINNE","CORDIA","CONTESSA","COLENE","CLEOTILDE","CHARLOTT","CHANTAY","CECILLE","BEATRIS","AZALEE","ARLEAN","ARDATH","ANJELICA","ANJA","ALFREDIA","ALEISHA","ADAM","ZADA","YUONNE","XIAO","WILLODEAN","WHITLEY","VENNIE","VANNA","TYISHA","TOVA","TORIE","TONISHA","TILDA","TIEN","TEMPLE","SIRENA","SHERRIL","SHANTI","SHAN","SENAIDA","SAMELLA","ROBBYN","RENDA","REITA","PHEBE","PAULITA","NOBUKO","NGUYET","NEOMI","MOON","MIKAELA","MELANIA","MAXIMINA","MARG","MAISIE","LYNNA","LILLI","LAYNE","LASHAUN","LAKENYA","LAEL","KIRSTIE","KATHLINE","KASHA","KARLYN","KARIMA","JOVAN","JOSEFINE","JENNELL","JACQUI","JACKELYN","HYO","HIEN","GRAZYNA","FLORRIE","FLORIA","ELEONORA","DWANA","DORLA","DONG","DELMY","DEJA","DEDE","DANN","CRYSTA","CLELIA","CLARIS","CLARENCE","CHIEKO","CHERLYN","CHERELLE","CHARMAIN","CHARA","CAMMY","BEE","ARNETTE","ARDELLE","ANNIKA","AMIEE","AMEE","ALLENA","YVONE","YUKI","YOSHIE","YEVETTE","YAEL","WILLETTA","VONCILE","VENETTA","TULA","TONETTE","TIMIKA","TEMIKA","TELMA","TEISHA","TAREN","TA","STACEE","SHIN","SHAWNTA","SATURNINA","RICARDA","POK","PASTY","ONIE","NUBIA","MORA","MIKE","MARIELLE","MARIELLA","MARIANELA","MARDELL","MANY","LUANNA","LOISE","LISABETH","LINDSY","LILLIANA","LILLIAM","LELAH","LEIGHA","LEANORA","LANG","KRISTEEN","KHALILAH","KEELEY","KANDRA","JUNKO","JOAQUINA","JERLENE","JANI","JAMIKA","JAME","HSIU","HERMILA","GOLDEN","GENEVIVE","EVIA","EUGENA","EMMALINE","ELFREDA","ELENE","DONETTE","DELCIE","DEEANNA","DARCEY","CUC","CLARINDA","CIRA","CHAE","CELINDA","CATHERYN","CATHERIN","CASIMIRA","CARMELIA","CAMELLIA","BREANA","BOBETTE","BERNARDINA","BEBE","BASILIA","ARLYNE","AMAL","ALAYNA","ZONIA","ZENIA","YURIKO","YAEKO","WYNELL","WILLOW","WILLENA","VERNIA","TU","TRAVIS","TORA","TERRILYN","TERICA","TENESHA","TAWNA","TAJUANA","TAINA","STEPHNIE","SONA","SOL","SINA","SHONDRA","SHIZUKO","SHERLENE","SHERICE","SHARIKA","ROSSIE","ROSENA","RORY","RIMA","RIA","RHEBA","RENNA","PETER","NATALYA","NANCEE","MELODI","MEDA","MAXIMA","MATHA","MARKETTA","MARICRUZ","MARCELENE","MALVINA","LUBA","LOUETTA","LEIDA","LECIA","LAURAN","LASHAWNA","LAINE","KHADIJAH","KATERINE","KASI","KALLIE","JULIETTA","JESUSITA","JESTINE","JESSIA","JEREMY","JEFFIE","JANYCE","ISADORA","GEORGIANNE","FIDELIA","EVITA","EURA","EULAH","ESTEFANA","ELSY","ELIZABET","ELADIA","DODIE","DION","DIA","DENISSE","DELORAS","DELILA","DAYSI","DAKOTA","CURTIS","CRYSTLE","CONCHA","COLBY","CLARETTA","CHU","CHRISTIA","CHARLSIE","CHARLENA","CARYLON","BETTYANN","ASLEY","ASHLEA","AMIRA","AI","AGUEDA","AGNUS","YUETTE","VINITA","VICTORINA","TYNISHA","TREENA","TOCCARA","TISH","THOMASENA","TEGAN","SOILA","SHILOH","SHENNA","SHARMAINE","SHANTAE","SHANDI","SEPTEMBER","SARAN","SARAI","SANA","SAMUEL","SALLEY","ROSETTE","ROLANDE","REGINE","OTELIA","OSCAR","OLEVIA","NICHOLLE","NECOLE","NAIDA","MYRTA","MYESHA","MITSUE","MINTA","MERTIE","MARGY","MAHALIA","MADALENE","LOVE","LOURA","LOREAN","LEWIS","LESHA","LEONIDA","LENITA","LAVONE","LASHELL","LASHANDRA","LAMONICA","KIMBRA","KATHERINA","KARRY","KANESHA","JULIO","JONG","JENEVA","JAQUELYN","HWA","GILMA","GHISLAINE","GERTRUDIS","FRANSISCA","FERMINA","ETTIE","ETSUKO","ELLIS","ELLAN","ELIDIA","EDRA","DORETHEA","DOREATHA","DENYSE","DENNY","DEETTA","DAINE","CYRSTAL","CORRIN","CAYLA","CARLITA","CAMILA","BURMA","BULA","BUENA","BLAKE","BARABARA","AVRIL","AUSTIN","ALAINE","ZANA","WILHEMINA","WANETTA","VIRGIL","VI","VERONIKA","VERNON","VERLINE","VASILIKI","TONITA","TISA","TEOFILA","TAYNA","TAUNYA","TANDRA","TAKAKO","SUNNI","SUANNE","SIXTA","SHARELL","SEEMA","RUSSELL","ROSENDA","ROBENA","RAYMONDE","PEI","PAMILA","OZELL","NEIDA","NEELY","MISTIE","MICHA","MERISSA","MAURITA","MARYLN","MARYETTA","MARSHALL","MARCELL","MALENA","MAKEDA","MADDIE","LOVETTA","LOURIE","LORRINE","LORILEE","LESTER","LAURENA","LASHAY","LARRAINE","LAREE","LACRESHA","KRISTLE","KRISHNA","KEVA","KEIRA","KAROLE","JOIE","JINNY","JEANNETTA","JAMA","HEIDY","GILBERTE","GEMA","FAVIOLA","EVELYNN","ENDA","ELLI","ELLENA","DIVINA","DAGNY","COLLENE","CODI","CINDIE","CHASSIDY","CHASIDY","CATRICE","CATHERINA","CASSEY","CAROLL","CARLENA","CANDRA","CALISTA","BRYANNA","BRITTENY","BEULA","BARI","AUDRIE","AUDRIA","ARDELIA","ANNELLE","ANGILA","ALONA","ALLYN","DOUGLAS","ROGER","JONATHAN","RALPH","NICHOLAS","BENJAMIN","BRUCE","HARRY","WAYNE","STEVE","HOWARD","ERNEST","PHILLIP","TODD","CRAIG","ALAN","PHILIP","EARL","DANNY","BRYAN","STANLEY","LEONARD","NATHAN","MANUEL","RODNEY","MARVIN","VINCENT","JEFFERY","JEFF","CHAD","JACOB","ALFRED","BRADLEY","HERBERT","FREDERICK","EDWIN","DON","RICKY","RANDALL","BARRY","BERNARD","LEROY","MARCUS","THEODORE","CLIFFORD","MIGUEL","JIM","TOM","CALVIN","BILL","LLOYD","DEREK","WARREN","DARRELL","JEROME","FLOYD","ALVIN","TIM","GORDON","GREG","JORGE","DUSTIN","PEDRO","DERRICK","ZACHARY","HERMAN","GLEN","HECTOR","RICARDO","RICK","BRENT","RAMON","GILBERT","MARC","REGINALD","RUBEN","NATHANIEL","RAFAEL","EDGAR","MILTON","RAUL","BEN","CHESTER","DUANE","FRANKLIN","BRAD","RON","ROLAND","ARNOLD","HARVEY","JARED","ERIK","DARRYL","NEIL","JAVIER","FERNANDO","CLINTON","TED","MATHEW","TYRONE","DARREN","LANCE","KURT","ALLAN","NELSON","GUY","CLAYTON","HUGH","MAX","DWAYNE","DWIGHT","ARMANDO","FELIX","EVERETT","IAN","WALLACE","KEN","BOB","ALFREDO","ALBERTO","DAVE","IVAN","BYRON","ISAAC","MORRIS","CLIFTON","WILLARD","ROSS","ANDY","SALVADOR","KIRK","SERGIO","SETH","KENT","TERRANCE","EDUARDO","TERRENCE","ENRIQUE","WADE","STUART","FREDRICK","ARTURO","ALEJANDRO","NICK","LUTHER","WENDELL","JEREMIAH","JULIUS","OTIS","TREVOR","OLIVER","LUKE","HOMER","GERARD","DOUG","KENNY","HUBERT","LYLE","MATT","ALFONSO","ORLANDO","REX","CARLTON","ERNESTO","NEAL","PABLO","LORENZO","OMAR","WILBUR","GRANT","HORACE","RODERICK","ABRAHAM","WILLIS","RICKEY","ANDRES","CESAR","JOHNATHAN","MALCOLM","RUDOLPH","DAMON","KELVIN","PRESTON","ALTON","ARCHIE","MARCO","WM","PETE","RANDOLPH","GARRY","GEOFFREY","JONATHON","FELIPE","GERARDO","ED","DOMINIC","DELBERT","COLIN","GUILLERMO","EARNEST","LUCAS","BENNY","SPENCER","RODOLFO","MYRON","EDMUND","GARRETT","SALVATORE","CEDRIC","LOWELL","GREGG","SHERMAN","WILSON","SYLVESTER","ROOSEVELT","ISRAEL","JERMAINE","FORREST","WILBERT","LELAND","SIMON","CLARK","IRVING","BRYANT","OWEN","RUFUS","WOODROW","KRISTOPHER","MACK","LEVI","MARCOS","GUSTAVO","JAKE","LIONEL","GILBERTO","CLINT","NICOLAS","ISMAEL","ORVILLE","ERVIN","DEWEY","AL","WILFRED","JOSH","HUGO","IGNACIO","CALEB","TOMAS","SHELDON","ERICK","STEWART","DOYLE","DARREL","ROGELIO","TERENCE","SANTIAGO","ALONZO","ELIAS","BERT","ELBERT","RAMIRO","CONRAD","NOAH","GRADY","PHIL","CORNELIUS","LAMAR","ROLANDO","CLAY","PERCY","DEXTER","BRADFORD","DARIN","AMOS","MOSES","IRVIN","SAUL","ROMAN","RANDAL","TIMMY","DARRIN","WINSTON","BRENDAN","ABEL","DOMINICK","BOYD","EMILIO","ELIJAH","DOMINGO","EMMETT","MARLON","EMANUEL","JERALD","EDMOND","EMIL","DEWAYNE","WILL","OTTO","TEDDY","REYNALDO","BRET","JESS","TRENT","HUMBERTO","EMMANUEL","STEPHAN","VICENTE","LAMONT","GARLAND","MILES","EFRAIN","HEATH","RODGER","HARLEY","ETHAN","ELDON","ROCKY","PIERRE","JUNIOR","FREDDY","ELI","BRYCE","ANTOINE","STERLING","CHASE","GROVER","ELTON","CLEVELAND","DYLAN","CHUCK","DAMIAN","REUBEN","STAN","AUGUST","LEONARDO","JASPER","RUSSEL","ERWIN","BENITO","HANS","MONTE","BLAINE","ERNIE","CURT","QUENTIN","AGUSTIN","MURRAY","JAMAL","ADOLFO","HARRISON","TYSON","BURTON","BRADY","ELLIOTT","WILFREDO","BART","JARROD","VANCE","DENIS","DAMIEN","JOAQUIN","HARLAN","DESMOND","ELLIOT","DARWIN","GREGORIO","BUDDY","XAVIER","KERMIT","ROSCOE","ESTEBAN","ANTON","SOLOMON","SCOTTY","NORBERT","ELVIN","WILLIAMS","NOLAN","ROD","QUINTON","HAL","BRAIN","ROB","ELWOOD","KENDRICK","DARIUS","MOISES","FIDEL","THADDEUS","CLIFF","MARCEL","JACKSON","RAPHAEL","BRYON","ARMAND","ALVARO","JEFFRY","DANE","JOESPH","THURMAN","NED","RUSTY","MONTY","FABIAN","REGGIE","MASON","GRAHAM","ISAIAH","VAUGHN","GUS","LOYD","DIEGO","ADOLPH","NORRIS","MILLARD","ROCCO","GONZALO","DERICK","RODRIGO","WILEY","RIGOBERTO","ALPHONSO","TY","NOE","VERN","REED","JEFFERSON","ELVIS","BERNARDO","MAURICIO","HIRAM","DONOVAN","BASIL","RILEY","NICKOLAS","MAYNARD","SCOT","VINCE","QUINCY","EDDY","SEBASTIAN","FEDERICO","ULYSSES","HERIBERTO","DONNELL","COLE","DAVIS","GAVIN","EMERY","WARD","ROMEO","JAYSON","DANTE","CLEMENT","COY","MAXWELL","JARVIS","BRUNO","ISSAC","DUDLEY","BROCK","SANFORD","CARMELO","BARNEY","NESTOR","STEFAN","DONNY","ART","LINWOOD","BEAU","WELDON","GALEN","ISIDRO","TRUMAN","DELMAR","JOHNATHON","SILAS","FREDERIC","DICK","IRWIN","MERLIN","CHARLEY","MARCELINO","HARRIS","CARLO","TRENTON","KURTIS","HUNTER","AURELIO","WINFRED","VITO","COLLIN","DENVER","CARTER","LEONEL","EMORY","PASQUALE","MOHAMMAD","MARIANO","DANIAL","LANDON","DIRK","BRANDEN","ADAN","BUFORD","GERMAN","WILMER","EMERSON","ZACHERY","FLETCHER","JACQUES","ERROL","DALTON","MONROE","JOSUE","EDWARDO","BOOKER","WILFORD","SONNY","SHELTON","CARSON","THERON","RAYMUNDO","DAREN","HOUSTON","ROBBY","LINCOLN","GENARO","BENNETT","OCTAVIO","CORNELL","HUNG","ARRON","ANTONY","HERSCHEL","GIOVANNI","GARTH","CYRUS","CYRIL","RONNY","LON","FREEMAN","DUNCAN","KENNITH","CARMINE","ERICH","CHADWICK","WILBURN","RUSS","REID","MYLES","ANDERSON","MORTON","JONAS","FOREST","MITCHEL","MERVIN","ZANE","RICH","JAMEL","LAZARO","ALPHONSE","RANDELL","MAJOR","JARRETT","BROOKS","ABDUL","LUCIANO","SEYMOUR","EUGENIO","MOHAMMED","VALENTIN","CHANCE","ARNULFO","LUCIEN","FERDINAND","THAD","EZRA","ALDO","RUBIN","ROYAL","MITCH","EARLE","ABE","WYATT","MARQUIS","LANNY","KAREEM","JAMAR","BORIS","ISIAH","EMILE","ELMO","ARON","LEOPOLDO","EVERETTE","JOSEF","ELOY","RODRICK","REINALDO","LUCIO","JERROD","WESTON","HERSHEL","BARTON","PARKER","LEMUEL","BURT","JULES","GIL","ELISEO","AHMAD","NIGEL","EFREN","ANTWAN","ALDEN","MARGARITO","COLEMAN","DINO","OSVALDO","LES","DEANDRE","NORMAND","KIETH","TREY","NORBERTO","NAPOLEON","JEROLD","FRITZ","ROSENDO","MILFORD","CHRISTOPER","ALFONZO","LYMAN","JOSIAH","BRANT","WILTON","RICO","JAMAAL","DEWITT","BRENTON","OLIN","FOSTER","FAUSTINO","CLAUDIO","JUDSON","GINO","EDGARDO","ALEC","TANNER","JARRED","DONN","TAD","PRINCE","PORFIRIO","ODIS","LENARD","CHAUNCEY","TOD","MEL","MARCELO","KORY","AUGUSTUS","KEVEN","HILARIO","BUD","SAL","ORVAL","MAURO","ZACHARIAH","OLEN","ANIBAL","MILO","JED","DILLON","AMADO","NEWTON","LENNY","RICHIE","HORACIO","BRICE","MOHAMED","DELMER","DARIO","REYES","MAC","JONAH","JERROLD","ROBT","HANK","RUPERT","ROLLAND","KENTON","DAMION","ANTONE","WALDO","FREDRIC","BRADLY","KIP","BURL","WALKER","TYREE","JEFFEREY","AHMED","WILLY","STANFORD","OREN","NOBLE","MOSHE","MIKEL","ENOCH","BRENDON","QUINTIN","JAMISON","FLORENCIO","DARRICK","TOBIAS","HASSAN","GIUSEPPE","DEMARCUS","CLETUS","TYRELL","LYNDON","KEENAN","WERNER","GERALDO","COLUMBUS","CHET","BERTRAM","MARKUS","HUEY","HILTON","DWAIN","DONTE","TYRON","OMER","ISAIAS","HIPOLITO","FERMIN","ADALBERTO","BO","BARRETT","TEODORO","MCKINLEY","MAXIMO","GARFIELD","RALEIGH","LAWERENCE","ABRAM","RASHAD","KING","EMMITT","DARON","SAMUAL","MIQUEL","EUSEBIO","DOMENIC","DARRON","BUSTER","WILBER","RENATO","JC","HOYT","HAYWOOD","EZEKIEL","CHAS","FLORENTINO","ELROY","CLEMENTE","ARDEN","NEVILLE","EDISON","DESHAWN","NATHANIAL","JORDON","DANILO","CLAUD","SHERWOOD","RAYMON","RAYFORD","CRISTOBAL","AMBROSE","TITUS","HYMAN","FELTON","EZEQUIEL","ERASMO","STANTON","LONNY","LEN","IKE","MILAN","LINO","JAROD","HERB","ANDREAS","WALTON","RHETT","PALMER","DOUGLASS","CORDELL","OSWALDO","ELLSWORTH","VIRGILIO","TONEY","NATHANAEL","DEL","BENEDICT","MOSE","JOHNSON","ISREAL","GARRET","FAUSTO","ASA","ARLEN","ZACK","WARNER","MODESTO","FRANCESCO","MANUAL","GAYLORD","GASTON","FILIBERTO","DEANGELO","MICHALE","GRANVILLE","WES","MALIK","ZACKARY","TUAN","ELDRIDGE","CRISTOPHER","CORTEZ","ANTIONE","MALCOM","LONG","KOREY","JOSPEH","COLTON","WAYLON","VON","HOSEA","SHAD","SANTO","RUDOLF","ROLF","REY","RENALDO","MARCELLUS","LUCIUS","KRISTOFER","BOYCE","BENTON","HAYDEN","HARLAND","ARNOLDO","RUEBEN","LEANDRO","KRAIG","JERRELL","JEROMY","HOBERT","CEDRICK","ARLIE","WINFORD","WALLY","LUIGI","KENETH","JACINTO","GRAIG","FRANKLYN","EDMUNDO","SID","PORTER","LEIF","JERAMY","BUCK","WILLIAN","VINCENZO","SHON","LYNWOOD","JERE","HAI","ELDEN","DORSEY","DARELL","BRODERICK","ALONSO"];
    var total;
    var result = 0;

    // use integrated javascript sort
    file.sort();

    // iterate over each name in file
    for (var i = 0; i < file.length; i++) {
        total = 0;

        // iterate over each character in name
        for (j = 0; j < file[i].length; j++) {
            total += file[i].charCodeAt(j) - 64;
        }

        // add together the alphabetical value
        result += total * (i + 1); 
    }

    // return result
    return result
}

function euler23() {
    var LIMIT = 28123,
        abundantNumbers = [],
        listofsums = [];

    function isAbundant(n) {
        var sum = 0;

        for (var i = 0; i <= n/2+1; i++) {
            if(n % i === 0 && i != n) {
                sum += i;
            }
        }

        return sum > n;
    }

    for (var i = 2; i <= LIMIT; i++) {
        if (isAbundant(i)) {
            abundantNumbers.push(i);
        }
    }

    for (var i = 0; i < abundantNumbers.length; i++) {
        for (var j = i; j < abundantNumbers.length; j++) {
            if (abundantNumbers[i] + abundantNumbers[j] <= LIMIT) {
                listofsums.push(abundantNumbers[i] + abundantNumbers[j]);
            }
            else {
                break;
            }
        }
    }

    var sum = 0;
    for (var i = 1; i <= LIMIT; i++) {
        if (listofsums.indexOf(i) === -1) {
            sum += i;
        }
    }

    return sum;
}

function euler24() {
    var numberOfPermutations = Math.pow(10, 6);
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = [];
    var start = 0;

    function factorial(n) {
        var sum = 1;

        for (var i = 2; i <= n; i++) {
            sum *= i;
        }

        return sum;
    }

    for (var i = numbers.length - 1; i > 0; i--) {
        var factor = factorial(i);

        var j = 0;
        while (numbers.length) {
            if (start + (j+1) * factor >= numberOfPermutations) {
                start += j * factor;
                result += numbers[j];
                numbers.splice(j, 1);
                break;
            }
            j++;
        }
    }

    result += numbers[0];

    return result;
}

function euler25() {
    var phi = 1.618033988749894848204586834;

    return Math.round((Math.log(10) * 999 + Math.log(5) / 2) / Math.log(phi));
}

function euler26() {
    var maxN = 0;
    var maxVal = 0;

    function decimals(n) {
        var remainder = 1 % n;
        var seen = {};
        var digits = [];

        while (true) {
            remainder *= 10;
            digits.push(Math.floor(remainder / n));
            remainder = remainder % n;

            if (seen[remainder]) {
              return digits.splice(seen[remainder]).length;
            }
            else {
              seen[remainder] = digits.length;
            }
        }
    }

    for (var i = 1; i < 1000; i++) {
        var val = decimals(i);
        if (val > maxVal) {
            maxVal = val;
            maxN = i;
        }
    }

    return maxN;
}

function euler27() {
    var maxA = 1000,
        maxB = 1000,
        result = {'n': 0, 'a': 0, 'b': 0};

    function isPrime(n) {
        var sqrt = Math.sqrt(n);

        for (var i=2; i<=sqrt; i++) {
            if(n%i == 0) {
                return false;
            }
        }
        return true;
    }

    for (var a = -maxA; a <= maxA; a++) {
        for (var b = -maxB; b <= maxB; b++) {
            var n = 0;

            while (isPrime(Math.abs(n*n + a*n + b))) {
                n++;
            }

            if (result.n < n) {
                result = {
                    'n': n,
                    'a': a,
                    'b': b
                }
            }
        }
    }

    return result.a * result.b;
}

function euler28() {
    var spiralMaxSize = 1001,
        spiralCurrent = 1,
        i = 1,
        diagonalSum = 0;

    while (true) {
        if (spiralCurrent == 1 || i % (spiralCurrent-1) === 1) {
            diagonalSum += i;
        }

        if (i === spiralCurrent * spiralCurrent) {
            if (spiralCurrent >= spiralMaxSize) {
                break;
            }

            spiralCurrent += 2;            
        }

        i++;
    }

    return diagonalSum;
}

function euler29() {
    // using array and checking with indexOf before push uses ~950ms
    // where an object with true value only uses ~265ms

    var minA = 2,
        maxA = 100,
        minB = 2,
        maxB = 100,
        sequence = {},
        val;

    for (var a = minA; a <= maxA; a++) {
        for (var b = minB; b <= maxB; b++) {
            val = bigint(a).pow(b).toString();
            sequence[val] = true;
        }
    }

    return Object.keys(sequence).length;
}

function euler30() {
    var sum = 0;
    var num, numSum;

    for (var a = 0; a <= 9; a++) {
        for (var b = 0; b <= 9; b++) {
            for (var c = 0; c <= 9; c++) {
                for (var d = 0; d <= 9; d++) {
                    for (var e = 0; e <= 9; e++) {
                        for (var f = 0; f <= 9; f++) {
                            num = a*100000 + b*10000 + c*1000 + d*100 + e*10 + f;
                            numSum = Math.pow(a, 5) + Math.pow(b, 5) + Math.pow(c, 5) + Math.pow(d, 5) + Math.pow(e, 5) + Math.pow(f, 5);

                            if (num > 1 && num === numSum) {
                                sum += num;
                            }
                        }
                    }
                }
            }
        }
    }

    return sum;
}

function euler31() {
    var target = 200,
        ways = 0;

    for (var a = 0; a <= target; a += 200) {
        for (var b = a; b <= target; b += 100) {
            for (var c = b; c <= target; c += 50) {
                for (var d = c; d <= target; d += 20) {
                    for (var e = d; e <= target; e += 10) {
                        for (var f = e; f <= target; f += 5) {
                            for (var g = f; g <= target; g += 2) {
                                // fill with ones up to 200
                                ways++;
                            }
                        }
                    }
                }
            }
        }
    }

    return ways;
}

function euler32() {
    var sum = 0,
        products = [],
        product, stringed;

    function isPandigital(n) {
        var string = n.toString().split(''),
            digits = [];

        if (string.indexOf('0') !== -1) {
            return false;
        }

        for (var i = 0; i < string.length; i++) {
            var digit = string[i];
            if (digits.indexOf(digit) === -1) {
                digits.push(digit);
            }
        }

        return digits.length === string.length;
    }

    for (var i = 2; i < 100; i++) {
        var nBegin = (i > 9) ? 123 : 1234,
            nEnd = 10000 / i;

        for (var n = nBegin; n < nEnd; n++) {
            product = i * n;
            stringed = product.toString() + n.toString() + i.toString();

            if (isPandigital(stringed) && products.indexOf(product) === -1) {
                products.push(product);
            }
        }
    }

    for (var i = 0; i < products.length; i++) {
        sum += products[i];
    }

    return sum;
}

function euler33() {
    var numeratorProduct = 1,
        denominatorProduct = 1;

    function gcd(a, b) {
        var x = (a > b) ? a : b,
            y = (a > b) ? b : a,
            temp;

        while (x % y != 0) {
            temp = x;
            x = y;
            y = temp % x;
        }

        return y;
    }

    for (var n = 10; n < 100; n++) {
        for (var d = n + 1; d < 100; d++) {
            var result = n / d,
                nArray = n.toString().split(''),
                dArray = d.toString().split(''),
                n0 = parseInt(nArray[0]),
                n1 = parseInt(nArray[1]),
                d0 = parseInt(dArray[0]),
                d1 = parseInt(dArray[1]);

            if ((result === n1 / d0 || result === n0 / d1) &&
                (
                    (n0 !== n1 && n0 !== d1 && n1 === d0) ||
                    (n0 !== n1 && n0 === d1 && n1 !== d0)
                ))
            {
                numeratorProduct *= n;
                denominatorProduct *= d;
            }
        }
    }

    denominatorProduct /= gcd(numeratorProduct, denominatorProduct);

    return denominatorProduct;
}

function euler34() {
    var result = 0,
        start = 3,
        end = factorial(9) * 7;

    function factorial(n) {
        var sum = 1;

        for (var i = 2; i <= n; i++) {
            sum *= i;
        }

        return sum;
    }

    for (var i = start; i <= end; i++) {
        var sum = 0,
            n = i;

        while (n > 0) {
            var digit = n % 10;
            n = parseInt(n / 10);
            sum += factorial(digit);
        }

        if (sum === i) {
            result += i;
        }
    }

    return result;
}

function euler35() {
    var limit = 1000000,
        primes = eratosthenes(limit);

    // sieve of Eratosthenes
    function eratosthenes(n) {
        var list = [],
            limit = Math.sqrt(n),
            primes = [];

        for (var i = 0; i < n; i++) {
            list.push(true);
        }

        for (var i = 2; i <= limit; i++) {
            if (list[i]) {
                for (var j = i * i; j < n; j += i) {
                    list[j] = false;
                }
            }
        }

        for (var i = 2; i < n; i++) {
            if (list[i]) {
                primes.push(i);
            }
        }

        return primes;
    }

    function isCircularPrime(n) {
        var nArray = n.toString().split('');

        for (var i = 0; i < nArray.length; i++) {
            nArray.push(nArray[0]);
            nArray.splice(0, 1);

            if (primes.indexOf(parseInt(nArray.join(''))) === -1) {
                return false;
            }
        }

        return true;
    }

    for (var i = 0; i < primes.length; i++) {
        var prime = primes[i];

        if (!isCircularPrime(prime)) {
            primes.splice(i, 1);
            i--;
        }
    }

    return primes.length;
}

function euler36() {
    var limit = 1000000,
        palindromes = 0;

    function reverseString(s) {
        return s.split('').reverse().join('');
    }

    for (var i = 1; i < limit; i++) {
        var string = i.toString();
        if (string == reverseString(string)) {
            var base2 = i.toString(2);
            if (base2 == reverseString(base2)) {
                palindromes += i;
            }
        }
    }

    return palindromes;
}

function euler37() {
    var limit = 1000000,
        primes = eratosthenes(limit),
        truncatablePrimes = 0,
        sum = 0;

    // sieve of Eratosthenes
    function eratosthenes(n) {
        var list = [],
            limit = Math.sqrt(n),
            primes = [];

        for (var i = 0; i < n; i++) {
            list.push(true);
        }

        for (var i = 2; i <= limit; i++) {
            if (list[i]) {
                for (var j = i * i; j < n; j += i) {
                    list[j] = false;
                }
            }
        }

        for (var i = 2; i < n; i++) {
            if (list[i]) {
                primes.push(i);
            }
        }

        return primes;
    }

    for (var i = 0; i < primes.length; i++) {
        var array = primes[i].toString().split('');
        
        if (array.length === 1) {
            continue;
        }

        var isTruncatable = true,
            primeArrayLR = array.slice(0),
            primeArrayRL = array.slice(0);
        for (var j = 0; j < array.length - 1; j++) {
            primeArrayLR.splice(0, 1);
            primeArrayRL.splice(primeArrayRL.length - 1, 1);

            if (primes.indexOf(parseInt(primeArrayLR.join(''))) === -1 ||
                primes.indexOf(parseInt(primeArrayRL.join(''))) === -1) {
                isTruncatable = false;
                break;
            }
        }

        if (isTruncatable) {
            truncatablePrimes++;
            sum += primes[i];

            if (truncatablePrimes === 11) {
                break;
            }
        }
    }

    return sum;
}

function euler38() {
    var largest = '';

    function isPandigital(n) {
        var string = n.toString().split(''),
            digits = [];

        if (string.indexOf('0') !== -1) {
            return false;
        }

        for (var i = 0; i < string.length; i++) {
            var digit = string[i];
            if (digits.indexOf(digit) === -1) {
                digits.push(digit);
            }
        }

        return digits.length === string.length;
    }

    for (var i = 9876; i > 0; i--) {
        largest = '' + i + (i * 2);

        if (isPandigital(largest)) {
            break;
        }
    }

    return largest;
}

function euler39() {
    var pMax = 0,
        pSols = 0;

    for (var p = 1; p <= 1000; p++) {
        var a = 1,
            b = 2,
            sols = 0;

        while (2*a < p && b > a) {
            b = p * ((p - 2*a) / (2 * (p - a)));

            if (b % 1 === 0) {
                sols++;
            }

            a++;
        }

        if (sols > pSols) {
            pMax = p;
            pSols = sols;
        }
    }

    return pMax;
}

function euler40() {
    var product = 1;

    function D(n) {
        var i = 1;

        while (n > i.toString().length) {
            n -= i.toString().length;
            i++;
        }

        return i.toString()[n-1];
    }

    for (var n = 1; n <= 1000000; n *= 10) {
        product *= D(n);
    }

    return product;
}

function euler41() {
    var numbers = [1,2,3,4,5,6,7,8,9],
        primes = [],
        prime = 0;

    function isPandigital(n) {
        var string = n.toString().split(''),
            digits = [];

        if (string.indexOf('0') !== -1) {
            return false;
        }

        for (var i = 0; i < string.length; i++) {
            var digit = string[i];
            if (digits.indexOf(digit) === -1 && digit <= string.length) {
                digits.push(digit);
            }
        }

        return digits.length === string.length;
    }

    // sieve of Eratosthenes
    function eratosthenes(n) {
        var list = [],
            limit = Math.sqrt(n),
            primes = [];

        for (var i = 0; i < n; i++) {
            list.push(true);
        }

        for (var i = 2; i <= limit; i++) {
            if (list[i]) {
                for (var j = i * i; j < n; j += i) {
                    list[j] = false;
                }
            }
        }

        for (var i = 2; i < n; i++) {
            if (list[i]) {
                primes.push(i);
            }
        }

        return primes;
    }

    // find biggest pandigital number not divisible by 3
    while (numbers.length > 1) {
        var sum = 0;

        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        if ((sum / 3) % 1 != 0) {
            var num = parseInt(numbers.reverse().join(''));
            primes = eratosthenes(num);
            break;
        }

        numbers = numbers.slice(0, numbers.length-1);
    }

    // find the biggest pandigital prime
    for (var i = primes.length - 1; i >= 0; i--) {
        if (isPandigital(primes[i])) {
            prime = primes[i];
            break;
        }
    }

    return prime;
}

function euler42() {
    var words = ["A","ABILITY","ABLE","ABOUT","ABOVE","ABSENCE","ABSOLUTELY","ACADEMIC","ACCEPT","ACCESS","ACCIDENT","ACCOMPANY","ACCORDING","ACCOUNT","ACHIEVE","ACHIEVEMENT","ACID","ACQUIRE","ACROSS","ACT","ACTION","ACTIVE","ACTIVITY","ACTUAL","ACTUALLY","ADD","ADDITION","ADDITIONAL","ADDRESS","ADMINISTRATION","ADMIT","ADOPT","ADULT","ADVANCE","ADVANTAGE","ADVICE","ADVISE","AFFAIR","AFFECT","AFFORD","AFRAID","AFTER","AFTERNOON","AFTERWARDS","AGAIN","AGAINST","AGE","AGENCY","AGENT","AGO","AGREE","AGREEMENT","AHEAD","AID","AIM","AIR","AIRCRAFT","ALL","ALLOW","ALMOST","ALONE","ALONG","ALREADY","ALRIGHT","ALSO","ALTERNATIVE","ALTHOUGH","ALWAYS","AMONG","AMONGST","AMOUNT","AN","ANALYSIS","ANCIENT","AND","ANIMAL","ANNOUNCE","ANNUAL","ANOTHER","ANSWER","ANY","ANYBODY","ANYONE","ANYTHING","ANYWAY","APART","APPARENT","APPARENTLY","APPEAL","APPEAR","APPEARANCE","APPLICATION","APPLY","APPOINT","APPOINTMENT","APPROACH","APPROPRIATE","APPROVE","AREA","ARGUE","ARGUMENT","ARISE","ARM","ARMY","AROUND","ARRANGE","ARRANGEMENT","ARRIVE","ART","ARTICLE","ARTIST","AS","ASK","ASPECT","ASSEMBLY","ASSESS","ASSESSMENT","ASSET","ASSOCIATE","ASSOCIATION","ASSUME","ASSUMPTION","AT","ATMOSPHERE","ATTACH","ATTACK","ATTEMPT","ATTEND","ATTENTION","ATTITUDE","ATTRACT","ATTRACTIVE","AUDIENCE","AUTHOR","AUTHORITY","AVAILABLE","AVERAGE","AVOID","AWARD","AWARE","AWAY","AYE","BABY","BACK","BACKGROUND","BAD","BAG","BALANCE","BALL","BAND","BANK","BAR","BASE","BASIC","BASIS","BATTLE","BE","BEAR","BEAT","BEAUTIFUL","BECAUSE","BECOME","BED","BEDROOM","BEFORE","BEGIN","BEGINNING","BEHAVIOUR","BEHIND","BELIEF","BELIEVE","BELONG","BELOW","BENEATH","BENEFIT","BESIDE","BEST","BETTER","BETWEEN","BEYOND","BIG","BILL","BIND","BIRD","BIRTH","BIT","BLACK","BLOCK","BLOOD","BLOODY","BLOW","BLUE","BOARD","BOAT","BODY","BONE","BOOK","BORDER","BOTH","BOTTLE","BOTTOM","BOX","BOY","BRAIN","BRANCH","BREAK","BREATH","BRIDGE","BRIEF","BRIGHT","BRING","BROAD","BROTHER","BUDGET","BUILD","BUILDING","BURN","BUS","BUSINESS","BUSY","BUT","BUY","BY","CABINET","CALL","CAMPAIGN","CAN","CANDIDATE","CAPABLE","CAPACITY","CAPITAL","CAR","CARD","CARE","CAREER","CAREFUL","CAREFULLY","CARRY","CASE","CASH","CAT","CATCH","CATEGORY","CAUSE","CELL","CENTRAL","CENTRE","CENTURY","CERTAIN","CERTAINLY","CHAIN","CHAIR","CHAIRMAN","CHALLENGE","CHANCE","CHANGE","CHANNEL","CHAPTER","CHARACTER","CHARACTERISTIC","CHARGE","CHEAP","CHECK","CHEMICAL","CHIEF","CHILD","CHOICE","CHOOSE","CHURCH","CIRCLE","CIRCUMSTANCE","CITIZEN","CITY","CIVIL","CLAIM","CLASS","CLEAN","CLEAR","CLEARLY","CLIENT","CLIMB","CLOSE","CLOSELY","CLOTHES","CLUB","COAL","CODE","COFFEE","COLD","COLLEAGUE","COLLECT","COLLECTION","COLLEGE","COLOUR","COMBINATION","COMBINE","COME","COMMENT","COMMERCIAL","COMMISSION","COMMIT","COMMITMENT","COMMITTEE","COMMON","COMMUNICATION","COMMUNITY","COMPANY","COMPARE","COMPARISON","COMPETITION","COMPLETE","COMPLETELY","COMPLEX","COMPONENT","COMPUTER","CONCENTRATE","CONCENTRATION","CONCEPT","CONCERN","CONCERNED","CONCLUDE","CONCLUSION","CONDITION","CONDUCT","CONFERENCE","CONFIDENCE","CONFIRM","CONFLICT","CONGRESS","CONNECT","CONNECTION","CONSEQUENCE","CONSERVATIVE","CONSIDER","CONSIDERABLE","CONSIDERATION","CONSIST","CONSTANT","CONSTRUCTION","CONSUMER","CONTACT","CONTAIN","CONTENT","CONTEXT","CONTINUE","CONTRACT","CONTRAST","CONTRIBUTE","CONTRIBUTION","CONTROL","CONVENTION","CONVERSATION","COPY","CORNER","CORPORATE","CORRECT","COS","COST","COULD","COUNCIL","COUNT","COUNTRY","COUNTY","COUPLE","COURSE","COURT","COVER","CREATE","CREATION","CREDIT","CRIME","CRIMINAL","CRISIS","CRITERION","CRITICAL","CRITICISM","CROSS","CROWD","CRY","CULTURAL","CULTURE","CUP","CURRENT","CURRENTLY","CURRICULUM","CUSTOMER","CUT","DAMAGE","DANGER","DANGEROUS","DARK","DATA","DATE","DAUGHTER","DAY","DEAD","DEAL","DEATH","DEBATE","DEBT","DECADE","DECIDE","DECISION","DECLARE","DEEP","DEFENCE","DEFENDANT","DEFINE","DEFINITION","DEGREE","DELIVER","DEMAND","DEMOCRATIC","DEMONSTRATE","DENY","DEPARTMENT","DEPEND","DEPUTY","DERIVE","DESCRIBE","DESCRIPTION","DESIGN","DESIRE","DESK","DESPITE","DESTROY","DETAIL","DETAILED","DETERMINE","DEVELOP","DEVELOPMENT","DEVICE","DIE","DIFFERENCE","DIFFERENT","DIFFICULT","DIFFICULTY","DINNER","DIRECT","DIRECTION","DIRECTLY","DIRECTOR","DISAPPEAR","DISCIPLINE","DISCOVER","DISCUSS","DISCUSSION","DISEASE","DISPLAY","DISTANCE","DISTINCTION","DISTRIBUTION","DISTRICT","DIVIDE","DIVISION","DO","DOCTOR","DOCUMENT","DOG","DOMESTIC","DOOR","DOUBLE","DOUBT","DOWN","DRAW","DRAWING","DREAM","DRESS","DRINK","DRIVE","DRIVER","DROP","DRUG","DRY","DUE","DURING","DUTY","EACH","EAR","EARLY","EARN","EARTH","EASILY","EAST","EASY","EAT","ECONOMIC","ECONOMY","EDGE","EDITOR","EDUCATION","EDUCATIONAL","EFFECT","EFFECTIVE","EFFECTIVELY","EFFORT","EGG","EITHER","ELDERLY","ELECTION","ELEMENT","ELSE","ELSEWHERE","EMERGE","EMPHASIS","EMPLOY","EMPLOYEE","EMPLOYER","EMPLOYMENT","EMPTY","ENABLE","ENCOURAGE","END","ENEMY","ENERGY","ENGINE","ENGINEERING","ENJOY","ENOUGH","ENSURE","ENTER","ENTERPRISE","ENTIRE","ENTIRELY","ENTITLE","ENTRY","ENVIRONMENT","ENVIRONMENTAL","EQUAL","EQUALLY","EQUIPMENT","ERROR","ESCAPE","ESPECIALLY","ESSENTIAL","ESTABLISH","ESTABLISHMENT","ESTATE","ESTIMATE","EVEN","EVENING","EVENT","EVENTUALLY","EVER","EVERY","EVERYBODY","EVERYONE","EVERYTHING","EVIDENCE","EXACTLY","EXAMINATION","EXAMINE","EXAMPLE","EXCELLENT","EXCEPT","EXCHANGE","EXECUTIVE","EXERCISE","EXHIBITION","EXIST","EXISTENCE","EXISTING","EXPECT","EXPECTATION","EXPENDITURE","EXPENSE","EXPENSIVE","EXPERIENCE","EXPERIMENT","EXPERT","EXPLAIN","EXPLANATION","EXPLORE","EXPRESS","EXPRESSION","EXTEND","EXTENT","EXTERNAL","EXTRA","EXTREMELY","EYE","FACE","FACILITY","FACT","FACTOR","FACTORY","FAIL","FAILURE","FAIR","FAIRLY","FAITH","FALL","FAMILIAR","FAMILY","FAMOUS","FAR","FARM","FARMER","FASHION","FAST","FATHER","FAVOUR","FEAR","FEATURE","FEE","FEEL","FEELING","FEMALE","FEW","FIELD","FIGHT","FIGURE","FILE","FILL","FILM","FINAL","FINALLY","FINANCE","FINANCIAL","FIND","FINDING","FINE","FINGER","FINISH","FIRE","FIRM","FIRST","FISH","FIT","FIX","FLAT","FLIGHT","FLOOR","FLOW","FLOWER","FLY","FOCUS","FOLLOW","FOLLOWING","FOOD","FOOT","FOOTBALL","FOR","FORCE","FOREIGN","FOREST","FORGET","FORM","FORMAL","FORMER","FORWARD","FOUNDATION","FREE","FREEDOM","FREQUENTLY","FRESH","FRIEND","FROM","FRONT","FRUIT","FUEL","FULL","FULLY","FUNCTION","FUND","FUNNY","FURTHER","FUTURE","GAIN","GAME","GARDEN","GAS","GATE","GATHER","GENERAL","GENERALLY","GENERATE","GENERATION","GENTLEMAN","GET","GIRL","GIVE","GLASS","GO","GOAL","GOD","GOLD","GOOD","GOVERNMENT","GRANT","GREAT","GREEN","GREY","GROUND","GROUP","GROW","GROWING","GROWTH","GUEST","GUIDE","GUN","HAIR","HALF","HALL","HAND","HANDLE","HANG","HAPPEN","HAPPY","HARD","HARDLY","HATE","HAVE","HE","HEAD","HEALTH","HEAR","HEART","HEAT","HEAVY","HELL","HELP","HENCE","HER","HERE","HERSELF","HIDE","HIGH","HIGHLY","HILL","HIM","HIMSELF","HIS","HISTORICAL","HISTORY","HIT","HOLD","HOLE","HOLIDAY","HOME","HOPE","HORSE","HOSPITAL","HOT","HOTEL","HOUR","HOUSE","HOUSEHOLD","HOUSING","HOW","HOWEVER","HUGE","HUMAN","HURT","HUSBAND","I","IDEA","IDENTIFY","IF","IGNORE","ILLUSTRATE","IMAGE","IMAGINE","IMMEDIATE","IMMEDIATELY","IMPACT","IMPLICATION","IMPLY","IMPORTANCE","IMPORTANT","IMPOSE","IMPOSSIBLE","IMPRESSION","IMPROVE","IMPROVEMENT","IN","INCIDENT","INCLUDE","INCLUDING","INCOME","INCREASE","INCREASED","INCREASINGLY","INDEED","INDEPENDENT","INDEX","INDICATE","INDIVIDUAL","INDUSTRIAL","INDUSTRY","INFLUENCE","INFORM","INFORMATION","INITIAL","INITIATIVE","INJURY","INSIDE","INSIST","INSTANCE","INSTEAD","INSTITUTE","INSTITUTION","INSTRUCTION","INSTRUMENT","INSURANCE","INTEND","INTENTION","INTEREST","INTERESTED","INTERESTING","INTERNAL","INTERNATIONAL","INTERPRETATION","INTERVIEW","INTO","INTRODUCE","INTRODUCTION","INVESTIGATE","INVESTIGATION","INVESTMENT","INVITE","INVOLVE","IRON","IS","ISLAND","ISSUE","IT","ITEM","ITS","ITSELF","JOB","JOIN","JOINT","JOURNEY","JUDGE","JUMP","JUST","JUSTICE","KEEP","KEY","KID","KILL","KIND","KING","KITCHEN","KNEE","KNOW","KNOWLEDGE","LABOUR","LACK","LADY","LAND","LANGUAGE","LARGE","LARGELY","LAST","LATE","LATER","LATTER","LAUGH","LAUNCH","LAW","LAWYER","LAY","LEAD","LEADER","LEADERSHIP","LEADING","LEAF","LEAGUE","LEAN","LEARN","LEAST","LEAVE","LEFT","LEG","LEGAL","LEGISLATION","LENGTH","LESS","LET","LETTER","LEVEL","LIABILITY","LIBERAL","LIBRARY","LIE","LIFE","LIFT","LIGHT","LIKE","LIKELY","LIMIT","LIMITED","LINE","LINK","LIP","LIST","LISTEN","LITERATURE","LITTLE","LIVE","LIVING","LOAN","LOCAL","LOCATION","LONG","LOOK","LORD","LOSE","LOSS","LOT","LOVE","LOVELY","LOW","LUNCH","MACHINE","MAGAZINE","MAIN","MAINLY","MAINTAIN","MAJOR","MAJORITY","MAKE","MALE","MAN","MANAGE","MANAGEMENT","MANAGER","MANNER","MANY","MAP","MARK","MARKET","MARRIAGE","MARRIED","MARRY","MASS","MASTER","MATCH","MATERIAL","MATTER","MAY","MAYBE","ME","MEAL","MEAN","MEANING","MEANS","MEANWHILE","MEASURE","MECHANISM","MEDIA","MEDICAL","MEET","MEETING","MEMBER","MEMBERSHIP","MEMORY","MENTAL","MENTION","MERELY","MESSAGE","METAL","METHOD","MIDDLE","MIGHT","MILE","MILITARY","MILK","MIND","MINE","MINISTER","MINISTRY","MINUTE","MISS","MISTAKE","MODEL","MODERN","MODULE","MOMENT","MONEY","MONTH","MORE","MORNING","MOST","MOTHER","MOTION","MOTOR","MOUNTAIN","MOUTH","MOVE","MOVEMENT","MUCH","MURDER","MUSEUM","MUSIC","MUST","MY","MYSELF","NAME","NARROW","NATION","NATIONAL","NATURAL","NATURE","NEAR","NEARLY","NECESSARILY","NECESSARY","NECK","NEED","NEGOTIATION","NEIGHBOUR","NEITHER","NETWORK","NEVER","NEVERTHELESS","NEW","NEWS","NEWSPAPER","NEXT","NICE","NIGHT","NO","NOBODY","NOD","NOISE","NONE","NOR","NORMAL","NORMALLY","NORTH","NORTHERN","NOSE","NOT","NOTE","NOTHING","NOTICE","NOTION","NOW","NUCLEAR","NUMBER","NURSE","OBJECT","OBJECTIVE","OBSERVATION","OBSERVE","OBTAIN","OBVIOUS","OBVIOUSLY","OCCASION","OCCUR","ODD","OF","OFF","OFFENCE","OFFER","OFFICE","OFFICER","OFFICIAL","OFTEN","OIL","OKAY","OLD","ON","ONCE","ONE","ONLY","ONTO","OPEN","OPERATE","OPERATION","OPINION","OPPORTUNITY","OPPOSITION","OPTION","OR","ORDER","ORDINARY","ORGANISATION","ORGANISE","ORGANIZATION","ORIGIN","ORIGINAL","OTHER","OTHERWISE","OUGHT","OUR","OURSELVES","OUT","OUTCOME","OUTPUT","OUTSIDE","OVER","OVERALL","OWN","OWNER","PACKAGE","PAGE","PAIN","PAINT","PAINTING","PAIR","PANEL","PAPER","PARENT","PARK","PARLIAMENT","PART","PARTICULAR","PARTICULARLY","PARTLY","PARTNER","PARTY","PASS","PASSAGE","PAST","PATH","PATIENT","PATTERN","PAY","PAYMENT","PEACE","PENSION","PEOPLE","PER","PERCENT","PERFECT","PERFORM","PERFORMANCE","PERHAPS","PERIOD","PERMANENT","PERSON","PERSONAL","PERSUADE","PHASE","PHONE","PHOTOGRAPH","PHYSICAL","PICK","PICTURE","PIECE","PLACE","PLAN","PLANNING","PLANT","PLASTIC","PLATE","PLAY","PLAYER","PLEASE","PLEASURE","PLENTY","PLUS","POCKET","POINT","POLICE","POLICY","POLITICAL","POLITICS","POOL","POOR","POPULAR","POPULATION","POSITION","POSITIVE","POSSIBILITY","POSSIBLE","POSSIBLY","POST","POTENTIAL","POUND","POWER","POWERFUL","PRACTICAL","PRACTICE","PREFER","PREPARE","PRESENCE","PRESENT","PRESIDENT","PRESS","PRESSURE","PRETTY","PREVENT","PREVIOUS","PREVIOUSLY","PRICE","PRIMARY","PRIME","PRINCIPLE","PRIORITY","PRISON","PRISONER","PRIVATE","PROBABLY","PROBLEM","PROCEDURE","PROCESS","PRODUCE","PRODUCT","PRODUCTION","PROFESSIONAL","PROFIT","PROGRAM","PROGRAMME","PROGRESS","PROJECT","PROMISE","PROMOTE","PROPER","PROPERLY","PROPERTY","PROPORTION","PROPOSE","PROPOSAL","PROSPECT","PROTECT","PROTECTION","PROVE","PROVIDE","PROVIDED","PROVISION","PUB","PUBLIC","PUBLICATION","PUBLISH","PULL","PUPIL","PURPOSE","PUSH","PUT","QUALITY","QUARTER","QUESTION","QUICK","QUICKLY","QUIET","QUITE","RACE","RADIO","RAILWAY","RAIN","RAISE","RANGE","RAPIDLY","RARE","RATE","RATHER","REACH","REACTION","READ","READER","READING","READY","REAL","REALISE","REALITY","REALIZE","REALLY","REASON","REASONABLE","RECALL","RECEIVE","RECENT","RECENTLY","RECOGNISE","RECOGNITION","RECOGNIZE","RECOMMEND","RECORD","RECOVER","RED","REDUCE","REDUCTION","REFER","REFERENCE","REFLECT","REFORM","REFUSE","REGARD","REGION","REGIONAL","REGULAR","REGULATION","REJECT","RELATE","RELATION","RELATIONSHIP","RELATIVE","RELATIVELY","RELEASE","RELEVANT","RELIEF","RELIGION","RELIGIOUS","RELY","REMAIN","REMEMBER","REMIND","REMOVE","REPEAT","REPLACE","REPLY","REPORT","REPRESENT","REPRESENTATION","REPRESENTATIVE","REQUEST","REQUIRE","REQUIREMENT","RESEARCH","RESOURCE","RESPECT","RESPOND","RESPONSE","RESPONSIBILITY","RESPONSIBLE","REST","RESTAURANT","RESULT","RETAIN","RETURN","REVEAL","REVENUE","REVIEW","REVOLUTION","RICH","RIDE","RIGHT","RING","RISE","RISK","RIVER","ROAD","ROCK","ROLE","ROLL","ROOF","ROOM","ROUND","ROUTE","ROW","ROYAL","RULE","RUN","RURAL","SAFE","SAFETY","SALE","SAME","SAMPLE","SATISFY","SAVE","SAY","SCALE","SCENE","SCHEME","SCHOOL","SCIENCE","SCIENTIFIC","SCIENTIST","SCORE","SCREEN","SEA","SEARCH","SEASON","SEAT","SECOND","SECONDARY","SECRETARY","SECTION","SECTOR","SECURE","SECURITY","SEE","SEEK","SEEM","SELECT","SELECTION","SELL","SEND","SENIOR","SENSE","SENTENCE","SEPARATE","SEQUENCE","SERIES","SERIOUS","SERIOUSLY","SERVANT","SERVE","SERVICE","SESSION","SET","SETTLE","SETTLEMENT","SEVERAL","SEVERE","SEX","SEXUAL","SHAKE","SHALL","SHAPE","SHARE","SHE","SHEET","SHIP","SHOE","SHOOT","SHOP","SHORT","SHOT","SHOULD","SHOULDER","SHOUT","SHOW","SHUT","SIDE","SIGHT","SIGN","SIGNAL","SIGNIFICANCE","SIGNIFICANT","SILENCE","SIMILAR","SIMPLE","SIMPLY","SINCE","SING","SINGLE","SIR","SISTER","SIT","SITE","SITUATION","SIZE","SKILL","SKIN","SKY","SLEEP","SLIGHTLY","SLIP","SLOW","SLOWLY","SMALL","SMILE","SO","SOCIAL","SOCIETY","SOFT","SOFTWARE","SOIL","SOLDIER","SOLICITOR","SOLUTION","SOME","SOMEBODY","SOMEONE","SOMETHING","SOMETIMES","SOMEWHAT","SOMEWHERE","SON","SONG","SOON","SORRY","SORT","SOUND","SOURCE","SOUTH","SOUTHERN","SPACE","SPEAK","SPEAKER","SPECIAL","SPECIES","SPECIFIC","SPEECH","SPEED","SPEND","SPIRIT","SPORT","SPOT","SPREAD","SPRING","STAFF","STAGE","STAND","STANDARD","STAR","START","STATE","STATEMENT","STATION","STATUS","STAY","STEAL","STEP","STICK","STILL","STOCK","STONE","STOP","STORE","STORY","STRAIGHT","STRANGE","STRATEGY","STREET","STRENGTH","STRIKE","STRONG","STRONGLY","STRUCTURE","STUDENT","STUDIO","STUDY","STUFF","STYLE","SUBJECT","SUBSTANTIAL","SUCCEED","SUCCESS","SUCCESSFUL","SUCH","SUDDENLY","SUFFER","SUFFICIENT","SUGGEST","SUGGESTION","SUITABLE","SUM","SUMMER","SUN","SUPPLY","SUPPORT","SUPPOSE","SURE","SURELY","SURFACE","SURPRISE","SURROUND","SURVEY","SURVIVE","SWITCH","SYSTEM","TABLE","TAKE","TALK","TALL","TAPE","TARGET","TASK","TAX","TEA","TEACH","TEACHER","TEACHING","TEAM","TEAR","TECHNICAL","TECHNIQUE","TECHNOLOGY","TELEPHONE","TELEVISION","TELL","TEMPERATURE","TEND","TERM","TERMS","TERRIBLE","TEST","TEXT","THAN","THANK","THANKS","THAT","THE","THEATRE","THEIR","THEM","THEME","THEMSELVES","THEN","THEORY","THERE","THEREFORE","THESE","THEY","THIN","THING","THINK","THIS","THOSE","THOUGH","THOUGHT","THREAT","THREATEN","THROUGH","THROUGHOUT","THROW","THUS","TICKET","TIME","TINY","TITLE","TO","TODAY","TOGETHER","TOMORROW","TONE","TONIGHT","TOO","TOOL","TOOTH","TOP","TOTAL","TOTALLY","TOUCH","TOUR","TOWARDS","TOWN","TRACK","TRADE","TRADITION","TRADITIONAL","TRAFFIC","TRAIN","TRAINING","TRANSFER","TRANSPORT","TRAVEL","TREAT","TREATMENT","TREATY","TREE","TREND","TRIAL","TRIP","TROOP","TROUBLE","TRUE","TRUST","TRUTH","TRY","TURN","TWICE","TYPE","TYPICAL","UNABLE","UNDER","UNDERSTAND","UNDERSTANDING","UNDERTAKE","UNEMPLOYMENT","UNFORTUNATELY","UNION","UNIT","UNITED","UNIVERSITY","UNLESS","UNLIKELY","UNTIL","UP","UPON","UPPER","URBAN","US","USE","USED","USEFUL","USER","USUAL","USUALLY","VALUE","VARIATION","VARIETY","VARIOUS","VARY","VAST","VEHICLE","VERSION","VERY","VIA","VICTIM","VICTORY","VIDEO","VIEW","VILLAGE","VIOLENCE","VISION","VISIT","VISITOR","VITAL","VOICE","VOLUME","VOTE","WAGE","WAIT","WALK","WALL","WANT","WAR","WARM","WARN","WASH","WATCH","WATER","WAVE","WAY","WE","WEAK","WEAPON","WEAR","WEATHER","WEEK","WEEKEND","WEIGHT","WELCOME","WELFARE","WELL","WEST","WESTERN","WHAT","WHATEVER","WHEN","WHERE","WHEREAS","WHETHER","WHICH","WHILE","WHILST","WHITE","WHO","WHOLE","WHOM","WHOSE","WHY","WIDE","WIDELY","WIFE","WILD","WILL","WIN","WIND","WINDOW","WINE","WING","WINNER","WINTER","WISH","WITH","WITHDRAW","WITHIN","WITHOUT","WOMAN","WONDER","WONDERFUL","WOOD","WORD","WORK","WORKER","WORKING","WORKS","WORLD","WORRY","WORTH","WOULD","WRITE","WRITER","WRITING","WRONG","YARD","YEAH","YEAR","YES","YESTERDAY","YET","YOU","YOUNG","YOUR","YOURSELF","YOUTH"],
        letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        triangularNumbers = triangularNumbers(limit()),
        triangleWords = 0;

    function limit() {
        var longest = 0;

        for (var i = 0; i < words.length; i++) {
            longest = Math.max(longest, words[i].length);
        }

        return longest * letters.length;
    }

    function triangularNumbers(limit) {
        var triNumbers = [],
            current = 0,
            i = 1;

        while (limit >= current) {
            current = (i / 2) * (i + 1);
            triNumbers.push(current);
            i++;
        }

        return triNumbers;
    }

    for (var i = 0; i < words.length; i++) {
        var list = words[i].toString().split(''),
            sum = 0;

        for (var j = 0; j < list.length; j++) {
            sum += letters.indexOf(list[j]) + 1;
        }

        if (triangularNumbers.indexOf(sum) !== -1) {
            triangleWords++;
        }
    }

    return triangleWords;
}

function euler43() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        divisors = [2, 3, 5, 7, 11, 13, 17],
        perms = 3628800, // 10!
        result = 0;

    function swap(i, j) {
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

    function hasProperty(n) {
        for (var i = 1; i <= divisors.length; i++) {
            var num = (100 * n[i]) + (10 * n[i + 1]) + n[i + 2];

            if (num % divisors[i - 1] !== 0) {
                return false;
            }
        }

        return true;
    }

    for (var i = 0; i < perms; i++) {
        var x, y;

        for (var j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] < numbers[j + 1]) {
                x = j;
            }
        }

        if (x >= 0) {
            for (var j = 0; j < numbers.length; j++) {
                if (numbers[x] < numbers[j]) {
                    y = j;
                }
            }

            swap(x, y);

            numbers = numbers.slice(0, x + 1).concat(numbers.slice(x + 1).reverse());
        }

        if (hasProperty(numbers)) {
            result += parseInt(numbers.join(''));
        }
    }

    return result;
}

function euler44() {
    var result = 0,
        i = 1;

    function pentagonalNumber(n) {
        return n * (3 * n -1) / 2;
    }

    function isPentagonalNumber(n) {
        var N = (Math.sqrt(24 * n + 1) + 1) / 6;
        return N % 1 === 0;
    }

    while (!result) {
        var x = pentagonalNumber(i);

        for (var j = 1; j < i; j++) {
            var y = pentagonalNumber(j);

            if (isPentagonalNumber(x + y)) {
                if (isPentagonalNumber(x - y)) {
                    result = x - y;
                }
            }
        }

        i++;
    }

    return result;
}

function euler45() {
    var result,
        hn = 144;

    function hexagonalNumber(n) {
        return n * (2 * n - 1);
    }

    function isPentagonalNumber(n) {
        var N = (Math.sqrt(24 * n + 1) + 1) / 6;
        return N % 1 === 0;
    }

    function isTriangularNumber(n) {
        var N = (Math.sqrt(8 * n + 1) - 1) / 2;
        return N % 1 === 0;
    }

    while (!result) {
        var hexNum = hexagonalNumber(hn);

        if (isPentagonalNumber(hexNum)) {
            if (isTriangularNumber(hexNum)) {
                result = hexNum;
            }
        }
        hn++;
    }

    return result;
}

function euler46() {
    var i = 33,
        result;

    function isPrime(n) {
        var sqrt = Math.sqrt(n);

        for (var i=2; i<=sqrt; i++) {
            if(n%i == 0) {
                return false;
            }
        }

        return true;
    }

    function conjecture(n) {
        var twiceSquare = 2, // 2 * Math.pow(1, 2)
            j = 1;

        while (twiceSquare < n) {
            if (isPrime(n - twiceSquare)) {
                return true;
            }

            j++;
            twiceSquare = 2 * Math.pow(j, 2);
        }

        return false;
    }

    while (!result) {
        if (isPrime(i)) {
            i += 2;
            continue;
        }

        if (!conjecture(i)) {
            result = i;
        }

        i += 2;
    }

    return result;
}

function euler47() {
    var consecutive = [],
        first = 0,
        i = 2;

    function isPrime(n) {
        var sqrt = Math.sqrt(n);

        if (n % 1) return false;

        for (var i=2; i<=sqrt; i++) {
            if(n%i == 0) {
                return false;
            }
        }

        return true;
    }

    function primeFactors(n) {
        var factors = {},
            x = n,
            i = 2;

        while (true) {
            if (isPrime(x)) {
                if (factors[x]) {
                    factors[x]++;
                }
                else {
                    factors[x] = 1;
                }

                break;
            }

            if (isPrime(i) && (x / i) % 1 === 0) {
                x /= i;
                if (factors[i]) {
                    factors[i]++;
                }
                else {
                    factors[i] = 1;
                }

                i = 1;
            }

            i++;
        }

        return factors;
    }

    function isDistinct(factors) {
        for (var item in consecutive) {
            for (var key in item) {
                if (item.hasOwnProperty(key)) {
                    if (factors[key] && factors[key] === item[key]) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    while (consecutive.length < 4) {
        var factors = primeFactors(i);

        if (Object.keys(factors).length === 4) {
            if (consecutive > 0 && !isDistinct(factors)) {
                consecutive = [];
                first = 0;
            }
            if (first === 0) first = i;
            consecutive.push(factors);
        }
        else {
            consecutive = [];
            first = 0;
        }

        i++;
    }

    return first;
}

function euler48() {
    var max = 1000,
        sum = 0;

    for (var i = 1; i <= max; i++) {
        var tmp = bigint(i).pow(i).toString();
        sum = bigint(sum).add(tmp).toString();
    }

    return sum.slice(-10);
}

function euler49() {
    var max = 10000,
        primes = eratosthenes(max),
        result = [];

    // sieve of Eratosthenes
    function eratosthenes(n) {
        var list = [],
            limit = Math.sqrt(n),
            primes = [];

        for (var i = 0; i < n; i++) {
            list.push(true);
        }

        for (var i = 2; i <= limit; i++) {
            if (list[i]) {
                for (var j = i * i; j < n; j += i) {
                    list[j] = false;
                }
            }
        }

        for (var i = 2; i < n; i++) {
            if (list[i]) {
                primes.push(i);
            }
        }

        return primes;
    }

    function isPermutation(a, b) {
        var A = a.toString().split(''),
            B = b.toString().split('');

        if (a === b || A.length !== B.length) {
            return false;
        }

        var list = {};
        for (var i = 0; i < A.length; i++) {
            if (list[A[i]]) {
                list[A[i]]++;
            }
            else {
                list[A[i]] = 1;
            }
        }

        for (var i = 0; i < B.length; i++) {
            if (list[B[i]] && list[B[i]] > 0) {
                list[B[i]]--;
            }
            else {
                return false;
            }
        }

        return true;

    }

    for (var i = 0; i < primes.length; i++) {
        if (primes[i].toString().length !== 4) {
            continue;
        }

        for (var j = i+1; j < primes.length; j++) {
            var k = primes[j] + (primes[j] - primes[i]);

            if (k < max && primes.indexOf(k) !== -1) {
                if (isPermutation(primes[i], primes[j]) && isPermutation(primes[j], k)) {
                    result = '' + primes[i] + primes[j] + k;
                }
            }
        }
    }

    return result;
}

function euler50() {
    var limit = 1000000,
        primes = eratosthenes(limit),
        sums = [0],
        consecutive = 0,
        consecutivePrime = 0;

    // Sieve of Eratosthenes
    function eratosthenes(n) {
        var list = [],
            limit = Math.sqrt(n),
            primes = [];

        for (var i = 0; i < n; i++) {
            list.push(true);
        }

        for (var i = 2; i <= limit; i++) {
            if (list[i]) {
                for (var j = i * i; j < n; j += i) {
                    list[j] = false;
                }
            }
        }

        for (var i = 2; i < n; i++) {
            if (list[i]) {
                primes.push(i);
            }
        }

        return primes;
    }

    for (var i = 0; i < primes.length; i++) {
        sums[i + 1] = sums[i] + primes[i];
    }

    for (var i = 0; i < primes.length; i++) {
        for (var j = i - (consecutive + 1); j >= 0; j--) {
            var sum = sums[i] - sums[j];

            if (sum > limit) {
                break;
            }

            if (primes.indexOf(sum) !== -1) {
                consecutive = i - j;
                consecutivePrime = sum;
            }
        }
    }

    return consecutivePrime;
}

console.log("Result: " + euler50() + "\nTotal Time: " + (new Date() - start) + " ms");
