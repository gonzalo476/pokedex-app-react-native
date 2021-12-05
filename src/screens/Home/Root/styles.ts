import {StyleSheet} from 'react-native'

import {Colors, width} from '../../../components'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  logo: {
    height: 30,
    width: 90,
  },
  avatar: {
    height: 27,
    width: 27,
  },
  searchbar: {
    flexShrink: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  qrButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#979797',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10,
  },
  qrIcon: {
    width: 20,
    height: 20,
  },
  categoryIcon: {
    width: 15,
    height: 15,
  },
  categories: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  grid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: width / 2 - 16,
    height: 80,
    padding: 4,
  },
  itemFilled: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
})
