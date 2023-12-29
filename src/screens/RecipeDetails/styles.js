import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        flex: 1
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(217,217,217,0.5)',
        padding: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginVertical: 4,
    },
    key: {
        fontSize: 12,
        color: colors.black,
        textTransform: 'capitalize'
    },
    value: {
        fontSize: 12,
        color: colors.lightGrey2,
    }
})