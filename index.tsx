import { useState } from "react";
import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import InfoCard from "../components/InfoCard";

const DAFTAR_MAHASISWA = [
  { id: "1", nama: "Alifia Putri", prodi: "Sistem Informasi" },
  { id: "2", nama: "Budi Santoso", prodi: "Teknologi Informasi" },
  { id: "3", nama: "Citra Dewi", prodi: "Sistem Informasi" },
  { id: "4", nama: "Dimas Anggara", prodi: "Teknik Informatika" },
  { id: "5", nama: "Eka Nur Safitri", prodi: "Sistem Informasi" },
];

export default function HomeScreen() {
  const [keyword, setKeyword] = useState("");

  const mahasiswaFiltered = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  const showDetail = (pesan: string) => {
    if (Platform.OS === "web") {
      window.alert(pesan);
    } else {
      Alert.alert("Detail Tugas", pesan);
    }
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      data={mahasiswaFiltered}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View>
          <Text style={styles.header}>UTS Mobile Computing</Text>

          <Text style={styles.sectionTitle}>InfoCard</Text>

          <InfoCard
            title="Membuat desain"
            status="selesai"
            onPress={() => showDetail("Tugas desain sudah selesai.")}
          />

          <InfoCard
            title="Membuat fitur pencarian"
            status="proses"
            onPress={() => showDetail("Tugas pencarian sedang dikerjakan.")}
          />

          <Text style={styles.sectionTitle}>Direktori Mahasiswa</Text>

          <TextInput
            style={styles.input}
            placeholder="Cari nama mahasiswa..."
            value={keyword}
            onChangeText={setKeyword}
            autoCapitalize="none"
          />
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.studentCard}>
          <Text style={styles.studentName}>{item.nama}</Text>

          <Text style={styles.studentProdi}>{item.prodi}</Text>
        </View>
      )}
      ListEmptyComponent={
        <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  content: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D4ED8",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 14,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 14,
  },
  studentCard: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  studentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
  },
  studentProdi: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },
  emptyText: {
    textAlign: "center",
    color: "#DC2626",
    marginTop: 20,
    fontSize: 16,
  },
});
