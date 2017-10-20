window.onload = printPrizes;

//1
let prizes = [
    ['Nintendo Switch', '$300'],
    ['PS4', '$200'],
    ['XBOX One', '$250'],
    ['Dinner with Anderson', '$924.04'],
    ['Pokemon game', '$50']
]

function printPrizes() {
    let str = '';
    for(var i = 0; i < prizes.length; i++) {
        str += '<p>' + prizes[i][1] + ' ' + prizes[i][0] + '</p>';
    }
    document.getElementById('items').innerHTML=str;
}

function randarray() {

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
    }
    output.innerHTML = str;
}

//3
let nyuHolidays = [
    ['942017', 'Labor Day'],
    ['952017', 'Fall 2017 classes begin'],
    ['1092017', 'Fall Recess'],
    ['11222017', 'Student Thanksgiving Recess'],
    ['11232017', 'Student Thanksgiving Recess'],
    ['11242017', 'Student Thanksgiving Recess'],
    ['12122017', 'Legislative Day'],
    ['12232017', 'Winter Recess begins'],
    ['1152018', 'MLK Jr. Birthday'],
    ['1222018', 'Spring 2018 classes begin'],
    ['2192018', 'Presidents\' Day'],
    ['3122018', 'Spring Recess'],
    ['3132018', 'Spring Recess'],
    ['3142018', 'Spring Recess'],
    ['3152018', 'Spring Recess'],
    ['3162018', 'Spring Recess'],
    ['5282018', 'Memorial Day'],
    ['6162018', 'Legislative Day for Mon classes'],
    ['742018', 'Independence Day'],
    ['7282018', 'Legislative Day for Wed classes'],
]

function chkHoliday() {
    let h = document.getElementById("d").value;
    let result = document.getElementById("holiday-result");

    let hdate = new Date(h);

    let hmonth = hdate.getMonth()+1;
    let hday = hdate.getUTCDate();
    let hyr = hdate.getFullYear();

    if(hday === 1) { hmonth++; }

    result.innerHTML = displayHoli(hmonth, hday, hyr);
}

function displayHoli(month, day, year) {
    if((month < 9 && year === 2017) || (month > 8 && year === 2018) || year > 2018 || year < 2017)
        return 'Invalid Date, has to be between Sept 1, 2017 and Aug 31, 2018';
    let date = ''+month+day+year;
    let holi = 'No holiday on this day';

    for(var i = 0; i < nyuHolidays.length; i++) {
        if(date === nyuHolidays[i][0]) {
            holi = nyuHolidays[i][1];
            break;
        }
    }
    return holi;
}