Technology Stack:

    Node.js: The script is built using Node.js, a powerful JavaScript runtime environment that allows you to execute JavaScript code server-side.
    Nodemailer: A popular Node.js module used for sending emails. It provides a simple API for sending emails via SMTP.
    dotenv: A module used for loading environment variables from a .env file into process.env, making it easy to manage sensitive credentials.

How to Use:

    Setup Environment:
        Install Dependencies: Ensure you have Node.js installed. Then, install the necessary modules by running:

        bash

npm install nodemailer dotenv

Create a .env File: In the root directory of your project, create a file named .env with the following content:

plaintext

    GMAIL_USER=your-email@gmail.com
    GMAIL_PASS=your-app-password

    Replace your-email@gmail.com with your Gmail address and your-app-password with the app-specific password if using 2-step verification.

Prepare Email List:

    Create emailList.txt: This file should be placed in the root directory and contain one email address per line, like:

    plaintext

    recipient1@example.com
    recipient2@example.com

Write and Run the Script:

    Create a JavaScript File: Save the script to a file named sendEmails.js.
    Execute the Script: Run the script using Node.js:

    bash

        node sendEmails.js

        The script will read the email addresses from emailList.txt, send an email to each recipient, and log the results to the console.

Benefits:

    Simplicity and Flexibility:
        Easily send bulk emails using a simple script with minimal configuration.
        Supports HTML and plain text formats for email content, allowing for rich email formatting.

    Efficient Delivery:
        Uses Gmail's SMTP server for reliable email delivery.
        Logs detailed information about each email sent and any errors encountered.

    Customization:
        Easily customize the email content, subject, and recipient list by modifying the script and configuration files.

    Environment Management:
        Utilizes the dotenv package to securely manage sensitive credentials and configuration without hardcoding them into the script.

    Error Handling:
        Provides robust error handling to help diagnose and address issues with email delivery, such as authentication failures or invalid email addresses.

This setup allows for efficient and effective bulk email sending, making it a useful tool for various applications such as newsletters, notifications, or marketing campaigns.
