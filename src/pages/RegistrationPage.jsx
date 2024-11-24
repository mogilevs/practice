import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default function RegistrationPage() {
    return (
        <div style={styles.container}>
            <h2>Welcome to the registration form!</h2>
            <RegistrationForm/>
        </div>
    )
};
