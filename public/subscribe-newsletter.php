<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'] ?? '';
    
    // Validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
        exit;
    }
    
    // Send confirmation email
    $confirmationHeaders = "MIME-Version: 1.0\r\n";
    $confirmationHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $confirmationHeaders .= "From: Imanti Newsletter <newsletter@imanti.co.ke>\r\n";
    
    $confirmationSubject = "Welcome to Imanti Newsletter";
    $confirmationMessage = "
        <html>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px;'>
                <h2 style='color: #003366;'>Welcome to Imanti Newsletter!</h2>
                <p>Thank you for subscribing to our newsletter. We're excited to have you join our community!</p>
                <p>You'll receive regular updates about:</p>
                <ul>
                    <li>Business insights and tips</li>
                    <li>Industry news and trends</li>
                    <li>Upcoming events and workshops</li>
                    <li>Special offers and announcements</li>
                </ul>
                <p>Best regards,<br>The Imanti Team</p>
            </div>
        </body>
        </html>
    ";
    
    // Send confirmation email to subscriber
    $confirmationSent = mail($email, $confirmationSubject, $confirmationMessage, $confirmationHeaders);
    
    // Notify admin about new subscriber
    $adminHeaders = "MIME-Version: 1.0\r\n";
    $adminHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $adminHeaders .= "From: Imanti Newsletter <newsletter@imanti.co.ke>\r\n";
    
    $adminSubject = "New Newsletter Subscription";
    $adminMessage = "
        <html>
        <body>
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Date:</strong> " . date('Y-m-d H:i:s') . "</p>
        </body>
        </html>
    ";
    
    $adminNotified = mail('info@imanti.co.ke', $adminSubject, $adminMessage, $adminHeaders);
    
    if ($confirmationSent && $adminNotified) {
        echo json_encode(['status' => 'success', 'message' => 'Successfully subscribed to newsletter']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to process subscription']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
}
?>