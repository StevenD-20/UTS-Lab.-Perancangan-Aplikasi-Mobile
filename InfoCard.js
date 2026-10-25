import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === "selesai";

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          {
            backgroundColor: isSelesai ? "#DCFCE7" : "#FFEDD5",
          },
        ]}
      >
        <Text
          style={{
            color: isSelesai ? "#15803D" : "#C2410C",
            fontWeight: "bold",
          }}
        >
          {status}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#22396F",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
