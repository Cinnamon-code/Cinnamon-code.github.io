const ip = '101.43.133.108'

export default {
  SERVER_URL: `http://${ process.env.NODE_ENV === 'development' ? 'localhost' : ip }:8000`,
}
