

interface DateFormatsProps {
  timestamp: number
  lang: 'en' | 'de' | 'tr'
}

interface IDateFormats {
  day01: string //08
  day02: number //8
  dayName: string //Monday
  month01: string //07
  month02: number //7
  monthName: string //January
  year: number //1989
  second: string //45
  minute: string //20
  hour: string //17
  isToday: boolean
  isYesterday: boolean
  isTomorrow: boolean
  isThisMonth: boolean
  isThisYear: boolean
  timeFormat01: string //15:46:20
  timeFormat02: string //15:46
  dateFormat01: string //7 January, 21:30
  dateFormat02: string //26/06/1989
  dateFormat03: string //7 January 2020 Monday, 21:30
  dateFormat04: string //7 Jan
  dateFormat05: string //7 January 2020
  dateFormat06: string //7 January 2020, 18:30
}

const months: any = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  de: [
    'Januar',
    'Februar',
    'Marsch',
    'April',
    'Dürfen',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  tr: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
}

const days: any = {
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  tr: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
  de: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
}

/**
 * @name DateFormats
 * @description - The Date Formats
 * @param {number} timestamp - Date's timestamp 
 * @param {string} lang 'en' | 'de' | 'tr' - Language key It has 3 language support
 * @example 
 * getDateFormats({ timestamp: new Date().getTime(), lang: "en" }).dateFormat01
 * @returns {IDateFormats} - The Date Formats retuns
 - day01: string // 08
 - day02: number // 8
 - dayName: string // Monday
 - month01: string // 07
 - month02: number // 7
 - monthName: string // January
 - year: number // 1989
 - second: string // 45
 - minute: string // 20
 - hour: string // 17
 - isToday: boolean
 - isYesterday: boolean
 - isTomorrow: boolean
 - isThisMonth: boolean
 - isThisYear: boolean
 - timeFormat01: string // 15:46:20
 - timeFormat02: string // 15:46
 - dateFormat01: string // 7 January, 21:30
 - dateFormat02: string // 26/06/1989
 - dateFormat03: string // 7 January 2020 Monday, 21:30
 - dateFormat04: string // 7 Jan
 - dateFormat05: string // 7 January 2020
 - dateFormat06: string // 7 January 2020, 18:30

 */

export const getDateFormats = ({ timestamp, lang }: DateFormatsProps): IDateFormats => {

  const date = new Date(timestamp)
  const day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear()

  const diffDays = new Date().getDate() - day,
    diffMonths = (new Date().getMonth() + 1) - month,
    diffYears = new Date().getFullYear() - year

  const _time = date.toTimeString().substring(0, 8)

  const obj: IDateFormats = {
    day01: day < 10 ? ("0" + day) : day.toString(), //08
    day02: day, //8
    dayName: days[lang][date.getDay() - 1], //Monday
    month01: month < 10 ? ("0" + month) : month.toString(), //07
    month02: month, //7
    monthName: months[lang][month - 1], //January
    year: year, //1989
    second: _time.split(':')[2], //45
    minute: _time.split(':')[1], //20
    hour: _time.split(':')[0], //17
    isToday: diffYears === 0 && diffDays === 0 && diffMonths === 0,
    isYesterday: diffYears === 0 && diffDays === 1,
    isTomorrow: diffYears === 0 && diffDays === -1,
    isThisMonth: diffYears === 0 && diffMonths === 0,
    isThisYear: diffYears === 0,
    timeFormat01: _time, //15:46:20
    timeFormat02: date.toTimeString().substring(0, 5), //15:46
    dateFormat01: '', //7 January, 21:30
    dateFormat02: '', // 26/06/1989
    dateFormat03: '', //7 January 2020 Monday, 21:30
    dateFormat04: '', //7 Ara
    dateFormat05: '', //7 January 2020
    dateFormat06: '' //7 January 2020, 18:30
  }

  obj.dateFormat01 = obj.day02 + ' ' + obj.monthName + ', ' + obj.timeFormat02
  obj.dateFormat02 = obj.day01 + '/' + obj.month01 + '/' + obj.year
  obj.dateFormat03 =
    obj.day02 +
    ' ' +
    obj.monthName +
    ' ' +
    obj.year +
    ' ' +
    (obj.dayName === undefined ? days[lang][6] : obj.dayName) +
    ', ' +
    obj.timeFormat02
  obj.dateFormat04 = obj.day02 + ' ' + obj.monthName?.substring(0, 3)
  obj.dateFormat05 = obj.day02 + ' ' + obj.monthName + ' ' + obj.year
  obj.dateFormat06 =
    obj.day02 +
    ' ' +
    obj.monthName +
    ' ' +
    obj.year +
    ', ' +
    obj.timeFormat02

  return obj
}
