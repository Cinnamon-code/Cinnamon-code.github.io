export function formatDate(_date: string): string {
  const date = new Date(_date)
  const y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(),
      h = date.getHours(), mm = date.getMinutes()
  return `${ y }/${ m >= 10 ? m : `0${ m }` }/${ d >= 10 ? d : `0${ d }` }
      ${ h >= 10 ? h : `0${ h }` }:${ mm >= 10 ? mm : `0${ mm }` }`
}

export function transColor(color: string, shallow = true): string {
  if (color.startsWith('#')) color = color.substring(1)
  if (color.length !== 3 && color.length !== 6) return '#000'
  if (color.length === 3) color = `${ color[2] }${ color[2] }${ color[1] }${ color[1] }${ color[0] }${ color[0] }`
  let res = '#'
  for (let i = 2; i >= 0; i--) {
    let d = HtoD(color.substring(i * 2 + 1, i * 2)) + (shallow ? 45 : -45)
    if (d < 0) d = 0
    if (d > 255) d = 255
    res += DtoH(d)
  }
  return res
}

function HtoD(hexNum: string): number {
  const map: { [key: string]: number } = {
    A: 10, a: 10, B: 11, b: 11,
    C: 12, c: 12, D: 13, d: 13,
    E: 14, e: 14, F: 15, f: 15,
  }
  let num = 0
  for (let i = hexNum.length - 1; i >= 0; i--)
    num += 16 ** (hexNum.length - 1 - i) * (Number.isNaN(+hexNum[i]) ? map[hexNum[i]] : +hexNum[i])
  return num
}

function DtoH(decNum: number): string {
  const map: { [key: string]: string } = {
    10: 'A', 11: 'B', 12: 'C',
    13: 'D', 14: 'E', 15: 'F',
  }
  const h = []
  do {
    const t = decNum % 16
    h.push(t >= 10 ? map[t] : `${ t }`)
  } while ((decNum = Math.floor(decNum / 16)) !== 0)
  return h.reverse().join('')
}
