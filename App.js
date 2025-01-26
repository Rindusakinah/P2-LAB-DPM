import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Siapa presiden indonesia sekarang? = ....</Text>
      <View style={styles.boxContainer}>
        {/* Kotak 1 dengan warna hijau lembut */}
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.boxText}>Prabowo</Text>
        </View>
        {/* Kotak 2 dengan warna oranye lembut */}
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.boxText}>agus</Text>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, #fffbdf, #e3f9ff)', // Latar belakang gradasi cerah
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    color: '#333333', // Warna teks abu-abu gelap
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#aaa',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  box1: {
    backgroundColor: '#a0e7e5', // Warna solid hijau lembut
    shadowColor: '#76c7c5', // Bayangan hijau lebih gelap
  },
  box2: {
    backgroundColor: '#ffc478', // Warna solid oranye lembut
    shadowColor: '#d6a867', // Bayangan oranye lebih gelap
  },
  boxText: {
    fontSize: 20,
    color: '#ffffff', // Teks putih untuk kontras
    fontWeight: 'bold',
  },
});
