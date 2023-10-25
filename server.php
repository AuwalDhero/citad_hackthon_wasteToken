<?php
// Enable CORS (Cross-Origin Resource Sharing) for local development.
// You might need to adjust this configuration for production.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read the JSON data sent by the client.
    $data = json_decode(file_get_contents("php://input"));

    // Check if the required fields are provided.
    if (isset($data->wasteType) && isset($data->location) && isset($data->description)) {
        // In a real-world application, you would typically save this report to a database.
        // Here, we're just sending a simple response.
        $response = ["message" => "Waste report submitted successfully."];
        http_response_code(200);
        echo json_encode($response);
    } else {
        $response = ["message" => "Invalid input. Please provide all required fields."];
        http_response_code(400);
        echo json_encode($response);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Invalid request method.";
}
?>
