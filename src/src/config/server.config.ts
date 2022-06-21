const ip = 'westcoast.blue'

export default {
  SERVER_URL: `http${ process.env.NODE_ENV === 'development' ? '' : 's' }://${ process.env.NODE_ENV === 'development' ? 'localhost' : ip }:8000`,
}
