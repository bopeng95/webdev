//1
function randarray() {
    let prizes = [
        ['Nintendo Switch', '$300'],
        ['PS4', '$200'],
        ['XBOX One', '$250'],
        ['Dinner with Anderson', '$924.04'],
        ['Pokemon game', '$50']
    ]

    let num = Math.floor(Math.random()*5);

    let user = document.getElementById("prize");

    user.innerHTML = 'YOU\'VE WON A ' + prizes[num][1] + ' ' + prizes[num][0] + '!!!';
}

//2
function bdays() {
    let fname = document.getElementById("1name").value;
    let fbday = document.getElementById("1bday").value;
    let sname = document.getElementById("2name").value;
    let sbday = document.getElementById("2bday").value;
    let output = document.getElementById("outputs");
    let fdate = new Date(fbday);
    let sdate = new Date(sbday);
    let str = '';

    let fmonth = fdate.getMonth()+1;
    let fday = fdate.getUTCDate();
    let fyr = fdate.getFullYear();
    let smonth = sdate.getMonth()+1;
    let sday = sdate.getUTCDate();
    let syr = sdate.getFullYear();

    if(fday === 1) { fmonth++; }
    if(sday === 1) { smonth++; }

    if(fname === '' || fbday === '' || sname === '' || sbday === '')
        str = 'Please enter every input correctly';
    else {
        str += fname + '\'s birthday is on ' + fbday + '<p></p>';
        str += sname + '\'s birthday is on ' + sbday + '<p></p>';
        if(fyr > syr) {
            str += fname + ' is younger than ' + sname + '!!';
        }
        else if(fyr < syr) {
            str += fname + ' is older than ' + sname + '!!';
        }
        else {
            if(fmonth > smonth) {
                str += fname + ' is younger than ' + sname + '!!';
            }
            else if(fmonth < smonth) {
                str += fname + ' is older than ' + sname + '!!';
            }
            else {
                if(fday > sday) {
                    str += fname + ' is younger than ' + sname + '!!';
                }
                else if(fday < sday) {
                    str += fname + ' is older than ' + sname + '!!';
                }
                else {
                    str += fname + ' and ' + sname + ' are the same age!!';
                }
            }
        }
        console.log('fdate: '+fmonth+'-'+fday+'-'+fyr+'\n');
        console.log('sdate: '+smonth+'-'+sday+'-'+syr);
    }

    output.innerHTML = str;
}

//3
