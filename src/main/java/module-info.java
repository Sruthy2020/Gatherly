module com.example.gatherly {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.gatherly to javafx.fxml;
    exports com.example.gatherly;
}