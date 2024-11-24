const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    textAlign: "center",
  },
  text: {
    fontWeight: 600,
    fontSize: 24,
  },
};

export default function HomePage() {
  return (
    <>
      <div style={styles.container}>
        <p style={styles.text}>Record daily water intake and track</p>
        <h2 style={styles.title}>Water consumption tracker</h2>
      </div>
    </>
  );
}
