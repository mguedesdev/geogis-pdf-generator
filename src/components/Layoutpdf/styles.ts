import { StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Ubuntu',
  fonts: [
    { src: '/fonts/Ubuntu-Regular.ttf' },
    { src: '/fonts/Ubuntu-Bold.ttf', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    borderBottom: '1 solid #038bbb',
    flexDirection: 'row',
  },
  logo: {
    width: 120,
    height: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    color: '#038bbb',
  },
  paragraphView: {
    marginBottom: 10,
    width: '100%',
    display: 'flex',
  },
  paragraphText: {
    fontSize: 12,
    width: '100%',
    wordWrap: 'break-word',
    whiteSpace: 'pre-line',
    fontFamily: 'Ubuntu',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
});

export default styles;
