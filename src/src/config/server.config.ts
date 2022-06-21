const ip = 'westcoast.blue'

export default {
  SERVER_URL: `https://${ process.env.NODE_ENV === 'development' ? 'localhost' : ip }:8000`,
}
